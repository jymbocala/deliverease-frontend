import { useDropzone } from "react-dropzone";
import { useState, useEffect } from "react";

const ImageUpload = ({ setImageURL }) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    // Accept only image files.
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      setUploading(true);

      // Upload to AWS S3
      const file = acceptedFiles[0];
      if (file.size > 10 * 1024 * 1024) {
        // if the file is bigger than 10MB
        alert("File size cannot exceed 10MB, please upload a smaller file.");

        setUploading(false);
        return;
      }

      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch(
          "https://deliverease-api.onrender.com/s3/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error("Failed to upload file");
        }

        const data = await response.json();
        setUploadedFile(data.fileKey);

        // Fetch the URL of the uploaded image
        const urlResponse = await fetch(
          `https://deliverease-api.onrender.com/s3/url/${data.fileKey}`
        );
        const urlData = await urlResponse.json();
        setImageUrl(urlData.url);
        setImageURL(urlData.url);
      } catch (error) {
        console.error("Error uploading file to S3:", error);
      } finally {
        setUploading(false);
      }
    },
  });

  return (
    <div className="flex flex-col w-full mt-4">
      {!imageUrl && !uploading && (
        <div
          {...getRootProps()}
          className="border-2 border-dashed border-gray-300 rounded-md p-8 cursor-pointer"
        >
          <input {...getInputProps()} />
          <p className="text-gray-500 text-center">
            Drop image here, or click to select an image
          </p>
        </div>
      )}
      {uploading && (
        <span className="flex loading loading-spinner text-accent loading-lg self-center m-6"></span>
      )}

      {imageUrl && (
        <div className="my-6">
          <p className="mb-4">Uploaded Image:</p>
          <img src={imageUrl} alt="Uploaded" className="drop-shadow-md" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;

import { useDropzone } from "react-dropzone";
import { useState, useEffect } from "react";

const ImageUpload = ({ setImageURL }) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    // Accept only image files.
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      // Upload to AWS S3
      const file = acceptedFiles[0];
      if (file.size > 10 * 1024 * 1024) {
        // if the file is bigger than 10MB
        alert("File size cannot exceed 10MB, please upload a smaller file.");
        return;
      }

      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("https://deliverease-api.onrender.com/s3/upload", {
          method: "POST",
          body: formData,
        });

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
      }
    },
  });

  return (
    <div>
      {!imageUrl && (
        <div
          {...getRootProps()}
          className="border-2 border-dashed border-gray-300 rounded-md p-8"
        >
          <input {...getInputProps()} />
          <p className="text-gray-500 text-center">
            Drop image here, or click to select an image
          </p>
        </div>
      )}

      {imageUrl && (
        <div className="mt-4">
          <p className="font-semibold">Uploaded File:</p>
          <img src={imageUrl} alt="Uploaded" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;

import { useDropzone } from "react-dropzone";

const ImageUpload = () => {
  const { getRootProps, getInputProps } = useDropzone({
    // Accept only image files when dropping files into the dropzone
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
    },
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 rounded-md p-8"
      >
        <input {...getInputProps()} />
        <p className="text-gray-500 text-center">
          Drop image here, or click to select an image
        </p>
      </div>
    </div>
  );
}

export default ImageUpload;
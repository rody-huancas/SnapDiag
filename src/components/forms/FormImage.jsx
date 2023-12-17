import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { API_KEY, UPLOAD_PRESET } from "../../helpers/constants";
import { uploadImageCloudinary } from "../../api/cloudinary";

export const FormImage = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [acceptedFiles, setAcceptedFiles] = useState([]);

  const onDrop = useCallback((files) => {
    setAcceptedFiles(files);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("api_key", API_KEY);

    try {
      await uploadImageCloudinary(formData);
      setSuccessMessage("Imagen subida correctamente");
    } catch (error) {
      console.error("Error al subir la imagen a Cloudinary", error);
      setErrorMessage("Error al subir la imagen. Inténtalo de nuevo.");
    } finally {
      setTimeout(() => {
        setErrorMessage("");
        setSuccessMessage("");
      }, 4000);
      setLoading(false);
      setAcceptedFiles([]);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center justify-center gap-10"
      >
        <div
          {...getRootProps()}
          className="bg-white w-1/2 h-48 rounded-xl shadow-lg border-2 border-gray-600 p-10 border-dashed flex justify-center items-center cursor-pointer text-center"
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-md text-gray-600 font-medium">
              Suelta los archivos aquí ...
            </p>
          ) : (
            <p className="text-md text-gray-600 font-medium">
              Arrastre y suelte su imagen aquí, o haga clic para seleccionar una
              imagen
            </p>
          )}
        </div>

        {acceptedFiles[0] && (
          <div className="flex flex-col gap-5">
            <img
              src={URL.createObjectURL(acceptedFiles[0])}
              alt=""
              className="w-96 h-60 rounded-xl shadow-lg"
            />
            {loading ? (
              <p>Cargando...</p>
            ) : (
              <>
                <button
                  className="bg-indigo-600 text-white px-20 py-4 uppercase font-bold text-xl rounded-md"
                  disabled={loading}
                >
                  Enviar
                </button>
              </>
            )}
          </div>
        )}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
      </form>
    </>
  );
};

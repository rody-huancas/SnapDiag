import clienteAxios from "./config"

const URL_CLOUDINARY = import.meta.env.VITE_URL_CLOUDINARY;
const CLOUD_NAME = import.meta.env.VITE_COUD_NAME_CLOUDINARY;

export const uploadImageCloudinary = async (formData) => {
    try {
        const { data } = await clienteAxios.post(`${URL_CLOUDINARY}${CLOUD_NAME}/image/upload`, formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            }
        );
        return data;
    } catch (error) {
        console.log(error);
    }
}
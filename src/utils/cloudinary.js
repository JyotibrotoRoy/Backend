import {v2 as cloudinary} from cloudinary;
import fs from fs;

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        //otherwise upload it
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        console.log("File has been uploaded on cloudinary",response);
        return respponse;
        
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the loacally saved temporary file as the operation got failed
        return null;
    }
}

export {uploadOnCloudinary}
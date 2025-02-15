import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

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
        //console.log("File has been uploaded on cloudinary",response);
        fs.unlinkSync(localFilePath)
        return response;
        
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the loacally saved temporary file as the operation got failed
        return null;
    }
}

const deleteFromCloudinary = async (imageUrl) => {

    try {
        const imageID = imageUrl.split('/').pop().split('.')[0];
    
        const result = await cloudinary.uploader.destroy(imageUrl)
        return result;
    } catch (error) {
        console.log("Error while deleting image",error);
        return null;
    }

}

export {uploadOnCloudinary, deleteFromCloudinary}
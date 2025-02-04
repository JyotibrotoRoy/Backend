import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from '../utils/apiResponse.js';

const registerUser = asyncHandler( async (req, res) => {
    const {username, email, fullname, password} = req.body
    console.log("Email: ", email);

    if (
        [username, email, fullname, password].some((field) => field?.trim() ==="")
    ) {
        throw new ApiError(400, "all fields are required")
    }
    const existingUser= User.findOne({
        $or: [{ email }, { username }]
     })

    if( existingUser ) {
        throw new ApiError(409, "User with email or username already exists")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if(!avatarLocalPath)  {
        throw new ApiError(400, "Avatar is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);
    
    if(!avatar) {
        throw new ApiError = (400, "Avatar is required")
    }

    const user = await User.create({
        fullname,
        username: username.toLowercase(),
        email,
        password,
        avatar: avatar.url,
        coverImage: coverImage?.url || ""
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    
    if(!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully")
    )
})

export {registerUser}
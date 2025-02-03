import dotenv from "dotenv";
import connectDb from "./db/index.js"
import {app} from "./app.js"

dotenv.config({
    path: './env'
})

connectDb()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("MONGO DB connection failed!!!", error)
})












/*
import express from "express";
const app = express();

(async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("ERROR", (error) => {
        console.log("ERROR", error);
        throw error
       })

       app.listen(process.env.PORT, () => {
        console.log(`server is listening on port ${process.env.PORT}`);
       })

    } catch (error) {
       console.error("ERROR:", error)
       throw error 
    }
})()
*/
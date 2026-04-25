const multer=require("multer")
const cloud=require("cloudinary").v2
const dotenv=require("dotenv")
dotenv.config()
const storage=multer.diskStorage({
    filename:(res,file,cb)=>{
        const sanitizedName = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_');
        cb(null,`${Date.now()}-${sanitizedName}`)
    },
})
cloud.config({
    cloud_name:process.env.cloud_name,
    api_key:process.env.api_key,
    api_secret:process.env.api_secret
})
const upload=multer({storage:storage})
module.exports={upload,cloud}
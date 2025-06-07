const express=require("express")
const { signUp, createNewAdmin, login, getAllUsers, uploadImage, deleteImage } = require("../controllers/userController")
const { upload } = require("../multer/multer")
const userRouter=express.Router()
const auth=require("../middlewares/middleware")

userRouter
.post("/image",upload.single('image'),uploadImage)
.delete("/image",auth,deleteImage)
// .post("/signup",signUp) ->>  It is removed because otherwise anybody can become admin
.post("/newuser",auth,createNewAdmin)
.post("/login",login)
.get("/Allusers",auth,getAllUsers)

module.exports=userRouter
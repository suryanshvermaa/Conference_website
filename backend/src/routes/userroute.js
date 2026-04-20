const express=require("express")
const { signUp, createNewAdmin, login, getAllUsers, uploadImage, deleteImage } = require("../controllers/userController.js")
const { upload } = require("../multer/multer")
const userRouter=express.Router()
const auth=require("../middlewares/middleware")
const middlewares = require("../middlewares/ratelimiter");
const { body } = require('express-validator');

userRouter
.post("/image",upload.single('image'),uploadImage)
.delete("/image",auth,deleteImage)
// .post("/signup",signUp) ->>  It is removed because otherwise anybody can become admin
.post("/newuser",auth, [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('pic').notEmpty().withMessage('Profile picture is required')
],createNewAdmin)
.post("/login",middlewares.loginLimiter, [
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').notEmpty().withMessage('Password is required')
],login)
.get("/Allusers",auth,getAllUsers)

module.exports=userRouter
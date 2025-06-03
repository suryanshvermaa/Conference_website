const express = require('express');
const {upload}=require("../multer/multer")
const { uploadPhoto, getAllPhotos, deletePhoto } = require('../controllers/photoController');
const auth = require("../middlewares/middleware")
const photoGalleryRouter = express.Router();

photoGalleryRouter
.post('/upload',auth ,upload.single('image'), uploadPhoto)
.delete('/delete/:id',auth, deletePhoto)
.get('/all', getAllPhotos)

module.exports = photoGalleryRouter;

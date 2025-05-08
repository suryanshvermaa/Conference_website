const express = require('express');
const {upload}=require("../multer/multer")
const { uploadPhoto, getAllPhotos, deletePhoto } = require('../controllers/photoController');
const auth = require("../middlewares/middleware")
const router = express.Router();

router.post('/upload',auth ,upload.single('image'), uploadPhoto);
router.post('/delete',auth, deletePhoto);
router.get('/all', getAllPhotos);

module.exports = router;

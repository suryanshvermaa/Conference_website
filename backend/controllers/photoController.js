const Photo = require('../models/Photo');
const { cloud } = require("../multer/multer")
const fs = require('fs');

const uploadPhoto = async (req, res) => {
    try {
        imageUrl=req.body.imageUrl

        // Save image URL to MongoDB
        const newPhoto = new Photo({
            imageUrl: imageUrl,
            tags: req.body.tags ? req.body.tags.split(",") : []
        });

        await newPhoto.save();

        res.status(201).json({ message: "Photo uploaded successfully", photo: newPhoto });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllPhotos = async (req, res) => {
    try {
        const photos = await Photo.find().sort({ createdAt: -1 }); // Get all photos, newest first
        res.status(200).json(photos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



const deletePhoto = async (req, res) => {
    try {
        const photoId = req.params.id;

        // Find the photo by ID
        const photo = await Photo.findById(photoId);
        if (!photo) {
            return res.status(404).json({ message: "Photo not found" });
        }

        // OPTIONAL: If you want to delete from cloud storage
        if (photo.imageUrl && photo.imageUrl.includes('cloudinary')) {
            const publicId = photo.imageUrl.split('/').pop().split('.')[0]; // Extract publicId
            await cloud.uploader.destroy(publicId);
        }

        // Delete from MongoDB
        await Photo.findByIdAndDelete(photoId);

        res.status(200).json({ message: "Photo deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = { uploadPhoto, getAllPhotos ,deletePhoto};
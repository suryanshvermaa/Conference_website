const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    imageUrl: {
        type: String, // Cloudinary URL
        required: true
    },
    tags: {
        type: [String], // Array of tags for categorization
        default: []
    }
}, { timestamps: true });

const Photo = mongoose.model('Photo', photoSchema);
module.exports = Photo;

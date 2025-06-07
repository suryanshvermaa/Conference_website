const mongoose = require('mongoose');

const speakerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    specialization: {
        type: [String],
        default:[]
    },
    imageUrl: {
        type: String, // Cloudinary URL or any image link
        default: "https://example.com/default-speaker.jpg"
    },
    description: { 
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

const Speaker = mongoose.model('Speaker', speakerSchema);
module.exports = Speaker;

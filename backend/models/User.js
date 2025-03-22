const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    photo: {
        type: String, // URL of the profile picture
        default: "https://example.com/default-photo.jpg"
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;

const mongoose = require('mongoose');

const recentUpdateSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    link: {
        type: String,
        default: null // Optional link for more details
    }
}, { timestamps: true });

const RecentUpdate = mongoose.model('RecentUpdate', recentUpdateSchema);
module.exports = RecentUpdate;

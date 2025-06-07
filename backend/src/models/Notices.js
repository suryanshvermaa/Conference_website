const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
    link: {
        type: String,
        default: null // Optional link
    },
    authors:{
        type:[String],
        default:[]
    }
}, { timestamps: true });

const Notice = mongoose.model('Notice', noticeSchema);
module.exports = Notice;

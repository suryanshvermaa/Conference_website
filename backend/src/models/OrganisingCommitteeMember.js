const mongoose = require('mongoose');

const OrganisingCommitteeMemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    specialization: {
        type: [String],
        default:[]
    },
    college:{
        type:String,
        required:true,
        trim:true
    },
    committee:{
        type:String,
        required:true,
        trim:true
    },
    imageUrl: {
        type: String,
        default: "https://example.com/default-committee-member.jpg"
    },
    description: { 
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

const OrganisingCommitteeMember = mongoose.model('OrganisingCommitteeMember', OrganisingCommitteeMemberSchema);
module.exports = OrganisingCommitteeMember;

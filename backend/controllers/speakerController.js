const Speaker = require('../models/Speaker');
const fs = require('fs');
const createSpeaker = async (req, res) => {
    try {
        let imageUrl = req.body.imageUrl;

        const { name, specialization ,description} = req.body;

        const newSpeaker = new Speaker({ name, specialization:specialization?specialization.split(','):[], imageUrl ,description});
        await newSpeaker.save();

        res.status(201).json({ message: "Speaker added successfully", speaker: newSpeaker });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a Speaker by ID
const deleteSpeaker = async (req, res) => {
    try {
        const { id } = req.params;
        const speaker = await Speaker.findById(id);

        if (!speaker) {
            return res.status(404).json({ error: "Speaker not found" });
        }
        await Speaker.findByIdAndDelete(id);
        res.status(200).json({ message: "Speaker deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getAllSpeakers = async (req, res) => {
    try {
        const speakers = await Speaker.find().sort({ createdAt: -1 }); // Fetch speakers, newest first
        res.status(200).json(speakers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = { createSpeaker, deleteSpeaker,getAllSpeakers };

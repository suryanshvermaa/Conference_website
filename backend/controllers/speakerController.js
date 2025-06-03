const Speaker = require('../models/Speaker');
const fs = require('fs');

/**
 * 
 * @description Create a new Speaker
 * @route POST /speaker/create
 * @access Private
 * @param {import("express").Request} req 
 * @param {import("express").Response} res  
 */
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

/**
 * 
 * @description Delete a Speaker by ID
 * @route DELETE /speaker/delete/:id
 * @access Private
 * @param {import("express").Request} req 
 * @param {import("express").Response} res  
 */
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

/**
 * 
 * @description Get all Speakers
 * @route GET /speaker/all
 * @access Private
 * @param {import("express").Request} req 
 * @param {import("express").Response} res  
 */
const getAllSpeakers = async (req, res) => {
    try {
        const speakers = await Speaker.find().sort({ createdAt: -1 }); // Fetch speakers, newest first
        res.status(200).json(speakers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * 
 * @description get a Speaker by ID
 * @route POST /speaker/get/:id
 * @access Private
 * @param {import("express").Request} req 
 * @param {import("express").Response} res  
 */
const getSpeakerById = async (req, res) => {
    try {
        const { id } = req.params;
        const speaker = await Speaker.findById(id);

        if (!speaker) {
            return res.status(404).json({ error: "Speaker not found" });
        }

        res.status(200).json(speaker);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

/**
 * 
 * @description Update a Speaker
 * @route POST /speaker/update/:id
 * @access Private
 * @param {import("express").Request} req 
 * @param {import("express").Response} res  
 */
const updateSpeaker = async (req, res) => {
    try {

        const { name, specialization ,description,imageUrl} = req.body;
        if (!name || !specialization || !description||!imageUrl) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const { id } = req.params;
        const speaker = await Speaker.findById(id);
        if (!speaker) {
            return res.status(404).json({ error: "Speaker not found" });
        }
        speaker.name = name;
        speaker.specialization =specialization.split(',').map((spec) => spec.trim());
        speaker.description = description;
        speaker.imageUrl = imageUrl;
        await speaker.save();
        res.status(201).json({ message: "Speaker updated successfully", speaker: speaker });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = { createSpeaker, deleteSpeaker,getAllSpeakers,updateSpeaker, getSpeakerById };

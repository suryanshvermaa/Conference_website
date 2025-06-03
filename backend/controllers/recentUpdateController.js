const RecentUpdate = require('../models/RecentUpdates');

/**
 * 
 * @description Add a new Recent Update
 * @route POST /recentupdate/add
 * @access Private
 * @param {import("express").Request} req 
 * @param {import("express").Response} res  
 */
const addRecentUpdate = async (req, res) => {
    try {
        const { title, description, link, eventDate} = req.body;

        // Create a new Recent Update
        const newRecentUpdate = new RecentUpdate({ title, description, link ,eventDate});
        await newRecentUpdate.save();

        res.status(201).json({ message: "Recent update added successfully", recentUpdate: newRecentUpdate });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * 
 * @description Get all Recent Updates
 * @route GET /recentupdate/all
 * @access Private
 * @param {import("express").Request} req 
 * @param {import("express").Response} res  
 */
const getAllRecentUpdates = async (req, res) => {
    try {
        const recentUpdates = await RecentUpdate.find().sort({ createdAt: -1 }); // Fetch all, sorted by latest
        res.status(200).json(recentUpdates);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * 
 * @description Delete a Recent Update by ID
 * @route DELETE /recentupdate/delete/:id
 * @access Private
 * @param {import("express").Request} req 
 * @param {import("express").Response} res  
 */
const deleteRecentUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const recentUpdate = await RecentUpdate.findById(id);

        if (!recentUpdate) {
            return res.status(404).json({ error: "Recent update not found" });
        }

        await RecentUpdate.findByIdAndDelete(id);
        res.status(200).json({ message: "Recent update deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addRecentUpdate, getAllRecentUpdates, deleteRecentUpdate };

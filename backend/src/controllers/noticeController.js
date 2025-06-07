const Notice = require('../models/Notices');

/**
 * @description Handles the addition of a new notice.
 * @route POST /papers/add
 * @access private
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const addNotice = async (req, res) => {
    try {
        const { heading, content, link, authors } = req.body;
        const authorsArray = authors ? authors.split(',').map(author => author.trim()) : [];
        // Create a new Notice
        const newNotice = new Notice({ heading, content, link, authors:authorsArray });
        await newNotice.save();

        res.status(201).json({ message: "Paper added successfully", notice: newNotice });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * 
 * @description Fetches all notices, sorted by creation date in descending order.
 * @route GET /papers/all
 * @access private
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const getAllNotices = async (req, res) => {
    try {
        const notices = await Notice.find().sort({ createdAt: -1 }); // Fetch notices, newest first
        res.status(200).json(notices);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * 
 * @description Deletes a notice by its ID.
 * @route DELETE /papers/delete/:id
 * @access private
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const deleteNotice = async (req, res) => {
    try {
        const { id } = req.params;
        const notice = await Notice.findById(id);

        if (!notice) {
            return res.status(404).json({ error: "Notice not found" });
        }

        await Notice.findByIdAndDelete(id);
        res.status(200).json({ message: "Paper deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addNotice, deleteNotice,getAllNotices };

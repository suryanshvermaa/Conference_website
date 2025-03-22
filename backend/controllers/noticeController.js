const Notice = require('../models/Notices');

// Add a new Notice
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
const getAllNotices = async (req, res) => {
    try {
        const notices = await Notice.find().sort({ createdAt: -1 }); // Fetch notices, newest first
        res.status(200).json(notices);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// Delete a Notice by ID
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

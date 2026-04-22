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
        const parsedLimit = Number.parseInt(req.query.limit, 10);
        const parsedSkip = Number.parseInt(req.query.skip, 10);

        const limit = Number.isInteger(parsedLimit) && parsedLimit > 0 ? parsedLimit : null;
        const skip = Number.isInteger(parsedSkip) && parsedSkip >= 0 ? parsedSkip : null;

        const query = Notice.find().sort({ createdAt: -1 }); // Fetch notices, newest first
        if (skip !== null) {
            query.skip(skip);
        }
        if (limit !== null) {
            query.limit(limit);
        }

        const notices = await query;
        const totalCount = await Notice.countDocuments();

        const pageSize = limit || totalCount;
        const skipAmount = skip || 0;
        const currentPage = Math.floor(skipAmount / pageSize) + 1;
        const totalPages = Math.ceil(totalCount / pageSize);

        res.status(200).json({
            data: notices,
            totalCount,
            currentPage,
            pageSize,
            totalPages
        });
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

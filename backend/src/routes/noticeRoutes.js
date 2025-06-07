const express = require('express');
const { addNotice, deleteNotice ,getAllNotices} = require('../controllers/noticeController');
const auth = require('../middlewares/middleware');

const noticeRouter = express.Router();

noticeRouter
.post('/add', auth,addNotice) // Add a new notice
.delete('/delete/:id',auth, deleteNotice) // Delete a notice by ID
.get('/all', getAllNotices); // Get all notices
module.exports = noticeRouter;

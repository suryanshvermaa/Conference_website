const express = require('express');
const { addNotice, deleteNotice ,getAllNotices} = require('../controllers/noticeController');
const auth = require('../middlewares/middleware');

const router = express.Router();

router.post('/add', auth,addNotice); // Add a new notice
router.delete('/delete/:id',auth, deleteNotice); // Delete a notice by ID
router.get('/all', getAllNotices); // Get all notices
module.exports = router;

const express = require('express');
const { addRecentUpdate, getAllRecentUpdates, deleteRecentUpdate } = require('../controllers/recentUpdateController');
const auth = require('../middlewares/middleware');

const router = express.Router();

router.post('/add',auth ,addRecentUpdate); // Add a new recent update
router.get('/all', getAllRecentUpdates); // Get all recent updates
router.delete('/delete/:id',auth, deleteRecentUpdate); // Delete a recent update by ID

module.exports = router;

const express = require('express');
const { addRecentUpdate, getAllRecentUpdates, deleteRecentUpdate } = require('../controllers/recentUpdateController');
const auth = require('../middlewares/middleware');

const recendUpdatesRouter = express.Router();

recendUpdatesRouter.post('/add',auth ,addRecentUpdate) // Add a new recent update
.get('/all', getAllRecentUpdates) // Get all recent updates
.delete('/delete/:id',auth, deleteRecentUpdate) // Delete a recent update by ID

module.exports = recendUpdatesRouter;

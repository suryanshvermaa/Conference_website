const express = require('express');
const { createSpeaker, deleteSpeaker ,getAllSpeakers} = require('../controllers/speakerController');
const auth = require('../middlewares/middleware');

const speakerRouter = express.Router();

speakerRouter
.post('/create', auth, createSpeaker)
.delete('/delete/:id',auth, deleteSpeaker)
.get('/all', getAllSpeakers)
module.exports = speakerRouter;

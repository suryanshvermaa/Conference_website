const express = require('express');
const { createSpeaker, deleteSpeaker ,getAllSpeakers, getSpeakerById, updateSpeaker} = require('../controllers/speakerController');
const auth = require('../middlewares/middleware');

const speakerRouter = express.Router();

speakerRouter
.post('/create', auth, createSpeaker)
.delete('/delete/:id',auth, deleteSpeaker)
.get('/all', getAllSpeakers)
.get('/get/:id',auth, getSpeakerById)
.put('/update/:id', auth, updateSpeaker)
module.exports = speakerRouter;

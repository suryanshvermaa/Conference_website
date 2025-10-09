const express = require('express');
const { createSpeaker, deleteSpeaker ,getAllSpeakers, getSpeakerById, updateSpeaker, setPriority} = require('../controllers/speakerController');
const auth = require('../middlewares/middleware');

const speakerRouter = express.Router();

speakerRouter
.post('/create', auth, createSpeaker)
.delete('/delete/:id',auth, deleteSpeaker)
.get('/all', getAllSpeakers)
.get('/get/:id',auth, getSpeakerById)
.put('/update/:id', auth, updateSpeaker)
.patch('/setPriority/:id', auth, setPriority);
module.exports = speakerRouter;

const express = require('express');
const { createSpeaker, deleteSpeaker ,getAllSpeakers, getSpeakerById, updateSpeaker, setPriority} = require('../controllers/speakerController');
const auth = require('../middlewares/middleware');
const { body } = require('express-validator');

const speakerRouter = express.Router();

speakerRouter
.post('/create', auth, [
  body('name').isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('specialization').isLength({ min: 3 }).withMessage('Specialization must be at least 3 characters'),
  body('description').isLength({ min: 10 }).withMessage('Description must be at least 10 characters'),
], createSpeaker)
.delete('/delete/:id',auth, deleteSpeaker)
.get('/all', getAllSpeakers)
.get('/get/:id',auth, getSpeakerById)
.put('/update/:id', auth, updateSpeaker)
.patch('/setPriority/:id', auth, setPriority);
module.exports = speakerRouter;

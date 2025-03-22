const express = require('express');
const { createSpeaker, deleteSpeaker ,getAllSpeakers} = require('../controllers/speakerController');
const auth = require('../middlewares/middleware');

const router = express.Router();

router.post('/create', auth, createSpeaker);
router.delete('/delete/:id',auth, deleteSpeaker);
router.get('/all', getAllSpeakers);
module.exports = router;

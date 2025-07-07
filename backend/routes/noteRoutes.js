const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

// POST a new note
router.post('/notes', noteController.createNote);

// GET notes for branch/scheme/semester
router.get('/notes/:branch/:scheme/:semester', noteController.getNotes);

module.exports = router;
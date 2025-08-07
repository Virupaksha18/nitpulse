// backend/routes/assignments.js

const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// GET /api/assignments/:subject
router.get('/:subject', (req, res) => {
  const subject = req.params.subject;
  const dirPath = path.join(__dirname, '../files/assignments', subject);

  fs.readdir(dirPath, (err, files) => {
    if (err || !files || files.length === 0) {
      return res.status(404).json({ message: 'No assignments found for this subject.' });
    }

    const fileUrls = files.map(file => ({
      name: file,
      url: `http://localhost:5000/files/assignments/${subject}/${file}`
    }));

    res.json(fileUrls);
  });
});

module.exports = router;
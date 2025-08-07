// backend/routes/labs.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/:subject', (req, res) => {
  const subject = req.params.subject;
  const dirPath = path.join(__dirname, '../files/labs', subject);

  fs.readdir(dirPath, (err, files) => {
    if (err || !files) {
      return res.status(404).json({ message: 'No lab programs found.' });
    }

    // Sort by program number
    files.sort((a, b) => {
      const numA = parseInt(a.match(/\d+/));
      const numB = parseInt(b.match(/\d+/));
      return numA - numB;
    });

    const fileUrls = files.map((file, i) => ({
      name: `Program ${i + 1}`,
      url: `http://localhost:5000/files/labs/${subject}/${file}`
    }));

    res.json(fileUrls);
  });
});

module.exports = router;
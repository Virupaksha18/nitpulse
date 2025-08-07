// backend/routes/passingPackage.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/:subject', (req, res) => {
  const subject = req.params.subject;
  const dirPath = path.join(__dirname, '../files/passing-package', subject);

  fs.readdir(dirPath, (err, files) => {
    if (err || !files || files.length === 0) {
      return res.status(404).json({ message: 'No passing package found for this subject.' });
    }

    files.sort((a, b) => {
      const numA = parseInt(a.match(/\d+/));
      const numB = parseInt(b.match(/\d+/));
      return numA - numB;
    });

    const fileUrls = files.map((file, i) => ({
      name: `MODULE ${i + 1}`,
      url: `http://localhost:5000/files/passing-package/${subject}/${file}`
    }));

    res.json(fileUrls);
  });
});

module.exports = router;
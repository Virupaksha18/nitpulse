// backend/routes/mqp.js

const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// GET /api/mqp/:subject
router.get('/:subject', (req, res) => {
  const subject = req.params.subject;
  const dirPath = path.join(__dirname, '../files/mqp', subject);

  // Check if the directory exists
  if (!fs.existsSync(dirPath)) {
    return res.status(404).json({ message: 'Subject folder not found' });
  }

  // Build expected file URLs
  const files = {
    mqp1:` http://localhost:5000/files/mqp/${subject}/mqp1.pdf`,
    solution1: `http://localhost:5000/files/mqp/${subject}/solution1.pdf`,
    mqp2:` http://localhost:5000/files/mqp/${subject}/mqp2.pdf`,
    solution2: `http://localhost:5000/files/mqp/${subject}/solution2.pdf`
  };

  res.json(files);
});

module.exports = router;
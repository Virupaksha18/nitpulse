const express = require('express');
const router = express.Router();
const multer = require('multer');
const Resource = require('../models/Resource');

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) =>
    cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage });

// POST /api/resources
router.post('/', upload.single('file'), async (req, res) => {
  try {
    const {
      title, type, branch, semester, subject, studentName, usn, showCredit
    } = req.body;

    const fileUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const newResource = new Resource({
      title,
      type,
      branch,
      semester,
      subject,
      fileUrl,
      studentName,
      usn,
      showCredit: showCredit === 'true'
    });

    await newResource.save();
    res.status(201).json({ message: "Resource added successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!" });
  }
});

module.exports = router;
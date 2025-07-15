const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// GET all comments
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Server error while fetching comments' });
  }
});

// POST a new comment
router.post('/', async (req, res) => {
  const { name,email,text } = req.body;
  if (!name ||!email ||!text) {
    return res.status(400).json({ message:'All fields are required' });
  }

  try {
    const newComment = new Comment({name,email,text });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ error: 'Server error while saving comment' });
  }
});

module.exports = router;
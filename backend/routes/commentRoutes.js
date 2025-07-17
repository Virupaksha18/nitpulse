const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// GET all comments (sorted latest first)
router.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 }).limit(20);
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Server error while fetching comments' });
  }
});

// POST a new comment
router.post('/', async (req, res) => {
  const { name, usn, text } = req.body;
  if (!name || !usn || !text) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newComment = new Comment({ name, usn, text });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ error: 'Server error while saving comment' });
  }
});

// ✅ FIXED: DELETE a comment
router.delete('/:commentId', async (req, res) => {
  const { usn} = req.query;
  const { commentId } = req.params;

  try {
    const comment = await Comment.findById(commentId);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    // Allow only owner or admin
    if (comment.usn === usn) {
      await Comment.findByIdAndDelete(commentId);
      return res.status(200).json({ message: 'Comment deleted successfully' });
    } else {
      return res.status(403).json({ message: 'Unauthorized to delete this comment' });
    }
  } catch (err) {
    console.error('Error deleting comment:', err);
    return res.status(500).json({ message: 'Server error while deleting comment' });
  }
});

// ✅ POST a reply to a comment
router.post('/:id/reply', async (req, res) => {
  const { name, usn, text } = req.body;
  if (!name || !usn || !text) {
    return res.status(400).json({ message: 'All fields are required for reply' });
  }

  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ message: 'Parent comment not found' });

    comment.replies.push({ name, usn, text });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: 'Server error while replying' });
  }
});

module.exports = router;
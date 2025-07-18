const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// GET all comments (sorted latest first)
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 }).limit(5);
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Server error while fetching comments' });
  }
});

// POST a new comment
router.post('/', async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/:commentId/reply', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) return res.status(404).json({ error: 'Comment not found' });

    comment.replies.push(req.body);
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
// ✅ FIXED: DELETE a comment
router.delete('/:commentId', async (req, res) => {
  const { usn } = req.query;

  const comment = await Comment.findById(req.params.commentId);
  if (!comment) return res.status(404).json({ message: 'Comment not found' });

  const isAdmin = usn === '3NA22CS092'; // Replace with your admin's USN
  const isCommentOwner = comment.usn === usn;

  if (!isAdmin && !isCommentOwner) {
    return res.status(403).json({ message: 'Not authorized to delete' });
  }

  await Comment.findByIdAndDelete(req.params.commentId);
  res.status(200).json({ message: 'Comment deleted' });
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
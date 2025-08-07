const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// ✅ Like a comment
router.post('/:commentId/like', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    comment.likes = (comment.likes || 0) + 1;
    await comment.save();
    res.json({ success: true, likes: comment.likes });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Dislike a comment
router.post('/:commentId/dislike', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    comment.dislikes = (comment.dislikes || 0) + 1;
    await comment.save();
    res.json({ success: true, dislikes: comment.dislikes });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Like a reply
router.post('/:commentId/replies/:replyId/like', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    const reply = comment.replies.id(req.params.replyId);
    if (!reply) return res.status(404).json({ message: 'Reply not found' });

    reply.likes = (reply.likes || 0) + 1;
    await comment.save();

    res.json({ success: true, likes: reply.likes });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Dislike a reply
router.post('/:commentId/replies/:replyId/dislike', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    const reply = comment.replies.id(req.params.replyId);
    if (!reply) return res.status(404).json({ message: 'Reply not found' });

    reply.dislikes = (reply.dislikes || 0) + 1;
    await comment.save();

    res.json({ success: true, dislikes: reply.dislikes });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Get all comments
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 }).limit(5);
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Server error while fetching comments' });
  }
});

// ✅ Post new comment
router.post('/', async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Post reply
router.post('/:commentId/reply', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) return res.status(404).json({ error: 'Comment not found' });

    comment.replies.push(req.body);
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Delete comment
router.delete('/:commentId', async (req, res) => {
  const { usn } = req.query;
  const comment = await Comment.findById(req.params.commentId);

  if (!comment) return res.status(404).json({ message: 'Comment not found' });

  const isAdmin = usn === '3NA22CS092';
  const isOwner = comment.usn === usn;

  if (!isAdmin && !isOwner) return res.status(403).json({ message: 'Not authorized to delete' });

  await Comment.findByIdAndDelete(req.params.commentId);
  res.json({ message: 'Comment deleted' });
});

module.exports = router;
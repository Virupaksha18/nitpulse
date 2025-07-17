const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
  name: { type: String, required: true },
  usn: { type: String, required: true,set: v => v.toUpperCase() },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const commentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  usn: { type: String, required: true,set: v => v.toUpperCase()},
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  replies: [replySchema]  // nested replies
});

module.exports = mongoose.model('Comment', commentSchema);
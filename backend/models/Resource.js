const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: String,
  type: String,
  branch: String,
  semester: String,
  subject: String,
  fileUrl: String,
  studentName: String,
  usn: String,
  showCredit: Boolean,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resource', resourceSchema);
const mongoose = require('mongoose');

const teacherresourceSchema = new mongoose.Schema({
  title: String,
  type: String,
  branch: String,
  semester: String,
  subject: String,
  fileUrl: String,
  teacherName: String,
  teacherId: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TeacherResource', teacherresourceSchema);
const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: String,
  type: String,
  branch: String,
  subject: String,
  subjectId: String,
  moduleId: String,
  file: String
});

// Fix: Prevent OverwriteModelError
const Resource = mongoose.models.Resource || mongoose.model('Resource', resourceSchema);

module.exports = Resource;
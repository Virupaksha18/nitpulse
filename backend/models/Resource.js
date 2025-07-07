const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Notes', 'Assignment', 'MQP', 'Lab Program', 'Passing Package'], // Add more types if needed
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
    required: true,
  },
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;
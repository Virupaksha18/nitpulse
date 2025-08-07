const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  branch: String,
  scheme: String,
  semester: String,
  subjectSlug: String,
  subjectName: String,
  modules: [String]  // URLs or descriptions
});

module.exports = mongoose.model('Note', noteSchema);
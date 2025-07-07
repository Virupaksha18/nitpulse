const mongoose = require('mongoose');

const passingPackageSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  content: { type: String, required: true } // PDF path
});

module.exports = mongoose.model('PassingPackage', passingPackageSchema);
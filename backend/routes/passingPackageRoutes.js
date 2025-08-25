const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const {
  createPassingPackage,
  getAllPassingPackages,
} = require('../controllers/passingPackageController');

// Upload and create passing package
router.post('/', upload.single('pdf'), createPassingPackage);

// Get all passing packages
router.get('/', getAllPassingPackages);

module.exports = router;
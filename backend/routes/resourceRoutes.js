const express = require('express');
const router = express.Router();
const Resource = require('../models/resourceModel');

// GET resource by type, subjectId, and moduleId
router.get('/:type/:subjectId/:moduleId', async (req, res) => {
  const { type, subjectId, moduleId } = req.params;

  const title =` Module ${moduleId.split('-')[1]} ${type.charAt(0).toUpperCase() + type.slice(1)}`;

  try {
    const resource = await Resource.findOne({
      type: type,
      subjectId: subjectId,
      moduleId: moduleId,
      title: title
    });

    if (!resource) {
      return res.status(404).json({ message: 'Resource not found' });
    }

    res.json({
      title: resource.title,
      file:`http://localhost:5000/${resource.filePath}`, // Corrected
      branch: resource.branch,
      subject: resource.subject,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
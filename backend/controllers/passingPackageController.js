const PassingPackage = require('../models/passingPackageModel');

exports.createPassingPackage = async (req, res) => {
  try {
    const { subject } = req.body;
    const pdfPath = req.file ? req.file.path : null;

    if (!subject || !pdfPath) {
      return res.status(400).json({ message: 'Subject and PDF file are required' });
    }

    const newPackage = new PassingPackage({ subject, content: pdfPath });
    await newPackage.save();

    res.status(201).json(newPackage);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create passing package' });
  }
};

exports.getAllPassingPackages = async (req, res) => {
  try {
    const packages = await PassingPackage.find().sort({ createdAt: -1 });
    res.status(200).json(packages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to get passing packages' });
  }
};
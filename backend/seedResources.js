const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Resource = require('./models/resourceModel');

dotenv.config(); // Load environment variables from .env file

const seedData = [
  {
    title: 'Module 1 Notes',
    type: 'notes',
    branch: 'CSE',
    subject: 'Machine Learning',
    subjectId: 'machine-learning',
    moduleId: 'module-1',
    file: 'https://docs.google.com/document/d/1-Wb9J02doX85cYZ/export?format=pdf'
  },
  {
    title: 'Module 2 Notes',
    type: 'notes',
    branch: 'CSE',
    subject: 'Machine Learning',
    subjectId: 'machine-learning',
    moduleId: 'module-2',
    file: 'https://example.com/module2.pdf'
  },
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Resource.deleteMany({});
    await Resource.insertMany(seedData);
    console.log('Data seeded successfully!');
    await mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error seeding data:', err);
    mongoose.disconnect();
  });
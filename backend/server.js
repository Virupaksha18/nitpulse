// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const bodyParser = require('body-parser');

// Route imports
const resourceRoutes = require('./routes/resourceRoutes');
const huggingFaceRoutes = require('./routes/huggingface');
const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const teacherresourceRoutes = require('./routes/teacherresourceRoutes');
const commentRoutes = require('./routes/commentRoutes');
const deepseekRoutes = require('./routes/deepseekRoutes'); // ✅ New DeepSeek route

const app = express();

// Middleware
app.use(cors({
  origin: ['https://nitpulse.vercel.app'],
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true
}));
app.use(express.json());
app.use(bodyParser.json());

// Serve static files
app.use('/files', express.static(path.join(__dirname, 'files')));
app.use('/pdfs', express.static(path.join(__dirname, 'public/pdfs')));
app.use('/uploads', express.static('uploads'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Routes
app.use('/api/comments', commentRoutes);
app.use('/api/notes', require('./routes/notes'));
app.use('/api/assignments', require('./routes/assignments'));
app.use('/api/labs', require('./routes/labs'));
app.use('/api/mqp', require('./routes/mqp'));
app.use('/api/passing-package', require('./routes/passingPackage'));
app.use('/api/resources', resourceRoutes);
app.use('/api/teacher-resources', teacherresourceRoutes);
app.use('/api', huggingFaceRoutes);
app.use('/app/students', studentRoutes);
app.use('/app/teachers', teacherRoutes);
app.use('/api/deepseek', deepseekRoutes); // ✅ New DeepSeek API

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
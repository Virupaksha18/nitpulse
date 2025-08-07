// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const bodyParser = require('body-parser');
const resourceRoutes =require('./routes/resourceRoutes');
const filesPath = path.join(__dirname,'files');
const huggingFaceRoutes = require('./routes/huggingface');


const app = express();


// Middleware
app.use(cors({
  origin:['https://nitpulse.vercel.app'],
  methods:['GET','POST','DELETE'],
  credentials:true
}));

app.use(express.json());

// Serve static files (like PDFs)
const commentRoutes =require('./routes/commentRoutes');
app.use('/api/comments',commentRoutes);
app.use(bodyParser.json());
app.use('/files', express.static(path.join(__dirname, 'files')));
app.use('/pdfs',express.static(path.join(__dirname,'public/pdfs')));
app.use('/uploads',express.static('uploads'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Routes
app.use('/api/notes', require('./routes/notes'));
app.use('/api/assignments', require('./routes/assignments'));
app.use('/api/labs', require('./routes/labs'));
app.use('/api/mqp', require('./routes/mqp'));
app.use('/api/passing-package', require('./routes/passingPackage')); // enable when ready
app.use('/api/resources',resourceRoutes);
app.use('/api',huggingFaceRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
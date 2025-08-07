// backend/app.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Import routes (add yours here)
import notesRoutes from './routes/notes.js';
import assignmentsRoutes from './routes/assignments.routes.js';
import labProgramsRoutes from './routes/labPrograms.routes.js';
import mqpRoutes from './routes/mqp.routes.js';
import passingPackageRoutes from './routes/passingPackage.routes.js';

dotenv.config(); // Load .env

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use('/api/notes', notesRoutes);
app.use('/api/assignments', assignmentsRoutes);
app.use('/api/lab-programs', labProgramsRoutes);
app.use('/api/mqp', mqpRoutes);
app.use('/api/passing-package', passingPackageRoutes);

// Base route
app.get('/', (req, res) => {
  res.send('🎉 NITpluse Backend is Running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
const mongoose = require('mongoose');
const Note = require('./models/Note');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  seedNotes();
}).catch(err => console.error('MongoDB connection failed:', err));

// Data to insert
const seedNotes = async () => {
  try {
    await Note.create({
      subject: "Machine Learning",
      branch: "CSE",
      scheme: "2022",
      semester: "6",
      modules: [
        "https://drive.google.com/file/d/1XsBbdRmnOCyVbL2HiMVoF1rjSSKhRED4/view?usp=drivesdk",
        "https://drive.google.com/uc?export=download&id=MODULE2_ID",
        "https://drive.google.com/uc?export=download&id=MODULE3_ID",
        "https://drive.google.com/uc?export=download&id=MODULE4_ID",
        "https://drive.google.com/uc?export=download&id=MODULE5_ID"
      ]
    });

    console.log("✅ CSE 6th Sem Note added successfully");
    mongoose.disconnect();
  } catch (error) {
    console.error("❌ Error inserting note:", error);
    mongoose.disconnect();
  }
};
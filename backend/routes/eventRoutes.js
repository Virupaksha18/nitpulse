import express from "express";
import Event from "../models/Event.js";
import User from "../models/User.js"; // Assuming you have a user model with email field
import nodemailer from "nodemailer";

const router = express.Router();

// ✅ Admin uploads event + sends notifications
router.post("/", async (req, res) => {
  try {
    const { title, description, date, link } = req.body;

    // Save event to database
    const newEvent = new Event({ title, description, date, link });
    await newEvent.save();

    // Fetch all user emails
    const users = await User.find({}, "email");
    const emailList = users.map(u => u.email);

    // Set up transporter (Gmail example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,      // your admin Gmail ID
        pass: process.env.EMAIL_PASS, // your app password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL,
      to: emailList,
      subject: `📢 New Event: ${title}`,
      text: `${description}\n\n📅 Date: ${date}\n${link ? `🔗 More info: ${link}` : ""}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Event uploaded and notifications sent!" });
  } catch (err) {
    console.error("Error uploading event:", err);
    res.status(500).json({ message: "Error uploading event" });
  }
});

// ✅ Get all events for frontend display
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch events" });
  }
});

export default router;
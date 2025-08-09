import Student from "../models/Student.js";
import bcrypt from "bcryptjs";

// =================== REGISTER ===================
export const registerStudent = async (req, res) => {
  try {
    const { name, usn, password, semester, branch } = req.body;

    // Validate required fields
    if (!name || !usn || !password || !semester || !branch) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check for existing student
    const existingStudent = await Student.findOne({ usn: usn.toLowerCase() });
    if (existingStudent) {
      console.warn(`Duplicate registration attempt for USN: ${usn}`);
      return res.status(400).json({
        message: "You have already registered. Please go to login."
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new student
    const student = new Student({
      name,
      usn: usn.toLowerCase(),
      password: hashedPassword,
      semester,
      branch
    });

    await student.save();
    res.status(201).json({ message: "Registration successful" });

  } catch (err) {
    console.error("❌ Student registration error:", err);
    res.status(500).json({ message: "Server error during registration" });
  }
};

// =================== LOGIN ===================
export const loginStudent = async (req, res) => {
  try {
    const { usn, password } = req.body;

    // Validate required fields
    if (!usn || !password) {
      return res.status(400).json({ message: "USN and password are required" });
    }

    // Find student
    const student = await Student.findOne({ usn: usn.toLowerCase() });
    if (!student) {
      return res.status(400).json({ message: "Please register first" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Return safe student data (no password)
    const { password: _, ...safeStudentData } = student.toObject();
    res.json({
      message: "Login successful",
      student: safeStudentData
    });

  } catch (err) {
    console.error("❌ Student login error:", err);
    res.status(500).json({ message: "Server error during login" });
  }
};
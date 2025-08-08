import Student from "../models/Student.js";
import bcrypt from "bcryptjs";

export const registerStudent = async (req, res) => {
  try {
    const { name, usn, password, sem, branch } = req.body;

    const existingStudent = await Student.findOne({ usn: usn.toLowerCase() });
    if (existingStudent) {
      return res.status(400).json({ message: "You have already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const student = new Student({
      name,
      usn: usn.toLowerCase(),
      password: hashedPassword,
      sem,
      branch
    });

    await student.save();
    res.status(201).json({ message: "Registration successful" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const loginStudent = async (req, res) => {
  try {
    const { usn, password } = req.body;

    const student = await Student.findOne({ usn: usn.toLowerCase() });
    if (!student) {
      return res.status(400).json({ message: "Please register first" });
    }

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful", student });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
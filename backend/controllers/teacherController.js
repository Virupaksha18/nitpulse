import Teacher from "../models/Teacher.js";
import bcrypt from "bcryptjs";

export const registerTeacher = async (req, res) => {
  try {
    const { name, teacherId, branch, password } = req.body;

    const existingTeacher = await Teacher.findOne({ teacherId: teacherId.toLowerCase() });
    if (existingTeacher) {
      return res.status(400).json({ message: "You have already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const teacher = new Teacher({
      name,
      teacherId: teacherId.toLowerCase(),
      branch,
      password: hashedPassword
    });

    await teacher.save();
    res.status(201).json({ message: "Registration successful" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const loginTeacher = async (req, res) => {
  try {
    const { teacherId, password } = req.body;

    const teacher = await Teacher.findOne({ teacherId: teacherId.toLowerCase() });
    if (!teacher) {
      return res.status(400).json({ message: "Please register first" });
    }

    const isMatch = await bcrypt.compare(password, teacher.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful", teacher });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
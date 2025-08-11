import Teacher from "../models/Teacher.js";
import bcrypt from "bcryptjs";

//registration

export const registerTeacher = async (req, res) => {
  try {
    const { name, teacherId, branch, password,email} = req.body;

    //validate
      if (!name || !teacherId|| !email || !password || !branch) {
      return res.status(400).json({ message: "All fields are required" });
    }

     // Check for existing student
        const existingTeacher = await Teacher.findOne({ teacherId: teacherId.toLowerCase() });
        if (existingTeacher) {
          console.warn(`Duplicate registration attempt for TeacherId: ${teacherId}`);
          return res.status(400).json({
            message: "You have already registered. Please go to login."
          });
        }
    // hash password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    //create new teacher
    const teacher = new Teacher({
      name,
      teacherId: teacherId.toLowerCase(),
      email:email.toLowerCase(),
      branch,
      password: hashedPassword
    });

    await teacher.save();
    res.status(201).json({ message: "Registration successful" });

  } catch (err) {
    console.error("❌ Teacher registration error:", err);
    res.status(500).json({ message: "Server error during registration" });
  }
};

//login

export const loginTeacher = async (req, res) => {
  try {
    const { teacherId, password } = req.body;

    if (!teacherId || !password) {
      return res.status(400).json({ message: "Teacher Id and password are required" });
    }

    const teacher = await Teacher.findOne({ teacherId: teacherId.toLowerCase() });
    if (!teacher) {
      return res.status(400).json({ message: "Please register first" });
    }

    const isMatch = await bcrypt.compare(password, teacher.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const { password: _, ...safeTeacherData } = teacher.toObject();
    res.json({
      message: "Login successful",
      teacher: safeTeacherData
    });

  } catch (err) {
    console.error("❌ Teacher login error:", err);
    res.status(500).json({ message: "Server error during login" });
  }
};

// =================== FORGOT PASSWORD ===================
export const TeacherForgotPassword = async (req, res) => {
  try {
    const { name, teacherId, email } = req.body;

    if (!name || !teacherId || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const teacher = await Teacher.findOne({
      name,
      teacherId: teacherId.toLowerCase(),
      email: email.toLowerCase()
    });

    if (!teacher) {
      return res.status(404).json({ message: "User not found" });
    }

    // ⚠ SECURITY NOTE: This is insecure for production.
    // You should instead generate a reset token and email it.
    res.json({ message: "Password found", password: teacher.password });

  } catch (err) {
    console.error("❌ Forgot password error:", err);
    res.status(500).json({ message: "Server error during password recovery" });
  }
};

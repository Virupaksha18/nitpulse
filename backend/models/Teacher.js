import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  teacherId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  branch: { type: String, required: true },
  password: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Teacher", teacherSchema);
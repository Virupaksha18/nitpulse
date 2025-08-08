import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  usn: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  sem: { type: String, required: true },
  branch: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Student", studentSchema);
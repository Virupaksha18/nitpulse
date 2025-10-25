import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: { type:String, required:true},
    description: { type: String, required:true},
    date: { type: String, required:true},
    link: { type: String}, 
    createdAt: { type: Date, default: Date.now}, 
});
export default mongoose.model("Event",eventSchema);
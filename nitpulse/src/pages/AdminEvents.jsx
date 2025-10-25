import React, { useState } from "react";
import axios from "axios";

const AdminEvents = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://nitpulse-backend.onrender.com/api/events", {
        title,
        description,
        date,
        link,
      });
      alert("Event uploaded and notification sent!");
      setTitle("");
      setDescription("");
      setDate("");
      setLink("");
    } catch (err) {
      console.error(err);
      alert("Error uploading event");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-10">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Upload Event / Notification</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-xl w-11/12 md:w-1/2 flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded-lg"
          required
        />
        <textarea
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 border rounded-lg"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border rounded-lg"
          required
        />
        <input
          type="text"
          placeholder="Event Link (optional)"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="p-2 border rounded-lg"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default AdminEvents;
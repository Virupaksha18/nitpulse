import React, { useState } from 'react';
import axios from 'axios';

const TeacherUploadForm = ({ onCancel }) => {
  const [formData, setFormData] = useState({
    teacherId: '',
    branch: '',
    semester: '',
    subject: '',
    googleFormLink: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Simple validation (add more as needed)
    if (!formData.teacherId || !formData.branch || !formData.semester || !formData.subject || !formData.googleFormLink) {
      alert('Please fill all fields');
      return;
    }

    try {
      await axios.post('/api/quizzes', formData);
      alert('Quiz uploaded successfully!');
      onCancel(); // close form
    } catch (error) {
      alert('Error uploading quiz');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Upload Quiz</h2>

      <label className="block mb-2">Teacher ID</label>
      <input
        name="teacherId"
        value={formData.teacherId}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        placeholder="e.g., 512345"
      />

      <label className="block mb-2">Branch</label>
      <select name="branch" value={formData.branch} onChange={handleChange} className="w-full p-2 border rounded mb-4">
        <option value="">Select Branch</option>
        <option>CSE</option>
        <option>ECE</option>
        <option>EEE</option>
        <option>CIVIL</option>
        <option>AIML</option>
      </select>

      <label className="block mb-2">Semester</label>
      <select name="semester" value={formData.semester} onChange={handleChange} className="w-full p-2 border rounded mb-4">
        <option value="">Select Semester</option>
        <option>1st</option>
        <option>2nd</option>
        <option>3rd</option>
        <option>4th</option>
        <option>5th</option>
        <option>6th</option>
        <option>7th</option>
        <option>8th</option>
      </select>

      <label className="block mb-2">Subject Name</label>
      <input
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        placeholder="e.g., Machine Learning"
      />

      <label className="block mb-2">Google Form Link</label>
      <input
        name="googleFormLink"
        value={formData.googleFormLink}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        placeholder="Paste your Google Form URL here"
      />

      <div className="flex justify-between">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
        <button type="button" onClick={onCancel} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TeacherUploadForm;
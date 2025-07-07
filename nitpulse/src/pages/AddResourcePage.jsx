import React, { useState } from 'react';
import axios from 'axios';

const AddResourcePage = () => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [branch, setBranch] = useState('');
  const [subject, setSubject] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage('Please upload a file.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('type', type);
    formData.append('branch', branch);
    formData.append('subject', subject);
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/api/resources', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message); // Success message from backend
    } catch (error) {
      setMessage('Error uploading the resource.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto mb-20 bg-white p-8 rounded-3xl shadow-xl border">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Add a Resource</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-semibold text-gray-700">Title</label>
          <input
            type="text"
            className="w-full p-3 border rounded-xl"
            placeholder="Eg: Module 1 Notes"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Type</label>
          <select
            className="w-full p-3 border rounded-xl"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>Notes</option>
            <option>Assignment</option>
            <option>MQP</option>
            <option>Lab Program</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Branch</label>
          <input
            type="text"
            className="w-full p-3 border rounded-xl"
            placeholder="Eg: CSE"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Subject</label>
          <input
            type="text"
            className="w-full p-3 border rounded-xl"
            placeholder="Eg: Machine Learning"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Upload File</label>
          <input
            type="file"
            className="w-full p-2 border rounded-xl"
            onChange={handleFileChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 font-bold"
        >
          Submit Resource
        </button>
      </form>
      {message && <p className="mt-4 text-center text-gray-600">{message}</p>}
    </div>
  );
};

export default AddResourcePage;

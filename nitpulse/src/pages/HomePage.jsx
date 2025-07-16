import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  BarChart, Calendar, Link2, Paperclip, Plus, Clock,
  GitBranchPlusIcon
} from 'lucide-react';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    type: 'Notes',
    branch: '',
    subject: '',
    file: null,
  });

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/comments`);
      setComments(res.data);
    } catch (err) {
      console.error('Failed to fetch comments:', err);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim() || !userName.trim() || !userEmail.trim()) return;

    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/api/comments`, {
        text: newComment,
        name: userName,
        email: userEmail
      });

      setNewComment('');
      setUserName('');
      setUserEmail('');
      fetchComments();
    } catch (err) {
      console.error('Failed to submit comment:', err);
    }
  };

  const resources = [
    { name: 'Branches', path: '/branches', icon: GitBranchPlusIcon, color: 'text-white-600' }
  ];

  const filteredResources = resources.filter(res =>
    res.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uploadData = new FormData();
    Object.entries(formData).forEach(([key, value]) => uploadData.append(key, value));

    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}`, uploadData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Resource uploaded successfully!');
      setFormData({ title: '', type: 'Notes', branch: '', subject: '', file: null });
      setShowForm(false);
    } catch (err) {
      console.error(err);
      alert('Failed to upload resource.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white pt-24 px-4">
      <div className="text-center mb-6">
        <blockquote>“ಕರ್ಮಂ ನಿರಂತರಂ, ಪಾಪಂ ಪುಣ್ಯಂ ದೈವ ನಿರ್ಣಯಂ”</blockquote>
      </div>

      <div className="bg-blue-700 text-white text-center py-5 px-4 rounded-3xl shadow-2xl max-w-5xl mx-auto mb-12">
        <h1 className="text-2xl font-extrabold mb-3">Welcome to NIT Pulse</h1>
        <p className="text-1xl font-medium">All-in-one NIT student portal with Notes, Labs, MQPs, Assignments & more!</p>
        <input
          type="text"
          placeholder="Search Notes, Assignments, Labs, MQPs..."
          className="mt-6 px-5 py-3 rounded-full w-96 max-w-full text-black outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h1 className="text-3xl font-extrabold text-center">Select your Branch </h1>
      <div className="max-w-xl mx-auto my-5">
        {filteredResources.map((res) => (
          <Link
            to={res.path}
            className="relative block rounded-2xl overflow-hidden shadow-lg transition transform hover:scale-105 duration-300"
            style={{ backgroundImage: "radial-gradient(circle, #1a1a1a 0%, #000000 100%)" }}
            key={res.name}
          >
            <div className="p-16 text-center">
              <h2 className="text-4xl font-extrabold text-white drop-shadow-md">
                {res.name}
              </h2>
            </div>
            <div className="absolute bottom-2 right-3 text-white text-sm opacity-70">
              NITS Pulse.com
            </div>
          </Link>
        ))}
      </div>

      {/* More Features */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">More Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Link to="/sgpa" className="bg-white p-5 rounded-2xl shadow-md text-center border hover:border-blue-400 hover:shadow-xl">
            <BarChart className="mx-auto mb-3 w-10 h-10 text-blue-600" />
            SGPA Calculator
          </Link>
          <Link to="/cgpa" className="bg-white p-5 rounded-2xl shadow-md text-center border hover:border-green-500 hover:shadow-xl">
            <BarChart className="mx-auto mb-3 w-10 h-10 text-green-600" />
            CGPA Calculator
          </Link>
          <Link to="/vtu-results" className="bg-white p-5 rounded-2xl shadow-md text-center border hover:border-purple-500 hover:shadow-xl">
            <Calendar className="mx-auto mb-3 w-10 h-10 text-purple-600" />
            VTU Results
          </Link>
          <Link to="/vtu-links" className="bg-white p-5 rounded-2xl shadow-md text-center border hover:border-red-500 hover:shadow-xl">
            <Link2 className="mx-auto mb-3 w-10 h-10 text-red-600" />
            VTU Links
          </Link>
          <Link to="/updates" className="bg-white p-5 rounded-2xl shadow-md text-center border hover:border-yellow-500 hover:shadow-xl">
            <Paperclip className="mx-auto mb-3 w-10 h-10 text-yellow-600" />
            Latest Updates
          </Link>
          <Link to="/timetable" className="bg-white p-5 rounded-2xl shadow-md text-center border hover:border-indigo-500 hover:shadow-xl">
            <Clock className="mx-auto mb-3 w-10 h-10 text-indigo-600" />
            College Time Table
          </Link>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">comments</h2>
        <form onSubmit={handleCommentSubmit} className="mb-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-xl"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-xl"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <textarea
            className="w-full p-3 border border-gray-300 rounded-xl"
            rows="3"
            placeholder="Share your thoughts or suggestions..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="mt-3 bg-blue-600 text-white py-2 px-6 rounded-xl hover:bg-blue-700">
            Submit Feedback
          </button>
        </form>

        <div className="space-y-3">
          {comments.length === 0 && <p className="text-center text-gray-500">No comments yet. Be the first!</p>}
          {comments.map((comment) => (
            <div key={comment._id} className="bg-white shadow p-4 rounded-xl border">
              <p className="font-semibold text-blue-700">{comment.name}</p>
              <p className="text-gray-800 mt-1">{comment.text}</p>
              <p className="text-xs text-gray-500 text-right mt-2">{new Date(comment.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Add Resource Button */}
      <div className="text-center mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <Plus className="w-5 h-5" /> Add a Resource
        </button>
      </div>

      {/* Add Resource Form */}
      {showForm && (
        <div className="max-w-3xl mx-auto mb-20 bg-white p-8 rounded-3xl shadow-xl border">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Add a Resource</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block font-semibold text-gray-700">Title</label>
              <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full p-3 border rounded-xl" placeholder="Eg: Module 1 Notes" />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">Type</label>
              <select name="type" value={formData.type} onChange={handleChange} className="w-full p-3 border rounded-xl">
                <option>Notes</option>
                <option>Assignment</option>
                <option>MQP</option>
                <option>Lab Program</option>
                <option>Passing Package</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold text-gray-700">Branch</label>
              <input type="text" name="branch" value={formData.branch} onChange={handleChange} className="w-full p-3 border rounded-xl" placeholder="Eg: CSE" />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">Subject</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full p-3 border rounded-xl" placeholder="Eg: Machine Learning" />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">Upload File</label>
              <input type="file" name="file" onChange={handleFileChange} className="w-full p-2 border rounded-xl" />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 font-bold">
              Submit Resource
            </button>
          </form>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="max-w-5xl mx-auto text-center">
          <img
            src="/virupaksha.jpg"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-blue-500 object-cover"
            alt="Virupaksha"
          />
          <h3 className="text-xl font-bold text-gray-800">Virupaksha</h3>
          <p className="text-gray-600 mt-2">
            I'm a Student at NIT, creator of NITPulse. Making NIT resources simple and accessible.
          </p>
          <p className="text-sm text-gray-500 mt-4">Built with React, TailwindCSS & passion!</p>
          <p className="mt-6 text-gray-400 text-xs">© 2025 NIT Pulse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import {
  BarChart, Calendar, Link2, Paperclip, Clock,
  GitBranchPlusIcon,
  ClipboardList
} from 'lucide-react';
import { useAuth } from  '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const HomePage = () => {
  const { user } = useAuth();
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name:'',
    usn:'',
    title: '',
    type: 'Notes',
    branch: '',
    semester:'',
    subject: '',
    file: null,
     showCredit: 'yes',
  });
  const fileInputRef =useRef(null);
  
  const [teachershowForm, teachersetShowForm] = useState(false);
  const [teacherformData, teachersetFormData] = useState({
    teacherName:'',
    teacherId:'',
    title: '',
    type: 'Notes',
    branch: '',
    semester:'',
    subject: '',
    file: null,
    
  });
  const teacherfileInputRef =useRef(null);
  


  const [userName, setUserName] = useState('');
  const [userUsn, setUserUsn] = useState('');
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);
  const [replyText,setReplyText] = useState({});
  const [errorMessage,setErrorMessage] = useState('');
  useEffect(() => {
    const savedUsn =localStorage.getItem('userUsn') || '';
    setUserUsn(savedUsn);
  },[]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/comments`);
      setComments(res.data.slice(0,10));
    } catch (err) {
      console.error('Failed to fetch comments:', err);
    }
  };

 const handleCommentSubmit = async (e) => {
  e.preventDefault();
  if (!newComment.trim() || !userName.trim() || !userUsn.trim()) {
    setErrorMessage('All fields are required');
    return;
  }

  try {
    await axios.post(`${process.env.REACT_APP_BASE_URL}/api/comments`, {
      text: newComment,
      name: userName,
      usn: userUsn.toUpperCase(),
    });
   localStorage.setItem('userUsn',userUsn.toUpperCase());
    // Clear form and errors
    setNewComment('');
    setUserName('');
    setErrorMessage('');
    fetchComments();
  } catch (err) {
    const errorMsg = err.response?.data?.error || 'Failed to submit comment';
    setErrorMessage(errorMsg);
  }
};
const handleDeleteComment = async (commentId, commentUsn) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this comment?");
  if (!confirmDelete) return;

  try {
    const response = await fetch(`https://nitpulse-backend.onrender.com/api/comments/${commentId}?usn=${commentUsn}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      alert("Comment deleted successfully!");
      // Remove comment from local state (if needed)
      setComments((prevComments) => prevComments.filter(comment => comment._id !== commentId));
    } else {
      const data = await response.json();
      alert(`Error: ${data.message}`);
    }
  } catch (error) {
    console.error("Error deleting comment:", error);
    alert("An error occurred while deleting the comment.");
  }
};
const handleReplySubmit = async (commentId) => {
  if (!replyText[commentId]) return;
  if (!userName || !userUsn) {
    alert("Please enter your name and usn above before replying.");
    return;
  }

  try {
    await axios.post(`${process.env.REACT_APP_BASE_URL}/api/comments/${commentId}/reply`, {
      name: userName,
      usn: userUsn,
      text: replyText[commentId]
    });
    setReplyText((prev) => ({ ...prev, [commentId]: '' }));
    fetchComments();
  } catch (err) {
    console.error('Failed to reply:', err);
  }
};
const handleLike = async (id) => {
  try {
    await axios.post(`${process.env.REACT_APP_BASE_URL}/api/comments/${id}/like`);
    setComments(comments.map(c => c._id === id ? { ...c, likes: (c.likes || 0) + 1 } : c));
  } catch (err) {
    console.error("Failed to like:", err);
  }
};

const handleDislike = async (id) => {
  try {
    await axios.post(`${process.env.REACT_APP_BASE_URL}/api/comments/${id}/dislike`);
    setComments(comments.map(c => c._id === id ? { ...c, dislikes: (c.dislikes || 0) + 1 } : c));
  } catch (err) {
    console.error("Failed to dislike:", err);
  }
};
const handleReplyLike = async (commentId, replyId) => {
  try {
    await axios.post(`${process.env.REACT_APP_BASE_URL}/api/comments/${commentId}/replies/${replyId}/like`);
    setComments(comments.map(c => 
      c._id === commentId 
        ? { 
            ...c, 
            replies: c.replies.map(r => 
              r._id === replyId ? { ...r, likes: (r.likes || 0) + 1 } : r
            ) 
          } 
        : c
    ));
  } catch (err) {
    console.error("Failed to like reply:", err);
  }
};

const handleReplyDislike = async (commentId, replyId) => {
  try {
    await axios.post(`${process.env.REACT_APP_BASE_URL}/api/comments/${commentId}/replies/${replyId}/dislike`);
    setComments(comments.map(c => 
      c._id === commentId 
        ? { 
            ...c, 
            replies: c.replies.map(r => 
              r._id === replyId ? { ...r, dislikes: (r.dislikes || 0) + 1 } : r
            ) 
          } 
        : c
    ));
  } catch (err) {
    console.error("Failed to dislike reply:", err);
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
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  for (const key in formData) {
    data.append(key, formData[key]);
  }

  try {
    const response = await axios.post("https://nitpulse-backend.onrender.com/api/resources", data);

    if (response.status === 200 || response.status === 201) {
      alert("🎉 Congratulations! Your resource has been added successfully! 🥳");

      setFormData({
        title: '',
        type: 'Notes',
        branch: '',
        subject: '',
        semester: '',
        studentName: '',
        teacherId:'',
        teacherName:'',
        usn: '',
        showCredit: 'yes',
        file: null,
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }

      setShowForm(false);
    }
  } catch (err) {
    console.error("Upload failed:", err);
    alert("Something went wrong. Please try again.");
  }
};
 const teacherhandleChange = (e) => {
    const { name, value } = e.target;
    teachersetFormData(prev => ({ ...prev, [name]: value }));
  };

  const teacherhandleFileChange = (e) => {
    teachersetFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const teacherhandleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  for (const key in teacherformData) {
    data.append(key, teacherformData[key]);
  }

  try {
    const response = await axios.post("https://nitpulse-backend.onrender.com/api/teacher-resources", data);

    if (response.status === 200 || response.status === 201) {
      alert("🎉 Congratulations! Your resource has been added successfully! 🥳");

      teachersetFormData({
        title: '',
        type: 'Notes',
        branch: '',
        subject: '',
        semester: '',
        teacherName: '',
        teacherId:'',
        file: null,
      });

      if (teacherfileInputRef.current) {
        teacherfileInputRef.current.value = null;
      }

      teachersetShowForm(false);
    }
  } catch (err) {
    console.error("Upload failed:", err);
    alert("Something went wrong. Please try again.");
  }
};
if(!user){
  return<Navigate to="/auth" />;
}

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
      {/* <button onClick={logout}className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Logout</button> */}
       <div className="bg-white p-1 rounded-3xl shadow-md text-center max-w-2xl mx-auto my-10 border hover:border-green-500 hover:shadow-xl  hover:scale-105 duration-300">
      <p className="text-1xl mb-1">Get instant answers to your academic questions with our AI assistant.</p>

      {/* ✅ Navigation Button */}
      <Link to="/ask-ai">
      <div className="flex justify-center">
        <button className=" flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full mt-2">
          <img src="ai-logo1.jpg" alt="NIT Pulse AI logo" className="w-7 h-7 rounded-lg"/>Ask NIT Pulse AI
        </button>
        </div>
        
      </Link>
    </div>
    <h1 className="text-3xl font-extrabold text-center">Select your Branch </h1>
      <div className="max-w-2xl mx-auto my-5">
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
              NIT Pulse.com
            </div>
          </Link>
        ))}
      </div>

      {/* More Features */}
      <div className="max-w-6xl mx-auto mb-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">More Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

           <Link to="/quiz-section" className="bg-white p-5 rounded-2xl shadow-md text-center border hover:border-yellow-500 hover:shadow-xl">
            <ClipboardList className="mx-auto mb-3 w-10 h-10 text-yellow-600" />
            Quiz Section
          </Link>
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
      
       {/* Add Resource Button */}
      <div className="text-center mb-8">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-white p-5 rounded-2xl shadow-md text-center border hover:border-green-500 hover:shadow-xl"
        ><Calendar className="mx-auto mb-3 w-10 h-10 text-green-600" />
         Add a Resource as Student
        </button>
      </div> 

      {/* Add Resource Form */}
      {showForm && (
        <div className="max-w-3xl mx-auto mb-20 bg-white p-8 rounded-3xl shadow-xl border">
          <h2 className="text-1xl font-bold text-center mb-6 text-blue-700">Add a Resource as Student</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>

            <div>
              <label className="block font-semibold text-gray-700">Student Name</label>
              <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} className="w-full p-3 border rounded-xl" placeholder="Eg: viru" />
            </div>

            <div>
              <label className="block font-semibold text-gray-700">USN</label>
              <input type="text" name="usn" value={formData.usn} onChange={handleChange} className="w-full p-3 border rounded-xl" placeholder="Eg: 3NA22CS092" pattern = "/^(3na|3NA)(22|23|24)(cs|CS|ec|EC|ai|AI|ee|EE|cv|CV)\d{3}$/" />
            </div>

            <div>
              <label className="block font-semibold text-gray-700">Semester</label>
              <select name="semester" value={formData.semester} onChange={handleChange} className="w-full p-3 border rounded-xl">
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
            </div>

            <div>
              <label className="block font-semibold text-gray-700">Branch</label>
              <select name="branch" value={formData.branch} onChange={handleChange} className="w-full p-3 border rounded-xl">
                <option value="">Select Branch</option>
                <option>CSE</option>
                <option>ECE</option>
                <option>EEE</option>
                <option>CIVIL</option>
                <option>AIML</option>
              </select>
            </div>

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
              <label className="block font-semibold text-gray-700">Subject</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full p-3 border rounded-xl" placeholder="Eg: Machine Learning" />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">Do you want to show your Name with USN as credit?</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input type="radio" name="creditConsent" value="yes" checked={formData.creditConsent === "yes"} onChange={handleChange} />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="creditConsent" value="no" checked={formData.creditConsent === "no"} onChange={handleChange} />
                  No
                </label>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-gray-700">Upload File</label>
              <input type="file" name="file" ref={fileInputRef} onChange={handleFileChange} className="w-full p-2 border rounded-xl" />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 font-bold">
              Submit Resource
            </button>
          </form>
        </div>
      )}

 {/* Add Resource Button as teacher */}
      <div className="text-center mb-16">
        <button
          onClick={() => teachersetShowForm(!showForm)}
          className="bg-white p-5 rounded-2xl shadow-md text-center border hover:border-red-500 hover:shadow-xl"
        ><Calendar className="mx-auto mb-3 w-10 h-10 text-red-600" />
         Add a Resource as Teacher
        </button>
      </div> 

      {/* Add Resource Form */}
      {teachershowForm && (
        <div className="max-w-3xl mx-auto mb-20 bg-white p-8 rounded-3xl shadow-xl border">
          <h2 className="text-1xl font-bold text-center mb-6 text-blue-700">Add a Resource as Teacher</h2>
          <form className="space-y-6" onSubmit={teacherhandleSubmit}>

            <div>
              <label className="block font-semibold text-gray-700">Teacher Name</label>
              <input type="text" name="teacherName" value={teacherformData.teacherName} onChange={teacherhandleChange} className="w-full p-3 border rounded-xl" placeholder="your Name" />
            </div>

            <div>
              <label className="block font-semibold text-gray-700">Teacher Id</label>
              <input type="text" name="teacherId" value={teacherformData.teacherId} onChange={teacherhandleChange} className="w-full p-3 border rounded-xl" placeholder="Teachers ID" pattern="/^5\d{5}$/" />
            </div>

            <div>
              <label className="block font-semibold text-gray-700">Semester</label>
              <select name="semester" value={teacherformData.semester} onChange={teacherhandleChange} className="w-full p-3 border rounded-xl">
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
            </div>

            <div>
              <label className="block font-semibold text-gray-700">Branch</label>
              <select name="branch" value={teacherformData.branch} onChange={teacherhandleChange} className="w-full p-3 border rounded-xl">
                <option value="">Select Branch</option>
                <option>CSE</option>
                <option>ECE</option>
                <option>EEE</option>
                <option>CIVIL</option>
                <option>AIML</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-gray-700">Title</label>
              <input type="text" name="title" value={teacherformData.title} onChange={teacherhandleChange} className="w-full p-3 border rounded-xl" placeholder="Eg: Module 1 Notes" />
            </div>

            <div>
              <label className="block font-semibold text-gray-700">Type</label>
              <select name="type" value={teacherformData.type} onChange={teacherhandleChange} className="w-full p-3 border rounded-xl">
                <option>Notes</option>
                <option>Assignment</option>
                <option>MQP</option>
                <option>Lab Program</option>
                <option>Passing Package</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-gray-700">Subject</label>
              <input type="text" name="subject" value={teacherformData.subject} onChange={teacherhandleChange} className="w-full p-3 border rounded-xl" placeholder="Eg: Machine Learning" />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">Upload File</label>
              <input type="file" name="file" ref={teacherfileInputRef} onChange={teacherhandleFileChange} className="w-full p-2 border rounded-xl" />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 font-bold">
              Submit Resource
            </button>
          </form>
        </div>
        
      )}
      </div>



      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Feedback</h2>
        <form onSubmit={handleCommentSubmit} className="mb-6 space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-xl" value={userName} onChange={(e) => setUserName(e.target.value)} required />
          <input type="text" placeholder="Your Usn" className="w-full p-3 border border-gray-300 rounded-xl" value={userUsn} onChange={(e) => setUserUsn(e.target.value.toUpperCase())} required />
          <textarea className="w-full p-3 border border-gray-300 rounded-xl" rows="3" placeholder="Share your thoughts or suggestions..." value={newComment} onChange={(e) => setNewComment(e.target.value)} required></textarea>
          <button type="submit" className="mt-3 bg-blue-600 text-white py-2 px-6 rounded-xl hover:bg-blue-700">Submit Feedback</button>
          {errorMessage && (
  <div style={{ color: 'red', marginTop: '10px' }}>
    {errorMessage}
  </div>
)}
        </form>

        <div className="space-y-4">
          {comments.length === 0 && <p className="text-center text-gray-500">No comments yet. Be the first!</p>}
          {comments.map((comment) => (
            <div key={comment._id} className="bg-white shadow p-4 rounded-xl border">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-blue-700">{comment.name}</p>
                {userUsn && (userUsn.toUpperCase() === comment.usn?.toUpperCase() || userUsn.toUpperCase() === '3NA22CS092') && (
                  <button onClick={() => handleDeleteComment(comment._id, comment.usn)} className="text-red-500 text-sm">Delete</button>
                )}
              </div>
              <p className="text-gray-800 mt-1">{comment.text}</p>
              <p className="text-xs text-gray-500 text-right mt-2">{new Date(comment.createdAt).toLocaleString()}</p>
                {/* 👍 👎 Buttons */}
    <div className="flex items-center gap-4 mt-2">
      <button 
        onClick={() => handleLike(comment._id)} 
        className="text-green-600 hover:scale-110 transition"
      >
        👍 {comment.likes || 0}
      </button>
      <button 
        onClick={() => handleDislike(comment._id)} 
        className="text-red-600 hover:scale-110 transition"
      >
        👎 {comment.dislikes || 0}
      </button>
     </div>

              {comment.replies?.length > 0 && (
                <div className="mt-4 ml-4 space-y-2">
                  {comment.replies.map((reply, index) => (
                    <div key={index} className="border-l-4 border-blue-200 pl-3 text-sm text-gray-700">
                      <p className="font-medium text-blue-600">{reply.name}</p>
                      <p>{reply.text}</p>
                      <p className="text-xs text-gray-400">{new Date(reply.createdAt).toLocaleString()}</p>
                         {/* 👍 👎 Buttons for Reply */}
        <div className="flex items-center gap-4 mt-1">
          <button 
            onClick={() => handleReplyLike(comment._id, reply._id)} 
            className="text-green-600 hover:scale-110 transition"
          >
            👍 {reply.likes || 0}
          </button>
          <button 
            onClick={() => handleReplyDislike(comment._id, reply._id)} 
            className="text-red-600 hover:scale-110 transition"
          >
            👎 {reply.dislikes || 0}
          </button>
        </div>

                    </div>
                  ))}
                </div>
              )}

              <div className="mt-4">
                <textarea rows="2" placeholder="Reply to this comment..." className="w-full p-2 border rounded-md" value={replyText[comment._id] || ''} onChange={(e) => setReplyText({ ...replyText, [comment._id]: e.target.value })}></textarea>
                <button onClick={() => handleReplySubmit(comment._id)} className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Reply</button>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h4 className="text-l text-gray-800">"ಕನ್ನಡವು ಕನ್ನಡವ ಸದಾ
 ಕನ್ನಡಿಸುತಿರಬೇಕು"
</h4><br />
          <img
            src="/virupaksha.jpg"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-blue-500 object-cover"
            alt="Virupaksha"
          />
          <h3 className="text-xl font-bold text-gray-800">Virupaksha</h3>
          
          <p className="text-gray-600 mt-2">
           Hi, I'm Virupaksha, a final-year CSE student at Navodaya Institute of Technology (NIT). I've developed this platform to empower NIT students wih effortless and stremlined access to valuable academic resources.
          
           </p>
<p className="text-gray-600 mt-2"> This Platform provides:</p>


<p className="text-gray-600 mt-2">Curated resources:Notes, Lab-programs, MQPs, Assignments & many more!
</p>

<p className="text-gray-600 mt-2">  Let’s make learning at NIT smarter—together.</p>
          <p className="text-gray-1000 mt-1">"Built by a student,for students"</p>

          
          <p className="text-sm text-gray-700 mt-3">Designed and Developed by Virupaksha</p>
          <p className="mt-3 text-gray-400 text-xs">© 2025 NIT Pulse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
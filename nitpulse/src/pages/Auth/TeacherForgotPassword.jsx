import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TeacherForgotPassword = () => {
  const [formData, setFormData] = useState({
    name: "",
    teacherId:"",
    email: "",
    newPassword: ""
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://nitpulse-backend.onrender.com/app/teachers/teacher/forgot-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Something went wrong");
        return;
      }

      setMessage("✅ Password reset successful. You can now log in.");
    } catch (err) {
      setMessage("Server error. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          Reset Teacher Password
        </h2>
        {message && <p className="text-red-500 mb-2">{message}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 rounded w-full mb-3"
        />
         <input
          type="text"
          name="teacherId"
          placeholder="TeacherId"
          value={formData.teacherId}
          onChange={handleChange}
          required
          className="border p-2 rounded w-full mb-3 "
          pattern="/^5\d{5}$/"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border p-2 rounded w-full mb-3"
          pattern="/^[^\s@]+@[^\s@]+\.[^\s@]+$/"
        />

        <input
          type="password"
          name="newPassword"
          placeholder="New Password"
          value={formData.newPassword}
          onChange={handleChange}
          required
          className="border p-2 rounded w-full mb-3"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Reset Password
        </button>

        <button
          type="button"
          className="mt-3 text-blue-500 underline"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </form>
    </div>
  );
};

export default TeacherForgotPassword;
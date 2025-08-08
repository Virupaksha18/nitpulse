import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TeacherLogin = ({ onBack }) => {
  const [name, setName] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check all fields are filled
    if (!name || !teacherId || !password) {
      setError("All fields are required.");
      return;
    }

    // Password format validation
    if (
      !/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(
        password
      )
    ) {
      setError(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    setError("");

    try {
      const res = await fetch(
        "https://nitpulse-backend.onrender.com/app/teachers/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, teacherId, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed. Please check your credentials.");
      }

      console.log("Login successful:", data);

      // Optional: Save token
      // localStorage.setItem("token", data.token);

      // ✅ Redirect to homepage
      navigate("/homepage");

    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong during login.");
    }
  };

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">
        Teacher Login
      </h2>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Teacher Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Teacher ID"
          value={teacherId}
          onChange={(e) => setTeacherId(e.target.value)}
          className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Login
        </button>

        <button
          type="button"
          className="text-blue-500 underline hover:text-blue-700 transition"
          onClick={onBack}
        >
          ← Back
        </button>
      </form>
    </div>
  );
};

export default TeacherLogin;
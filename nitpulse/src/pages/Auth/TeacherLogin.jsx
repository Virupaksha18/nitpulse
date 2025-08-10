import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const TeacherLogin = ({ onBack }) => {
  const { login } =  useAuth();
  const navigate = useNavigate();

   const [formData, setFormData] = useState({
      name: "",
      teacherId: "",
      password: "",
    });

  const [teacherIdError, setTeacherIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

   const validateTeacherId = (teacherId) => {
    const pattern = /^(3NA|3na)(22|23|24)(CS|cs|ai|AI|ec|EC|EE|ee|cv|CV)\d{3}$/i;
    if (!pattern.test(teacherId)) {
      setTeacherIdError("Teacher Id must be in format: 3NA22CS001 or 3na22cs001");
    } else {
      setTeacherIdError("");
    }
  };

  const validatePassword = (password) => {
    const rules = [
      { regex: /.{8,}/, message: "At least 8 characters" },
      { regex: /[A-Z]/, message: "At least one uppercase letter" },
      { regex: /[a-z]/, message: "At least one lowercase letter" },
      { regex: /[0-9]/, message: "At least one number" },
      { regex: /[^A-Za-z0-9]/, message: "At least one special character" },
    ];

    const failedRules = rules
      .filter((rule) => !rule.regex.test(password))
      .map((rule) => rule.message);

    if (failedRules.length > 0) {
      setPasswordError(`Password must have: ${failedRules.join(", ")}`);
    } else {
      setPasswordError("");
    }
  };

   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "teacherId") validateTeacherId(value);
    if (name === "password") validatePassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ( teacherIdError || passwordError) {
      setError("please fix the errors before logging in.");
      return;
    }

     try {
      const res = await fetch(
        "https://nitpulse-backend.onrender.com/app/teachers/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
          teacherId: formData.teacherId,
          password: formData.password,
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }
    // if (data.token){
    //   localStorage.setItem("token",data.token);
    // }
      alert("Login successful!🎉");
      login(data.teacher);

      // Navigate to homepage
      navigate("/");

    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-bold text-blue-700">Teachers Login</h2>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <input
        type="text"
        name="teacherId"
        placeholder="Teacher Id "
        value={formData.teacherId}
        onChange={handleChange}
        className={`border p-3 rounded-lg focus:outline-none focus:ring-2 ${
          teacherIdError
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-blue-500"
        }`}
        required
      />
      {teacherIdError && <p className="text-red-500 text-sm">{teacherIdError}</p>}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className={`border p-3 rounded-lg focus:outline-none focus:ring-2 ${
          passwordError
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-blue-500"
        }`}
        required
      />
      {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
      <p className="text-blue-500 underline text-sm cursor-pointer hover:text-blue-700" onClick = {() => navigate("/teacher/forgot-password")}>
        Forgot Password?
      </p>

      <button
        type="submit"
        className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Login
      </button>

      <button
        type="button"
        className="text-blue-500 underline hover:text-blue-700 transition"
        onClick={onBack || (() => navigate(-1))}
      >
        ← Back
      </button>

      
    </form>
  );
};

export default TeacherLogin;
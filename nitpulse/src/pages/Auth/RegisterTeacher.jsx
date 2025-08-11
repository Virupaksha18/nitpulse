import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterTeacher = ({ onBack }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    teacherId: "",
    email:"",
    branch: "",
    password: "",
  });
  const [passwordError,setPasswordError]=useState("");
   const [emailError, setEmailError] =useState("");
   const [teacherIdError, setTeacherIdError] =useState("");
  
  const branches = [
    "CSE",
    "AIML",
    "EC",
    "EEE",
    "Civil"
  ];

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });


  if (name === "password") {validatePassword(value);
       if (name === "teacherId") validateTeacherId(value);
    if (name === "email") validateEmail(value);
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

    const failed = rules.filter(r => !r.regex.test(password)).map(r => r.message);
    setPasswordError(failed.length ? `Password must have: ${failed.join(", ")}`: "");
  };
  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!pattern.test(email) ? "Format: Enter a valid email address (eg. abc@gmail.com)" : "");
  };

  const validateTeacherId = (teacherId) => {
    const pattern = /^(3na|3NA)(22|23|24)(cs|CS|ec|EC|ai|AI|ee|EE|cv|CV)\d{3}$/;
    setTeacherIdError(!pattern.test(teacherId) ? "Format: 3na22cs001 or 3NA22CS001 only" : "");
  };
 const handleSubmit = async (e) => {
  e.preventDefault();

  if (passwordError || teacherIdError || emailError) {
    alert("Please fix the errors before submitting.");
    return;
  }

  try {
    const res = await fetch(
      "https://nitpulse-backend.onrender.com/app/teachers/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );
 const data = await res.json();

    if (!res.ok) {
        alert(data.message || "Error registering Teacher.");
        if (data.message?.includes("already registered")) {
          navigate("/teacher-login"); // ✅ Redirect if already registered
        }
        return;
      }

      alert("Registration successful! You can now log in.");
      navigate("/teacher-login"); // ✅ Redirect after new registration

    } catch (error) {
      console.error(error);
      alert("Error registering Teacher. Please try again.");
    }
  };
  return (
     <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-white p-4 md:p-6 rounded-xl shadow-md"
    >
      <div>
        <h2 className="text-2xl font-bold text-blue-700">Teacher Registration</h2>
        <p className="text-sm text-gray-500">Fill the details to create your account</p>
      </div>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="text"
        name="teacherId"
        placeholder="Teacher Id (e.g. 3na22cs001)"
        value={formData.teacherId}
        onChange={handleChange}
        required
        className={`border p-3 rounded-lg focus:outline-none focus:ring-2 ${
          teacherIdError ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
        }`}
      />
      {teacherIdError && <p className="text-red-500 text-sm">{teacherIdError}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email (e.g. abc@gmail.com)"
        value={formData.email}
        onChange={handleChange}
        required
        className={`border p-3 rounded-lg focus:outline-none focus:ring-2 ${
          emailError ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
        }`}
      />
      {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

      
      <input
        type="password"
        name="password"
        placeholder="Create Password"
        value={formData.password}
        onChange={handleChange}
        required
        className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
          passwordError ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
        }`}
      />
      {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

      <select
        name="branch"
        value={formData.branch}
        onChange={handleChange}
        required
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Branch</option>
        {branches.map((b, idx) => (
          <option key={idx} value={b}>{b}</option>
        ))}
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Register
      </button>
      <button
        type="button"
        onClick={onBack}
        className="text-blue-500 underline hover:text-blue-700 transition"
      >
        ← Back
      </button>
    </form>
  );
};

export default RegisterTeacher;
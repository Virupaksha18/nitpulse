import React, { useState } from "react";

const RegisterTeacher = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: "",
    teacherId: "",
    branch: "",
    password: "",
  });
  const [passwordError,setPasswordError]=useState("");
  const branches = [
    "CSE",
    "AIML",
    "EC",
    "EEE",
    "Civil",
  ];

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });


  if (name === "password") {
      validatePassword(value);
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

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (passwordError) {
    alert("Please fix password issues before submitting.");
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

    if (!res.ok) {
      throw new Error("Failed to register teacher");
    }

    const data = await res.json();
    console.log("Teacher registered:", data);
    alert("Registration successful!");
    setFormData({ name: "", teacherId: "", branch: "", password: "" });
  } catch (err) {
    console.error("Error registering teacher:", err);
    alert("An error occurred. Please try again.");
  }
};
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">
        Register as Teacher
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="teacherId"
          placeholder="Teacher ID"
          value={formData.teacherId}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
<select
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select Branch</option>
          {branches.map((branch, index) => (
            <option key={index} value={branch}>
              {branch}
            </option>
          ))}
        </select>
       <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
            passwordError
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
          required
        />

        {passwordError && (
          <p className="text-red-500 text-sm">{passwordError}</p>
        )}

       {/* Buttons */}
      <button 
        type="submit" 
        className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Register
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

export default RegisterTeacher;
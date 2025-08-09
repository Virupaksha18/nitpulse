import React, { useState } from "react";
import RegisterStudent from "./RegisterStudent";
import RegisterTeacher from "./RegisterTeacher";
import StudentLogin from "./StudentLogin";
import TeacherLogin from "./TeacherLogin";

const AuthMainPage = () => {
  const [selected, setSelected] = useState(null); // "register" or "login"
  const [role, setRole] = useState(null); // "student" or "teacher"

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#d6e4f0] pt-24 p-4">
      <div className="bg-gradient-to-br from-blue-800 to-blue-350 rounded-3xl w-full max-w-6xl h-auto md:h-[800px] flex flex-col md:flex-row shadow-2xl overflow-hidden">
        
        {/* Left Panel */}
        <div className="w-full md:w-1/2 p-6 md:p-10 text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center">
                <img src="/logo.jpg" alt="Logo" className="w-20 h-20 rounded-full object-contain" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold">NITPulse</h1>
            </div>
            <p className="mt-4 md:mt-6 text-md md:text-lg">Empowering Students and Teachers</p>
          </div>

          <div className="flex flex-col gap-3 mt-6 md:mt-10">
            <button
              className={`py-3 rounded-full font-semibold transition ${
                selected === "register" ? "bg-white text-blue-700" : "bg-blue-600 hover:bg-blue-700"
              }`}
              onClick={() => {
                setSelected("register");
                setRole(null);
              }}
            >
              REGISTER
            </button>
            <button
              className={`py-3 rounded-full font-semibold transition ${
                selected === "login" ? "bg-white text-blue-700" : "bg-blue-400 hover:bg-blue-500"
              }`}
              onClick={() => {
                setSelected("login");
                setRole(null);
              }}
            >
              LOGIN
            </button>
          </div>

          <div className="flex gap-2 mt-8 md:mt-10">
            <div className="w-4 h-4 bg-yellow-400 rounded-full" />
            <div className="w-4 h-4 bg-blue-300 rounded-full" />
            <div className="w-4 h-4 bg-white rounded-full" />
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-1/2 bg-brown p-6 md:p-10 flex flex-col justify-center">

          {/* REGISTER SELECTION */}
          {selected === "register" && !role && (
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-2">Register</h2>
              <p className="text-sm text-gray-600 mb-4">Choose your role to get started</p>
              <div className="flex flex-col gap-4">
                <button
                  className="bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700"
                  onClick={() => setRole("student")}
                >
                  Register as Student
                </button>
                <button
                  className="bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600"
                  onClick={() => setRole("teacher")}
                >
                  Register as Teacher
                </button>
              </div>
            </div>
          )}

          {/* REGISTER FORMS */}
          {selected === "register" && role === "student" && (
            <RegisterStudent onBack={() => setRole(null)} />
          )}
          {selected === "register" && role === "teacher" && (
            <RegisterTeacher onBack={() => setRole(null)} />
          )}

          {/* LOGIN SELECTION */}
          {selected === "login" && !role && (
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-2">Login</h2>
              <p className="text-sm text-gray-600 mb-4">Choose your role to sign in</p>
              <div className="flex flex-col gap-4">
                <button
                  className="bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700"
                  onClick={() => setRole("student")}
                >
                  Login as Student
                </button>
                <button
                  className="bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600"
                  onClick={() => setRole("teacher")}
                >
                  Login as Teacher
                </button>
              </div>
            </div>
          )}

          {/* LOGIN FORMS */}
          {selected === "login" && role === "student" && (
            <StudentLogin onBack={() => setRole(null)} />
          )}
          {selected === "login" && role === "teacher" && (
            <TeacherLogin onBack={() => setRole(null)} />
          )}

          {/* DEFAULT */}
          {!selected && (
            <div className="text-center text-gray-500">
              <p>Select an option to continue</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthMainPage;
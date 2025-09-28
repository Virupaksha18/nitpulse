// Assignments.js
import React from "react";
import { Link } from "react-router-dom";

const assignmentSubjects = [
 { name: "Mathematics-1 for CSE Stream", code: "BMATS101",slug:"m1" },
    { name: "Physics for CSE Stream", code: "BPHYS102",slug:"physics" },
    { name: "Principal of Programming using c", code: "BPOP103",slug:"c" },
    { name: "Introduction to Electronics and Communication", code: "BESK104C",slug:"ec" },
    { name: "Communicative English", code: "BENG106",slug:"english" },
    { name: "Indian Constitution", code: "BICOK107",slug:"ic" },
    { name: "Innovation and Design Thinking", code: "BIDK108",slug:"idt" },
  ];

const Assignments = () => {
  return (
    <div className="pt-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Assignments - 1st Sem (2025 CSE)</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {assignmentSubjects.map((subject, index) => (
          <Link
            key={index}
            to={`/assignmentscs1/${subject.slug}`}
            className="bg-black text-white rounded-xl shadow-md p-6 text-center hover:bg-gray-900 transition duration-300"
          >
            <h3 className="text-xl font-bold mb-2">{subject.name}</h3>
            <p className="text-sm text-gray-300">{subject.code}</p>
            <p className="mt-4 text-purple-500">NITpluse.com</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
// Assignments.js
import React from "react";
import { Link } from "react-router-dom";

const assignmentSubjects = [
  { name: "Analysis and Design of Algorithms", code: "BCS401",slug:"ada" },
    { name: "Microcontroller", code: "BCS402",slug:"mc" },
    { name: "Database Management Systems", code: "BCS403",slug:"dbms" },
    { name: "Discrete Mathematical Structures", code: "BCS405A",slug:"dms" },
    { name: "Biology for Engineers", code: "BBOC407",slug:"be" },
    { name: "Universal Human Values", code: "BUHV408",slug:"uhv" },
];

const Assignments = () => {
  return (
    <div className="pt-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Assignments - 4th Sem (2023 CSE)</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {assignmentSubjects.map((subject, index) => (
          <Link
            key={index}
            to={`/assignments/${subject.slug}`}
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
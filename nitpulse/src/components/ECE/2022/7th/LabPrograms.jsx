// LabPrograms.js
import React from "react";
import { Link } from "react-router-dom";

const labSubjects = [
  { name: "Microwave Engineering and Antenna Theory Lab", slug: "Microwave-lab" , code: "BECL701" },
  { name: "Computer Networks and protocols Lab", slug: "Networks-lab",code:"BECL702" },
];

const LabPrograms = () => {
  return (
    <div className="pt-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Lab Programs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {labSubjects.map((subject, index) => (
          <Link
            key={index}
            to={`/lab-programs/${subject.slug}`}
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

export default LabPrograms;
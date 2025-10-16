// Assignments.js
import React from "react";
import { Link } from "react-router-dom";

const assignmentSubjects = [
  { name: "Engineering Mathematics for EEE", slug: "M-3", code: "BCS601" },
  { name: "Electronic Circuit Analysis", slug: "ECA", code: "BCS602" },
  { name: "Analog Electronic Circuits", slug: "AEC", code: "BCS613C" },
  { name: "Transformers and Generators", slug: "TG", code: "BCS604" },
  { name: "Digital Logic Circuits", slug: "DLC", code: "BCV654A" },
  { name: "Social Connect and Responsibility", slug: "SCR", code: "BCV654A" },
];

const Assignments = () => {
  return (
    <div className="pt-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Assignments - 3rd Sem (2024 EEE)</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {assignmentSubjects.map((subject, index) => (
          <Link
            key={index}
            to={`/assignmentsee3/${subject.slug}`}
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
// Assignments.js
import React from "react";
import { Link } from "react-router-dom";

const assignmentSubjects = [
  { name: "Engineeering Management and Entrepreneurship", slug: "EME", code: "BEE501" },
  { name: "Signals and DSP", slug: "SDSP", code: "BEE502" },
  { name: "Power Electronics", slug: "PE", code: "BEE513C" },
  { name: "Research Methodology and IPR", slug: "RM", code: "BEE504" },
  { name: "Environmental Studies", slug: "EVS", code: "BEE554A" },
  { name: "YOga", slug: "Yoga", code: "BEE554A" },
  { name: "Elecytric Vehicle Fundamentals", slug: "EVF", code: "BEE554A" },

];

const Assignments = () => {
  return (
    <div className="pt-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Assignments - 5th Sem (2025 EEE)</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {assignmentSubjects.map((subject, index) => (
          <Link
            key={index}
            to={`/assignmentsee5/${subject.slug}`}
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
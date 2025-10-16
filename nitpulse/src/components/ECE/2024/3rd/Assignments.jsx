// Assignments.js
import React from "react";
import { Link } from "react-router-dom";

const assignmentSubjects = [
  { name: "Mathematics-III", slug: "M3", code: "BEC301" },
  { name: "Digital System Design using Verilog", slug: "DSDV", code: "BEC302" },
  { name: "Electronic Principles and Circuits", slug: "EPC", code: "BEC303" },
  { name: "Network Analysis", slug: "NA", code: "BEC304" },
  { name: "Social Connect and Responsibility", slug: "SCR", code: "BEC305" },
  { name: "Computer Organisation and Architecture", slug: "COA", code: "BEC306" },

];

const Assignments = () => {
  return (
    <div className="pt-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Assignments - 3rd Sem (2024 ECE)</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {assignmentSubjects.map((subject, index) => (
          <Link
            key={index}
            to={`/assignmentsec3/${subject.slug}`}
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
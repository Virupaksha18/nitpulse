// Assignments.js
import React from "react";
import { Link } from "react-router-dom";

const assignmentSubjects = [
{ name: "Internet of Things", slug: "IoT", code: "BCS701" },
  { name: "Parallel Computing", slug: "PC", code: "BCS702" },
  { name: "Cryptography and Networking Security", slug: "cryptography", code: "BCS703" },
  { name: "Big Data Analytics", slug: "BDA", code: "BCS714D" },
  { name: "Conservation of Natural Resources", slug: "CNR", code: "BCS755B" },
];

const Assignments = () => {
  return (
    <div className="pt-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Assignments - 7th Sem (2022 CSE)</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {assignmentSubjects.map((subject, index) => (
          <Link
            key={index}
            to={`/assignments7/${subject.slug}`}
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
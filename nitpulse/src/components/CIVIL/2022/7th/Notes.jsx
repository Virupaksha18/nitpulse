import React from "react";
import { Link } from "react-router-dom";

const subjects = [
  { name: "Design of Steel Structure", slug: "DSS", code: "BCV701" },
  { name: "Estimation and Contract Management", slug: "ECM", code: "BCV702" },
  { name: "Prestressed Concrete", slug: "PC", code: "BCV703" },
  { name: "Intelligent Transport Systems", slug: "ITS", code: "BCV714A" },
  { name: "E-Waste Management", slug: "EWM", code: "BCV755A" },
];

const Notes = () => {
  return (
    <div className="pt-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Notes - 7th Sem (2022 CIVIL)</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {subjects.map((subject, index) => (
          <Link
            key={index}
            to={`/notes/${subject.slug}`}
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

export default Notes;
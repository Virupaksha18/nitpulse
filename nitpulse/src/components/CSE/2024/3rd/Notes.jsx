import React from "react";
import { Link } from "react-router-dom";

const subjects = [
  { name: "Mathematics for Computer Science",slug:"m3", code: "BCS301" },
    { name: "Digital Design and Computer Organisation",slug:"ddco", code: "BCS302" },
    { name: "Operating System",slug:"os", code: "BCS303" },
    { name: "Data Structure and Applications",slug:"dsa", code: "BCS304" },
    { name: "Object Oriented Programming with Java",slug:"java", code: "BCS306A" },
];

const Notes = () => {
  return (
    <div className="pt-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Notes - 3rd Sem (2024 CSE)</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {subjects.map((subject, index) => (
          <Link
            key={index}
            to={`/CSE/2024/3rd/notes/${subject.slug}`}
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
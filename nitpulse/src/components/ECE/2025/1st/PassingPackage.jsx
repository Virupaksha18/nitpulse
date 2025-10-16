import React from "react";
import { Link } from "react-router-dom";

const subjects = [
  { name: "Mathematics-I", slug: "M1", code: "BCS601" },
  { name: "Applied Chemistry for ECE", slug: "machine-learning", code: "BCS602" },
  { name: "Computer Aided Engineering Drawing", slug: "compiler-design", code: "BCS613C" },
  { name: "Samskrutika Kannada or Balake Kannada", slug: "research-methodology", code: "BCS604" },
  { name: "Scientific Foundation of Health", slug: "water-conservation", code: "BCV654A" },
  { name: "Introduction to Python Programming", slug: "water-conservation", code: "BCV654A" },
  { name: "Introduction to Mechanical Engineering", slug: "water-conservation", code: "BCV654A" },
];

const PassingPackage = () => {
  return (
    <div className="pt-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Passing package - 1st Sem (2025 ECE)</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {subjects.map((subject, index) => (
          <Link
            key={index}
            to={`/passing-package/${subject.slug}`}
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

export default PassingPackage;
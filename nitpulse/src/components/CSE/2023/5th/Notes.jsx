import React from "react";
import { Link } from "react-router-dom";

const subjects = [
  { name: "Software Engineering and Project Management",slug:"sepm", code: "BCS501" },
    { name: "Computer Networks",slug:"cn", code: "BCS502" },
    { name: "Theory of Computation",slug:"tc", code: "BSC503" },
    { name: "Unix System Programming",slug:"usp", code: "BCS515C" },
    { name: "Research Methodology and IPR", slug:"rm",code: "BRMK557" },
    { name: "Environmental Studies", slug:"evs",code:"BCS508"},
];

const Notes = () => {
  return (
    <div className="pt-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Notes - 5th Sem (2023 CSE)</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="bg-black text-white rounded-xl shadow-md p-6 text-center hover:bg-gray-900 transition duration-300"
          >
            <h3 className="text-xl font-bold mb-2">{subject.name}</h3>
            <p className="text-sm text-gray-300">{subject.code}</p>

            {/* Download Syllabus Button */}
            <a
              href={subject.syllabus}
              download
              className="mt-3 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition"
            >
              📄 Download Syllabus copy
            </a>

            {/* Navigate to Notes */}
            <Link
              to={`/CSE/2023/5th/notes/${subject.slug}`}
               className="mt-3 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition"
            >
              📄 View Notes →
            </Link>

            <p className="mt-2 text-purple-500">NITpluse.com</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
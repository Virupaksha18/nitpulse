import React from "react";
import { Link } from "react-router-dom";

const subjects = [
  { name: "Internet of Things", code: "BCS701", slug: "IoT", syllabus: "/syllabus/IoT.pdf" },
  { name: "Parallel Computing", code: "BCS702", slug: "PC", syllabus: "/syllabus/PC.pdf" },
  { name: "Cryptography and Networking Security", code: "BCS703", slug: "cryptography", syllabus: "/syllabus/cryptography.pdf" },
  { name: "Big Data Analytics", code: "BCS714D", slug: "data-analytics", syllabus: "/syllabus/data-analytics.pdf" },
  { name: "Conservation of Natural Resources", code: "BCS755B", slug: "CNR", syllabus: "/syllabus/CNR.pdf" },
];

const Notes = () => {
  return (
    <div className="pt-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Notes - 7th Sem (2022 CSE)</h2>

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
              📄 Download Syllabus
            </a>

            {/* Navigate to Notes */}
            <Link
              to={`/CSE/2022/7th/notes/${subject.slug}`}
              className="block mt-4 text-purple-400 hover:text-purple-300"
            >
              View Notes →
            </Link>

            <p className="mt-2 text-purple-500">NITpluse.com</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
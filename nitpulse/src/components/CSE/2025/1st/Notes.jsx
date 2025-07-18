import React from "react";
import { Link } from "react-router-dom";

const subjects = [
 { name: "Mathematics-1 for CSE Stream",slug:"m1",code: "BMATS101" },
    { name: "Physics for CSE Stream",slug:"physics", code: "BPHYS102" },
    { name: "Principal of Programming using c",slug:"c programming", code: "BPOP103" },
    { name: "Introduction to Electronics and Communication",slug:"iec", code: "BESK104C" },
    { name: "Communicative English",slug:"english", code: "BENG106" },
    { name: "Indian Constitution", slug:"ic",code: "BICOK107" },
    { name: "Innovation and Design Thinking",slug:"idt" ,code: "BIDK108" },
];

const Notes = () => {
  return (
    <div className="pt-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Notes - 1st Sem (2025 CSE)</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {subjects.map((subject, index) => (
          <Link
            key={index}
            to={`/CSE/2025/1st/notes/${subject.slug}`}
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
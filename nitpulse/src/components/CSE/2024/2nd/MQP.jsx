import React from "react";
import { Link } from "react-router-dom";

const subjects = [
{ name: "Mathematics-II", code: "BMATS201",slug:"m2" },
    { name: "Chemistry for CSE Stream", code: "BCHES202",slug:"chemistry" },
    { name: "Computer Aided Engineering Drawing", code: "BCEDK203",slug:"caed" },
    { name: "Introduction to Electrical and Electronics Engineering", code: "BEECK204A",slug:"eee" },
    { name: "Object Oriented Programming using c++", code: "BCPP205",slug:"cpp" },
    { name: "Kannada", code: "BKND206",slug:"kannada" },
];

const MQP = () => {
  return (
    <div className="pt-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10"> Model Questions Papers (MQP)</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {subjects.map((subject, index) => (
          <Link
            key={index}
            to={`/mqp/${subject.slug}`}
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

export default MQP;
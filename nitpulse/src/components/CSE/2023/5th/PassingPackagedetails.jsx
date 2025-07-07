import React from "react";
import { useParams } from "react-router-dom";

const modules = [
  "MODULE 1",
  "MODULE 2",
  "MODULE 3",
  "MODULE 4",
  "MODULE 5",
];

const PassingPackagedetails = () => {
  const { subjectSlug } = useParams();

  return (
    <div className="pt-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 capitalize">{subjectSlug.replace(/-/g, " ")} - Passing package</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {modules.map((mod, idx) => (
          <div
            key={idx}
           className="bg-black text-white rounded-xl shadow-md p-6 text-center hover:bg-gray-900 transition duration-300"
          >
            <h4 className="text-lg font-semibold mb-4">{mod}</h4>
            <div className="flex flex-col gap-2">
             <h1>Importent Quetions</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PassingPackagedetails;
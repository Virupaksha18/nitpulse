import React from "react";
import { useParams } from "react-router-dom";

const modules = [
  "MODULE 1",
  "MODULE 2",
  "MODULE 3",
  "MODULE 4",
  "MODULE 5",
];

const NoteModulesEEE1 = () => {
  const { subjectSlug } = useParams();

  return (
    <div className="pt-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 capitalize">
        {subjectSlug.replace(/-/g, " ")} - Modules
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {modules.map((mod, idx) => {
          const moduleNumber = idx + 1;
          const pdfUrl =` ${process.env.REACT_APP_BASE_URL}/files/notes/EEE/2025/1st/${subjectSlug}/module${moduleNumber}.pdf`;

          return (
            <div
              key={idx}
              className="bg-purple-100 rounded-xl shadow-md p-6 text-center hover:bg-purple-200 transition duration-300"
            >
              <h4 className="text-lg font-semibold mb-4">{mod}</h4>
              <div className="flex flex-col gap-2">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded text-sm"
                >
                  Download PDF 📥
                </a>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NoteModulesEEE1;
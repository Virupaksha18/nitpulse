import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const modules = [
  "MODULE 1",
  "MODULE 2",
  "MODULE 3",
  "MODULE 4",
  "MODULE 5",
];

const PassingPackageDetails = () => {
  const { subjectSlug } = useParams();
  const [pdfs, setPdfs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/files/notes/CSE/2022/6th/${subjectSlug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch passing package.");
        return res.json();
      })
      .then((data) => setPdfs(data))
      .catch((err) => setError(err.message));
  }, [subjectSlug]);

  if (error) {
    return <div className="text-center mt-10 text-red-500 text-xl">{error}</div>;
  }

  return (
    <div className="pt-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 capitalize">
        {subjectSlug.replace(/-/g, " ")} - Passing Package
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {modules.map((mod, idx) => (
          <div
            key={idx}
            className="bg-black text-white rounded-xl shadow-md p-6 text-center hover:bg-gray-900 transition duration-300"
          >
            <h4 className="text-lg font-semibold mb-4">{mod}</h4>
            {pdfs[idx] ? (
              <a
                href={pdfs[idx].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm"
              >
                Download Important Questions 📥
              </a>
            ) : (
              <p className="text-sm text-red-400">PDF not available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PassingPackageDetails;
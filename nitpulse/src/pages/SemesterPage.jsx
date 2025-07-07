import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const SemesterPage = () => {
  const { branch, scheme } = useParams();
  const navigate = useNavigate();

  const semestersByScheme = {
    2022: [ "6th", "7th"],
    2023: [ "4th", "5th"],
    2024: ["2nd", "3rd"],
    2025: ["1st"],
  };

  const semesters = semestersByScheme[scheme] || [];

  const handleSemesterClick = (semester) => {
    navigate(`/${branch}/${scheme}/${semester}`);
  };

  return (
    <div className="pt-24 px-4 min-h-screen bg-white flex flex-col items-center gap-6">
      <div className="bg-black text-white rounded-xl p-6 w-full max-w-md text-center shadow-lg">
        <h2 className="text-2xl font-bold">{branch?.toUpperCase()} - {scheme}</h2>
        <p className="mt-1 text-sm text-gray-400">Choose your semester</p>
      </div>

      {semesters.map((sem) => (
        <div
          key={sem}
          onClick={() => handleSemesterClick(sem)}
          className="cursor-pointer bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-xl text-center shadow hover:bg-blue-700 transition w-full max-w-md"
        >
          {sem.toUpperCase()} SEMESTER →
        </div>
      ))}

      <Link
        to={`/${branch}`}
        className="text-indigo-700 mt-6 text-sm hover:underline"
      >
        ← BACK TO SCHEMES
      </Link>
    </div>
  );
};

export default SemesterPage;
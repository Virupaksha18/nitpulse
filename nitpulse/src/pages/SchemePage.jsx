import React from "react";
import { useParams, Link } from "react-router-dom";

const SchemePage = () => {
  const { branch } = useParams(); // get the branch name from URL

  return (
    <div className="pt-24 px-4 min-h-screen bg-white flex flex-col items-center gap-6">
      {/* Branch Card */}
      <div className="bg-black text-white rounded-xl p-6 w-full max-w-md text-center shadow-lg">
        <h2 className="text-3xl font-bold">{branch?.toUpperCase()}</h2>
        <p className="mt-1 text-sm text-gray-400">NIT Pulse.com</p>
      </div>

      {/* Scheme Title */}
      <div className="bg-black text-white text-lg font-semibold px-6 py-3 rounded-xl w-full max-w-md text-center shadow">
        CHOOSE YOUR SCHEME
      </div>

      {/* Scheme Buttons */}
      <Link to={`/${branch}/2022`} className="w-full max-w-md">
        <div className="bg-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-xl text-center shadow hover:bg-indigo-700 transition">
          2022 SCHEME →
        </div>
      </Link>

      <Link to={`/${branch}/2023`} className="w-full max-w-md">
        <div className="bg-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-xl text-center shadow hover:bg-indigo-700 transition">
          2023 SCHEME →
        </div>
      </Link>
      <Link to={`/${branch}/2024`} className="w-full max-w-md">
        <div className="bg-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-xl text-center shadow hover:bg-indigo-700 transition">
          2024 SCHEME →
        </div>
      </Link>
      <Link to={`/${branch}/2025`} className="w-full max-w-md">
        <div className="bg-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-xl text-center shadow hover:bg-indigo-700 transition">
          2025 SCHEME →
        </div>
      </Link>

      {/* Back to Branches */}
      <Link to="/branches" className="text-indigo-700 mt-4 text-sm hover:underline">
        ← BACK TO BRANCHES
      </Link>
    </div>
  );
};

export default SchemePage;
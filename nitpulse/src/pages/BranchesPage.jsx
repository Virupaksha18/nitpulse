import React from 'react';
import { Link } from 'react-router-dom';

const branches = ['CSE', 'ECE', 'EEE', 'Civil', 'AIML'];

const BranchesPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4">
      <h1 className="text-3xl font-extrabold text-center mb-10">Choose Your Branch</h1>

      <div className="max-w-2xl mx-auto flex flex-col gap-8">
        {branches.map((branch) => (
          <Link
            to={`/${branch.toLowerCase()}`} // dynamic path like /cse, /ece etc
            key={branch}
            className="relative block rounded-2xl overflow-hidden shadow-lg transition transform hover:scale-105 duration-300"
            style={{
              backgroundImage: "radial-gradient(circle, #1a1a1a 0%, #000000 100%)",
            }}
          >
            <div className="p-16 text-center">
              <h2 className="text-4xl font-extrabold text-white drop-shadow-md">
                {branch}
              </h2>
            </div>
            <div className="absolute bottom-2 right-3 text-white text-sm opacity-70">
              NIT Pulse.com
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BranchesPage;
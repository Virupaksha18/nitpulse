import React from "react";
import { useParams, Link } from "react-router-dom";
import { BookOpen, FileText, FlaskConical, FileArchive, Package } from "lucide-react";

const SemesterDetails = () => {
  const { branch, scheme, semester } = useParams();

  const features = [
    { label: "Notes", icon: <BookOpen size={24} />, path: "notes" },
    { label: "Assignments", icon: <FileText size={24} />, path: "assignments" },
    { label: "Lab Programs", icon: <FlaskConical size={24} />, path: "labs" },
    { label: "MQPs", icon: <FileArchive size={24} />, path: "mqps" },
    { label: "Passing Package", icon: <Package size={24} />, path: "package" },
  ];

  return (
    <div className="pt-24 px-4 min-h-screen bg-black flex flex-col items-center gap-6">
      {/* Header Card */}
      <div className="bg-gray-900 text-white rounded-xl p-6 w-full max-w-md text-center shadow-lg">
        <h2 className="text-2xl font-bold">
          {branch?.toUpperCase()} - {scheme} - {semester.toUpperCase()} SEM
        </h2>
        <p className="mt-1 text-sm text-gray-400">NIT Pulse.com</p>
      </div>

      {/* Feature Cards */}
      {features.map((feature) => (
        <Link
          key={feature.label}
          to={`/${branch}/${scheme}/${semester}/${feature.path}`}
          className="w-full max-w-md"
        >
          <div className="flex items-center justify-between bg-gray-800 text-white px-6 py-4 rounded-xl shadow hover:bg-gray-700 transition">
            <div className="flex items-center gap-4">
              {feature.icon}
              <span className="text-lg font-semibold">{feature.label}</span>
            </div>
            
          </div>
        </Link>
      ))}

      <Link
        to={`/${branch}/${scheme}`}
        className="text-indigo-400 mt-6 text-sm hover:underline"
      >
        ← BACK TO SEMESTERS
      </Link>
    </div>
  );
};

export default SemesterDetails;
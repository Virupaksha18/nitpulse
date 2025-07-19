import React from "react";
import { useParams } from "react-router-dom";

const MQPDetails = () => {
  const { subjectSlug } = useParams();

  const basePath =` ${process.env.REACT_APP_BASE_URL}/files/mqp/ECE/2025/1st/${subjectSlug}`;

  const mqps = [
    {
      title: "MQP 1",
      description: "Model Question Paper on core concepts.",
      mqpLink:` ${basePath}/mqp1.pdf`,
      solution: "Solution to MQP 1 with detailed answers.",
      solutionLink: `${basePath}/solution1.pdf`,
    },
    {
      title: "MQP 2",
      description: "Advanced level model question paper.",
      mqpLink:` ${basePath}/mqp2.pdf`,
      solution: "Solution to MQP 2 with step-by-step explanation.",
      solutionLink:` ${basePath}/solution2.pdf`,
    },
  ];

  return (
    <div className="pt-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 capitalize">
        {subjectSlug.replace("-", " ")} - MQPs
      </h2>

      <div className="space-y-6">
        {mqps.map((mqp, index) => (
          <div key={index}>
            {/* MQP Card */}
            <div className="bg-black text-white rounded-xl shadow-md p-6 text-center hover:bg-gray-900 transition duration-300">
              <h3 className="font-bold text-lg mb-2">{mqp.title}</h3>
              <p className="mb-4">{mqp.description}</p>
              <a
                href={mqp.mqpLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm"
              >
                Download MQP 📥
              </a>
            </div>

            {/* Solution Card */}
            <div className="bg-gray-100 text-black border border-purple-300 rounded-xl shadow-inner p-4 ml-4 mt-2">
              <h4 className="font-semibold text-sm text-purple-700 mb-1">Solution:</h4>
              <p className="text-sm mb-3">{mqp.solution}</p>
              <a
                href={mqp.solutionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm"
              >
                Download Solution 📄
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MQPDetails;
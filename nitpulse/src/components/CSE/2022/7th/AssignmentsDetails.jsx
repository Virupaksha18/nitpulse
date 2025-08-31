 // AssignmentDetails.js
import React from "react";
import { useParams } from "react-router-dom";

const assignmentData = {
  "data-analytics": {
    title: "Big Data Analytics",
    assignments: [
      "Explain IaaS, PaaS, and SaaS with real-world examples.",
      "Write a report on virtualization techniques used in data centers.",
      "Discuss security issues in cloud computing and solutions."
    ]
  },
  "cryptography": {
    title: "Cryptography and Networking Security",
    assignments: [
      "Implement Linear Regression using Python and submit report.",
      "Explain overfitting and underfitting with diagrams.",
      "Compare supervised and unsupervised learning."
    ]
  },
  "IoT": {
    title: "Internet  of Things",
    assignments: [
      "Design a lexical analyzer for simple expressions.",
      "Explain different parsing techniques with examples.",
      "Write short notes on syntax-directed translation."
    ]
  },
  "CNR": {
    title: "Conservation of Natural Resources",
    assignments: [
      "Write a research proposal on any emerging technology.",
      "Explain quantitative vs qualitative research.",
      "Discuss ethical issues in research."
    ]
  },
  "PC": {
    title: "Parallel Computing",
    assignments: [
      "Write a research proposal on any emerging technology.",
      "Explain quantitative vs qualitative research.",
      "Discuss ethical issues in research."
    ]
  },
};

const AssignmentsDetails = () => {
  const { subjectSlug } = useParams();
  const subject = assignmentData[subjectSlug];

  if (!subject) {
    return <div className="text-center mt-10 text-red-500 text-xl">Assignments not found for this subject.</div>;
  }

  return (
    <div className="pt-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">{subject.title} - Assignments</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {subject.assignments.map((item, index) => (
          <div
            key={index}
            className="bg-black text-white p-6 rounded-xl shadow-md hover:bg-gray-900 transition duration-300"
          >
            <h3 className="text-lg font-semibold mb-2">Assignment {index + 1}</h3>
            <p className="text-sm text-gray-300">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentsDetails;
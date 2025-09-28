import React from "react";
import { useParams } from "react-router-dom";

const assignmentData = {
  "cloud-computing": {
    title: "Cloud Computing",
    assignments: [
      "Explain IaaS, PaaS, and SaaS with real-world examples.",
      "Write a report on virtualization techniques used in data centers.",
      "Discuss security issues in cloud computing and solutions."
    ]
  },
  "machine-learning": {
    title: "Machine Learning",
    assignments: [
      "Implement Linear Regression using Python and submit report.",
      "Explain overfitting and underfitting with diagrams.",
      "Compare supervised and unsupervised learning."
    ]
  },
  "compiler-design": {
    title: "Compiler Design",
    assignments: [
      "Design a lexical analyzer for simple expressions.",
      "Explain different parsing techniques with examples.",
      "Write short notes on syntax-directed translation."
    ]
  },
  "research-methodology": {
    title: "Research Methodology",
    assignments: [
      "Write a research proposal on any emerging technology.",
      "Explain quantitative vs qualitative research.",
      "Discuss ethical issues in research."
    ]
  },
  "water-conservation": {
    title: "Water Conservation",
    assignments: [
      "List techniques for rainwater harvesting.",
      "Create awareness poster on water conservation.",
      "Explain the impact of urbanization on groundwater."
    ]
  }
};

const AssignmentDetailsEEE1 = () => {
  const { subjectSlug } = useParams();
  const subject = assignmentData[subjectSlug];

  if (!subject) {
    return (
      <div className="text-center mt-10 text-red-500 text-xl">
        Assignments not found for this subject.
      </div>
    );
  }

  return (
    <div className="pt-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        {subject.title} - Assignments
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {subject.assignments.map((item, index) => {
          const questionPdf = `${process.env.REACT_APP_BASE_URL}/files/assignments/EEE/2025/1st/${subjectSlug}/assignment${index + 1}_questions.pdf`;
          const solutionPdf = `${process.env.REACT_APP_BASE_URL}/files/assignments/EEE/2025/1st/${subjectSlug}/assignment${index + 1}_solutions.pdf`;

          return (
            <div
              key={index}
              className="bg-black text-white p-6 rounded-xl shadow-md hover:bg-gray-900 transition duration-300"
            >
              <h3 className="text-lg font-semibold mb-2">
                Assignment {index + 1}
              </h3>
              <p className="text-sm text-gray-300 mb-4">{item}</p>

              <div className="flex gap-3">
                <a
                  href={questionPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition text-sm"
                >
                  Questions
                </a>
                <a
                  href={solutionPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition text-sm"
                >
                  Solutions
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AssignmentDetailsEEE1;
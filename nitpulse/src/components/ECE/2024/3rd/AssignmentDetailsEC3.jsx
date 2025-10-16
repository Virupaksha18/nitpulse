import React from "react";
import { useParams } from "react-router-dom";

const assignmentData = {
  "M3": {
    title: "Mathematics-III",
    assignments: [
      "Assignment-1 Questions with Solutions.",
      "Assignment-1 Questions with Solutions.",
      "Assignment-1 Questions with Solutions."
    ]
  },
  "DSDV": {
    title: "Digital System Design using Verilog",
    assignments: [
      "Assignment-1 Questions with Solutions.",
      "Assignment-1 Questions with Solutions.",
      "Assignment-1 Questions with Solutions."
    ]
  },
  "EPC": {
    title: "Electronic Principles and Circuits",
    assignments: [
      "Assignment-1 Questions with Solutions.",
      "Assignment-1 Questions with Solutions.",
      "Assignment-1 Questions with Solutions."
    ]
  },
  "NA": {
    title: "Network Analysis",
    assignments: [
     "Assignment-1 Questions with Solutions.",
      "Assignment-1 Questions with Solutions.",
      "Assignment-1 Questions with Solutions."
    ]
  },
  "SCR": {
    title: "Social Connectivity and Responsibility",
    assignments: [
      "Assignment-1 Questions with Solutions.",
      "Assignment-1 Questions with Solutions.",
      "Assignment-1 Questions with Solutions."
    ]
  },
  "COA": {
    title: "Computer Organisation and Architecture",
    assignments: [
      "Assignment-1 Questions with Solutions.",
      "Assignment-1 Questions with Solutions.",
      "Assignment-1 Questions with Solutions."
    ]
  },
  
};

const AssignmentDetails = () => {
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
          const questionPdf = `${process.env.REACT_APP_BASE_URL}/files/assignments/ECE/2024/3rd/${subjectSlug}/assignment${index + 1}_questions.pdf`;
          const solutionPdf = `${process.env.REACT_APP_BASE_URL}/files/assignments/ECE/2024/3rd/${subjectSlug}/assignment${index + 1}_solutions.pdf`;

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

export default AssignmentDetails;
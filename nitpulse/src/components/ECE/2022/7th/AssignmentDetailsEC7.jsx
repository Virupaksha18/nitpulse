import React from "react";
import { useParams } from "react-router-dom";

const assignmentData = {
  "microwave": {
    title: "Microwave Engineering and Antenna Theory",
    assignments: [
      "Microwave Engineering and Antenna Theory Assignment-1 Question and Answers.",
      "Microwave Engineering and Antenna Theory Assignment-2 Question and Answers.",
      "Microwave Engineering and Antenna Theory Assignment-3 Question and Answers."
    ]
  },
  "computer-networks": {
    title: "Computer Networks and Protocols",
    assignments: [
      "Computer Networks and Protocols Assignment-1 Question and Answers.",
      "Computer Networks and Protocols Assignment-2 Question and Answers.",
      "Computer Networks and Protocols Assignment-3 Question and Answers."
    ]
  },
  "wireless-communication": {
    title: "Wireless Communication Systems",
    assignments: [
      "Wireless Communication System Assignment-1 Question and Answers.",
      "Wireless Communication System Assignment-2 Question and Answers.",
      "Wireless Communication System Assignment-3 Question and Answers."
    ]
  },
  "network-security": {
    title: "Computer and Network Security",
    assignments: [
      "Computer and Network security ssignment-1 Question and Answers.",
      "Computer and Network security ssignment-2 Question and Answers",
      "Computer and Network security ssignment-3 Question and Answers."
    ]
  },
  "conservation": {
    title: "Conservation of Natural Resources",
    assignments: [
      "Conservation of Natural Resources Assignment-1 Question and Answers. ",
      "Conservation of Natural Resources Assignment-2 Question and Answers.",
      "Conservation of Natural Resources Assignment-3 Question and Answers."
    ]
  }
};

const AssignmentDetailsEC7 = () => {
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
          const questionPdf = `${process.env.REACT_APP_BASE_URL}/files/assignments/ECE/2022/7th/${subjectSlug}/assignment${index + 1}_questions.pdf`;
          const solutionPdf = `${process.env.REACT_APP_BASE_URL}/files/assignments/ECE/2022/7th/${subjectSlug}/assignment${index + 1}_solutions.pdf`;

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

export default AssignmentDetailsEC7;
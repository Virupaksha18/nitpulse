// LabProgramDetails.js
import React from "react";
import { useParams } from "react-router-dom";

const labProgramsData = {
  "chemistry-lab": {
    title: "Chemistry Lab",
    programs: [
      "Implement and visualize Linear Regression",
      "Logistic Regression for binary classification",
      "Decision Tree algorithm for classification",
      "KNN for handwritten digit recognition",
      "Naive Bayes classifier",
      "K-means clustering with visualization",
      "Principal Component Analysis (PCA)",
      "SVM classifier using scikit-learn",
      "Random Forest for classification",
      "Project: ML model deployment"
    ]
  },
  "cpp": {
    title: "C++ Lab",
    programs: [
      "Implement and visualize Linear Regression",
      "Logistic Regression for binary classification",
      "Decision Tree algorithm for classification",
      "KNN for handwritten digit recognition",
      "Naive Bayes classifier",
      "K-means clustering with visualization",
      "Principal Component Analysis (PCA)",
      "SVM classifier using scikit-learn",
      "Random Forest for classification",
      "Project: ML model deployment"
    ]
  }, 
};

const LabProgramsResource = () => {
  const { subjectSlug } = useParams();
  const subject = labProgramsData[subjectSlug];

  if (!subject) {
    return <div className="text-center mt-10 text-red-500 text-xl">Programs not found for this subject.</div>;
  }

  return (
    <div className="pt-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">{subject.title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {subject.programs.map((program, index) => (
          <div
            key={index}
            className="bg-black text-white p-6 rounded-xl shadow-md hover:bg-gray-900 transition duration-300"
          >
            <h3 className="text-lg font-semibold mb-2">Program {index + 1}</h3>
            <p className="text-sm text-gray-300">{program}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabProgramsResource;
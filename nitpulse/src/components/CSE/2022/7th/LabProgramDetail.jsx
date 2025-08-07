// LabProgramDetails.js
import React from "react";
import { useParams } from "react-router-dom";

const labProgramsData = {
  "data-analytics": {
    title: "Data Analytics Lab",
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
  "nosql-lab": {
    title: "NOSQL-Database Lab",
    programs: [
      "Create a VM instance using AWS",
      "Deploy a web app to AWS EC2",
      "Implement cloud storage using S3",
      "Dockerize a sample application",
      "Kubernetes basics and deployment",
      "Use AWS Lambda for serverless functions",
      "Create and test a REST API with AWS API Gateway",
      "Monitor cloud resources with CloudWatch",
      "Use AWS CLI for basic operations",
      "Mini Project on cloud deployment"
    ]
  },
  "blockchain-technology": {
    title: "Blockchain-Technology",
    programs: [
      "Create a portfolio website using React",
      "React Router navigation demo",
      "Create a Todo List app with Hooks",
      "State management using Context API",
      "Build a weather app using API",
      "Form validation with React Hook Form",
      "Authentication with Firebase",
      "Build a blog UI layout with Tailwind CSS",
      "CRUD operations with fake REST API",
      "Deploy the app using Netlify"
   ]
  }
};

const LabProgramDetail = () => {
  const { subjectSlug } = useParams();
  const subject = labProgramsData[subjectSlug];

  if (!subject) {
    return <div className="pt-20 text-center mt-10 text-red-500 text-xl">Programs not found for this subject.</div>;
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

export default LabProgramDetail;
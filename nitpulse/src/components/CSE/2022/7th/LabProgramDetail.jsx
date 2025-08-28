// LabProgramDetails.js
import React from "react";
import { useParams } from "react-router-dom";

const labProgramsData = {
  "IoT-lab": {
    title: "IoT-Lab",
    programs: [
      "01 Develop a program to blink 5 LEDs back and forth",
      "02 Develop a program to interface a relay with Arduino board",
      "03 Develop a program to deploy an intrusion detection system using Ultrasonic and sound sensors",
      "04 Develop a program to control a DC motor with Arduino board",
      "05 Develop a program to deploy smart street light system using LDR sensor.",
      "06 Develop a program to classify dry and wet waste with the Moisture sensor (DHT22).",
      "07 Develop a program to read the pH value of a various substances like milk, lime and water",
      "08 Develop a program to detect the gas leakage in the surrounding environment",
      "09 Develop a program to demonstrate weather station readings using Arduino.",
      "10 Develop a program to setup a UART protocol and pass a string through the protocol.",
      "11 Develop a water level depth detection system using Ultrasonic sensor.",
      "12 Develop a program to simulate interfacing with the keypad module to record the keystrokes."
    ]
  },
  "pc-lab": {
    title: "Parallel-Computing",
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
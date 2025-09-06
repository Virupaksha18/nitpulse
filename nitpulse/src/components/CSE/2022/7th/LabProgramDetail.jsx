// LabProgramDetails.js
import React from "react";
import { useParams } from "react-router-dom";

const labProgramsData = {
  "IoT-lab": {
    title: "IoT-Lab",
    programs: [
      "Develop a program to blink 5 LEDs back and forth",
      "Develop a program to interface a relay with Arduino board",
      "Develop a program to deploy an intrusion detection system using Ultrasonic and sound sensors",
      "Develop a program to control a DC motor with Arduino board",
      "Develop a program to deploy smart street light system using LDR sensor.",
      "Develop a program to classify dry and wet waste with the Moisture sensor (DHT22).",
      "Develop a program to read the pH value of a various substances like milk, lime and water",
      "Develop a program to detect the gas leakage in the surrounding environment",
      "Develop a program to demonstrate weather station readings using Arduino.",
      "Develop a program to setup a UART protocol and pass a string through the protocol.",
      "Develop a water level depth detection system using Ultrasonic sensor.",
      "Develop a program to simulate interfacing with the keypad module to record the keystrokes."
    ]
  },
  "pc-lab": {
    title: "Parallel-Computing",
    programs: [
      "write an openMP program to sort an array of n elements using both sequential and parallel mergesort. Record the difference in execution time",
      "Write an openMP program that divides the iterations into chunks containing 2 iterations, respectively",
      "Write an openMP program to calculate n Fibonacci numbers using tasks. This demonstrates task-based parallelism and recursive task creation",
      "Write an openMP program to find the prime numbers from 1 to n employing parallel for directive. Record both serial and parallel execution times",
      "Write an MPI program to demonstrate of MPI_Send and MPI_Recv.This program shows basics basics point-to-point communication between processes",
      "Write an MPI program to demonstrate deadlock using point-to-point communication and avoidance of deadlock by altering the call sequence",
      "Write an MPI program to demonstrate broadcast operation. Shows how data is distributed from one process to all other processes",
      "Write an MPI Program to demonstrate MPI_Scatter and MPI_Gather operations. Shows how data is distributed among processes and collected back",
      "Write an MPI Program to demonstrate MPI_Reduce and MPI_Allreduce operations. Shows collective computation operations "
      
    ]
  },
  
};

const LabProgramDetail = () => {
  const { subjectSlug } = useParams();
  const subject = labProgramsData[subjectSlug];

  const pdfLinks = subject?.programs.map((_, index) => {
    return `${process.env.REACT_APP_BASE_URL}/files/labs/CSE/2022/7th/${subjectSlug}/program${index + 1}.pdf`;
  });

  if (!subject) {
    return (
       <div className="pt-20 text-center mt-24 text-red-500 text-xl">Programs not found for this subject.</div>
    );
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
            <div>
            <h3 className="text-lg font-semibold mb-2">Program {index + 1}</h3>
            <p className="text-sm text-gray-300">{program}</p>
          </div>
          <a
          href={pdfLinks[index]}
           target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm mt-auto"
            >
              Download PDF 📥
            </a>
            </div>
        ))}
      </div>
    </div>
  );
};

export default LabProgramDetail;
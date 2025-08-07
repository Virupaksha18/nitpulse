import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import logoImg from "../assets/logo.jpg";

const branches = {
  CSE: {semester1:[
      { subject: "Mathematics-1", credits: 4 },
      { subject: "Applied Physics for CSE Stream", credits: 4 },
      { subject: "Principal of Programming using C", credits: 3},
      { subject: "Communicative English", credits: 1 },
      { subject: "Indian Constitution", credits: 1 },
      { subject: "Innovation and Design Thinking", credits: 1 },
      { subject: "Introduction to Electronics Engineering", credits: 3 },
      { subject: "Renewable Energy Sources", credits: 3 },
       ],
        semester2:[
      { subject: "Mathematics-II", credits: 4 },
      { subject: "Applied Chemistry for CSE stream", credits: 4 },
      { subject: "Computer-Aided Engineering Drawing", credits: 3 },
      { subject: "Samskrutika Kannada or Balake Kannada", credits: 1 },
      { subject: "Professional Writing skills in English", credits: 1 },
      { subject: "Scientific Foundation of Health", credits: 1 },
      { subject: "Introduction to Electrical engineering", credits: 3 },
      { subject: "Introduction to C++ Programming", credits: 3 },
      ],
      semester3:[
      { subject: "Mathematics for Computer Science", credits: 4 },
      { subject: "Digital Design & Computer Organisation", credits: 4 },
      { subject: "Operating System", credits: 4 },
      { subject: "Data Structure and Applications", credits: 3 },
      { subject: "Data Structure Lab", credits: 1 },
      { subject: "Social connect and Responsibility", credits: 1 },
      { subject: "Object oriented Programming with Java", credits: 3 },
      { subject: "Data Analytics with Excel", credits: 1 },
      { subject: "National service scheme", credits: 0 },
     ],
     
   
    semester4: [
      { subject: "Analysis & Design of Algorithms ", credits: 3 },
      { subject: "Microcontrollers", credits: 4 },
      { subject: "Database management System", credits: 4 },
      { subject: "Biology for Enginners", credits: 2 },
      { subject: "Universal human values course", credits: 1 },
      { subject: "Analysis & Design of Algorithms Lab", credits: 1 },
      { subject: "Discrete mathematical structure", credits: 3 },
      { subject: "Technical Writing using Latex Lab", credits: 1 },
      { subject: "National Service scheme", credits: 0 },

    ],
    semester5:[
      { subject: "Software engineering and project management", credits: 3 },
      { subject: "Computer Networking", credits: 4 },
      { subject: "Theory of Computation", credits: 4 },
      { subject: "Web Technology Lab", credits: 1 },
      { subject: "Mini project", credits: 2 },
      { subject: "Research Methodology and IPR", credits: 3 },
      { subject: "Unix System programming", credits: 3 },
      { subject: "Environmental studies and E-waste management", credits: 2 },
      { subject: "National service scheme", credits: 0 },

    ],
       semester6: [
      { subject: "Cloud Computing", credits: 4 },
      { subject: "Compiler Design", credits: 3 },
      { subject: "Machine Learning", credits: 4 },
      { subject: "Water Conservation", credits: 3 },
      { subject: "Project Phase-I", credits: 2},
      { subject: "React Lab", credits: 1 },
      { subject: "ML Lab", credits: 1 },
      { subject: "NSS", credits: 0 },
    ],
  },
  AIML: {semester1:[
      { subject: "Mathematics-1", credits: 4 },
      { subject: "Applied Physics for CSE-AI Stream", credits: 4 },
      { subject: "Principal of Programming using C", credits: 3},
      { subject: "Communicative English", credits: 1 },
      { subject: "Indian Constitution", credits: 1 },
      { subject: "Innovation and Design Thinking", credits: 1 },
      { subject: "Introduction to Electronics Engineering", credits: 3 },
      { subject: "Renewable Energy Sources", credits: 3 },
       ],
  },
  ECE: {
       semester1:[
      {subject: "Mathematics-1", credits: 4 },
      { subject: "Applied Chemistry for EEE Stream", credits: 4 },
      { subject: "Computer-Aided Engineering Drawing", credits: 3},
      { subject: "Communicative English", credits: 1 },
      { subject: "Samskrutika Kannada or Balake Kannada", credits: 1 },
      { subject: "Scientific Foundation of Health", credits: 1 },
      { subject: "Introduction to Python Programming", credits: 3 },
      { subject: "Introduction to Mechanical Engineering", credits: 3 },
    ],
     semester2:[
    {subject: "Mathematics-II", credits: 4 },
      { subject: "Applied Physics for CSE Stream", credits: 4 },
      { subject: "Basic Electronics", credits: 3},
      { subject: "Professional Writing skills in English", credits: 1 },
      { subject: "Indian Constitution", credits: 1 },
      { subject: "Innovation and Design Thinking", credits: 1 },
      { subject: "Introduction to C programming", credits: 3 },
      { subject: "Renewable Energy Sources", credits: 3 },
    ],
     semester3:[
      { subject: "Mathematics-III", credits: 4 },
      { subject: "Digital  system Design using Verilog", credits: 4 },
      { subject: "Electronic Principles and circuits", credits: 4},
      { subject: "Network Analysis", credits: 3 },
      { subject: "Analog and Digital System Design Lab", credits: 1 },
      { subject: "Social Connect and Responsibility", credits: 1 },
      { subject: "MatLab Programming", credits: 1 },
      { subject: "Computer Organisation and Architecture", credits: 3 },
      { subject: "National service scheme", credits: 0 },
    ],
     semester4:[
      {subject:"Electromagnetics Theory", credits: 4 },
      { subject: "Principles of Communication Systems", credits: 4 },
      { subject: "Control Systems", credits: 4},
      { subject: "Communication Lab", credits: 1 },
      { subject: "Microcontrollers Lab", credits: 1 },
      { subject: "Biology for Enginners", credits: 2 },
      { subject: "Universal human values course", credits: 1 },
      { subject: "National Service scheme", credits: 0 },
      { subject: "Microcontrollers", credits: 3 },
    ],
     semester5:[
    {subject: "Technological Innovation and Management Entrepreneurship", credits: 3 },
      { subject: "Digital Signal Processing", credits: 4 },
      { subject: "Digital Communication", credits: 4},
      { subject: "Digital Communication Lab", credits: 1 },
      { subject: "Mini project", credits: 2 },
      { subject: "Research Methodology and IPR", credits: 3 },
      { subject: "Environmental studies", credits: 2 },
      { subject: "Satllite and Optical Communication", credits: 3 },
      { subject: "National Service scheme", credits: 0 },

    ],
     semester6:[
    {subject: "Mathematics-1", credits: 4 },
      { subject: "Applied Physics for CSE Stream", credits: 4 },
      { subject: "Principal of Programming using C", credits: 3},
      { subject: "Communicative English", credits: 1 },
      { subject: "Indian Constitution", credits: 1 },
      { subject: "Innovation and Design Thinking", credits: 1 },
      { subject: "Introduction to Electronics Engineering", credits: 3 },
      { subject: "Renewable Energy Sources", credits: 3 },
    ],
  },
  EEE: {
    semester1:[
      {subject: "Mathematics-1", credits: 4 },
      { subject: "Applied Chemistry for EEE Stream", credits: 4 },
      { subject: "Computer-Aided Engineering Drawing", credits: 3},
      { subject: "Communicative English", credits: 1 },
      { subject: "Samskrutika Kannada or Balake Kannada", credits: 1 },
      { subject: "Scientific Foundation of Health", credits: 1 },
      { subject: "Introduction to Python Programming", credits: 3 },
      { subject: "Introduction to Mechanical Engineering", credits: 3 },
    ],
     semester2:[
    {subject: "Mathematics-II", credits: 4 },
      { subject: "Applied Physics for CSE Stream", credits: 4 },
      { subject: "Basic Electronics", credits: 3},
      { subject: "Professional Writing skills in English", credits: 1 },
      { subject: "Indian Constitution", credits: 1 },
      { subject: "Innovation and Design Thinking", credits: 1 },
      { subject: "Introduction to C programming", credits: 3 },
      { subject: "Renewable Energy Sources", credits: 3 },
    ],
     semester3:[
    {subject: "Engineering Mathematics for EEE", credits: 3 },
      { subject: "Electronic Circuit Analysis", credits: 4 },
      { subject: "Analog Electronic Circuits", credits: 4},
      { subject: "Transformers and Generators", credits: 3 },
      { subject: "Transformers and Generators Lab", credits: 1 },
      { subject: "Social Connect and Responsibility", credits: 1 },
      { subject: "National Service Scheme", credits: 0 },
      { subject: "Digital Logic Circuits", credits: 3 },
      { subject: "Circuit Laboratory using Spice", credits: 1 },

    ],
     semester4:[
    {subject: "Electric Motors  ", credits: 3 },
      { subject: "Transmission and Distribution", credits: 4 },
      { subject: "Microcontrollers", credits: 4},
      { subject: "Electric Motors Lab", credits: 1 },
      { subject: "Biology for Engineers", credits: 3 },
      { subject: "Universal human values Course", credits: 1 },
      { subject: "Physical Education", credits: 0 },
      { subject: "Sci Lab/Matlab for Electrical and Electronic Measurments", credits: 1 },
      { subject: "Opamps and LIC", credits: 3 },
    ],
     semester5:[
      {subject: "Engineering Management and Entrepreneurship ", credits: 3 },
      { subject: "Signals and DSP", credits: 4 },
      { subject: "Power Electronics", credits: 4},
      { subject: "Power Electronics Lab", credits: 1 },
      { subject: "Mini project", credits: 2 },
      { subject: "Research Methodology And IPR", credits: 3 },
      { subject: "Environmental Studies", credits: 2 },
      { subject: "Yoga", credits: 1 },
      { subject: "Electric Vehicle Fundamentals", credits: 3 },
    ],
     semester6:[
      {subject: "Power System Analysis I", credits: 4 },
      { subject: "Control Systems", credits: 4 },
      { subject: "Professional Elective Course", credits: 3},
      { subject: "Open Elective Course", credits: 3 },
      { subject: "Project Phase I", credits: 2 },
      { subject: "Control System Lab", credits: 1 },
      { subject: "Ability Enhancement Course", credits: 1 },
      { subject: "NSS", credits: 0 },
    ],
  },
  CIVIL: {
    semester1:[
    {subject: "Mathematics-1", credits: 4 },
      { subject: "Applied Physics for CSE Stream", credits: 4 },
      { subject: "Principal of Programming using C", credits: 3},
      { subject: "Communicative English", credits: 1 },
      { subject: "Indian Constitution", credits: 1 },
      { subject: "Innovation and Design Thinking", credits: 1 },
      { subject: "Introduction to Electronics Engineering", credits: 3 },
      { subject: "Renewable Energy Sources", credits: 3 },
    ],
     semester2:[
    {subject: "Mathematics-1", credits: 4 },
      { subject: "Applied Physics for CSE Stream", credits: 4 },
      { subject: "Principal of Programming using C", credits: 3},
      { subject: "Communicative English", credits: 1 },
      { subject: "Indian Constitution", credits: 1 },
      { subject: "Innovation and Design Thinking", credits: 1 },
      { subject: "Introduction to Electronics Engineering", credits: 3 },
      { subject: "Renewable Energy Sources", credits: 3 },
    ],
     semester3:[
    {subject: "Mathematics-1", credits: 4 },
      { subject: "Applied Physics for CSE Stream", credits: 4 },
      { subject: "Principal of Programming using C", credits: 3},
      { subject: "Communicative English", credits: 1 },
      { subject: "Indian Constitution", credits: 1 },
      { subject: "Innovation and Design Thinking", credits: 1 },
      { subject: "Introduction to Electronics Engineering", credits: 3 },
      { subject: "Renewable Energy Sources", credits: 3 },
    ],
     semester4:[
    {subject: "Mathematics-1", credits: 4 },
      { subject: "Applied Physics for CSE Stream", credits: 4 },
      { subject: "Principal of Programming using C", credits: 3},
      { subject: "Communicative English", credits: 1 },
      { subject: "Indian Constitution", credits: 1 },
      { subject: "Innovation and Design Thinking", credits: 1 },
      { subject: "Introduction to Electronics Engineering", credits: 3 },
      { subject: "Renewable Energy Sources", credits: 3 },
    ],
     semester5:[
    {subject: "Mathematics-1", credits: 4 },
      { subject: "Applied Physics for CSE Stream", credits: 4 },
      { subject: "Principal of Programming using C", credits: 3},
      { subject: "Communicative English", credits: 1 },
      { subject: "Indian Constitution", credits: 1 },
      { subject: "Innovation and Design Thinking", credits: 1 },
      { subject: "Introduction to Electronics Engineering", credits: 3 },
      { subject: "Renewable Energy Sources", credits: 3 },
    ],
     semester6:[
    {subject: "Mathematics-1", credits: 4 },
      { subject: "Applied Physics for CSE Stream", credits: 4 },
      { subject: "Principal of Programming using C", credits: 3},
      { subject: "Communicative English", credits: 1 },
      { subject: "Indian Constitution", credits: 1 },
      { subject: "Innovation and Design Thinking", credits: 1 },
      { subject: "Introduction to Electronics Engineering", credits: 3 },
      { subject: "Renewable Energy Sources", credits: 3 },
    ],
  },
 
};

const marksToGrade = (marks) => {
  if (marks >= 90) return 10;
  if (marks >= 80) return 9;
  if (marks >= 70) return 8;
  if (marks >= 60) return 7;
  if (marks >= 50) return 6;
  if (marks >= 40) return 5;
  if (marks >= 30) return 4;
  return 0;
};

const SGPAPage = () => {
  const [branch, setBranch] = useState("CSE");
  const [semester, setSemester] = useState("semester6");
  const [marks, setMarks] = useState({});
  const [sgpa, setSgpa] = useState(null);
  const [name, setName] = useState("");
  const [usn, setUsn] = useState("");

  const handleMarksChange = (subject, value) => {
    setMarks((prev) => ({
      ...prev,
      [subject]: Number(value),
    }));
  };

  const calculateSGPA = () => {
    const subjects = branches[branch][semester];
    let totalCredits = 0;
    let weightedSum = 0;

    subjects.forEach(({ subject, credits }) => {
      const grade = marksToGrade(marks[subject] || 0);
      totalCredits += credits;
      weightedSum += grade * credits;
    });

    setSgpa((weightedSum / totalCredits).toFixed(2));
  };

  const downloadSGPA = () => {
    const doc = new jsPDF();
    const subjects = branches[branch][semester];

    // Logo
    doc.addImage(logoImg, "JPEG", 15, 10, 20, 20);

    // Title
    doc.setFontSize(18);
    doc.text("NIT Pulse - SGPA Report", 45, 22);

    // Student Info
    doc.setFontSize(12);
    doc.text(`Name: ${name}`, 15, 35);
    doc.text(`USN: ${usn}`, 15, 41);
    doc.text(`Branch: ${branch}`, 15, 47);
    doc.text(`Semester: ${semester.replace("semester", "Semester ")}`, 15, 53);

    // Watermark
    doc.setTextColor(220);
    doc.setFontSize(120);
    doc.text("NIT Pulse", 35, 200, { angle:45 });

    // Table
    const tableData = subjects.map(({ subject, credits }) => [
      subject,
      marks[subject] || 0,
      marksToGrade(marks[subject] || 0),
      credits,
    ]);

    autoTable(doc, {
      startY: 60,
      head: [["Subject", "Marks", "Grade", "Credits"]],
      body: tableData,
    });

    const finalY = doc.lastAutoTable.finalY + 10;

    // SGPA Cell
    doc.setDrawColor(0);
    doc.setFillColor(230, 240, 255);
    doc.rect(15, finalY, 180, 15, "F");
    doc.setTextColor(0, 100, 0);
    doc.setFontSize(14);
    doc.text(`Final SGPA: ${sgpa}`, 20, finalY + 10);

    doc.save("SGPA_Report.pdf");
  };

  const subjectList = branches[branch][semester] || [];

  return (
    <div className="pt-24 max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
        SGPA Calculator
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block mb-2">Select Branch</label>
          <select
            value={branch}
            onChange={(e) => {
              setBranch(e.target.value);
              setSemester(Object.keys(branches[e.target.value])[0]);
              setMarks({});
              setSgpa(null);
            }}
            className="w-full p-2 border rounded"
          >
            {Object.keys(branches).map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2">Select Semester</label>
          <select
            value={semester}
            onChange={(e) => {
              setSemester(e.target.value);
              setMarks({});
              setSgpa(null);
            }}
            className="w-full p-2 border rounded"
          >
            {Object.keys(branches[branch]).map((sem) => (
              <option key={sem} value={sem}>
                {sem.replace("semester", "Semester ")}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block mb-2">Student Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-2">USN</label>
          <input
            type="text"
            value={usn}
            onChange={(e) => setUsn(e.target.value)}
            placeholder="Enter your USN"
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div className="space-y-4">
        {subjectList.map(({ subject, credits }) => (
          <div key={subject} className="grid grid-cols-3 items-center gap-4">
            <div>{subject}</div>
            <input
              type="number"
              placeholder="Marks"
              min="0"
              max="100"
              className="p-2 border rounded"
              value={marks[subject] || ""}
              onChange={(e) => handleMarksChange(subject, e.target.value)}
            />
            <div>Credits: {credits}</div>
          </div>
        ))}
      </div>

      <button
        onClick={calculateSGPA}
        className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Calculate SGPA
      </button>

      {sgpa && (
        <div className="mt-6 text-xl text-center font-bold text-green-700">
          Your SGPA is: {sgpa}
          <button
            onClick={downloadSGPA}
            className="mt-4 block mx-auto bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
          >
            Download SGPA Report
          </button>
        </div>
      )}
    </div>
  );
};

export default SGPAPage;
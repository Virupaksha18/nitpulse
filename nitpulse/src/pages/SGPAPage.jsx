import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import logoImg from "../assets/logo.jpg";

const branches = {
  CSE: {
    semester6: [
      { subject: "Cloud Computing", credits: 4 },
      { subject: "Compiler Design", credits: 3 },
      { subject: "Machine Learning", credits: 4 },
      { subject: "Water Conservation", credits: 3 },
      { subject: "Project Phase-I", credits: 1 },
      { subject: "React Lab", credits: 1 },
      { subject: "ML Lab", credits: 1 },
      { subject: "NSS", credits: 0 },
    ],
    semester4: [
      { subject: "Database Management", credits: 4 },
      { subject: "Operating Systems", credits: 3 },
      { subject: "Data Structures", credits: 4 },
      { subject: "Mathematics III", credits: 4 },
      { subject: "Software Engineering", credits: 3 },
    ],
  },
  ECE: {
    semester6: [
      { subject: "VLSI Design", credits: 4 },
      { subject: "Embedded Systems", credits: 3 },
    ],
  },
  EEE: {
    semester6: [
      { subject: "Power Systems", credits: 4 },
      { subject: "Control Systems", credits: 3 },
    ],
  },
  CIVIL: {
    semester6: [
      { subject: "Structural Engineering", credits: 4 },
      { subject: "Water Resources", credits: 3 },
    ],
  },
  AIML: {
    semester6: [
      { subject: "Deep Learning", credits: 4 },
      { subject: "Natural Language Processing", credits: 3 },
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
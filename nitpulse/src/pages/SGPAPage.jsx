import React, { useState } from 'react';

const SGPAPage = () => {
  const semesterData = {
    semester6: [
      { subject: 'Cloud Computing', credits: 4 },
      { subject: 'Compiler Design', credits: 3 },
      { subject: 'Machine Learning', credits: 4 },
      { subject: 'Water Conservation and Rain Water Harvesting', credits: 3 },
      { subject: 'Indian Knowledge System', credits: 1 },
      { subject: 'React Lab', credits: 1 },
      { subject: 'Machine Learning Lab', credits: 1 },
      { subject: 'NSS', credits: 0 }
    ],
    semester4: [
      { subject: 'Database Management', credits: 4 },
      { subject: 'Operating Systems', credits: 3 },
      { subject: 'Data Structures', credits: 4 },
      { subject: 'Mathematics III', credits: 4 },
      { subject: 'Software Engineering', credits: 3 },
    ],
    semester5:[
      
    ]
  };

  const [selectedSemester, setSelectedSemester] = useState('semester6');
  const [marks, setMarks] = useState({});
  const [sgpa, setSgpa] = useState(null);

  const handleSemesterChange = (e) => {
    const semester = e.target.value;
    setSelectedSemester(semester);
    setMarks({});
    setSgpa(null);
  };

  const handleGradeChange = (subject, value) => {
    setMarks(prev => ({
      ...prev,
      [subject]: Number(value),
    }));
  };

  const calculateSGPA = () => {
    const subjects = semesterData[selectedSemester];
    let totalCredits = 0;
    let totalWeighted = 0;

    subjects.forEach(({ subject, credits }) => {
      const gradePoint = marks[subject] || 0;
      totalWeighted += gradePoint * credits;
      totalCredits += credits;
    });

    const result = totalCredits > 0 ? (totalWeighted / totalCredits).toFixed(2) : null;
    setSgpa(result);
  };

  const subjects = semesterData[selectedSemester];

  return (
    <div className="p-6 max-w-3xl mx-auto pt-28">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">SGPA Calculator</h2>

      <div className="mb-6">
        <label htmlFor="semester" className="block text-lg mb-2">Select Semester</label>
        <select
          id="semester"
          className="p-2 border rounded w-full"
          value={selectedSemester}
          onChange={handleSemesterChange}
        >
          {Object.keys(semesterData).map((sem) => (
            <option key={sem} value={sem}>
              {sem.replace('semester', 'Semester ')}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        {subjects.map(({ subject, credits }) => (
          <div key={subject} className="grid grid-cols-3 gap-4 items-center">
            <div className="font-medium">{subject}</div>
            <input
              type="number"
              min="0"
              max="10"
              placeholder="Grade Point (0-10)"
              className="p-2 border rounded w-full"
              value={marks[subject] || ''}
              onChange={(e) => handleGradeChange(subject, e.target.value)}
            />
            <div className="text-right">Credits: {credits}</div>
          </div>
        ))}
      </div>

      <button
        onClick={calculateSGPA}
        className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Calculate SGPA
      </button>

      {sgpa !== null && (
        <div className="mt-6 text-xl text-center font-bold text-green-700">
          Your SGPA is: {sgpa}
        </div>
      )}
    </div>
  );
};

export default SGPAPage;
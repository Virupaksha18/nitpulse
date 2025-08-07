import React, { useState } from 'react';

const CGPAPage = () => {
  const [semesters, setSemesters] = useState([
    { sgpa: '', credits: '' },
  ]);
  const [cgpa, setCgpa] = useState(null);

  const handleInputChange = (index, field, value) => {
    const updated = [...semesters];
    updated[index][field] = value;
    setSemesters(updated);
  };

  const addSemester = () => {
    setSemesters([...semesters, { sgpa: '', credits: '' }]);
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let weightedSGPA = 0;

    semesters.forEach(({ sgpa, credits }) => {
      const parsedSgpa = parseFloat(sgpa);
      const parsedCredits = parseFloat(credits);

      if (!isNaN(parsedSgpa) && !isNaN(parsedCredits)) {
        weightedSGPA += parsedSgpa * parsedCredits;
        totalCredits += parsedCredits;
      }
    });

    if (totalCredits > 0) {
      const calculatedCGPA = weightedSGPA / totalCredits;
      setCgpa(calculatedCGPA.toFixed(2));
    } else {
      setCgpa(null);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto pt-32">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">CGPA Calculator</h2>

      {semesters.map((sem, index) => (
        <div key={index} className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="number"
            placeholder={`Semester ${index + 1} SGPA`}
            className="p-2 border rounded"
            value={sem.sgpa}
            onChange={(e) => handleInputChange(index, 'sgpa', e.target.value)}
          />
          <input
            type="number"
            placeholder={`Semester ${index + 1} Credits`}
            className="p-2 border rounded"
            value={sem.credits}
            onChange={(e) => handleInputChange(index, 'credits', e.target.value)}
          />
        </div>
      ))}

      <div className="flex gap-4 mt-4">
        <button
          onClick={addSemester}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Add Semester
        </button>
        <button
          onClick={calculateCGPA}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Calculate CGPA
        </button>
      </div>

      {cgpa !== null && (
        <div className="mt-6 text-xl font-bold text-center">
          Your CGPA is: {cgpa}
        </div>
      )}
    </div>
  );
};

export default CGPAPage;
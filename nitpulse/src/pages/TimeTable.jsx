import React, { useState } from 'react';
const baseUrl = process.env.REACT_APP_BASE_URL;

const timeTableData = {
  CSE: {
    '1st Semester': {
      'LH-01': `${baseUrl}/pdfs/CSE/1st/LH-01.pdf`,
      'LH-02': '/pdfs/CSE/1st/LH-02.pdf',
    },
    '2nd Semester': {
      'LH-01': '/pdfs/CSE/2nd/LH-01.pdf',
      'LH-02': '/pdfs/CSE/2nd/LH-02.pdf',
    },
  },
  ECE: {
    '1st Semester': {
      'LH-01': '/pdfs/ECE/1st/LH-01.pdf',
      'LH-02': '/pdfs/ECE/1st/LH-02.pdf',
    },
    '2nd Semester': {
      'LH-01': '/pdfs/ECE/2nd/LH-01.pdf',
      'LH-02': '/pdfs/ECE/2nd/LH-02.pdf',
    },
  },
  // Add other branches: EEE, CIVIL, AIML
};

const TimeTable = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);

  return (
    <div className="pt-24 px-4 min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <h1 className="text-3xl font-bold text-center mb-6">College Time Table</h1>

      {/* Branch Selection */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        {Object.keys(timeTableData).map((branch) => (
          <button
            key={branch}
            onClick={() => {
              setSelectedBranch(branch);
              setSelectedSemester(null);
            }}
            className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow"
          >
            {branch}
          </button>
        ))}
      </div>

      {/* Semester Selection */}
      {selectedBranch && (
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          {Object.keys(timeTableData[selectedBranch]).map((semester) => (
            <button
              key={semester}
              onClick={() => setSelectedSemester(semester)}
              className="px-6 py-2 bg-green-600 text-white rounded-xl shadow"
            >
              {semester}
            </button>
          ))}
        </div>
      )}

      {/* Display PDFs */}
      {selectedBranch && selectedSemester && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {Object.entries(
            timeTableData[selectedBranch][selectedSemester]
          ).map(([lh, url]) => (
            <div
              key={lh}
              className="border p-4 rounded-2xl shadow text-center bg-white"
            >
              <h3 className="text-xl font-semibold mb-2">{lh}</h3>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View / Download PDF
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimeTable;
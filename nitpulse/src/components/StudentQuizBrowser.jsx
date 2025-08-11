import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentQuizBrowser = ({ onBack }) => {
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState(null);

  const [semesters, setSemesters] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState(null);

  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Fetch branches on mount
    axios.get('/api/quizzes/branches').then(res => setBranches(res.data));
  }, []);

  useEffect(() => {
    if (selectedBranch) {
      axios.get(`/api/quizzes/semesters/${selectedBranch}`).then(res => {
        setSemesters(res.data);
        setSelectedSemester(null);
        setQuizzes([]);
      });
    }
  }, [selectedBranch]);

  useEffect(() => {
    if (selectedBranch && selectedSemester) {
      axios.get(`/api/quizzes/${selectedBranch}/${selectedSemester}`).then(res => {
        setQuizzes(res.data);
      });
    }
  }, [selectedBranch, selectedSemester]);

  if (selectedSemester) {
    return (
      <div className="max-w-md mx-auto p-4 border rounded shadow">
        <button onClick={() => setSelectedSemester(null)} className="mb-4 text-blue-600 underline">
          ← Back to Semesters
        </button>
        <h2 className="text-xl font-bold mb-4">
          Quizzes for {selectedBranch} - {selectedSemester}
        </h2>
        <ul>
          {quizzes.map(quiz => (
            <li key={quiz._id} className="mb-2">
              <a href={quiz.googleFormLink} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
                {quiz.subject}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (selectedBranch) {
    return (
      <div className="max-w-md mx-auto p-4 border rounded shadow">
        <button onClick={() => setSelectedBranch(null)} className="mb-4 text-blue-600 underline">
          ← Back to Branches
        </button>
        <h2 className="text-xl font-bold mb-4">Select Semester</h2>
        <ul>
          {semesters.map(sem => (
            <li key={sem} className="cursor-pointer text-blue-700 underline mb-2" onClick={() => setSelectedSemester(sem)}>
              {sem}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Select Branch</h2>
      <ul>
        {branches.map(branch => (
          <li key={branch} className="cursor-pointer text-blue-700 underline mb-2" onClick={() => setSelectedBranch(branch)}>
            {branch}
          </li>
        ))}
      </ul>
      <button onClick={onBack} className="mt-4 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">
        Back
      </button>
    </div>
  );
};

export default StudentQuizBrowser;
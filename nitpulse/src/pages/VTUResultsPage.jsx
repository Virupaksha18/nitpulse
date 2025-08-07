import React, { useState } from 'react';

const VTUResultsPage = () => {
  const [usn, setUsn] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open('https://results.vtu.ac.in', '_blank');
  };

  return (
    <div className="pt-24 p-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Check Your VTU Results</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-lg">Enter Your USN</span>
          <input
            type="text"
            placeholder="e.g. 1NT22CS001"
            value={usn}
            onChange={(e) => setUsn(e.target.value)}
            className="mt-2 p-2 border rounded w-full"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Go to VTU Results
        </button>
      </form>
    </div>
  );
};

export default VTUResultsPage;
import React from 'react';

const LatestUpdatesPage = () => {
  const updates = [
    {
      date: 'April 30, 2025',
      title: '6th Sem Timetable Released',
      description: 'VTU has released the 6th semester exam timetable for all branches.',
    },
    {
      date: 'April 28, 2025',
      title: 'Assignment Uploads Started',
      description: 'You can now upload and view assignments per subject in the Assignments section.',
    },
    {
      date: 'April 25, 2025',
      title: 'NITPulse Launched!',
      description: 'NITPulse is now live with notes, lab programs, MQPs, assignments and more.',
    },
  ];

  return (
    <div className="pt-24 p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-yellow-600 mb-8">Latest Updates</h2>
      <ul className="space-y-6">
        {updates.map((update, index) => (
          <li key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-md border">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{update.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{update.date}</p>
            <p className="text-gray-700">{update.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestUpdatesPage;
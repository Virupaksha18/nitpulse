import React from 'react';

const VTULinksPage = () => {
  const links = [
    { label: 'VTU Official Website', url: 'https://vtu.ac.in' },
    { label: 'Results Portal', url: 'https://results.vtu.ac.in' },
    { label: 'Student Portal', url: 'https://prexam.vtu.ac.in' },
    { label: 'VTU Notifications', url: 'https://vtu.ac.in/en/category/notification/' },
    { label: 'Exam Circulars', url: 'https://vtu.ac.in/en/circulars-2/' },
  ];

  return (
    <div className="pt-24 p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Useful VTU Links</h2>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index} className="bg-white p-4 rounded shadow hover:shadow-md">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VTULinksPage;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const NotesAPI = () => {
//   const [notes, setNotes] = useState([]);

//   useEffect(() => {
//     axios.get(`${process.env.REACT_APP_BASE_URL}/api/notes`)
//       .then((res) => {
//         setNotes(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching notes:", err);
//       });
//   }, []);

//   return (
//     <div className="pt-20 px-4 max-w-6xl mx-auto">
//       <h2 className="text-3xl font-bold text-center mb-10">Fetched Notes from Backend</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {notes.map((note, idx) => (
//           <div key={idx} className="bg-black text-white p-6 rounded-xl shadow-md hover:bg-gray-900 transition duration-300">
//             <h3 className="text-xl font-bold mb-2">{note.title}</h3>
//             <p className="text-sm text-gray-300">{note.slug}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NotesAPI;
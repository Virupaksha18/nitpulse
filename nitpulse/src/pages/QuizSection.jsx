// import React, { useState } from 'react';
// import TeacherUploadForm from '../components/TeacherUploadForm';  // form component (see below)
// import StudentQuizBrowser from '../components/StudentQuizBrowser'; // browse quizzes (see below)

// const QuizSection = () => {
//   const [mode, setMode] = useState(null); // null | 'upload' | 'view'

//   if (!mode) {
//     return (
//       <div className="quiz-card cursor-pointer p-4 border rounded shadow" onClick={() => setMode('choose')}>
//         <h3>Quiz Section</h3>
//         <p>Click here to Upload or View Quizzes</p>
//       </div>
//     );
//   }

//   if (mode === 'choose') {
//     return (
//       <div className="p-4 border rounded shadow max-w-md mx-auto">
//         <button onClick={() => setMode('upload')} className="btn m-2 p-3 bg-blue-600 text-white rounded">
//           Upload Quiz (Teacher)
//         </button>
//         <button onClick={() => setMode('view')} className="btn m-2 p-3 bg-green-600 text-white rounded">
//           View Quizzes (Student)
//         </button>
//         <button onClick={() => setMode(null)} className="btn m-2 p-3 bg-gray-400 text-white rounded">
//           Cancel
//         </button>
//       </div>
//     );
//   }

//   if (mode === 'upload') {
//     return <TeacherUploadForm onCancel={() => setMode(null)} />;
//   }

//   if (mode === 'view') {
//     return <StudentQuizBrowser onBack={() => setMode(null)} />;
//   }
// };

// export default QuizSection;
// LabProgramDetails.js
import React from "react";
import { useParams } from "react-router-dom";

const labProgramsData = {
  "web": {
    title: "WEB Technology Lab",
    programs: [
      "Develop the HTML page named as “Myfirstwebpage.html”. Add the following tags with relevant content. Set the title of the page as “My First Web Page” Within the body use the following tags: a) Moving text = “Basic HTML Tags” ",
      ". Develop the HTML page named as “Table.html” to display your class time table",
      "Develop an external style sheet named as “style.css” and provide different styles for h2, h3, hr, p, div, span, time, img & a tags. Apply different CSS selectors for tags and demonstrate the significance of each. ",
      "Develop HTML page named as “registration.html” having variety of HTML input elements with background colors, table for alignment & provide font colors & size using CSS styles. ",
      "Develop HTML page named as “newpaper.html” having variety of HTML semantic elements with background colors, text-colors & size for figure, table, aside, section, article, header, footer… etc.",
      " Apply HTML, CSS and JavaScript to design a simple calculator to perform the following operations: sum, product, difference, remainder, quotient, power, square-root and square.",
      "7. Develop JavaScript program (with HTML/CSS)",
      "8A. Develop a PHP program (with HTML/CSS) to keep track of the number of visitors visiting the web page and to display this count of visitors, with relevant headings. 8B.Develop a PHP program (with HTML/CSS) to sort the student records which are stored in the database using selection sort.click here",
      "Develop jQuery script (with HTML/CSS)",
      "Develop a JavaScript program with Ajax (with HTML/CSS) for:"
    ]
  },
  "cn": {
    title: "Computer networking Lab",
    programs: [
      "Implement and visualize Linear Regression",
      "Logistic Regression for binary classification",
      "Decision Tree algorithm for classification",
      "KNN for handwritten digit recognition",
      "Naive Bayes classifier",
      "K-means clustering with visualization",
      "Principal Component Analysis (PCA)",
      "SVM classifier using scikit-learn",
      "Random Forest for classification",
      "Project: ML model deployment"
    ]
  },
  
  
};

const LabProgramsdetails = () => {
const { subjectSlug } = useParams();
  const subject = labProgramsData[subjectSlug];

  const pdfLinks = subject?.programs.map((_, index) => {
    return `${process.env.REACT_APP_BASE_URL}/files/labs/CSE/2023/5th/${subjectSlug}/program${index + 1}.pdf`;
  });

  if (!subject) {
    return (
       <div className="pt-20 text-center mt-24 text-red-500 text-xl">Programs not found for this subject.</div>
    );
  }

  return (
    <div className="pt-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">{subject.title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {subject.programs.map((program, index) => (
          <div
            key={index}
            className="bg-black text-white p-6 rounded-xl shadow-md hover:bg-gray-900 transition duration-300"
          >
            <div>
            <h3 className="text-lg font-semibold mb-2">Program {index + 1}</h3>
            <p className="text-sm text-gray-300">{program}</p>
          </div>
          <a
          href={pdfLinks[index]}
           target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm mt-auto"
            >
              Download PDF 📥
            </a>
            </div>
        ))}
      </div>
    </div>
  );
};

export default LabProgramsdetails;
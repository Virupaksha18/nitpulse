import React from "react";
import { useParams } from "react-router-dom";

const mqpData = {
  "sepm": {
    title: "Software Engineering and Project Management ",
    mqps: [
      {
        title: "MQP 1",
        description: "Mini Project on Distributed Cloud Architecture",
        solution: "Solution includes AWS setup, load balancing, and monitoring tools.",
        mqpLink: "https://nitpluse.com/mqp1-cloud-computing.pdf",
        solutionLink: "https://nitpluse.com/solution1-cloud-computing.pdf"
      },
      {
        title: "MQP 2",
        description: "Case Study: Migration to Microservices in Cloud",
        solution: "Explains Docker, Kubernetes setup, and CI/CD pipeline design.",
        mqpLink: "https://nitpluse.com/mqp2-cloud-computing.pdf",
        solutionLink: "https://nitpluse.com/solution2-cloud-computing.pdf"
      }
    ]
  },
  "cn": {
    title: "Computer Networking",
    mqps: [
      {
        title: "MQP 1",
        description: "Project on Predicting House Prices using Regression",
        solution: "Uses sklearn, pandas, and visualization with matplotlib.",
        mqpLink: "https://nitpluse.com/mqp1-ml.pdf",
        solutionLink: "https://nitpluse.com/solution1-ml.pdf"
      },
      {
        title: "MQP 2",
        description: "Classification of Tweets using NLP techniques",
        solution: "Includes tokenization, TF-IDF, and Naive Bayes implementation.",
        mqpLink: "https://nitpluse.com/mqp2-ml.pdf",
        solutionLink: "https://nitpluse.com/solution2-ml.pdf"
      }
    ]
  },
   "tc": {
    title: "Theory of Computation",
    mqps: [
      {
        title: "MQP 1",
        description: "Project on Predicting House Prices using Regression",
        solution: "Uses sklearn, pandas, and visualization with matplotlib.",
        mqpLink: "https://nitpluse.com/mqp1-ml.pdf",
        solutionLink: "https://nitpluse.com/solution1-ml.pdf"
      },
      {
        title: "MQP 2",
        description: "Classification of Tweets using NLP techniques",
        solution: "Includes tokenization, TF-IDF, and Naive Bayes implementation.",
        mqpLink: "https://nitpluse.com/mqp2-ml.pdf",
        solutionLink: "https://nitpluse.com/solution2-ml.pdf"
      }
    ]
  },
   "usp": {
    title: "Unix System programming ",
    mqps: [
      {
        title: "MQP 1",
        description: "Project on Predicting House Prices using Regression",
        solution: "Uses sklearn, pandas, and visualization with matplotlib.",
        mqpLink: "https://nitpluse.com/mqp1-ml.pdf",
        solutionLink: "https://nitpluse.com/solution1-ml.pdf"
      },
      {
        title: "MQP 2",
        description: "Classification of Tweets using NLP techniques",
        solution: "Includes tokenization, TF-IDF, and Naive Bayes implementation.",
        mqpLink: "https://nitpluse.com/mqp2-ml.pdf",
        solutionLink: "https://nitpluse.com/solution2-ml.pdf"
      }
    ]
  },
   "rm": {
    title: "Research Methodology",
    mqps: [
      {
        title: "MQP 1",
        description: "Project on Predicting House Prices using Regression",
        solution: "Uses sklearn, pandas, and visualization with matplotlib.",
        mqpLink: "https://nitpluse.com/mqp1-ml.pdf",
        solutionLink: "https://nitpluse.com/solution1-ml.pdf"
      },
      {
        title: "MQP 2",
        description: "Classification of Tweets using NLP techniques",
        solution: "Includes tokenization, TF-IDF, and Naive Bayes implementation.",
        mqpLink: "https://nitpluse.com/mqp2-ml.pdf",
        solutionLink: "https://nitpluse.com/solution2-ml.pdf"
      }
    ]
  },
  "es": {
    title: "Environmental Studies",
    mqps: [
      {
        title: "MQP 1",
        description: "Project on Predicting House Prices using Regression",
        solution: "Uses sklearn, pandas, and visualization with matplotlib.",
        mqpLink: "https://nitpluse.com/mqp1-ml.pdf",
        solutionLink: "https://nitpluse.com/solution1-ml.pdf"
      },
      {
        title: "MQP 2",
        description: "Classification of Tweets using NLP techniques",
        solution: "Includes tokenization, TF-IDF, and Naive Bayes implementation.",
        mqpLink: "https://nitpluse.com/mqp2-ml.pdf",
        solutionLink: "https://nitpluse.com/solution2-ml.pdf"
      }
    ]
  },
};

const MQPsDetails = () => {
  const { subjectSlug } = useParams();
  const subject = mqpData[subjectSlug];

  if (!subject) {
    return (
      <div className="text-center mt-20 text-red-600 text-xl">
        MQPs not found for this subject.
      </div>
    );
  }

  return (
    <div className="pt-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">{subject.title}</h2>

      <div className="space-y-6">
        {subject.mqps.map((mqp, index) => (
          <div key={index}>
            {/* MQP Card */}
            <div className="bg-black text-white rounded-xl shadow-md p-6 text-center hover:bg-gray-900 transition duration-300">
              <h3 className="font-bold text-lg mb-2">{mqp.title}</h3>
              <p className="mb-4">{mqp.description}</p>
              <a
                href={mqp.mqpLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm"
              >
                Download MQP 📥
              </a>
            </div>

            {/* Solution Card */}
            <div className="bg-gray-100 text-black border border-purple-300 rounded-xl shadow-inner p-4 ml-4 mt-2">
              <h4 className="font-semibold text-sm text-purple-700 mb-1">Solution:</h4>
              <p className="text-sm mb-3">{mqp.solution}</p>
              <a
                href={mqp.solutionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm"
              >
                Download Solution 📄
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MQPsDetails;
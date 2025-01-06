import React from 'react';
import '../articles.css'; // Import the CSS for the flip card effect

const ArticlesAndContact = () => {
  const articles = [
    {
      title: "Enhancing SQL Database Interactions: Query Extraction and Result Restriction with LangChain Agents",
      link: "https://medium.com/@kritikaahuja.287/enhancing-sql-database-interactions-query-extraction-and-result-restriction-with-langchain-agents-09cea6c05818?source=user_profile_page---------0-------------f42426bcd2d9---------------"
    },
    {
      title: "Using YOLOv3 and OpenCV to Implement Custom Object Detection and OCR for Smart Analysis of the Aadhaar Card",
      link: "https://medium.com/analytics-vidhya/using-yolov3-and-opencv-to-implement-custom-object-detection-and-ocr-for-smart-analysis-of-the-aad46c349962?source=user_profile_page---------1-------------f42426bcd2d9---------------"
    }
  ];

  return (
    <section
      id="articles-contact"
      className="snap-start min-h-screen flex flex-col justify-center items-center p-8 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <h2 className="text-4xl font-semibold mb-8">Articles</h2>
      <div className="flex flex-wrap justify-center gap-8 mb-16">
        {articles.map((article, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-blue-500 dark:bg-blue-700 text-white">
                <h3 className="text-xl font-bold p-4">{article.title}</h3>
              </div>
              <div className="flip-card-back bg-yellow-500 dark:bg-yellow-700 text-white">
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-white hover:underline p-4 block">
                  Read full article here
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-4xl font-semibold mb-4">Contact</h2>
      <p className="mb-4">📧 Email: kritikaahuja.287@gmail.com</p>
      <br />
      <br />
      <h2 className="text-4xl font-semibold mb-4">Resume & CV</h2>
      <div className="flex flex-col items-center gap-4">
        <a href="../assets/Kritika Ahuja_Resume.pdf" download className="text-blue-500 hover:underline">
          Download Resume
        </a>
        <a href="../assets/Kritika_CV.pdf" download className="text-blue-500 hover:underline">
          Download CV
        </a>
      </div>
    </section>
  );
};

export default ArticlesAndContact;
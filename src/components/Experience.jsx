import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Associate, EY-GDS (Ernst & Young- Global Delivery Services)",
      date: "Present - October 2024",
      details: [
        "Spearheaded the development of advanced chat-bot solutions capable of processing structured and unstructured data, leveraging OpenAI APIs for accurate, formatted responses.",
        "Designed and implemented computational workflows using NumPy and pandas for complex data analysis and calculations, enhancing chatbot capabilities.",
        "Led end-to-end development, from requirement gathering and system analysis to deployment, ensuring robust and scalable solutions.",
        "Expanded team capabilities in generative AI by integrating cutting-edge natural language processing techniques, fostering innovation and efficiency."
      ]
    },
    {
      title: "Associate-3, EY-GDS",
      date: "October 2023 - October 2024",
      details: [
        "Developed Python-based Gen-AI solutions to automate processes and build chatbot frameworks, improving efficiency and time management.",
        "Integrated OpenAI APIs, boosting NLP capabilities by 30% and enabling advanced machine learning applications.",
        "Gathered project requirements, analyzed systems, designed solutions, and oversaw development and deployment processes."
      ]
    },
    {
      title: "Associate-2, EY-GDS",
      date: "July 2022 - October 2023",
      details: [
        "Developed and implemented machine learning algorithms to automate question-answer modules, improving efficiency and accuracy.",
        "Reduced manual effort by 40% through automated document generation using ML models.",
        "Applied web scraping techniques to gather data for content generation, enhancing project capabilities.",
        "Collaborated with the team to integrate these solutions into various projects, contributing to overall productivity."
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="snap-start min-h-screen flex flex-col justify-center items-center p-8 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      <h2 className="text-4xl font-semibold mb-8">Experience</h2>
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 w-full sm:w-1/2 lg:w-1/3 h-auto">
            <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{exp.date}</p>
            <ul className="list-disc list-inside space-y-2">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
import React from "react";
import eyGdsLogo from "../assets/ey-gds-logo.jpg";
import idfcLogo from "../assets/idfc-first-bank-logo.png";

const Experience = () => {
  const experiences = {
    "EY-GDS (Ernst & Young)": [
      {
        title: "Senior Associate",
        date: "Present - October 2024",
      },
      {
        title: "Associate-3",
        date: "October 2023 - October 2024",
      },
      {
        title: "Associate-2",
        date: "July 2022 - October 2023",
      },
      {
        title: "AI-ML Intern",
        date: "January 2022 - June 2022",
      },
    ],
    "IDFC First Bank": [
      {
        title: "Summer Intern",
        date: "May 2021 - July 2021",
      },
    ],
  };

  const companyLogos = {
    "EY-GDS (Ernst & Young)": eyGdsLogo,
    "IDFC First Bank": idfcLogo,
  };

  const renderExperienceGroup = (company, experiences) => (
    <div className="mb-12">
      <div className="flex items-center mb-4">
        <img
          src={companyLogos[company]}
          alt={`${company} Logo`}
          className="w-12 h-12"
        />
        <h3 className="ml-4 text-2xl font-bold text-blue-600 dark:text-blue-400">
          {company}
        </h3>
      </div>
      <div className="ml-16 border-l-2 border-gray-300 dark:border-gray-600 pl-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-6 relative"
          >
            <div className="absolute -left-6 top-0 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full border-2 border-gray-300 dark:border-gray-600"></div>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
              <h4 className="text-xl font-semibold mb-1 text-blue-600 dark:text-blue-400">
                {exp.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                {exp.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="experience"
      className="snap-start min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200"
    >
      <h2 className="text-4xl font-extrabold mb-8 tracking-wide text-center text-blue-600 dark:text-blue-400">
        Experience
      </h2>
      <div className="relative w-full max-w-4xl">
        {Object.entries(experiences).map(([company, expList]) =>
          renderExperienceGroup(company, expList)
        )}
      </div>
    </section>
  );
};

export default Experience;
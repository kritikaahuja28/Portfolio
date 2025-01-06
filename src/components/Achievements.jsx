import React from 'react';

const achievements = [
  {
    title: "Branch Topper - Computer Engineering 2019-20",
    date: "July 2019 - July 2020",
    description: "Third Rank in Academic year at TIET in 2019-2020",
    image: "src/assets/branch1.jpg"
  },
  {
    title: "Bosch AI Hackathon",
    date: "July - August 2021",
    description: "1st Prize Winner in Bosch AI Hackathon 2021. Theme - Smart AI Robot",
    image: "src/assets/bosch.jpg"
  },
  {
    title: "EY GDS Hackpions",
    date: "January 2021",
    description: "1st Prize Winner in Hackpions-EY GDS Hackathon 2021. Theme - Intelligent Automation with AI",
    image: "src/assets/eygds.png"
  },
  {
    title: "Xebia Xe-Thon",
    date: "October 2021",
    description: "1st Prize Winner in Xebia Xe-Thon 2021. Theme - Intelligent hiring using AI",
    image: "/src/assets/xebia.jpg"
  },
  {
    title: "Smart India Hackathon",
    date: "January - December 2020",
    description: "Winner Smart India Hackathon 2020. Theme - Open Innovation.",
    image: "src/assets/sih.jpg"
  },
  {
    title: "Branch Topper - Computer Engineering 2018-19",
    date: "July 2018 - July 2019",
    description: "Third Rank in Academic year at TIET in 2018-2019",
    image: "src/assets/branch1.jpg"
  },
  {
    title: "“Life out Here” AI/ML Hackathon",
    date: "October - December 2021",
    description: "Won Grand Prize in the Hackathon. Theme - Customer Dwelling time tracker",
    image: "src/assets/tsc.jpg"
  }
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="snap-start min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200"
    >
      <h2 className="text-4xl font-extrabold mb-8 tracking-wide text-center text-blue-600 dark:text-blue-400">
        Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img className="w-full h-48 object-cover" src={achievement.image} alt={achievement.title} />
            <div className="p-4">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">{achievement.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{achievement.date}</p>
              <p className="text-gray-700 dark:text-gray-300">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Robocop",
      technologies: "Python, ML, OpenCV",
      description: "An autonomous robot for real-time target detection, locking, shooting, patrolling, and collision avoidance mechanisms."
    },
    {
      title: "Smart Cap- GetVision",
      technologies: "HTML, CSS, ML, Python, OpenCV",
      description: "An artificial eye for visually impaired individuals, detecting and recognizing faces, objects, and expressions in real time using machine learning."
    }
  ];

  return (
    <section
      id="projects"
      className="snap-start min-h-screen flex flex-col justify-center items-center p-8 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
    >
      <h2 className="text-4xl font-semibold mb-8">Projects</h2>
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 w-full sm:w-1/2 lg:w-1/3 h-auto">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{project.technologies}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
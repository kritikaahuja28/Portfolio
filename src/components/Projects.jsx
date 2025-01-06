import React from 'react';
import '../projects.css'; // Import the CSS for the flip card effect

const Projects = () => {
  const projects = [
    {
      title: "ROBOCOP - Autonomous Shooting Robot",
      description: "This is a system that is capable of protecting the territory from UAVs & UGVs. It is able to DETECT, LOCK, and SHOOT DOWN the target and keep PATROLLING in a static environment and checking for suspicious activities using principles of Machine Learning and Computer Vision.",
      link: 'https://drive.google.com/file/d/1nxmA8L2ZbGLvhsMh_TSpmkCgC7fRWiXV/view',
      image: 'src/assets/robocop.jpg'
    },
    {
      title: "Smart Cap- GetVision",
      description: "An artificial eye for visually impaired individuals, detecting and recognizing faces, objects, and expressions in real time using machine learning.",
      image: 'src/assets/getv1.jpg'
    },
    {
      title:"Smart OCR",
      description: "Created and designed a solution to scan organizational charts in different formats (PDF, MS Word, and Excel, image, etc.) consisting of flowcharts and shapes like an arrow showing parent-to-child entity relationship. It was capable of extracting details like child and parent entity, ownership percentage, country, etc. from a flow-chart/diagram. In the end, content was converted into excel and formatted accordingly.",
      image: 'src/assets/ocr1.png'
    },
    {
      title:"Visual Recognition Algorithm",
      description: "To verify whether the submitted document is Voter Card and then validating the document by extracting the information present on it. It was capable of extracting details like Voter ID, Name, Father's Name using OCR and then validating the details using LUHN ALGORITHM.",
      image: 'src/assets/pan1.png'

    },
    {
      title:"Pharmacy - Management System",
      description: "This is a pharmacy management software developed in Python and designed in Tkinter aiming to ease out the day to day operations carried out by a pharmacy.As part of this project we also drafted a standard documentation which gave detailed explanation about the features of our software.",
      image: 'src/assets/pharmacy.jpg'
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
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg" />
                <h3 className="text-2xl font-bold mt-4">{project.title}</h3>
              </div>
              <div className="flip-card-back">
                {/* <h3 className="text-2xl font-bold mb-2">{project.title}</h3> */}
                {/* <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{project.technologies}</p> */}
                <p>{project.description}</p>
                {/* <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline mt-4 block">Click here to know More</a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
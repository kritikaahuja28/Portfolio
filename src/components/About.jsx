import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="snap-start min-h-screen flex flex-col justify-center items-center p-8 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
    >
      <h2 className="text-4xl font-semibold mb-4">About Me</h2>
      <p className="max-w-2xl text-center">
        I'm a software developer with experience in building modern web applications.
      </p>
    </section>
  );
};

export default About;

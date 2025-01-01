import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 snap-start">
      <div className="text-center">
        <img src="/path-to-photo.jpg" alt="Your Photo" className="rounded-full w-40 h-40 mx-auto" />
        <h1 className="text-4xl font-bold mt-4 text-gray-800 dark:text-gray-100">Hello, I'm [Your Name]</h1>
        <p className="text-lg mt-2 text-gray-600 dark:text-gray-400">Software Developer | Innovator</p>
      </div>
    </section>
  );
};

export default Hero;
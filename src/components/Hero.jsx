import React, { useState, useEffect } from 'react';
import yourPhoto from '../assets/Kritika Ahuja.jpg'; // Import the image

const Hero = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const lines = [
    "Building modern web applications.",
    "Creating innovative solutions.",
    "Passionate about technology."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prevLine) => (prevLine + 1) % lines.length);
    }, 8000); // Change line every 8 seconds (4 seconds typing + 4 seconds erasing)

    return () => clearInterval(interval);
  }, [lines.length]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 snap-start overflow-hidden">
      <div className="container mx-auto px-6 md:flex md:items-center md:space-x-12"> {/* Increase space between image and content */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-48 h-48 md:w-96 md:h-96"> {/* Increase image size */}
            <img src={yourPhoto} alt="Your Photo" className="rounded-full w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-4xl font-bold mt-4 text-gray-800 dark:text-gray-100">Hello, I'm Kritika Ahuja</h1>
          <p className="text-lg mt-2 text-gray-600 dark:text-gray-400 uppercase tracking-widest">Software Developer</p> {/* All caps and more word spacing */}
          <div>
            <h2 className="text-lg mt-2 text-gray-600 dark:text-gray-400">
              {lines[currentLine]}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
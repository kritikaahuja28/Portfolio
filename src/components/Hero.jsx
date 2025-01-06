import React, { useState, useEffect } from "react";
import yourPhoto from "../assets/Kritika Ahuja.jpg"; // Import the image

const Hero = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const lines = [
    "Building modern web applications.",
    "Creating innovative solutions.",
    "Passionate about technology.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prevLine) => (prevLine + 1) % lines.length);
    }, 4000); // Change line every 4 seconds

    return () => clearInterval(interval);
  }, [lines.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-800 snap-start overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 animate-pulse opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 md:flex md:items-center md:space-x-12">
        {/* Photo Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-48 h-48 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse opacity-50 blur-xl"></div>
            <img
              src={yourPhoto}
              alt="Your Photo"
              className="rounded-full w-full h-full object-cover shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-5xl font-extrabold text-gray-100 mb-4 animate-fadeIn">
            Hello, I'm <span className="text-blue-400">Kritika Ahuja</span>
          </h1>
          <p className="text-lg text-gray-400 uppercase tracking-widest mb-4 animate-fadeIn animation-delay-1">
            Artificial Intelligence Developer
          </p>

          {/* Typing Effect */}
          <div className="text-xl text-blue-300 font-mono relative h-8">
            <span className="absolute whitespace-nowrap overflow-hidden border-r-2 border-blue-400 pr-2 animate-typing">
              {lines[currentLine]}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

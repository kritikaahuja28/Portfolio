import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const Header = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          currentSection = section.getAttribute('id');
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="p-4 flex justify-around items-center bg-transparent fixed w-full z-10 transition-colors duration-300">
      <h1 className="text-2xl font-bold text-text-light dark:text-text-dark hidden md:block">My Portfolio</h1>
      <nav className="flex space-x-4">
        <a
          href="#hero"
          className={`p-2 rounded-full transition-colors duration-300 ${
            activeSection === 'hero' ? 'bg-accent-light dark:bg-accent-dark' : 'bg-transparent'
          }`}
        >
          <FaHome className="text-text-light dark:text-text-dark" />
        </a>
        <a
          href="#about"
          className={`p-2 rounded-full transition-colors duration-300 ${
            activeSection === 'about' ? 'bg-accent-light dark:bg-accent-dark' : 'bg-transparent'
          }`}
        >
          <FaUser className="text-text-light dark:text-text-dark" />
        </a>
        <a
          href="#experience"
          className={`p-2 rounded-full transition-colors duration-300 ${
            activeSection === 'experience' ? 'bg-accent-light dark:bg-accent-dark' : 'bg-transparent'
          }`}
        >
          <FaBriefcase className="text-text-light dark:text-text-dark" />
        </a>
        <a
          href="#articles-contact"
          className={`p-2 rounded-full transition-colors duration-300 ${
            activeSection === 'articles-contact' ? 'bg-accent-light dark:bg-accent-dark' : 'bg-transparent'
          }`}
        >
          <FaEnvelope className="text-text-light dark:text-text-dark" />
        </a>
      </nav>
      <button
        onClick={toggleTheme}
        className="relative w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full transition-colors duration-300 flex items-center justify-between p-1"
      >
        <div
          className={`absolute w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            theme === 'light' ? 'translate-x-0' : 'translate-x-6'
          }`}
        >
          {theme === 'light' ? <FaMoon className="text-gray-700" /> : <FaSun className="text-yellow-500" />}
        </div>
      </button>
    </header>
  );
};

export default Header;
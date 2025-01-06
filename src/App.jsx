import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ArticlesAndContact from './components/ArticlesAndContact';
import Achievements from './components/Achievements';
import './transition.css'; // Import the CSS for transitions

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark overflow-hidden transition-all duration-500 ease-in-out">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="snap-y snap-mandatory h-screen overflow-y-auto pt-16 fade-in">
        <Hero />
        <Experience />
        <Projects />
        <Achievements />
        <ArticlesAndContact />
      </main>
    </div>
  );
}

export default App;
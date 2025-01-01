import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ArticlesAndContact from './components/ArticlesAndContact';

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
    <div className="min-h-screen bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark overflow-hidden">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="snap-y snap-mandatory h-screen overflow-y-auto pt-16">
        <Hero />
        <Experience />
        <Projects />
        <ArticlesAndContact />
      </main>
    </div>
  );
}

export default App;
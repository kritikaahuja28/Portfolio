import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'articles', label: 'Articles' },
];

const Header = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Highlight the link for whichever section sits in the middle of the screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
      activeSection === id
        ? 'bg-slate-200/70 text-slate-900 dark:bg-slate-800 dark:text-white'
        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/60'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2.5 font-bold text-slate-900 dark:text-white">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-600 text-xs font-extrabold text-white">KA</span>
            Kritika Ahuja
          </a>
          <button
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </div>

        <div className="flex items-center gap-2">
          <nav aria-label="Main" className="no-scrollbar -mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
            <ul className="flex items-center gap-1">
              {links.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className={linkClass(link.id)}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="ml-1 whitespace-nowrap rounded-lg bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            className="hidden h-9 w-9 flex-shrink-0 place-items-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 md:grid"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

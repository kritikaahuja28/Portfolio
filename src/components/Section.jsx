import React from 'react';

// Shared layout for every content section: eyebrow, heading and optional subtitle
const Section = ({ id, eyebrow, title, subtitle, children, className = '' }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="mb-10">
        {eyebrow && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-indigo-600 dark:text-indigo-400">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base md:text-lg text-slate-600 dark:text-slate-400">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  </section>
);

export default Section;

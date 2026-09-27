import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaDownload, FaMapMarkerAlt } from "react-icons/fa";
import yourPhoto from "../assets/Kritika Ahuja.jpg"; // Import the image
import resume from "../assets/Kritika_Ahuja_Resume_GenAI.pdf";

const stats = [
  { value: "30%", label: "faster query resolution with the finance chatbot" },
  { value: "50%", label: "less report prep time using LLM drafting" },
  { value: "40%", label: "less analyst time on manual SQL" },
  { value: "70%", label: "faster KYC verification with OCR + ML" },
];

const Hero = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const lines = [
    "Building RAG and LangGraph systems.",
    "Shipping LLMs to production.",
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
    <section id="hero" className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-0 h-96 bg-gradient-to-b from-indigo-100/70 to-transparent dark:from-indigo-950/40" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-16">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Senior Associate 2 at EY-GDS
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Hello, I'm <span className="text-indigo-600 dark:text-indigo-400">Kritika Ahuja</span>
            </h1>
            <p className="mt-3 text-lg md:text-xl font-semibold text-slate-700 dark:text-slate-300">
              GenAI Engineer · Artificial Intelligence Developer
            </p>

            {/* Rotating line */}
            <p key={currentLine} className="fade-in mt-2 h-7 font-mono text-base text-indigo-600 dark:text-indigo-400">
              {lines[currentLine]}
            </p>

            <p className="mx-auto mt-5 max-w-xl text-base md:text-lg text-slate-600 dark:text-slate-400 md:mx-0">
              I own the design of a finance chatbot used by EY teams worldwide, built on RAG, LangGraph and Elasticsearch.
              Four years of shipping ML and LLM systems to production, from OCR pipelines to text-to-SQL agents.
            </p>

            <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
              <FaMapMarkerAlt /> Gurugram, India
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href={resume}
                download="Kritika_Ahuja_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
              >
                <FaDownload /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              >
                Get in touch
              </a>
              <a
                href="https://www.linkedin.com/in/kritika-ahuja28"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-12 w-12 place-items-center rounded-xl border border-slate-300 bg-white text-lg text-slate-700 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/kritikaahuja28"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-12 w-12 place-items-center rounded-xl border border-slate-300 bg-white text-lg text-slate-700 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Photo Section */}
          <div className="relative h-48 w-48 flex-shrink-0 sm:h-60 sm:w-60 md:h-80 md:w-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-400 opacity-30 blur-2xl" />
            <img
              src={yourPhoto}
              alt="Kritika Ahuja"
              className="relative h-full w-full rounded-full object-cover object-[50%_18%] shadow-xl ring-4 ring-white dark:ring-slate-800"
            />
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {stats.map((stat) => (
            <li
              key={stat.value + stat.label}
              className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 dark:border-slate-800 dark:bg-slate-900"
            >
              <strong className="block text-2xl md:text-3xl font-extrabold tracking-tight text-indigo-600 dark:text-indigo-400">
                {stat.value}
              </strong>
              <span className="mt-1 block text-xs md:text-sm text-slate-600 dark:text-slate-400">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { FaLinkedin, FaGithub, FaMedium, FaEnvelope, FaDownload, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import Section from './Section';
import latestResume from '../assets/Kritika_Ahuja_Resume_GenAI.pdf';
import olderResume from '../assets/Kritika Ahuja_Resume.pdf';
import cv from '../assets/Kritika_CV.pdf';

const articles = [
  {
    title: "Enhancing SQL Database Interactions: Query Extraction and Result Restriction with LangChain Agents",
    source: "Medium",
    tags: ["LangChain", "SQL Agents", "LLMs"],
    link: "https://medium.com/@kritikaahuja.287/enhancing-sql-database-interactions-query-extraction-and-result-restriction-with-langchain-agents-09cea6c05818?source=user_profile_page---------0-------------f42426bcd2d9---------------"
  },
  {
    title: "Using YOLOv3 and OpenCV to Implement Custom Object Detection and OCR for Smart Analysis of the Aadhaar Card",
    source: "Medium · Analytics Vidhya",
    tags: ["YOLOv3", "OpenCV", "OCR"],
    link: "https://medium.com/analytics-vidhya/using-yolov3-and-opencv-to-implement-custom-object-detection-and-ocr-for-smart-analysis-of-the-aad46c349962?source=user_profile_page---------1-------------f42426bcd2d9---------------"
  }
];

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kritika-ahuja28', icon: FaLinkedin },
  { label: 'GitHub', href: 'https://github.com/kritikaahuja28', icon: FaGithub },
  { label: 'Medium', href: 'https://medium.com/@kritikaahuja.287', icon: FaMedium },
  { label: 'Agaah', href: 'https://agaah.in', icon: FaExternalLinkAlt },
];

const ArticlesAndContact = () => {
  return (
    <>
      <Section id="articles" eyebrow="Writing" title="Articles" className="bg-white dark:bg-slate-900/40">
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <a
              key={article.link}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-800"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{article.source}</span>
              <h3 className="mt-2 text-lg font-bold leading-snug text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                {article.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {article.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-white px-2 py-0.5 text-xs font-medium text-slate-600 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                Read full article <FaArrowRight className="text-xs" />
              </span>
            </a>
          ))}
        </div>
      </Section>

      <section id="contact" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-indigo-800 px-6 py-12 text-center text-white shadow-xl md:px-12 md:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-indigo-200">Contact</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">Let's build something together</h2>
            <p className="mx-auto mt-3 max-w-xl text-indigo-100">
              Hiring for GenAI, LLM or ML engineering? I'd love to hear from you.
            </p>

            <a
              href="mailto:kritikaahuja.287@gmail.com"
              className="mt-8 inline-flex max-w-full items-center gap-2 break-all rounded-xl bg-white px-5 py-3 text-sm md:text-base font-semibold text-indigo-700 shadow-sm hover:bg-indigo-50"
            >
              <FaEnvelope className="flex-shrink-0" /> kritikaahuja.287@gmail.com
            </a>

            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                >
                  <Icon /> {label}
                </a>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-md border-t border-white/20 pt-8">
              <h3 className="text-lg font-bold">Resume &amp; CV</h3>
              <div className="mt-4 flex flex-col items-center gap-3">
                <a
                  href={latestResume}
                  download="Kritika_Ahuja_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-5 py-2.5 text-sm font-semibold hover:bg-white/25"
                >
                  <FaDownload /> Download Resume
                </a>
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-indigo-100">
                  <a href={olderResume} download="Kritika_Ahuja_Resume_2024.pdf" className="hover:text-white hover:underline">
                    Previous resume (2024)
                  </a>
                  <a href={cv} download="Kritika_Ahuja_CV.pdf" className="hover:text-white hover:underline">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticlesAndContact;

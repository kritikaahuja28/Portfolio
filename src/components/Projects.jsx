import React, { useState } from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import robocopImage from '../assets/robocop.jpg';
import getv1Image from '../assets/getv1.jpg';
import ocr1Image from '../assets/ocr1.png';
import pan1Image from '../assets/pan1.png';
import pharmacyImage from '../assets/pharmacy.jpg';
import Section from './Section';

const projects = [
  {
    title: "ROBOCOP - Autonomous Shooting Robot",
    description: "This is a system that is capable of protecting the territory from UAVs & UGVs. It is able to DETECT, LOCK, and SHOOT DOWN the target and keep PATROLLING in a static environment and checking for suspicious activities using principles of Machine Learning and Computer Vision.",
    tags: ["Machine Learning", "Computer Vision", "Robotics"],
    link: 'https://drive.google.com/file/d/1nxmA8L2ZbGLvhsMh_TSpmkCgC7fRWiXV/view',
    linkLabel: 'Watch demo',
    image: robocopImage
  },
  {
    title: "Smart Cap- GetVision",
    description: "An artificial eye for visually impaired individuals, detecting and recognizing faces, objects, and expressions in real time using machine learning.",
    tags: ["Machine Learning", "Face Recognition", "Accessibility"],
    image: getv1Image
  },
  {
    title: "Smart OCR",
    description: "Created and designed a solution to scan organizational charts in different formats (PDF, MS Word, and Excel, image, etc.) consisting of flowcharts and shapes like an arrow showing parent-to-child entity relationship. It was capable of extracting details like child and parent entity, ownership percentage, country, etc. from a flow-chart/diagram. In the end, content was converted into excel and formatted accordingly.",
    tags: ["Faster R-CNN", "Azure OCR", "Document AI"],
    image: ocr1Image
  },
  {
    title: "Visual Recognition Algorithm",
    description: "To verify whether the submitted document is Voter Card and then validating the document by extracting the information present on it. It was capable of extracting details like Voter ID, Name, Father's Name using OCR and then validating the details using LUHN ALGORITHM.",
    tags: ["YOLOv3", "OpenCV", "OCR"],
    link: 'https://medium.com/analytics-vidhya/using-yolov3-and-opencv-to-implement-custom-object-detection-and-ocr-for-smart-analysis-of-the-aad46c349962',
    linkLabel: 'Read the write-up',
    image: pan1Image
  },
  {
    title: "Pharmacy - Management System",
    description: "This is a pharmacy management software developed in Python and designed in Tkinter aiming to ease out the day to day operations carried out by a pharmacy.As part of this project we also drafted a standard documentation which gave detailed explanation about the features of our software.",
    tags: ["Python", "Tkinter"],
    image: pharmacyImage
  }
];

const agaahTags = ['Next.js', 'React Native', 'PostgreSQL', 'Groq', 'Ollama'];

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = project.description.length > 220;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <img src={project.image} alt={project.title} className="h-48 w-full object-cover object-top" loading="lazy" />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{project.title}</h3>
        <p className={`mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400 ${expanded ? '' : 'line-clamp-4'}`}>
          {project.description}
        </p>
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-1 self-start text-sm font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
            aria-expanded={expanded}
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              {tag}
            </span>
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
          >
            {project.linkLabel === 'Watch demo' ? <FaPlay className="text-xs" /> : null}
            {project.linkLabel} <FaArrowRight className="text-xs" />
          </a>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <Section id="projects" eyebrow="Projects" title="Projects" subtitle="Production GenAI on the side, plus the computer vision work that started it all.">
      {/* Featured: Agaah */}
      <a
        href="https://agaah.in"
        target="_blank"
        rel="noopener noreferrer"
        className="group mb-8 grid overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-sky-50 shadow-sm transition hover:shadow-lg dark:border-indigo-900/60 dark:from-indigo-950/50 dark:via-slate-900 dark:to-slate-900 md:grid-cols-5"
      >
        <div className="p-6 md:col-span-3 md:p-9">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live on web &amp; Android
          </span>
          <h3 className="mt-4 text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Agaah – News App
          </h3>
          <ul className="mt-4 space-y-2 text-sm md:text-base text-slate-600 dark:text-slate-400">
            <li>Pulls stories from 37 Indian and world feeds and shows each as a 50–70-word summary.</li>
            <li>Summaries come from gpt-oss-20b on Groq, falling back to Llama 3.2 on Ollama and then to an extractive summary. Badly formatted summaries are thrown out.</li>
            <li>When several outlets cover the same story, it's shown once, matched by title hash and word overlap.</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {agaahTags.map((tag) => (
              <span key={tag} className="rounded-md bg-white/80 px-2 py-0.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700">
                {tag}
              </span>
            ))}
          </div>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 group-hover:underline dark:text-indigo-400">
            Visit agaah.in <FaArrowRight className="text-xs" />
          </span>
        </div>
        <div className="hidden items-center justify-center bg-indigo-600 p-8 md:col-span-2 md:flex dark:bg-indigo-700">
          <div className="text-center text-white">
            <p className="text-6xl font-extrabold tracking-tight">37</p>
            <p className="mt-1 text-sm font-medium text-indigo-100">news feeds summarised by LLMs</p>
            <div className="mx-auto my-6 h-px w-16 bg-indigo-300/50" />
            <p className="text-3xl font-extrabold">3-tier</p>
            <p className="mt-1 text-sm font-medium text-indigo-100">fallback: Groq → Ollama → extractive</p>
          </div>
        </div>
      </a>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;

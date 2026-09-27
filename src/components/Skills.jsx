import React from 'react';
import Section from './Section';

const skillGroups = [
  {
    title: 'LLMs',
    skills: ['RAG', 'Agent workflows', 'LangChain', 'LangGraph', 'LangChain SQL Agent', 'PandasAI', 'OpenAI API', 'Groq', 'Ollama', 'Prompt design'],
  },
  {
    title: 'Search & Vector DBs',
    skills: ['Elasticsearch', 'Azure AI Search', 'FAISS'],
  },
  {
    title: 'ML & Vision',
    skills: ['Faster R-CNN', 'YOLOv3', 'Azure OCR', 'Entity extraction', 'OpenCV'],
  },
  {
    title: 'Languages & Backend',
    skills: ['Python', 'SQL', 'TypeScript', 'FastAPI', 'Flask', 'Next.js', 'React', 'PostgreSQL', 'Docker', 'Git', 'Azure DevOps'],
  },
];

const Skills = () => (
  <Section id="skills" eyebrow="Skills" title="Skills & Education" className="bg-white dark:bg-slate-900/40">
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {skillGroups.map((group) => (
        <div key={group.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
          <h3 className="mb-3 font-bold text-slate-900 dark:text-white">{group.title}</h3>
          <ul className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-200"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="mt-6 flex flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:bg-slate-900">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-indigo-600 dark:text-indigo-400">Education</p>
        <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">Thapar University, Patiala</h3>
        <p className="text-slate-600 dark:text-slate-400">Dual degree: BE in Computer Science + MBA · Branch Topper (3rd rank) 2018–19 and 2019–20</p>
      </div>
      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">2017 – 2022</span>
    </div>
  </Section>
);

export default Skills;

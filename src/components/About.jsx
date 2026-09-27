import React from 'react';
import { FaComments, FaCogs, FaEye } from 'react-icons/fa';
import Section from './Section';

const focusAreas = [
  {
    icon: FaComments,
    title: 'RAG & GenAI Chatbots',
    text: 'Retrieval-augmented assistants over Elasticsearch, Azure AI Search and FAISS, with LangGraph for multi-step questions.',
  },
  {
    icon: FaCogs,
    title: 'LLM Agents & Automation',
    text: "Text-to-SQL agents, report drafting and OpenAI-powered workflows that take routine work off people's plates.",
  },
  {
    icon: FaEye,
    title: 'Computer Vision & OCR',
    text: 'Document and image pipelines with Faster R-CNN, OpenCV and Azure OCR, from KYC checks to org-chart reading.',
  },
];

const About = () => (
  <Section id="about" eyebrow="About" title="About Me">
    <div className="grid gap-10 lg:grid-cols-5">
      <div className="space-y-4 text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400 lg:col-span-3">
        <p>
          I'm a GenAI Engineer and Senior Associate 2 at EY-GDS in Gurugram, where I own the design of a finance chatbot
          used by EY teams worldwide. I decide how documents are retrieved, how the LangGraph flows fit together and which
          model handles which task, and I work directly with finance users to turn their requests into features.
        </p>
        <p>
          I hold a dual degree (BE in Computer Science + MBA) from Thapar University, so I think about both the technical
          and the business side of AI. On the side, I built and run{' '}
          <a href="https://agaah.in" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-600 hover:underline dark:text-indigo-400">
            Agaah
          </a>
          , a live news app powered by open-source LLMs.
        </p>
        <p>
          I've won multiple hackathons, including Smart India Hackathon 2020 and Bosch AI Hackathon 2021, and I volunteer at
          community events like blood donation camps.
        </p>
      </div>
      <div className="grid gap-4 lg:col-span-2">
        {focusAreas.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
              <Icon />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default About;

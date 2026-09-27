import React from "react";
import eyGdsLogo from "../assets/ey-gds-logo.jpg";
import idfcLogo from "../assets/idfc-first-bank-logo.png";
import Section from "./Section";

const companies = [
  {
    name: "EY-GDS (Ernst & Young)",
    meta: "Gurugram, India",
    logo: eyGdsLogo,
    roles: [
      {
        title: "Senior Associate 2",
        date: "Sep 2026 – Present",
        current: true,
        points: [
          "Took over the design of the finance chatbot: how documents are retrieved, how the LangGraph flows fit together, and which model handles which task.",
          "Work directly with finance users to turn their requests into features, instead of building from specs handed down.",
          "Keep the chatbot reliable in production: fixing issues, testing answer quality, and keeping cost and response time in check.",
          "Review code for the associates on the team and help them when they get stuck.",
        ],
      },
      {
        title: "Senior Associate",
        date: "Oct 2024 – Sep 2026",
        points: [
          ["Built a finance chatbot that EY's finance teams use worldwide, with RAG over Elasticsearch, Azure AI Search and FAISS and LangGraph for multi-step questions. Queries now get resolved ", "30% faster", "."],
          ["Used LLMs to draft internal reports automatically, cutting preparation time ", "in half", "."],
        ],
      },
      {
        title: "Associate-3",
        date: "Oct 2023 – Oct 2024",
        points: [
          ["Built chatbots that answer questions about client databases by writing the SQL themselves (LangChain SQL Agent, PandasAI). Analysts spent ", "40% less time", " on manual queries."],
          "Connected OpenAI models to client workflows so routine tasks ran without anyone stepping in.",
        ],
      },
      {
        title: "Associate-2",
        date: "Jul 2022 – Oct 2023",
        points: [
          ["Built ML-based Q&A modules that raised answer accuracy by ", "25%", ", so fewer answers needed manual checks."],
          ["Wrote document generation scripts that saved ", "40%", " of processing time."],
        ],
      },
      {
        title: "AI-ML Intern",
        date: "Apr 2021 – Jun 2022",
        points: [
          ["Built a tool that reads org charts with Faster R-CNN and Azure OCR, automating ", "90%", " of the manual work."],
        ],
      },
    ],
  },
  {
    name: "IDFC First Bank",
    meta: "Summer Intern",
    logo: idfcLogo,
    roles: [
      {
        title: "Summer Intern",
        date: "Jun 2020 – Aug 2020",
        points: [["Built an OCR and ML pipeline for KYC checks that cut verification time by ", "70%", "."]],
      },
    ],
  },
];

// A point is either plain text or [before, highlighted metric, after]
const renderPoint = (point) =>
  Array.isArray(point) ? (
    <>
      {point[0]}
      <strong className="rounded bg-indigo-50 px-1 font-semibold text-slate-900 dark:bg-indigo-950/60 dark:text-white">
        {point[1]}
      </strong>
      {point[2]}
    </>
  ) : (
    point
  );

const Experience = () => {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Experience"
      subtitle="Grew from intern to Senior Associate 2 at EY-GDS, with three promotions since joining full-time in 2022."
      className="bg-white dark:bg-slate-900/40"
    >
      <div className="space-y-6">
        {companies.map((company) => (
          <div
            key={company.name}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-7 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-6 flex items-center gap-4">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-12 w-12 flex-shrink-0 rounded-xl bg-white object-contain p-1 ring-1 ring-slate-200 dark:ring-slate-700"
              />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">{company.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{company.meta}</p>
              </div>
            </div>

            <ol className="ml-2 space-y-7 border-l-2 border-slate-200 pl-6 md:ml-6 md:pl-8 dark:border-slate-700">
              {company.roles.map((role) => (
                <li key={role.title} className="relative">
                  <span
                    className={`absolute -left-[33px] top-1.5 h-3.5 w-3.5 rounded-full border-2 md:-left-[41px] ${
                      role.current
                        ? "border-indigo-600 bg-indigo-600 ring-4 ring-indigo-100 dark:border-indigo-400 dark:bg-indigo-400 dark:ring-indigo-950"
                        : "border-slate-400 bg-white dark:border-slate-500 dark:bg-slate-900"
                    }`}
                  />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white">{role.title}</h4>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{role.date}</span>
                  </div>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm md:text-base text-slate-600 marker:text-slate-400 dark:text-slate-400">
                    {role.points.map((point, i) => (
                      <li key={i}>{renderPoint(point)}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;

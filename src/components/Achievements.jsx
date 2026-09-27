import React from 'react';
import branch1 from '../assets/branch1.jpg';
import bosch from '../assets/bosch.jpg';
import eygds from '../assets/eygds.png';
import xebia from '../assets/xebia.jpg';
import sih from '../assets/sih.jpg';
import tsc from '../assets/tsc.jpg';
import Section from './Section';

const achievements = [
  {
    title: "Branch Topper - Computer Engineering 2019-20",
    date: "July 2019 - July 2020",
    description: "Third Rank in Academic year at TIET in 2019-2020",
    image: branch1
  },
  {
    title: "Bosch AI Hackathon",
    date: "July - August 2021",
    description: "1st Prize Winner in Bosch AI Hackathon 2021. Theme - Smart AI Robot",
    image:  bosch
  },
  {
    title: "EY GDS Hackpions",
    date: "January 2021",
    description: "1st Prize Winner in Hackpions-EY GDS Hackathon 2021. Theme - Intelligent Automation with AI",
    image:  eygds
  },
  {
    title: "Xebia Xe-Thon",
    date: "October 2021",
    description: "1st Prize Winner in Xebia Xe-Thon 2021. Theme - Intelligent hiring using AI",
    image: xebia
  },
  {
    title: "Smart India Hackathon",
    date: "January - December 2020",
    description: "Winner Smart India Hackathon 2020. Theme - Open Innovation.",
    image:  sih
  },
  {
    title: "Branch Topper - Computer Engineering 2018-19",
    date: "July 2018 - July 2019",
    description: "Third Rank in Academic year at TIET in 2018-2019",
    image:  branch1
  },
  {
    title: "“Life out Here” AI/ML Hackathon",
    date: "October - December 2021",
    description: "Won Grand Prize in the Hackathon. Theme - Customer Dwelling time tracker",
    image:  tsc
  }
];

const Achievements = () => {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Achievements"
      subtitle="Five hackathon wins and two years as branch topper."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <article
            key={index}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <img className="h-44 w-full object-cover" src={achievement.image} alt={achievement.title} loading="lazy" />
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{achievement.date}</p>
              <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">{achievement.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{achievement.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;

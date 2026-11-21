
"use client";

import { motion } from "framer-motion";

const groups = [
  {
    title: "Data Science & Analytics",
    note: "Tools and techniques used in data analysis projects",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Data Visualization",
      "Power BI",
      "Matplotlib",
    ],
  },
  {
    title: "Machine Learning & NLP",
    note: "Machine learning methods and NLP project experience",
    skills: [
      "Scikit-learn",
      "Classification",
      "Regression",
      "Model Evaluation",
      "TF-IDF",
      "Transformers",
      "Somali NLP",
      "SomBERTa",
      "SomBERTb",
    ],
  },
  {
    title: "Web & Mobile Development",
    note: "Technologies used to develop applications",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Flutter",
      "PHP",
      "Flask",
      "REST APIs",
      "Tailwind CSS",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: "Developer Tools",
    note: "Tools used for development and project management",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Postman",
      "Vercel",
      "npm",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-white/[.05] bg-slate-900/45 py-24"
    >
      <div className="section-shell">
        <p className="section-kicker">Tools & capabilities</p>

        <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
          My Technical <span className="gradient-text">Skills</span>
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Technologies, tools, and concepts I have worked with through
          academic learning and personal projects. I continue to improve
          my skills by building practical applications and exploring
          real-world problems.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-2xl border border-white/[.08] bg-slate-950/70 p-6"
            >
              <h3 className="text-lg font-bold text-white">
                {group.title}
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                {group.note}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/[.07] bg-white/[.04] px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

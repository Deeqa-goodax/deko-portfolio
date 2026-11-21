
"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  BarChart3,
  BrainCircuit,
  Smartphone,
  School,
} from "lucide-react";

const projects = [
  {
    title: "Somali Health Misinformation Detection",
    category: "NLP & Machine Learning",
    icon: BrainCircuit,
    description:
      "An academic research project focused on detecting potentially misleading health information in Somali text. It explores traditional machine learning models, SomBERTa and SomBERTb transformer experiments, and a workflow for explanations and human review.",
    tags: ["Python", "NLP", "Transformers", "Scikit-learn", "Flask"],
    href: "https://github.com/Deeqa-goodax/Health_misinformation_detection",
    status: "Academic research project",
  },
  {
    title: "Online Retail Sales Analysis",
    category: "Data Science & Analytics",
    icon: BarChart3,
    description:
      "An analysis of the UCI Online Retail dataset to explore sales performance, product trends, customer behaviour, and geographic markets. The project uses data analysis and visualization to communicate business insights and recommendations.",
    tags: ["Python", "Pandas", "Jupyter", "Power BI"],
    href: "https://github.com/Deeqa-goodax/online-retail-sales-analysis",
    status: "Data analytics project",
  },
  {
    title: "School Management System",
    category: "Full-Stack Development",
    icon: School,
    description:
      "A university group project developed using PHP and MySQL. It focuses on managing students, classes, attendance, grades, authentication, and form validation through a web-based system.",
    tags: ["PHP", "MySQL", "Tailwind CSS", "CRUD"],
    href: "https://github.com/Deeqa-goodax/school-management-system",
    status: "University group project",
  },
  {
    title: "Real Estate App",
    category: "Mobile Development",
    icon: Smartphone,
    description:
      "A mobile application project developed with Flutter and Dart, supported by a separate backend repository. It demonstrates practical work in mobile application interfaces and full-stack development.",
    tags: ["Flutter", "Dart", "Mobile UI", "Node.js", "MongoDB"],
    href: "https://github.com/Deeqa-goodax/Real-state-app",
    status: "Development project",
  },
  {
    title: "Spam Email Classifier",
    category: "Machine Learning",
    icon: BrainCircuit,
    description:
      "A machine learning practice project that explores classifying email messages as spam or legitimate using Python and machine learning techniques.",
    tags: ["Python", "Scikit-learn", "Classification", "NLP"],
    href: "https://github.com/Deeqa-goodax/Spam-Email-Classifier",
    status: "Learning project",
  },
  {
    title: "Data Science & ML Bootcamp",
    category: "Data Science & Machine Learning",
    icon: BarChart3,
    description:
      "A collection of practical exercises and learning activities covering data science, data analysis, Python programming, and machine learning concepts.",
    tags: ["Python", "Data Analysis", "Machine Learning"],
    href: "https://github.com/Deeqa-goodax/ds-ml-bootcamp",
    status: "Learning repository",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-shell">
        <p className="section-kicker">Selected work</p>

        <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
          Projects & <span className="gradient-text">Experiments</span>
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          A selection of academic, personal, and learning projects
          demonstrating my work in data science, machine learning,
          natural language processing, web development, and mobile
          application development.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: (index % 3) * 0.06,
                }}
                className="project-card flex flex-col rounded-2xl border border-white/[.08] bg-slate-900/65 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-cyan-300/15 bg-cyan-300/[.06] px-3 py-1 text-xs font-semibold text-cyan-200">
                    {project.category}
                  </span>

                  <Icon className="text-slate-500" size={20} />
                </div>

                <h3 className="mt-6 text-xl font-bold leading-snug text-white">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/[.05] px-2.5 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/[.07] pt-4">
                  <span className="text-xs text-slate-500">
                    {project.status}
                  </span>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-200 hover:text-cyan-100"
                  >
                    GitHub <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/Deeqa-goodax?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-cyan-300/30 hover:text-cyan-200"
          >
            <Github size={18} />
            Explore all repositories
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

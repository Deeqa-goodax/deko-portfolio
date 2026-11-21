
"use client";

import { motion } from "framer-motion";
import { Download, MapPin, Target, Code2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-kicker">A little about me</p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Curious mind.{" "}
            <span className="gradient-text">Practical builder.</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-white/[.08] bg-slate-900/70 p-6">
              <MapPin className="text-cyan-300" />
              <p className="mt-4 text-sm text-slate-500">Based in</p>
              <p className="mt-1 text-lg font-bold text-white">
                Mogadishu, Somalia
              </p>
            </div>

            <div className="rounded-2xl border border-white/[.08] bg-slate-900/70 p-6">
              <Target className="text-cyan-300" />
              <p className="mt-4 text-sm text-slate-500">Interested in</p>
              <p className="mt-1 text-lg font-bold text-white">
                Data Science, Machine Learning & Software Development
              </p>
            </div>

            <div className="rounded-2xl border border-white/[.08] bg-slate-900/70 p-6 sm:col-span-2 lg:col-span-1">
              <Code2 className="text-cyan-300" />
              <p className="mt-4 text-sm text-slate-500">My approach</p>
              <p className="mt-1 text-lg font-bold text-white">
                Learn by building and improving real-world projects
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/[.08] bg-gradient-to-br from-slate-900 to-slate-950 p-7 sm:p-9"
          >
            <p className="leading-8 text-slate-300">
              I hold a Bachelor's degree in Computer Science and
              Information Technology (CSIT), from Jamhuriya University
              of Science and Technology (JUST), Department of Computer
              Applications. I am based in Mogadishu, Somalia.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              I am passionate about Data Science, Machine Learning,
              Natural Language Processing (NLP), and Software Development.
              I enjoy exploring new technologies and applying them to
              practical projects.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              Through my academic and personal projects, I have gained
              practical experience in data analysis, machine learning,
              Somali text classification, web development, and mobile
              application development.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              My technical interests include Python, SQL, Data Analysis,
              Machine Learning, NLP, React, and application development.
              I am interested in opportunities to contribute to real-world
              projects and collaborate with other developers.
            </p>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-cyan-300/25 bg-cyan-300/[.07] px-5 py-3 font-semibold text-cyan-200 transition hover:bg-cyan-300/[.12]"
            >
              <Download size={17} /> View my CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

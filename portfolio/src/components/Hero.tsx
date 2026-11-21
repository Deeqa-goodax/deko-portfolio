
"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const photo = "https://avatars.githubusercontent.com/u/174172727?v=4";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-white/[.06] pt-24"
    >
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[110px]" />

      <div className="section-shell relative z-10 grid items-center gap-14 py-16 lg:grid-cols-[1.2fr_.8fr] lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[.07] px-4 py-2 text-sm text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Mogadishu, Somalia
            <span className="text-slate-500">·</span>
            Open to opportunities
          </div>

          <p className="section-kicker mb-4">Hello, I&apos;m</p>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Deko Ahmed <span className="gradient-text">Mohamed</span>
          </h1>

          <h2 className="mt-6 max-w-2xl text-xl font-semibold leading-relaxed text-slate-200 sm:text-2xl">
            Data Science & Machine Learning
            <span className="text-slate-500"> | </span>
            NLP
            <span className="text-slate-500"> | </span>
            Full-Stack & Mobile App Developer
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
            I am passionate about building practical technology solutions
            through data analysis, machine learning, and software development.
            My projects include Somali-language NLP, data-driven applications,
            and web and mobile development. I enjoy learning new technologies
            and applying them to real-world problems.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              Explore projects <ArrowUpRight size={17} />
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[.04] px-5 py-3 font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/[.08]"
            >
              <Download size={17} /> View CV
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3 text-slate-400">
            <a
              aria-label="GitHub"
              href="https://github.com/Deeqa-goodax"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 p-3 transition hover:border-cyan-300/40 hover:text-cyan-200"
            >
              <Github size={19} />
            </a>

            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/deeqa-ahmed-mohamed-87326031b"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 p-3 transition hover:border-cyan-300/40 hover:text-cyan-200"
            >
              <Linkedin size={19} />
            </a>

            <a
              aria-label="Email"
              href="mailto:deeqogoodax@gmail.com"
              className="rounded-xl border border-white/10 p-3 transition hover:border-cyan-300/40 hover:text-cyan-200"
            >
              <Mail size={19} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mx-auto w-full max-w-sm"
        >
          <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-800/90 to-slate-950 p-3 shadow-2xl shadow-cyan-950/30">
            <div className="absolute -inset-3 -z-10 rounded-[2.4rem] border border-cyan-300/10" />

            <div className="overflow-hidden rounded-[1.5rem] bg-slate-900">
              <img
                src={photo}
                alt="Profile avatar for Deko Ahmed Mohamed"
                className="aspect-[4/4.5] w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm font-semibold text-cyan-200">
                  My professional focus
                </p>

                <p className="mt-2 text-xl font-bold text-white">
                  Building useful technology with data and code.
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Data Science · Machine Learning · NLP · Web · Mobile
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-slate-500 transition hover:text-cyan-200 md:block"
      >
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
}

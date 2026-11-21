
"use client";

import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/[.06] bg-[#080d18]/85 backdrop-blur-xl">
      <div className="section-shell flex h-[76px] items-center justify-between">
        <a
          href="#home"
          className="text-lg font-extrabold tracking-tight text-white"
        >
          DEKO<span className="text-cyan-300">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-400 transition hover:text-cyan-200"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/25 bg-cyan-300/[.07] px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/[.13]"
          >
            <Download size={15} /> CV
          </a>
        </div>

        <button
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/10 p-2 text-slate-200 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/[.06] bg-[#0b1220] px-5 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-slate-300"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center gap-2 py-3 text-sm font-semibold text-cyan-200"
          >
            <Download size={15} /> View CV
          </a>
        </div>
      )}
    </nav>
  );
}

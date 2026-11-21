
export default function Footer() {
  return (
    <footer className="border-t border-white/[.06] py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <a href="#home" className="font-bold text-white">
          Deko Ahmed Mohamed
          <span className="text-cyan-300">.</span>
        </a>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Deko Ahmed Mohamed. Built with Next.js.
        </p>

        <a
          href="#home"
          className="text-xs text-slate-400 transition hover:text-cyan-200"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

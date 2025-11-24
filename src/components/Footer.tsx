export default function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Footer del sito"
      className="mt-12 bg-neutral-900 border-t-2 border-cyan-600/50 relative z-50 shadow-inner shadow-cyan-900/20"
    >
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-3">
        <div>
          <span className="font-mono text-cyan-400">
            &lt;CODM T-Doll Guide&gt;
          </span>
          <span className="ml-2">© 2025. Tutti i diritti riservati.</span>
        </div>

        <nav aria-label="Link utili">
          <a
            href="#overview"
            className="text-slate-400 hover:text-cyan-400 transition duration-200 mr-4"
          >
            Panoramica
          </a>
          <a
            href="#tdoll"
            className="text-slate-400 hover:text-cyan-400 transition duration-200 mr-4"
          >
            T-Doll
          </a>
          <a
            href="#tactics"
            className="text-slate-400 hover:text-cyan-400 transition duration-200"
          >
            Tattiche
          </a>
        </nav>
      </div>
    </footer>
  );
}

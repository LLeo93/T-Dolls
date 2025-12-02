export default function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Footer del sito"
      className="mt-12 bg-neutral-900 border-t-2 border-cyan-600/50 relative z-50 shadow-inner shadow-cyan-900/20"
    >
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-3">
        {/*Link utili */}
        <div>
          <span className="font-mono text-cyan-400">
            &lt;CODM T-Doll Guide&gt;
          </span>
          <span className="ml-2">© 2025</span>
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

      {/* DISCLAIMER */}
      <div className="max-w-6xl mx-auto px-4 pb-4 pt-2 text-center">
        <p className="text-xs text-slate-500">
          <strong className="text-cyan-500 uppercase">
            Disclaimer Importante:
          </strong>{' '}
          Questo sito è una guida non ufficiale a fini informativi e senza scopo
          di lucro. Non è affiliato, autorizzato, mantenuto o sponsorizzato da
          Activision Publishing, Inc., Tencent Games o TiMi Studio Group. Tutti
          i marchi e i diritti d'autore relativi a Call of Duty Mobile sono di
          proprietà dei rispettivi detentori. Il contenuto è utilizzato in
          accordo con la dottrina del Fair Use.
        </p>
      </div>
      {/* FINE DISCLAIMER */}
    </footer>
  );
}

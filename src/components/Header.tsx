const sections = [
  { id: 'overview', label: 'Panoramica' },
  { id: 'episodes', label: 'Episodi' },
  { id: 'tdoll', label: 'T-Doll' },
  { id: 'chains', label: 'Catene' },
  { id: 'shops', label: 'Negozi' },
  { id: 'tactics', label: 'Tattiche' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-60 bg-neutral-900 border-b border-cyan-600/50 shadow-xl shadow-cyan-900/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            aria-label="Vai alla home"
            className="inline-flex items-center gap-2"
          >
            <span className="text-2xl" aria-hidden>
              🔥
            </span>
            <span className="font-semibold  text-gray-200 ">
              CODM T-Doll Guide
            </span>
          </a>
          <span className="hidden sm:inline text-sm text-gray-200">
            Guida rapida
          </span>
        </div>

        <nav role="navigation" aria-label="Navigazione pagina">
          <ul className="hidden md:flex items-center gap-3 text-sm  text-gray-200 ">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="px-3 py-2 rounded-4xl whitespace-nowrap hover:text-sky-400 hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  aria-label={`Vai alla sezione ${s.label}`}
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#top"
                className=" whitespace-nowrap px-3 py-2 rounded-3xl text-xs bg-sky-700 text-white  hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-sky-400"
                aria-label="Torna su"
              >
                Torna Su
              </a>
            </li>
          </ul>

          {/* Mobile compact menu (simple) */}
          <div className="md:hidden">
            <details className="relative">
              <summary className="px-2 py-1 rounded cursor-pointer bg-neutral-800 text-gray-100 hover:bg-cyan-900/40 transition duration-200">
                Menu ☰
              </summary>
              <ul className="mt-2 p-2 bg-neutral-900 shadow-xl shadow-cyan-950/50 rounded flex flex-col gap-1 absolute right-0 w-48 border border-cyan-800/50">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="block px-2 py-1 rounded text-gray-300 hover:bg-cyan-900/40 hover:text-cyan-400 transition duration-200"
                      aria-label={`Vai alla sezione ${s.label}`}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </nav>
      </div>
    </header>
  );
}

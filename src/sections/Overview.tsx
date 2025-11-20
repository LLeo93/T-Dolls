import EP1 from '../assets/images/EP1.jpg';
import EP2 from '../assets/images/EP2.jpg';
import EP3 from '../assets/images/EP3.jpg';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
export default function Overview() {
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  return (
    <section
      id="overview"
      aria-labelledby="overview-title"
      className="pt-5  relative z-50"
    >
      <header>
        <h2
          id="overview-title"
          className="text-3xl font-extrabold text-cyan-400 drop-shadow-lg drop-shadow-cyan-400/40 mb-6 "
        >
          Panoramica
        </h2>
        <p className="text-sm text-slate-400">
          Struttura dell'evento, episodi e consigli generali.
        </p>
      </header>
      <details
        className="bg-neutral-900 p-4 rounded-lg shadow-2xl shadow-cyan-950/50 mt-6 border border-cyan-800/50"
        onToggle={(e: React.SyntheticEvent<HTMLDetailsElement, Event>) => {
          setIsOverviewOpen((e.currentTarget as HTMLDetailsElement).open);
        }}
      >
        <summary className="font-bold text-xl text-cyan-300 cursor-pointer list-none flex justify-between items-center outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md py-1 marker:content-['']">
          Panoramica Completa Evento
          {isOverviewOpen ? (
            <ChevronUp className="w-5 h-5 ml-3 text-cyan-400" />
          ) : (
            <ChevronDown className="w-5 h-5 ml-3 text-cyan-400" />
          )}
        </summary>
        <article className="mt-6 grid gap-6">
          <div className="bg-neutral-900 p-4 rounded-lg shadow-2xl shadow-cyan-950/50 hover:shadow-cyan-600/50 hover:shadow-xl hover:scale-[1.02]">
            <h3 className="font-semibold text-cyan-300">
              Panoramica Evento e Struttura
            </h3>
            <p className="text-gray-300 mt-2">
              L'evento Mutazione Collasso si divide in{' '}
              <strong>3 Episodi</strong> (Città, Aereoporto, Ghiacciaio), ognuno
              con 6 livelli.
            </p>
          </div>

          <figure
            className="bg-neutral-900 p-4 rounded-lg shadow-2xl shadow-cyan-950/50 mb-6"
            aria-hidden="false"
          >
            <div className="bg-neutral-800 flex-col flex items-center justify-center rounded w-full h-full">
              <img
                src={EP1}
                alt="immagine illustrativa del primo  episodio"
                className="shadow-2xl shadow-cyan-950/50 
                       transition duration-300 ease-in-out hover:shadow-cyan-600/50 hover:shadow-xl hover:scale-[1.02]"
              />
              <img
                src={EP2}
                alt="immagine illustrativa del secondo  episodio"
                className="shadow-2xl shadow-cyan-950/50 
                       transition duration-300 ease-in-out hover:shadow-cyan-600/50 hover:shadow-xl hover:scale-[1.02]"
              />
              <img
                src={EP3}
                alt="immagine illustrativa del terzo  episodio"
                className="shadow-2xl shadow-cyan-950/50 
                       transition duration-300 ease-in-out hover:shadow-cyan-600/50 hover:shadow-xl hover:scale-[1.02]"
              />
            </div>
            <figcaption className="text-xs text-slate-400 text-center">
              Episodi: 1 (Città), 2 (Aereoporto), 3 (Ghiacciaio).
            </figcaption>
          </figure>
        </article>
      </details>
    </section>
  );
}

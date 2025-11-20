import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
export default function Episodes() {
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  return (
    <section
      id="episodes"
      aria-labelledby="episodes-title"
      className="pb-10  relative z-50"
    >
      <details
        className="bg-neutral-900 p-4 rounded-lg shadow-2xl shadow-cyan-950/50 mt-6 border border-cyan-800/50"
        onToggle={(e: React.SyntheticEvent<HTMLDetailsElement, Event>) => {
          setIsOverviewOpen((e.currentTarget as HTMLDetailsElement).open);
        }}
      >
        <summary className="font-bold text-xl text-cyan-300 cursor-pointer list-none flex justify-between items-center outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md py-1 marker:content-['']">
          <h2
            id="episodes-title"
            className="text-xl font-bold text-cyan-300 drop-shadow-lg drop-shadow-cyan-400/40 "
          >
            Episodi
          </h2>
          {isOverviewOpen ? (
            <ChevronUp className="w-5 h-5 ml-3 text-cyan-400" />
          ) : (
            <ChevronDown className="w-5 h-5 ml-3 text-cyan-400" />
          )}{' '}
        </summary>

        <p className="text-slate-400 mb-6">
          Descrizione rapida e note di difficoltà per ogni episodio.
        </p>
        <ul className="mt-4 grid gap-6 sm:grid-cols-3">
          {[
            {
              name: 'Episodio 1',
              desc: 'Città — livello introduttivo, attenzione ai piccoli mostri rossi a forma di palla che corrono veloce e esplodono al contatto',
              warning: 'Attenzione ai mostri che esplodono!',
            },
            {
              name: 'Episodio 2',
              desc: 'Aereoporto — ritmo medio, passa lontano dagli arcieri se non hai abbastanza velocità di movimento e attenzione alle fiamme!',
              warning: 'Schiva gli arcieri e le fiamme!',
            },
            {
              name: 'Episodio 3',
              desc: 'Ghiacciaio — più difficile, schiva le scosse e stai lontano dai bestioni! se non riesci a battere la ninja finale, compra e potenzia fFairy pace nel negozio Fairy!',
              warning: 'Difficoltà alta: schiva scosse e bestioni!',
            },
          ].map((e) => (
            <li
              key={e.name}
              className="bg-neutral-900 p-4 rounded-lg shadow-2xl shadow-cyan-950/50 
                       transition duration-300 ease-in-out hover:shadow-cyan-600/50 hover:shadow-xl hover:scale-[1.02]"
              role="article"
              aria-label={e.name}
            >
              <h3 className="font-semibold text-xl text-cyan-300 mb-2">
                {e.name}
              </h3>
              <p className="text-sm font-bold text-red-400 mb-3 border-b border-red-800/50 pb-2">
                ⚠️ {e.warning}
              </p>
              <p className="text-sm text-gray-300">{e.desc}</p>
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
}

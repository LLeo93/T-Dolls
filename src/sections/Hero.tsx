import { useEffect, useState } from 'react';
import type { KeyboardEvent } from 'react';
import Hk416 from '../assets/icons/hk416.png';
import Kar98k from '../assets/icons/Kar98k.png';
import M870 from '../assets/icons/M870.png';
import Ump5 from '../assets/icons/Ump5.png';
import {
  Sword,
  Heart,
  Crosshair,
  Shield,
  Star,
  Footprints,
  MoonStar,
  Crown,
  X as XIcon,
} from 'lucide-react';

// --- INTERFACCE ---
interface Stats {
  attack: number;
  health: number;
  shield: number;
  ammo: number;
}

interface IconData {
  icon: React.ElementType;
  label: string;
  color: string;
  description: string;
  imageSrc?: string;
}

interface PlayerData {
  id: string;
  name: string;
  src: string;
  alt: string;
  href: string;
  srDescription: string;
  srDetails: string;
  stats: Stats;
  uniqueIcon: IconData;
}

//  DATI BASE
const BASE_ICONS: (Omit<IconData, 'description' | 'imageSrc'> & {
  key: keyof Stats;
})[] = [
  { icon: Sword, label: 'Danni', color: 'text-red-500', key: 'attack' },
  { icon: Heart, label: 'Salute', color: 'text-green-500', key: 'health' },
  { icon: Shield, label: 'Scudo', color: 'text-blue-400', key: 'shield' },
  {
    icon: Crosshair,
    label: 'Munizioni',
    color: 'text-yellow-600',
    key: 'ammo',
  },
];

export default function Hero() {
  useEffect(() => {
    const h = document.getElementById('hero');
    if (h) h.setAttribute('role', 'banner');
  }, []);

  const [openPlayer, setOpenPlayer] = useState<string | null>(null);

  const players: PlayerData[] = [
    {
      id: 'hk416',
      name: 'HK416',
      src: Hk416,
      alt: 'Icona player HK416',
      href: '#player-hk416',
      srDescription: 'HK416 — specialista assalto',
      srDetails: '',
      stats: { attack: 12, health: 24, ammo: 25, shield: 24 },
      uniqueIcon: {
        icon: Star,
        label: 'Stella',
        color: 'text-yellow-400',
        description:
          'Grazie a questo attributo la catena Stella si attiverà comprando una sola card con atributo stella e potrà raggiungere il massimo del bonus.Aumento della cadenza di fuoco a scapito della portata.',
      },
    },
    {
      id: 'kar98k',
      name: 'Kar98k',
      src: Kar98k,
      alt: 'Icona player Kar98k',
      href: '#player-kar98k',
      srDescription: 'Kar98k — specialista cecchino',
      srDetails: '',
      stats: { attack: 30, health: 20, ammo: 10, shield: 24 },
      uniqueIcon: {
        icon: Crown,
        label: 'Imperatore',
        color: 'text-orange-500',
        description:
          'Grazie a questo attributo la catena Imperatore si attiverà comprando una sola card con atributo Imperatore e potrà raggiungere il massimo del bonus.Danni aggiuntivi con consumo di PS Scudo per proiettile.',
      },
    },
    {
      id: 'm870',
      name: 'M870',
      src: M870,
      alt: 'Icona player M870',
      href: '#player-m870',
      srDescription: 'M870 — specialista shotgun',
      srDetails: '',
      stats: { attack: 4, health: 20, ammo: 12, shield: 10 },
      uniqueIcon: {
        icon: MoonStar,
        label: 'Luna',
        color: 'text-indigo-400',
        description:
          'Grazie a questo attributo la catena Luna si attiverà comprando una sola card con atributo Luna e potrà raggiungere il massimo del bonus.Aumenta significativamente PS Scudo e la loro velocità di recupero con una riduzione percentuale della salute.',
      },
    },
    {
      id: 'ump5',
      name: 'Ump5',
      src: Ump5,
      alt: 'Icona player Ump5',
      href: '#player-ump5',
      srDescription: 'Ump5 — specialista SMG',
      srDetails: '',
      stats: { attack: 6, health: 10, ammo: 30, shield: 40 },
      uniqueIcon: {
        icon: Footprints,
        label: 'Carro',
        color: 'text-cyan-400',
        description:
          'Grazie a questo attributo la catena Carro si attiverà comprando una sola card con atributo Carro e potrà raggiungere il massimo del bonus. Bonus di danno e velocità di movimento durante lo spostamento.',
      },
    },
  ];

  function togglePlayer(id: string) {
    setOpenPlayer((prev) => (prev === id ? null : id));
  }

  function handleKeyAction(e: KeyboardEvent, id: string) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      togglePlayer(id);
    }
  }

  function PlayerDetailsPanel({ player }: { player: PlayerData }) {
    const isOpen = openPlayer === player.id;

    return (
      <section
        id={`player-panel-${player.id}`}
        role="region"
        aria-labelledby={`player-title-${player.id}`}
        hidden={!isOpen}
        className="relative bg-neutral-900 border border-cyan-800/40 rounded-lg p-3 mt-3"
      >
        <button
          type="button"
          onClick={() => setOpenPlayer(null)}
          aria-label={`Chiudi pannello dettagli ${player.name}`}
          className="absolute right-2 top-2 inline-flex items-center justify-center w-7 h-7 rounded hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <XIcon className="w-4 h-4 text-gray-300" aria-hidden="true" />
        </button>

        <div className="flex flex-col md:flex-row gap-3 items-start">
          <div className="shrink-0 md:w-1/3 w-full">
            <h4 className="text-xs uppercase text-gray-400 font-semibold mb-2">
              Valori
            </h4>
            <ul role="list" className="flex flex-col gap-2">
              {BASE_ICONS.map((stat, i) => {
                const StatIcon = stat.icon;
                const value = player.stats[stat.key];
                return (
                  <li key={i} className="flex items-center gap-2">
                    <StatIcon
                      className={`w-5 h-5 ${stat.color}`}
                      aria-hidden="true"
                    />
                    <div className="flex-1">
                      <div className="text-xs text-gray-200 font-medium">
                        {stat.label}
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-gray-100 tabular-nums">
                      {value.toLocaleString()}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* colonna di destra */}
          <div className="flex-1 flex items-start gap-3">
            <div
              className="w-20 h-20 md:w-24 md:h-24 rounded-md flex items-center justify-center
                         shrink-0"
              aria-hidden="true"
            >
              {player.uniqueIcon.imageSrc ? (
                <img
                  src={player.uniqueIcon.imageSrc}
                  alt={player.uniqueIcon.label}
                  className="w-full h-full object-contain"
                  width={96}
                  height={96}
                />
              ) : (
                <player.uniqueIcon.icon
                  className={`w-8 h-8 ${player.uniqueIcon.color}`}
                  aria-hidden="true"
                />
              )}
            </div>

            <div className="min-w-0">
              <h5
                id={`player-title-${player.id}`}
                className="text-sm font-semibold text-cyan-300"
              >
                {player.name} — {player.uniqueIcon.label}
              </h5>
              <p className="text-sm text-gray-300 mt-1 ">
                {player.uniqueIcon.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="hero"
      className="py-12 relative z-50"
      aria-labelledby="hero-title"
    >
      <div className="prose max-w-none mx-auto">
        <h1
          id="hero-title"
          className="text-3xl sm:text-4xl font-extrabold text-gray-100"
        >
          💥 Mutazione Collasso (T-Doll CODM) 💥
        </h1>

        <p className="text-gray-100 text-center" aria-hidden={false}>
          La guida definitiva per padroneggiare l'evento <br /> strategie
          rapide, build e consigli per ogni episodio, catene efficienti e
          soluzione segreta.
        </p>

        <div className="mt-6 flex gap-3 flex-wrap justify-center">
          <a
            href="#overview"
            className="bg-cyan-600 text-white font-semibold uppercase tracking-wide shadow-lg shadow-cyan-600/40 hover:bg-cyan-500 hover:shadow-cyan-500/50 transition duration-300 px-6 py-3 rounded-lg border-2 border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
            aria-label="Vai alla panoramica dell'evento"
          >
            Inizia qui
          </a>

          <a
            href="#support-tdoll-title"
            className="border-2 border-cyan-400 text-cyan-400 font-semibold uppercase tracking-wide bg-transparent hover:bg-cyan-900/40 hover:text-white transition duration-300 px-6 py-3 rounded-lg focus:outline-none focus:ring-2  focus:ring-offset-2"
            aria-label="Vai alle T-Doll consigliate"
          >
            T-Doll consigliate
          </a>
        </div>

        {/* giocatrici */}
        <section id="players" aria-labelledby="players-title" className="mt-8">
          <h2
            id="players-title"
            className="text-xl font-semibold text-gray-100 text-center mb-4"
          >
            Giocatrici Evento
          </h2>

          <ul
            role="list"
            aria-label="Icone giocatrici evento"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {players.map((p) => {
              const isOpen = openPlayer === p.id;
              return (
                <li key={p.id} className="flex">
                  <a
                    href={p.href}
                    id={`player-link-${p.id}`}
                    title={`Profilo ${p.name}`}
                    aria-labelledby={`player-title-${p.id}`}
                    aria-describedby={`player-desc-${p.id}`}
                    aria-controls={`player-panel-${p.id}`}
                    aria-expanded={isOpen}
                    role="button"
                    tabIndex={0}
                    onClick={(e) => {
                      e.preventDefault();
                      togglePlayer(p.id);
                    }}
                    onKeyDown={(e) => handleKeyAction(e, p.id)}
                    className="w-full bg-transparent border-transparent rounded-lg p-2 flex flex-col items-center text-center transition duration-150 group focus:bg-neutral-800/20"
                  >
                    <figure
                      className={`w-28 h-28 md:w-36 md:h-36 flex items-center justify-center mb-2 rounded-full overflow-hidden transition-transform duration-200 ${
                        isOpen
                          ? 'scale-105 shadow-[0_0_20px_rgba(6,182,212,0.55)]'
                          : 'group-hover:scale-105'
                      }`}
                      aria-hidden="true"
                    >
                      <img
                        src={p.src}
                        alt={p.alt}
                        width={144}
                        height={144}
                        className="w-full h-full object-contain transition-transform duration-200"
                      />
                    </figure>

                    <figcaption>
                      <span
                        id={`player-title-${p.id}`}
                        className="block text-sm font-semibold text-gray-100"
                      >
                        {p.name}
                      </span>
                      <span id={`player-desc-${p.id}`} className="sr-only">
                        {p.srDescription}. Abilità Unica: {p.uniqueIcon.label}.
                        Premi Invio o clicca per aprire i dettagli.
                      </span>
                      <span className="block text-xs text-cyan-400 mt-1 font-medium">
                        Visualizza dettagli
                      </span>
                    </figcaption>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </div>

      {/* pannello dettagli singolo */}
      <div aria-live="polite" className="max-w-4xl mx-auto mt-6">
        {players.map((p) => (
          <PlayerDetailsPanel key={`details-${p.id}`} player={p} />
        ))}
      </div>
    </section>
  );
}

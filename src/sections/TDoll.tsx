import { ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react';
import useDropdownState from '../hooks/useDropdownState';
import { TdollCard } from '../components/TdollCard';
import { TdollCombinedDetails } from '../components/TdollCombinedDetails';
import tdollJsonData from '../data/tdoll-data.json';
import HK416_details from '../assets/images/HK416-details.jpg';
import HK416_abilities from '../assets/images/HK416_details2.jpg';
import Suomi from '../assets/images/suomi.jpg';
import Suomi_details from '../assets/images/Suomi_details.jpg';
import MG4 from '../assets/images/mg4.jpg';
import MG4_details from '../assets/images/MG4_details.jpg';

const IMAGE_MAP = {
  HK416_details,
  HK416_abilities,
  Suomi,
  Suomi_details,
  MG4,
  MG4_details,
};

interface HK416Ability {
  id: number;
  name: string;
  cooldown: string;
  text: string;
}

interface Stat {
  label: string;
  value: number;
}

interface TDollDataUnion {
  id: string;
  name: string;
  role?: string;
  description?: string;
  detailsAlt?: string;
  roleDescription?: string;
  stats?: Stat[];
  details?: {
    modLevel: string;
    enhancements: string[];
  };
  isInitialChoice: boolean;
  images: { detailsImage: string; abilitiesImage?: string; mainImage?: string };
  abilities: { name: string; text: string; cooldown?: string; id?: number }[];
}

interface HK416TDoll extends TDollDataUnion {
  stats: Stat[];
  details: {
    modLevel: string;
    enhancements: string[];
  };
  abilities: HK416Ability[];
  roleDescription: string;
}

interface SupportTDoll extends TDollDataUnion {
  role: string;
  description: string;
  detailsAlt: string;
}

// ESTRAZIONE DATI DAL JSON

const hk416Data = tdollJsonData.find((tdoll) => tdoll.id === 'hk416') as
  | HK416TDoll
  | undefined;

const supportTDolls = tdollJsonData.filter(
  (tdoll) => tdoll.id !== 'hk416'
) as unknown as SupportTDoll[];

const FALLBACK_HK416_DATA: HK416TDoll = {
  id: 'fallback',
  name: 'Errore Dati',
  role: '',
  roleDescription: 'Dati non caricati.',
  isInitialChoice: false,
  images: { detailsImage: 'HK416_details' },
  detailsAlt: 'Dati mancanti',
  description: 'Dati mancanti',
  stats: [
    { label: 'Danni', value: 0 },
    { label: 'Salute', value: 0 },
    { label: 'Munizioni', value: 0 },
    { label: 'Scudo', value: 0 },
  ],
  details: { modLevel: 'N/A', enhancements: [] },
  abilities: [],
};

const hk416 = hk416Data || FALLBACK_HK416_DATA;
const hk416Stats = hk416.stats;
const hk416Details = hk416.details;
const hk416AbilityContent = hk416.abilities as HK416Ability[];

export default function TDoll() {
  const {
    isOpen: isHK416DropdownOpen,
    setIsOpen: setIsHK416DropdownOpen,
    dropdownRef: hk416DropdownRef,
  } = useDropdownState(false);

  // dropdown  HK416
  const [isOverviewOpen, setIsOverviewOpen] = React.useState(false);

  // dropdown principale
  const [isSupportDropdownOpen, setIsSupportDropdownOpen] =
    React.useState(false);

  return (
    <section
      id="tdoll"
      aria-labelledby="tdoll-title"
      className="py-10 relative z-50"
    >
      {/* Titolo Principale */}
      <h2
        id="tdoll-title"
        className="text-3xl font-extrabold text-cyan-400 drop-shadow-lg drop-shadow-cyan-400/40 mb-6"
      >
        T-Doll HK416: Core Build
      </h2>

      {/* DROPDOWN 1*/}
      <details
        className="bg-neutral-900 p-4 rounded-lg shadow-2xl shadow-cyan-950/50 mt-6 border border-cyan-800/50"
        onToggle={(e: React.SyntheticEvent<HTMLDetailsElement, Event>) => {
          setIsOverviewOpen((e.currentTarget as HTMLDetailsElement).open);
        }}
      >
        <summary className="font-bold text-xl text-cyan-300 cursor-pointer list-none flex justify-between items-start outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md py-1 marker:content-['']">
          <div className="flex flex-col grow pr-4">
            <h3 className="font-semibold text-cyan-300">Scelta Iniziale</h3>
            <p className="text-gray-300 text-sm mt-1">
              {hk416.roleDescription}
            </p>
          </div>
          <span className="shrink-0">
            {isOverviewOpen ? (
              <ChevronUp className="w-5 h-5 text-cyan-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-cyan-400" />
            )}
          </span>
        </summary>

        {/* CONTENUTO HK416 */}
        <article className="mt-4 grid gap-6">
          {/* Card 1*/}
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <figure className="md:col-span-1 bg-neutral-900 p-4 rounded-lg shadow-2xl shadow-cyan-950/50 overflow-hidden">
              <img
                src={IMAGE_MAP.HK416_details}
                alt="Immagine dettagli e statistiche base della T-Doll HK416."
                className="w-full h-auto rounded-2xl cursor-pointer transition-all duration-500 ease-in-out md:hover:scale-105 md:hover:shadow-xl md:hover:shadow-cyan-400/50 md:hover:brightness-110"
              />
              <figcaption className="text-xs text-slate-400 mt-2 text-center">
                Statistiche base HK416 (Danni: {hk416Stats[0].value}, Salute:{' '}
                {hk416Stats[1].value}, Munizioni: {hk416Stats[2].value}, Scudo:{' '}
                {hk416Stats[3].value}).
              </figcaption>
            </figure>

            {/* Abilità Attive*/}
            <div
              className="md:col-span-2 pt-4 md:pt-0 hover:shadow-cyan-600/50 hover:shadow-xl hover:scale-[1.02] "
              ref={hk416DropdownRef}
            >
              <div className="bg-neutral-900 p-4 rounded-lg shadow-2xl shadow-cyan-950/50 md:hidden">
                <button
                  onClick={() => setIsHK416DropdownOpen(!isHK416DropdownOpen)}
                  className="w-full flex justify-between items-center font-bold text-lg text-cyan-400 cursor-pointer"
                  aria-expanded={isHK416DropdownOpen}
                  aria-controls="ability-list-mobile"
                >
                  Abilità Attive
                  <span>{isHK416DropdownOpen ? '▲' : '▼'}</span>
                </button>

                <div
                  id="ability-list-mobile"
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isHK416DropdownOpen
                      ? 'max-h-96 opacity-100 mt-2'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul className="space-y-3">
                    {hk416AbilityContent.map((item) => (
                      <li
                        key={item.id}
                        className="text-sm border-t border-cyan-800/50 pt-3 mt-3 first:border-t-0 first:pt-0 first:mt-0 text-gray-300"
                      >
                        <span className="font-semibold text-cyan-300">
                          {item.name} ({item.cooldown})
                        </span>
                        : {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Desktop View */}
              <div className="hidden md:block bg-neutral-900 p-4 rounded-lg shadow-2xl shadow-cyan-950/50 h-full">
                <h4 className="font-semibold text-xl mb-4 text-cyan-300">
                  Abilità Attive
                </h4>
                <ul className="space-y-4">
                  {hk416AbilityContent.map((item) => (
                    <li key={item.id} className="text-sm text-gray-300">
                      <span className="font-semibold text-cyan-300">
                        {item.name} ({item.cooldown})
                      </span>
                      : {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/*Potenziamenti */}
          <figure className="mt-6 bg-neutral-900 p-4 rounded-lg shadow-2xl shadow-cyan-950/50 w-full overflow-hidden">
            <img
              src={IMAGE_MAP.HK416_abilities}
              alt={`Immagine della T-Doll HK416 in versione ${hk416Details.modLevel} con i dettagli di potenziamento: Salute ${hk416Stats[1].value}, Danni ${hk416Stats[0].value}, Scudo ${hk416Stats[3].value}, Munizioni ${hk416Stats[2].value}.`}
              className="w-full h-auto rounded-2xl cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/50 hover:brightness-110"
            />
            <figcaption className="text-xs text-slate-400 mt-2 text-center">
              HK416 **{hk416Details.modLevel}**. Potenziamenti:{' '}
              {hk416Details.enhancements.join('; ')}.
            </figcaption>
          </figure>
        </article>
      </details>

      {/* ========================================================== */}
      {/* === DROPDOWN 2: T-DOLL DI SUPPORTO ESSENZIALI === */}
      {/* ========================================================== */}

      <details
        className="bg-neutral-900 p-4 rounded-lg shadow-2xl shadow-cyan-950/50 pt-10 mt-6 border border-cyan-800/50"
        onToggle={(e: React.SyntheticEvent<HTMLDetailsElement, Event>) => {
          setIsSupportDropdownOpen(
            (e.currentTarget as HTMLDetailsElement).open
          );
        }}
      >
        <summary className="font-bold text-xl text-cyan-300 cursor-pointer list-none flex justify-between items-start outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md py-1 marker:content-['']">
          <div className="flex flex-col grow pr-4">
            <h3
              id="support-tdoll-title"
              className="font-extrabold text-2xl text-cyan-400 drop-shadow-lg drop-shadow-cyan-400/40"
            >
              T-Doll di Supporto Essenziali
            </h3>
            <p className="text-gray-300 text-sm mt-1">
              Queste T-Doll non sono centrali per la catena principale, ma sono
              quasi <strong>immancabili</strong> per la loro capacità di
              aumentare notevolmente i danni, abilità esclusive, velocità e
              caricatore.
            </p>
          </div>
          <span className="shrink-0 pt-1">
            {isSupportDropdownOpen ? (
              <ChevronUp className="w-5 h-5 text-cyan-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-cyan-400" />
            )}
          </span>
        </summary>

        {/* CONTENUTO DEL DROPDOWN DI SUPPORTO */}
        <div className="mt-4">
          <div
            className="grid md:grid-cols-2 gap-6"
            aria-labelledby="support-tdoll-title"
          >
            {supportTDolls.map((tdoll) => (
              <TdollCard key={tdoll.id} tdoll={tdoll as any} />
            ))}
          </div>

          {/* DROPDOWN COMBINATO*/}
          <div className="mt-6">
            <TdollCombinedDetails supportTDolls={supportTDolls as any} />
          </div>
        </div>
      </details>
    </section>
  );
}

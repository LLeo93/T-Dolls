import { ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react';
import Suomi_details from '../assets/images/Suomi_details.jpg';
import MG4_details from '../assets/images/MG4_details.jpg';

const imageMap: Record<string, string> = {
  Suomi_details,
  MG4_details,
};

interface TdollData {
  id: string;
  name: string;
  detailsAlt: string;
  images: { detailsImage: string; mainImage: string };
  abilities: { name: string; text: string }[];
}

interface TdollCombinedDetailsProps {
  supportTDolls: TdollData[];
}

export const TdollCombinedDetails: React.FC<TdollCombinedDetailsProps> = ({
  supportTDolls,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <details
      className="bg-neutral-800 p-6 rounded-lg shadow-inner shadow-cyan-900/50 mt-6 hidden md:block"
      onToggle={(e: React.SyntheticEvent<HTMLDetailsElement, Event>) => {
        setIsOpen((e.currentTarget as HTMLDetailsElement).open);
      }}
    >
      <summary
        className="font-bold text-xl text-cyan-400 cursor-pointer list-none 
                            flex justify-between items-center outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md py-1"
      >
        <span className="flex items-center">
          Dettagli & Statistiche Complete (Suomi & MG4)
        </span>
        <span className="ml-2">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-cyan-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-cyan-400" />
          )}
        </span>
      </summary>

      <div className="mt-4 pt-4 border-t border-cyan-700/50 grid grid-cols-2 gap-6">
        {supportTDolls.map((tdoll) => (
          <div key={tdoll.id} className="col-span-1">
            <h4 className="font-bold text-lg text-cyan-300 mb-3">
              {tdoll.name}
            </h4>

            {/* Immagine Dettaglio */}
            <figure className="mb-4">
              <img
                src={imageMap[tdoll.images.detailsImage]}
                alt={tdoll.detailsAlt}
                className="w-full h-auto rounded-lg object-cover border border-cyan-700/50
                                hover:shadow-cyan-600/50 hover:shadow-xl hover:scale-[1.02]"
              />
              <figcaption className="text-xs text-slate-400 mt-2 text-center italic">
                {tdoll.detailsAlt}
              </figcaption>
            </figure>

            {/* Lista Abilità */}
            <h5 className="font-semibold text-cyan-300 text-sm mb-2">
              Abilità chiave:
            </h5>
            <ul className="space-y-2">
              {tdoll.abilities.map((ability, index) => (
                <li
                  key={index}
                  className="text-xs text-gray-300 border-b border-neutral-700 pb-1 last:border-b-0"
                >
                  <span className="font-semibold text-cyan-300">
                    {ability.name}
                  </span>
                  : {ability.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </details>
  );
};

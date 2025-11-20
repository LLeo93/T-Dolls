import React from 'react';
import { TdollDetailsDropdown } from './TdollDetailsDropdown';
import Suomi from '../assets/images/suomi.jpg';
import MG4 from '../assets/images/mg4.jpg';

const imageMap: Record<string, string> = {
  Suomi,
  MG4,
};

// Interfaccia adattata per i componenti di Supporto (che non hanno i campi HK416)
interface TdollData {
  id: string;
  name: string;
  role: string;
  description: string;
  images: { mainImage: string; detailsImage: string };
  detailsAlt: string;
  abilities: { name: string; text: string; cooldown?: string; id?: number }[]; // Reso cooldown opzionale
}

interface TdollCardProps {
  tdoll: TdollData;
}

export const TdollCard: React.FC<TdollCardProps> = ({ tdoll }) => {
  return (
    <div
      key={tdoll.id}
      className="md:grid md:grid-cols-1 md:gap-4 md:p-0 md:bg-transparent md:shadow-none"
    >
      {/* CARD PRINCIPALE*/}
      <article
        className="bg-neutral-900 p-4 rounded-lg shadow-2xl shadow-cyan-950/50 
                   flex flex-col md:flex-row gap-4"
      >
        <figure className="md:w-1/3 shrink-0 ">
          <img
            src={imageMap[tdoll.images.mainImage]}
            alt={`Illustrazione della T-Doll ${tdoll.name}`}
            className="h-50 w-50 md:h-auto md:w-full  rounded-2xl object-cover border border-cyan-700/50 
                       max-w-md  mx-auto max-h-96 hover:shadow-cyan-600/50 hover:shadow-xl hover:scale-[1.02] "
          />
          <figcaption className="text-xs text-slate-400 mt-2 text-center italic">
            {tdoll.role}
          </figcaption>
        </figure>
        <div className="md:w-2/3">
          <h3 className="font-bold text-xl text-cyan-300 mb-2">
            👑 {tdoll.name}
          </h3>
          <p className="text-sm text-gray-300">{tdoll.description}</p>
        </div>
      </article>

      {/*DROPDOWN INDIVIDUALE*/}
      <TdollDetailsDropdown tdoll={tdoll} />
    </div>
  );
};

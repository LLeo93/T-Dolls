import potere from '../assets/images/potere.jpg';
import imperatore from '../assets/images/imperatore.jpg';
import carro from '../assets/images/carro.jpg';
import luna from '../assets/images/luna.jpg';
import {
  Crown,
  MoonStar,
  BicepsFlexed,
  Footprints,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import React from 'react';

export default function Chains() {
  const [isStrategyOpen, setIsStrategyOpen] = React.useState(false);

  return (
    <section
      id="chains"
      aria-labelledby="chains-title"
      className="py-10 relative z-50 mb-25 xs:mb-20 sm:mb-15 md:mb-2"
    >
      <h2
        id="chains-title"
        className="text-3xl font-extrabold text-cyan-400 drop-shadow-lg drop-shadow-cyan-400/40 mb-6"
      >
        Catene
      </h2>

      <div className="mt-2 grid gap-6">
        {/*Build Vincente e Immagini */}
        <details
          className="bg-neutral-900 p-4 rounded-lg shadow-2xl shadow-cyan-950/50 border border-cyan-800/50"
          onToggle={(e: React.SyntheticEvent<HTMLDetailsElement, Event>) => {
            setIsStrategyOpen((e.currentTarget as HTMLDetailsElement).open);
          }}
        >
          <summary className="font-bold text-xl text-cyan-300 cursor-pointer list-none flex justify-between items-start outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md py-1 marker:content-['']">
            <div className="flex flex-col grow pr-4">
              {/* Titolo Card */}
              <h3 className="font-semibold text-xl text-cyan-300">
                Strategia Catene: Build Vincente
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                Imperatore Catena 4/5 + Potere Catena 6 — una combinazione
                eccellente per infliggere tanti danni e respingere i nemici.
              </p>
            </div>

            <span className="shrink-0 pt-1">
              {isStrategyOpen ? (
                <ChevronUp className="w-5 h-5 text-cyan-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-cyan-400" />
              )}
            </span>
          </summary>

          {/* CONTENUTO DEL DROPDOWN */}
          <div className="mt-4">
            {/* 1. Testo Strategico */}
            <article className="text-gray-300">
              <p className="mb-2">
                <strong>Imperatore Catena 4/5</strong> +{' '}
                <strong>Potere Catena 6</strong> — una combinazione eccellente
                per infliggere tanti danni, traiettorie multiple e respingere i
                nemici. Ideale se vuoi una build potente.
              </p>

              <p className="mb-2">
                <strong>Carro Catena </strong> +{' '}
                <strong>Imperatore Catena </strong> — ottima build per danni
                elevati e velocità, perfetta per chi predilige un approccio
                aggressivo e ideale per le playr con poca velocità di movimento.
              </p>

              <p>
                La scelta delle build dipende anche dalla player che utilizzi:
                se la player è lenta (come <strong>M870</strong> o{' '}
                <strong>Kar98K</strong>
                ), potresti privilegiare build più bilanciate che compensino la
                lentezza con danno e controllo.
              </p>
            </article>

            {/* 2. Card 2: Immagini e Descrizioni delle Catene*/}
            <figure className="mt-6 bg-neutral-900 p-0 rounded-lg shadow-2xl shadow-cyan-950/50">
              {/* Contenitore Immagini*/}
              <div className="bg-neutral-800 flex-col flex items-center justify-center rounded w-full h-full p-4">
                {/* Immagine Potere */}
                <img
                  src={potere}
                  alt="Illustrazione dell'abilità Potere: aumento traiettoria e proiettili."
                  aria-describedby="desc-potere"
                  className=" mb-4 max-w-full h-auto rounded-3xl border border-cyan-700/50 
                    hover:shadow-orange-600/50 hover:shadow-xl hover:scale-[1.02] "
                />

                <p id="desc-potere" className="text-sm text-gray-300 mb-6 px-2">
                  <BicepsFlexed color="orange" className="inline-block mr-1" />{' '}
                  L'abilità Potere aumenta la traiettoria dei proiettili,
                  incrementando il numero di proiettili sparati
                  contemporaneamente. Migliora notevolmente il danno inflitto e
                  la forza di respinta.
                </p>

                {/* Immagine Imperatore */}
                <img
                  src={imperatore}
                  alt="Illustrazione dell'abilità Imperatore: danni elettrici con consumo scudo."
                  aria-describedby="desc-imperatore"
                  className=" mb-4 max-w-full h-auto rounded-3xl border border-cyan-700/50 
                    hover:shadow-red-600/50 hover:shadow-xl hover:scale-[1.02] "
                />

                <p
                  id="desc-imperatore"
                  className="text-sm text-gray-300 mb-6 px-2"
                >
                  <Crown color="red" className="inline-block mr-1" /> L'abilità
                  Imperatore comporta un consumo di PS scudo per ogni proiettile
                  sparato, ma in cambio infligge ingenti **danni elettrici** con
                  i proiettili, con altissime percentuali di danno complessivo.
                </p>

                {/* Immagine Carro */}
                <img
                  src={carro}
                  alt="Illustrazione dell'abilità carro: maggiori danni in movimento e velocità aumentata."
                  aria-describedby="desc-carro"
                  className=" mb-4 max-w-full h-auto rounded-3xl border border-cyan-700/50 
                    hover:shadow-cyan-600/50 hover:shadow-xl hover:scale-[1.02] "
                />

                <p id="desc-carro" className="text-sm text-gray-300 mb-6 px-2">
                  <Footprints color="cyan" className="inline-block mr-1" />
                  Questa abilità offre Velocità di movimento extra e un aumento
                  del danno inflitto mentre si è in movimento, ideale visto che
                  è sempre consigliato rimanere in movimento.
                </p>

                {/* Immagine Luna */}
                <img
                  src={luna}
                  alt="Illustrazione dell'abilità luna:tanti ps diventono ps scudo, ideale da abbinare con l'abilità imperatore."
                  aria-describedby="desc-luna"
                  className="mb-4 max-w-full h-auto rounded-3xl border border-cyan-700/50
                    hover:shadow-yellow-600/50 hover:shadow-xl hover:scale-[1.02] "
                />

                <p id="desc-luna" className="text-sm text-gray-300 mb-6 px-2">
                  <MoonStar color="yellow" className="inline-block mr-1" />
                  Questa abilità riduce il limite massimo dei Punti Salute (PS)
                  in cambio di un aumento significativo dei PS Scudo e della
                  loro velocità di recupero
                </p>
              </div>

              {/* Didascalia*/}
              <figcaption className="text-xs text-slate-400 mt-5 text-center p-4">
                Esempio di sinergia tra le abilità Imperatore (Elettrico) e
                Potere (Aumento Danno/Controllo) e di potere e
                carro(Velocità/Danno) con un pizzico di luna. Questi sono solo
                esempi di build che ho testato personalmente; sicuramente ci
                sono molte altre combinazioni valide da scoprire e provare in
                base al tuo stile di gioco.
              </figcaption>
            </figure>
          </div>
        </details>
      </div>
    </section>
  );
}

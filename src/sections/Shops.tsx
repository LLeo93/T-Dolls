import { useState, useCallback, type ReactNode } from 'react';
import {
  ShoppingBag,
  Gem,
  ChevronDown,
  ChevronUp,
  BicepsFlexed,
  Footprints,
  Crown,
  ScrollText,
} from 'lucide-react';
import Barriera from '../assets/images/Fairy_Shop/Barriera.jpg';
import Barriera_ds from '../assets/images/Fairy_Shop/Barriera_ds.jpg';
import Provocazione from '../assets/images/Fairy_Shop/Provocazione.jpg';
import Provocazione_ds from '../assets/images/Fairy_Shop/Provocazione_ds.jpg';
import Pace from '../assets/images/Fairy_Shop/Pace.jpg';
import Pace_ds from '../assets/images/Fairy_Shop/Pace_ds.jpg';
import Costruzione from '../assets/images/Fairy_Shop/Costruzione.jpg';
import Costruzione_ds from '../assets/images/Fairy_Shop/Costruzione_ds.jpg';
import Rinforzo from '../assets/images/Fairy_Shop/Rinforzo.jpg';
import Rinforzo_ds from '../assets/images/Fairy_Shop/Rinforzo_ds.jpg';
import Paracadute from '../assets/images/Fairy_Shop/Paracadute.jpg';
import Paracadute_ds from '../assets/images/Fairy_Shop/Paracadute_ds.jpg';
import Scudo from '../assets/images/Fairy_Shop/Scudo.jpg';
import Scudo_ds from '../assets/images/Fairy_Shop/Scudo_ds.jpg';
import Strega from '../assets/images/Fairy_Shop/Strega.jpg';
import Strega_ds from '../assets/images/Fairy_Shop/Strega_ds.jpg';

type FairyItem = {
  dollTitle: string;
  dollImage: string;
  dollDescription: string;
  detailsTitle: string;
  detailsImage: string;
  detailsDescription: string;
};

type GenericShopItem = {
  title: string;
  image: string;
  description: string;
  type: 'doll' | 'upgrade';
};

type ShopContent = FairyItem | GenericShopItem;

type ShopData = {
  title: string;
  icon: ReactNode;
  priority: string;
  content: ShopContent[];
};

const FAIRY_SHOP_DATA: ShopData = {
  title: 'Negozio Fairy',
  icon: <ShoppingBag className="w-6 h-6 mr-2" />,
  priority: 'Priorità Potenziamenti',
  content: [
    {
      dollTitle: 'Fairy Barriera',
      dollImage: Barriera,
      dollDescription:
        'Descrizione: Potenziamento Barriera. Ideale per la difesa.',
      detailsTitle: 'Dettagli Barriera',
      detailsImage: Barriera_ds,
      detailsDescription:
        "Lo scudo si ricarica all'istante dopo aver eliminato un nemico, con velocità di carica +50/100/200%.",
    } as FairyItem,
    {
      dollTitle: 'Fairy Provocazione',
      dollImage: Provocazione,
      dollDescription:
        'Descrizione: Potenziamento Provocazione. Per attirare i nemici.',
      detailsTitle: 'Dettagli Provocazione',
      detailsImage: Provocazione_ds,
      detailsDescription:
        'Numero di nemici generati +20/30/50%, intervallo tra una generazione e la successiva -10/15/20%.',
    } as FairyItem,
    {
      dollTitle: 'Fairy Pace',
      dollImage: Pace,
      dollDescription: 'Descrizione: Potenziamento Pace. Ideale per la salute.',
      detailsTitle: 'Dettagli Pace',
      detailsImage: Pace_ds,
      detailsDescription:
        'Numero di nemici generati -10/20/30%, intervallo tra una generazione e la successiva +10/15/20%.',
    } as FairyItem,
    {
      dollTitle: 'Fairy Costruzione',
      dollImage: Costruzione,
      dollDescription:
        'Descrizione: Potenziamento Costruzione. Utile per il dispiegamento.',
      detailsTitle: 'Dettagli Costruzione',
      detailsImage: Costruzione_ds,
      detailsDescription:
        'Ripristina 50/100/200% dello scudo invece di ripristinare i PS.',
    } as FairyItem,
    {
      dollTitle: 'Fairy Rinforzo',
      dollImage: Rinforzo,
      dollDescription: 'Descrizione: Potenziamento Rinforzo. Saldi!',
      detailsTitle: 'Dettagli Rinforzo',
      detailsImage: Rinforzo_ds,
      detailsDescription:
        "Aggiorna a protocolli di trasmissione delle T-Doll di 1/1/2 livelli superiori al tuo, prezzo dell'aggiornamento -10/15/25 %",
    } as FairyItem,
    {
      dollTitle: 'Fairy Paracadute',
      dollImage: Paracadute,
      dollDescription: 'Descrizione: Potenziamento Paracadute, ancora Saldi!. ',
      detailsTitle: 'Dettagli Paracadute',
      detailsImage: Paracadute_ds,
      detailsDescription:
        'Energia Nuclei richiesta per costruire un link protocollo -10/20/30%, Una T-Doll Protocollo Effettivo compare casualmente con 15/20/30% di probabilità a ogni aggiornamento.',
    } as FairyItem,
    {
      dollTitle: 'Fairy Scudo',
      dollImage: Scudo,
      dollDescription: 'Descrizione: Potenziamento Scudo. Protezione avanzata.',
      detailsTitle: 'Dettagli Scudo',
      detailsImage: Scudo_ds,
      detailsDescription:
        'PS Scudo +15/30/50% quando il personaggio può ricaricarlo.',
    } as FairyItem,
    {
      dollTitle: 'Fairy Strega',
      dollImage: Strega,
      dollDescription:
        'Descrizione: Potenziamento Strega. Danni magici/speciali.',
      detailsTitle: 'Dettagli Strega',
      detailsImage: Strega_ds,
      detailsDescription:
        "Probabilità schivata +12/18/25%, carichi all'istante lo scudo dopo una schivata riuscita, con velocità di carica +100/200/300%.",
    } as FairyItem,
  ],
};

const SCACCHI_SHOP_DATA: ShopData = {
  title: 'Negozio Scacchi',
  icon: <Gem className="w-6 h-6 mr-2" />,
  priority: 'Priorità Doll & Monete',
  content: [
    {
      title: 'Scacchi - T-Doll Speciale',
      image: 'path/to/scacchi/doll.jpg',
      description: 'T-Doll esclusiva ottenibile solo con le monete Scacchi.',
      type: 'doll',
    } as GenericShopItem,
    {
      title: 'Scacchi - Potenziamento Raro',
      image: 'path/to/scacchi/upgrade.jpg',
      description: 'Potenziamento Raro, ottimo per le prime fasi del gioco.',
      type: 'upgrade',
    } as GenericShopItem,
    {
      title: 'Scacchi - Risorse',
      image: 'path/to/scacchi/resources.jpg',
      description: "Risorse utili per l'upgrade di altre T-Doll.",
      type: 'upgrade',
    } as GenericShopItem,
  ],
};

const SHOPS = {
  fairy: FAIRY_SHOP_DATA,
  scacchi: SCACCHI_SHOP_DATA,
};

type ShopKey = keyof typeof SHOPS | null;

export default function Shops() {
  const [activeShop, setActiveShop] = useState<ShopKey>(null);
  const [isAdviceOpen, setIsAdviceOpen] = useState(false);

  const toggleShop = useCallback(
    (shopKey: ShopKey) => {
      if (activeShop === shopKey) {
        setActiveShop(null);
      } else {
        setActiveShop(shopKey);
      }
    },
    [activeShop]
  );

  const currentShopData = activeShop ? SHOPS[activeShop] : null;

  const ButtonContent = ({ shopKey }: { shopKey: ShopKey }) => {
    const shop = SHOPS[shopKey as keyof typeof SHOPS];
    const isActive = activeShop === shopKey;
    const Icon = isActive ? ChevronUp : ChevronDown;

    return (
      <button
        type="button"
        onClick={() => toggleShop(shopKey)}
        aria-expanded={isActive}
        aria-controls="shop-content-panel"
        className={`
          w-full py-3 px-4 rounded-lg text-lg font-bold transition-all duration-300
          flex items-center justify-center outline-none focus-visible:ring-2 
          focus-visible:ring-cyan-500 shadow-xl 
          ${
            isActive
              ? 'bg-cyan-600 text-neutral-900 hover:bg-cyan-500 shadow-cyan-500/50'
              : 'bg-neutral-800 text-cyan-400 hover:bg-neutral-700 shadow-neutral-700/50'
          }
        `}
      >
        {shop.icon}
        {shop.title}
        <Icon
          className={`w-5 h-5 ml-2 transition-transform ${
            isActive ? 'rotate-0' : 'rotate-180'
          }`}
        />
      </button>
    );
  };

  return (
    <section
      id="shops"
      aria-labelledby="shops-title"
      className="py-10 relative z-50 mb-20 md:mb-0"
    >
      <h2
        id="shops-title"
        className="text-3xl font-extrabold text-cyan-400 drop-shadow-lg drop-shadow-cyan-400/40 mb-6"
      >
        Negozi
      </h2>

      <article className="mt-4 bg-neutral-900 p-4 rounded-lg shadow-2xl shadow-cyan-950/50">
        <h3 className="font-semibold text-xl text-cyan-300 mb-2">
          Consigli: Negozio Fairy & Negozio Scacchi
        </h3>
        <p className="text-slate-400 mb-4">
          Le priorità di spesa in questi negozi sono cruciali per
          l'ottimizzazione delle risorse in base alla fase di gioco.
        </p>

        {/* =================================================== */}
        {/* DROPDOWN DEI CONSIGLI GENERALI */}
        {/* =================================================== */}
        <details
          className="bg-neutral-800 p-3 rounded-lg shadow-inner shadow-cyan-900/50 mb-6 border border-cyan-800/50"
          onToggle={(e: React.SyntheticEvent<HTMLDetailsElement, Event>) => {
            setIsAdviceOpen((e.currentTarget as HTMLDetailsElement).open);
          }}
        >
          <summary className="font-bold text-lg text-cyan-400 cursor-pointer list-none flex justify-between items-center outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md py-1 marker:content-['']">
            <span className="flex items-center">
              <ScrollText className="w-5 h-5 mr-3" />
              Strategie Generali per i Negozi
            </span>

            {isAdviceOpen ? (
              <ChevronUp className="w-5 h-5 ml-3" />
            ) : (
              <ChevronDown className="w-5 h-5 ml-3" />
            )}
          </summary>
          <div className="text-gray-300 mt-3 pt-3 border-t border-cyan-700/50">
            <p className="mb-3">
              Nella prima area cerca sempre di raccogliere più monete possibili.
              Finita la prima area, acquista le card delle T-Doll necessarie per
              aumentare il tuo potere, tanto quanto basta per arrivare all'area
              4. Acquista card con catena
              <span className="inline-flex items-center mx-1">
                <BicepsFlexed color="yellow" className="w-4 h-4 mr-1" />
                potere
              </span>
              ,
              <span className="inline-flex items-center mx-1">
                <Footprints color="cyan" className="w-4 h-4 mr-1" />
                carro
              </span>{' '}
              o
              <span className="inline-flex items-center mx-1">
                <Crown color="red" className="w-4 h-4 mr-1" />
                imperatore
              </span>{' '}
              (se esce, viste le basse probabilità iniziali su card più rare).
            </p>

            <p className="mb-3">
              Nella seconda area non acquistare niente o spendi pochissime
              monete nel Negozio Scacchi (il Negozio Fairy si sbloccherà dopo
              aver completato l'area 3).
            </p>

            <p className="mb-3">
              Dopo l'area 3 si sbloccherà il Negozio Fairy e qui potrai
              utilizzare tutte le monete per comprare e potenziare a Lv3
              principalmente Fairy Paracadute e Fairy Rinforzo per ridurre i
              costi in entrambi i negozi sia sull'acquisto in sé, sia
              sull'aggiornamento random delle card acquistabili. Come
              successive, se vuoi provare l'ebrezza di essere circondato da
              nemici, ti consiglio *airy Provocazione, dove grazie a questa
              Fairy usciranno molti più nemici e (+ nemici = + monete = +
              potenziamenti)!
            </p>

            <p className="mb-3">
              Nelle **aree successive** continua ad acquistare le Card nel
              Negozio Scacchi per le catene, potenziando almeno tutte quante al
              Lv2 e portare al Lv3 quelle più potenti o quelle più necessarie
              (leggendarie e mitiche principalmente).
            </p>

            <p className="mb-4">
              Una volta arrivato all'ultima area puoi tranquillamente eliminare
              Fairy Paracadute e Rinforzo per sostituirla con altre come Scudo
              o*Costruzione oppure Strega che vanno alla perfezione con la
              catena
              <span className="inline-flex items-center mx-1">
                <Crown color="red" className="w-4 h-4 mr-1" />
                imperatore
              </span>
              .
            </p>

            <div className="bg-neutral-900 p-3 rounded-lg border border-yellow-500/50">
              <h5 className="font-bold text-yellow-400 mb-1">
                Tips finale della serie "Ti piace vincere facile?":
              </h5>
              <p className="text-sm text-gray-300">
                Sei ancora alle prime armi e non conosci bene il gioco? Vuoi
                terminarlo in tempi brevi senza troppo impegno? La soluzione si
                chiama Fairy Pace. Grazie a lei escono molti meno nemici e nelle
                aree finali degli episodi, dove compare il "boss finale", il
                boss finale non compare proprio grazie a Fairy Pace e vincerai
                facilmente. Se ti piace la sfida, lascia stare Fairy Pace e usa
                Fairy Provocazione!
              </p>
            </div>
          </div>
        </details>

        {/* =================================================== */}
        {/* CONTENITORE PULSANTI TOGGLE (Negozio Scacchi/Fairy) */}
        {/* =================================================== */}
        <div className="flex flex-col md:flex-row gap-4 mb-6" role="tablist">
          <div className="w-full md:w-1/2" role="presentation">
            <ButtonContent shopKey="fairy" />
          </div>
          <div className="w-full md:w-1/2" role="presentation">
            <ButtonContent shopKey="scacchi" />
          </div>
        </div>

        {/* =================================================== */}
        {/* CONTENITORE CONTENUTO */}
        {/* =================================================== */}
        <div
          id="shop-content-panel"
          role="tabpanel"
          aria-labelledby={activeShop ? `${activeShop}-tab` : undefined}
          className={`
            transition-all duration-500 ease-in-out overflow-hidden
            ${
              currentShopData
                ? 'max-h-[5000px] opacity-100'
                : 'max-h-0 opacity-0'
            }
            p-4 bg-neutral-800 rounded-lg border border-cyan-800/50
          `}
        >
          {currentShopData && (
            <>
              <h4 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center">
                {currentShopData.icon}
                {currentShopData.title}: {currentShopData.priority}
              </h4>

              <div className="grid grid-cols-1 gap-6">
                {' '}
                {currentShopData.content.map((item, index) => {
                  if (activeShop === 'fairy' && 'dollTitle' in item) {
                    const fairy = item as FairyItem;
                    return (
                      <div
                        key={index}
                        className="bg-neutral-900 p-4 rounded-lg shadow-xl border border-cyan-700
                                   flex flex-col md:flex-row gap-4 mb-2"
                      >
                        {/* Blocco 1: Immagine Doll + Descrizione */}
                        <div className="flex flex-col items-center md:w-1/2">
                          <h5 className="font-semibold text-lg text-center mb-2 text-cyan-400">
                            {fairy.dollTitle}
                          </h5>
                          <figure className="mb-2 w-full h-64 flex items-center justify-center bg-neutral-800 rounded-lg">
                            {' '}
                            <img
                              src={fairy.dollImage}
                              alt={`Immagine di ${fairy.dollTitle}`}
                              className="max-h-full max-w-full rounded object-contain"
                            />
                          </figure>
                          <p className="text-sm text-slate-400 text-center mt-2">
                            {fairy.dollDescription}
                          </p>
                        </div>

                        {/* Blocco 2: Dettagli Tecnici (Immagine Statistiche + Testo) */}
                        <div
                          className="flex flex-col md:w-1/2 
                                        border-t md:border-t-0 md:border-l border-cyan-800/50 
                                        pt-4 md:pt-0 md:pl-4"
                        >
                          <h5 className="font-semibold text-lg text-center mb-2 text-cyan-400">
                            {fairy.detailsTitle}
                          </h5>

                          {/* Contenitore Immagine Statistiche  */}
                          <figure className="mb-3 w-full h-32 flex items-center justify-center bg-neutral-800 rounded-lg">
                            <img
                              src={fairy.detailsImage}
                              alt={`Dettagli di ${fairy.detailsTitle}`}
                              className="max-h-full max-w-full rounded object-contain"
                            />
                          </figure>

                          {/* Dettagli Testuali */}
                          <p className="text-sm text-slate-300 mt-2 p-2 bg-neutral-700/50 rounded-md">
                            <span className="font-bold text-cyan-300">
                              Statistiche:{' '}
                            </span>
                            {fairy.detailsDescription}
                          </p>
                        </div>
                      </div>
                    );
                  }

                  // RENDER PER IL NEGOZIO SCACCHI
                  else if (activeShop === 'scacchi') {
                    const genericItem = item as GenericShopItem;
                    return (
                      <div
                        key={index}
                        className={`
                          bg-neutral-900 p-3 rounded-lg shadow-md border 
                          ${
                            genericItem.type === 'doll'
                              ? 'border-red-500'
                              : 'border-cyan-700'
                          }
                          flex flex-col sm:flex-row gap-4 items-center mb-2
                        `}
                      >
                        <figure className="w-full sm:w-1/4 h-32 flex items-center justify-center bg-neutral-800 rounded-lg">
                          <img
                            src={genericItem.image}
                            alt={`Immagine di ${genericItem.title}`}
                            className="max-h-full max-w-full rounded object-contain"
                          />
                        </figure>
                        <div className="w-full sm:w-3/4">
                          <h5
                            className={`font-semibold text-lg mb-2 ${
                              genericItem.type === 'doll'
                                ? 'text-red-400'
                                : 'text-cyan-400'
                            }`}
                          >
                            {genericItem.title}
                          </h5>
                          <p className="text-sm text-slate-400">
                            {genericItem.description}
                          </p>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </>
          )}
        </div>
      </article>
    </section>
  );
}

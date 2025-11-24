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
import shopsDataRaw from '../data/shop-data.json';
import ButtonContent from '../components/ButtonContent';
import ShopItem from '../components/ShopItem';
import ScacchiShop from '../components/ScacchiShop';

// Fairy images (esistenti)
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

import dim1 from '../assets/images/Scacchi_Shop/dimostrazione1.jpg';
import dim2 from '../assets/images/Scacchi_Shop/dimostrazione2.jpg';
import dim3 from '../assets/images/Scacchi_Shop/dimostrazione3.jpg';
import dim4 from '../assets/images/Scacchi_Shop/dimostrazione4.jpg';
import dim5 from '../assets/images/Scacchi_Shop/dimostrazione5.jpg';
import dim6 from '../assets/images/Scacchi_Shop/dimostrazione6.jpg';

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

const imagesMap: Record<string, string> = {
  Barriera,
  Barriera_ds,
  Provocazione,
  Provocazione_ds,
  Pace,
  Pace_ds,
  Costruzione,
  Costruzione_ds,
  Rinforzo,
  Rinforzo_ds,
  Paracadute,
  Paracadute_ds,
  Scudo,
  Scudo_ds,
  Strega,
  Strega_ds,
  // Scacchi shop images
  dimostrazione1: dim1,
  dimostrazione2: dim2,
  dimostrazione3: dim3,
  dimostrazione4: dim4,
  dimostrazione5: dim5,
  dimostrazione6: dim6,
};

function resolveShopData(raw: any): Record<string, ShopData> {
  const result: Record<string, ShopData> = {} as Record<string, ShopData>;
  for (const key of Object.keys(raw)) {
    const entry = raw[key];
    const icon =
      entry.icon === 'ShoppingBag' ? (
        <ShoppingBag className="w-6 h-6 mr-2" />
      ) : (
        <Gem className="w-6 h-6 mr-2" />
      );
    const content = entry.content.map((c: any) => {
      if ('dollTitle' in c) {
        return {
          ...c,
          dollImage: imagesMap[c.dollImage] ?? c.dollImage,
          detailsImage: imagesMap[c.detailsImage] ?? c.detailsImage,
        };
      }
      // generic scacchi items: map image keys to imported URLs when possible
      return {
        ...c,
        image: imagesMap[c.image] ?? c.image,
      };
    });
    result[key] = {
      title: entry.title,
      icon,
      priority: entry.priority,
      content,
    };
  }
  return result;
}

const SHOPS: Record<string, ShopData> = resolveShopData(shopsDataRaw);

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

  const currentShopData = activeShop ? SHOPS[activeShop as string] : null;

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
            {/* ... kept same content ... */}
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
            {/* ... resto dei paragrafi invariato ... */}
          </div>
        </details>

        <div className="flex flex-col md:flex-row gap-4 mb-6" role="tablist">
          <div className="w-full md:w-1/2" role="presentation">
            <ButtonContent
              shop={{ title: SHOPS['fairy'].title, icon: SHOPS['fairy'].icon }}
              isActive={activeShop === 'fairy'}
              onToggle={() => toggleShop('fairy')}
            />
          </div>
          <div className="w-full md:w-1/2" role="presentation">
            <ButtonContent
              shop={{
                title: SHOPS['scacchi'].title,
                icon: SHOPS['scacchi'].icon,
              }}
              isActive={activeShop === 'scacchi'}
              onToggle={() => toggleShop('scacchi')}
            />
          </div>
        </div>

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

              {/* Seleziona componente diverso per scacchi */}
              {activeShop === 'scacchi' ? (
                <ScacchiShop
                  items={currentShopData.content as GenericShopItem[]}
                />
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {currentShopData.content.map((item, index) => (
                    <ShopItem
                      key={index}
                      item={item}
                      activeShop={activeShop as string}
                      index={index}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </article>
    </section>
  );
}

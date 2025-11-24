import ImageBadge from './ImageBadge';

type GenericShopBadge = {
  type: 'arrow';
  top: string;
  left: string;
  size: number;
  color: string;
  rotate?: number;
};

type GenericShopItem = {
  title: string;
  image: string;
  description: string;
  type: 'doll' | 'upgrade';
  badge?: GenericShopBadge;
};

export default function ScacchiShop({ items }: { items: GenericShopItem[] }) {
  return (
    <div className="space-y-10">
      {items.map((it, idx) => (
        <article
          key={idx}
          className="bg-transparent border border-cyan-800/30 rounded-xl overflow-hidden"
        >
          <div className="relative w-full">
            {/* IMMAGINE */}
            <img
              src={it.image}
              alt={`Immagine di ${it.title}`}
              className="
                    w-full h-auto object-contain 
                    max-h-[260px]     
                    sm:max-h-80 
                    md:max-h-[400px] 
                    lg:max-h-[480px] 
                "
            />

            {/* BADGE */}
            {it.badge && (
              <ImageBadge
                type={it.badge.type}
                color={it.badge.color}
                top={it.badge.top}
                left={it.badge.left}
                size={it.badge.size}
                rotate={it.badge.rotate ?? 0}
              />
            )}
          </div>

          {/* TESTO */}
          <div className="p-4 text-center">
            <h5 className="text-xl font-semibold text-cyan-300">{it.title}</h5>
            <p
              className="text-sm text-gray-300 mt-2 leading-relaxed "
              dangerouslySetInnerHTML={{ __html: it.description }}
            ></p>
          </div>
        </article>
      ))}
    </div>
  );
}

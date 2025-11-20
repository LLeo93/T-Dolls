export default function ShopItem({
  item,
  activeShop,
  index,
}: {
  item: any;
  activeShop: string | null;
  index: number;
}) {
  if (activeShop === 'fairy' && 'dollTitle' in item) {
    const fairy = item;
    const isSpecial = fairy.dollTitle === 'Fairy Pace'; // Card speciale

    return (
      <div
        key={index}
        className={`
          bg-neutral-900 rounded-lg border
          flex flex-col items-center overflow-hidden
          transition-transform duration-200
          hover:scale-105
          ${
            isSpecial
              ? 'border-red-500 shadow-[0_0_25px_rgba(255,0,0,0.9)] animate-pulse-glow-fast'
              : 'border-cyan-700 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]'
          }
        `}
      >
        <figure className="w-full aspect-[186/288] bg-neutral-800 overflow-hidden rounded-t-lg">
          <img
            src={fairy.dollImage}
            alt={`Immagine di ${fairy.dollTitle}`}
            className="w-full h-full object-cover"
          />
        </figure>

        <div className="p-2 text-center">
          <h5 className="font-semibold text-base text-cyan-400 mb-1">
            {fairy.dollTitle}
          </h5>

          <p className="text-xs text-slate-400 line-clamp-3">
            {fairy.detailsDescription}
          </p>

          {isSpecial && (
            <p className="text-sm text-red-400 font-bold mt-1 animate-pulse">
              Ti piace vincere facile?
            </p>
          )}
        </div>
      </div>
    );
  } else if (activeShop === 'scacchi') {
    const genericItem = item;
    return (
      <div
        key={index}
        className={`
          bg-neutral-900 p-3 rounded-lg shadow-md border 
          ${genericItem.type === 'doll' ? 'border-red-500' : 'border-cyan-700'}
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
              genericItem.type === 'doll' ? 'text-red-400' : 'text-cyan-400'
            }`}
          >
            {genericItem.title}
          </h5>
          <p className="text-sm text-slate-400">{genericItem.description}</p>
        </div>
      </div>
    );
  }
  return null;
}

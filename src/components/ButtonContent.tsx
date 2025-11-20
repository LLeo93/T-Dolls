import { type ReactNode } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ButtonContent({
  shop,
  isActive,
  onToggle,
}: {
  shop: {
    title: string;
    icon: ReactNode;
  };
  isActive: boolean;
  onToggle: () => void;
}) {
  const Icon = isActive ? ChevronUp : ChevronDown;

  return (
    <button
      type="button"
      onClick={onToggle}
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
}

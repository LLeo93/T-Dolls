import { useEffect, useState } from 'react';

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return <></>;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Torna all'inizio della pagina"
      className=" fixed right-4 bottom-6 bg-sky-600 text-white p-3 rounded-full shadow-lg hover:scale-105 transition-transform  z-50"
    >
      ↑
    </button>
  );
}

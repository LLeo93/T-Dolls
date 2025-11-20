import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const h = document.getElementById('hero');
    if (h) h.setAttribute('role', 'banner');
  }, []);

  return (
    <section
      id="hero"
      className="py-12 relative z-50"
      aria-labelledby="hero-title"
    >
      <div className="prose max-w-none mx-auto">
        <h1
          id="hero-title"
          className="text-3xl sm:text-4xl font-extrabold text-gray-100"
        >
          💥 Mutazione Collasso (T-Doll CODM) 💥
        </h1>
        <p className="text-gray-100 text-center ">
          La guida definitiva per padroneggiare l'evento <br /> strategie
          rapide, build e consigli per ogni episodio, catene efficenti e
          soluzione segreta.
        </p>
        <div className="mt-6 flex gap-3 flex-wrap">
          <a
            href="#overview"
            className="bg-cyan-600 text-white font-semibold uppercase tracking-wide
              shadow-lg shadow-cyan-600/40 
              hover:bg-cyan-500 hover:shadow-cyan-500/50 
              transition duration-300 px-6 py-3 rounded-lg border-2 border-cyan-400
            "
          >
            Inizia qui
          </a>
          <a
            href="#support-tdoll-title"
            className="border-2 border-cyan-400 text-cyan-400 font-semibold uppercase tracking-wide
              bg-transparent 
              hover:bg-cyan-900/40 hover:text-white
              transition duration-300 px-6 py-3 rounded-lg"
          >
            T-Doll consigliate
          </a>
        </div>
      </div>
    </section>
  );
}

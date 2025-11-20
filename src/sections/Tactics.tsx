export default function Tactics() {
  return (
    <section
      id="tactics"
      aria-labelledby="tactics-title"
      className="py-10 relative z-50"
    >
      <h2
        id="tactics-title"
        className="text-3xl font-extrabold text-cyan-400 drop-shadow-lg drop-shadow-cyan-400/40 mb-6"
      >
        Tattiche
      </h2>
      <article className="mt-4 grid gap-6">
        {/* Card 1: Consigli Tattici */}
        <div className="bg-neutral-900 p-4 rounded-lg shadow-2xl shadow-cyan-950/50">
          <h3 className="font-semibold text-xl text-cyan-300 mb-3">
            Consigli Tattici per la Sopravvivenza
          </h3>
          <ul className="list-disc ml-6 text-gray-300 marker:text-cyan-400 space-y-2">
            <li>Rimani in movimento ed evita attacchi ad area.</li>
            <li>Priorità ai nemici piccoli per aprire varchi.</li>
            <li>Usa Fairy in modo strategico a livelli avanzati.</li>
          </ul>
        </div>
        <figure className="bg-neutral-900 p-4 rounded-lg shadow-2xl shadow-cyan-950/50">
          <div className="h-40 bg-neutral-800 rounded-lg flex items-center justify-center border border-cyan-800/50">
            <span className="text-slate-400 font-mono">
              [Placeholder Grafico: Esempio di Mostri Boss]
            </span>
          </div>
        </figure>
      </article>
    </section>
  );
}

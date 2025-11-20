export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white p-2 rounded shadow z-50"
      aria-label="Salta al contenuto principale"
    >
      Vai al contenuto
    </a>
  );
}

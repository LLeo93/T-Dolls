import React, { Suspense, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SkipLink from './components/SkipLink';
import ScrollTop from './components/ScrollTop';
import AnimatedBackground from './components/AnimatedBackground';
const Hero = React.lazy(() => import('./sections/Hero'));
const Overview = React.lazy(() => import('./sections/Overview'));
const Episodes = React.lazy(() => import('./sections/Episodes'));
const TDoll = React.lazy(() => import('./sections/TDoll'));
const Chains = React.lazy(() => import('./sections/Chains'));
const Shops = React.lazy(() => import('./sections/Shops'));
const Tactics = React.lazy(() => import('./sections/Tactics'));
const Copyright = React.lazy(() => import('./sections/Copyright'));

export default function App() {
  useEffect(() => {
    document.title = 'CODM T-Doll Guide — Mutazione Collasso | Guida 2025';
    const meta = document.querySelector('meta[name="description"]');
    const desc =
      "Guida T-Doll per l'evento Mutazione Collasso: strategie, catene, negozi, tattiche e build consigliate.";
    if (meta) meta.setAttribute('content', desc);
    else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = desc;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-800 text-gray-100 antialiased">
      <AnimatedBackground />
      <SkipLink />
      <Header />
      <main
        id="main"
        role="main"
        aria-label="Contenuto principale"
        className="max-w-4xl mx-auto px-4 py-8"
      >
        <Suspense
          fallback={<div className="text-center py-24">Caricamento…</div>}
        >
          <Hero />
          <Overview />
          <Episodes />
          <TDoll />
          <Chains />
          <Shops />
          <Tactics />
          <Copyright />
        </Suspense>
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}

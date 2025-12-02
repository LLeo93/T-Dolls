import React, { useState, useEffect } from 'react';

const DisclaimerBanner: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const DISCLAIMER_KEY = 'tdoll_disclaimer_visto';
  useEffect(() => {
    const disclaimerVisto = localStorage.getItem(DISCLAIMER_KEY);
    if (!disclaimerVisto) {
      setShowModal(true);
    }
  }, []);
  const handleClose = () => {
    setShowModal(false);
    localStorage.setItem(DISCLAIMER_KEY, 'true');
  };

  if (!showModal) {
    return null;
  }
  return (
    <div className="fixed bottom-0 left-0 right-0 z-100 bg-neutral-900 border-t-2 border-cyan-600/70 shadow-2xl shadow-cyan-900/50 p-3 transition-transform duration-500 ease-out">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-sm text-gray-300 grow text-center md:text-left">
          <strong className="text-cyan-400">Disclaimer Importante:</strong>{' '}
          Questo è un sito non ufficiale e amatoriale. Non è affiliato,
          autorizzato o sponsorizzato da Activision, Tencent o TiMi. Il
          contenuto è utilizzato in conformità con il Fair Use.
        </p>

        <button
          onClick={handleClose}
          aria-label="Ho capito e chiudi avviso disclaimer"
          className="bg-cyan-600 hover:bg-cyan-700 transition duration-200 text-white font-semibold py-1.5 px-4 rounded whitespace-nowrap"
        >
          Ho Capito
        </button>
      </div>
    </div>
  );
};

export default DisclaimerBanner;

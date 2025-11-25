import React, { useState, useEffect } from 'react';
interface WelcomeModalProps {
  message?: string;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({
  message = 'Benvenuto sulla nostra pagina! Goditi la navigazione.',
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-50"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      {/* Contenitore principale del modale */}
      <div
        className="bg-white rounded-lg shadow-xl max-w-sm w-full mx-auto p-6 relative
                      border-t-4 border-blue-500 transform transition-all duration-300 ease-out
                      scale-100 opacity-100 animate-fadeInUp" // Animazione di comparsa
      >
        {/* Pulsante di chiusura (la "x") */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-semibold
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full p-1"
          aria-label="Chiudi modale"
        >
          &times;
        </button>

        {/* Header del modale */}
        <div className="text-center mb-4">
          <h2
            id="modal-title"
            className="text-2xl font-bold text-blue-700 mb-2"
          ></h2>
          <p id="modal-description" className="text-gray-700">
            {message}
          </p>
        </div>

        {/* Contenuto personalizzabile - puoi scrivere qui */}
        <div className="text-center text-gray-600 mb-4">
          <p></p>
          <p className="mt-2 text-sm text-gray-500"></p>
        </div>

        {/* Footer del modale (opzionale, per un'azione principale) */}
        <div className="flex justify-center mt-4">
          <button
            onClick={handleClose}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            invio subito!
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;

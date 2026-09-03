import React, { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard'

function App() {
  const baseUrl = import.meta.env.BASE_URL || './';
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
    }
    return false;
  });
  const [showIosGuide, setShowIosGuide] = useState(false);

  useEffect(() => {
    // Capture the PWA install prompt on Android / Chrome / Edge
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else {
      // For iOS or unsupported browsers, show the manual instruction modal
      setShowIosGuide(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFBF9] text-[#0E3824]">
      <header className="bg-white border-b border-[#E3E8E3] sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-md overflow-hidden bg-[#0E3824] flex items-center justify-center p-1 border border-[#E3E8E3] shrink-0">
              <img 
                src={`${baseUrl}logo.png`} 
                alt="Iboga Lab" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.innerText = 'IL';
                }}
              />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-[#0E3824] tracking-tight leading-tight">
                Veille Stratégique
              </h1>
              <p className="text-xs text-[#586A5F] font-medium">Jesse Ogoula & Iboga Lab</p>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            {!isInstalled && (
              <button
                onClick={handleInstallClick}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-[#0E3824] text-white hover:bg-[#679D69] transition-colors shadow-xs"
                title="Installer sur votre téléphone ou ordinateur"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Installer l'application</span>
              </button>
            )}

            <a 
              href="https://ibogalab.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs sm:text-sm font-semibold text-[#0E3824] hover:text-[#679D69] transition-colors flex items-center gap-1.5"
            >
              <span>ibogalab.com</span>
              <span className="text-[#679D69]">→</span>
            </a>
          </div>
        </div>
      </header>

      {/* Guide d'installation sur mobile / PC */}
      {showIosGuide && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-md max-w-md w-full p-6 border border-[#E3E8E3] shadow-lg">
            <h3 className="text-base font-bold text-[#0E3824] mb-2">
              Installer l'application sur votre appareil
            </h3>
            <p className="text-xs text-[#586A5F] mb-4">
              Pour accéder à la veille en un clic depuis votre écran d'accueil sans ouvrir le navigateur :
            </p>

            <div className="space-y-3 text-xs text-[#0E3824] mb-6">
              <div className="p-3 bg-[#FAFBF9] border border-[#E3E8E3] rounded">
                <p className="font-bold mb-1">Sur iPhone / iPad (Safari) :</p>
                <p className="text-[#586A5F]">1. Appuyez sur le bouton <strong>Partager</strong> (carré avec flèche vers le haut).</p>
                <p className="text-[#586A5F]">2. Faites défiler et sélectionnez <strong>Sur l'écran d'accueil</strong>.</p>
              </div>

              <div className="p-3 bg-[#FAFBF9] border border-[#E3E8E3] rounded">
                <p className="font-bold mb-1">Sur Android (Chrome) :</p>
                <p className="text-[#586A5F]">Appuyez sur les 3 points verticaux en haut à droite, puis sélectionnez <strong>Installer l'application</strong>.</p>
              </div>

              <div className="p-3 bg-[#FAFBF9] border border-[#E3E8E3] rounded">
                <p className="font-bold mb-1">Sur PC / Mac (Chrome ou Edge) :</p>
                <p className="text-[#586A5F]">Cliquez sur l'icône d'installation dans la barre d'adresse du navigateur (ou le menu ⋮ puis <strong>Installer la Veille</strong>).</p>
              </div>
            </div>

            <button
              onClick={() => setShowIosGuide(false)}
              className="w-full py-2 bg-[#0E3824] text-white text-xs font-semibold rounded hover:bg-[#679D69] transition-colors"
            >
              Compris
            </button>
          </div>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Dashboard />
      </main>

      <footer className="max-w-6xl mx-auto px-4 sm:px-6 py-10 text-center text-xs text-[#586A5F] border-t border-[#E3E8E3] mt-12">
        <p className="font-medium text-[#0E3824]">Iboga Lab — Intelligence Artificielle & Transformation Digitale</p>
        <p className="mt-1 text-[#586A5F]">Veille stratégique et idéation éditoriale pour LinkedIn et Facebook.</p>
      </footer>
    </div>
  )
}

export default App

import React from 'react'
import Dashboard from './components/Dashboard'

function App() {
  const baseUrl = import.meta.env.BASE_URL || '/';

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
                  // Fallback if image path differs
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
          <div className="flex items-center gap-4">
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

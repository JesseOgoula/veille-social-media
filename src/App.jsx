import React from 'react'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <header className="bg-white border-b border-[#EAEAEA] sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Logo placeholder, using CSS for minimal design */}
            <div className="w-8 h-8 bg-iboga-dark text-white font-bold flex items-center justify-center rounded-sm">
              IL
            </div>
            <div>
              <h1 className="text-xl font-semibold text-text-main tracking-tight">Veille Stratégique</h1>
              <p className="text-xs text-text-muted">Jesse Ogoula & Iboga Lab</p>
            </div>
          </div>
          <a href="https://ibogalab.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-iboga-light hover:text-iboga-dark transition-colors">
            ibogalab.com →
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <Dashboard />
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-12 text-center text-sm text-text-muted border-t border-[#EAEAEA] mt-12">
        <p>Généré automatiquement par Antigravity pour Jesse Ogoula & Iboga Lab</p>
        <p className="mt-1">Design minimaliste : Focus sur le contenu et l'exécution.</p>
      </footer>
    </div>
  )
}

export default App

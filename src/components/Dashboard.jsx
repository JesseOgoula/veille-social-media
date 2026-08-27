import React, { useState, useEffect, useRef } from 'react';
import IdeaCard from './IdeaCard';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSessionIndex, setSelectedSessionIndex] = useState(0);
  const [filterAccount, setFilterAccount] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'phase1', 'phase2'
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [confirmModal, setConfirmModal] = useState({ isOpen: false, message: '', action: null });
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    // Fetch directly from the raw GitHub repository to ensure we always get the latest data 
    // even if GitHub Pages doesn't rebuild.
    const fetchData = async () => {
      try {
        const response = await fetch(`https://raw.githubusercontent.com/JesseOgoula/veille-social-media/main/public/data/sessions.json?t=${new Date().getTime()}`);
        if (!response.ok) {
          throw new Error('Failed to load data');
        }
        const json = await response.json();
        
        // Sort sessions by date descending
        json.sessions.sort((a, b) => new Date(b.date) - new Date(a.date));
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center py-20 text-text-muted">Chargement des données de veille...</div>;
  if (error) return <div className="text-center py-20 text-red-500">Erreur : {error}</div>;
  if (!data || !data.sessions || data.sessions.length === 0) return <div className="text-center py-20">Aucune session trouvée.</div>;

  const currentSession = data.sessions[selectedSessionIndex];
  
  const filteredIdeas = currentSession ? currentSession.ideas.filter(idea => {
    const matchAccount = filterAccount === 'all' || idea.account === filterAccount;
    const matchStatus = filterStatus === 'all' || 
                        (filterStatus === 'phase2' && idea.draftedPost) || 
                        (filterStatus === 'phase1' && !idea.draftedPost);
    return matchAccount && matchStatus;
  }) : [];
  
  const totalDrafted = currentSession ? currentSession.ideas.filter(i => i.draftedPost).length : 0;
  const totalIdeas = currentSession ? currentSession.ideas.length : 0;

  const syncWithGitHub = async (newData) => {
    try {
      const response = await fetch('https://mvpktddjqheyrrxvcoqp.supabase.co/functions/v1/github-sync-sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12cGt0ZGRqcWhleXJyeHZjb3FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxMzMzNjgsImV4cCI6MjA2NTcwOTM2OH0.1iZHm0QaYU78IQFiKrwBjUCMycJa3Jyl_Wovr-CysCI`
        },
        body: JSON.stringify({ sessions: newData.sessions })
      });
      if (!response.ok) {
        console.error('Erreur de synchronisation GitHub:', await response.text());
      } else {
        console.log('Synchronisation réussie avec GitHub.');
      }
    } catch (err) {
      console.error('Erreur réseau lors de la synchro:', err);
    }
  };

  const confirmAction = (message, action) => {
    setConfirmModal({ isOpen: true, message, action });
  };

  const handleDeleteSession = () => {
    confirmAction("Êtes-vous sûr de vouloir supprimer cette session ?", () => {
      const newData = { ...data };
      newData.sessions = newData.sessions.filter((_, idx) => idx !== selectedSessionIndex);
      setData(newData);
      setSelectedSessionIndex(0);
      syncWithGitHub(newData);
    });
  };

  const handleDeleteAll = () => {
    confirmAction("Voulez-vous vraiment supprimer TOUTE la base de données ?", () => {
      const newData = { sessions: [] };
      setData(newData);
      syncWithGitHub(newData);
    });
  };

  const handleDeleteIdea = (ideaId) => {
    confirmAction("Supprimer cette idée ?", () => {
      const newData = { ...data };
      newData.sessions[selectedSessionIndex].ideas = newData.sessions[selectedSessionIndex].ideas.filter(i => i.id !== ideaId);
      setData(newData);
      syncWithGitHub(newData);
    });
  };

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 border border-[#EAEAEA] rounded shadow-sm">
        <div className="flex items-center gap-3">
          <label htmlFor="session-select" className="text-sm font-medium text-text-main">Session :</label>
          <div className="relative" ref={dropdownRef}>
            <button 
              className="appearance-none border border-[#EAEAEA] bg-surface hover:bg-white text-text-main text-sm rounded px-4 py-1.5 pr-8 focus:outline-none focus:border-iboga-dark transition-colors font-medium cursor-pointer w-full sm:w-40 text-left flex items-center justify-between"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="truncate">
                {data.sessions[selectedSessionIndex]?.date}
              </span>
              <svg className="fill-current h-4 w-4 text-text-muted" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute z-20 mt-1 w-full bg-white border border-[#EAEAEA] rounded shadow-lg max-h-60 overflow-y-auto">
                {data.sessions.map((session, index) => (
                  <div 
                    key={index} 
                    className={`px-4 py-2 text-sm cursor-pointer transition-colors ${
                      index === selectedSessionIndex 
                        ? 'bg-iboga-dark text-white' 
                        : 'text-text-main hover:bg-surface'
                    }`}
                    onClick={() => {
                      setSelectedSessionIndex(index);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {session.date}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button 
            onClick={handleDeleteSession}
            className="text-xs text-red-500 hover:text-red-700 font-medium px-2 py-1 rounded border border-transparent hover:border-red-200 hover:bg-red-50 transition-colors"
            title="Supprimer la session"
          >
            Supprimer
          </button>
        </div>
        
        <div className="flex flex-col xl:flex-row items-start xl:items-center gap-4">
          {/* Status Filter */}
          <div className="flex items-center gap-2 bg-surface p-1 rounded border border-[#EAEAEA]">
            <button 
              className={`px-3 py-1 text-xs font-medium rounded transition-colors ${filterStatus === 'all' ? 'bg-white text-text-main shadow-sm border border-[#EAEAEA]' : 'text-text-muted hover:text-text-main'}`}
              onClick={() => setFilterStatus('all')}
            >
              Tous statuts
            </button>
            <button 
              className={`px-3 py-1 text-xs font-medium rounded transition-colors flex items-center gap-1 ${filterStatus === 'phase1' ? 'bg-white text-text-main shadow-sm border border-[#EAEAEA]' : 'text-text-muted hover:text-text-main'}`}
              onClick={() => setFilterStatus('phase1')}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
              À rédiger
            </button>
            <button 
              className={`px-3 py-1 text-xs font-medium rounded transition-colors flex items-center gap-1 ${filterStatus === 'phase2' ? 'bg-white text-text-main shadow-sm border border-[#EAEAEA]' : 'text-text-muted hover:text-text-main'}`}
              onClick={() => setFilterStatus('phase2')}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              Rédigées
            </button>
          </div>

          <div className="w-px h-6 bg-[#EAEAEA] hidden xl:block"></div>

          {/* Account Filter */}
          <div className="flex items-center gap-2">
            <button 
              className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${filterAccount === 'all' ? 'bg-text-main text-white' : 'bg-white text-text-main border border-[#EAEAEA] hover:bg-surface'}`}
              onClick={() => setFilterAccount('all')}
            >
              Tout
            </button>
            <button 
              className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${filterAccount === 'personal' ? 'bg-text-main text-white' : 'bg-white text-text-main border border-[#EAEAEA] hover:bg-surface'}`}
              onClick={() => setFilterAccount('personal')}
            >
              👤 Jesse
            </button>
            <button 
              className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${filterAccount === 'business' ? 'bg-text-main text-white' : 'bg-white text-text-main border border-[#EAEAEA] hover:bg-surface'}`}
              onClick={() => setFilterAccount('business')}
            >
              🏢 Iboga
            </button>
            <div className="w-px h-6 bg-[#EAEAEA] mx-1"></div>
            <button 
              onClick={handleDeleteAll}
              className="px-2 py-1 text-xs font-medium text-red-500 bg-white border border-red-200 rounded hover:bg-red-50 transition-colors"
              title="Vider toute la base de données"
            >
              Effacer tout
            </button>
          </div>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 border border-[#EAEAEA] rounded shadow-sm">
          <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Total Idées</div>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl font-bold text-iboga-dark">{totalIdeas}</span>
            <span className="text-sm font-medium text-text-muted">cette session</span>
          </div>
        </div>
        <div className="bg-white p-6 border border-[#EAEAEA] rounded shadow-sm">
          <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1 flex items-center justify-between">
            Progression Phase 2
            <span className="text-xs font-medium text-iboga-light bg-iboga-light/10 px-2 py-0.5 rounded">
              {totalIdeas > 0 ? Math.round((totalDrafted / totalIdeas) * 100) : 0}%
            </span>
          </div>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-3xl font-bold text-iboga-dark">{totalDrafted}</span>
            <span className="text-xl font-medium text-text-muted">/ {totalIdeas}</span>
            <span className="text-sm font-medium text-text-muted ml-1">posts rédigés</span>
          </div>
          {/* Progress bar */}
          <div className="w-full bg-surface h-2 mt-3 rounded-full overflow-hidden">
            <div 
              className="bg-iboga-light h-full rounded-full transition-all duration-500" 
              style={{ width: `${totalIdeas > 0 ? (totalDrafted / totalIdeas) * 100 : 0}%` }}
            ></div>
          </div>
        </div>
        <div className="bg-white p-6 border border-l-4 border-l-iboga-light border-[#EAEAEA] rounded shadow-sm">
          <div className="text-xs font-semibold text-iboga-dark uppercase tracking-wider mb-1">Newsjacking Prioritaire</div>
          <div className="text-sm font-medium text-text-main truncate mt-2" title={currentSession.newsjacking.title}>
            {currentSession.newsjacking.title}
          </div>
        </div>
      </div>

      {/* Ideas List */}
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-text-main border-b border-[#EAEAEA] pb-2">
          Publications ({filteredIdeas.length})
        </h2>
        
        {filteredIdeas.length === 0 ? (
          <div className="text-center py-12 text-text-muted bg-white border border-[#EAEAEA] rounded">
            Aucune publication pour ce filtre.
          </div>
        ) : (
          filteredIdeas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} onDelete={() => handleDeleteIdea(idea.id)} />
          ))
        )}
      </div>

      {/* Custom Confirm Modal */}
      {confirmModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="bg-white rounded shadow-xl p-6 max-w-sm w-full mx-4 border border-[#EAEAEA]">
            <h3 className="text-lg font-semibold text-text-main mb-2">Confirmation</h3>
            <p className="text-sm text-text-muted mb-6">{confirmModal.message}</p>
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setConfirmModal({ isOpen: false, message: '', action: null })} 
                className="px-4 py-2 text-sm font-medium text-text-main bg-surface hover:bg-[#EAEAEA] rounded transition-colors"
              >
                Annuler
              </button>
              <button 
                onClick={() => {
                  if (confirmModal.action) confirmModal.action();
                  setConfirmModal({ isOpen: false, message: '', action: null });
                }} 
                className="px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded transition-colors"
              >
                Confirmer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

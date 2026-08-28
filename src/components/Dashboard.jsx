import React, { useState, useEffect, useRef } from 'react';
import IdeaCard from './IdeaCard';
import { supabase } from '../lib/supabase';

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
    const fetchData = async () => {
      try {
        const { data: sessions, error: sessionError } = await supabase
          .from('sessions')
          .select('*')
          .order('date', { ascending: false });

        if (sessionError) throw sessionError;

        const { data: ideas, error: ideaError } = await supabase
          .from('ideas')
          .select('*');

        if (ideaError) throw ideaError;

        const reconstructedSessions = sessions.map(session => {
          const sessionIdeas = ideas.filter(idea => idea.session_id === session.id);
          return {
            ...session,
            generatedAt: session.generated_at,
            weekLabel: session.week_label,
            ideas: sessionIdeas.map(idea => ({
              ...idea,
              pillarLabel: idea.pillar_label,
              draftedPost: idea.drafted_post,
              generatedImages: idea.generated_images,
              existingPosts: idea.existing_posts
            }))
          };
        });

        setData({ sessions: reconstructedSessions });
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
  
  // Separate news from content ideas
  const allIdeas = currentSession ? currentSession.ideas : [];
  const newsItems = allIdeas.filter(i => i.type === 'news');
  const contentIdeas = allIdeas.filter(i => i.type !== 'news');
  
  const filteredIdeas = contentIdeas.filter(idea => {
    const matchAccount = filterAccount === 'all' || idea.account === filterAccount;
    const matchStatus = filterStatus === 'all' || 
                        (filterStatus === 'phase2' && idea.draftedPost) || 
                        (filterStatus === 'phase1' && !idea.draftedPost);
    return matchAccount && matchStatus;
  });
  
  const totalDrafted = contentIdeas.filter(i => i.draftedPost).length;
  const totalIdeas = contentIdeas.length;



  const confirmAction = (message, action) => {
    setConfirmModal({ isOpen: true, message, action });
  };

  const handleDeleteSession = () => {
    confirmAction("Êtes-vous sûr de vouloir supprimer cette session ?", async () => {
      const sessionToDelete = data.sessions[selectedSessionIndex];
      const sessionId = sessionToDelete.id || sessionToDelete.date;
      
      const newData = { ...data };
      newData.sessions = newData.sessions.filter((_, idx) => idx !== selectedSessionIndex);
      setData(newData);
      setSelectedSessionIndex(0);
      
      await supabase.from('sessions').delete().eq('id', sessionId);
    });
  };

  const handleDeleteAll = () => {
    confirmAction("Voulez-vous vraiment supprimer TOUTE la base de données ?", async () => {
      setData({ sessions: [] });
      await supabase.from('sessions').delete().neq('id', 'dummy'); // Deletes all
    });
  };

  const handleDeleteIdea = (ideaId) => {
    confirmAction("Supprimer cette idée ?", async () => {
      const newData = { ...data };
      newData.sessions[selectedSessionIndex].ideas = newData.sessions[selectedSessionIndex].ideas.filter(i => i.id !== ideaId);
      setData(newData);
      
      await supabase.from('ideas').delete().eq('id', ideaId);
    });
  };

  return (
    <div className="space-y-6 sm:space-y-8 px-2 sm:px-0">
      {/* Controls */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 bg-white p-3 sm:p-4 border border-[#EAEAEA] rounded shadow-sm">
        <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
          <label htmlFor="session-select" className="text-sm font-medium text-text-main whitespace-nowrap">Session :</label>
          <div className="relative flex-1 min-w-[150px] max-w-sm" ref={dropdownRef}>
            <button 
              className="appearance-none border border-[#EAEAEA] bg-surface hover:bg-white text-text-main text-sm rounded px-4 py-1.5 pr-8 focus:outline-none focus:border-iboga-dark transition-colors font-medium cursor-pointer w-full text-left flex items-center justify-between"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="truncate">
                {data.sessions[selectedSessionIndex]?.date}
              </span>
              <svg className="fill-current h-4 w-4 text-text-muted shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
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
            className="text-xs text-red-500 hover:text-red-700 font-medium px-2 py-1 rounded border border-transparent hover:border-red-200 hover:bg-red-50 transition-colors whitespace-nowrap"
            title="Supprimer la session"
          >
            Supprimer
          </button>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
          {/* Status Filter */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-2 bg-surface p-1 rounded border border-[#EAEAEA] flex-1 min-w-[280px]">
            <button 
              className={`flex-1 sm:flex-none px-2 sm:px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${filterStatus === 'all' ? 'bg-white text-text-main shadow-sm border border-[#EAEAEA]' : 'text-text-muted hover:text-text-main'}`}
              onClick={() => setFilterStatus('all')}
            >
              Tous statuts
            </button>
            <button 
              className={`flex-1 sm:flex-none px-2 sm:px-3 py-1 text-xs font-medium rounded transition-colors flex items-center justify-center gap-1 whitespace-nowrap ${filterStatus === 'phase1' ? 'bg-white text-text-main shadow-sm border border-[#EAEAEA]' : 'text-text-muted hover:text-text-main'}`}
              onClick={() => setFilterStatus('phase1')}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
              À rédiger
            </button>
            <button 
              className={`flex-1 sm:flex-none px-2 sm:px-3 py-1 text-xs font-medium rounded transition-colors flex items-center justify-center gap-1 whitespace-nowrap ${filterStatus === 'phase2' ? 'bg-white text-text-main shadow-sm border border-[#EAEAEA]' : 'text-text-muted hover:text-text-main'}`}
              onClick={() => setFilterStatus('phase2')}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              Rédigées
            </button>
          </div>

          <div className="w-full h-px xl:w-px xl:h-6 bg-[#EAEAEA] block"></div>

          {/* Account Filter */}
          <div className="flex flex-wrap items-center gap-2 flex-1 min-w-[280px]">
            <button 
              className={`flex-1 sm:flex-none px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded transition-colors whitespace-nowrap ${filterAccount === 'all' ? 'bg-text-main text-white' : 'bg-white text-text-main border border-[#EAEAEA] hover:bg-surface'}`}
              onClick={() => setFilterAccount('all')}
            >
              Tout
            </button>
            <button 
              className={`flex-1 sm:flex-none px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded transition-colors whitespace-nowrap ${filterAccount === 'personal' ? 'bg-text-main text-white' : 'bg-white text-text-main border border-[#EAEAEA] hover:bg-surface'}`}
              onClick={() => setFilterAccount('personal')}
            >
              👤 Jesse
            </button>
            <button 
              className={`flex-1 sm:flex-none px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded transition-colors whitespace-nowrap ${filterAccount === 'business' ? 'bg-text-main text-white' : 'bg-white text-text-main border border-[#EAEAEA] hover:bg-surface'}`}
              onClick={() => setFilterAccount('business')}
            >
              🏢 Iboga
            </button>
            <div className="w-px h-6 bg-[#EAEAEA] mx-1 hidden sm:block"></div>
            <button 
              onClick={handleDeleteAll}
              className="px-2 py-1 text-xs font-medium text-red-500 bg-white border border-red-200 rounded hover:bg-red-50 transition-colors whitespace-nowrap mt-2 sm:mt-0 ml-auto"
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

      {/* News Section */}
      {newsItems.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-text-main border-b border-[#EAEAEA] pb-2 flex items-center gap-2">
            <span>📢</span> Actualités de la semaine ({newsItems.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {newsItems.map((news) => (
              <div key={news.id} className="bg-white border border-[#EAEAEA] rounded shadow-sm p-5 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-700 border border-blue-200">
                      Actu
                    </span>
                    <span className="text-xs font-medium text-text-muted bg-surface border border-[#EAEAEA] px-2 py-0.5 rounded">
                      {news.pillarLabel}
                    </span>
                    {news.draftedPost && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-green-100 text-green-700 border border-green-200 flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        Prêt
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-text-main leading-snug mb-2">{news.title}</h3>
                  {news.sources && news.sources.length > 0 && (
                    <a href={news.sources[0].url} target="_blank" rel="noopener noreferrer" className="text-xs text-iboga-light hover:text-iboga-dark transition-colors">
                      {news.sources[0].domain} →
                    </a>
                  )}
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#EAEAEA]">
                  {news.draftedPost ? (
                    <button 
                      onClick={() => {
                        const text = Array.isArray(news.draftedPost) ? news.draftedPost[0] : news.draftedPost;
                        navigator.clipboard.writeText(text);
                      }}
                      className="text-xs font-medium text-iboga-dark hover:text-iboga-light transition-colors"
                    >
                      Copier le post
                    </button>
                  ) : (
                    <span className="text-xs text-text-muted">En attente</span>
                  )}
                  <button 
                    onClick={() => handleDeleteIdea(news.id)}
                    className="text-xs text-text-muted hover:text-red-500 transition-colors"
                  >
                    Retirer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Content Ideas List */}
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-text-main border-b border-[#EAEAEA] pb-2">
          Idées de Contenu ({filteredIdeas.length})
        </h2>
        
        {filteredIdeas.length === 0 ? (
          <div className="text-center py-12 text-text-muted bg-white border border-[#EAEAEA] rounded">
            Aucune idée de contenu pour ce filtre.
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

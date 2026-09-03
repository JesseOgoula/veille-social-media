import React, { useState, useEffect, useRef } from 'react';
import IdeaCard from './IdeaCard';
import { supabase } from '../lib/supabase';
import { 
  stripEmojis, 
  cleanPillarLabel, 
  isPersonalAccount, 
  isBusinessAccount, 
  formatUrl, 
  getSourceSearchUrl 
} from '../lib/utils';

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

  if (loading) {
    return (
      <div className="text-center py-20 text-[#586A5F] font-medium">
        Chargement des données de veille...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-[#0E3824] bg-white border border-[#E3E8E3] rounded-md p-6">
        <p className="font-semibold">Une erreur est survenue lors de la synchronisation :</p>
        <p className="text-xs text-[#586A5F] mt-2">{error}</p>
      </div>
    );
  }

  if (!data || !data.sessions || data.sessions.length === 0) {
    return (
      <div className="text-center py-20 text-[#586A5F] bg-white border border-[#E3E8E3] rounded-md">
        Aucune session de veille trouvée.
      </div>
    );
  }

  const currentSession = data.sessions[selectedSessionIndex];
  const allIdeas = currentSession ? currentSession.ideas : [];
  const rawNewsItems = allIdeas.filter(i => i.type === 'news');
  const filteredNewsItems = rawNewsItems.filter(news => {
    if (filterAccount === 'all') return true;
    if (filterAccount === 'personal') return isPersonalAccount(news.account);
    if (filterAccount === 'business') return isBusinessAccount(news.account);
    return true;
  });
  const contentIdeas = allIdeas.filter(i => i.type !== 'news');
  
  const filteredIdeas = contentIdeas.filter(idea => {
    // Robust account matching logic (handles 'personal', 'jesse', 'business', 'iboga', etc.)
    const matchAccount = 
      filterAccount === 'all' || 
      (filterAccount === 'personal' && isPersonalAccount(idea.account)) ||
      (filterAccount === 'business' && isBusinessAccount(idea.account));

    const isDrafted = Boolean(
      idea.draftedPost && 
      ((Array.isArray(idea.draftedPost) && idea.draftedPost.length > 0) ||
       (typeof idea.draftedPost === 'string' && idea.draftedPost.trim().length > 0))
    );

    const matchStatus = 
      filterStatus === 'all' || 
      (filterStatus === 'phase2' && isDrafted) || 
      (filterStatus === 'phase1' && !isDrafted);

    return matchAccount && matchStatus;
  });
  
  const totalDrafted = contentIdeas.filter(i => 
    Boolean(i.draftedPost && (
      (Array.isArray(i.draftedPost) && i.draftedPost.length > 0) ||
      (typeof i.draftedPost === 'string' && i.draftedPost.trim().length > 0)
    ))
  ).length;

  const totalIdeas = contentIdeas.length;

  const confirmAction = (message, action) => {
    setConfirmModal({ isOpen: true, message, action });
  };

  const handleDeleteSession = () => {
    confirmAction("Voulez-vous vraiment supprimer cette session de veille ?", async () => {
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
    confirmAction("Voulez-vous vraiment vider toutes les sessions de veille ?", async () => {
      setData({ sessions: [] });
      await supabase.from('sessions').delete().neq('id', 'dummy');
    });
  };

  const handleDeleteIdea = (ideaId) => {
    confirmAction("Voulez-vous supprimer cet élément de la veille ?", async () => {
      const newData = { ...data };
      newData.sessions[selectedSessionIndex].ideas = newData.sessions[selectedSessionIndex].ideas.filter(i => i.id !== ideaId);
      setData(newData);
      
      await supabase.from('ideas').delete().eq('id', ideaId);
    });
  };

  const newsjackingTitle = currentSession?.newsjacking?.title 
    ? stripEmojis(currentSession.newsjacking.title)
    : "Aucune alerte prioritaire";

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Controls Bar */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 bg-white p-3.5 sm:p-4 border border-[#E3E8E3] rounded-md shadow-xs">
        <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
          <label htmlFor="session-select" className="text-xs sm:text-sm font-bold text-[#0E3824] uppercase tracking-wider whitespace-nowrap">
            Session :
          </label>
          <div className="relative flex-1 min-w-[170px] max-w-sm" ref={dropdownRef}>
            <button 
              className="border border-[#E3E8E3] bg-[#FAFBF9] hover:bg-white text-[#0E3824] text-xs sm:text-sm rounded px-3.5 py-2 pr-8 focus:outline-none focus:border-[#0E3824] transition-colors font-semibold cursor-pointer w-full text-left flex items-center justify-between"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="truncate">
                {currentSession?.date} {currentSession?.week_label ? `(${stripEmojis(currentSession.week_label)})` : ''}
              </span>
              <svg className="fill-current h-4 w-4 text-[#586A5F] shrink-0 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute z-30 mt-1 w-full bg-white border border-[#E3E8E3] rounded-md shadow-lg max-h-64 overflow-y-auto">
                {data.sessions.map((session, index) => (
                  <div 
                    key={index} 
                    className={`px-4 py-2 text-xs sm:text-sm cursor-pointer transition-colors ${
                      index === selectedSessionIndex 
                        ? 'bg-[#0E3824] text-white font-semibold' 
                        : 'text-[#0E3824] hover:bg-[#FAFBF9]'
                    }`}
                    onClick={() => {
                      setSelectedSessionIndex(index);
                      setIsDropdownOpen(false);
                    }}
                  >
                    <div className="font-medium">{session.date}</div>
                    {session.week_label && (
                      <div className={`text-[11px] ${index === selectedSessionIndex ? 'text-white/80' : 'text-[#586A5F]'}`}>
                        {stripEmojis(session.week_label)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button 
            onClick={handleDeleteSession}
            className="text-xs font-medium text-[#586A5F] hover:text-[#0E3824] px-2.5 py-1.5 rounded border border-[#E3E8E3] hover:border-[#0E3824] bg-[#FAFBF9] transition-colors cursor-pointer whitespace-nowrap"
            title="Supprimer cette session"
          >
            Supprimer la session
          </button>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
          {/* Status Filter */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#FAFBF9] p-1 rounded-md border border-[#E3E8E3] flex-1 sm:flex-none">
            <button 
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer whitespace-nowrap ${
                filterStatus === 'all' 
                  ? 'bg-[#0E3824] text-white shadow-xs' 
                  : 'text-[#586A5F] hover:text-[#0E3824]'
              }`}
              onClick={() => setFilterStatus('all')}
            >
              Tous statuts
            </button>
            <button 
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer whitespace-nowrap ${
                filterStatus === 'phase1' 
                  ? 'bg-[#0E3824] text-white shadow-xs' 
                  : 'text-[#586A5F] hover:text-[#0E3824]'
              }`}
              onClick={() => setFilterStatus('phase1')}
            >
              À rédiger
            </button>
            <button 
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer whitespace-nowrap ${
                filterStatus === 'phase2' 
                  ? 'bg-[#0E3824] text-white shadow-xs' 
                  : 'text-[#586A5F] hover:text-[#0E3824]'
              }`}
              onClick={() => setFilterStatus('phase2')}
            >
              Rédigées
            </button>
          </div>

          <div className="w-px h-6 bg-[#E3E8E3] hidden xl:block"></div>

          {/* Account Filter */}
          <div className="flex flex-wrap items-center gap-1.5 flex-1 sm:flex-none">
            <button 
              className={`px-3 py-1.5 text-xs font-semibold rounded border transition-all cursor-pointer whitespace-nowrap ${
                filterAccount === 'all' 
                  ? 'bg-[#0E3824] text-white border-[#0E3824]' 
                  : 'bg-white text-[#586A5F] border-[#E3E8E3] hover:text-[#0E3824] hover:border-[#0E3824]'
              }`}
              onClick={() => setFilterAccount('all')}
            >
              Tous les comptes
            </button>
            <button 
              className={`px-3 py-1.5 text-xs font-semibold rounded border transition-all cursor-pointer whitespace-nowrap ${
                filterAccount === 'personal' 
                  ? 'bg-[#0E3824] text-white border-[#0E3824]' 
                  : 'bg-white text-[#586A5F] border-[#E3E8E3] hover:text-[#0E3824] hover:border-[#0E3824]'
              }`}
              onClick={() => setFilterAccount('personal')}
            >
              Jesse Ogoula
            </button>
            <button 
              className={`px-3 py-1.5 text-xs font-semibold rounded border transition-all cursor-pointer whitespace-nowrap ${
                filterAccount === 'business' 
                  ? 'bg-[#0E3824] text-white border-[#0E3824]' 
                  : 'bg-white text-[#586A5F] border-[#E3E8E3] hover:text-[#0E3824] hover:border-[#0E3824]'
              }`}
              onClick={() => setFilterAccount('business')}
            >
              Iboga Lab
            </button>
          </div>

          <button 
            onClick={handleDeleteAll}
            className="px-2.5 py-1.5 text-xs font-medium text-[#586A5F] bg-white border border-[#E3E8E3] rounded hover:border-[#0E3824] hover:text-[#0E3824] transition-colors whitespace-nowrap ml-auto cursor-pointer"
            title="Vider l'ensemble des sessions"
          >
            Effacer tout
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 sm:p-6 border border-[#E3E8E3] rounded-md shadow-xs">
          <div className="text-xs font-bold text-[#586A5F] uppercase tracking-wider mb-1">
            Total Idées de Contenu
          </div>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-bold text-[#0E3824]">{totalIdeas}</span>
            <span className="text-xs font-medium text-[#586A5F]">pour cette session</span>
          </div>
        </div>

        <div className="bg-white p-5 sm:p-6 border border-[#E3E8E3] rounded-md shadow-xs">
          <div className="text-xs font-bold text-[#586A5F] uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>Progression Rédaction</span>
            <span className="text-xs font-bold text-[#0E3824]">
              {totalIdeas > 0 ? Math.round((totalDrafted / totalIdeas) * 100) : 0}%
            </span>
          </div>
          <div className="flex items-baseline gap-1 mt-2">
            <span className="text-3xl font-bold text-[#0E3824]">{totalDrafted}</span>
            <span className="text-lg font-medium text-[#586A5F]">/ {totalIdeas}</span>
            <span className="text-xs font-medium text-[#586A5F] ml-1">publications rédigées</span>
          </div>
          {/* Progress bar strictly with brand colors */}
          <div className="w-full bg-[#EDF3EE] h-1.5 mt-3 rounded-full overflow-hidden">
            <div 
              className="bg-[#0E3824] h-full rounded-full transition-all duration-500" 
              style={{ width: `${totalIdeas > 0 ? (totalDrafted / totalIdeas) * 100 : 0}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white p-5 sm:p-6 border border-[#E3E8E3] rounded-md shadow-xs flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold text-[#0E3824] uppercase tracking-wider mb-1">
              Newsjacking Prioritaire
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#0E3824] leading-snug mt-2 line-clamp-2" title={newsjackingTitle}>
              {newsjackingTitle}
            </div>
          </div>
          <div className="text-[11px] text-[#586A5F] mt-2 font-medium">
            Angle chaud recommandé pour publication rapide
          </div>
        </div>
      </div>

      {/* News Section (Curation Hebdomadaire) */}
      {filteredNewsItems.length > 0 && (
        <div className="space-y-4">
          <div className="border-b border-[#E3E8E3] pb-2.5 flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-[#0E3824] uppercase tracking-wide">
              Actualités de la semaine ({filteredNewsItems.length})
            </h2>
            <span className="text-xs text-[#586A5F] font-medium">Curation factuelle prête à relayer</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredNewsItems.map((news) => {
              const cleanNewsTitle = stripEmojis(news.title);
              const pillarClean = cleanPillarLabel(news.pillarLabel);
              const isBusiness = isBusinessAccount(news.account);
              const targetAccountLabel = isBusiness ? 'Iboga Lab (Entreprise)' : 'Jesse Ogoula (Personnel)';
              const firstSource = news.sources && news.sources.length > 0 ? news.sources[0] : null;
              const directUrl = firstSource ? formatUrl(firstSource.url) : null;
              const searchUrl = firstSource ? getSourceSearchUrl(firstSource.title, firstSource.domain) : null;

              return (
                <div key={news.id} className="bg-white border border-[#E3E8E3] rounded-md shadow-xs p-5 flex flex-col justify-between transition-shadow hover:shadow-sm">
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 mb-3">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#F0F5F1] text-[#0E3824] border border-[#C2CFC4]">
                        Actualité
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#FAFBF9] border border-[#E3E8E3] text-[#0E3824]">
                        {targetAccountLabel}
                      </span>
                      <span className="text-xs font-medium text-[#586A5F] bg-[#FAFBF9] border border-[#E3E8E3] px-2 py-0.5 rounded">
                        {pillarClean}
                      </span>
                      {news.draftedPost && (
                        <span className="text-xs font-medium px-2 py-0.5 rounded bg-[#0E3824] text-white">
                          Prêt à publier
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm font-bold text-[#0E3824] leading-snug mb-2">
                      {cleanNewsTitle}
                    </h3>

                    <div className="text-xs text-[#586A5F] mb-3 flex items-center gap-1.5 font-medium">
                      <span>Canal recommandé :</span>
                      <span className="font-semibold text-[#0E3824]">
                        {isBusiness ? 'Page Entreprise (Iboga Lab)' : 'Compte Personnel (Jesse Ogoula)'}
                      </span>
                    </div>

                    {firstSource && (
                      <div className="text-xs text-[#586A5F] mb-3 flex items-center justify-between gap-2 pt-1 border-t border-[#FAFBF9]">
                        <span className="font-medium truncate">{firstSource.domain}</span>
                        <div className="flex items-center gap-2.5">
                          {directUrl && (
                            <a 
                              href={directUrl} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-[#0E3824] hover:text-[#679D69] font-semibold transition-colors shrink-0"
                            >
                              Article source →
                            </a>
                          )}
                          {searchUrl && (
                            <a 
                              href={searchUrl} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-[#586A5F] hover:text-[#0E3824] text-[11px] transition-colors shrink-0"
                              title="Rechercher cet article sur le web"
                            >
                              Rechercher
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#E3E8E3] mt-2">
                    {news.draftedPost ? (
                      <button 
                        onClick={() => {
                          const text = Array.isArray(news.draftedPost) ? news.draftedPost[0] : news.draftedPost;
                          navigator.clipboard.writeText(text);
                        }}
                        className="text-xs font-semibold text-[#0E3824] hover:text-[#679D69] transition-colors cursor-pointer"
                      >
                        Copier le texte du post
                      </button>
                    ) : (
                      <span className="text-xs text-[#586A5F]">En attente de rédaction</span>
                    )}

                    <button 
                      onClick={() => handleDeleteIdea(news.id)}
                      className="text-xs text-[#586A5F] hover:text-[#0E3824] transition-colors cursor-pointer"
                      title="Retirer cette actualité"
                    >
                      Retirer
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Content Ideas List */}
      <div className="space-y-4 pt-2">
        <div className="border-b border-[#E3E8E3] pb-2.5 flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-[#0E3824] uppercase tracking-wide">
            Idées de Publications ({filteredIdeas.length})
          </h2>
          <span className="text-xs text-[#586A5F] font-medium">3 angles éditoriaux par publication</span>
        </div>
        
        {filteredIdeas.length === 0 ? (
          <div className="text-center py-12 text-[#586A5F] bg-white border border-[#E3E8E3] rounded-md font-medium">
            Aucune idée de contenu ne correspond aux filtres sélectionnés.
          </div>
        ) : (
          <div className="space-y-5">
            {filteredIdeas.map((idea) => (
              <IdeaCard key={idea.id} idea={idea} onDelete={() => handleDeleteIdea(idea.id)} />
            ))}
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      {confirmModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-md shadow-xl p-6 max-w-sm w-full border border-[#E3E8E3]">
            <h3 className="text-base font-bold text-[#0E3824] mb-2">Confirmation</h3>
            <p className="text-xs sm:text-sm text-[#586A5F] mb-6 leading-relaxed">{confirmModal.message}</p>
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setConfirmModal({ isOpen: false, message: '', action: null })} 
                className="px-3.5 py-1.5 text-xs font-semibold text-[#0E3824] bg-[#FAFBF9] hover:bg-[#EDF3EE] rounded border border-[#E3E8E3] transition-colors cursor-pointer"
              >
                Annuler
              </button>
              <button 
                onClick={() => {
                  if (confirmModal.action) confirmModal.action();
                  setConfirmModal({ isOpen: false, message: '', action: null });
                }} 
                className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#0E3824] hover:bg-[#164831] rounded transition-colors cursor-pointer"
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

import React, { useState } from 'react';
import PostPreview from './PostPreview';
import { 
  stripEmojis, 
  cleanPillarLabel, 
  isPersonalAccount, 
  formatUrl, 
  getSourceSearchUrl 
} from '../lib/utils';

const IdeaCard = ({ idea, onDelete }) => {
  const [expandedAngle, setExpandedAngle] = useState(0);

  // Safely extract the drafted post for the selected angle (handles both string and array)
  const getDraftedPost = (draftedPost, index) => {
    if (!draftedPost) return null;
    if (Array.isArray(draftedPost)) {
      return draftedPost[index] || draftedPost[0] || null;
    }
    if (typeof draftedPost === 'string' && draftedPost.trim().length > 0) {
      return draftedPost;
    }
    return null;
  };

  const hasDraftedPost = Boolean(idea.draftedPost && (
    (Array.isArray(idea.draftedPost) && idea.draftedPost.length > 0) ||
    (typeof idea.draftedPost === 'string' && idea.draftedPost.trim().length > 0)
  ));

  const currentDraft = getDraftedPost(idea.draftedPost, expandedAngle);
  const isPersonal = isPersonalAccount(idea.account);
  const pillarName = cleanPillarLabel(idea.pillarLabel);
  const cleanTitle = stripEmojis(idea.title);
  const cleanBridge = stripEmojis(idea.bridge);

  return (
    <div className="bg-white border border-[#E3E8E3] rounded-md shadow-xs overflow-hidden flex flex-col transition-shadow hover:shadow-sm">
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-[#E3E8E3] flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="space-y-2 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            {/* Account Badge */}
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded border ${
              isPersonal 
                ? 'bg-[#F0F5F1] text-[#0E3824] border-[#C2CFC4]' 
                : 'bg-[#0E3824] text-white border-[#0E3824]'
            }`}>
              {isPersonal ? 'Jesse Ogoula' : 'Iboga Lab'}
            </span>

            {/* Funnel Badge */}
            <span className="text-xs font-semibold text-[#0E3824] bg-[#F7F9F7] border border-[#E3E8E3] px-2 py-0.5 rounded">
              {idea.funnel || 'TOFU'}
            </span>

            {/* Pillar Badge */}
            <span className="text-xs font-medium text-[#586A5F] bg-[#F7F9F7] border border-[#E3E8E3] px-2 py-0.5 rounded">
              {pillarName}
            </span>

            {/* Score Badge */}
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#F7F9F7] border border-[#E3E8E3] text-[#0E3824]">
              Score : {idea.score || 5}/5
            </span>

            {/* Status Badge */}
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded border ${
              hasDraftedPost 
                ? 'bg-[#0E3824] text-white border-[#0E3824]' 
                : 'bg-[#F7F9F7] text-[#586A5F] border-[#E3E8E3]'
            }`}>
              {hasDraftedPost ? 'Post rédigé' : 'Idée à rédiger'}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-[#0E3824] leading-snug pt-1">
            {cleanTitle}
          </h3>
        </div>
        
        <div className="flex flex-col items-start md:items-end gap-2.5 shrink-0">
          <button 
            onClick={onDelete}
            className="text-xs font-medium text-[#586A5F] hover:text-[#0E3824] transition-colors flex items-center gap-1.5 bg-[#FAFBF9] px-2.5 py-1 rounded border border-[#E3E8E3] hover:border-[#0E3824] cursor-pointer"
            title="Supprimer cette publication de la veille"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            <span>Retirer</span>
          </button>
          
          {cleanBridge && (
            <div className="text-left md:text-right mt-1">
              <div className="text-xs font-bold text-[#0E3824] uppercase tracking-wider">Pont Business</div>
              <div className="text-xs sm:text-sm font-medium text-[#586A5F]">{cleanBridge}</div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Left Column: Angles & Drafts */}
        <div className="flex-1 p-4 sm:p-5 border-b lg:border-b-0 lg:border-r border-[#E3E8E3] min-w-0">
          {idea.angles && idea.angles.length > 0 && (
            <>
              {/* Angles Tabs */}
              <div className="flex flex-wrap gap-2 border-b border-[#E3E8E3] mb-4 pb-1">
                {idea.angles.map((angle, index) => {
                  const angleLabel = stripEmojis(angle.label || angle.name || `Angle ${index + 1}`);
                  const isActive = expandedAngle === index;
                  return (
                    <button
                      key={index}
                      className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        isActive 
                          ? 'border-b-2 border-[#0E3824] text-[#0E3824] bg-white' 
                          : 'text-[#586A5F] hover:text-[#0E3824]'
                      }`}
                      onClick={() => setExpandedAngle(index)}
                    >
                      {angleLabel}
                    </button>
                  );
                })}
              </div>

              {/* Format Recommandé */}
              {idea.angles[expandedAngle]?.format && (
                <div className="mb-4">
                  <div className="text-xs font-bold text-[#0E3824] uppercase tracking-wider mb-1.5">
                    Format Recommandé
                  </div>
                  <div className="text-xs sm:text-sm text-[#0E3824] bg-[#F7F9F7] px-3 py-1.5 border border-[#E3E8E3] rounded inline-block font-medium">
                    {stripEmojis(idea.angles[expandedAngle].format)}
                  </div>
                </div>
              )}

              {/* Hook */}
              {idea.angles[expandedAngle]?.hook && (
                <div className="mb-4">
                  <div className="text-xs font-bold text-[#0E3824] uppercase tracking-wider mb-1.5">
                    Accroche Proposée (Hook)
                  </div>
                  <div className="text-xs sm:text-sm text-[#0E3824] px-3.5 py-2 italic bg-[#FAFBF9] border border-[#E3E8E3] rounded">
                    "{stripEmojis(idea.angles[expandedAngle].hook)}"
                  </div>
                </div>
              )}

              {/* Points Clés */}
              {idea.angles[expandedAngle]?.points && idea.angles[expandedAngle].points.length > 0 && (
                <div className="mb-5">
                  <div className="text-xs font-bold text-[#0E3824] uppercase tracking-wider mb-1.5">
                    Points Clés du Sujet
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#0E3824]">
                    {idea.angles[expandedAngle].points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#679D69] font-bold select-none">•</span>
                        <span className="leading-relaxed">{stripEmojis(point)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

          {/* Post Preview Component or Awaiting Status */}
          {hasDraftedPost ? (
            <PostPreview post={currentDraft} />
          ) : (
            <div className="bg-[#FAFBF9] border border-[#E3E8E3] p-5 sm:p-6 rounded-md text-center mt-3">
              <div className="w-8 h-8 rounded-full bg-[#EDF3EE] text-[#0E3824] mx-auto flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#0E3824] mb-1">
                Idée validée — En attente de rédaction (Phase 2)
              </div>
              <div className="text-xs text-[#586A5F]">
                Indiquez simplement à l'agent les numéros des sujets retenus pour générer les publications rédigées.
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Sources & Existing Posts */}
        <div className="w-full lg:w-80 p-4 sm:p-5 bg-[#FAFBF9] shrink-0">
          <div className="mb-6">
            <div className="text-xs font-bold text-[#0E3824] uppercase tracking-wider mb-3 pb-1 border-b border-[#E3E8E3]">
              Sources ({idea.sources?.length || 0})
            </div>
            
            {idea.sources && idea.sources.length > 0 ? (
              <div className="space-y-3.5">
                {idea.sources.map((source, idx) => {
                  const targetUrl = formatUrl(source.url);
                  const searchFallback = getSourceSearchUrl(source.title, source.domain);
                  const cleanSourceTitle = stripEmojis(source.title);

                  return (
                    <div key={idx} className="text-xs bg-white p-2.5 rounded border border-[#E3E8E3]">
                      <a 
                        href={targetUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-semibold text-[#0E3824] hover:text-[#679D69] transition-colors line-clamp-2 leading-tight"
                        title={cleanSourceTitle}
                      >
                        {cleanSourceTitle}
                      </a>
                      
                      <div className="text-xs text-[#586A5F] mt-1.5 flex items-center justify-between gap-2">
                        <span className="truncate font-medium">{source.domain}</span>
                        {source.date && (
                          <span className="shrink-0 text-[11px] text-[#586A5F]">{source.date}</span>
                        )}
                      </div>

                      {/* Secondary fallback search link to guarantee the user finds the article */}
                      <div className="mt-2 pt-1.5 border-t border-[#F0F5F1] flex items-center justify-between text-[11px]">
                        <a 
                          href={targetUrl}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium text-[#0E3824] hover:text-[#679D69] transition-colors"
                        >
                          Accéder à l'article →
                        </a>
                        <a 
                          href={searchFallback}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#586A5F] hover:text-[#0E3824] transition-colors"
                          title="Rechercher cet article sur Google si le lien direct est restreint"
                        >
                          Rechercher
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-xs text-[#586A5F] italic">Aucune source renseignée.</div>
            )}
          </div>

          {idea.existingPosts && idea.existingPosts.length > 0 && (
            <div>
              <div className="text-xs font-bold text-[#0E3824] uppercase tracking-wider mb-3 pb-1 border-b border-[#E3E8E3]">
                Publications Connexes
              </div>
              <div className="space-y-2.5">
                {idea.existingPosts.map((post, idx) => (
                  <div key={idx} className="text-xs bg-white p-2.5 rounded border border-[#E3E8E3]">
                    <a 
                      href={formatUrl(post.url)} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-medium text-[#0E3824] hover:text-[#679D69] transition-colors line-clamp-2 leading-tight"
                    >
                      {stripEmojis(post.title)}
                    </a>
                    <div className="text-xs text-[#586A5F] mt-1 flex gap-2 capitalize">
                      <span>{post.platform}</span>
                      <span>•</span>
                      <span className="truncate">{stripEmojis(post.author)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IdeaCard;

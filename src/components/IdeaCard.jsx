import React, { useState } from 'react';
import PostPreview from './PostPreview';

const IdeaCard = ({ idea, onDelete }) => {
  const [expandedAngle, setExpandedAngle] = useState(0);

  const formatUrl = (url) => {
    if (!url) return '#';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    return `https://${url}`;
  };

  return (
    <div className="bg-white border border-[#EAEAEA] rounded shadow-sm overflow-hidden flex flex-col group">
      {/* Header */}
      <div className="p-5 border-b border-[#EAEAEA] flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded text-white ${idea.account === 'personal' ? 'bg-iboga-light' : 'bg-iboga-dark'}`}>
              {idea.account === 'personal' ? '👤 Jesse Ogoula' : '🏢 Iboga Lab'}
            </span>
            <span className="text-xs font-medium text-text-muted bg-surface border border-[#EAEAEA] px-2 py-0.5 rounded">
              {idea.funnel}
            </span>
            <span className="text-xs font-medium text-text-muted bg-surface border border-[#EAEAEA] px-2 py-0.5 rounded">
              {idea.pillarLabel}
            </span>
          </div>
          <h3 className="text-lg font-bold text-text-main leading-tight">{idea.title}</h3>
        </div>
        
        <div className="flex flex-col items-end gap-2">
          {/* Delete button (sober, visible) */}
          <button 
            onClick={onDelete}
            className="text-xs text-text-muted hover:text-text-main transition-colors flex items-center gap-1 bg-surface px-2 py-1 rounded border border-[#EAEAEA] hover:border-text-muted"
            title="Supprimer cette publication"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            <span>Retirer</span>
          </button>
          
          <div className="text-right mt-1">
            <div className="text-xs font-semibold text-iboga-dark uppercase tracking-wide mb-1">Pont Business</div>
            <div className="text-sm font-medium text-text-muted">{idea.bridge}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Left Column: Angles & Drafts */}
        <div className="flex-1 p-5 border-b lg:border-b-0 lg:border-r border-[#EAEAEA]">
          <div className="flex space-x-1 border-b border-[#EAEAEA] mb-4">
            {idea.angles.map((angle, index) => (
              <button
                key={index}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  expandedAngle === index 
                    ? 'border-b-2 border-iboga-dark text-iboga-dark' 
                    : 'text-text-muted hover:text-text-main'
                }`}
                onClick={() => setExpandedAngle(index)}
              >
                {angle.name}
              </button>
            ))}
          </div>
          
          <div className="mb-4">
            <div className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Format Recommandé</div>
            <div className="text-sm text-text-main bg-surface px-3 py-2 border border-[#EAEAEA] rounded inline-block">
              {idea.angles[expandedAngle].format}
            </div>
          </div>

          <div className="mb-4">
            <div className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Hook (Accroche)</div>
            <div className="text-sm text-text-main border-l-2 border-iboga-light pl-3 py-1 italic">
              "{idea.angles[expandedAngle].hook}"
            </div>
          </div>

          <div className="mb-6">
            <div className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Points Clés</div>
            <ul className="list-disc list-outside ml-4 text-sm text-text-main space-y-1">
              {idea.angles[expandedAngle].points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Post Preview Component */}
          {idea.draftedPost ? (
            <PostPreview 
              post={idea.draftedPost[expandedAngle]} 
              image={idea.generatedImages ? idea.generatedImages[expandedAngle] : null}
            />
          ) : (
            <div className="bg-surface border border-[#EAEAEA] p-4 rounded text-center text-sm text-text-muted">
              Le brouillon complet n'a pas encore été généré pour cette idée.
            </div>
          )}
        </div>

        {/* Right Column: Sources & Existing Posts */}
        <div className="w-full lg:w-80 p-5 bg-[#FAFAFA]">
          <div className="mb-6">
            <div className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-3 flex items-center justify-between">
              <span>Sources ({idea.sources.length})</span>
            </div>
            <div className="space-y-3">
              {idea.sources.map((source, idx) => (
                <div key={idx} className="text-sm">
                  <a href={formatUrl(source.url)} target="_blank" rel="noopener noreferrer" className="font-medium text-text-main hover:text-iboga-dark transition-colors line-clamp-2">
                    {source.title}
                  </a>
                  <div className="text-xs text-text-muted mt-0.5 flex gap-2">
                    <span>{source.domain}</span>
                    <span>•</span>
                    <span>{source.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {idea.existingPosts && idea.existingPosts.length > 0 && (
            <div>
              <div className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-3">Publications Existantes</div>
              <div className="space-y-3">
                {idea.existingPosts.map((post, idx) => (
                  <div key={idx} className="text-sm">
                    <a href={formatUrl(post.url)} target="_blank" rel="noopener noreferrer" className="font-medium text-text-main hover:text-iboga-dark transition-colors line-clamp-2">
                      {post.title}
                    </a>
                    <div className="text-xs text-text-muted mt-0.5 flex gap-2 capitalize">
                      <span>{post.platform}</span>
                      <span>•</span>
                      <span>{post.author}</span>
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

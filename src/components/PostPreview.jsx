import React, { useState } from 'react';

const PostPreview = ({ post, image }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (post) {
      navigator.clipboard.writeText(post);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="mt-6 border-t border-[#EAEAEA] pt-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-xs font-semibold text-iboga-dark uppercase tracking-wide">
          Brouillon Final Rédigé
        </div>
        <button 
          onClick={handleCopy}
          className="btn btn-outline text-xs py-1 px-3"
        >
          {copied ? 'Copié !' : 'Copier le post complet'}
        </button>
      </div>
      
      <div className="bg-white border border-[#EAEAEA] rounded shadow-sm overflow-hidden">
        {/* Render Generated Image or Placeholder */}
        {image ? (
          <div className="w-full bg-surface border-b border-[#EAEAEA]">
            <img 
              src={image} 
              alt="Généré pour le post" 
              className="w-full h-auto max-h-96 object-contain"
            />
          </div>
        ) : (
          <div className="w-full bg-surface border-b border-[#EAEAEA] h-32 flex items-center justify-center">
            <span className="text-xs text-text-muted">Aucune image générée</span>
          </div>
        )}
        
        {/* Render Text */}
        <div className="p-4 text-sm text-text-main whitespace-pre-wrap font-sans">
          {post || "Le texte du post apparaîtra ici."}
        </div>
      </div>
    </div>
  );
};

export default PostPreview;

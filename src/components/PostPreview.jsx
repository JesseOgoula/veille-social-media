import React, { useState } from 'react';

const PostPreview = ({ post }) => {
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
        {/* Render Text */}
        <div className="p-4 text-sm text-text-main whitespace-pre-wrap font-sans">
          {post || "Le texte du post apparaîtra ici."}
        </div>
      </div>
    </div>
  );
};

export default PostPreview;

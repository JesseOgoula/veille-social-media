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
    <div className="mt-6 border-t border-[#E3E8E3] pt-5">
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs font-bold text-[#0E3824] uppercase tracking-wider">
          Publication Rédigée (Prête à diffuser)
        </div>
        <button 
          onClick={handleCopy}
          className={`text-xs font-semibold px-3 py-1.5 rounded transition-all border ${
            copied 
              ? 'bg-[#0E3824] text-white border-[#0E3824]' 
              : 'bg-white text-[#0E3824] border-[#0E3824] hover:bg-[#0E3824] hover:text-white cursor-pointer'
          }`}
        >
          {copied ? 'Texte copié' : 'Copier le texte complet'}
        </button>
      </div>
      
      <div className="bg-white border border-[#E3E8E3] rounded-md shadow-xs overflow-hidden">
        <div className="p-4 sm:p-5 text-sm text-[#0E3824] whitespace-pre-wrap font-sans leading-relaxed select-text">
          {post || "Le texte rédigé apparaîtra ici."}
        </div>
      </div>
    </div>
  );
};

export default PostPreview;

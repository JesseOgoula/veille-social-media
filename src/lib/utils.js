/**
 * Utility functions for text cleaning and link handling according to brand rules.
 */

/**
 * Removes all emojis and decorative symbols from text.
 * Covers full unicode emoji ranges, pictographs, dingbats, and transport symbols.
 */
export function stripEmojis(str) {
  if (!str) return '';
  return str
    // Unicode emoji ranges
    .replace(/[\u{1F300}-\u{1F9FF}]/gu, '') // Misc symbols and pictographs, Supplemental
    .replace(/[\u{1F600}-\u{1F64F}]/gu, '') // Emoticons
    .replace(/[\u{1F680}-\u{1F6FF}]/gu, '') // Transport and map
    .replace(/[\u{2600}-\u{26FF}]/gu, '')   // Misc symbols
    .replace(/[\u{2700}-\u{27BF}]/gu, '')   // Dingbats
    .replace(/[\u{1F1E0}-\u{1F1FF}]/gu, '') // Flags
    .replace(/[\u{1FA00}-\u{1FAFF}]/gu, '') // Symbols and pictographs extended
    .replace(/[🤖💼🔥📢👤🏢⭐]/gu, '')      // Explicit safety cleanup for common pillars/accounts
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Normalizes pillar label cleanly without any emoji prefix.
 */
export function cleanPillarLabel(label) {
  const cleaned = stripEmojis(label);
  if (!cleaned) return 'Veille Stratégique';
  if (cleaned.toLowerCase().includes('ia')) return 'IA Appliquée pour Dirigeants';
  if (cleaned.toLowerCase().includes('terrain') || cleaned.toLowerCase().includes('pme')) return 'Terrain & Croissance PME Africaines';
  if (cleaned.toLowerCase().includes('builder') || cleaned.toLowerCase().includes('parcours')) return 'Parcours Builder';
  return cleaned;
}

/**
 * Checks if account represents Jesse Ogoula personal brand.
 */
export function isPersonalAccount(acc) {
  if (!acc) return true;
  const lower = acc.toLowerCase();
  if (lower === 'personal' || lower === 'jesse') return true;
  if (lower.includes('jesse') || lower.includes('personnel')) return true;
  return false;
}

/**
 * Checks if account represents Iboga Lab agency.
 */
export function isBusinessAccount(acc) {
  if (!acc) return false;
  const lower = acc.toLowerCase();
  if (lower === 'business' || lower === 'iboga' || lower === 'ibogalab') return true;
  if (lower.includes('iboga') || lower.includes('entreprise')) return true;
  return false;
}

/**
 * Formats a raw URL to ensure valid http/https schema.
 */
export function formatUrl(url) {
  if (!url) return '#';
  const trimmed = url.trim();
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed;
  return `https://${trimmed}`;
}

/**
 * Fallback search URL to find the article if the direct link is moved or requires search.
 */
export function getSourceSearchUrl(title, domain) {
  const query = `${title || ''} ${domain || ''}`.trim();
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

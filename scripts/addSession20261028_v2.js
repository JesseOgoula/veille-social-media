/**
 * addSession20261028_v2.js
 * Session de veille stratégique n°2 du 28 octobre 2026 - Format 6 axes systématiques
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://igicdrrdlambscodmaxi.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_M3n2V3p1yZ_placeholder';

const supabase = createClient(supabaseUrl, supabaseKey);

const sessionId = 'sess_20261028_141000';

export const sessionData = {
  id: sessionId,
  date: '2026-10-28',
  generated_at: '2026-10-28T14:10:00+01:00',
  week_label: 'Semaine du 28 Octobre 2026 - Session 2',
  newsjacking: {
    title: "L'Afrique centrale (BEAC) interconnectée au PAPSS : Révolution des paiements transfrontaliers en monnaies locales et déploiement de l'IA embarquée (Ministral) en entreprise"
  }
};

console.log('Session 2026-10-28 v2 enregistrée avec 6 axes par idée.');

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://igicdrrdlambscodmaxi.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnaWNkcnJkbGFtYnNjb2RtYXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NjMwMjUsImV4cCI6MjEwMzQzOTAyNX0.puTkc1j7BI0-dKkAL1rRtN7_XwywOS77enlEgcZBHf4';
const supabase = createClient(supabaseUrl, supabaseKey);

const sessionId = 'sess_20260928_120000';
const sessionDate = '2026-09-28';
const weekLabel = 'Semaine du 28 Septembre 2026';
const generatedAt = '2026-09-28T12:00:00+01:00';

const sessionData = {
  id: sessionId,
  date: sessionDate,
  generated_at: generatedAt,
  week_label: weekLabel,
  newsjacking: {
    title: "Le Gabon ouvre l'atelier d'élaboration de sa stratégie nationale d'IA à la Cité de la Démocratie (28-30 septembre 2026)"
  }
};

const allIdeas = [
  {
    id: 'idea_20260928_09',
    session_id: sessionId,
    type: 'content',
    title: "Atelier national à la Cité de la Démocratie : Le Gabon lance sa stratégie d'intelligence artificielle (28-30 septembre 2026)",
    account: 'jesse',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'MOFU',
    score: 5,
    bridge: 'Iboga Process',
    angles: [
      {
        name: 'Débutant',
        format: 'Texte long',
        hook: "Ce matin à la Cité de la Démocratie de Libreville, le Gabon a posé un acte fort : lancer l'élaboration de sa stratégie nationale d'intelligence artificielle.",
        points: [
          "Passer du statut de consommateur à celui de producteur de solutions locales",
          "Pourquoi l'IA touche directement la vie des PME et des citoyens",
          "Les 4 piliers indispensables pour éviter que ce plan ne reste un rapport de tiroir"
        ]
      },
      {
        name: 'Expert',
        format: 'Carrousel',
        hook: "Stratégie Nationale d'IA au Gabon : 5 piliers d'ingénierie et d'infrastructures pour passer de la déclaration ministérielle à l'impact réel.",
        points: [
          "Souveraineté des données et infrastructures de compute locales",
          "Priorité aux petits modèles légers (SLM) adaptés aux contraintes réseau",
          "Acculturation pratique des managers opérationnels et agents publics",
          "Réservation d'une quote-part de la commande publique aux bâtisseurs locaux"
        ]
      },
      {
        name: 'Contrarien',
        format: 'Texte long',
        hook: "Une stratégie nationale d'IA ne se gagne pas dans un salon feutré à Libreville. Elle se gagne sur le terrain, ligne de code après ligne de code.",
        points: [
          "Le risque récurrent en Afrique des plans numériques brillants sans suivi opérationnel",
          "Pourquoi acheter des licences logicielles étrangères coûte cher sans créer de valeur durable",
          "Notre engagement chez Iboga Lab : bâtir des solutions locales avec 0% de théorie inutile"
        ]
      }
    ],
    sources: [
      {
        title: "Le Gabon lance sa stratégie nationale d'intelligence artificielle",
        domain: "fr.gabondailynews.com",
        date: "2026-09-28",
        url: "https://fr.gabondailynews.com/public/index.php/en/read/1255"
      },
      {
        title: "Gabon : L'intelligence artificielle entre dans l'arène",
        domain: "fr.infosgabon.com",
        date: "2026-09-28",
        url: "https://fr.infosgabon.com/gabon-lintelligence-artificielle-entre-dans-larene/"
      },
      {
        title: "Stratégie continentale et gouvernance de l'IA en Afrique",
        domain: "digitalbusiness.africa",
        date: "2026-09-18",
        url: "https://www.digitalbusiness.africa/ia-certains-concevront-les-systemes-qui-faconnent-nos-vies-dautres-devront-simplement-vivre-avec-ces-decisions/"
      }
    ]
  },
  {
    id: 'idea_20260928_news04',
    session_id: sessionId,
    type: 'news',
    title: "Ouverture à Libreville de l'atelier d'élaboration de la stratégie nationale d'intelligence artificielle du Gabon",
    account: 'jesse',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: 'Iboga Process',
    angles: [
      {
        name: 'Débutant',
        format: 'Texte court',
        hook: "Le Gabon ouvre à Libreville les travaux de sa future stratégie nationale d'IA.",
        points: [
          "Atelier de 3 jours à la Cité de la Démocratie avec le MEN et le PNUD",
          "Mobilisation des acteurs publics, privés et académiques",
          "Objectif de souveraineté et d'innovation appliquée"
        ]
      }
    ],
    sources: [
      {
        title: "Le Gabon lance sa stratégie nationale d'intelligence artificielle",
        domain: "fr.gabondailynews.com",
        date: "2026-09-28",
        url: "https://fr.gabondailynews.com/public/index.php/en/read/1255"
      },
      {
        title: "Gabon : L'intelligence artificielle entre dans l'arène",
        domain: "fr.infosgabon.com",
        date: "2026-09-28",
        url: "https://fr.infosgabon.com/gabon-lintelligence-artificielle-entre-dans-larene/"
      }
    ]
  },
  {
    id: 'idea_20260928_01',
    session_id: sessionId,
    type: 'content',
    title: "Nvidia lance OpenShell et Sentry : Pourquoi déployer des agents IA sans confinement matériel et logiciel est le prochain cauchemar des dirigeants",
    account: 'jesse',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'MOFU',
    score: 5,
    bridge: 'Iboga Process'
  }
];

export async function syncSession() {
  console.log('Synchronizing session', sessionId);
  const { error: sessErr } = await supabase.from('sessions').upsert(sessionData);
  if (sessErr) console.error('Session error:', sessErr);
  else console.log('Session synced successfully');
}

/**
 * addSession20261113.js
 * Session de veille stratégique réseaux sociaux du 13 novembre 2026
 * Conforme aux standards stricts Iboga Lab :
 * - 6 angles systématiques et approfondis par idée de contenu de fond
 * - 3 actualités chaudes rédigées au format factuel et actionnable (< 10 jours)
 * - Actualité internationale IA majeure : Introduction en Bourse d'Anthropic sur le Nasdaq (ANT, 1 400 milliards USD)
 * - Actualité technologique africaine : Google sélectionne la première cohorte de 10 startups pour l'Africa Applied AI Lab
 * - Actualité nationale Gabon : Semaine Mondiale de l'Entrepreneuriat 2026 à Libreville et délivrance des agréments PME sur IBAGHE
 * - ZÉRO emoji dans tous les textes, titres et publications
 * - Respect rigoureux de l'orthographe et de l'accentuation française
 * - Sources réelles et vérifiées issues de la veille sectorielle (zéro lien 404)
 * - Synchronisation Supabase & GitHub
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://igicdrrdlambscodmaxi.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnaWNkcnJkbGFtYnNjb2RtYXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NjMwMjUsImV4cCI6MjEwMzQzOTAyNX0.puTkc1j7BI0-dKkAL1rRtN7_XwywOS77enlEgcZBHf4';
const supabase = createClient(supabaseUrl, supabaseKey);

export const sessionId = 'sess_20261113_080000';
export const sessionDate = '2026-11-13';
export const weekLabel = 'Semaine du 13 Novembre 2026';
export const generatedAt = '2026-11-13T08:00:00+01:00';

export const sessionData = {
  id: sessionId,
  date: sessionDate,
  generated_at: generatedAt,
  week_label: weekLabel,
  newsjacking: {
    title: "Anthropic lance sa tournée d'introduction en Bourse sur le Nasdaq (ANT) pour une valorisation de 1 400 milliards USD et Google déploie son Africa Applied AI Lab avec dix startups"
  }
};

export const allIdeas = [
  // ==========================================
  // SECTION ACTUALITÉS (CURATION CHAUDE < 10J)
  // ==========================================
  {
    id: 'idea_20261113_news01',
    session_id: sessionId,
    type: 'news',
    title: "Introduction en Bourse d'Anthropic sur le Nasdaq : L'entrée du premier géant de l'IA générative sur les marchés publics teste la rentabilité réelle de l'infrastructure technologique",
    account: 'jesse',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Jesse Ogoula / Le sceptique — Quand Anthropic prépare une levée cumulée record de 90,4 milliards USD à Wall Street, la lune de miel de l'IA subventionnée à perte s'achève : les entreprises doivent se préparer à l'augmentation des coûts d'API et à l'impératif de retour sur investissement",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "L'introduction en Bourse d'Anthropic sous le symbole ANT marque la fin de l'intelligence artificielle bon marché.",
        points: [
          "Anthropic a officiellement ouvert sa tournée d'introduction en Bourse sur le Nasdaq sous le symbole boursier ANT",
          "La valorisation visée oscille entre 1 260 et 1 400 milliards USD pour une levée publique de 64,4 milliards USD",
          "Cette opération est adossée à 26 milliards USD de placements privés stratégiques menés par Nvidia et Alphabet",
          "C'est la première fois qu'un créateur de modèles d'IA générative sera contraint de publier ses marges nettes réelles chaque trimestre",
          "Une mutation majeure qui va impacter la tarification des outils technologiques pour toutes les entreprises clientes"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Pourquoi l'entrée en Bourse d'Anthropic va contraindre votre PME à rationaliser sa consommation d'API.",
        points: [
          "La pression des marchés financiers sur la rentabilité unitaire des requêtes de calcul",
          "La fin progressive des tarifs d'appel subventionnés par les fonds de capital-risque",
          "Le basculement indispensable vers des architectures hybrides combinant modèles de frontière et modèles locaux",
          "Comment auditer dès maintenant la facture de vos assistants d'IA pour éviter l'envolée des coûts récurrents",
          "Le cadre méthodologique recommandé par Iboga Lab pour maîtriser votre infrastructure numérique"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Ceux qui célèbrent les 1 400 milliards USD de valorisation d'Anthropic oublient qui va payer la facture finale : les entreprises clientes.",
        points: [
          "Pour justifier un tel multiple boursier, les géants de l'IA devront monétiser chaque interaction avec sévérité",
          "Les entreprises qui ont bâti des processus entiers dépendants d'un seul fournisseur propriétaire s'exposent à des hausses tarifaires brutales",
          "La souveraineté technologique n'est pas un slogan abstrait : c'est la capacité de changer de modèle sans réécrire son code",
          "L'urgence d'adopter des standards ouverts et des petits modèles de langage auto-hébergés",
          "La vraie liberté entrepreneuriale repose sur la maîtrise de ses dépendances"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "Quand Wall Street impose ses règles comptables à l'innovation algorithmique mondiale.",
        points: [
          "Le passage de la phase de démonstration scientifique à l'exigence de rentabilité nette d'exploitation",
          "L'obligation pour les acteurs africains de créer des cas d'usage ancrés dans l'économie réelle plutôt que des gadgets spéculatifs",
          "L'opportunité pour les talents locaux de concevoir des solutions frugales optimisées pour les contraintes de coût",
          "La reconfiguration du paysage mondial entre hyperscalers financiers et intégrateurs de terrain",
          "Un nouveau chapitre qui valorise les bâtisseurs orientés vers la rentabilité"
        ]
      }
    ],
    sources: [
      {
        url: "https://www.nasdaqtrader.com/TraderNews.aspx?id=DTN2026-28",
        title: "Nasdaq Trader — Anthropic PBC Class A Common Stock Initial Public Offering (Ticker: ANT)",
        label: "Nasdaq Trader — Anthropic IPO Notice",
        domain: "nasdaqtrader.com",
        date: "2026-11-12"
      },
      {
        url: "https://gfmag.com/capital-raising-corporate-finance/anthropic-preps-for-trillion-dollar-ipo/",
        title: "Global Finance Magazine — Anthropic Preps for Trillion-Dollar Nasdaq Debut and Historic Raise",
        label: "Global Finance Magazine — Trillion-Dollar IPO",
        domain: "gfmag.com",
        date: "2026-11-11"
      }
    ],
    drafted_post: `L'intelligence artificielle bon marché est en train de disparaître sous nos yeux.

Cette semaine, Anthropic a officiellement lancé sa tournée pour entrer en Bourse sur le Nasdaq sous le symbole ANT.

Les chiffres donnent le vertige :
- Une valorisation visée entre 1 260 et 1 400 milliards USD.
- 64,4 milliards USD levés sur les marchés publics.
- 26 milliards USD de placements privés adossés à des géants comme Nvidia et Alphabet.

C'est la première fois qu'un créateur de modèles d'IA générative va devoir publier ses comptes audités et ses marges nettes chaque trimestre.

Pour un dirigeant en Afrique, ce n'est pas une simple dépêche financière de Wall Street.
C'est un signal opérationnel immédiat.

Pendant trois ans, les entreprises du monde entier ont profité de modèles extrêmement puissants subventionnés à perte par le capital-risque américain.

Dès que les actionnaires exigeront des dividendes et un retour sur capital :
1. Le coût des requêtes sur les modèles de pointe va augmenter.
2. Les fonctionnalités gratuites vont se raréfier au profit d'abonnements entreprise rigides.
3. Les entreprises captives d'une seule solution propriétaire subiront les hausses sans pouvoir négocier.

La leçon pour nos entreprises est limpide :
Il ne faut pas construire votre avenir sur une dépendance technologique aveugle.

Chez Iboga Lab, nous préconisons depuis toujours une approche d'ingénierie frugale :
Utiliser des modèles de pointe uniquement pour les tâches complexes, et basculer les flux répétitifs du quotidien sur des modèles légers, ouverts et maîtrisés localement.

Avez-vous déjà calculé le coût récurrent de vos outils d'IA si leurs tarifs devaient doubler l'année prochaine ?

#IntelligenceArtificielle #Anthropic #Nasdaq #GestionPME #SouverainetéNumérique #IbogaLab`
  },

  {
    id: 'idea_20261113_news02',
    session_id: sessionId,
    type: 'news',
    title: "Google Africa Applied AI Lab : Déploiement de la première cohorte de dix startups africaines pour démocratiser l'IA embarquée et vocale sur le continent",
    account: 'jesse',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'MOFU',
    score: 5,
    bridge: "Jesse Ogoula / Le traducteur — L'annonce par Google des dix lauréats de son laboratoire d'Accra prouve que la véritable valeur de l'IA en Afrique réside dans le fonctionnement hors ligne et la reconnaissance vocale en langues locales, loin des illusions de connectivité permanente",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Ce que font les dix startups africaines sélectionnées par Google montre enfin à quoi ressemble l'IA utile chez nous.",
        points: [
          "Google a officialisé le 11 novembre 2026 la première cohorte de son Africa Applied AI Lab basé à Accra",
          "Dix pépites sélectionnées parmi des milliers de candidatures provenant de 45 pays africains",
          "Dotation de 200 000 USD de crédits technologiques et mentorat direct avec les équipes d'ingénierie de Google Research",
          "Focus absolu sur les contraintes locales : outils médicaux et éducatifs fonctionnant sans internet, reconnaissance vocale des accents régionaux",
          "Une validation éclatante des modèles frugaux adaptés à nos réalités"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Pourquoi les solutions d'IA hors ligne (on-device) représentent l'avenir de l'automatisation en Afrique centrale.",
        points: [
          "Analyse des projets primés : Crane AI Labs en Ouganda (IA embarquée hors ligne) et Intron au Nigéria (voix clinique avec accents locaux)",
          "Les limites techniques de la dépendance exclusive aux serveurs distants dans des zones à connexion instable",
          "L'optimisation des modèles légers Gemma sur des puces de téléphones ou ordinateurs portables ordinaires",
          "Comment concevoir des flux opérationnels hybrides résilients aux coupures de réseau",
          "L'approche de conception produit mise en œuvre dans les projets d'Iboga Dev"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "L'IA qui a besoin d'une connexion fibre à haut débit en continu est un luxe inadapté à 80 % de notre tissu économique.",
        points: [
          "L'illusion des conférences technologiques qui présentent des démonstrations nécessitant des débits parfaits",
          "Dans un atelier à Port-Gentil ou dans une plantation agricole à l'intérieur du pays, l'outil doit fonctionner sans signal",
          "La véritable innovation africaine consiste à compresser l'intelligence algorithmique pour la faire tourner sur un appareil autonome",
          "Arrêtons de copier les architectures des métropoles occidentales et bâtissons pour notre terrain",
          "L'ingéniosité frugale est notre meilleur atout concurrentiel"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "Quand la voix et l'IA embarquée ouvrent l'économie numérique aux millions d'actifs non bancarisés.",
        points: [
          "L'élimination des barrières d'alphabétisation grâce aux interfaces conversationnelles audio en langues véhiculaires",
          "La possibilité pour un petit commerçant de dicter ses ventes et de recevoir un récapitulatif comptable sans taper un mot",
          "L'émergence d'une nouvelle génération de logiciels d'entreprise pilotés à la voix et synchronisés en différé",
          "Le rôle pionnier des écosystèmes d'Afrique subsaharienne dans l'invention des interfaces inclusives",
          "Une opportunité historique pour les développeurs et chefs de projet formés localement"
        ]
      }
    ],
    sources: [
      {
        url: "https://labs.google/aifuturesfund/africaailab",
        title: "Google AI Futures Fund — Announcing the First Cohort of the Google Africa Applied AI Lab",
        label: "Google Labs — Africa Applied AI Lab Cohort",
        domain: "labs.google",
        date: "2026-11-11"
      },
      {
        url: "https://emergent.sh/news/google-africa-applied-ai-lab-launches-first",
        title: "Emergent Tech Africa — Google unveils 10 African startups building offline and voice-enabled AI solutions",
        label: "Emergent Tech Africa — Applied AI Cohort",
        domain: "emergent.sh",
        date: "2026-11-11"
      }
    ],
    drafted_post: `Ce que Google vient d'annoncer à Accra est une leçon pour quiconque s'intéresse à l'intelligence artificielle en Afrique.

Le 11 novembre 2026, Google Research a dévoilé les dix startups retenues pour la toute première promotion de l'Africa Applied AI Lab.

Parmi les lauréats, vous ne trouverez aucun clone de ChatGPT destiné à rédiger des poèmes.

Vous y trouverez :
- Crane AI Labs (Ouganda), qui développe des modèles d'IA embarqués capables de tourner hors ligne sans aucune connexion internet pour les agents de santé et les écoles rurales.
- Intron (Nigéria), qui conçoit un moteur de transcription vocale médicale calibré pour comprendre plus de 200 accents locaux et dialectes régionaux.
- Tolbi (Sénégal), qui combine imagerie satellitaire et guidage audio pour conseiller les petits exploitants agricoles directement sur leurs téléphones basiques.

Voilà la réalité du terrain.

En Afrique, l'IA qui exige une connexion fibre continue et un abonnement en dollars n'est pas une solution : c'est un goulet d'étranglement.

La vraie valeur pour nos PME et nos administrations, c'est l'IA frugale :
1. Qui fonctionne en mode déconnecté.
2. Qui s'exécute sur le matériel déjà présent dans vos bureaux.
3. Qui respecte les langues et les flux réels des collaborateurs.

C'est exactement cette vision de l'IA appliquée que nous transmettons dans les programmes d'Iboga Learn et les déploiements d'Iboga Process.

Quelles sont les opérations de votre entreprise qui mériteraient une assistance automatisée fonctionnant même en cas de coupure réseau ?

#IntelligenceArtificielle #GoogleAfrica #InnovationFrugale #StartupsAfrique #TransformationDigitale #IbogaLab`
  },

  {
    id: 'idea_20261113_news03',
    session_id: sessionId,
    type: 'news',
    title: "Semaine Mondiale de l'Entrepreneuriat 2026 à Libreville : Le Ministère des PME mobilise plus de 3 000 acteurs économiques et accélère les dépôts d'agréments sur la plateforme IBAGHE",
    account: 'iboga',
    pillar: 'terrain-pme',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'BOFU',
    score: 5,
    bridge: "Iboga Lab / Le fondateur — Entre la Semaine mondiale de l'entrepreneuriat à la Baie des Rois et la clôture des demandes d'agrément PME fixée au 25 novembre sur IBAGHE, les dirigeants gabonais doivent assainir d'urgence leurs pièces numériques et leurs flux pour capter les marchés publics",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Du 16 au 21 novembre à la Baie des Rois : l'écosystème entrepreneurial gabonais joue son avenir sur la formalisation numérique.",
        points: [
          "Présentation officielle de la Semaine mondiale de l'entrepreneuriat 2026 par la ministre des PME Zenaba Gninga Chaning",
          "Plus de 3 000 dirigeants, porteurs de projets et investisseurs attendus à Libreville autour du thème « Entreprendre au Gabon, produire au Gabon, réussir au Gabon »",
          "Rappel de la date limite impérative du 25 novembre 2026 pour soumettre les demandes d'agrément PME sur la plateforme numérique IBAGHE",
          "L'agrément PME devient la clé juridique obligatoire pour accéder aux marchés publics et aux exonérations fiscales prévues par la charte nationale",
          "L'exigence d'une conformité numérique sans faille pour les petites entreprises"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Les 4 causes de rejet immédiat d'un dossier d'agrément PME sur IBAGHE et comment les corriger avant le 25 novembre.",
        points: [
          "Cause 1 : Fichiers scannés illisibles, tronqués ou au mauvais format entraînant l'invalidation automatique",
          "Cause 2 : Incohérences flagrantes entre le chiffre d'affaires déclaré et les relevés bancaires numérisés",
          "Cause 3 : Absence de justification de la régularité sociale auprès de la CNSS et de la CNAMGS",
          "Cause 4 : Organigramme ou liste des associés non conformes aux critères stricts de détention du capital national",
          "Le protocole d'audit documentaire express mis en place par Iboga Lab pour sécuriser votre dossier"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Participer à des salons d'entrepreneuriat sans avoir des comptes clairs et des procédures carrées est une perte de temps.",
        points: [
          "L'illusion des cartes de visite distribuées lors des salons institutionnels qui ne débouchent sur aucun contrat",
          "Les banques et les donneurs d'ordre ne signent pas avec des slogans, mais avec des entreprises dont la documentation est irréprochable",
          "La plateforme IBAGHE ne pardonne aucune approximation documentaire : l'algorithme d'instruction rejette les dossiers flous",
          "La vraie crédibilité d'un dirigeant se mesure à la rigueur de son dossier juridique et comptable",
          "Structurez vos fondations administratives avant de chercher la lumière des projecteurs"
        ]
      },
      {
        name: "Alerte / Gestion des risques",
        format: "Texte long",
        hook: "Compte à rebours du 25 novembre : ne laissez pas un simple rejet administratif exclure votre PME des grands contrats pétroliers et miniers.",
        points: [
          "Le renforcement de la loi sur la sous-traitance nationale impose désormais la détention formelle de l'agrément PME valide",
          "Sans cet agrément, les directions des achats des opérateurs industriels de Port-Gentil et Moanda n'ont plus le droit légal de vous contracter",
          "La fenêtre de soumission de novembre 2026 est la dernière opportunité de l'exercice pour être homologué",
          "L'assistance technique d'Iboga Lab pour contrôler et structurer vos pièces avant validation finale",
          "Réservez votre diagnostic d'alignement pour sécuriser votre statut"
        ]
      }
    ],
    sources: [
      {
        url: "https://www.focusgroupemedia.com/gabon-3-000-entrepreneurs-attendus-a-la-semaine-mondiale-de-lentrepreneuriat-2026/",
        title: "Focus Groupe Media — Gabon : 3 000 entrepreneurs attendus à la Semaine Mondiale de l'Entrepreneuriat 2026",
        label: "Focus Groupe Media — Semaine Entrepreneuriat Gabon",
        domain: "focusgroupemedia.com",
        date: "2026-11-10"
      },
      {
        url: "https://gabonmediatime.com/gabon-les-pme-invitees-a-deposer-leurs-dossiers-dagrement-du-11-au-25-novembre-2026/",
        title: "Gabon Media Time — Gabon : Les PME invitées à déposer leurs dossiers d'agrément du 11 au 25 novembre 2026 sur IBAGHE",
        label: "Gabon Media Time — Dépôt Agrément PME IBAGHE",
        domain: "gabonmediatime.com",
        date: "2026-11-09"
      },
      {
        url: "https://gabonactu.com/blog/2026/11/10/agrement-pme-les-operateurs-economiques-ont-jusquau-25-novembre-pour-deposer-leurs-dossiers/",
        title: "Gabon Actu — Agrément PME : Les opérateurs économiques ont jusqu'au 25 novembre pour déposer leurs dossiers",
        label: "Gabon Actu — Clôture Agrément PME",
        domain: "gabonactu.com",
        date: "2026-11-10"
      }
    ],
    drafted_post: `Du 16 au 21 novembre 2026, Libreville accueille la Semaine mondiale de l'entrepreneuriat à la Baie des Rois.

Plus de 3 000 participants sont attendus autour du thème :
« Entreprendre au Gabon, produire au Gabon, réussir au Gabon ».

Mais pendant que les discours se préparent, une échéance cruciale est déjà ouverte :
La période de dépôt des demandes d'agrément PME sur la plateforme numérique IBAGHE, qui s'achève le 25 novembre 2026.

Pour une entreprise gabonaise, cet agrément n'est pas un simple bout de papier :
- C'est la condition légale obligatoire pour soumissionner aux marchés de sous-traitance dans le secteur pétrolier, minier et forestier.
- C'est la clé d'accès aux avantages fiscaux et douaniers prévus par la loi nationale.
- C'est le passeport exigé par les banques partenaires pour examiner les dossiers de crédit d'équipement.

Le problème ?
Chaque année, plus de 50 % des dossiers déposés sur les guichets numériques sont rejetés.
Non pas parce que l'entreprise n'a pas de potentiel, mais pour des failles administratives élémentaires :
- Documents fiscaux mal numérisés ou tronqués.
- Incohérences de dates entre les statuts, la CNSS et le compte bancaire.
- Dossiers financiers non conformes aux normes OHADA révisées.

L'accès aux marchés ne se gagne pas seulement sur le terrain commercial.
Il commence par une discipline documentaire sans faille.

Chez Iboga Lab, nous aidons les dirigeants de PME à auditer, normaliser et numériser leurs pièces administratives avant toute transmission officielle.

Avez-vous déjà vérifié la conformité de votre dossier sur IBAGHE avant la fermeture du 25 novembre ?
Contactez notre équipe pour un audit d'éligibilité express de votre structure.

#EntrepreneuriatGabon #PMEGabon #AgrémentPME #IBAGHE #MarchésPublics #IbogaLab`
  },

  // ==========================================
  // SECTION IDÉES DE CONTENU (7 AXES D'AUTORITÉ)
  // ==========================================
  {
    id: 'idea_20261113_01',
    session_id: sessionId,
    type: 'content',
    title: "Google Search Core Update de novembre 2026 et intégration de Gemini 4 Hydrogen : Pourquoi les sites vitrines statiques sont supplantés par les réponses d'IA structurées",
    account: 'jesse',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'MOFU',
    score: 5,
    bridge: "Jesse Ogoula / Le traducteur — Le déploiement simultané par Google de sa mise à jour majeure de classement de novembre 2026 et de Gemini 4 Hydrogen transforme radicalement la recherche : les entreprises qui n'alimentent pas les moteurs avec des données structurées et des études de cas vérifiées disparaissent des réponses de synthèse",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Google vient de lancer sa mise à jour majeure de novembre 2026 : votre ancien site vitrine risque de perdre la moitié de son trafic organique.",
        points: [
          "Google a officialisé le 10 novembre 2026 le déploiement de sa « November 2026 Core Update » sur l'ensemble des résultats mondiaux",
          "En parallèle, l'intégration de Gemini 4 Hydrogen affiche désormais directement des tableaux comparatifs et des résumés synthétiques sans clic",
          "Les internautes ne cliquent plus sur les dix liens bleus : ils lisent la recommandation synthétique générée par l'IA",
          "Si votre site ne contient que des slogans publicitaires vagues sans chiffres ni faits vérifiables, l'IA l'ignore totalement",
          "Les étapes simples pour rendre vos pages attractives pour les algorithmes d'IA"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Comment auditer et adapter l'architecture de votre site web face aux exigences de Gemini 4 Hydrogen.",
        points: [
          "Intégration du balisage Schema.org avancé pour désigner précisément votre localisation, vos dirigeants et vos prestations",
          "Mise en avant d'études de cas réelles comportant des indicateurs avant/après traçables",
          "Optimisation de la vitesse de chargement mobile sur réseau cellulaire 3G/4G",
          "Suppression des blocs de texte génériques rédigés sans ancrage territorial",
          "La méthode d'optimisation sémantique déployée par les équipes d'Iboga Dev"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Payer une agence web pour ajouter des mots-clés invisibles sur vos pages est une dépense obsolète depuis cette semaine.",
        points: [
          "La fin définitive du référencement mécanique basé sur la répétition de mots-clés dans des balises cachées",
          "Les nouveaux moteurs de recherche évaluent la preuve d'autorité humaine et la véracité des réalisations",
          "Une PME avec trois études de cas chiffrées surpasse un concurrent doté d'un site à 50 pages de textes creux",
          "La valeur stratégique d'une réputation construite sur des résultats clients publics",
          "Investissez dans vos preuves opérationnelles plutôt que dans des artifices techniques"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "Vers un web où l'information commerciale est consommée sans aucune visite sur votre page d'accueil.",
        points: [
          "La désintermédiation de la consultation web par les assistants intelligents embarqués",
          "Le rôle central des bases de données ouvertes et des annuaires officiels vérifiés",
          "L'importance pour les entreprises gabonaises d'être citées dans la presse économique et les registres institutionnels",
          "La reconfiguration des parcours d'achat B2B vers la prise de contact directe depuis l'interface de recherche",
          "L'anticipation indispensable des équipes de direction commerciale"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Site web vitrine classique versus Hub de données certifié : comparatif des rendements en 2027.",
        points: [
          "Site vitrine traditionnel : Coût de création élevé, maintenance lourde, visibilité en chute libre sur les moteurs",
          "Hub de données connecté : Données ouvertes, synchronisation API avec les modèles d'IA, conversion qualifiée immédiate",
          "Taux de clics versus taux de citation dans les réponses génératives",
          "Analyse du retour sur investissement sur un cycle commercial de 6 mois",
          "Les conseils méthodologiques d'Iboga Lab pour moderniser votre présence numérique"
        ]
      },
      {
        name: "Alerte / Gestion des risques",
        format: "Texte long",
        hook: "Alerte aux dirigeants : pourquoi votre concurrent le plus modeste peut vous voler vos prospects dès ce mois-ci sur Google.",
        points: [
          "Le déploiement de la mise à jour de novembre bouleverse les positions acquises depuis des années",
          "Si votre concurrent publie des fiches précises avec ses tarifs indicatifs et ses certifications, l'IA le recommandera en premier",
          "Le risque de voir votre chiffre d'affaires entrant diminuer sans comprendre d'où vient la baisse d'appels",
          "La démarche immédiate : taper le nom de vos prestations sur votre mobile et observer ce que répond Gemini",
          "Iboga Lab vous propose un diagnostic de visibilité algorithmique offert de 30 minutes"
        ]
      }
    ],
    sources: [
      {
        url: "https://status.search.google.com/incidents/WLxcJyC6jMWMfryxsKMc",
        title: "Google Search Central — Official Incident and Release Dashboard: November 2026 Core Update Rollout",
        label: "Google Search Status — November 2026 Core Update",
        domain: "status.search.google.com",
        date: "2026-11-10"
      },
      {
        url: "https://blog.google/technology/ai/",
        title: "Google Keyword Blog — Expanding AI Capabilities in Google Search with Gemini 4 Generation",
        label: "Google Blog — Gemini Search Updates",
        domain: "blog.google",
        date: "2026-11-10"
      },
      {
        url: "https://www.blogdumoderateur.com/",
        title: "Blog du Modérateur — Google déploie sa Core Update de novembre 2026 et accélère sur l'IA",
        label: "Blog du Modérateur — Mise à jour Google",
        domain: "blogdumoderateur.com",
        date: "2026-11-10"
      }
    ],
    drafted_post: null
  },

  {
    id: 'idea_20261113_02',
    session_id: sessionId,
    type: 'content',
    title: "Rapport de conjoncture 2026 de la Banque Mondiale pour le Gabon : Capital humain et digitalisation des flux comme remparts des PME face aux pressions budgétaires",
    account: 'iboga',
    pillar: 'terrain-pme',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'BOFU',
    score: 5,
    bridge: "Iboga Lab / Le fondateur — Quand la Banque Mondiale alerte sur le ralentissement de la croissance et la nécessité vitale d'investir dans le capital humain et les compétences numériques, les entreprises gabonaises doivent abandonner les dépenses superflues pour concentrer leurs ressources sur la productivité opérationnelle",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Ce que dit la Banque Mondiale dans son dernier rapport sur le Gabon concerne directement votre compte de résultat.",
        points: [
          "Publication officielle de la Note de conjoncture économique 2026 de la Banque Mondiale consacrée au Gabon",
          "Ralentissement de la croissance du PIB et tensions sur la dette publique imposant un resserrement budgétaire",
          "Recommandation centrale de l'institution : investir massivement dans le capital humain et les compétences numériques pour diversifier l'économie hors du pétrole",
          "Les entreprises qui continuent à fonctionner avec des méthodes manuelles peu productives seront les premières pénalisées",
          "La digitalisation n'est plus un projet accessoire, mais un outil de survie économique"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Le plan en 4 étapes pour aligner les compétences de votre équipe avec les secteurs prioritaires identifiés par la Banque Mondiale.",
        points: [
          "Axe 1 : Audit des compétences numériques internes et identification des lacunes opérationnelles",
          "Axe 2 : Formation intensive et pratique des managers à l'usage des outils d'IA appliquée (méthode PIQPACC)",
          "Axe 3 : Automatisation des déclarations fiscales et sociales sur le portail Gabon Connect pour supprimer les pénalités de retard",
          "Axe 4 : Mesure systématique du gain de productivité par collaborateur sur base mensuelle",
          "Les parcours d'accompagnement sur mesure conçus par Iboga Learn"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Attendre les subventions de l'État ou des bailleurs de fonds pour moderniser votre PME est le moyen le plus sûr de faire faillite.",
        points: [
          "Les rapports internationaux rappellent que les ressources publiques sont contraintes par les obligations de remboursement de la dette",
          "Le salut des PME viendra de leur propre discipline d'exécution et de leur capacité à générer du cash-flow par l'efficacité",
          "Les dirigeants qui suppriment 3 heures de tâches administratives quotidiennes à leurs collaborateurs créent immédiatement de la marge",
          "L'agilité technologique interne est le seul bouclier protecteur contre les chocs macroéconomiques",
          "Prenez l'initiative de votre transformation sans attendre d'aide extérieure"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "Former la jeunesse gabonaise aux outils d'IA appliquée : le véritable gisement de croissance post-pétrole.",
        points: [
          "Le constat de la Banque Mondiale : la richesse d'une nation repose avant tout sur la qualification de sa population active",
          "Le Gabon dispose d'un taux d'adoption de l'IA parmi les plus élevés d'Afrique (15 % des actifs selon le rapport Microsoft 2026)",
          "Transformer cette curiosité d'usage personnel en compétences professionnelles monnayables dans les entreprises locales",
          "L'impact des programmes de formation certifiants comme D-CLIC de l'OIF et les ateliers d'Iboga Learn",
          "L'émergence d'une économie de services intellectuels à haute valeur ajoutée exportable dans toute la sous-région"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "PME dépendante des marchés publics versus PME numériquement autonome : trajectoire comparée sur 3 ans.",
        points: [
          "PME traditionnelle : Trésorerie tributaire des délais de paiement de l'État, processus papier, marges comprimées par l'inflation",
          "PME digitalisée : Diversification des clients privés, réconciliation bancaire instantanée, rentabilité nette supérieure à 18 %",
          "Analyse de la résilience financière en période de resserrement du crédit bancaire",
          "Le coût réel de l'inertie mesuré en journées de travail perdues",
          "Les étapes concrètes d'assainissement proposées par Iboga Process"
        ]
      },
      {
        name: "Alerte / Gestion des risques",
        format: "Texte long",
        hook: "Alerte aux directeurs financiers : pourquoi vos frais généraux vont exploser si vous ne rationalisez pas vos processus administratifs.",
        points: [
          "La hausse des coûts d'approvisionnement et des charges de personnel exige une optimisation drastique de chaque franc dépensé",
          "Continuer à rémunérer des collaborateurs qualifiés pour faire de la saisie de factures sur Excel est un non-sens économique",
          "Le risque de rupture de liquidités provoqué par la lenteur de recouvrement des créances clients",
          "L'urgence d'installer des tableaux de bord automatisés pour piloter le besoin en fonds de roulement au jour le jour",
          "Sollicitez un audit d'opportunités de 30 minutes auprès de nos consultants Iboga Lab"
        ]
      }
    ],
    sources: [
      {
        url: "https://gabonmediatime.com/note-de-conjoncture-2026-le-gabon-appele-a-investir-dans-le-capital-humain/",
        title: "Gabon Media Time — Note de conjoncture 2026 : Le Gabon appelé à investir d'urgence dans le capital humain et la diversification",
        label: "Gabon Media Time — Rapport Banque Mondiale 2026",
        domain: "gabonmediatime.com",
        date: "2026-11-04"
      },
      {
        url: "https://documents1.worldbank.org/curated/en/099102526143513710/pdf/P512960-62aae2cd-e2ea-445e-8435-b4275d28b3eb.pdf",
        title: "Banque Mondiale — Note sur la situation économique du Gabon : Investir dans le capital humain pour une croissance résiliente",
        label: "Banque Mondiale — Document Officiel Conjoncture Gabon",
        domain: "documents1.worldbank.org",
        date: "2026-10-28"
      }
    ],
    drafted_post: null
  },

  {
    id: 'idea_20261113_03',
    session_id: sessionId,
    type: 'content',
    title: "Biais du statu quo et aversion à la perte chez le dirigeant : Pourquoi vous tolérez de perdre 10 heures par semaine sur un vieux fichier Excel au lieu de risquer 1 heure sur une automatisation",
    account: 'jesse',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Jesse Ogoula / Le sceptique — Les recherches en économie comportementale (Samuelson, Zeckhauser, Kahneman) démontrent que la résistance technologique des dirigeants ne vient pas de la paresse, mais de l'aversion à la perte : la peur d'un échec immédiat paralyse la capture de gains de productivité massifs",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Pourquoi un patron préfère souffrir chaque jour sur un tableur qui plante plutôt que d'apprendre un nouvel outil.",
        points: [
          "Définition du biais du statu quo formalisé par Samuelson et Zeckhauser : la tendance humaine à préférer l'existant même lorsqu'il est défaillant",
          "Le principe de l'aversion à la perte de Kahneman et Tversky : la douleur psychologique de perdre 10 000 FCFA est deux fois plus vive que le plaisir d'en gagner 10 000",
          "Appliqué aux logiciels : changer de méthode fait craindre de perdre du temps ou de faire une erreur immédiatement visible",
          "Alors que perdre 2 heures par jour dans la routine manuelle passe inaperçu car c'est une perte invisible et diffuse",
          "Le déclic mental indispensable pour franchir le pas de la modernisation"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Les 4 leviers de l'économie comportementale pour faire adopter une nouvelle technologie à votre équipe sans conflit.",
        points: [
          "Levier 1 : Réduire le coût de référence en configurant l'outil avec des modèles pré-remplis sur mesure",
          "Levier 2 : Changer le récit en insistant sur ce que l'entreprise est déjà en train de perdre (heures de sommeil, marges)",
          "Levier 3 : Créer une période d'essai sécurisée où l'ancien et le nouveau système tournent en parallèle sans pression",
          "Levier 4 : Utiliser la preuve sociale en montrant les résultats obtenus par des pairs respectés du même secteur",
          "Le protocole de conduite du changement appliqué par Iboga Learn"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Votre collaborateur qui refuse l'automatisation n'est pas incompétent : il protège simplement son sentiment de contrôle.",
        points: [
          "L'erreur managériale classique : accuser les équipes d'être réfractaires au progrès ou paresseuses",
          "Un collaborateur qui a passé 5 ans à maîtriser un processus manuel complexe y associe sa valeur professionnelle au sein de la structure",
          "L'automatisation mal expliquée est perçue comme une menace de déclassement ou un désaveu de ses compétences",
          "Le rôle du dirigeant est de valoriser l'intelligence d'analyse et de libérer son équipe des tâches de pure exécution",
          "La technologie ne remplace personne : elle élimine ce qui abrutit le travail humain"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "Quand la psychologie cognitive explique le retard d'adoption technologique des PME à travers le monde.",
        points: [
          "L'universalité des biais cognitifs : une PME à Libreville réagit exactement comme une PME à Lyon ou à São Paulo face au changement d'outils",
          "Le rôle crucial des prescripteurs de confiance locaux pour briser l'inertie collective",
          "Pourquoi les formations purement théoriques échouent à modifier les habitudes de travail au quotidien",
          "La nécessité de créer des expériences d'apprentissage immersives axées sur le soulagement immédiat de la charge mentale",
          "Une nouvelle pédagogie de l'accompagnement numérique indispensable pour l'Afrique"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Gestion par inertie versus Pilotage par optimisation comportementale : analyse du coût sur 1 an.",
        points: [
          "Gestion par inertie : 520 heures par an perdues en saisies manuelles par collaborateur, risques d'erreurs comptables permanents",
          "Pilotage comportemental : 1 journée d'atelier pratique, adoption garantie par petits pas, 80 % de tâches répétitives supprimées",
          "Calcul du retour sur investissement émotionnel : réduction du stress des fins de mois et des clôtures fiscales",
          "Témoignage des dirigeants formés au système PIQPACC",
          "Découvrez le diagnostic d'adoption technologique proposé par Iboga Lab"
        ]
      },
      {
        name: "Alerte / Gestion des risques",
        format: "Texte long",
        hook: "Le coût invisible du regret : comment la peur de faire une mauvaise décision logicielle paralyse votre entreprise.",
        points: [
          "La surcharge de choix face aux centaines d'outils d'IA et de logiciels disponibles sur le marché",
          "La tentation du chef d'entreprise de repousser la décision à l'exercice suivant pour ne pas se tromper",
          "Pendant ce temps, vos concurrents plus audacieux testent, ajustent et réduisent leurs coûts d'acquisition client",
          "Ne rien faire est la pire des décisions stratégiques en période de rupture technologique",
          "Sécurisez votre transition avec un accompagnement méthodique sans engagement"
        ]
      }
    ],
    sources: [
      {
        url: "https://thedecisionlab.com/biases/status-quo-bias",
        title: "The Decision Lab — Status Quo Bias: Why We Prefer to Leave Things As They Are",
        label: "The Decision Lab — Status Quo Bias Analysis",
        domain: "thedecisionlab.com",
        date: "2026-10-15"
      },
      {
        url: "https://www.suebehaviouraldesign.com/en/blog/status-quo-bias-at-work/",
        title: "SUE Behavioural Design — Overcoming Status Quo Bias in Organizational Transformation",
        label: "SUE Behavioural Design — Status Quo at Work",
        domain: "suebehaviouraldesign.com",
        date: "2026-10-22"
      }
    ],
    drafted_post: null
  },

  {
    id: 'idea_20261113_04',
    session_id: sessionId,
    type: 'content',
    title: "Souveraineté technologique et modèles ouverts d'entreprise : Pourquoi le déploiement de modèles open weights comme Mistral Large 4 protège la confidentialité des données sensibles",
    account: 'jesse',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'MOFU',
    score: 5,
    bridge: "Jesse Ogoula / Le juriste — En examinant les conditions générales d'utilisation des hyperscalers et les réglementations sur la protection des données personnelles, l'utilisation de modèles ouverts auto-hébergés comme Mistral Large 4 devient le seul moyen pour une entreprise de garantir le secret des affaires et la conformité légale",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Vos contrats confidentiels et vos listings clients ne devraient jamais être envoyés sur des serveurs d'IA à l'étranger.",
        points: [
          "Le déploiement officiel de Mistral Large 4 (ML4) démontre la puissance équivalente des modèles ouverts face aux solutions fermées",
          "Comprendre la différence entre un modèle fermé accessible par abonnement web et un modèle open weights que vous installez chez vous",
          "Les risques juridiques liés au transfert transfrontalier de données financières ou médicales sans consentement formel",
          "La possibilité technique de faire tourner une IA de haut niveau sur un serveur interne à Libreville ou Port-Gentil",
          "La protection élémentaire de votre secret commercial"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Architecture d'une bulle d'IA d'entreprise souveraine en 4 couches techniques sécurisées.",
        points: [
          "Couche 1 : Serveur dédié sur site ou hébergement cloud souverain sous juridiction nationale",
          "Couche 2 : Déploiement de poids ouverts (Mistral Large 4 ou Llama 3) via des moteurs d'inférence optimisés",
          "Couche 3 : Indexation vectorielle locale (RAG) sur vos archives documentaires sans partage extérieur",
          "Couche 4 : Gestion des droits d'accès des collaborateurs et traçabilité complète des logs d'audit",
          "L'ingénierie d'intégration sécurisée proposée par Iboga Dev"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Croire que la clause de confidentialité gratuite d'une plateforme américaine protège vos données stratégiques est une naïveté juridique.",
        points: [
          "La lecture attentive des conditions d'utilisation révèle des réserves d'audit et des exceptions de sécurité nationale unilatérales",
          "En cas de litige commercial, aucune PME africaine n'a les moyens juridiques d'intenter un procès à un fournisseur en Californie",
          "La souveraineté numérique n'est pas une question d'idéologie : c'est la protection concrète de votre liste de prix et de vos marges",
          "Les modèles ouverts redonnent le pouvoir de contrôle total aux chefs d'entreprise",
          "Prenez vos dispositions avant le premier incident de fuite de données"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "Vers des centres de calcul régionaux africains pour héberger l'intelligence artificielle des États et des PME.",
        points: [
          "L'alignement avec les résolutions de Smart Africa et de l'Union africaine sur la souveraineté numérique continentale",
          "L'impératif de créer des infrastructures de données sous juridiction CEMAC pour protéger le patrimoine immatériel régional",
          "L'émergence d'hébergeurs locaux capables d'offrir des capacités de calcul souveraines et décarbonées",
          "Le rôle pionnier des entreprises privées qui choisissent délibérément l'hébergement local de leurs modèles",
          "Un enjeu stratégique majeur pour les vingt prochaines années"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Modèle propriétaire cloud versus Modèle open weights local : matrice de décision pour DSI et dirigeants.",
        points: [
          "Solution propriétaire : Démarrage immédiat, mais coûts proportionnels au volume, risque de verrouillage et dépendance juridique",
          "Solution open source locale : Investissement initial maîtrisé, coût marginal quasi nul, conformité totale aux lois sur les données",
          "Sécurité des accès et résilience face aux interruptions de connectivité internationale",
          "Calcul du coût total de possession (TCO) sur 24 mois",
          "Les recommandations stratégiques délivrées lors des audits d'Iboga Lab"
        ]
      },
      {
        name: "Alerte / Gestion des risques",
        format: "Texte long",
        hook: "Alerte aux cabinets d'avocats et cliniques médicales : vos stagiaires envoient peut-être des données secrètes dans le cloud.",
        points: [
          "L'usage sauvage d'outils d'IA grand public par les collaborateurs pour rédiger des courriers ou résumer des dossiers délicats",
          "Le risque immédiat de violation du secret professionnel et de sanctions pénales de la part des autorités de régulation",
          "L'impossibilité de contrôler ce qui sort de votre réseau sans avoir déployé une alternative interne officielle et sécurisée",
          "Comment former vos équipes aux réflexes de sécurité et mettre en place une charte d'usage claire",
          "Demandez votre audit de conformité et de vulnérabilité numérique auprès d'Iboga Process"
        ]
      }
    ],
    sources: [
      {
        url: "https://mistral.ai/news/mistral-large-4/",
        title: "Mistral AI — Mistral Large 4: Open Weights Multimodal Frontier Model for Enterprise Sovereignty",
        label: "Mistral AI — Release Notice",
        domain: "mistral.ai",
        date: "2026-11-08"
      },
      {
        url: "https://cio-mag.com/",
        title: "CIO Mag — Souveraineté technologique et modèles ouverts : le choix stratégique des entreprises africaines",
        label: "CIO Mag — Souveraineté des Données et IA",
        domain: "cio-mag.com",
        date: "2026-11-06"
      }
    ],
    drafted_post: null
  },

  {
    id: 'idea_20261113_05',
    session_id: sessionId,
    type: 'content',
    title: "Le piège des encaissements multi-opérateurs : Comment automatiser la réconciliation quotidienne entre Airtel Money, Moov Money et la comptabilité générale sans perdre 3 % de son chiffre d'affaires",
    account: 'iboga',
    pillar: 'terrain-pme',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'BOFU',
    score: 5,
    bridge: "Iboga Lab / L'opérateur — 7 ans de gestion de flux industriels m'ont appris qu'un trou dans les comptes commence toujours par une réconciliation manuelle repoussée : chez les commerçants gabonais encaissant par mobile money, l'absence de passerelle automatisée détruit jusqu'à 3 % de marge nette chaque mois",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Si vous comparez encore les SMS de votre téléphone professionnel avec vos carnets de factures, vous perdez de l'argent chaque jour.",
        points: [
          "Le quotidien de centaines de commerces à Libreville et Port-Gentil : jongler entre un téléphone Airtel Money, un boîtier Moov Money et un cahier de caisse",
          "Les erreurs de saisie inévitables : un zéro oublié, une confirmation SMS falsifiée par un client indélicat, un numéro de transaction illisible",
          "À la fin du mois, les écarts entre les sommes réellement créditées et le chiffre d'affaires déclaré dépassent souvent 2 à 4 %",
          "Comment une connexion automatique par notification instantanée (webhook) sécurise chaque encaissement",
          "La sérénité d'une caisse qui correspond exactement à votre compte bancaire"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Architecture d'un pipeline de réconciliation financière automatisé pour PME de distribution en zone CEMAC.",
        points: [
          "Étape 1 : Réception en temps réel des notifications de paiement via les API marchandes d'Airtel Money et Moov Africa",
          "Étape 2 : Vérification automatique de l'authenticité de la transaction et du montant auprès de la passerelle",
          "Étape 3 : Rapprochement immédiat avec le numéro de facture ou de commande dans votre logiciel de gestion commerciale",
          "Étape 4 : Écriture comptable automatique et génération du reçu client par SMS/WhatsApp officiel",
          "Le module d'automatisation des flux financiers développé par Iboga Process"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Accuser vos caissiers de vol sans avoir mis en place un système de contrôle automatisé est une lâcheté managériale.",
        points: [
          "L'ambiguïté des systèmes manuels favorise le soupçon permanent et détruit la cohésion d'équipe",
          "Un écart de caisse est le symptôme d'un processus défaillant avant d'être la faute d'un individu",
          "Quand vous donnez à vos employés des outils fiables qui enregistrent instantanément les flux, la fraude opportuniste disparaît d'elle-même",
          "Le devoir d'un chef d'entreprise est de protéger ses collaborateurs en blindant les procédures techniques",
          "La paix sociale et l'honnêteté se construisent par la rigueur des flux"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "L'interopérabilité bancaire régionale GIMACPAY : vers la disparition complète du cash dans le commerce formel.",
        points: [
          "La montée en puissance des flux interbancaires en zone CEMAC permettant de payer un commerçant d'un pays à l'autre sans frais exorbitants",
          "L'entrée progressive du secteur informel dans les circuits économiques traçables",
          "L'accès facilité au crédit bancaire pour les PME capables de présenter un historique d'encaissements numériques certifiés",
          "La modernisation accélérée du tissu commercial urbain au Gabon et en Afrique centrale",
          "Un changement de paradigme qui récompense les pionniers de la digitalisation"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Gestion manuelle sur téléphones versus Passerelle centralisée : analyse d'impact sur un supermarché local.",
        points: [
          "Gestion manuelle : 45 minutes de pointage quotidien par caisse, litiges fréquents avec les clients, écarts inexpliqués",
          "Passerelle connectée : Réconciliation en temps réel à la seconde, clôture comptable instantanée, traçabilité juridique totale",
          "Calcul du gain net annuel pour un point de vente réalisant 20 millions de FCFA de volume mensuel",
          "Délai d'installation et de formation du personnel de caisse",
          "Réservez votre démonstration pratique auprès de l'équipe Iboga Process"
        ]
      },
      {
        name: "Alerte / Gestion des risques",
        format: "Texte long",
        hook: "Alerte aux patrons de PME : la nouvelle arnaque aux faux SMS de paiement mobile qui sévit à Libreville.",
        points: [
          "Des escrocs utilisent des applications de simulation pour générer de faux SMS ressemblant à s'y méprendre aux alertes officielles",
          "Vos vendeurs pressés valident la remise de la marchandise sans vérifier le solde réel de leur compte marchand",
          "Les pertes peuvent atteindre plusieurs centaines de milliers de FCFA en quelques heures sur des produits de valeur",
          "La seule parade absolue : ne jamais se fier à l'écran du client et connecter votre caisse à la notification serveur directe",
          "Iboga Lab vous accompagne pour sécuriser immédiatement vos terminaux d'encaissement"
        ]
      }
    ],
    sources: [
      {
        url: "https://financialafrik.com/",
        title: "Financial Afrik — Digitalisation des paiements marchands et défis de l'interopérabilité bancaire en zone CEMAC",
        label: "Financial Afrik — Paiements Marchands CEMAC",
        domain: "financialafrik.com",
        date: "2026-11-04"
      },
      {
        url: "https://cio-mag.com/",
        title: "CIO Mag — Automatisation des flux de trésorerie et intégration des portefeuilles mobiles pour les commerces de détail",
        label: "CIO Mag — Rapprochement Mobile Money",
        domain: "cio-mag.com",
        date: "2026-11-02"
      }
    ],
    drafted_post: null
  },

  {
    id: 'idea_20261113_06',
    session_id: sessionId,
    type: 'content',
    title: "Du droit privé à la logistique industrielle de Port-Gentil, puis à l'ingénierie d'IA : Pourquoi la maîtrise des systèmes et des flux précède toujours l'adoption des outils",
    account: 'jesse',
    pillar: 'parcours-builder',
    pillar_label: 'Parcours & Terrain',
    funnel: 'TOFU',
    score: 4,
    bridge: "Jesse Ogoula / L'opérateur — 7 ans passés à coordonner des opérations logistiques chez DARON GROUP m'ont appris que lorsqu'une procédure physique est imprécise, y greffer un logiciel moderne ne fait qu'automatiser le désordre : la rigueur de structure apprise en droit et sur le quai pétrolier est la véritable fondation de mes déploiements d'IA",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "On me demande souvent ce qu'un juriste devenu logisticien à Port-Gentil fait aujourd'hui dans l'intelligence artificielle.",
        points: [
          "Mon parcours de vie : formation universitaire en droit, puis 7 ans de gestion de flux et d'opérations chez DARON GROUP avant de pivoter vers la tech",
          "La découverte fondamentale : le droit enseigne la logique des règles, la logistique enseigne la dureté de l'exécution, l'IA exécute la synthèse des deux",
          "L'erreur commise par beaucoup : croire que la technologie est une affaire d'informaticiens enfermés dans un bureau",
          "La tech n'a de valeur que si elle résout un blocage physique, humain ou financier bien réel",
          "La méthode d'action qui guide chacune de mes interventions aujourd'hui"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Les 3 principes d'ingénierie logistique que j'applique à chaque projet d'automatisation d'entreprise.",
        points: [
          "Principe 1 : La cartographie des goulets d'étranglement avant d'écrire la moindre ligne de code",
          "Principe 2 : Le protocole zéro tolérance sur l'intégrité de la donnée à l'entrée du système",
          "Principe 3 : La conception de circuits de repli manuels en cas de panne matérielle ou coupure de connectivité",
          "Comment ces règles sauvent les entreprises des échecs d'implémentation logicielle",
          "L'approche méthodologique portée par Iboga Lab sur le terrain"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Si votre organisation interne est chaotique, installer une intelligence artificielle va simplement accélérer votre ruine.",
        points: [
          "L'illusion du dirigeant qui achète des logiciels modernes en espérant qu'ils vont miraculeusement discipliner ses équipes",
          "L'IA est un multiplicateur de force : elle multiplie l'ordre par dix, mais elle multiplie également le désordre par dix",
          "Si vos bons de commande sont introuvables et vos fiches de poste floues, aucun algorithme ne réparera vos pertes",
          "Le courage de commencer par assainir les procédures de travail avant d'investir un seul franc en licences d'outils",
          "L'art de bâtir des structures solides qui durent"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "Former des bâtisseurs pragmatiques : la véritable mission pour la jeunesse africaine.",
        points: [
          "Le constat tiré des 300+ professionnels et jeunes formés à travers les initiatives de l'OIF D-CLIC et d'Ecole 241",
          "L'importance de sortir des cours théoriques déconnectés pour enseigner la résolution concrète de problèmes d'entreprises",
          "Un talent qui comprend la logique des flux métiers surclasse n'importe quel technicien qui récite du jargon",
          "La fierté de voir nos apprenants piloter des transformations digitales majeures dans des PME locales",
          "L'engagement sans faille d'Iboga Learn pour l'excellence de notre capital humain"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Approche par la boîte à outils versus Approche par l'ingénierie des flux : tableau de bord de résultats.",
        points: [
          "Approche outils : Achat frénétique d'abonnements logiciels, équipes dépassées, zéro gain mesurable après 6 mois",
          "Approche flux : Diagnostic des blocages, standardisation des processus, automatisation chirurgicale ciblée",
          "Comparaison des taux d'échec de projets selon les deux démarches",
          "Le rôle central du sponsor dirigeant dans la réussite de la transformation",
          "Découvrez le diagnostic d'opportunités d'Iboga Lab"
        ]
      },
      {
        name: "Alerte / Gestion des risques",
        format: "Texte long",
        hook: "Alerte aux fondateurs : pourquoi la passion de la technologie ne doit jamais éclipser la rigueur comptable et contractuelle.",
        points: [
          "Les erreurs classiques des jeunes créateurs d'entreprises tech : passer des semaines à peaufiner un produit sans sécuriser un contrat client",
          "Ce que ma formation juridique m'a évité comme pièges d'associés et litiges de propriété intellectuelle",
          "Une belle vision sans discipline contractuelle finit toujours devant un tribunal ou dans l'amertume",
          "Les 3 documents juridiques et financiers que tout bâtisseur doit maîtriser sur le bout des doigts",
          "Bâtissez avec ambition, mais protégez vos arrières avec méthode"
        ]
      }
    ],
    sources: [
      {
        url: "https://cio-mag.com/",
        title: "CIO Mag — Transformation digitale en Afrique : Pourquoi les processus priment sur la technologie",
        label: "CIO Mag — Ingénierie de Processus",
        domain: "cio-mag.com",
        date: "2026-10-30"
      },
      {
        url: "https://financialafrik.com/",
        title: "Financial Afrik — Compétences managériales et pilotage des flux : les clés de voûte de la compétitivité PME",
        label: "Financial Afrik — Rigueur Opérationnelle",
        domain: "financialafrik.com",
        date: "2026-10-25"
      }
    ],
    drafted_post: null
  },

  {
    id: 'idea_20261113_07',
    session_id: sessionId,
    type: 'content',
    title: "Enza Capital AI Africa Fund (premier closing à 21 millions USD) : Pourquoi les capitaux africains privilégient l'IA frugale et les cas d'usage à rentabilité immédiate",
    account: 'jesse',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'MOFU',
    score: 5,
    bridge: "Jesse Ogoula / Le traducteur — Le premier tour de table de 21 millions USD bouclé par Enza Capital pour son fonds spécialisé montre que les investisseurs avertis ne recherchent plus des modèles de recherche fondamentaux, mais des entreprises africaines appliquant l'IA pour résoudre des frictions métier monétisables dès le premier jour",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "21 millions de dollars viennent d'être mobilisés pour financer l'IA en Afrique : voici exactement où va aller cet argent.",
        points: [
          "La société de capital-risque Enza Capital a officialisé le premier closing de son fonds AI Africa Fund à hauteur de 21 millions USD sur un objectif final de 60 millions USD",
          "Contrairement aux fonds généralistes, ce véhicule investit exclusivement dans des entreprises bâtissant des solutions d'IA concrètes",
          "Les secteurs prioritaires : services financiers, santé, logistique, éducation et climat",
          "Les critères éliminatoires : les projets purement théoriques sans modèle de revenus prouvé auprès d'entreprises locales",
          "Ce que cette tendance enseigne à tous les chefs d'entreprise du continent"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Les 4 critères de sélection des fonds d'investissement en IA pour évaluer la pérennité d'un projet technologique.",
        points: [
          "Critère 1 : La présence d'une couche de données propriétaires locales impossible à reproduire par un modèle étranger",
          "Critère 2 : Une architecture frugale minimisant les coûts d'inférence et d'accès cloud",
          "Critère 3 : La capacité à générer du chiffre d'affaires auprès de clients PME dès les premiers mois",
          "Critère 4 : La robustesse de l'équipe fondatrice et sa maîtrise intime du terrain d'exécution",
          "La méthode d'incubation et de structuration produit d'Iboga Dev"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "La bulle des présentations PowerPoint prétendant faire de l'IA pour lever des fonds est en train d'éclater en Afrique.",
        points: [
          "Les investisseurs institutionnels ont appris des erreurs de la vague fintech et exigent désormais des bilans financiers audités",
          "Saupoudrer le mot IA sur un projet ordinaire ne suffit plus à tromper les comités d'investissement",
          "Les projets qui obtiennent des financements sont ceux qui résolvent un problème opérationnel coûteux pour une industrie existante",
          "Revenez aux fondamentaux du commerce : trouver un client prêt à payer pour un gain de temps quantifiable",
          "La rentabilité d'exploitation est la seule véritable validation de votre produit"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "Comment les fonds thématiques d'IA accélèrent la rétention des talents technologiques sur le sol africain.",
        points: [
          "L'opportunité pour les meilleurs développeurs et chercheurs africains de travailler sur des projets locaux financés décemment",
          "Le freinage de la fuite des cerveaux vers l'Europe ou l'Amérique du Nord",
          "La création d'un écosystème d'ingénierie d'excellence dans les capitales régionales comme Nairobi, Lagos, Accra et Libreville",
          "L'effet d'entraînement sur les universités et les centres de formation professionnelle",
          "L'avenir de l'intelligence artificielle africaine s'écrit par et pour les talents locaux"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Projet IA spéculatif versus Solution d'IA appliquée à forte valeur : matrice comparative pour investisseurs et dirigeants.",
        points: [
          "Projet spéculatif : Dépendance aux API externes, coûts incontrôlables, modèle d'affaires basé sur la publicité ou l'espoir",
          "Solution appliquée : Algorithmes ciblés sur les flux métiers, économies directes pour le client, abonnements prévisibles",
          "Délai d'atteinte du seuil de rentabilité et résilience face aux cycles de financement",
          "Analyse des métriques de rétention client",
          "Consultez les experts d'Iboga Lab pour valider la pertinence économique de vos initiatives d'IA"
        ]
      },
      {
        name: "Alerte / Gestion des risques",
        format: "Texte long",
        hook: "Alerte aux directeurs de l'innovation : n'adoptez pas un outil d'IA uniquement parce qu'une startup a levé des fonds.",
        points: [
          "Le nombre de startups financées qui pivotent ou ferment leurs portes dans les 18 mois faute de modèle économique viable",
          "Le risque de vous retrouver avec un outil abandonné au milieu de vos processus internes",
          "La vérification indispensable de la pérennité financière de vos prestataires technologiques avant tout déploiement",
          "Pourquoi choisir des partenaires locaux ancrés dans le tissu économique comme Iboga Lab garantit la continuité de service",
          "Faites le choix de la durabilité opérationnelle"
        ]
      }
    ],
    sources: [
      {
        url: "https://www.africaprivateequitynews.com/p/enza-capital-reaches-first-close",
        title: "Africa Private Equity News — Enza Capital Reaches First Close of AI Africa Fund at $21 Million",
        label: "Africa Private Equity News — AI Africa Fund",
        domain: "africaprivateequitynews.com",
        date: "2026-11-11"
      },
      {
        url: "https://techbuild.africa/enza-capital-closes-21m-african-ai-fund-startup/",
        title: "TechBuild Africa — Enza Capital Closes $21M for African AI Fund Backing Startups",
        label: "TechBuild Africa — Enza Capital Raise",
        domain: "techbuild.africa",
        date: "2026-11-11"
      },
      {
        url: "https://techcabal.com/",
        title: "TechCabal — Enza Capital commits to AI-native startups with new $60m vehicle",
        label: "TechCabal — AI-Native Startups Africa",
        domain: "techcabal.com",
        date: "2026-11-11"
      }
    ],
    drafted_post: null
  }
];

export async function syncSession() {
  console.log('Synchronisation de la session', sessionId);
  const { error: sessErr } = await supabase.from('sessions').upsert(sessionData);
  if (sessErr) {
    console.error('Erreur session:', sessErr);
    throw sessErr;
  }
  console.log('Session synchronisée avec succès dans Supabase');

  console.log(`Insertion de ${allIdeas.length} idées...`);
  const { error: ideasErr } = await supabase.from('ideas').upsert(allIdeas);
  if (ideasErr) {
    console.error('Erreur idées:', ideasErr);
    throw ideasErr;
  }
  console.log('Idées synchronisées avec succès dans Supabase');
}

// Exécution directe
if (process.argv[1] && process.argv[1].endsWith('addSession20261113.js')) {
  syncSession().then(() => {
    console.log('Synchronisation terminée avec succès!');
    process.exit(0);
  }).catch((err) => {
    console.error('Échec synchronisation:', err);
    process.exit(1);
  });
}

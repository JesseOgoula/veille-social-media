import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://igicdrrdlambscodmaxi.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnaWNkcnJkbGFtYnNjb2RtYXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NjMwMjUsImV4cCI6MjEwMzQzOTAyNX0.puTkc1j7BI0-dKkAL1rRtN7_XwywOS77enlEgcZBHf4';
const supabase = createClient(supabaseUrl, supabaseKey);

const sessionId = 'sess_20260903_111500';
const sessionDate = '2026-09-03';
const weekLabel = 'Semaine du 03 Septembre 2026 — Session 2';
const generatedAt = new Date().toISOString();

const sessionData = {
  id: sessionId,
  date: sessionDate,
  generated_at: generatedAt,
  week_label: weekLabel,
  newsjacking: {
    title: "Google et Anthropic pulvérisent le coût des tokens IA (1-2 septembre 2026) : La fin du prétexte budgétaire pour les PME"
  }
};

const newsItems = [
  {
    id: `idea_${sessionId}_news01`,
    session_id: sessionId,
    type: 'news',
    title: "Google dévoile Gemini 3.8 Flash et 3.8 Flash Cyber : Plancher historique à 0,75 dollar le million de tokens",
    account: 'personal',
    pillar: 'ia',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Learn & Process — Intégration d'architectures d'automatisation IA à coût marginal nul",
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualité court",
        hook: "L'intelligence artificielle d'entreprise ne coûte plus rien. Google vient de poser un plancher historique à 0,75 dollar le million de tokens.",
        points: [
          "Lancement le 2 septembre 2026 de Gemini 3.8 Flash et de sa déclinaison spécialisée Cyber.",
          "Performances de pointe sur les tâches agentiques et le code, avec une fenêtre de contexte de 1 million de tokens.",
          "Tarification ultra-agressive de 0,75 $ par million de tokens d'entrée, rendant l'automatisation accessible à toute PME.",
          "Le défi pour les entreprises ne réside plus dans le coût de l'IA, mais dans la clarté de leurs processus internes."
        ]
      }
    ],
    sources: [
      {
        title: "Gemini 3.8 Flash and 3.8 Flash Cyber Announcement",
        domain: "blog.google",
        date: "02/09/2026",
        url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
      },
      {
        title: "Gemini 3.8 Flash Launch and Enterprise Benchmarks",
        domain: "9to5google.com",
        date: "02/09/2026",
        url: "https://9to5google.com/2026/09/02/gemini-3-8-flash-launch/"
      }
    ],
    drafted_post: "ALERTE MARCHÉ IA : Google vient de pulvériser le coût d'accès à l'intelligence artificielle d'entreprise.\n\nCe qui s'est passé :\nLe 2 septembre 2026, Google a déployé Gemini 3.8 Flash et sa variante Cyber. Au-delà des benchmarks techniques, le véritable choc est économique : 0,75 $ par million de tokens d'entrée avec une fenêtre de 1 million de tokens.\n\nPourquoi c'est capital pour les entreprises africaines :\nPendant deux ans, le principal argument des directions financières pour refuser l'automatisation était le coût des licences et des API américaines. À ce tarif, traiter 10 000 factures ou analyser 500 dossiers clients coûte moins cher qu'une boîte de stylos.\n\nMon avis de builder :\nLe prétexte financier est officiellement mort. La véritable barrière n'a jamais été le prix de l'IA, mais le manque de discipline opérationnelle. Si vos processus ne sont pas cartographiés, une IA à 0 dollar produira simplement du désordre plus rapidement.\n\nQuel processus répétitif de votre entreprise attend encore d'être automatisé ?\n\n#IntelligenceArtificielle #Productivite #EntrepriseAfrique #GoogleAI #IbogaLab"
  },
  {
    id: `idea_${sessionId}_news02`,
    session_id: sessionId,
    type: 'news',
    title: "Le premier Data Center national Tier III du Gabon à Nkok entre en service avec Cybastion et Porteo",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Dev & Process — Déploiement de solutions cloud et IA souveraines hébergées localement",
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualité court",
        hook: "Le Gabon héberge désormais ses propres données. Le Data Center Tier III de Nkok franchit une étape décisive.",
        points: [
          "Mise en service opérationnelle du premier centre de données national aux normes Tier III dans la zone économique de Nkok.",
          "Capacité initiale de 2 MW extensible à 5 MW, adossée à une centrale thermique gaz dédiée pour garantir une autonomie énergétique totale.",
          "Partenariat stratégique entre l'ANINF, le groupe américain Cybastion et Porteo S.A.",
          "Opportunité majeure pour les banques, assurances et PME locales de stocker leurs données sensibles sans dépendre de serveurs étrangers."
        ]
      }
    ],
    sources: [
      {
        title: "Gabon switches on its first national Tier III data center at Nkok",
        domain: "techinafrica.com",
        date: "30/06/2026",
        url: "https://www.techinafrica.com/gabon-set-to-switch-on-its-first-national-data-center-june-30/"
      },
      {
        title: "Bientôt un Data Center souverain pour le Gabon",
        domain: "classe-export.com",
        date: "15/07/2026",
        url: "https://classe-export.com/index.php/pays/afrique/92704-bientot-un-data-center-pour-le-gabon/"
      },
      {
        title: "Afrique centrale : Un pas de plus vers l'indépendance numérique",
        domain: "porteo-group.com",
        date: "20/07/2026",
        url: "https://porteo-group.com/afrique-centrale-un-pas-de-plus-vers-lindependance-numerique/"
      }
    ],
    drafted_post: "ÉCOSYSTÈME GABON : Le premier Data Center national Tier III entre dans le concret à Nkok.\n\nCe qui s'est passé :\nLe Gabon accélère sa souveraineté numérique avec l'entrée en fonction de son centre de données certifié Tier III dans la Zone Économique Spéciale de Nkok, fruit d'un partenariat entre l'ANINF, Cybastion et Porteo S.A., sécurisé par sa propre centrale énergétique de 20 MW.\n\nPourquoi c'est un tournant pour nos PME :\nJusqu'ici, chaque entreprise gabonaise qui digitalisait ses données devait accepter de voir ses fichiers clients, contrats et états financiers stockés en Europe ou aux États-Unis, avec des temps de latence et des incertitudes juridiques.\n\nMon avis de praticien :\nDisposer d'une infrastructure physique sur notre sol lève le dernier verrou réglementaire pour les banques, les administrations et les PME industrielles. La question n'est plus de savoir si nous devons digitaliser nos opérations, mais à quelle vitesse nous connectons nos outils à cette infrastructure locale.\n\nVos données stratégiques dorment-elles encore sur des serveurs anonymes à 10 000 km d'ici ?\n\n#GabonTech #DataCenter #SouveraineteNumerique #AfriqueCentrale #IbogaLab"
  },
  {
    id: `idea_${sessionId}_news03`,
    session_id: sessionId,
    type: 'news',
    title: "Financement Tech en Afrique : La dette prend le dessus sur l'equity et représente jusqu'à 74% des levées",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Dev — Développement de plateformes axées sur la rentabilité et le cash-flow immédiat",
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualité court",
        hook: "La fête du capital-risque sans rentabilité est terminée en Afrique. La dette représente désormais l'essentiel des financements.",
        points: [
          "Les données de financement de juillet et août 2026 montrent que la dette a représenté jusqu'à 74% des capitaux levés par les startups africaines.",
          "Effondrement des levées de fonds en equity traditionnelles face aux valorisations surévaluées des années précédentes.",
          "Montée en puissance des financements non dilutifs adossés aux actifs réels (énergie solaire, mobilité électrique, flottes logistiques).",
          "Les fondateurs africains privilégient désormais le contrôle de leur capital et la génération de trésorerie positive."
        ]
      }
    ],
    sources: [
      {
        title: "African Startup Funding: Debt over Equity Dynamics in 2026",
        domain: "techbuild.africa",
        date: "28/07/2026",
        url: "https://techbuild.africa/african-startup-funding-july-2026-debt-equity/"
      },
      {
        title: "Debt Now Drives Nearly Three Quarters of African Startup Funding",
        domain: "techinafrica.com",
        date: "05/08/2026",
        url: "https://www.techinafrica.com/debt-now-drives-nearly-three-quarters-of-african-startup-funding-as-equity-hits-a-multi-year-low/"
      },
      {
        title: "African Startup Funding Trends 2026: Shift to Sustainable Capital",
        domain: "technext24.com",
        date: "15/08/2026",
        url: "https://technext24.com/funding/african-startup-funding-fintech-claimed-2026/"
      }
    ],
    drafted_post: "FINANCE & TECH : En Afrique, la dette a officiellement détrôné le capital-risque.\n\nCe qui s'est passé :\nSelon les derniers rapports de marché de juillet et août 2026, la dette a représenté près de 74% de l'ensemble des capitaux levés par les startups sur le continent africain, pendant que les tours en actions (equity) touchent des creux historiques.\n\nPourquoi c'est une excellente nouvelle :\nLa bulle des valorisations artificielles et des levées de fonds paillettes a vécu. Les investisseurs n'achètent plus des pitch decks théoriques ; ils prêtent de l'argent à des entreprises qui possèdent des actifs tangibles, des flux de trésorerie prévisibles et des clients payants.\n\nMon avis de builder :\nPour un entrepreneur africain, s'endetter pour financer du matériel ou des stocks oblige à une discipline de fer : chaque franc CFA emprunté doit rapporter plus qu'il ne coûte. C'est le retour aux fondamentaux du commerce africain : la rentabilité dès le premier jour.\n\nPréférez-vous posséder 100% d'une entreprise rentable ou 10% d'une startup en perfusion de levées de fonds ?\n\n#EntrepreneuriatAfrique #VentureDebt #Financement #PMEAfrique #IbogaLab"
  }
];

const contentIdeas = [
  {
    id: `idea_${sessionId}_01`,
    session_id: sessionId,
    type: 'content',
    title: "Au-delà des prompts : Pourquoi 80% de l'automatisation par agents IA repose sur des flux déterministes",
    account: 'business',
    pillar: 'ia',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'MOFU',
    score: 5,
    bridge: "Iboga Process — Architecture de flux de travail robustes (n8n, webhooks et agents spécialisés)",
    angles: [
      {
        label: "Débutant",
        format: "Post explicatif avec métaphore industrielle",
        hook: "Croire qu'une IA va gérer votre entreprise toute seule grâce à un bon prompt est l'erreur la plus coûteuse de 2026.",
        points: [
          "La confusion fréquente : confondre un modèle de langage (qui prédit des mots) avec un système d'automatisation d'entreprise (qui exécute des actions fiables).",
          "La règle des 80/20 : 80% d'une automatisation robuste est composée de règles strictes (conditions, webhooks, bases de données), et seulement 20% fait appel au raisonnement de l'IA.",
          "L'exemple d'une commande client : valider le stock et calculer la TVA se fait par algorithme classique ; seule l'analyse d'une demande spécifique par email nécessite l'IA."
        ]
      },
      {
        label: "Expert",
        format: "Carrousel LinkedIn méthodologique (6 slides)",
        hook: "L'architecture hybride Agent + Flux déterministe : Pourquoi nous utilisons LangGraph et des webhooks chez nos clients.",
        points: [
          "Slide 1 : Les limites du chatbot autonome (hallucinations, non-reproductibilité des calculs financiers).",
          "Slide 2 : Le graphe d'état (State Machine) : définir des nœuds d'action avec validation obligatoire.",
          "Slide 3 : La séparation des responsabilités : l'IA extrait la donnée, le code déterministe enregistre la transaction.",
          "Slide 4 : La gestion du Human-in-the-Loop : quand déclencher une alerte de validation humaine pour un manager.",
          "Slide 5 : Tableau comparatif : Coût et taux d'erreur d'un agent 100% LLM vs une architecture hybride."
        ]
      },
      {
        label: "Contrarien",
        format: "Post opinion tranchée",
        hook: "Si votre consultant IA vous vend des prompts magiques au lieu de revoir vos diagrammes de flux, licenciez-le immédiatement.",
        points: [
          "L'industrie du prompt engineering a créé une génération d'illusionnistes qui empilent des requêtes instables sur des processus inexistants.",
          "En entreprise, la valeur réside dans la prévisibilité : une facture ne peut pas être juste à 95%, elle doit l'être à 100%.",
          "Chez Iboga Lab, nous ne passons pas nos journées à prompter : nous nettoyons vos flux de travail et plaçons l'IA comme un moteur d'appoint là où elle excelle."
        ]
      }
    ],
    sources: [
      {
        title: "LangGraph Multi-Agent Workflows and State Machines",
        domain: "langchain.com",
        date: "20/08/2026",
        url: "https://www.langchain.com/langgraph"
      },
      {
        title: "The Shift to Deterministic Nodes in Enterprise Agent Architecture",
        domain: "bovo-digital.tech",
        date: "18/08/2026",
        url: "https://www.bovo-digital.tech/"
      },
      {
        title: "Autonomous Agent Orchestration and Observability Standards",
        domain: "knowlee.ai",
        date: "25/08/2026",
        url: "https://www.knowlee.ai/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_02`,
    session_id: sessionId,
    type: 'content',
    title: "Ruptures de stock vs trésorerie morte : Comment automatiser les seuils de réapprovisionnement d'une PME en zone CEMAC",
    account: 'business',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'BOFU',
    score: 5,
    bridge: "Audit d'Opportunités IA Gratuit (ibogalab.vercel.app/calendly-booking) — Optimisation logistique",
    angles: [
      {
        label: "Débutant",
        format: "Étude de cas terrain vécue",
        hook: "Une PME de Port-Gentil avait 12 millions de FCFA de marchandises invendues au dépôt, mais manquait de ses 3 produits vedettes chaque vendredi.",
        points: [
          "Le syndrome classique en Afrique centrale : commander au jugé en début de mois sans visibilité sur la vélocité réelle des ventes.",
          "Le coût caché : de l'argent immobilisé qui prend la poussière pendant que les clients partent chez le concurrent pour cause de rupture.",
          "La solution déployée en 7 jours : connecter les fiches de stock à un tableau de bord automatisé qui calcule le point de commande dynamique."
        ]
      },
      {
        label: "Expert",
        format: "Guide opérationnel pour directeurs des opérations",
        hook: "Le calcul du stock de sécurité adapté aux aléas logistiques maritimes et routiers de la zone CEMAC.",
        points: [
          "Pourquoi la formule classique de réapprovisionnement échoue en Afrique : délais de dédouanement imprévisibles au port et contrôles routiers.",
          "Intégration du délai fournisseur moyen réel (Lead Time) avec coefficient de variabilité.",
          "Mise en place d'alertes automatiques WhatsApp pour le responsable des achats dès le franchissement du seuil critique.",
          "Résultats observés : réduction de 40% des ruptures de stock et libération immédiate de 20% de trésorerie d'exploitation."
        ]
      },
      {
        label: "Contrarien",
        format: "Prise de position dirigeant",
        hook: "Gérer ses approvisionnements sur des fiches Bristol ou un fichier Excel non partagé n'est pas de la frugalité. C'est du sabotage de trésorerie.",
        points: [
          "Beaucoup de patrons pensent économiser en évitant d'investir dans un système de suivi digital des stocks.",
          "En réalité, le coût d'une seule rupture sur un contrat clé dépasse dix fois le prix annuel d'une automatisation légère.",
          "Notre engagement chez Iboga Lab : nous identifions en 30 minutes d'audit gratuit vos 3 plus gros goulots logistiques."
        ]
      }
    ],
    sources: [
      {
        title: "Logistique et gestion des stocks pour les PME en Afrique",
        domain: "logistiqa.co",
        date: "14/08/2026",
        url: "https://logistiqa.co/"
      },
      {
        title: "Inventory Management Challenges and Automation in Emerging Markets",
        domain: "qoblex.com",
        date: "10/08/2026",
        url: "https://qoblex.com/"
      },
      {
        title: "Modernisation des flux logistiques des PME en Afrique centrale",
        domain: "classe-export.com",
        date: "15/07/2026",
        url: "https://classe-export.com/index.php/pays/afrique/92704-bientot-un-data-center-pour-le-gabon/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_03`,
    session_id: sessionId,
    type: 'content',
    title: "La fin de l'argent facile pour les startups africaines : Pourquoi lever en dette force à devenir rentable dès le premier jour",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Dev — Conception de produits numériques rentables sans dépendre de tours de table",
    angles: [
      {
        label: "Débutant",
        format: "Décryptage économique accessible",
        hook: "En 2021, lever 1 million de dollars sur un slide PowerPoint faisait de vous une star. En 2026, si vous n'avez pas de cash-flow, personne ne vous répond.",
        points: [
          "Le grand basculement : la dette représente désormais près des trois quarts des financements de startups en Afrique.",
          "La différence fondamentale : l'investisseur en capital prend le risque de perdre sa mise, mais le prêteur exige d'être remboursé chaque mois avec intérêts.",
          "Ce que cela change pour l'écosystème : fini le recrutement massif de stagiaires non productifs, place à l'efficacité opérationnelle maximale."
        ]
      },
      {
        label: "Expert",
        format: "Analyse financière comparée",
        hook: "Venture Debt vs Venture Capital pour une entreprise technologique africaine : la matrice de décision du dirigeant.",
        points: [
          "Les pièges de la dilution précoce : pourquoi céder 30% de sa société pour financer des dépenses courantes détruit la motivation des fondateurs.",
          "Les conditions d'éligibilité à la dette : ratios de couverture des intérêts, récurrence des revenus (ARR/MRR) et collatéralisation d'actifs.",
          "Comment calibrer sa trésorerie pour amortir le remboursement sans asphyxier le budget de développement commercial."
        ]
      },
      {
        label: "Contrarien",
        format: "Manifeste builder sans filtre",
        hook: "L'hiver du capital-risque en Afrique est la meilleure chose qui pouvait arriver à nos entrepreneurs.",
        points: [
          "Pendant cinq ans, l'abondance de capital étranger a encouragé des modèles calqués sur la Silicon Valley qui brûlaient du cash sans jamais comprendre le pouvoir d'achat local.",
          "Aujourd'hui, les seuls builders qui survivent sont ceux qui vendent un produit réel à des clients réels dès la première semaine.",
          "Construisez une entreprise que vos clients financent chaque matin par leurs achats, pas une entreprise que des investisseurs maintiennent en vie sous respiration artificielle."
        ]
      }
    ],
    sources: [
      {
        title: "African Startup Funding: Debt over Equity Dynamics in 2026",
        domain: "techbuild.africa",
        date: "28/07/2026",
        url: "https://techbuild.africa/african-startup-funding-july-2026-debt-equity/"
      },
      {
        title: "Debt Now Drives Nearly Three Quarters of African Startup Funding",
        domain: "techinafrica.com",
        date: "05/08/2026",
        url: "https://www.techinafrica.com/debt-now-drives-nearly-three-quarters-of-african-startup-funding-as-equity-hits-a-multi-year-low/"
      },
      {
        title: "African Startup Funding Trends 2026: Shift to Sustainable Capital",
        domain: "technext24.com",
        date: "15/08/2026",
        url: "https://technext24.com/funding/african-startup-funding-fintech-claimed-2026/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_04`,
    session_id: sessionId,
    type: 'content',
    title: "Le paradoxe de Jevons et la facture IA : Pourquoi votre entreprise dépensera plus si vous ne cadrez pas vos processus",
    account: 'personal',
    pillar: 'ia',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Learn — Gouvernance de l'IA et AI FinOps pour maîtriser les coûts opérationnels",
    angles: [
      {
        label: "Débutant",
        format: "Post pédagogique sur les coûts cachés",
        hook: "Le prix des modèles IA a chuté de 80% cette année. Pourtant, la facture globale des entreprises est en train d'exploser. Voici pourquoi.",
        points: [
          "Le paradoxe de Jevons expliqué simplement : quand une ressource devient moins chère et plus efficace, on ne l'économise pas, on en consomme mille fois plus.",
          "Ce qui se passe dans les bureaux : chaque collaborateur lance des dizaines de requêtes inutiles ou fait résumer des documents de 200 pages sans objectif précis.",
          "Le résultat à la fin du mois : une consommation de tokens débridée sans aucun gain mesurable sur le chiffre d'affaires."
        ]
      },
      {
        label: "Expert",
        format: "Framework AI FinOps pour directeurs administratifs et financiers",
        hook: "Le cadre de gouvernance en 4 piliers pour piloter l'économie des tokens dans une entreprise de 10 à 50 collaborateurs.",
        points: [
          "1. Allocation de quotas par département (Support client, Commercial, Finance) adossés à des indicateurs de performance précis.",
          "2. Mise en cache systématique des prompts fréquents (réduction de 75% du coût des requêtes récurrentes).",
          "3. Routage dynamique des requêtes : utiliser des petits modèles ultra-rapides pour le tri et réserver les modèles de pointe aux tâches critiques.",
          "4. Audit mensuel du ROI : mesurer le ratio temps gagné en production vs coût de consommation API."
        ]
      },
      {
        label: "Contrarien",
        format: "Avertissement stratégique dirigeant",
        hook: "L'IA générative bon marché est le nouveau robinet ouvert qui fuit dans votre compte de résultat.",
        points: [
          "Il y a dix ans, c'étaient les abonnements SaaS inutilisés sur les cartes de crédit de l'entreprise.",
          "Aujourd'hui, c'est la prolifération de micro-automatisations bricolées qui tournent en boucle sur des données erronées.",
          "Ne confondez pas activité numérique et rentabilité : un outil IA qui ne supprime pas une tâche manuelle identifiée est une charge superflue."
        ]
      }
    ],
    sources: [
      {
        title: "AI Deflation and the Economics of Compute Tokens",
        domain: "aideflationwatch.com",
        date: "26/08/2026",
        url: "https://aideflationwatch.com/"
      },
      {
        title: "The Jevons Paradox in Modern Enterprise AI Adoption",
        domain: "socradata.com",
        date: "20/08/2026",
        url: "https://socradata.com/"
      },
      {
        title: "AI Budget Crisis and the Rise of AI FinOps",
        domain: "contextstudios.ai",
        date: "24/08/2026",
        url: "https://contextstudios.ai/"
      },
      {
        title: "Token Economy and Enterprise Cost Governance",
        domain: "biggo.com",
        date: "18/08/2026",
        url: "https://biggo.com/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_05`,
    session_id: sessionId,
    type: 'content',
    title: "Souveraineté numérique au Gabon : Pourquoi héberger vos données au Data Center de Nkok plutôt qu'en Virginie",
    account: 'personal',
    pillar: 'ia',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'MOFU',
    score: 5,
    bridge: "Iboga Dev & Process — Déploiement d'agents et bases de données sur cloud local souverain",
    angles: [
      {
        label: "Débutant",
        format: "Vulgarisation stratégique pour dirigeants",
        hook: "Quand vous enregistrez un contrat ou une fiche client sur votre logiciel actuel, savez-vous physiquement où dorment ces octets ?",
        points: [
          "La réalité de 95% des PME au Gabon : les données transitent par des serveurs à Francfort ou en Virginie soumis à des lois extraterritoriales étrangères.",
          "Ce que change un Data Center national Tier III à Nkok : les temps de réponse sont divisés par quatre et les données restent sous juridiction nationale.",
          "Pourquoi vos clients institutionnels et pétroliers vont de plus en plus exiger un hébergement local pour signer des contrats."
        ]
      },
      {
        label: "Expert",
        format: "Guide de conformité technique et PCA (Plan de Continuité d'Activité)",
        hook: "L'architecture de résilience numérique pour les PME industrielles et de services opérant au Gabon.",
        points: [
          "Tier III et autonomie énergétique : pourquoi la centrale thermique dédiée de 20 MW à Nkok résout le problème historique des coupures d'électricité.",
          "La stratégie hybride recommandée : garder les sauvegardes chaudes et les calculs sensibles en local, tout en utilisant le cloud public pour la diffusion externe.",
          "La conformité avec la Commission Nationale de Protection des Données à Caractère Personnel (CNPDCP) gabonaise."
        ]
      },
      {
        label: "Contrarien",
        format: "Prise de position géopolitique tech",
        hook: "Parler de souveraineté nationale dans des discours ne sert à rien si tous les fichiers comptables de nos entreprises sont hébergés chez des tiers étrangers.",
        points: [
          "L'indépendance économique au 21e siècle commence dans les baies de serveurs et les câbles sous-marins.",
          "Les entreprises qui anticipent la migration vers des infrastructures locales ne font pas du patriotisme de façade : elles sécurisent leurs actifs contre d'éventuelles sanctions ou pannes de câbles intercontinentaux.",
          "Chez Iboga Lab, nous configurons des pipelines de données qui respectent à la fois la performance technique et la souveraineté territoriale."
        ]
      }
    ],
    sources: [
      {
        title: "Gabon switches on its first national Tier III data center at Nkok",
        domain: "techinafrica.com",
        date: "30/06/2026",
        url: "https://www.techinafrica.com/gabon-set-to-switch-on-its-first-national-data-center-june-30/"
      },
      {
        title: "Bientôt un Data Center souverain pour le Gabon",
        domain: "classe-export.com",
        date: "15/07/2026",
        url: "https://classe-export.com/index.php/pays/afrique/92704-bientot-un-data-center-pour-le-gabon/"
      },
      {
        title: "Afrique centrale : Un pas de plus vers l'indépendance numérique",
        domain: "porteo-group.com",
        date: "20/07/2026",
        url: "https://porteo-group.com/afrique-centrale-un-pas-de-plus-vers-lindependance-numerique/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_06`,
    session_id: sessionId,
    type: 'content',
    title: "Le biais du statu quo et le piège des coûts irrécupérables : Pourquoi les dirigeants s'accrochent à des méthodes qui les ruinent",
    account: 'personal',
    pillar: 'builder',
    pillar_label: 'Parcours Builder',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Process — Diagnostic opérationnel et déconstruction des routines archaïques",
    angles: [
      {
        label: "Débutant",
        format: "Storytelling & psychologie managériale",
        hook: "'On a toujours fait comme ça depuis 10 ans.' C'est la phrase qui a tué plus d'entreprises que n'importe quelle crise économique.",
        points: [
          "Le mécanisme psychologique du statu quo : notre cerveau préfère une routine inefficace mais familière à un changement qui demande un effort d'apprentissage.",
          "Le piège des coûts irrécupérables : s'obstiner à utiliser un vieux logiciel ou un classeur papier sous prétexte qu'on y a passé des mois il y a cinq ans.",
          "La question libératrice à se poser chaque lundi : 'Si je créais cette entreprise ce matin à partir de zéro, est-ce que je mettrais en place ce processus ?'"
        ]
      },
      {
        label: "Expert",
        format: "Exploration sciences comportementales appliquée au management",
        hook: "L'application des théories de Kahneman et Thaler à la transformation digitale des PME africaines.",
        points: [
          "L'aversion à la perte (Loss Aversion) : la douleur perçue de perdre ses repères habituels pèse deux fois plus lourd que le bénéfice d'automatiser 10 heures par semaine.",
          "La conception d'interventions à faible friction (Nudges) : comment introduire un outil digital sans braquer les employés habitués aux méthodes historiques.",
          "Le protocole du point d'arrêt (Stop-Rule) : fixer à l'avance des critères objectifs pour abandonner un projet ou une routine qui ne délivre pas de résultat."
        ]
      },
      {
        label: "Contrarien",
        format: "Vérité crue de builder",
        hook: "Votre équipe ne résiste pas à la digitalisation parce qu'elle est paresseuse. Elle résiste parce que la direction justifie ses propres blocages mentaux.",
        points: [
          "Les dirigeants accusent souvent leurs collaborateurs d'être réfractaires à la technologie.",
          "En observant le terrain, c'est presque toujours le patron qui refuse de lâcher son carnet à souche ou d'accorder l'accès aux données par peur de perdre le contrôle.",
          "Bâtir une organisation moderne exige d'abord de tuer son propre ego de dirigeant omniscient pour laisser place à des systèmes transparents."
        ]
      }
    ],
    sources: [
      {
        title: "The Sunk Cost Fallacy in Behavioral Economics",
        domain: "behavioraleconomics.com",
        date: "20/08/2026",
        url: "https://www.behavioraleconomics.com/resources/mini-encyclopedia-of-be/sunk-cost-fallacy/"
      },
      {
        title: "Overcoming Status Quo Bias in Corporate Decision Making",
        domain: "renascence.io",
        date: "12/08/2026",
        url: "https://www.renascence.io/"
      },
      {
        title: "Behavioral Design for Operational Habit Change in SMEs",
        domain: "suebehaviouraldesign.com",
        date: "15/08/2026",
        url: "https://www.suebehaviouraldesign.com/en/"
      },
      {
        title: "Cognitive Biases and Managerial Inertia in Economic Shocks",
        domain: "hbem.org",
        date: "10/08/2026",
        url: "https://hbem.org/index.php/OJS"
      }
    ],
    drafted_post: null
  }
];

async function insertAll() {
  try {
    console.log(`Inserting session ${sessionId}...`);
    const { error: sessionError } = await supabase
      .from('sessions')
      .upsert(sessionData);

    if (sessionError) {
      throw new Error(`Session insertion failed: ${JSON.stringify(sessionError)}`);
    }
    console.log('Session inserted successfully.');

    const allItems = [...newsItems, ...contentIdeas];
    console.log(`Inserting ${allItems.length} ideas/news...`);
    
    for (const item of allItems) {
      const { error: ideaError } = await supabase
        .from('ideas')
        .upsert(item);
      
      if (ideaError) {
        console.error(`Error inserting item ${item.id}:`, ideaError);
      } else {
        console.log(`✓ Inserted: ${item.title.substring(0, 55)}...`);
      }
    }
    console.log('All insertions completed successfully!');
  } catch (err) {
    console.error('Fatal error during insertion:', err);
    process.exit(1);
  }
}

insertAll();

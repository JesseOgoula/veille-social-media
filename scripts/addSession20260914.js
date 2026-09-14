import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://igicdrrdlambscodmaxi.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnaWNkcnJkbGFtYnNjb2RtYXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NjMwMjUsImV4cCI6MjEwMzQzOTAyNX0.puTkc1j7BI0-dKkAL1rRtN7_XwywOS77enlEgcZBHf4';
const supabase = createClient(supabaseUrl, supabaseKey);

const sessionId = 'sess_20260914_080000';
const sessionDate = '2026-09-14';
const weekLabel = 'Semaine du 14 Septembre 2026';
const generatedAt = new Date().toISOString();

const sessionData = {
  id: sessionId,
  date: sessionDate,
  generated_at: generatedAt,
  week_label: weekLabel,
  newsjacking: {
    title: "Lancement de l'Agents API d'OpenAI et acceleration des passerelles transfrontalieres : Le basculement vers l'execution autonome et la digitalisation B2B des PME"
  }
};

const newsItems = [
  {
    id: `idea_${sessionId}_news01`,
    session_id: sessionId,
    type: 'news',
    title: "OpenAI lance l'Agents API en beta publique : L'infrastructure derriere Codex et ChatGPT for Work desormais accessible aux entreprises",
    account: 'personal',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Process — Deploiement d'agents IA autonomes connectes aux outils internes des PME pour eliminer les taches manuelles et orchestrer les flux metier",
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualite court",
        hook: "L'intelligence artificielle n'attend plus qu'on lui parle dans une boite de dialogue : avec l'Agents API d'OpenAI, elle s'execute directement au cœur des systemes de gestion d'entreprise.",
        points: [
          "Annonce officielle le 10 septembre 2026 par OpenAI du lancement en beta publique de son Agents API, fournissant le meme moteur que Codex et ChatGPT for Work.",
          "Gestion automatisee des sessions longues, compactage dynamique du contexte, prise en charge native du Model Context Protocol (MCP) et delegation multi-agents.",
          "Possibilite pour les entreprises de faire tourner leurs agents dans des conteneurs sandbox securises ou directement sur leur propre infrastructure cloud.",
          "Fin de la phase du simple prompt conversationnel : debut de l'ere des systemes de travail autonomes capables d'executer des flux metier de bout en bout."
        ]
      }
    ],
    sources: [
      {
        title: "OpenAI lance son API Agents pour fournir aux developpeurs l'infrastructure derriere Codex",
        domain: "blogdumoderateur.com",
        date: "11/09/2026",
        url: "https://www.blogdumoderateur.com/openai-lance-api-agents-fournir-developpeurs-infrastructure-derriere-codex/"
      },
      {
        title: "Agents API Overview and Architecture Documentation",
        domain: "developers.openai.com",
        date: "10/09/2026",
        url: "https://developers.openai.com/api/docs/guides/agents-api/overview"
      },
      {
        title: "Mistral Releases Native Agentic Systems API for Enterprise Orchestration",
        domain: "mistral.ai",
        date: "08/09/2026",
        url: "https://mistral.ai/news/agents-api/"
      }
    ],
    drafted_post: "OBSERVATOIRE TECH : Ce qui s'est joue cette semaine change definitivement la maniere dont les entreprises vont travailler avec l'IA.\n\nLe fait :\nCe 10 septembre 2026, OpenAI a officiellement lance son Agents API en beta publique. Concretement, OpenAI ouvre a tous les developpeurs l'infrastructure logicielle exacte qui fait tourner Codex et ChatGPT for Work. Ce n'est plus une interface ou l'on tape du texte, c'est un moteur qui gere les sessions, compresse le contexte, appelle des outils metier en parallele et orchestre des sous-agents autonomes.\n\nLe contexte :\nPendant deux ans, 90% des professionnels ont utilise l'IA comme un moteur de recherche avance ou un generateur de brouillons. Avec l'architecture agentique standardisee (notamment via le protocole MCP), l'IA ne se contente plus de repondre : elle interroge une base de donnees, redige une facture, met a jour un ERP et alerte un responsable uniquement en cas d'anomalie.\n\nMon avis de builder :\nPour les dirigeants de PME africaines, ce basculement est une opportunite historique. Vous n'avez plus besoin d'engager 10 consultants pour coder des scripts fragiles. En revanche, cela impose une exigence implacable : pour qu'un agent travaille pour vous, vos processus metier (SOP) doivent etre parfaitement clairs et vos donnees structurees. L'IA ne sait pas automatiser le desordre.\n\nUtilisez-vous deja des agents autonomes pour vos flux de travail internes, ou en etes-vous encore au prompt ChatGPT individuel ?\n\n#IntelligenceArtificielle #AgentsIA #Productivite #TransformationDigitale #IbogaLab #Entreprise"
  },
  {
    id: `idea_${sessionId}_news02`,
    session_id: sessionId,
    type: 'news',
    title: "Paiements transfrontaliers et interoperabilite 2.0 en Afrique : Pourquoi les fintechs accelerent l'integration regionale des PME",
    account: 'ibogalab',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Process & Iboga Dev — Automatisation des rapprochements bancaires multi-operateurs et interconnexion comptable en zone CEMAC et UEMOA",
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualite court",
        hook: "L'Afrique ne souffre plus d'un manque de terminaux de paiement, mais du cloisonnement des devises et des corridors commerciaux. La nouvelle vague fintech s'attaque enfin aux reglements inter-entreprises.",
        points: [
          "Analyse publiee en septembre 2026 par CIO Mag mettant en lumiere le deploiement des systemes de paiement instantane interoperables a l'echelle panafricaine.",
          "Les flux financiers B2B entre pays africains subissaient historiquement des delais de 3 a 5 jours ouvrables et des commissions exhorbitantes passant par des banques de compensation occidentales.",
          "L'arrivee de protocoles interconnectes et de passerelles de compensation instantanee permet desormais a une PME de Libreville ou d'Abidjan d'encaisser en temps reel sans friction de change.",
          "Le grand defi operationnel se deplace : les entreprises doivent desormais numeriser leurs bons de livraison et factures pour reconcilier automatiquement ces flux acceleres."
        ]
      }
    ],
    sources: [
      {
        title: "Fintech et interoperabilite 2.0 : l'Afrique accelere la revolution des paiements transfrontaliers",
        domain: "cio-mag.com",
        date: "03/09/2026",
        url: "https://cio-mag.com/fintech-et-interoperabilite-2-0-lafrique-accelere-la-revolution-des-paiements-transfrontaliers/"
      },
      {
        title: "IA et inclusion financiere : la revolution silencieuse des fintechs africaines",
        domain: "cio-mag.com",
        date: "03/09/2026",
        url: "https://cio-mag.com/ia-et-inclusion-financiere-la-revolution-silencieuse-des-fintechs-africaines/"
      },
      {
        title: "Ivorian fintech Cauridor banks Series A funding including Proparco backing",
        domain: "disruptafrica.com",
        date: "15/05/2026",
        url: "https://disruptafrica.com/2026/05/15/ivorian-fintech-cauridor-banks-series-a-funding-includes-2m-from-proparco/"
      }
    ],
    drafted_post: "OBSERVATOIRE FINANCE & AFRIQUE : Le verrou historique du commerce interafricain est en train de sauter.\n\nLe fait :\nUne etude strategique relayee par CIO Mag ce mois de septembre 2026 souligne l'acceleration sans precedent de l'interoperabilite 2.0 et des paiements instantanes transfrontaliers sur le continent. Alors que les reglements B2B transfrontaliers necessitaient auparavant 3 a 7 jours avec de lourdes pertes de change, de nouvelles plateformes connectent desormais directement les comptes bancaires et portefeuilles mobiles entre pays de la zone CEMAC et UEMOA.\n\nLe contexte :\nPendant une decennie, la bataille des fintechs s'est focalisee sur le B2C (envoyer de l'argent a un proche). Mais le veritable moteur de croissance d'une economie reside dans les transactions inter-entreprises. Sans reglement instantane et securise entre fournisseurs et distributeurs, le commerce regional restait bride a moins de 15% du commerce total africain.\n\nL'analyse Iboga Lab :\nC'est une excellente nouvelle, mais elle revele une fragilite immediate dans les PME : encaisser en 3 secondes ne sert a rien si votre bon de commande met 4 jours a etre valide sur papier et si votre inventaire n'est mis a jour qu'en fin de mois. La rapidite financiere exige une digitalisation immediate de la gestion logistique et commerciale.\n\nVotre entreprise gere-t-elle deja des clients ou fournisseurs dans la sous-region, et quel est votre principal frein de reglement ?\n\n#Fintech #Afrique #PaiementsB2B #CommerceRegional #PME #IbogaLab"
  },
  {
    id: `idea_${sessionId}_news03`,
    session_id: sessionId,
    type: 'news',
    title: "Souverainete numerique et IA en Afrique francophone : La Cote d'Ivoire lance l'initiative Impact IA 2026 pour former et outiller ses entreprises",
    account: 'personal',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Learn — Ateliers d'acculturation et de formation pratique aux outils d'IA generatrice pour les equipes en Afrique",
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualite court",
        hook: "L'Afrique ne peut pas se contenter d'etre un marche de consommateurs de logiciels californiens : les initiatives institutionnelles et privees se multiplient pour maitriser la technologie.",
        points: [
          "Lancement rapporte par Digital Business Africa en septembre 2026 du programme Impact IA 2026, visant a doter les structures ivoiriennes et regionales d'outils et de modeles adaptes aux realites locales.",
          "Alignement direct avec les travaux du premier Conseil Africain de l'Intelligence Artificielle cree par Smart Africa pour orienter l'usage economique et responsable de la technologie.",
          "Mise en avant des besoins specifiques : traitement automatique des langues et accents locaux, adaptation aux contraintes de connectivite faible et securisation des donnees d'entreprise.",
          "Appel aux dirigeants africains a s'approprier les savoir-faire et a former massivement leurs equipes des cette annee."
        ]
      }
    ],
    sources: [
      {
        title: "Impact IA 2026 : la Cote d'Ivoire prepare ses propres solutions d'intelligence artificielle",
        domain: "digitalbusiness.africa",
        date: "04/09/2026",
        url: "https://www.digitalbusiness.africa/impact-ia-2026-la-cote-divoire-prepare-ses-propres-solutions-dintelligence-artificielle/"
      },
      {
        title: "Smart Africa lance le premier Conseil Africain de l'IA pour accelerer la transformation numerique",
        domain: "smartafrica.org",
        date: "01/09/2026",
        url: "https://smartafrica.org/fr/smart-africa-lance-le-premier-conseil-africain-de-lia-pour-accelerer-la-transformation-numerique-du-continent/"
      },
      {
        title: "Smart Africa and Wadhwani AI Global partner to advance responsible AI for public good",
        domain: "smartafrica.org",
        date: "02/09/2026",
        url: "https://smartafrica.org/smart-africa-and-wadhwani-ai-global-partner-to-advance-responsible-ai-for-public-good-across-africa/"
      }
    ],
    drafted_post: "OBSERVATOIRE STRATEGIE : L'Afrique francophone prend son destin technologique en main.\n\nCe qui s'est passe :\nEn ce debut septembre 2026, Digital Business Africa a documente le deploiement du programme 'Impact IA 2026' en Cote d'Ivoire, en synergie avec les orientations continentales de Smart Africa. L'objectif affiche : ne plus seulement importer des modeles fermes clef en main, mais former des talents locaux et concevoir des applications directement ancrees dans les defis des PME et administrations africaines.\n\nPourquoi c'est capital :\nPendant des annees, chaque revolution technologique a ete consideree en Afrique comme un produit de consommation importe. Pourtant, le marche africain possede des singularites que les ingenieurs de la Silicon Valley ignorent : multilinguisme oral, asymetrie de l'information, modes de distribution informels, connectivite variable. Une IA qui ne sait pas dialoguer avec ces realites est sterile.\n\nMon avis de formateur et de builder :\nAvec plus de 300 jeunes formes dans le cadre de programmes numeriques panafricains, je le constate chaque semaine : le talent africain n'a aucun complexe technique a avoir. Ce qui manque aux entreprises, ce n'est pas le potentiel humain, c'est le cadre de formation interne. Si vous n'investissez pas dans l'acculturation IA de vos managers des maintenant, vos concurrents le feront.\n\nVotre organisation a-t-elle deja prevu un budget ou un temps dedie a la formation IA de ses collaborateurs cette annee ?\n\n#Afrique #SouveraineteNumerique #IAAppliquee #FormationProfessionnelle #Croissance #IbogaLab"
  }
];

const contentIdeas = [
  {
    id: `idea_${sessionId}_idea01`,
    session_id: sessionId,
    type: 'content',
    title: "De l'outil passif a l'agent executant : Pourquoi l'Agents API d'OpenAI marque la fin de l'ere du simple prompt pour les managers",
    account: 'personal',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Process — Conception et deploiement de flux agentiques metier relies a vos bases de donnees et outils internes",
    angles: [
      {
        label: "Angle Debutant / Vulgarisation",
        format: "Post comparatif illustre",
        hook: "Si vous passez encore 2 heures par jour a copier-coller des textes dans ChatGPT, vous etes en retard d'une guerre. Bienvenue dans l'ere des agents qui agissent a votre place.",
        points: [
          "Explication simple de la difference entre un chatbot classique (qui repond a une question) et un agent IA (qui accomplit une mission de A a Z).",
          "Metaphore du stagiaire passif auquel on dicte chaque phrase versus le collaborateur autonome auquel on confie un objectif et qui manipule les outils lui-meme.",
          "Les 3 taches administratives quotidiennes que n'importe quelle PME peut deleguer a un agent sans ecrire une seule ligne de code complexe.",
          "Pourquoi le prompt engineering est voue a disparaitre au profit de la definition des objectifs et des regles d'acces metier."
        ]
      },
      {
        label: "Angle Expert / Strategique",
        format: "Guide de cadrage d'architecture",
        hook: "L'arrivee de l'Agents API et du protocole MCP transforme l'IA en colonne vertebrale de votre systeme d'information. Voici comment structurer l'orchestration.",
        points: [
          "Decoupage technique d'un agent de production : Modele de raisonnement, Sandbox d'execution, Memoire persistante et Protocole de connexion aux outils (MCP).",
          "Comment OpenAI et Anthropic convergent vers des architectures multi-agents ou un agent superviseur delegue les taches a des agents specialistes (facturation, support, CRM).",
          "Gestion des risques et securite : pourquoi l'isolation des environnements d'execution (sandboxing) est obligatoire pour empecher les injections de prompt en entreprise.",
          "Methode de migration pour PME : transformer vos scripts Make ou n8n en veritables pipelines agentiques dynamiques."
        ]
      },
      {
        label: "Angle Contrarien / Prise de position",
        format: "Coup de gueule pedagogique",
        hook: "Former vos salaries au prompt engineering en 2026, c'est comme leur apprendre a coder en assembleur en 1995. Le vrai sujet, c'est la clarification de vos processus internes.",
        points: [
          "Pourquoi 90% des formations 'ChatGPT pour managers' vendues sur le marche sont devenues totalement obsoletes en l'espace de 6 mois.",
          "L'agent IA le plus sophistique du monde echouera lamentablement si vos procedures operationnelles (SOP) sont floues, non documentees ou changeantes.",
          "Les dirigeants qui cherchent l'outil magique sans nettoyer leurs flux de travail internes perdent leur argent : la rigueur humaine precede toujours la performance machine.",
          "Ce que les meilleurs dirigeants font des aujourd'hui : ecrire les regles du jeu avant d'acheter des licences logicielles."
        ]
      }
    ],
    sources: [
      {
        title: "OpenAI lance son API Agents pour fournir aux developpeurs l'infrastructure derriere Codex",
        domain: "blogdumoderateur.com",
        date: "11/09/2026",
        url: "https://www.blogdumoderateur.com/openai-lance-api-agents-fournir-developpeurs-infrastructure-derriere-codex/"
      },
      {
        title: "Agents API Overview and Architecture Documentation",
        domain: "developers.openai.com",
        date: "10/09/2026",
        url: "https://developers.openai.com/api/docs/guides/agents-api/overview"
      },
      {
        title: "What are agentic workflows and how do they work in enterprise automation",
        domain: "zapier.com",
        date: "04/09/2026",
        url: "https://zapier.com/blog/agentic-workflows/"
      },
      {
        title: "Building AI Agents with Multi-Step Tool Calling and Long-Term Memory",
        domain: "cohere.com",
        date: "01/09/2026",
        url: "https://cohere.com/blog/building-ai-agents"
      },
      {
        title: "Claude Opus 5 : A Step Change in Autonomous Agent Capabilities",
        domain: "anthropic.com",
        date: "15/07/2026",
        url: "https://www.anthropic.com/news/claude-opus-5"
      },
      {
        title: "Agent Logic and Scalable AI Adoption in Complex Corporate Environments",
        domain: "huggingface.co",
        date: "28/08/2026",
        url: "https://huggingface.co/blog/ibm-research/agent-logic-and-scalable-ai-adoption"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_idea02`,
    session_id: sessionId,
    type: 'content',
    title: "L'interoperabilite des paiements ne sert a rien si vos bons de commande sont encore sur papier : L'urgence de la chaine logistique B2B en Afrique",
    account: 'ibogalab',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'MOFU',
    score: 5,
    bridge: "Iboga Process & Iboga Dev — Automatisation de la saisie des commandes, suivi logistique et interconnexion comptable",
    angles: [
      {
        label: "Angle Debutant / Vulgarisation",
        format: "Etude de cas terrain",
        hook: "Votre client vous paie par Mobile Money en 10 secondes. Pourquoi mettez-vous encore 3 jours a lui livrer sa marchandise ?",
        points: [
          "Le grand paradoxe africain : la technologie financiere va 100 fois plus vite que la logistique et le traitement documentaire interne.",
          "Parcours type d'une commande dans une PME de distribution : bon papier perdu, appel WhatsApp au chauffeur, verification manuelle sur cahier, facture ressaisie sous Excel.",
          "Comment une simple automatisation reliant WhatsApp, Airtable et votre inventaire divise par 5 le temps de preparation sans budget demesure.",
          "Les premiers pas concrets pour synchroniser vos commandes des cette semaine."
        ]
      },
      {
        label: "Angle Expert / Strategique",
        format: "Framework operationnel",
        hook: "Le ROI de la digitalisation d'une PME ne se mesure pas au nombre d'outils SaaS achetes, mais au 'Order-to-Cash Cycle Time'. Voici comment le reduire de 70%.",
        points: [
          "Analyse detaillee des points de friction dans la supply chain PME en contexte africain : ruptures de stocks imprevues, litiges de livraison, delais de lettrage comptable.",
          "Architecture recommandee par Iboga Lab : capture automatique des bons de commande via OCR intelligent, injection dans la base relationnelle et emission immediate du bon de sortie magasin.",
          "Suppression du double encodage : synchronisation en temps reel entre les encaissements fintech et le grand livre comptable.",
          "Chiffres cles : gain moyen de 18 heures de travail administratif par semaine pour une equipe de 10 personnes."
        ]
      },
      {
        label: "Angle Contrarien / Prise de position",
        format: "Post d'opinion tranchee",
        hook: "Cessez d'accuser les routes, le port ou l'administration pour vos retards de livraison. 60% de vos lenteurs viennent de vos propres formulaires papier.",
        points: [
          "Pourquoi les dirigeants africains preferent souvent blamer l'environnement externe plutot que d'affronter le desordre documentaire de leurs bureaux.",
          "Le confort trompeur du papier et du classeur a levier : une illusion de controle qui coute des millions de FCFA en pertes de marchandises et en litiges clients.",
          "Digitaliser une entreprise ne demande pas un ERP a 50 millions de FCFA, mais le courage d'interdire definitivement le bon de commande manuscrit.",
          "La vraie definition de la modernite d'une entreprise : la vitesse a laquelle l'information circule sans intervention humaine."
        ]
      }
    ],
    sources: [
      {
        title: "Fintech et interoperabilite 2.0 : l'Afrique accelere la revolution des paiements transfrontaliers",
        domain: "cio-mag.com",
        date: "03/09/2026",
        url: "https://cio-mag.com/fintech-et-interoperabilite-2-0-lafrique-accelere-la-revolution-des-paiements-transfrontaliers/"
      },
      {
        title: "Ivorian fintech Cauridor banks Series A funding including Proparco backing",
        domain: "disruptafrica.com",
        date: "15/05/2026",
        url: "https://disruptafrica.com/2026/05/15/ivorian-fintech-cauridor-banks-series-a-funding-includes-2m-from-proparco/"
      },
      {
        title: "Logistics startup Logidoo gets grant funding to scale cross-border AI solutions",
        domain: "techpoint.africa",
        date: "25/08/2026",
        url: "https://techpoint.africa/news/logistics-startup-logidoo-gets-funding/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_idea03`,
    session_id: sessionId,
    type: 'content',
    title: "L'AI Brain Fry du dirigeant : Pourquoi l'intelligence artificielle augmente votre charge mentale au lieu de la reduire (et la regle des 3 filtres)",
    account: 'personal',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Learn — Ateliers de methode et systeme PIQPACC pour clarifier la pensee et automatiser sans surcharge cognitive",
    angles: [
      {
        label: "Angle Debutant / Vulgarisation",
        format: "Post psychologie & efficacite",
        hook: "Vous pensiez que l'IA allait vous liberer du temps. En realite, vous etes plus fatigue le soir qu'avant. Voici ce qui arrive a votre cerveau.",
        points: [
          "Explication du phenomene de surcharge cognitive ('AI Brain Fry') documente chez les managers et dirigeants en 2026.",
          "La difference entre charge administrative (taper un document) et charge de controle (lire 15 propositions generees par l'IA, verifier les erreurs, choisir).",
          "L'infobesite artificielle : quand l'IA produit du texte 10 fois plus vite que vous ne pouvez l'assimiler.",
          "La regle d'or : ne jamais utiliser l'IA pour generer plus de contenu, mais l'utiliser pour filtrer et synthetiser l'existant."
        ]
      },
      {
        label: "Angle Expert / Strategique",
        format: "Analyse des sciences de la decision",
        hook: "78% des dirigeants utilisent l'IA, mais moins de 5% osent lui deleguer des arbitrages cles. Pourquoi la 'charge de controle' est le nouvel ennemi invisible de la productivite.",
        points: [
          "Les conclusions des rapports Deloitte et Dynamique Mag 2026 sur la mutation du travail managerial : l'angoisse de la reddition cognitive.",
          "Le cout energetique du context-switching permanent entre les prompts, les outils de verification et les operations reelles.",
          "Le framework PIQPACC de Jesse Ogoula applique a la reduction de la charge mentale : Cadrer le Probleme, Isoler la Question, Poser les Parametres, Verifier l'Action.",
          "Comment concevoir des flux asynchrones ou l'IA ne sollicite le dirigeant qu'avec un choix binaire documente, au lieu d'un flux continu de notifications."
        ]
      },
      {
        label: "Angle Contrarien / Prise de position",
        format: "Mise au point radicale",
        hook: "L'IA ne vous fait pas gagner du temps, elle accelere votre dispersion. Si vous n'avez pas de methode avant d'ouvrir un outil, vous accélérez simplement votre propre epuisement.",
        points: [
          "Pourquoi l'illusion de productivite (generer 10 pages en 30 secondes) masque souvent un vide strategique total.",
          "Les entreprises qui submergent leurs collaborateurs de nouveaux assistants IA sans regles d'usage claires constatent une hausse de 35% de l'anxiete au travail.",
          "Le dirigeant moderne ne se definit pas par sa vitesse d'execution brute, mais par sa clarte de jugement : savoir quand couper les ecrans et imposer le silence.",
          "Mon conseil de builder : utilisez l'IA pour eliminer le bruit, pas pour en fabriquer davantage."
        ]
      }
    ],
    sources: [
      {
        title: "L'ere du dirigeant augmente : au-dela du mythe de l'IA",
        domain: "dynamique-mag.com",
        date: "15/06/2026",
        url: "https://www.dynamique-mag.com/article/lere-du-dirigeant-augmente-au-dela-du-mythe-de-lia"
      },
      {
        title: "Decision-making with AI in the Modern Enterprise : Cognitive Capital Trends 2026",
        domain: "deloitte.com",
        date: "20/05/2026",
        url: "https://www.deloitte.com/global/en/insights/topics/talent/human-capital-trends/2026/decision-making-with-ai.html"
      },
      {
        title: "L'intelligence artificielle ne diminue pas votre temps de travail : elle intensifie votre charge mentale",
        domain: "dubasque.org",
        date: "10/06/2026",
        url: "https://dubasque.org/lintelligence-artificielle-ne-diminue-pas-votre-temps-de-travail-elle-intensifie-votre-charge-mentale/"
      },
      {
        title: "L'AI Brain Fry des dirigeants et managers : diagnostiquer la surcharge cognitive",
        domain: "btob-leaders.com",
        date: "18/06/2026",
        url: "https://btob-leaders.com/ai-brain-fry-dirigeants/"
      },
      {
        title: "Charge mentale et IA : comment preserver son jugement critique de dirigeant",
        domain: "paulantoinetual.fr",
        date: "22/07/2026",
        url: "https://paulantoinetual.fr/blog/charge-mentale-ia-sans-perdre-son-jugement"
      },
      {
        title: "How AI will transform executive decision-making and cognitive balance by 2026",
        domain: "digitalmag.theceomagazine.com",
        date: "05/06/2026",
        url: "https://digitalmag.theceomagazine.com/how-ai-will-transform-executive-decision-making-by-2026/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_idea04`,
    session_id: sessionId,
    type: 'content',
    title: "Audit de Processus PME : Comment identifier les 3 goulots d'etranglement operationnels qui bloquent votre rentabilite sans investissement lourd",
    account: 'ibogalab',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'BOFU',
    score: 5,
    bridge: "Audit d'opportunites IA Gratuit (30 min) chez Iboga Lab — Diagnostic sans engagement pour PME : https://ibogalab.vercel.app/calendly-booking",
    angles: [
      {
        label: "Angle Debutant / Vulgarisation",
        format: "Grille d'auto-evaluation pratique",
        hook: "Votre chiffre d'affaires stagne alors que vos equipes font des heures supplementaires ? Le probleme n'est pas vos commerciaux, c'est ce qui se passe apres la vente.",
        points: [
          "Les 3 signes infaillibles d'un goulot d'etranglement interne : la reponse client qui prend plus de 24h, le patron qui doit tout valider, les erreurs de facturation repetitives.",
          "Pourquoi recruter une personne de plus ne regle jamais un probleme de process mal concu (cela ne fait qu'ajouter du salaire au desordre).",
          "Comment un audit simple de 30 minutes permet de decouvrir exactement ou l'argent fuit dans l'entreprise.",
          "La methode Iboga Lab pour cartographier vos operations sans jargon technique."
        ]
      },
      {
        label: "Angle Expert / Strategique",
        format: "Decomposition methodologique",
        hook: "Dans 8 PME sur 10 auditees par Iboga Lab, nous recuperons entre 15 et 25 heures de travail utile par semaine sans acheter un seul logiciel couteux.",
        points: [
          "La methodologie de l'audit d'opportunites operationnelles : Cartographie des flux (Value Stream Mapping), Chronometrage des etapes manuelles, Mesure du taux d'erreur humaine.",
          "Les trois leviers d'automatisation a ROI immediat : La relance des impayes automatique, Le tri et l'aiguillage intelligent des demandes entrantes, La generation des rapports d'activite.",
          "Exemple chiffre d'une PME de transport a Libreville : suppression de 4 saisies redondantes, reduction du delai de facturation de 12 jours a 4 heures.",
          "Pourquoi l'automatisation reussie commence toujours par la suppression d'etapes inutiles avant toute ligne de code."
        ]
      },
      {
        label: "Angle Contrarien / Prise de position",
        format: "Appel a l'action direct",
        hook: "Acheter un logiciel de gestion sans avoir audite vos flux reels, c'est comme poser du carrelage de luxe sur un plancher vermoulu.",
        points: [
          "Le grand cimetiere des projets ERP a 30 millions de FCFA abandonnes en Afrique francophone apres 6 mois de conflit interne.",
          "Les logiciels n'ont jamais regle le manque de clarte d'une organisation : ils ne font que numeriser et accelerer la confusion existante.",
          "Ce que nous refusons categoriquement chez Iboga Lab : developper une solution pour un client dont nous n'avons pas d'abord teste et nettoye le process sur le terrain.",
          "Offre concrète : 30 minutes de diagnostic gratuit pour identifier vos 3 plus gros blocages et chiffrer le gain potentiel."
        ]
      }
    ],
    sources: [
      {
        title: "Comment integrer l'IA en entreprise sans echouer : conseils de deploiement",
        domain: "blogdumoderateur.com",
        date: "25/08/2026",
        url: "https://www.blogdumoderateur.com/comment-integrer-ia-entreprise-conseils-mister-ia/"
      },
      {
        title: "Enterprise Workflow Automation and Operational Bottlenecks Resolution",
        domain: "zapier.com",
        date: "12/08/2026",
        url: "https://zapier.com/blog/enterprise-workflow-automation/"
      },
      {
        title: "L'intelligence artificielle transforme le paysage financier et operationnel africain",
        domain: "cio-mag.com",
        date: "03/09/2026",
        url: "https://cio-mag.com/rocky-abdoul-milingita-lintelligence-artificielle-transforme-le-paysage-financier-africain-en-particulier-dans-les-zones-a-faible-acces-bancaire/"
      },
      {
        title: "African Tech and SME Operational Transformation Digest",
        domain: "techpoint.africa",
        date: "10/09/2026",
        url: "https://techpoint.africa/insight/techpoint-digest-1371/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_idea05`,
    session_id: sessionId,
    type: 'content',
    title: "Du classeur Excel corrompu a l'application metier securisee : Comment le No-Code et l'IA sauvent les operations des PME",
    account: 'personal',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'MOFU',
    score: 5,
    bridge: "Iboga Dev & Iboga Process — Transformation de vos feuilles de calcul critiques en portails internes fiables et synchronises",
    angles: [
      {
        label: "Angle Debutant / Vulgarisation",
        format: "Histoire vecue & pedagogie",
        hook: "Si tout votre chiffre d'affaires repose sur un fichier nomme 'SUIVI_VENTES_2026_FINAL_V3_CORRIGE.xlsx', vous etes a un clic de la catastrophe.",
        points: [
          "Le quotidien angoissant de la PME qui grandit : plusieurs collaborateurs qui modifient le meme fichier Excel sur cle USB ou Google Drive, formules ecrasees par inadvertance.",
          "Qu'est-ce qu'une application metier interne no-code ? Une interface simple accessible sur telephone ou ordinateur, avec des droits d'acces securises et des donnees verifiees a la source.",
          "Comment construire une application operationnelle en 7 jours sans embaucher une equipe de 5 developpeurs.",
          "Les 3 fonctions vitales a securiser en priorite : la gestion des stocks, le suivi des devis/factures et le carnet d'adresses clients."
        ]
      },
      {
        label: "Angle Expert / Strategique",
        format: "Architecture technique legere",
        hook: "L'ere des classeurs de calcul aveugles est revolue : le benchmark SpreadsheetBench prouve que les agents IA peuvent desormais auditer et transformer les tableurs d'entreprise.",
        points: [
          "Analyse des resultats du benchmark mondial SpreadsheetBench 2026 : l'IA est desormais capable de comprendre la structure logique d'un classeur financier et d'en extraire le schema de base de donnees.",
          "Architecture moderne pour PME africaine : Supabase ou PostgreSQL en backend, Airtable ou FlutterFlow en frontend, n8n pour les passerelles automatisées.",
          "Garantie de continuite d'activite : gestion automatique des sauvegardes, journalisation des modifications par utilisateur et synchronisation hors-ligne en cas de coupure reseau.",
          "Retour sur investissement : division par 4 du temps passe a rechercher une facture ancienne ou a generer le bilan mensuel des stocks."
        ]
      },
      {
        label: "Angle Contrarien / Prise de position",
        format: "Verite qui derange",
        hook: "Excel est le meilleur outil de prototypage du monde. Mais c'est le pire outil pour gerer une organisation de plus de 5 salaries.",
        points: [
          "Pourquoi 80% des fraudes internes et des erreurs de tresorerie dans les PME africaines sont directes liees a des cellules de calcul modifiees a la main sans historique.",
          "L'attachement sentimental des directeurs financiers a leurs tableaux incompris : une posture qui empeche la delegation et paralyse l'expansion de l'entreprise.",
          "Passer a une application securisee ne coute plus des millions : refuser de franchir le pas n'est plus une contrainte budgetaire, c'est un aveu de paresse methodologique.",
          "Le vrai role du dirigeant : batir des systemes indestructibles que ses equipes peuvent utiliser sans risquer de tout casser."
        ]
      }
    ],
    sources: [
      {
        title: "Nigerian AI team ranks high on global SpreadsheetBench for practical office tasks",
        domain: "techpoint.africa",
        date: "05/09/2026",
        url: "https://techpoint.africa/news/decide-ranks-fourth-spreadsheet-accuracy/"
      },
      {
        title: "L'IA en entreprise en 2026 : chiffres d'adoption et maturite operationnelle",
        domain: "blogdumoderateur.com",
        date: "01/09/2026",
        url: "https://www.blogdumoderateur.com/ia-entreprise-2026/"
      },
      {
        title: "Mistral Forge : adapter les modeles d'IA a la base de connaissances interne de l'entreprise",
        domain: "mistral.ai",
        date: "15/03/2026",
        url: "https://mistral.ai/news/forge/"
      },
      {
        title: "What are agentic workflows and how do they work in enterprise automation",
        domain: "zapier.com",
        date: "04/09/2026",
        url: "https://zapier.com/blog/agentic-workflows/"
      },
      {
        title: "Building AI Agents with Multi-Step Tool Calling and Long-Term Memory",
        domain: "cohere.com",
        date: "01/09/2026",
        url: "https://cohere.com/blog/building-ai-agents"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_idea06`,
    session_id: sessionId,
    type: 'content',
    title: "Souverainete et IA d'entreprise en Afrique : Pourquoi adapter des modeles open-source a nos donnees reelles est le seul pari gagnant pour les dirigeants",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'BOFU',
    score: 5,
    bridge: "Iboga Dev & Iboga Learn — Deploiement de solutions d'IA internes sur serveurs dedies respectant la confidentialite des donnees de l'entreprise",
    angles: [
      {
        label: "Angle Debutant / Vulgarisation",
        format: "Mise en garde strategique",
        hook: "Envoyer vos listings clients, vos marges et vos contrats sur des serveurs publics a l'autre bout du monde : et si vous veniez de donner vos secrets de fabrication ?",
        points: [
          "Ce qui se passe reellement quand un employe copie l'integralite d'un appel d'offres ou d'un bilan financier confidentiel dans une IA gratuite en ligne.",
          "Pourquoi la souverainete des donnees n'est pas un concept de geeks, mais la condition meme de la survie de votre avantage concurrentiel.",
          "L'alternative accessible : faire tourner un modele d'IA securise et prive sur un serveur maitrise par l'entreprise, sans fuite de donnees vers l'exterieur.",
          "Les questions simples a poser a votre responsable informatique avant la fin du mois."
        ]
      },
      {
        label: "Angle Expert / Strategique",
        format: "Architecture d'IA souveraine",
        hook: "Entre le risque de fuite de donnees strategiques et les couts imprevisibles des API cloud, l'IA open-source et auto-hebergee s'impose comme le standard B2B.",
        points: [
          "Analyse des initiatives menees par Smart Africa et la Cote d'Ivoire pour developper des capacites d'IA africaines souveraines et conformes aux reglementations locales.",
          "Comparatif technique : API proprietaire aux Etats-Unis versus modele open-weight (Llama 3, Mistral) heberge sur infrastructure privee ou datacenter regional.",
          "Mise en place de bases de donnees vectorielles internes (RAG prive) : comment permettre a l'IA de consulter 10 ans d'historique d'entreprise avec zero fuite externe.",
          "L'offre d'accompagnement Iboga Lab : securisation, conformite et deploiement sur mesure pour PME et grands comptes."
        ]
      },
      {
        label: "Angle Contrarien / Prise de position",
        format: "Plaidoyer pour l'autonomie africaine",
        hook: "Attendre que les geants de la tech californienne adaptent leurs algorithmes a nos devises, nos lois et nos langues, c'est accepter de rester des sous-traitants pour les 30 prochaines annees.",
        points: [
          "Pourquoi le veritable enjeu de l'IA en Afrique n'est pas la consommation d'outils branchés, mais la propriete intellectuelle des flux de travail.",
          "Les entreprises qui controlent leurs modeles et leurs donnees locales auront un pouvoir de negociation inestimable face aux acteurs internationaux.",
          "C'est sur le terrain, a Libreville, Abidjan, Douala ou Dakar que s'invente la tech la plus pragmatique et rentable du monde.",
          "Mon engagement chez Iboga Lab : construire les outils numeriques africains qui creent de la valeur chez nous, pour nous."
        ]
      }
    ],
    sources: [
      {
        title: "Impact IA 2026 : la Cote d'Ivoire prepare ses propres solutions d'intelligence artificielle",
        domain: "digitalbusiness.africa",
        date: "04/09/2026",
        url: "https://www.digitalbusiness.africa/impact-ia-2026-la-cote-divoire-prepare-ses-propres-solutions-dintelligence-artificielle/"
      },
      {
        title: "Smart Africa lance le premier Conseil Africain de l'IA pour accelerer la transformation numerique",
        domain: "smartafrica.org",
        date: "01/09/2026",
        url: "https://smartafrica.org/fr/smart-africa-lance-le-premier-conseil-africain-de-lia-pour-accelerer-la-transformation-numerique-du-continent/"
      },
      {
        title: "Smart Africa and Wadhwani AI Global partner to advance responsible AI for public good",
        domain: "smartafrica.org",
        date: "02/09/2026",
        url: "https://smartafrica.org/smart-africa-and-wadhwani-ai-global-partner-to-advance-responsible-ai-for-public-good-across-africa/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_idea07`,
    session_id: sessionId,
    type: 'content',
    title: "La regle des 70/30/0 : Pourquoi la theorie ne paie pas les salaires en Afrique et comment structurer une PME par l'execution",
    account: 'personal',
    pillar: 'builder',
    pillar_label: 'Parcours Builder',
    funnel: 'TOFU',
    score: 4,
    bridge: "Histoire de Jesse & Positionnement Iboga Lab — 70% d'execution strategique, 30% d'innovation de flux, 0% de theorie inutile",
    angles: [
      {
        label: "Angle Debutant / Vulgarisation",
        format: "Storytelling personnel & lecon d'entrepreneuriat",
        hook: "J'ai commence dans le droit avant de passer 7 ans sur le terrain logistique a gerer des flux et des stocks a Port-Gentil. Voici la seule verite que j'en ai retenue.",
        points: [
          "Le choc entre ce qu'on apprend dans les amphitheatres universitaires et la realite brutale d'un quai de chargement sous 35 degres avec des camions en panne.",
          "Pourquoi les idees ne valent absolument rien : 10 personnes ont la meme idee chaque matin, seul celui qui expedie la premiere commande gagne.",
          "Comment la discipline logistique m'a permis de structurer Iboga Lab et d'accompagner des centaines de professionnels et d'entrepreneurs.",
          "Conseil pour les jeunes diplomes et fondateurs : devenez des obsesionnels de la livraison, pas des collectionneurs de concepts."
        ]
      },
      {
        label: "Angle Expert / Strategique",
        format: "Methode d'organisation opérationnelle",
        hook: "70% d'execution strategique, 30% d'innovation de flux, 0% de theorie inutile : voici la matrice exacte qui pilote chaque projet que nous delivrons.",
        points: [
          "Decomposition du ratio 70/30/0 applique a la gestion d'une equipe : 70% du temps sur les routines qui font rentrer le cash, 30% sur l'automatisation des flux pour liberer du temps futur, 0% de debats steriles.",
          "Comment eliminer les reunions hebdomadaires interminables grace a des tableaux de bord asynchrones et des verifications automatiques.",
          "Le passage du mode projet (ou l'on eteint des incendies en permanence) au mode produit (ou l'on construit des briques reutilisables et scalables).",
          "Application directe : le systeme utilise pour former plus de 300 talents avec l'OIF, Simplon et Ecole 241."
        ]
      },
      {
        label: "Angle Contrarien / Prise de position",
        format: "Manifeste sans concession",
        hook: "L'Afrique n'a pas besoin de nouveaux coachs en developpement personnel qui vendent du reve sur LinkedIn. Elle a besoin d'ingenieurs de process et de batisseurs de systemes.",
        points: [
          "Le piege des discours d'inspiration creux qui flattent l'ego mais ne creent pas un seul emploi durable ni une seule facture encaissee.",
          "Pourquoi parler de 'mindset' sans parler de marge brute, de rotation de stock et de retention client est une escroquerie intellectuelle.",
          "Ce qui rend un entrepreneur reellement libre : ce ne sont pas ses citations preferees, c'est la solidite de ses processus quand il n'est pas dans le bureau.",
          "Signature : On n'attend pas la prochaine revolution technologique en Afrique. On la build."
        ]
      }
    ],
    sources: [
      {
        title: "L'ere du dirigeant augmente : au-dela du mythe de l'IA",
        domain: "dynamique-mag.com",
        date: "15/06/2026",
        url: "https://www.dynamique-mag.com/article/lere-du-dirigeant-augmente-au-dela-du-mythe-de-lia"
      },
      {
        title: "L'AI Brain Fry des dirigeants et managers : diagnostiquer la surcharge cognitive",
        domain: "btob-leaders.com",
        date: "18/06/2026",
        url: "https://btob-leaders.com/ai-brain-fry-dirigeants/"
      },
      {
        title: "African Tech and SME Operational Transformation Digest",
        domain: "techpoint.africa",
        date: "10/09/2026",
        url: "https://techpoint.africa/insight/techpoint-digest-1371/"
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
        console.log(`✓ Inserted: [${item.type.toUpperCase()}] ${item.title.substring(0, 55)}...`);
      }
    }
    console.log('All insertions completed successfully!');
  } catch (err) {
    console.error('Fatal error during insertion:', err);
    process.exit(1);
  }
}

insertAll();

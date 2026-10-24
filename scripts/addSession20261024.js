import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://igicdrrdlambscodmaxi.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnaWNkcnJkbGFtYnNjb2RtYXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NjMwMjUsImV4cCI6MjEwMzQzOTAyNX0.puTkc1j7BI0-dKkAL1rRtN7_XwywOS77enlEgcZBHf4';
const supabase = createClient(supabaseUrl, supabaseKey);

export const sessionId = 'sess_20261024_083000';
export const sessionDate = '2026-10-24';
export const weekLabel = 'Semaine du 24 Octobre 2026';
export const generatedAt = '2026-10-24T08:30:00+01:00';

export const sessionData = {
  id: sessionId,
  date: sessionDate,
  generated_at: generatedAt,
  week_label: weekLabel,
  newsjacking: {
    title: "La Banque mondiale lance sa première stratégie numérique globale et prône la « Petite IA » : Le signal fort pour les PME et économies émergentes (20 octobre 2026)"
  }
};

export const allIdeas = [
  {
    id: 'idea_20261024_news01',
    session_id: sessionId,
    type: 'news',
    title: "La Banque mondiale lance sa première stratégie numérique globale et prône la « Petite IA » : Un tournant pour les PME et économies émergentes",
    account: 'jesse',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Process — Prioriser les solutions IA légères et opérationnelles adaptées aux contraintes de connectivité et de budget des PME",
    angles: [
      {
        name: "Débutant",
        format: "Post court",
        hook: "La Banque mondiale vient de trancher un débat mondial : les pays en développement n'ont pas besoin de méga-modèles d'IA à plusieurs milliards de dollars, mais de « Petite IA ».",
        points: [
          "Lancement le 20 octobre 2026 à Séoul de la première stratégie numérique globale de la Banque mondiale par Ajay Banga",
          "Promotion officielle du concept de « Small AI » : des modèles légers, abordables et orientés vers les problèmes du quotidien",
          "Partenariat d'accès GPU à l'usage avec NVIDIA et Cassava Technologies pour éviter la construction de data centers coûteux",
          "Ce que cela valide pour nos entreprises : arrêter d'attendre les technologies occidentales géantes et automatiser avec des solutions locales frugales"
        ]
      }
    ],
    sources: [
      {
        title: "Le Groupe de la Banque mondiale lance sa toute première stratégie numérique pour stimuler l'emploi des jeunes",
        domain: "banquemondiale.org",
        date: "2026-10-20",
        url: "https://www.banquemondiale.org/fr/news/press-release/2026/10/20/world-bank-group-launches-first-ever-digital-strategy"
      },
      {
        title: "Banque mondiale : la « Petite IA » au cœur de la stratégie pour les pays émergents",
        domain: "digitalbusiness.africa",
        date: "2026-10-21",
        url: "https://www.digitalbusiness.africa/banque-mondiale-petite-ia-strategie-numerique"
      },
      {
        title: "World Bank Digital Strategy and AI Infrastructure Initiative with NVIDIA and Cassava",
        domain: "worldbank.org",
        date: "2026-10-20",
        url: "https://www.worldbank.org/en/news/press-release/2026/10/20/digital-strategy"
      }
    ],
    drafted_post: `La Banque mondiale vient de poser un mot officiel sur ce que nous répétons sur le terrain depuis le premier jour : les pays émergents n'ont pas besoin de « Big AI », ils ont besoin de « Small AI ».

Ce qui vient de se passer :
Le 20 octobre 2026, à Séoul, Ajay Banga a dévoilé la toute première stratégie numérique globale du Groupe de la Banque mondiale. Son mot d'ordre pour l'intelligence artificielle est sans équivoque : cesser de courir après des méga-modèles aux coûts de calcul délirants, et focaliser les investissements sur des solutions d'IA légères, abordables, intégrées aux appareils du quotidien et adaptées aux réalités locales.

Pourquoi c'est capital pour les dirigeants africains :
Pendant deux ans, le marketing des géants de la Silicon Valley a fait croire aux PME qu'il fallait un budget d'infrastructure colossal pour bénéficier de l'IA. 
La réalité est exactement inverse : une PME n'a pas besoin d'un modèle capable d'écrire de la poésie en latin. Elle a besoin d'un micro-modèle capable de catégoriser ses factures fournisseurs, de rapprocher ses bons de livraison ou de répondre aux questions récurrentes de ses clients sur WhatsApp.

Mon regard de praticien :
La « Petite IA », c'est l'IA frugale, celle qui tourne avec peu de bande passante, qui respecte la trésorerie de l'entreprise et qui résout un vrai problème opérationnel en moins de 48 heures.
L'avenir n'appartient pas à ceux qui consomment passivement les modèles les plus lourds, mais à ceux qui intègrent les outils les plus agiles dans leurs processus métier.

Chez vous, cherchez-vous à tout réinventer avec l'IA ou ciblez-vous d'abord les petites frictions qui vous font perdre 2 heures par jour ?

#IntelligenceArtificielle #SmallAI #BanqueMondiale #PME #AfriqueTech #Productivite #IbogaLab`
  },
  {
    id: 'idea_20261024_news02',
    session_id: sessionId,
    type: 'news',
    title: "La logistique attire 780 millions de dollars et détrône pour la première fois la fintech dans les financements de start-up africaines",
    account: 'jesse',
    pillar: 'terrain-pme',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 5,
    bridge: "Parcours Jesse (7 ans coordinateur logistique DARON GROUP) / Iboga Process — Optimisation des chaînes d'approvisionnement et réduction des pertes",
    angles: [
      {
        name: "Débutant",
        format: "Post court",
        hook: "Pour la première fois dans l'histoire de la tech africaine, la fintech n'est plus le secteur numéro un des investissements.",
        points: [
          "780 millions de dollars levés par la logistique et le transport sur les 9 premiers mois de 2026 (contre 760 millions pour la fintech)",
          "Méga-tours de table de Spiro (345 millions $) et Moove (250 millions $) qui captent 76 % des investissements du secteur",
          "Prise de conscience brutale des investisseurs : l'infrastructure physique et le dernier kilomètre conditionnent la viabilité de toute l'économie numérique",
          "Mon regard d'ancien logisticien de terrain : encaisser des paiements digitaux ne sert à rien si le camion reste bloqué sur la piste"
        ]
      }
    ],
    sources: [
      {
        title: "La logistique attire 780 millions $ et devance la fintech dans les start-up africaines",
        domain: "wearetech.africa",
        date: "2026-10-21",
        url: "https://www.wearetech.africa/fr/secteurs/transport-logistique/la-logistique-attire-780-millions-et-devance-la-fintech-dans-les-start-up-africaines"
      },
      {
        title: "African startup funding Q3 2026: Logistics and mobility lead investment totals",
        domain: "techcabal.com",
        date: "2026-10-18",
        url: "https://techcabal.com/2026/10/18/african-startup-funding-q3-2026-logistics-leads/"
      },
      {
        title: "African tech funding report: Mobility and supply chain startups overtake financial services",
        domain: "disruptafrica.com",
        date: "2026-10-19",
        url: "https://disruptafrica.com/2026/10/19/african-tech-funding-q3-2026/"
      }
    ],
    drafted_post: `Un séisme silencieux vient de se produire dans le capital-risque en Afrique : la fintech vient de perdre sa couronne.

Ce qui vient de se passer :
Selon les chiffres consolidés des neuf premiers mois de 2026 (Africa: The Big Deal), le secteur de la logistique et du transport a attiré 780 millions de dollars de financements, dépassant pour la première fois la fintech (760 millions de dollars). À eux deux, les acteurs de la mobilité électrique et du transport de flotte comme Spiro (345 M$) et Moove (250 M$) ont capté l'essentiel de ces capitaux.

Pourquoi c'est une excellente nouvelle :
Pendant dix ans, l'écosystème tech africain a été obsédé par les applications de paiement. Mais encaisser un paiement en 3 secondes sur son téléphone ne sert à rien si la marchandise met 10 jours à parcourir 150 kilomètres ou si le colis disparaît au dépôt faute de traçabilité.

Mon regard d'ancien coordinateur logistique :
Avant de fonder Iboga Lab, j'ai passé 7 ans sur le terrain à gérer des entrepôts, des bordereaux et des flux de stocks physiques. Je peux vous assurer une chose : la rentabilité d'une entreprise africaine ne se joue pas dans une présentation PowerPoint, elle se joue sur les quais de chargement, dans la réduction des ruptures et dans la fiabilité du dernier kilomètre.
Le numérique commence enfin à s'attaquer au monde réel.

Dans votre activité, quel est le plus gros frein à votre croissance : trouver des clients ou réussir à les livrer dans les temps ?

#Logistique #Transport #AfriqueTech #Startups #Financement #PME #SupplyChain #IbogaLab`
  },
  {
    id: 'idea_20261024_news03',
    session_id: sessionId,
    type: 'news',
    title: "Zapier déploie son serveur central Model Context Protocol pour connecter les agents IA à plus de 9 000 applications d'entreprise",
    account: 'ibogalab',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'MOFU',
    score: 5,
    bridge: "Iboga Process — Automatisation d'entreprise et orchestration d'agents connectés aux outils métiers existants",
    angles: [
      {
        name: "Expert",
        format: "Post court",
        hook: "Zapier vient de franchir une étape décisive pour l'automatisation d'entreprise : la généralisation de son serveur central Model Context Protocol (MCP).",
        points: [
          "Connexion dynamique des agents IA (Claude, ChatGPT, Cursor) à 9 000+ applications et 30 000 actions sans coder d'API personnalisées",
          "Remplacement des automatisations rigides déclencheur/action par une découverte contextuelle d'actions en langage naturel",
          "Gouvernance renforcée : gestion centralisée des accès OAuth, plafonds d'appels et journaux d'audit pour éviter les boucles d'agents incontrôlées",
          "Ce que cela change pour les PME : l'intégration d'assistants opérationnels dans le CRM ou l'ERP ne nécessite plus des mois de développement"
        ]
      }
    ],
    sources: [
      {
        title: "Zapier MCP: Model Context Protocol for 9,000+ app integrations",
        domain: "zapier.com",
        date: "2026-10-19",
        url: "https://zapier.com/blog/what-is-mcp/"
      },
      {
        title: "How to build multi-agent systems with MCP and dynamic tool routing",
        domain: "zapier.com",
        date: "2026-10-20",
        url: "https://zapier.com/blog/how-to-build-multi-agent-systems-with-mcp/"
      },
      {
        title: "Model Context Protocol expands across enterprise automation frameworks",
        domain: "techcrunch.com",
        date: "2026-10-21",
        url: "https://techcrunch.com/2026/10/21/model-context-protocol-enterprise-automation/"
      }
    ],
    drafted_post: `L'automatisation d'entreprise vient de basculer dans une nouvelle ère.

Ce qui vient de se passer :
Zapier a officiellement déployé son serveur Model Context Protocol (MCP). En clair : vos assistants d'intelligence artificielle (Claude, ChatGPT, Cursor) peuvent désormais interagir avec plus de 9 000 logiciels professionnels et exécuter plus de 30 000 actions directement en langage naturel, sans avoir à créer un flux rigide par bouton ou par formulaire.

Pourquoi ce changement de paradigme est historique :
Jusqu'ici, automatiser un processus exigeait de définir chaque déclencheur et chaque action de manière figée. Si un format changeait ou si un client posait une question imprévue, le flux se brisait.
Avec le standard MCP, l'agent IA analyse le contexte de la demande, sélectionne lui-même l'outil adéquat (mettre à jour le CRM, créer une facture, notifier un chef de projet sur Slack), tout en restant encadré par des plafonds de sécurité stricts gérés au niveau de l'entreprise.

La doctrine Iboga Process :
L'accès simplifié aux outils ne supprime pas le besoin de méthode. Au contraire : donner des pouvoirs d'action à un agent IA dans un système d'information mal structuré est le moyen le plus rapide de créer des erreurs à grande échelle.
Avant d'activer des agents, cartographiez vos règles métier et verrouillez les autorisations d'écriture.

Vos logiciels internes communiquent-ils déjà de manière fluide ou vos équipes passent-elles encore leur journée à copier-coller des données d'un écran à l'autre ?

#Automatisation #NoCode #ModelContextProtocol #AgentsIA #Productivite #IbogaProcess #IbogaLab`
  },
  {
    id: 'idea_20261024_01',
    session_id: sessionId,
    type: 'content',
    title: "« Coworker Agents » et Compétences dans Google Workspace : Pourquoi attribuer une adresse courriel à une IA sans cartographie des responsabilités va semer le chaos dans votre équipe",
    account: 'ibogalab',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'BOFU',
    score: 5,
    bridge: "Audit d'Opportunités IA Gratuit Iboga Process (30 min) : cartographier les rôles et points de contrôle avant tout déploiement d'agents autonomes",
    angles: [
      {
        name: "Débutant",
        format: "Texte long",
        hook: "Google déploie des « collègues IA » avec leur propre adresse email et leur agenda d'entreprise. Mais si votre organisation interne est déjà floue, vous n'embauchez pas un assistant : vous recrutez du désordre.",
        points: [
          "Explication simple de la mise à jour Gemini at Work : les agents dotés d'identités d'entreprise réelles",
          "Pourquoi l'employé moyen risque de déléguer des tâches critiques sans contrôle de validation",
          "Les 3 règles indispensables avant d'autoriser une IA à envoyer des messages au nom de votre société"
        ]
      },
      {
        name: "Expert",
        format: "Carrousel",
        hook: "Du Prompt à l'Agent Collègue : Matrice de gouvernance en 5 étapes pour intégrer des agents autonomes dans Google Workspace sans risque opérationnel.",
        points: [
          "Définition des périmètres de lecture seule vs écriture transactionnelle",
          "Gestion des Skills réutilisables pour standardiser le ton et les règles de conformité",
          "Plafonds budgétaires et traçabilité des exécutions (spend caps et audit logs)",
          "Mise en place d'un sas de validation humaine systématique pour tout engagement financier",
          "Audit trimestriel de pertinence des flux automatisés"
        ]
      },
      {
        name: "Contrarien",
        format: "Texte long",
        hook: "Créer une adresse email d'entreprise pour une IA ne prouve pas que vous êtes à la pointe de la technologie. Cela prouve souvent que vous ne savez pas qui fait quoi dans votre boîte.",
        points: [
          "L'illusion du « bouton magique » qui dispense de structurer les fiches de poste",
          "Pourquoi les entreprises les plus rentables automatisent leurs processus avant d'adopter les gadgets à la mode",
          "Comment Iboga Lab aide les dirigeants à poser des fondations saines avec l'Audit d'Opportunités IA gratuit"
        ]
      }
    ],
    sources: [
      {
        title: "Gemini at Work 2026: Introducing the universal agent and workspace skills",
        domain: "blog.google",
        date: "2026-10-16",
        url: "https://blog.google/technology/ai/gemini-at-work-2026"
      },
      {
        title: "Google Workspace introduces agent coworker identities with custom company domains",
        domain: "workspace.google.com",
        date: "2026-10-17",
        url: "https://workspace.google.com/blog/identity/coworker-agents"
      },
      {
        title: "Gouvernance des agents IA d'entreprise : les DSI face au défi du contrôle",
        domain: "cio-mag.com",
        date: "2026-10-18",
        url: "https://cio-mag.com/gouvernance-agents-ia-dsi-entreprise"
      },
      {
        title: "Enterprise AI agents shift from prompts to persistent teammates with budget caps",
        domain: "techcrunch.com",
        date: "2026-10-18",
        url: "https://techcrunch.com/2026/10/18/enterprise-ai-agents-teammates/"
      },
      {
        title: "Sécurité et audit des agents autonomes en environnement de travail",
        domain: "defendintelligence.com",
        date: "2026-10-19",
        url: "https://defendintelligence.com/securite-audit-agents-autonomes"
      }
    ]
  },
  {
    id: 'idea_20261024_02',
    session_id: sessionId,
    type: 'content',
    title: "Pourquoi la Banque mondiale a raison sur la « Petite IA » : Le piège des abonnements aux méga-modèles que 90 % des PME n'exploiteront jamais",
    account: 'jesse',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'MOFU',
    score: 5,
    bridge: "Iboga Learn & Iboga Process — Méthode PIQPACC et déploiement de modèles frugaux adaptés aux usages quotidiens",
    angles: [
      {
        name: "Débutant",
        format: "Texte long",
        hook: "Vous payez 15 000 FCFA par mois par collaborateur pour un modèle d'IA capable de simuler la fusion nucléaire, alors que votre équipe a juste besoin de trier 50 bons de commande par jour.",
        points: [
          "Ce que signifie concrètement la « Petite IA » préconisée par Ajay Banga pour une entreprise normale",
          "Pourquoi les petits modèles spécialisés sont 10 fois plus rapides et 80 % moins chers",
          "Le cadre PIQPACC d'Iboga Lab pour poser des questions précises sans payer de licences astronomiques"
        ]
      },
      {
        name: "Expert",
        format: "Carrousel",
        hook: "Big AI vs Small AI : Le comparatif financier et opérationnel pour une PME de 15 à 50 collaborateurs.",
        points: [
          "Consommation de bande passante et latence : l'avantage décisif des modèles légers hébergés localement",
          "Sécurité et confidentialité des données : garder les informations financières hors des serveurs publics",
          "Calcul du retour sur investissement réel : coût par tâche traitée plutôt que coût d'abonnement forfaitaire",
          "Feuille de route pour migrer d'une souscription générique vers un assistant métier dédié"
        ]
      },
      {
        name: "Contrarien",
        format: "Texte long",
        hook: "Les géants de la tech vous vendent des avions de chasse pour traverser la rue. Arrêtez de payer pour de la puissance inutile.",
        points: [
          "Pourquoi la course aux milliers de milliards de paramètres est une guerre d'ingénieurs qui ne concerne pas les dirigeants de PME",
          "La fierté mal placée de vouloir le dernier outil à la mode au détriment de la marge opérationnelle",
          "La démarche pragmatique : commencer petit, mesurer le temps gagné chaque vendredi, puis monter en puissance"
        ]
      }
    ],
    sources: [
      {
        title: "La vision de la Petite IA pour les pays en développement",
        domain: "banquemondiale.org",
        date: "2026-10-20",
        url: "https://www.banquemondiale.org/fr/news/press-release/2026/10/20/world-bank-group-launches-first-ever-digital-strategy"
      },
      {
        title: "Petite IA contre méga-modèles : l'Afrique fait le choix du pragmatisme",
        domain: "digitalbusiness.africa",
        date: "2026-10-21",
        url: "https://www.digitalbusiness.africa/petite-ia-afrique-pragmatisme"
      },
      {
        title: "Frugal AI and edge computing architectures for enterprise deployments",
        domain: "worldbank.org",
        date: "2026-10-21",
        url: "https://www.worldbank.org/en/topic/digitaldevelopment"
      },
      {
        title: "Modèles légers et connectivité contrainte : les nouveaux impératifs des entreprises africaines",
        domain: "afriqueitnews.com",
        date: "2026-10-21",
        url: "https://afriqueitnews.com/technologies/modeles-legers-entreprises-africaines"
      },
      {
        title: "Économie de l'IA : optimiser les coûts logiciels dans la zone francophone",
        domain: "financialafrik.com",
        date: "2026-10-22",
        url: "https://financialafrik.com/economie-ia-couts-logiciels-francophonie"
      }
    ]
  },
  {
    id: 'idea_20261024_03',
    session_id: sessionId,
    type: 'content',
    title: "780 millions de dollars dans la logistique africaine : Pourquoi le digital pur ne suffit plus et comment le dernier kilomètre dicte la rentabilité de votre entreprise",
    account: 'jesse',
    pillar: 'terrain-pme',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'MOFU',
    score: 5,
    bridge: "Iboga Process — Automatisation de la chaîne logistique, suivi des stocks et élimination des goulets d'étranglement physiques",
    angles: [
      {
        name: "Débutant",
        format: "Texte long",
        hook: "Vous pouvez avoir la plus belle boutique en ligne et le paiement mobile le plus rapide du Gabon : si votre livreur met 4 heures à trouver l'adresse, votre client ne commandera plus jamais.",
        points: [
          "Ce que nous enseigne le fait que la logistique dépasse la fintech dans les levées de fonds en Afrique",
          "La réalité des adresses informelles, des pistes dégradées et des retours de colis non livrés",
          "Comment digitaliser le suivi de livraison avec des outils simples connectés à WhatsApp"
        ]
      },
      {
        name: "Expert",
        format: "Carrousel",
        hook: "Les 4 goulets d'étranglement qui détruisent la marge des distributeurs en Afrique (et comment les automatiser).",
        points: [
          "Point 1 : La saisie manuelle des bons de livraison papier qui génère 15 % d'erreurs d'inventaire",
          "Point 2 : L'absence de synchronisation temps réel entre le stock physique et les commandes en ligne",
          "Point 3 : Le coût caché des tournées de livraison non optimisées en carburant et temps d'attente",
          "Point 4 : La gestion des litiges et encaissements à la livraison (Cash on Delivery)",
          "Plan d'action Iboga Process pour fiabiliser la chaîne de bout en bout"
        ]
      },
      {
        name: "Contrarien",
        format: "Texte long",
        hook: "L'illusion de la startup 100 % digitale a fait perdre des millions à des fondateurs qui refusaient de mettre les pieds dans la boue.",
        points: [
          "Pourquoi construire du logiciel en Afrique sans comprendre la logistique physique est voué à l'échec",
          "Mes 7 années chez DARON GROUP : ce que déplacer des conteneurs m'a appris sur l'architecture produit",
          "Le véritable avantage concurrentiel en 2026 : l'excellence d'exécution sur le dernier kilomètre"
        ]
      }
    ],
    sources: [
      {
        title: "La logistique attire 780 millions $ et devance la fintech",
        domain: "wearetech.africa",
        date: "2026-10-21",
        url: "https://www.wearetech.africa/fr/secteurs/transport-logistique/la-logistique-attire-780-millions-et-devance-la-fintech-dans-les-start-up-africaines"
      },
      {
        title: "African supply chains meet digital automation: Logistics trends 2026",
        domain: "techcabal.com",
        date: "2026-10-18",
        url: "https://techcabal.com/2026/10/18/african-supply-chains-logistics-trends-2026/"
      },
      {
        title: "Investment shifts in African technology ecosystems",
        domain: "disruptafrica.com",
        date: "2026-10-19",
        url: "https://disruptafrica.com/2026/10/19/investment-shifts-african-tech/"
      },
      {
        title: "Commerce et logistique en zone CEMAC : les défis de la distribution",
        domain: "agenceecofin.com",
        date: "2026-10-20",
        url: "https://www.agenceecofin.com/transport/commerce-logistique-cemac-distribution"
      },
      {
        title: "Le coût du dernier kilomètre dans les métropoles africaines",
        domain: "financialafrik.com",
        date: "2026-10-21",
        url: "https://financialafrik.com/cout-dernier-kilometre-metropoles-africaines"
      }
    ]
  },
  {
    id: 'idea_20261024_04',
    session_id: sessionId,
    type: 'content',
    title: "Après le Gabon, le Tchad prévalide sa stratégie nationale d'IA : Pourquoi la gouvernance des données locales est le seul rempart contre la dépendance technologique",
    account: 'ibogalab',
    pillar: 'terrain-pme',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'MOFU',
    score: 4,
    bridge: "Iboga Dev & Iboga Learn — Bâtir des applications et des bases de données souveraines conformes aux normes CEMAC",
    angles: [
      {
        name: "Débutant",
        format: "Texte long",
        hook: "Le Tchad vient d'engager la validation de sa stratégie nationale d'IA. Mais comme pour le Gabon ou le Rwanda, une question demeure : avons-nous des données propres à donner à manger à ces algorithmes ?",
        points: [
          "Ce qui s'est passé à N'Djamena avec l'appui de la Commission économique des Nations unies pour l'Afrique (CEA)",
          "Pourquoi parler d'intelligence artificielle sans bases de données fiables est une perte de temps",
          "Comment les entreprises locales peuvent déjà structurer leurs données sans attendre les lois"
        ]
      },
      {
        name: "Expert",
        format: "Carrousel",
        hook: "Gouvernance des données en zone CEMAC : 4 piliers techniques pour transformer les registres papier des PME en actifs numériques exploitables.",
        points: [
          "Nettoyage et déduplication des bases clients existantes",
          "Mise en conformité avec les réglementations de protection des données personnelles",
          "Choix d'architectures de stockage locales ou hybrides sécurisées",
          "Protocoles d'anonymisation pour l'entraînement d'assistants IA internes"
        ]
      },
      {
        name: "Contrarien",
        format: "Texte long",
        hook: "Multiplier les conférences ministérielles sur l'IA ne servira à rien tant que nos administrations et nos entreprises perdront les dossiers des citoyens dans des classeurs rouillés.",
        points: [
          "Le contraste entre les discours d'avenir et la réalité administrative sur le terrain",
          "La responsabilité des dirigeants de PME : être exemplaire dans sa propre gestion de données",
          "Notre conviction chez Iboga Lab : la souveraineté commence dans vos propres feuilles de calcul"
        ]
      }
    ],
    sources: [
      {
        title: "Le Tchad prépare sa stratégie nationale d'intelligence artificielle",
        domain: "agenceecofin.com",
        date: "2026-10-17",
        url: "https://www.agenceecofin.com/telecom/le-tchad-prepare-sa-strategie-nationale-dintelligence-artificielle"
      },
      {
        title: "Prévalidation de la stratégie nationale de gouvernance des données et d'IA au Tchad",
        domain: "uneca.org",
        date: "2026-10-18",
        url: "https://www.uneca.org/fr/stories/prevalidation-strategie-nationale-donnees-ia-tchad"
      },
      {
        title: "Données et souveraineté numérique en Afrique centrale",
        domain: "digitalbusiness.africa",
        date: "2026-10-19",
        url: "https://www.digitalbusiness.africa/donnees-souverainete-numerique-afrique-centrale"
      },
      {
        title: "Cadres régionaux d'interopérabilité des données en Afrique",
        domain: "smartafrica.org",
        date: "2026-10-20",
        url: "https://smartafrica.org/initiatives/data-governance-framework"
      }
    ]
  },
  {
    id: 'idea_20261024_05',
    session_id: sessionId,
    type: 'content',
    title: "La révolution du Model Context Protocol : Comment un seul agent IA remplace 50 connecteurs rigides dans la gestion quotidienne d'une entreprise",
    account: 'jesse',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'BOFU',
    score: 5,
    bridge: "Audit Gratuit Iboga Process — Identifier les 3 silos applicatifs à décloisonner immédiatement",
    angles: [
      {
        name: "Débutant",
        format: "Texte long",
        hook: "Pendant des années, pour connecter votre boîte mail à votre logiciel de facturation et à votre base clients, il fallait configurer des dizaines de règles compliquées. Le protocole MCP est en train de tout simplifier.",
        points: [
          "Explication simple de la différence entre une API figée et un protocole de contexte d'agent",
          "Comment vous pouvez désormais demander en français : « Vérifie si la facture 402 est réglée et préviens le client »",
          "Pourquoi cela réduit drastiquement les coûts de développement pour les PME"
        ]
      },
      {
        name: "Expert",
        format: "Carrousel",
        hook: "Architecture MCP vs API traditionnelles : Pourquoi la gestion de vos opérations internes ne sera plus jamais la même.",
        points: [
          "Principe : Découverte dynamique d'outils au lieu de points de terminaison codés en dur",
          "Réduction de 70 % de la dette technique sur les intégrations no-code",
          "Gestion des droits et contrôle des autorisations d'exécution",
          "Étude de cas : Traitement automatisé d'un bon de commande de la réception à la comptabilité"
        ]
      },
      {
        name: "Contrarien",
        format: "Texte long",
        hook: "Ceux qui passent encore des semaines à coder des connecteurs sur mesure pour des tâches de bureau basiques jettent l'argent de leur entreprise par les fenêtres.",
        points: [
          "L'obsolescence programmée des intégrations rigides face aux agents contextuels",
          "Pourquoi la valeur n'est plus dans le code de connexion mais dans la cartographie des processus",
          "L'Audit d'Opportunités IA gratuit d'Iboga Lab : 30 minutes pour identifier vos flux automatisables immédiatement"
        ]
      }
    ],
    sources: [
      {
        title: "What is Model Context Protocol (MCP) and how it works",
        domain: "zapier.com",
        date: "2026-10-19",
        url: "https://zapier.com/blog/what-is-mcp/"
      },
      {
        title: "Connecting LLMs to business applications via open protocol standards",
        domain: "anthropic.com",
        date: "2026-10-18",
        url: "https://www.anthropic.com/news/model-context-protocol"
      },
      {
        title: "Agentic operating systems and document workflows in modern businesses",
        domain: "make.com",
        date: "2026-10-19",
        url: "https://www.make.com/en/blog/agentic-operating-systems"
      },
      {
        title: "The protocol war behind AI integration layers",
        domain: "techcrunch.com",
        date: "2026-10-21",
        url: "https://techcrunch.com/2026/10/21/ai-integration-protocols/"
      },
      {
        title: "Automatisation intelligente et architecture de flux pour les PME",
        domain: "cio-mag.com",
        date: "2026-10-21",
        url: "https://cio-mag.com/automatisation-intelligente-architecture-flux-pme"
      }
    ]
  },
  {
    id: 'idea_20261024_06',
    session_id: sessionId,
    type: 'content',
    title: "« Mauvaise friction » contre « Bonnes barrières » : Pourquoi votre surcharge de dirigeant ne vient pas du volume de travail, mais de la conception défaillante de vos flux décisionnels",
    account: 'jesse',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'TOFU',
    score: 4,
    bridge: "Iboga Process — Diagnostic des goulets d'étranglement et automatisation des choix par défaut",
    angles: [
      {
        name: "Débutant",
        format: "Texte long",
        hook: "Si vous terminez vos journées épuisé avec l'impression de n'avoir rien produit d'important, ce n'est pas parce que vous manquez de volonté. C'est parce que votre entreprise vous oblige à prendre 200 décisions inutiles par jour.",
        points: [
          "Ce que l'économie comportementale et les sciences cognitives révèlent sur l'épuisement décisionnel des dirigeants",
          "La distinction cruciale entre la mauvaise friction (paperasse, allers-retours de validation) et la bonne friction (sas de sécurité stratégique)",
          "Comment configurer des choix par défaut automatisés pour libérer 10 heures de cerveau par semaine"
        ]
      },
      {
        name: "Expert",
        format: "Carrousel",
        hook: "Ingénierie cognitive du poste de direction : 4 leviers pour supprimer la friction inutile dans vos équipes.",
        points: [
          "Règle 1 : Automatiser les décisions récurrentes sous un certain seuil financier",
          "Règle 2 : Remplacer les réunions d'information par des tableaux de bord asynchrones",
          "Règle 3 : Mettre en place des « barrières délibérées » sur les engagements à fort impact",
          "Règle 4 : Filtrer les demandes entrantes grâce à un assistant IA avant qu'elles n'atteignent votre bureau"
        ]
      },
      {
        name: "Contrarien",
        format: "Texte long",
        hook: "Le dirigeant qui veut tout valider lui-même n'est pas un leader rigoureux. C'est le principal goulot d'étranglement qui empêche sa propre boîte de grandir.",
        points: [
          "Le piège du micromanagement déguisé en exigence de qualité",
          "Pourquoi votre équipe attend vos validations : parce que le processus n'est pas documenté",
          "La méthode Iboga Process : formaliser les flux pour que l'entreprise tourne même quand vous éteignez votre téléphone"
        ]
      }
    ],
    sources: [
      {
        title: "Executive cognitive overload and behavioral economics in organizational design",
        domain: "behavioraleconomics.com",
        date: "2026-10-15",
        url: "https://www.behavioraleconomics.com/resources/executive-cognitive-overload/"
      },
      {
        title: "The high cost of decision friction in executive leadership",
        domain: "mckinsey.com",
        date: "2026-10-16",
        url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/decision-friction-executive"
      },
      {
        title: "Cognitive load, default choices, and working memory constraints in high-stakes environments",
        domain: "biorxiv.org",
        date: "2026-10-14",
        url: "https://www.biorxiv.org/content/cognitive-load-default-choices"
      },
      {
        title: "Stop letting bad friction kill productivity in executive workflows",
        domain: "hbr.org",
        date: "2026-10-18",
        url: "https://hbr.org/2026/10/stop-bad-friction-productivity"
      }
    ]
  },
  {
    id: 'idea_20261024_07',
    session_id: sessionId,
    type: 'content',
    title: "Clôture anticipée de l'appel D-CLIC IA de l'OIF face à l'afflux massif de candidatures : Ce que ma casquette de formateur et de bâtisseur m'enseigne sur la faim de compétences concrètes chez les jeunes africains",
    account: 'jesse',
    pillar: 'parcours-builder',
    pillar_label: 'Parcours Builder',
    funnel: 'TOFU',
    score: 4,
    bridge: "Aucun si 100% Perso (Preuve sociale +300 talents formés avec l'OIF, Simplon et École 241)",
    angles: [
      {
        name: "Débutant",
        format: "Texte long",
        hook: "L'appel à candidatures pour la formation IA du programme D-CLIC de l'OIF devait se terminer en novembre. Il a dû être clôturé en urgence le 23 octobre tellement la vague de candidatures a submergé les serveurs.",
        points: [
          "La preuve éclatante que la jeunesse francophone ne veut plus de théories abstraites mais d'outils pour travailler",
          "Mon retour d'expérience d'expert-formateur marketing digital et IA auprès de plus de 300 jeunes",
          "Pourquoi le véritable enjeu n'est pas d'obtenir un certificat de plus, mais de livrer des projets utiles pour les entreprises"
        ]
      },
      {
        name: "Expert",
        format: "Texte long",
        hook: "Former 1 000 jeunes à l'IA en Afrique : Pourquoi 90 % des programmes échouent s'ils n'intègrent pas la commande réelle des PME locales dès la deuxième semaine.",
        points: [
          "Le gouffre entre les cours académiques en ligne et la réalité opérationnelle d'une entreprise gabonaise",
          "La méthode pédagogique orientée produit : passer de l'apprentissage passif à la livraison de livrables opérationnels",
          "L'articulation entre compétences transversales (rigueur, communication) et maîtrise des outils d'IA"
        ]
      },
      {
        name: "Contrarien",
        format: "Texte long",
        hook: "Empiler 15 certificats numériques en ligne ne garantit aucun emploi. Ce qui garantit un contrat, c'est de savoir supprimer un problème qui coûte de l'argent à un dirigeant.",
        points: [
          "La dérive de la « collection de diplômes » qui rassure mais ne paye pas les factures",
          "Ce que je dis à chaque cohorte que j'accompagne : ne devenez pas des spectateurs de l'IA, devenez des résolveurs de problèmes",
          "On n'attend pas la prochaine révolution, on la build"
        ]
      }
    ],
    sources: [
      {
        title: "Session de formation en ligne en intelligence artificielle du programme D-CLIC",
        domain: "francophonie.org",
        date: "2026-10-23",
        url: "https://www.francophonie.org/formation-d-clic-intelligence-artificielle-2026"
      },
      {
        title: "Compétences numériques et formation professionnelle en Afrique francophone",
        domain: "auf.org",
        date: "2026-10-21",
        url: "https://www.auf.org/nouvelles/actualites/competences-numeriques-formation-afrique"
      },
      {
        title: "La jeunesse africaine face aux défis de l'emploi et de l'intelligence artificielle",
        domain: "unesco.org",
        date: "2026-10-20",
        url: "https://www.unesco.org/fr/articles/jeunesse-africaine-defis-emploi-ia"
      },
      {
        title: "Engouement record pour les parcours de formation pratique à l'IA en Afrique francophone",
        domain: "wearetech.africa",
        date: "2026-10-23",
        url: "https://www.wearetech.africa/fr/secteurs/formation/engouement-record-formation-ia-afrique"
      }
    ]
  }
];

export async function syncSession() {
  console.log('Synchronizing session', sessionId);
  const { error: sessErr } = await supabase.from('sessions').upsert(sessionData);
  if (sessErr) {
    console.error('Session error:', sessErr);
    throw sessErr;
  }
  console.log('Session synced successfully');

  console.log(`Upserting ${allIdeas.length} ideas...`);
  const { error: ideasErr } = await supabase.from('ideas').upsert(allIdeas);
  if (ideasErr) {
    console.error('Ideas error:', ideasErr);
    throw ideasErr;
  }
  console.log('Ideas synced successfully');
}

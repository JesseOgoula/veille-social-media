import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://igicdrrdlambscodmaxi.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnaWNkcnJkbGFtYnNjb2RtYXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NjMwMjUsImV4cCI6MjEwMzQzOTAyNX0.puTkc1j7BI0-dKkAL1rRtN7_XwywOS77enlEgcZBHf4';
const supabase = createClient(supabaseUrl, supabaseKey);

const sessionId = 'sess_20260904_143000';
const sessionDate = '2026-09-04';
const weekLabel = 'Semaine du 04 Septembre 2026 — Session 2';
const generatedAt = new Date().toISOString();

const sessionData = {
  id: sessionId,
  date: sessionDate,
  generated_at: generatedAt,
  week_label: weekLabel,
  newsjacking: {
    title: "Claudeforce et Agentic AI Cloud en Afrique : Le basculement des organisations vers les agents d'execution autonomes et le calcul local"
  }
};

const newsItems = [
  {
    id: `idea_${sessionId}_news01`,
    session_id: sessionId,
    type: 'news',
    title: "Alliance Claudeforce : Salesforce et Anthropic font basculer le CRM de l'assistant passif a l'agent d'execution autonome",
    account: 'personal',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Process — Structuration prealable des bases clients et regles metier pour preparer l'arrivee des agents d'execution",
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualite court",
        hook: "L'intelligence artificielle en entreprise ne se contente plus de repondre a des questions : elle pilote desormais les actions dans les logiciels de vente. Salesforce et Anthropic viennent de franchir un cap historique avec Claudeforce.",
        points: [
          "Salesforce et Anthropic ont officialise fin aout et debut septembre 2026 leur alliance Claudeforce avec open beta immediate.",
          "Claude devient le moteur de raisonnement par defaut d'Agentforce, Slack et Sales Cloud avec 37 competences commerciales pre-integrees.",
          "Les agents ne se limitent plus a generer du texte : ils inspectent le pipeline, preparent les rendez-vous et executent des mises a jour directes en base sous gouvernance stricte.",
          "Pour les PME, le signal est sans equivoque : l'interface conversationnelle devient la passerelle d'action directe dans les systemes d'information."
        ]
      }
    ],
    sources: [
      {
        title: "Claudeforce : Salesforce et Anthropic infusent Sales Cloud dans Claude",
        domain: "lemagit.fr",
        date: "27/08/2026",
        url: "https://www.lemagit.fr/actualites/366649798/Claudeforce-Salesforce-et-Anthropic-infusent-Sales-Cloud-dans-Claude"
      },
      {
        title: "Salesforce and Anthropic Announce Claudeforce in Q2-27 Earnings",
        domain: "salesforceben.com",
        date: "27/08/2026",
        url: "https://www.salesforceben.com/salesforce-and-anthropic-announce-claudeforce-in-q2-27-earnings/"
      },
      {
        title: "Claudeforce Explained : What Salesforce & Anthropic Actually Ship",
        domain: "apexhours.com",
        date: "28/08/2026",
        url: "https://www.apexhours.com/claudeforce-explained-what-salesforce-anthropic-actually-ship/"
      }
    ],
    drafted_post: "OBSERVATOIRE TECH : L'epoque des chatbots passifs dans votre CRM est officiellement terminee.\n\nCe qui s'est passe :\nSalesforce et Anthropic viennent de lancer Claudeforce. Concretement, le modele Claude est desormais branche directement au coeur du moteur Agentforce et de Slack, avec 37 competences metier pre-integrees capables de modifier des fiches prospects, analyser la sante d'un closing et declencher des taches sans intervention humaine permanente.\n\nPourquoi c'est un tournant pour les directions d'entreprise :\nPendant deux ans, l'IA etait un outil de redaction place a cote de votre ecran. Aujourd'hui, elle entre a l'interieur du logiciel pour executer le travail de routine administrative des commerciaux et des gestionnaires de comptes.\n\nMon avis de praticien :\nNe vous precipitez pas pour acheter un outil d'agent si vos fiches clients sont incompletes, si vos statuts de vente ne sont pas normalises et si personne ne sait qui doit relancer qui. L'agent IA n'est pas un magicien : il execute vos regles. Si vos regles sont floues, il executera le chaos a la vitesse de l'eclair.\n\nVos equipes commerciales passent-elles encore plus de temps a remplir leur logiciel qu'a parler a leurs clients ?\n\n#IntelligenceArtificielle #CRM #Salesforce #Anthropic #Productivite #IbogaLab"
  },
  {
    id: `idea_${sessionId}_news02`,
    session_id: sessionId,
    type: 'news',
    title: "Huawei deploie son premier Agentic AI Cloud en Afrique : Calcul souverain et hebergement local a Lagos",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Dev & Process — Deploiement de solutions d'automatisation et de stockage respectant la conformite et la souverainete locale",
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualite court",
        hook: "Data stays home, value stays home : Huawei officialise a Lagos le basculement vers l'Agentic AI Cloud, apportant le calcul et la gouvernance IA directement sur le sol africain.",
        points: [
          "Lancement officiel du premier Agentic AI Cloud lors du Huawei Nigeria AI & Cloud Summit 2026 fin aout.",
          "Transition d'une offre cloud classique vers une infrastructure d'IA agentique hebergee localement pour la finance, l'energie et l'industrie.",
          "Reponse directe aux imperatifs de souverainete des donnees (conformite NDPA) et reduction drastique des temps de latence reseau.",
          "Confirmation de la course aux infrastructures physiques IA sur le continent africain."
        ]
      }
    ],
    sources: [
      {
        title: "Huawei deepens local infrastructure push with Agentic AI Cloud launch in Nigeria",
        domain: "techpoint.africa",
        date: "27/08/2026",
        url: "https://techpoint.africa/brandpress/huawei-deepens-local-infrastructure-push-with-agentic-ai-cloud-launch-in-nigeria/"
      },
      {
        title: "Huawei launches Agentic AI Cloud in Nigeria to accelerate intelligence",
        domain: "techafricanews.com",
        date: "31/08/2026",
        url: "https://techafricanews.com/2026/08/31/huawei-launches-agentic-ai-cloud-nigeria/"
      },
      {
        title: "Huawei switches to Agentic AI infrastructure for African enterprise",
        domain: "itnewsafrica.com",
        date: "28/08/2026",
        url: "https://www.itnewsafrica.com/2026/08/south-africa-whatsapp-based-workforce-management-platform-raises-8-4m/"
      }
    ],
    drafted_post: "INFRASTRUCTURE AFRIQUE : L'intelligence artificielle cesse d'etre un flux exporte vers l'Occident.\n\nCe qui s'est passe :\nA Lagos, Huawei a presente son Agentic AI Cloud, destine a heberger et faire tourner les agents d'intelligence artificielle des banques, societes d'energie et administrations directement sur des serveurs locaux sous la regle : 'Data stays home, value stays home'.\n\nPourquoi c'est decisif pour nos marches :\nTant que le calcul IA dependait exclusivement de centres de donnees situes aux Etats-Unis ou en Europe, les entreprises africaines etaient confrontees a un double frein : la latence reseau et les exigences juridiques de protection des donnees souveraines.\n\nMon avis de praticien :\nL'arrivee de grappes de calcul IA specialisees sur notre continent change la donne. La prochaine etape pour les dirigeants de PME et ETI n'est pas d'attendre passivement, mais de categoriser des aujourd'hui leurs donnees : qu'est-ce qui peut aller dans le cloud public, et qu'est-ce qui doit imperativement rester dans un environnement securise local ?\n\nSavez-vous exactement ou sont stockees les donnees confidentielles de vos clients a l'heure actuelle ?\n\n#AfriqueTech #Cloud #SouveraineteNumerique #Infrastructure #IbogaLab"
  },
  {
    id: `idea_${sessionId}_news03`,
    session_id: sessionId,
    type: 'news',
    title: "Partenariat Figo AI Labs & TBO : Deploiement d'IA operationnelle dans le secteur petrolier et financier africain",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Process — Conception et integration de flux automatises pour les secteurs logistiques et industriels a fortes contraintes",
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualite court",
        hook: "L'intelligence artificielle sort des bureaux de communication pour attaquer les puits de petrole et les flux bancaires. Figo AI Labs et TBO annoncent une alliance strategique pour l'industrie lourde africaine.",
        points: [
          "Annonce le 3 septembre 2026 d'un partenariat strategique entre Figo AI Labs et TBO Integrated Services.",
          "Objectif cible : concevoir et deployer des solutions IA a impact economique mesurable dans l'oil & gas, les institutions financieres et le secteur public.",
          "Combinaison de l'ingenierie de modeles autonomes et du conseil en gouvernance metier pour eviter les echecs de pilotes sans suite.",
          "Preuve tangible que le marche africain entre dans l'ere des applications industrielles a haute valeur ajoutee."
        ]
      }
    ],
    sources: [
      {
        title: "Figo AI Labs and TBO Integrated Services Partner to Drive Measurable AI Solutions for Large-Scale Enterprises",
        domain: "techpoint.africa",
        date: "03/09/2026",
        url: "https://techpoint.africa/brandpress/figo-ai-tbo-services-partnership/"
      },
      {
        title: "Enterprise AI and Applied Intelligence Solutions",
        domain: "figolabs.ai",
        date: "03/09/2026",
        url: "https://www.figolabs.ai/"
      },
      {
        title: "African deeptech moves into heavy industries and industrial engineering",
        domain: "disruptafrica.com",
        date: "04/09/2026",
        url: "https://disruptafrica.com/2026/09/04/nigerias-chipmango-raises-1-9m-seed-round-to-expand-operations-globally/"
      }
    ],
    drafted_post: "REALITES METIER : Quand l'IA quitte les slides PowerPoint pour s'attaquer au terrain industriel.\n\nCe qui s'est passe :\nLe 3 septembre 2026, Figo AI Labs et TBO Integrated Services ont officialise leur alliance pour implementer des agents d'IA directement au coeur de l'industrie petroliere, de la logistique lourde et du secteur financier en Afrique.\n\nCe que cela revele :\nPour avoir passe 7 annees sur le terrain logistique a Port-Gentil, je connais par coeur le quotidien de ces operations : des fiches de stocks papier perdues, des temps d'arret de maintenance couteux faute de suivi d'alertes, et des heures perdues en conciliation de bordereaux. C'est tres exactement la que l'IA appliquée genere un retour sur investissement chiffrable en millions de FCFA.\n\nMon avis de builder :\nL'IA n'est pas un gadget pour faire des images. C'est un instrument d'optimisation de flux physiques et informationnels. Les entreprises africaines qui gagneront ne sont pas celles qui parlent d'IA, mais celles qui l'integrent dans leurs operations les plus rugueuses.\n\nDans quel processus industriel ou logistique perdez-vous le plus d'heures chaque semaine ?\n\n#Industrie #Logistique #Afrique #TransformationDigitale #IbogaLab"
  }
];

const contentIdeas = [
  {
    id: `idea_${sessionId}_01`,
    session_id: sessionId,
    type: 'content',
    title: "La Shadow IA en PME : 70% de vos collaborateurs collent vos donnees dans des IA non autorisees. Comment reprendre la main sans briser la productivite ?",
    account: 'business',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'MOFU',
    score: 5,
    bridge: "Iboga Learn — Formation pratique et charte d'acculturation IA en entreprise pour canaliser l'usage et securiser les donnees",
    angles: [
      {
        label: "Angle Debutant",
        format: "Post Educatif / Diagnostic",
        hook: "Si vous pensez que votre PME n'utilise pas d'intelligence artificielle, regardez discretement l'historique de navigation de vos equipes sur leurs smartphones.",
        points: [
          "Plus de 70% des collaborateurs en entreprise utilisent regulierement des IA generatives gratuites sans l'accord de leur direction.",
          "Les employes ne font pas cela par malveillance, mais parce que ces outils les aident reellement a rediger plus vite et resoudre des problemes quotidiens.",
          "Le danger immediat : des donnees financieres, des devis clients et des projets de contrats se retrouvent injectes dans des serveurs publics sans aucun controle."
        ]
      },
      {
        label: "Angle Expert",
        format: "Carrousel Methodologique",
        hook: "Interdire l'IA dans votre entreprise garantit une seule chose : vos collaborateurs continueront a l'utiliser en cachette. Voici comment formaliser une gouvernance saine en 3 etapes.",
        points: [
          "Etape 1 : Cartographier les cas d'usage reels et legitimes plutot que de poser des interdits theoriques.",
          "Etape 2 : Mettre a disposition un cadre securise (comptes entreprise isoles et regles de non-apprentissage sur les donnees).",
          "Etape 3 : Former les collaborateurs aux techniques d'anonymisation des documents sensibles avant tout traitement."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Post d'Opinion Tranchee",
        hook: "La Shadow IA n'est pas une faute professionnelle de vos employes. C'est l'aveu formel que vos outils internes actuels sont lents, depasses et penibles a utiliser.",
        points: [
          "Quand un salarie contourne les procedures pour utiliser un outil moderne, il cherche d'abord l'efficacite que son entreprise ne lui fournit pas.",
          "Les dirigeants qui choisissent de punir bloquent l'innovation et incitent leurs meilleurs profils a partir.",
          "La vraie reponse du leader moderne consiste a canaliser cette energie productive dans un cadre securise et structure."
        ]
      }
    ],
    sources: [
      {
        title: "Shadow AI : The 76 Percent Enterprise Problem",
        domain: "olakai.ai",
        date: "2026",
        url: "https://olakai.ai/blog/shadow-ai-76-percent-problem/"
      },
      {
        title: "Shadow AI and SME Risk in 2026",
        domain: "themio.ai",
        date: "2026",
        url: "https://www.themio.ai/en/blog/shadow-ai-sme-risk-2026"
      },
      {
        title: "Enterprise AI Visibility and Unsanctioned Workflows",
        domain: "larridin.com",
        date: "2026",
        url: "https://larridin.com/ai-workflow-mapping/enterprise-ai-visibility-crisis"
      },
      {
        title: "Shadow AI Workplace Report 2026",
        domain: "teramind.co",
        date: "2026",
        url: "https://www.teramind.co/l/shadow-ai-report-2026/"
      },
      {
        title: "AI reshaping SMEs risk and operational future",
        domain: "checkpoint.com",
        date: "2026",
        url: "https://blog.checkpoint.com/security/90-of-the-worlds-businesses-are-smes-and-msmes-and-ai-is-reshaping-both-their-future-and-their-risk/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_02`,
    session_id: sessionId,
    type: 'content',
    title: "L'Illusion des Agents Autonomes Magiques : Pourquoi 90% des PME ont besoin de workflows deterministes avant d'acheter des robots",
    account: 'personal',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'MOFU',
    score: 4,
    bridge: "Iboga Process — Automatisation pragmatique de flux metier n8n et Make avec garde-fous humains",
    angles: [
      {
        label: "Angle Debutant",
        format: "Post Educatif / Comparatif",
        hook: "Tout le monde vous parle d'agents IA autonomes qui vont gerer votre entreprise a votre place. La verite est beaucoup plus simple et bien moins chere.",
        points: [
          "Un agent autonome essaie d'improviser ses actions a chaque etape : sans garde-fous, il finit inevitablement par se tromper ou tourner en rond.",
          "Un workflow automatise (comme sur n8n ou Make) execute une suite logique et previsible d'actions : declencheur, verification, traitement, notification.",
          "90% des problemes d'une PME ne necessitent aucune improvisation, mais une rigueur parfaite dans l'execution des taches repetitives."
        ]
      },
      {
        label: "Angle Expert",
        format: "Guide Technique et Strategique",
        hook: "Avant de laisser une IA prendre des decisions seules dans votre systeme d'information, posez-vous une question : quelle est votre architecture de controle ?",
        points: [
          "La regle d'or de l'automatisation serieuse en PME est le Human-in-the-Loop : l'IA prepare, extrait et formate, mais l'humain clique sur 'Valider'.",
          "Isoler les appels d'API et normaliser les formats d'entree reduit les erreurs de 95% par rapport a un agent en roue libre.",
          "Ce n'est qu'une fois le flux deterministe 100% stable qu'on peut deleguer une micro-decision controlee a un modele de langage."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Post Debunking",
        hook: "Acheter une plateforme d'agents IA a 1 000 euros par mois quand vos devis sont encore rediges sur Word et envoyes a la main, c'est mettre un moteur de Formule 1 sur une charrette.",
        points: [
          "La mode de l'IA fait perdre de vue les fondamentaux du bon sens entrepreneurial.",
          "Les entreprises les plus rentables automatisent leurs process avec des outils simples, fiables et a cout quasi nul.",
          "La valeur ne vient pas du mot 'IA' sur votre facture, mais des heures reelles rendues a vos salaries pour servir vos clients."
        ]
      }
    ],
    sources: [
      {
        title: "Enterprises Winning with AI Agents Are Limiting How Much the Agents Can Do Alone",
        domain: "venturebeat.com",
        date: "01/09/2026",
        url: "https://venturebeat.com/orchestration/enterprises-winning-with-ai-agents-are-limiting-how-much-the-agents-can-do-alone"
      },
      {
        title: "The Agentic Reckoning : Enterprise AI Organizations Have a Runtime Problem",
        domain: "venturebeat.com",
        date: "28/08/2026",
        url: "https://venturebeat.com/resources/the-agentic-reckoning-enterprise-ai-organizations-have-a-runtime-problem-not-a-model-problem"
      },
      {
        title: "Claudeforce Explained : What Salesforce & Anthropic Actually Ship",
        domain: "apexhours.com",
        date: "28/08/2026",
        url: "https://www.apexhours.com/claudeforce-explained-what-salesforce-anthropic-actually-ship/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_03`,
    session_id: sessionId,
    type: 'content',
    title: "Le Gouffre du Cycle Devis-Facture-Relance : Comment une PME gagne 20 jours de tresorerie en automatisant son Quote-to-Cash",
    account: 'business',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'BOFU',
    score: 5,
    bridge: "Audit d'opportunites IA gratuit (30 min) / Iboga Process — Diagnostic des goulets d'etranglement de facturation et tresorerie",
    angles: [
      {
        label: "Angle Debutant",
        format: "Post Cas d'Usage / Chiffre Choc",
        hook: "Combien de jours s'ecoulent entre la fin d'une prestation chez votre client et le moment ou l'argent arrive reellement sur votre compte bancaire ?",
        points: [
          "Dans la majorite des PME africaines, ce delai depasse 60 a 90 jours, non pas a cause de la mauvaise foi des clients, mais a cause des lenteurs administratives internes.",
          "Devis envoye 4 jours apres la demande, facture emise 2 semaines apres la livraison, relances faites au hasard quand le compte est a sec.",
          "Ce frottement manuel permanent coute a l'entreprise sa tresorerie et epuise moralement ses dirigeants."
        ]
      },
      {
        label: "Angle Expert",
        format: "Etude de Cas Detaillee (Avant / Apres)",
        hook: "En reconstruisant le pipeline de facturation d'une societe de services B2B, nous avons reduit son delai moyen de recouvrement de 68 jours a 41 jours.",
        points: [
          "Avant : Saisie manuelle des bons de commande, redaction des devis sous Excel, relances telephoniques desordonnees.",
          "Mise en place : Generation automatisee des devis a partir d'un formulaire standard, emission immediate de la facture des validation, et scenario de relance automatique a J-3, J+5 et J+15.",
          "Resultat mesure : 27 jours de tresorerie gagnes, 32 heures administratives economisees par mois pour la responsable comptable, zero facture oubliee."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Post Direct / Appel a l'Action",
        hook: "Vous n'avez pas besoin de faire un credit bancaire pour renflouer votre tresorerie. Vous avez besoin d'envoyer vos factures le jour meme et de relancer automatiquement.",
        points: [
          "La tresorerie d'une PME est souvent bloquee dehors par simple negligence organisationnelle.",
          "Vos debiteurs paient toujours en premier les fournisseurs dont le systeme de relance est le plus rigoureux et constant.",
          "Reserver 30 minutes pour auditer ce flux de travail peut rapporter plus d'argent net a votre societe que trois mois de prospection commerciale."
        ]
      }
    ],
    sources: [
      {
        title: "Executive AI Strategy Questions to Drive ROI",
        domain: "forbes.com",
        date: "27/08/2026",
        url: "https://www.forbes.com/sites/noahbarsky/2026/05/27/4-ai-strategy-questions-every-executive-needs-to-drive-roi/"
      },
      {
        title: "AI reshaping SMEs risk and operational future",
        domain: "checkpoint.com",
        date: "2026",
        url: "https://blog.checkpoint.com/security/90-of-the-worlds-businesses-are-smes-and-msmes-and-ai-is-reshaping-both-their-future-and-their-risk/"
      },
      {
        title: "Shadow AI and SME Risk in 2026",
        domain: "themio.ai",
        date: "2026",
        url: "https://www.themio.ai/en/blog/shadow-ai-sme-risk-2026"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_04`,
    session_id: sessionId,
    type: 'content',
    title: "De la Consommation a la Conception Deeptech : La levee seed de ChipMango ($1.9M) et l'urgence de former des batisseurs en Afrique",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 4,
    bridge: "Iboga Learn — Mentorat et acculturation des talents numeriques africains pour creer de la valeur locale",
    angles: [
      {
        label: "Angle Debutant",
        format: "Post Inspirant / Vision",
        hook: "L'Afrique ne doit pas se contenter d'acheter des abonnements ChatGPT a des entreprises californiennes. Une startup d'ingenierie africaine vient de lever 1,9 million de dollars pour concevoir des puces electroniques.",
        points: [
          "Annonce ce 4 septembre 2026 de la levee seed de ChipMango, fondee entre Lagos et les Etats-Unis, soutenue par Atlantica Ventures et Madica.",
          "Leur mission : former des ingenieurs africains a la conception et a la verification de circuits integres pour l'edge-AI et les capteurs intelligents.",
          "Un rappel puissant que l'avenir technologique du continent se jouera dans la maitrise de l'architecture et du hardware, pas seulement des interfaces web."
        ]
      },
      {
        label: "Angle Expert",
        format: "Analyse d'Ecosysteme",
        hook: "Pourquoi le hardware et les semi-conducteurs deviennent-ils le nouveau terrain de jeu des entrepreneurs africains visionnaires ?",
        points: [
          "Le cout energetique et la dependance aux serveurs distants rendent indispensables les puces optimisees pour l'edge computing en environnement contraint.",
          "Des hubs comme le Rwanda et le Nigeria investissent activement dans les filieres de conception locale pour capter une partie des 600 milliards du marche des semi-conducteurs.",
          "Pour nos ecosystemes francophones, l'enjeu est clair : moderniser de toute urgence nos programmes de formation vers les metiers a haute valeur d'ingenierie."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Coup de Gueule Constructif",
        hook: "Si nous passons les 10 prochaines annees a enseigner uniquement comment faire des posts sur les reseaux sociaux, nous serons les ouvriers du clic du 21eme siecle.",
        points: [
          "La formation numerique en Afrique s'est trop longtemps focalisee sur les competences de surface.",
          "L'exemple de ChipMango prouve qu'il existe un marche mondial pour les cerveaux africains capables de construire des infrastructures profondes.",
          "On n'attend pas que la souverainete vienne des discours : on forme les talents et on la build."
        ]
      }
    ],
    sources: [
      {
        title: "Nigeria's ChipMango raises $1.9m seed round to expand operations globally",
        domain: "disruptafrica.com",
        date: "04/09/2026",
        url: "https://disruptafrica.com/2026/09/04/nigerias-chipmango-raises-1-9m-seed-round-to-expand-operations-globally/"
      },
      {
        title: "ChipMango raises $1.9M to expand African semiconductor talent globally",
        domain: "techinafrica.com",
        date: "04/09/2026",
        url: "https://www.techinafrica.com/chipmango-raises-1-9m-to-expand-african-semiconductor-talent-globall/"
      },
      {
        title: "Huawei deepens local infrastructure push with Agentic AI Cloud launch in Nigeria",
        domain: "techpoint.africa",
        date: "27/08/2026",
        url: "https://techpoint.africa/brandpress/huawei-deepens-local-infrastructure-push-with-agentic-ai-cloud-launch-in-nigeria/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_05`,
    session_id: sessionId,
    type: 'content',
    title: "Frontline Workers et Outils de Terrain : Pourquoi le futur des operations en Afrique passe par WhatsApp plutot que par des ERP a 50 000 dollars",
    account: 'business',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'MOFU',
    score: 5,
    bridge: "Iboga Dev & Iboga Process — Conception de passerelles applicatives metier legeres integrees aux outils reellement utilises sur le terrain",
    angles: [
      {
        label: "Angle Debutant",
        format: "Post Pedagogique / Realite Terrain",
        hook: "Pourquoi 80% des logiciels de gestion deployes dans les entreprises africaines finissent par etre abandonnes au bout de 6 mois ?",
        points: [
          "Parce que les developpeurs oublient une realite evidente : les chauffeurs, magasiniers et techniciens de terrain n'ont ni ordinateur portable ni adresse email professionnelle.",
          "Par contre, 100% d'entre eux utilisent WhatsApp du matin au soir avec une aisance absolue.",
          "La startup sud-africaine Jem vient de lever 8,4 millions de dollars en demontrant que gerer les RH et les plannings via WhatsApp touche 250 000 salaries reels."
        ]
      },
      {
        label: "Angle Expert",
        format: "Guide d'Architecture Applicative",
        hook: "L'art de la frugalite logicielle en Afrique : comment brancher vos bases de donnees sur l'API WhatsApp Business pour digitaliser vos equipes sans friction.",
        points: [
          "Remplacer les portails web lourds par des formulaires conversationnels et des menus interactifs dans WhatsApp.",
          "Automatiser la distribution des fiches de paie, la validation des conges et le signalement des incidents en temps reel.",
          "Connecter ce canal direct a vos outils de gestion comptable ou vos bases Airtable via des webhooks securises."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Post Verite / Efficacite",
        hook: "Arretez de forcer vos employes de terrain a s'adapter a des logiciels americains inadaptes. Adaptez votre logiciel aux habitudes de vos employes.",
        points: [
          "Un outil parfait sur le papier que personne n'ouvre a une valeur egale a zero franc.",
          "L'humilite technologique consiste a aller chercher l'utilisateur la ou il se trouve deja.",
          "C'est cette approche pragmatique qui transforme une digitalisation en gain d'argent immediat pour l'entreprise."
        ]
      }
    ],
    sources: [
      {
        title: "SA HR startup Jem raises $8.4m Series A funding round to support product expansion",
        domain: "disruptafrica.com",
        date: "19/08/2026",
        url: "https://disruptafrica.com/2026/08/19/sa-hr-startup-jem-raises-8-4m-series-a-funding-round-to-support-product-expansion/"
      },
      {
        title: "South Africa WhatsApp-based workforce management platform raises $8.4m",
        domain: "itnewsafrica.com",
        date: "20/08/2026",
        url: "https://www.itnewsafrica.com/2026/08/south-africa-whatsapp-based-workforce-management-platform-raises-8-4m/"
      },
      {
        title: "Enterprise AI and Applied Intelligence Solutions",
        domain: "figolabs.ai",
        date: "03/09/2026",
        url: "https://www.figolabs.ai/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_06`,
    session_id: sessionId,
    type: 'content',
    title: "Du Coordinateur Logistique a Port-Gentil au Fondateur d'Iboga Lab : Ce que la gestion de stocks m'a appris sur l'IA appliquee",
    account: 'personal',
    pillar: 'builder',
    pillar_label: 'Parcours Builder',
    funnel: 'TOFU',
    score: 4,
    bridge: "Culture d'execution Iboga Lab : 70% d'execution strategique, 30% d'innovation de flux, 0% de theorie inutile",
    angles: [
      {
        label: "Angle Debutant",
        format: "Storytelling Personnel Incarné",
        hook: "Avant de creer une agence d'IA appliquee, j'ai passe 7 annees a gerer des cartons, des conteneurs et des bordereaux d'expedition a Port-Gentil.",
        points: [
          "En 2014, j'etais sur le terrain logistique a courir apres des pieces manquantes et verifier des inventaires physiques sous la chaleur.",
          "C'est sur ce terrain rugueux que j'ai compris la valeur supreme de la rigueur des flux et de l'anticipation.",
          "Quand j'ai pivote vers le numerique et fonde Iboga Lab, j'ai realise que l'IA n'etait rien d'autre que de la logistique d'information."
        ]
      },
      {
        label: "Angle Expert",
        format: "Parallele Metier / Methodologie",
        hook: "Pourquoi les meilleurs praticiens de l'intelligence artificielle en entreprise ne sont pas des theoriciens du code, mais des operateurs de terrain.",
        points: [
          "Dans un entrepot, si une piece n'est pas a sa place, toute la ligne s'arrete. Dans un modele d'IA, si une donnee est absente ou mal etiquetee, la reponse est fausse.",
          "L'optimisation logistique repose sur la suppression des gaspillages de temps et de manutention (le principe du Lean).",
          "L'automatisation intelligente en PME applique exactement la meme discipline : traquer chaque geste manuel repetitif et le remplacer par un pipeline fluide."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Manifeste Builder",
        hook: "Ne laissez personne vous faire croire que vous devez etre un ingenieur en mathematiques de la Silicon Valley pour tirer profit de l'IA.",
        points: [
          "La theorie academique sert a concevoir les modeles. Le bon sens et la connaissance du terrain servent a faire gagner de l'argent aux entreprises avec.",
          "On n'attend pas la prochaine revolution technologique les bras croises : on la build avec ses mains et ses experiences passees.",
          "Chaque epreuve et chaque metier que vous avez exerce auparavant est un atout direct pour votre trajectoire numerique."
        ]
      }
    ],
    sources: [
      {
        title: "Figo AI Labs and TBO Integrated Services Partner to Drive Measurable AI Solutions for Large-Scale Enterprises",
        domain: "techpoint.africa",
        date: "03/09/2026",
        url: "https://techpoint.africa/brandpress/figo-ai-tbo-services-partnership/"
      },
      {
        title: "Huawei launches Agentic AI Cloud in Nigeria to accelerate intelligence",
        domain: "techafricanews.com",
        date: "31/08/2026",
        url: "https://techafricanews.com/2026/08/31/huawei-launches-agentic-ai-cloud-nigeria/"
      },
      {
        title: "Nigeria's ChipMango raises $1.9m seed round to expand operations globally",
        domain: "disruptafrica.com",
        date: "04/09/2026",
        url: "https://disruptafrica.com/2026/09/04/nigerias-chipmango-raises-1-9m-seed-round-to-expand-operations-globally/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_07`,
    session_id: sessionId,
    type: 'content',
    title: "La Fatigue Decisionnelle du Dirigeant de PME : Pourquoi vous prenez vos pires arbitrages apres 16h (et comment l'automatisation protege votre lucidite)",
    account: 'personal',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Process — Automatisation des micro-decisions operationnelles pour preserver le capital strategique des dirigeants",
    angles: [
      {
        label: "Angle Debutant",
        format: "Post Psychologie & Sciences Cognitives",
        hook: "Avez-vous deja remarque a quel point vos decisions de 16h30 sont souvent bien pires que celles que vous prenez a 9h du matin ?",
        points: [
          "Les neurosciences ont demontre que la memoire de travail humaine ne peut traiter efficacement que 3 a 5 elements a la fois.",
          "Chaque micro-arbitrage de la journee (valider un devis de 20 000 FCFA, repondre a un message WhatsApp pour un prix, valider une depense d'essence) vide votre reserve de volonte.",
          "En fin de journee, votre cerveau s'epuise et bascule par reflexe vers le choix de moindre resistance : accepter une mauvaise offre ou reporter l'essentiel."
        ]
      },
      {
        label: "Angle Expert",
        format: "Framework d'Architecture Decisionnelle",
        hook: "L'automatisation n'est pas seulement un gain de minutes : c'est un bouclier neurologique pour proteger votre lucidite strategique de patron.",
        points: [
          "Niveau 1 : Decisions operationnelles repetitives -> Doivent etre confiees a des regles automatiques strictes (seuils de remise, delais de relance).",
          "Niveau 2 : Decisions d'equipe structurees -> Deleguees aux managers avec des criteres de validation pre-definis.",
          "Niveau 3 : Choix de croissance et investissements majeurs -> Le seul perimetre ou la presence mentale du dirigeant est indispensable."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Miroir / Prise de Conscience",
        hook: "Etre sollicite 80 fois par jour pour valider des futilites ne prouve pas que vous etes indispensable. Cela prouve que votre entreprise a un systeme defaillant.",
        points: [
          "Confondre surcharge d'interventions et autorite managériale est le piege numero un des fondateurs de PME.",
          "Si votre societe s'arrete de tourner des que vous posez votre telephone pendant deux heures, vous n'avez pas un business, vous avez un emploi precaire de pompier de service.",
          "Automatiser vos processus est le premier acte de respect que vous vous devez a vous-meme et a vos collaborateurs."
        ]
      }
    ],
    sources: [
      {
        title: "Enterprise AI Visibility and Unsanctioned Workflows",
        domain: "larridin.com",
        date: "2026",
        url: "https://larridin.com/ai-workflow-mapping/enterprise-ai-visibility-crisis"
      },
      {
        title: "Shadow AI : The 76 Percent Enterprise Problem",
        domain: "olakai.ai",
        date: "2026",
        url: "https://olakai.ai/blog/shadow-ai-76-percent-problem/"
      },
      {
        title: "Executive AI Strategy Questions to Drive ROI",
        domain: "forbes.com",
        date: "27/08/2026",
        url: "https://www.forbes.com/sites/noahbarsky/2026/05/27/4-ai-strategy-questions-every-executive-needs-to-drive-roi/"
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

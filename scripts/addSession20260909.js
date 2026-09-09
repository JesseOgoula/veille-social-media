import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://igicdrrdlambscodmaxi.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnaWNkcnJkbGFtYnNjb2RtYXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NjMwMjUsImV4cCI6MjEwMzQzOTAyNX0.puTkc1j7BI0-dKkAL1rRtN7_XwywOS77enlEgcZBHf4';
const supabase = createClient(supabaseUrl, supabaseKey);

const sessionId = 'sess_20260909_090000';
const sessionDate = '2026-09-09';
const weekLabel = 'Semaine du 09 Septembre 2026';
const generatedAt = '2026-09-09T08:00:00.000Z';

const sessionData = {
  id: sessionId,
  date: sessionDate,
  generated_at: generatedAt,
  week_label: weekLabel,
  newsjacking: {
    title: "Mistral AI leve 3 milliards d'euros pour l'IA souveraine et Mansa AI numerise 1 000 langues africaines : Le basculement vers les modeles adaptes aux contextes locaux et metier"
  }
};

const newsItems = [
  {
    id: `idea_${sessionId}_news01`,
    session_id: sessionId,
    type: 'news',
    title: "Mistral AI boucle une levee historique de 3 milliards d'euros menee par Samsung pour accelerer l'IA souveraine et on-premise",
    account: 'personal',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Process — Deploiement de solutions d'automatisation et de bases de connaissances internes privatives garantissant l'integrite du patrimoine informationnel",
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualite court",
        hook: "L'intelligence artificielle souveraine franchit un cap sans precedent. Mistral AI vient de securiser 3 milliards d'euros aupres de Samsung et de fonds europeens pour construire des modeles embarques et prives.",
        points: [
          "Mistral AI a formalise sa Serie D de 3 milliards d'euros ce 8-9 septembre 2026, portant sa valorisation a plus de 21 milliards d'euros.",
          "Le partenariat strategique avec Samsung cible le deploiement de modeles on-premises (sur site) specialises dans l'ingenierie et la production industrielle.",
          "Cette levee record confirme le rejet croissant de la dependance exclusive aux clouds proprietaires americains au profit de modeles ouverts et auditables.",
          "Pour les directions d'entreprise, c'est l'assurance de pouvoir integrer l'IA au coeur de leurs metiers sans transferer leurs donnees sensibles a l'etranger."
        ]
      }
    ],
    sources: [
      {
        title: "Mistral AI Newsroom & Updates",
        domain: "mistral.ai",
        date: "08/09/2026",
        url: "https://mistral.ai/news/"
      },
      {
        title: "IA : ABA Technology et Atos ciblent Fusion AI",
        domain: "digitalbusiness.africa",
        date: "2026",
        url: "https://www.digitalbusiness.africa/ia-aba-technology-et-atos-ciblent-un-marche-de-1-500-milliards-de-dollars-avec-fusion-ai/"
      },
      {
        title: "Power Brunch: Nigeria data sovereignty push",
        domain: "techcabal.com",
        date: "08/09/2026",
        url: "https://techcabal.com/2026/09/08/localising-nigerias-data-is-easy-building-sovereignty-is-harder/"
      }
    ],
    drafted_post: "OBSERVATOIRE TECH MONDIAL : 3 milliards d'euros pour Mistral AI et le triomphe de l'IA souveraine.\n\nCe qui s'est passe :\nMistral AI a boucle sa Serie D record de 3 milliards d'euros menee par Samsung Electronics. L'objectif affiche : developper des centres de calcul propres et concevoir des modeles d'IA installables directement sur les infrastructures internes des entreprises.\n\nPourquoi c'est un tournant majeur :\nPendant deux ans, le marche a cru que l'IA devait forcement resider sur les serveurs distants de deux ou trois geants californiens. Ce tour de table prouve le contraire : les grandes industries exigent la confidentialite totale de leur propriete intellectuelle et refusent la dependance technologique.\n\nMon avis de praticien :\nCe mouvement vers l'IA souveraine et locale valide la demarche d'Iboga Lab sur le continent africain : nos entreprises ont besoin de systemes autonomes, capables de tourner sur des infrastructures maitrisees, sans risque de voir des donnees metier s'evaporer a l'autre bout du monde. L'efficience commence par la propriete de ses outils.\n\nVos donnees financieres et commerciales sont-elles reellement a l'abri dans vos outils actuels ?\n\n#IntelligenceArtificielle #MistralAI #SouveraineteNumerique #PME #Technologie"
  },
  {
    id: `idea_${sessionId}_news02`,
    session_id: sessionId,
    type: 'news',
    title: "Mansa AI lance son programme d'integration de 1 000 langues africaines dans les modeles d'intelligence artificielle",
    account: 'personal',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Process — Mise en place d'assistants conversationnels vocaux adaptes aux langues locales pour le commerce et le service client",
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualite court",
        hook: "L'intelligence artificielle parle enfin la langue du terrain. La societe de recherche Mansa AI vient d'officialiser son projet d'entrainement de modeles couvrant 1 000 langues africaines.",
        points: [
          "Annoncee le 8 septembre 2026 par TechCabal, l'initiative vise a combler le vide linguistique des grands modeles actuels qui ignorent l'essentiel des dialectes africains.",
          "Le projet combine la collecte de corpus vocaux et textuels aupres des communautes pour creer des agents capables d'interagir nativement avec les populations locales.",
          "Cette avancee ouvre la voie a des services publics, des interfaces agricoles et des assistants de paiement accessibles a des millions de personnes non francophones ou non anglophones.",
          "Pour les PME de distribution, c'est l'opportunite de digitaliser la relation client sur les marches de proximite."
        ]
      }
    ],
    sources: [
      {
        title: "This AI research company wants to put 1,000 African languages into AI",
        domain: "techcabal.com",
        date: "08/09/2026",
        url: "https://techcabal.com/2026/09/08/mansa-ai-african-languages/"
      },
      {
        title: "L'intelligence artificielle transforme le paysage financier africain",
        domain: "cio-mag.com",
        date: "2026",
        url: "https://cio-mag.com/rocky-abdoul-milingita-lintelligence-artificielle-transforme-le-paysage-financier-africain-en-particulier-dans-les-zones-a-faible-acces-bancaire/"
      },
      {
        title: "Power Brunch: Nigeria data sovereignty push",
        domain: "techcabal.com",
        date: "08/09/2026",
        url: "https://techcabal.com/2026/09/08/localising-nigerias-data-is-easy-building-sovereignty-is-harder/"
      }
    ],
    drafted_post: "INNOVATION LINGUISTIQUE AFRICAINE : Mansa AI s'attaque a l'integration de 1 000 langues du continent dans l'IA.\n\nCe qui s'est passe :\nCe mardi 8 septembre 2026, TechCabal a revele le programme ambitieux de Mansa AI : entrainer des architectures de traitement du langage naturel sur un millier de langues et dialectes africains, jusque-la exclus des modeles mondiaux.\n\nPourquoi c'est une revolution d'usage :\nTant que l'intelligence artificielle s'exprime uniquement en francais ou en anglais litteraire, elle reste un privilège pour les cols blancs des grandes capitales. En permettant le dialogue en langues locales par la voix, l'IA devient un levier d'inclusion directe pour le commercant du marche, l'agriculteur en brousse ou l'artisan.\n\nMon avis de praticien :\nDans nos PME, le premier frein a l'adoption technologique sur le terrain n'est pas le cout du smartphone, mais la barriere de l'ecrit et du langage formalise. Si un assistant peut comprendre une commande vocale passee en fang ou en wolof et mettre a jour un stock automatiquement, l'impact economique est immediat et gigantesque.\n\nCombien de vos clients finaux prefereraient interagir avec vos services par la voix dans leur langue usuelle ?\n\n#IAAfricaine #LanguesLocales #Inclusion #Innovation #IbogaLab"
  },
  {
    id: `idea_${sessionId}_news03`,
    session_id: sessionId,
    type: 'news',
    title: "TechCabal publie son rapport Francophone Africa : La fintech a gagne la bataille des paiements, le defi bascule sur la digitalisation B2B des PME",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Process — Automatisation des flux de facturation B2B, logistique et synchronisation d'inventaires pour PME distributrices",
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualite court",
        hook: "En Afrique francophone, l'epoque ou le paiement mobile etait le seul graal de l'innovation est terminee. Le rapport hebdomadaire de TechCabal confirme que la vraie bataille se joue desormais sur la supply chain et les process B2B.",
        points: [
          "Le rapport 'Francophone Weekly' publie le 8 septembre 2026 analyse la maturation rapide des solutions de paiement en zone UEMOA et CEMAC.",
          "Avec la quasi-totalite des consommateurs equipes de portefeuilles mobiles, la simple passerelle de paiement ne suffit plus a differencier une solution technologique.",
          "Les marges et la croissance se deplacent vers la digitalisation des commandes entre grossistes, la gestion des stocks en temps reel et la facturation d'entreprise.",
          "Pour les dirigeants de PME, c'est l'opportunite historique de moderniser l'arriere-boutique pour reduire les delais de livraison."
        ]
      }
    ],
    sources: [
      {
        title: "Fintech won in Francophone Africa. Now what?",
        domain: "techcabal.com",
        date: "08/09/2026",
        url: "https://techcabal.com/2026/09/08/francophone-weekly-by-techcabal-039/"
      },
      {
        title: "CEMAC : GIC Rating a l'assaut du marche de la notation",
        domain: "financialafrik.com",
        date: "08/09/2026",
        url: "https://www.financialafrik.com/2026/09/08/cemac-gic-rating-a-lassaut-du-marche-de-la-notation/"
      },
      {
        title: "Fintech et interoperabilite 2.0 : l'Afrique accelere la revolution des paiements",
        domain: "cio-mag.com",
        date: "2026",
        url: "https://cio-mag.com/fintech-et-interoperabilite-2-0-lafrique-accelere-la-revolution-des-paiements-transfrontaliers/"
      }
    ],
    drafted_post: "ANALYSE AFRIQUE FRANCOPHONE : La fintech a gagne la guerre du paiement. Quelle est la prochaine frontiere ?\n\nCe qui s'est passe :\nDans son rapport publie ce 8 septembre 2026, TechCabal dresse un constat implacable : en Afrique francophone, le paiement mobile est devenu une marchandise courante. Le vrai levier de rentabilite s'est deplace vers l'automatisation des operations internes des PME.\n\nPourquoi c'est capital pour nos entreprises :\nEncaisser de l'argent par QR code ou telephone ne sert a rien si votre entrepot perd trois jours a preparer un colis ou si vos factures de fournisseurs traînent sur une table. Les goulots d'etranglement de nos economies ne sont plus monétaires, ils sont operationnels.\n\nMon avis de praticien :\nChez Iboga Lab, nous voyons chaque semaine des dirigeants qui ont trois passerelles de paiement connectees sur leur site, mais qui gerent encore leurs expeditions sur un carnet use. C'est votre chaine logistique, votre tenue d'inventaire et vos validations de devis qu'il faut automatiser aujourd'hui pour degager de la marge.\n\nVotre arriere-boutique operationnelle est-elle aussi moderne que vos moyens d'encaissement ?\n\n#AfriqueFrancophone #Digitalisation #SupplyChain #PME #Operations #IbogaLab"
  }
];

const contentIdeas = [
  {
    id: `idea_${sessionId}_01`,
    session_id: sessionId,
    type: 'content',
    title: "Mistral AI leve 3 milliards d'euros pour l'IA souveraine : Pourquoi votre PME doit garder la propriete de ses donnees et de ses flux metier",
    account: 'personal',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Process — Deploiement de solutions d'automatisation et de bases de connaissances internes privatives garantissant l'integrite du patrimoine informationnel",
    angles: [
      {
        label: "Angle Vulgarisation",
        format: "Post Vision & Prise de conscience",
        hook: "Quand Samsung injecte des milliards dans Mistral AI pour installer des modeles sur ses propres machines, ce n'est pas un caprice d'ingenieurs : c'est la fin de l'illusion du tout-cloud.",
        points: [
          "Les plus grands groupes de la planete refusent desormais d'envoyer leurs secrets de fabrication et leurs marges commerciales sur des serveurs opaques.",
          "Pourtant, des centaines de PME locales confient chaque jour leurs fichiers clients et leurs marges brutes a des outils gratuits sans aucune garantie contractuelle.",
          "L'IA souveraine n'est pas reservee aux gouvernements : c'est le simple bon sens d'un chef d'entreprise qui protege son fonds de commerce.",
          "La solution passe par des architectures locales ou semi-privees ou vous restez le seul proprietaire du modele et des donnees."
        ]
      },
      {
        label: "Angle Expert",
        format: "Architecture d'IA d'Entreprise",
        hook: "Comment structurer une infrastructure d'IA privee au sein d'une PME africaine en 3 couches sans budget de multinationale.",
        points: [
          "Couche 1 : Modele open-weights performant heberge localement ou sur un sous-reseau isole (zero partage des invites avec des tiers).",
          "Couche 2 : Base documentaire interne (RAG) avec indexation stricte des regles metier et des procedures internes.",
          "Couche 3 : Passerelle d'interconnexion no-code filtree ne permettant aucune ecriture directe sur la base de production sans controle d'identite."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Coup de Gueule Constructif",
        hook: "Payer des abonnements SaaS pour que d'autres s'entrainent sur vos donnees clients est la pire erreur strategique de la decennie.",
        points: [
          "Vous passez des annees a tisser un reseau de clients a Port-Gentil, Douala ou Abidjan pour finalement le livrer en pature aux serveurs de tiers.",
          "Les patrons avisés choisissent des outils auto-heberges ou prives des le depart.",
          "La souverainete n'est pas un concept theorique de colloque, c'est la valeur financiere de revente de votre entreprise."
        ]
      }
    ],
    sources: [
      {
        title: "Mistral AI Newsroom & Updates",
        domain: "mistral.ai",
        date: "08/09/2026",
        url: "https://mistral.ai/news/"
      },
      {
        title: "Power Brunch: Nigeria data sovereignty push",
        domain: "techcabal.com",
        date: "08/09/2026",
        url: "https://techcabal.com/2026/09/08/localising-nigerias-data-is-easy-building-sovereignty-is-harder/"
      },
      {
        title: "IA : ABA Technology et Atos ciblent Fusion AI",
        domain: "digitalbusiness.africa",
        date: "2026",
        url: "https://www.digitalbusiness.africa/ia-aba-technology-et-atos-ciblent-un-marche-de-1-500-milliards-de-dollars-avec-fusion-ai/"
      },
      {
        title: "Claude Opus 5 for enterprise workflows and coding agents",
        domain: "anthropic.com",
        date: "2026",
        url: "https://www.anthropic.com/news/claude-opus-5"
      },
      {
        title: "Enterprise Workflow Automation & Governed AI Agents",
        domain: "zapier.com",
        date: "2026",
        url: "https://zapier.com/blog/enterprise-workflow-automation/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_02`,
    session_id: sessionId,
    type: 'content',
    title: "La fintech a resolu le paiement en Afrique francophone : Pourquoi le prochain eldorado des PME est la digitalisation des stocks et des commandes",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'MOFU',
    score: 5,
    bridge: "Iboga Dev — Creation de plateformes legeres de prise de commande et synchronisation de stocks B2B pour distributeurs et grossistes",
    angles: [
      {
        label: "Angle Vulgarisation",
        format: "Analyse Sectorielle & Opportunites",
        hook: "Tout le monde a un compte Mobile Money dans la poche. Mais 90% des grossistes de nos capitales continuent de noter leurs commandes au stylo a bille sur des carnets volants.",
        points: [
          "Le dernier rapport TechCabal sur l'Afrique francophone met le doigt sur le paradoxe : les paiements sont fluides, mais la logistique interne reste archaique.",
          "Une PME moyenne perd entre 8% et 15% de son chiffre d'affaires annuel a cause des ruptures de stock non anticipees et des erreurs de preparation de commande.",
          "Le vrai gain de competitivite ne viendra pas d'un cinquieme bouton d'encaissement, mais d'une application legere qui connecte la commande client au depot en temps reel.",
          "Digitaliser la prise de commande B2B, c'est diviser par trois les litiges de livraison."
        ]
      },
      {
        label: "Angle Expert",
        format: "Guide d'Implementation Pratique",
        hook: "Comment mettre en place un systeme de commande et d'inventaire synchronise en moins de 10 jours sans installer de serveur lourd.",
        points: [
          "Composant 1 : Formulaire de commande client optimise pour mobile (accessible sans telechargement d'application lourde).",
          "Composant 2 : Base de donnees centrale auto-hebergee qui met a jour les quantites disponibles des la validation de la facture.",
          "Composant 3 : Notification automatique des magasiniers sur leur terminal avec ordre de preparation et bon de livraison pre-rempli."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Avis Tranche de Bâtisseur",
        hook: "Arretez de developper des applications mobiles grand public que personne n'installera : construisez des outils internes pour vos commerciaux de terrain.",
        points: [
          "Le marche B2C africain est sature et couteux en acquisition client.",
          "La vraie rentabilite se trouve dans la digitalisation des echanges entre votre entreprise et votre reseau de revendeurs.",
          "C'est sur ce terrain que se batit la prosperite industrielle."
        ]
      }
    ],
    sources: [
      {
        title: "Fintech won in Francophone Africa. Now what?",
        domain: "techcabal.com",
        date: "08/09/2026",
        url: "https://techcabal.com/2026/09/08/francophone-weekly-by-techcabal-039/"
      },
      {
        title: "Fintech et interoperabilite 2.0 : l'Afrique accelere la revolution des paiements",
        domain: "cio-mag.com",
        date: "2026",
        url: "https://cio-mag.com/fintech-et-interoperabilite-2-0-lafrique-accelere-la-revolution-des-paiements-transfrontaliers/"
      },
      {
        title: "CEMAC : GIC Rating a l'assaut du marche de la notation",
        domain: "financialafrik.com",
        date: "08/09/2026",
        url: "https://www.financialafrik.com/2026/09/08/cemac-gic-rating-a-lassaut-du-marche-de-la-notation/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_03`,
    session_id: sessionId,
    type: 'content',
    title: "Mansa AI integre 1 000 langues africaines : Comment l'IA vocale et conversationnelle va transformer le service client et les ventes des PME locales",
    account: 'agency',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'BOFU',
    score: 5,
    bridge: "Iboga Process — Mise en place d'assistants IA multilingues qualifies pour repondre automatiquement aux prospects et qualifier les demandes d'achat",
    angles: [
      {
        label: "Angle Vulgarisation",
        format: "Cas Client & Cas d'Usage",
        hook: "Et si vos clients pouvaient desormais passer commande, reclamer une facture ou connaitre la disponibilite d'un article en parlant directement en langue locale a votre assistant virtuel ?",
        points: [
          "Le lancement du projet Mansa AI montre que l'intelligence artificielle n'est plus limitee au francais standard.",
          "Dans beaucoup de secteurs (quincaillerie, distribution alimentaire, transport), les clients preferent envoyer des notes vocales plutot que de taper de longs emails.",
          "En branchant des agents conversationnels capables de transcrire et de comprendre ces notes vocales, une PME peut repondre 24h/24 sans embouteiller ses equipes.",
          "Chez Iboga Lab, nous integrons ces passerelles intelligentes pour fluidifier les ventes de nos clients."
        ]
      },
      {
        label: "Angle Expert",
        format: "Architecture du Pipeline Conversationnel",
        hook: "Le pipeline technique pour transformer une note vocale informelle en une commande validee dans votre systeme de gestion.",
        points: [
          "Etape 1 : Reception du message audio via WhatsApp Business API ou passerelle telephonique.",
          "Etape 2 : Transcription et extraction semantique des entites (nom du produit, quantite, lieu de livraison) via modele local specialise.",
          "Etape 3 : Verification automatique des stocks et generation d'une reponse vocale ou textuelle de confirmation au client.",
          "Etape 4 : Creation immediate de la fiche de commande prete pour expédition."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Positionnement Agence",
        hook: "Ceux qui attendent que l'IA soit parfaite pour s'y mettre se reveilleront dans trois ans avec des concurrents qui traitent dix fois plus de clients a effectif egal.",
        points: [
          "L'avancee technologique ne cree de valeur que pour ceux qui l'executent sur le terrain.",
          "Iboga Lab vous aide a deployer ce type de flux pragmatique des aujourd'hui.",
          "Contactez-nous pour reserver votre audit gratuit de 30 minutes et decouvrir vos opportunites d'automatisation."
        ]
      }
    ],
    sources: [
      {
        title: "This AI research company wants to put 1,000 African languages into AI",
        domain: "techcabal.com",
        date: "08/09/2026",
        url: "https://techcabal.com/2026/09/08/mansa-ai-african-languages/"
      },
      {
        title: "L'intelligence artificielle transforme le paysage financier africain",
        domain: "cio-mag.com",
        date: "2026",
        url: "https://cio-mag.com/rocky-abdoul-milingita-lintelligence-artificielle-transforme-le-paysage-financier-africain-en-particulier-dans-les-zones-a-faible-acces-bancaire/"
      },
      {
        title: "Power Brunch: Nigeria data sovereignty push",
        domain: "techcabal.com",
        date: "08/09/2026",
        url: "https://techcabal.com/2026/09/08/localising-nigerias-data-is-easy-building-sovereignty-is-harder/"
      },
      {
        title: "Claude Opus 5 for enterprise workflows and coding agents",
        domain: "anthropic.com",
        date: "2026",
        url: "https://www.anthropic.com/news/claude-opus-5"
      },
      {
        title: "Enterprise Workflow Automation & Governed AI Agents",
        domain: "zapier.com",
        date: "2026",
        url: "https://zapier.com/blog/enterprise-workflow-automation/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_04`,
    session_id: sessionId,
    type: 'content',
    title: "Les entreprises croulent sous les outils mais travaillent-elles mieux ? Le piege de l'empilement logiciel et la fatigue numerique des equipes",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'MOFU',
    score: 4,
    bridge: "Iboga Process — Audit de rationalisation des outils de travail et unification des flux dans une interface unique et legere",
    angles: [
      {
        label: "Angle Vulgarisation",
        format: "Diagnostic Organisationnel",
        hook: "Vos collaborateurs ont un compte sur Slack, deux boites mails, un tableau Trello, un groupe WhatsApp pour les urgences et un ERP pour la comptabilite. Et pourtant, personne ne sait qui fait quoi.",
        points: [
          "L'enquete de CIO Mag publiee recemment souleve la vraie question : empiler des logiciels ne rend pas une entreprise plus productive.",
          "Chaque nouvel outil ajoute un cout d'attention, un mot de passe a retenir et une friction de synchronisation.",
          "La vraie performance reside dans la reduction du nombre d'interfaces au profit d'un flux d'information continu.",
          "Moins d'outils, mais des regles de communication claires : c'est le secret des organisations qui avancent vite."
        ]
      },
      {
        label: "Angle Expert",
        format: "Methode d'Unification des Flux",
        hook: "Les 3 principes pour fusionner vos communications d'entreprise en un seul tableau de bord unifie sans perturber vos equipes.",
        points: [
          "Principe 1 : Centraliser l'entree des taches dans une source unique de verite (Single Source of Truth).",
          "Principe 2 : Bannir les consignes de travail transmises par message personnel sans ticket formalise.",
          "Principe 3 : Automatiser la remontee d'etat : le responsable est notifie sans avoir besoin de relancer trois fois par jour."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Plaidoyer Minimaliste",
        hook: "La digitalisation sauvage a cree plus de desordre bureaucratique en entreprise que l'ancien classeur papier.",
        points: [
          "Avant d'acheter une nouvelle licence logicielle, supprimez deux outils que personne ne consulte.",
          "La technologie doit simplifier la vie de vos collaborateurs, pas leur ajouter une deuxieme journee de travail administratif.",
          "La sobriete numerique est la meilleure amie de votre marge."
        ]
      }
    ],
    sources: [
      {
        title: "Les entreprises croulent sous les outils mais travaillent-elles vraiment mieux ?",
        domain: "cio-mag.com",
        date: "2026",
        url: "https://cio-mag.com/les-entreprises-croulent-sous-les-outils-mais-travaillent-elles-vraiment-mieux/"
      },
      {
        title: "Fintech won in Francophone Africa. Now what?",
        domain: "techcabal.com",
        date: "08/09/2026",
        url: "https://techcabal.com/2026/09/08/francophone-weekly-by-techcabal-039/"
      },
      {
        title: "CEMAC : GIC Rating a l'assaut du marche de la notation",
        domain: "financialafrik.com",
        date: "08/09/2026",
        url: "https://www.financialafrik.com/2026/09/08/cemac-gic-rating-a-lassaut-du-marche-de-la-notation/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_05`,
    session_id: sessionId,
    type: 'content',
    title: "De la collecte de donnees a la notation automatique : Comment evaluer la solvabilite de vos clients professionnels sans attendre les banques",
    account: 'agency',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'BOFU',
    score: 5,
    bridge: "Audit d'Opportunites IA Gratuit — Diagnostic de vos flux de donnees pour mettre en place un scoring interne de recouvrement et de fiabilite client",
    angles: [
      {
        label: "Angle Vulgarisation",
        format: "Strategie Financiere pour PME",
        hook: "L'arrivee de la notation de credit en zone CEMAC avec GIC Rating rappelle une verite brutale : le premier banquier de vos clients, c'est votre propre entreprise quand vous leur accordez des delais de paiement.",
        points: [
          "Chaque fois qu'une PME livre des marchandises avec reglement a 30 ou 60 jours sans verifier la solvabilite du client, elle prend un risque mortel.",
          "Les banques traditionnelles mettent des semaines a donner un avis de credit souvent obsolete.",
          "En exploitant l'historique de paiement reel de vos clients et les signaux operationnels, un algorithme simple peut vous alerter avant l'impaye.",
          "Chez Iboga Lab, nous aidons les directions financieres a structurer un moteur de scoring interne pour securiser leur trésorerie."
        ]
      },
      {
        label: "Angle Expert",
        format: "Systeme de Scoring Interne",
        hook: "La grille en 4 indicateurs cles pour calibrer automatiquement les plafonds d'en-cours de vos clients B2B.",
        points: [
          "Indicateur 1 : Regularite des reglements sur les 6 derniers mois (ecart moyen entre date d'echeance et encaissement effectif).",
          "Indicateur 2 : Ratio d'en-cours maximal autorise par rapport au chiffre d'affaires mensuel moyen du client.",
          "Indicateur 3 : Signaux d'alerte sectoriels (difficultes d'approvisionnement ou litiges repetes sur les bons de livraison).",
          "Indicateur 4 : Blocage automatique des nouvelles commandes des le depassement du delai de grace sans validation de la direction."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Appel a l'Action Iboga Lab",
        hook: "Vendre beaucoup ne sert a rien si vous passez vos vendredis a courir apres des cheques en bois.",
        points: [
          "Un client qui ne paie pas n'est pas un client : c'est un cout de stockage ambulant.",
          "L'automatisation et le scoring de credit protegent votre entreprise contre les faillites en cascade.",
          "Reservez votre audit d'opportunites gratuit pour securiser votre tresorerie des aujourd'hui."
        ]
      }
    ],
    sources: [
      {
        title: "CEMAC : GIC Rating a l'assaut du marche de la notation",
        domain: "financialafrik.com",
        date: "08/09/2026",
        url: "https://www.financialafrik.com/2026/09/08/cemac-gic-rating-a-lassaut-du-marche-de-la-notation/"
      },
      {
        title: "L'intelligence artificielle transforme le paysage financier africain",
        domain: "cio-mag.com",
        date: "2026",
        url: "https://cio-mag.com/rocky-abdoul-milingita-lintelligence-artificielle-transforme-le-paysage-financier-africain-en-particulier-dans-les-zones-a-faible-acces-bancaire/"
      },
      {
        title: "Kenya Flowt raises pre-seed for automated loan book",
        domain: "techcabal.com",
        date: "08/09/2026",
        url: "https://techcabal.com/2026/09/08/flowt-raises-pre-seed-targets-1mn-loan-nook/"
      },
      {
        title: "Claude Opus 5 for enterprise workflows and coding agents",
        domain: "anthropic.com",
        date: "2026",
        url: "https://www.anthropic.com/news/claude-opus-5"
      },
      {
        title: "Enterprise Workflow Automation & Governed AI Agents",
        domain: "zapier.com",
        date: "2026",
        url: "https://zapier.com/blog/enterprise-workflow-automation/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_06`,
    session_id: sessionId,
    type: 'content',
    title: "La souverainete des donnees en Afrique : Pourquoi heberger un serveur local ne suffit pas si vos processus dependent d'un seul operateur etranger",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'MOFU',
    score: 4,
    bridge: "Iboga Process — Conception d'architectures techniques resilients et auto-hebergees sous open source pour PME critiques",
    angles: [
      {
        label: "Angle Vulgarisation",
        format: "Reflexion Strategique & Infrastructures",
        hook: "Construire un centre de donnees sur son sol national, c'est bien. Mais si le logiciel qui tourne dessus peut etre coupe a distance d'un simple clic a l'autre bout du monde, ou est votre souverainete ?",
        points: [
          "L'analyse de TechCabal sur le Nigeria met en lumiere une realite cruelle : localiser physiquement des disques durs ne garantit pas l'independance numerique.",
          "La vraie souverainete repose sur la maitrise du code, l'utilisation de protocoles ouverts et la capacite a faire tourner ses operations meme en cas de coupure externe.",
          "Les PME doivent concevoir leurs systemes critiques avec des briques modulaires qui ne les enferment pas chez un fournisseur unique.",
          "La resilience commence par la diversite technique."
        ]
      },
      {
        label: "Angle Expert",
        format: "Cahier des Charges de Resilience",
        hook: "Les 3 regles d'or pour proteger les operations de votre entreprise contre le verrouillage technologique (vendor lock-in).",
        points: [
          "Regle 1 : Sauvegarde locale quotidienne exportable dans des formats ouverts standards (SQL, CSV, JSON).",
          "Regle 2 : Utilisation d'outils d'orchestration open-source deployables sur n'importe quel hebergeur en quelques heures.",
          "Regle 3 : Plan de reprise d'activite (PRA) teste semestriellement avec bascule en mode autonome hors-ligne."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Prise de Position Politique & Business",
        hook: "La dependance technologique est la forme moderne de la sous-traitance subie. Les leaders de demain sont ceux qui construisent leur autonomie.",
        points: [
          "Attendre que des solutions toutes faites arrivent de l'exterieur maintient nos economies dans une posture de simples consommateurs.",
          "L'Afrique a les ingenieurs et les developpeurs pour maitriser ses systemes.",
          "Construisons des architectures fiables et maitrisees sur notre sol."
        ]
      }
    ],
    sources: [
      {
        title: "Power Brunch: Nigeria data sovereignty push",
        domain: "techcabal.com",
        date: "08/09/2026",
        url: "https://techcabal.com/2026/09/08/localising-nigerias-data-is-easy-building-sovereignty-is-harder/"
      },
      {
        title: "Les entreprises croulent sous les outils mais travaillent-elles vraiment mieux ?",
        domain: "cio-mag.com",
        date: "2026",
        url: "https://cio-mag.com/les-entreprises-croulent-sous-les-outils-mais-travaillent-elles-vraiment-mieux/"
      },
      {
        title: "Fintech won in Francophone Africa. Now what?",
        domain: "techcabal.com",
        date: "08/09/2026",
        url: "https://techcabal.com/2026/09/08/francophone-weekly-by-techcabal-039/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_07`,
    session_id: sessionId,
    type: 'content',
    title: "Le mythe du management par le temps passe : Pourquoi mesurer le presentiel en entreprise tue la responsabilite et fait fuir les meilleurs profils",
    account: 'personal',
    pillar: 'builder',
    pillar_label: 'Parcours Builder',
    funnel: 'TOFU',
    score: 4,
    bridge: "Audit d'Opportunites IA Gratuit — Session de cadrage pour liberer vos managers des micro-taches de controle et instaurer une culture du livrable mesurable",
    angles: [
      {
        label: "Angle Vulgarisation",
        format: "Manifeste Management & Culture Builder",
        hook: "Voir un employe assis devant son bureau pendant 8 heures ne signifie pas qu'il a produit de la valeur. Le management par les fesses sur la chaise est le plus grand gaspillage de potentiel en Afrique.",
        points: [
          "Trop d'entreprises locales confondent encore la fatigue et le temps passe avec l'efficacite reelle.",
          "Dans un monde ou l'automatisation permet d'executer en 20 minutes ce qui prenait une journee entiere, evaluer un collaborateur a ses heures de presence est un non-sens.",
          "Ce qui compte, c'est le livrable : le dossier est-il clos ? La commande est-elle expediee ? Le client est-il satisfait ?",
          "Passer du controle horaire a la culture du resultat transforme immediatement l'ambiance et la rentabilite d'une equipe."
        ]
      },
      {
        label: "Angle Expert",
        format: "Cadre de Transition vers la Culture du Livrable",
        hook: "Comment basculer votre equipe d'une obligation de presence a une obligation de livrable en 3 etapes claires.",
        points: [
          "Etape 1 : Definir pour chaque poste 3 indicateurs de livrables tangibles mesurables chaque fin de semaine.",
          "Etape 2 : Mettre en place des rituels asynchrones courts (point hebdomadaire de 15 minutes sur les blocages, pas de reunionite).",
          "Etape 3 : Recompenser la vitesse et l'efficience : celui qui termine sa tache en 4 heures sans faute doit etre valorise, pas puni avec du travail supplementaire non planifie."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Debat & Conviction Personnelle",
        hook: "Si vous devez surveiller vos salaries comme des enfants pour qu'ils travaillent, vous n'avez pas un probleme de personnel : vous avez un probleme de recrutement et de vision.",
        points: [
          "La confiance et la responsabilite sont les deux piliers des equipes performantes.",
          "Donnez des objectifs nets, donnez les outils d'automatisation adaptes, et jugez sur les resultats tangibles.",
          "Les batisseurs n'ont pas besoin de surveillants, ils ont besoin de defis."
        ]
      }
    ],
    sources: [
      {
        title: "Les entreprises croulent sous les outils mais travaillent-elles vraiment mieux ?",
        domain: "cio-mag.com",
        date: "2026",
        url: "https://cio-mag.com/les-entreprises-croulent-sous-les-outils-mais-travaillent-elles-vraiment-mieux/"
      },
      {
        title: "Power Brunch: Nigeria data sovereignty push",
        domain: "techcabal.com",
        date: "08/09/2026",
        url: "https://techcabal.com/2026/09/08/localising-nigerias-data-is-easy-building-sovereignty-is-harder/"
      },
      {
        title: "Fintech won in Francophone Africa. Now what?",
        domain: "techcabal.com",
        date: "08/09/2026",
        url: "https://techcabal.com/2026/09/08/francophone-weekly-by-techcabal-039/"
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
        console.log(`✓ Inserted [${item.type}]: ${item.title.substring(0, 60)}...`);
      }
    }
    console.log('All insertions completed successfully into Supabase!');
  } catch (err) {
    console.error('Fatal error during insertion:', err);
    process.exit(1);
  }
}

insertAll();

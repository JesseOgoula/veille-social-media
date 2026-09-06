import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://igicdrrdlambscodmaxi.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnaWNkcnJkbGFtYnNjb2RtYXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NjMwMjUsImV4cCI6MjEwMzQzOTAyNX0.puTkc1j7BI0-dKkAL1rRtN7_XwywOS77enlEgcZBHf4';
const supabase = createClient(supabaseUrl, supabaseKey);

const sessionId = 'sess_20260906_111500';
const sessionDate = '2026-09-06';
const weekLabel = 'Semaine du 06 Septembre 2026';
const generatedAt = new Date().toISOString();

const sessionData = {
  id: sessionId,
  date: sessionDate,
  generated_at: generatedAt,
  week_label: weekLabel,
  newsjacking: {
    title: "Orchestration d'agents durables et financements transfrontaliers : La structuration industrielle de la tech africaine et mondiale"
  }
};

const newsItems = [
  {
    id: `idea_${sessionId}_news01`,
    session_id: sessionId,
    type: 'news',
    title: "Mistral AI devoile Workflows et Forge : L'orchestration d'agents d'entreprise durables et le respect des regles metier internes",
    account: 'personal',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Process — Deploiement d'architectures d'automatisation deterministes et de regles metier robustes garantissant la confidentialite des donnees d'entreprise",
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualite court",
        hook: "L'intelligence artificielle en entreprise ne se limite plus a des invites isolees : elle s'industrialise sous forme de flux coordonnes. Mistral AI vient d'officialiser Workflows et Forge.",
        points: [
          "Mistral AI ouvre en apercu public sa couche d'orchestration d'entreprise Workflows concue pour assurer la tolerance aux pannes et la continuite des executions critiques.",
          "La plateforme introduit Forge, un environnement dedie a la creation d'agents specialises capables d'appliquer scrupuleusement les regles de conformite et les procedures internes.",
          "Cette avancee majeure permet aux organisations de connecter leurs modeles locaux ou souverains directement a leurs systemes d'information sans dependre d'un tiers opaque.",
          "Pour les dirigeants de PME, cela signifie la fin du bricolage de prompts au profit de pipelines de traitement durables et auditables."
        ]
      }
    ],
    sources: [
      {
        title: "Mistral Workflows : Enterprise AI Orchestration Layer",
        domain: "mistral.ai",
        date: "04/09/2026",
        url: "https://mistral.ai/news/workflows/"
      },
      {
        title: "Mistral AI Newsroom & Product Updates",
        domain: "mistral.ai",
        date: "04/09/2026",
        url: "https://mistral.ai/news/"
      },
      {
        title: "L'actualite de la transformation digitale et des technologies d'entreprise",
        domain: "lemagit.fr",
        date: "04/09/2026",
        url: "https://www.lemagit.fr/"
      }
    ],
    drafted_post: "OBSERVATOIRE TECH : L'intelligence artificielle d'entreprise quitte l'ere du prompt artisanal pour entrer dans l'ere de l'orchestration industrielle.\n\nCe qui s'est passe :\nMistral AI vient d'ouvrir en apercu public ses deux nouvelles briques majeures : Workflows et Forge. Concretement, il ne s'agit plus de discuter avec un modele dans une fenetre de chat, mais d'orchestrer des agents capables de suivre pas a pas les procedures operationnelles standard d'une entreprise avec une gestion stricte des erreurs et des etats.\n\nPourquoi c'est un tournant pour les directions d'entreprise :\nJusqu'a present, 80% des deploiements d'agents echouaient parce qu'une perte de connexion ou une reponse imprevue bloquait tout le processus. En introduisant une couche de persistance et de tolerance aux pannes, les organisations peuvent desormais automatiser des taches complexes sans craindre qu'un robot ne perde le fil a la cinquieme etape.\n\nMon avis de praticien :\nCe mouvement confirme ce que nous constatons sur le terrain chez Iboga Lab : la valeur d'un agent IA ne reside pas dans son eloquence, mais dans la solidite du pipeline deterministe qui l'encadre. Avant d'acheter un outil d'agent, formalisez vos regles d'entreprise. Un modele bien cadre execute parfaitement ; un modele sans garde-fous industrialise le desordre.\n\nVos procedures internes sont-elles suffisamment claires pour etre confiees a un flux automatise ?\n\n#IntelligenceArtificielle #Productivite #TransformationDigitale #ProcessusMetier #IbogaLab"
  },
  {
    id: `idea_${sessionId}_news02`,
    session_id: sessionId,
    type: 'news',
    title: "Nomba securise 3 millions de dollars en dette aupres de CardinalStone pour fluidifier les reglements commerciaux entre l'Afrique Centrale et l'Asie",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Process — Optimisation des passerelles d'encaissement et automatisation du rapprochement bancaire pour PME importatrices",
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualite court",
        hook: "Le commerce transfrontalier africain franchit un cap operationnel decisif. La fintech Nomba vient de securiser 3 millions de dollars pour accelerer les reglements internationaux en Afrique Centrale.",
        points: [
          "Nomba a obtenu une ligne de credit de 3 millions de dollars aupres de CardinalStone Finance pour renforcer sa tresorerie en dollars.",
          "Ce financement cible specifiquement la fluidification des flux commerciaux entre la Republique Democratique du Congo et les places commerciales d'Asie.",
          "L'entreprise traite deja plus de 480 millions de dollars de transactions transfrontalieres mensuelles et vise le cap du milliard de dollars.",
          "Pour les PME de la sous-region, la reduction des delais de compensation bancaire constitue un levier vital d'allegement du besoin en fonds de roulement."
        ]
      }
    ],
    sources: [
      {
        title: "Nomba secures 3m debt facility to expand Africa Asia cross border payments",
        domain: "businessday.ng",
        date: "04/09/2026",
        url: "https://businessday.ng/news/article/nomba-secures-3m-debt-facility-to-expand-africa-asia-cross-border-payments/"
      },
      {
        title: "Nomba 3M debt CardinalStone Finance DRC",
        domain: "thecondia.com",
        date: "04/09/2026",
        url: "https://thecondia.com/nomba-3m-debt-cardinalstone-finance-drc/"
      },
      {
        title: "Nomba raises 3m debt cross border payments",
        domain: "weetracker.com",
        date: "03/09/2026",
        url: "https://weetracker.com/2026/09/03/nomba-raises-3m-debt-cross-border-payments/"
      }
    ],
    drafted_post: "OBSERVATOIRE TECH : Le nerf de la guerre pour les entreprises importatrices et commercantes en Afrique ne reside pas dans le marketing, mais dans la rapidite de reglement des fournisseurs.\n\nCe qui s'est passe :\nLa fintech Nomba vient de securiser une facilite de dette de 3 millions de dollars aupres de CardinalStone Finance. L'objectif est direct : fournir de la liquidite en devises pour accelerer les compensations et paiements transfrontaliers entre l'Afrique Centrale (avec la RDC comme hub) et les corridors asiatiques.\n\nPourquoi c'est capital pour les PME de notre region :\nTout importateur ou logisticien le sait : voir des marchandises bloquees au port ou chez le fournisseur pendant dix jours a cause de lenteurs de virement interbancaire detruit la marge operationnelle. Quand les infrastructures fintech raccourcissent les delais de reglement a quelques minutes, c'est l'ensemble du cycle d'exploitation qui respire.\n\nMon avis de praticien :\nLa digitalisation des paiements n'a de sens que si elle est connectee a la comptabilite interne de l'entreprise. Traiter des millions en flux transfrontaliers avec des rapprochements manuels sur tableurs Excel expose a des ecarts de tresorerie majeurs. L'avenir appartient aux entreprises qui interconnectent leurs canaux de paiement directement avec leurs outils de gestion.\n\nCombien de jours votre entreprise met-elle en moyenne pour regler un fournisseur etroitement lie a l'international ?\n\n#Fintech #AfriqueCentrale #Tresorerie #CommerceTransfrontalier #IbogaLab"
  },
  {
    id: `idea_${sessionId}_news03`,
    session_id: sessionId,
    type: 'news',
    title: "Modernisation numerique au Gabon : Partenariat IA avec Presight et plan strategique DGI pour securiser 600 millions de dollars de recettes",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Learn & Process — Acculturation des equipes financieres et mise en conformite des flux d'entreprises locales face aux nouvelles exigences fiscales numeriques",
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualite court",
        hook: "L'administration fiscale et publique gabonaise accelere sa bascule vers le numerique de masse. Les PME du pays doivent anticiper cette mise en conformite des flux.",
        points: [
          "Le Gabon a scelle un partenariat strategique avec la firme emiratie Presight pour integrer des solutions d'analyse de donnees et d'IA dans les services publics.",
          "Parallelement, la Direction Generale des Impots deploie ses plateformes numeriques afin de mobiliser plus de 600 millions de dollars de recettes non petrolieres supplementaires.",
          "La tracabilite numerique des transactions et l'interconnexion des bases de donnees deviennent la norme de controle pour les societes operees sur le territoire gabonais.",
          "Les entreprises dont la comptabilite et la facturation reposent encore sur des classeurs papier risquent des blocages administratifs severes."
        ]
      }
    ],
    sources: [
      {
        title: "Gabon : une societe emiratie specialisee dans l'IA pour moderniser le service public",
        domain: "digitalbusiness.africa",
        date: "2026",
        url: "https://www.digitalbusiness.africa/gabon-une-societe-emiratie-specialisee-dans-l-ia-pour-moderniser-le-service-public-plutot-quune-solution-africaine/"
      },
      {
        title: "Gabon : Digitalization to improve tax revenues by 606 million USD in four years",
        domain: "financialafrik.com",
        date: "11/07/2026",
        url: "https://www.financialafrik.com/en/2026/07/11/gabon-digitalization-to-improve-tax-revenues-by-606-million-usd-in-four-years/"
      },
      {
        title: "Actualite de la gouvernance numerique et des DSI en Afrique",
        domain: "cio-mag.com",
        date: "2026",
        url: "https://cio-mag.com/"
      }
    ],
    drafted_post: "OBSERVATOIRE TECH : La digitalisation de l'Etat gabonais n'est plus un projet d'avenir lointain : c'est un imperatif comptable immediat pour toutes nos PME.\n\nCe qui se passe :\nEntre l'accord strategique conclu avec Presight pour doter les administrations publiques d'outils d'analytique et le plan strategique de la Direction Generale des Impots visant 600 millions de dollars de recettes supplementaires, le Gabon formalise l'interconnexion numerique de ses services.\n\nPourquoi chaque dirigeant doit reagir des maintenant :\nQuand l'administration fiscale digitalise ses controles, la tolerance pour les ecarts de factures, les retards de declarations et les justificatifs perdus tombe a zero. Ce qui prenait des mois d'echange de courriers papier est desormais audite de maniere quasi instantanee par des plateformes numeriques.\n\nMon avis de praticien :\nNe subissez pas la digitalisation comme une contrainte punitive imposee par l'Etat. Utilisez cette transition pour structurer vos propres flux internes : facturation electronique normalisee, archivage numerique securise et rapprochement automatique. Une entreprise fiscalement et operationnellement transparente est une entreprise qui dort tranquille et qui bancarise plus facilement ses projets.\n\nVotre systeme de facturation interne est-il pret pour le controle fiscal 100% digital ?\n\n#Gabon #TransformationDigitale #Fiscalite #PME #Gouvernance #IbogaLab"
  }
];

const contentIdeas = [
  {
    id: `idea_${sessionId}_01`,
    session_id: sessionId,
    type: 'content',
    title: "Pourquoi 72% des entreprises testent des agents IA mais butent sur l'absence de memoire et de regles metier claires",
    account: 'personal',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'MOFU',
    score: 5,
    bridge: "Iboga Process — Cartographie prealable des flux operationnels et mise en place d'architectures d'automatisation deterministes avant l'autonomie",
    angles: [
      {
        label: "Angle Vulgarisation",
        format: "Post Educatif / Carrousel",
        hook: "Acheter un agent IA sans avoir formalise ses regles d'entreprise revient a embaucher un stagiaire brilliant mais amnesique toutes les cinq minutes.",
        points: [
          "72% des directions d'entreprise declarent tester des agents intelligents selon l'enquete Zapier 2026.",
          "Pourtant, moins d'un projet sur cinq atteint la production en raison de blocages sur la memoire contextuelle et la precision des reponses.",
          "L'agent ne devine rien : s'il n'a pas acces a une base de connaissances a jour et a des consignes nettes, il invente.",
          "La cle consiste a separer ce qui releve de la regle stricte (code) de ce qui releve de la deduction souple (IA)."
        ]
      },
      {
        label: "Angle Expert",
        format: "Guide Technique et Methodologique",
        hook: "L'ere des LLM sans etat est revolue : voici l'architecture de memoire minimale indispensable pour qu'un agent soit utile en PME.",
        points: [
          "Composant 1 : Memoire de travail courte pour maintenir le contexte du dossier en cours sans saturer les fenetres de contexte.",
          "Composant 2 : Base documentaire vectorielle (RAG) verifiee avec suppression des fichiers obsoletes.",
          "Composant 3 : Registre d'audit deterministe consignant chaque action d'ecriture pour eviter les effets de bord dans vos logiciels metier."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Coup de Gueule Constructif",
        hook: "Arretez de chercher le robot miracle : vous n'avez pas un probleme d'IA, vous avez un probleme de clarte operationnelle.",
        points: [
          "Si vos managers ne sont pas capables de decrire leur processus en trois etapes chronologiques, aucun modele de langage ne resoudra le chaos.",
          "L'intelligence artificielle est un accelerateur : elle accelere vos forces ou elle amplifie instantanement vos desordres.",
          "Avant de parler d'agents autonomes, formalisez vos procedures operationnelles standard."
        ]
      }
    ],
    sources: [
      {
        title: "State of AI Agents in Enterprise Survey 2026",
        domain: "zapier.com",
        date: "2026",
        url: "https://zapier.com/blog/ai-agents-survey/"
      },
      {
        title: "Mistral Workflows : Enterprise AI Orchestration Layer",
        domain: "mistral.ai",
        date: "04/09/2026",
        url: "https://mistral.ai/news/workflows/"
      },
      {
        title: "Actualite de la transformation digitale et des technologies d'entreprise",
        domain: "lemagit.fr",
        date: "04/09/2026",
        url: "https://www.lemagit.fr/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_02`,
    session_id: sessionId,
    type: 'content',
    title: "Le goulot d'etranglement de la facturation en PME : Comment recuperer 12 heures par semaine sans embaucher d'assistant supplementaire",
    account: 'company',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'BOFU',
    score: 5,
    bridge: "Audit d'opportunites IA gratuit (30 min) Iboga Lab — Diagnostic sans engagement des flux administratifs et suppressions des saisies manuelles",
    angles: [
      {
        label: "Angle Etude de Cas",
        format: "Post Chiffre Avant / Apres",
        hook: "Ce directeur de societe de services pensait devoir recruter d'urgence un charge administratif pour traiter les devis en retard. 30 minutes de diagnostic ont suffi a inverser la situation.",
        points: [
          "Situation initiale : 14 heures passees par semaine a ressaisir manuellement des bons de commande WhatsApp dans des devis Word et tableurs.",
          "Diagnostic Iboga Lab : Mise en evidence d'un goulot d'etranglement concentre sur la transcription et l'envoi des validations.",
          "Mise en oeuvre : Pipeline leger de capture automatique et generation de devis normalises en un clic.",
          "Resultat mesure : 12 heures hebdomadaires liberees et un delai de transmission client ramene de 48 heures a 15 minutes."
        ]
      },
      {
        label: "Angle Diagnostique",
        format: "Grille d'Auto-Evaluation pour Dirigeant",
        hook: "Voici les 3 signes infaillibles que votre service administratif est sature par du travail a valeur ajoutee nulle.",
        points: [
          "Signe 1 : Des informations recues par message vocal ou email sont recopies a la main dans un logiciel de facturation.",
          "Signe 2 : Vos relances d'impayes dependent de la memoire d'un collaborateur plutot que d'un declencheur automatique calendrier.",
          "Signe 3 : Votre comptable consacre plus de temps a chercher des pieces manquantes qu'a analyser votre tresorerie."
        ]
      },
      {
        label: "Angle ROI",
        format: "Post Financier Pragmatique",
        hook: "Combien vous coute reellement la saisie manuelle de documents chaque mois ?",
        points: [
          "A raison de 2 heures perdues par jour pour deux collaborateurs, ce sont 80 heures mensuelles payees pour du copier-coller.",
          "Rapportez cela au salaire brut charge : vous depensez l'equivalent d'une prestation d'automatisation complete tous les deux mois.",
          "L'automatisation n'est pas une depense technologique de confort, c'est un arret immediat de gaspillage de tresorerie."
        ]
      }
    ],
    sources: [
      {
        title: "Digitalisation to improve tax revenues by 606 million USD in four years",
        domain: "financialafrik.com",
        date: "11/07/2026",
        url: "https://www.financialafrik.com/en/2026/07/11/gabon-digitalization-to-improve-tax-revenues-by-606-million-usd-in-four-years/"
      },
      {
        title: "State of AI Agents in Enterprise Survey 2026",
        domain: "zapier.com",
        date: "2026",
        url: "https://zapier.com/blog/ai-agents-survey/"
      },
      {
        title: "Actualite de la gouvernance numerique et des DSI en Afrique",
        domain: "cio-mag.com",
        date: "2026",
        url: "https://cio-mag.com/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_03`,
    session_id: sessionId,
    type: 'content',
    title: "WhatsApp comme colonne vertebrale de l'economie africaine : Pourquoi les PME gagnent sur le conversationnel avant les ERP",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 4,
    bridge: "Iboga Dev & Process — Raccordement de WhatsApp Business aux bases de donnees internes pour eviter le piege de la terre louee",
    angles: [
      {
        label: "Angle Sociologique & Terrain",
        format: "Post d'Analyse Economique",
        hook: "En Afrique, WhatsApp n'est pas une application de messagerie de loisir : c'est le veritable systeme d'exploitation du commerce formel et informel.",
        points: [
          "De la prise de commande a la negociation en passant par l'envoi de coordonnees bancaires, tout transite par des fils de discussion et des vocaux.",
          "L'ergonomie zero barriere et la familiarite culturelle ont balaye les portails web complexes et les formulaires rigides.",
          "Les entreprises qui imposent des process lourds a leurs clients perdent le contact avec la realite du marche local."
        ]
      },
      {
        label: "Angle Risque Strategique",
        format: "Avertissement Dirigeant",
        hook: "Le piege mortel du tout-WhatsApp : batir votre empire commercial sur une terre louee dont vous ne possedez pas les cles.",
        points: [
          "Si l'ensemble de votre portefeuille client et de votre historique de vente reside uniquement dans des telephones personnels, vous etes vulnerables.",
          "Un compte suspendu, un smartphone egare ou un depart de commercial emporte instantanement des mois de travail.",
          "La reponse n'est pas d'abandonner WhatsApp, mais de brancher des passerelles automatiques pour synchroniser chaque prospect dans votre base de donnees centrale."
        ]
      },
      {
        label: "Angle Automatisation",
        format: "Guide Pratique d'Interconnexion",
        hook: "Comment transformer votre WhatsApp d'entreprise en terminal de vente synchronise en temps reel avec votre stock.",
        points: [
          "Etape 1 : Normaliser les libelles de vos catalogues et integrer les reponses automatiques d'orientation.",
          "Etape 2 : Extraire par IA les intentions d'achat contenues dans les messages vocaux des clients.",
          "Etape 3 : Creer automatiquement la commande dans votre tableau de bord sans aucune saisie humaine."
        ]
      }
    ],
    sources: [
      {
        title: "Nomba secures 3m debt facility to expand cross border trade",
        domain: "businessday.ng",
        date: "04/09/2026",
        url: "https://businessday.ng/news/article/nomba-secures-3m-debt-facility-to-expand-africa-asia-cross-border-payments/"
      },
      {
        title: "Techpoint Digest : Africa Fintech and Trade Infrastructure",
        domain: "techpoint.africa",
        date: "04/09/2026",
        url: "https://techpoint.africa/insight/techpoint-digest-1425/"
      },
      {
        title: "Disrupt Africa Startup Ecosystem Coverage",
        domain: "disrupt-africa.com",
        date: "04/09/2026",
        url: "https://disrupt-africa.com/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_04`,
    session_id: sessionId,
    type: 'content',
    title: "Claude for Small Business et automatisation comptable : L'IA au service de QuickBooks, factures et relances sans ecrire une ligne de code",
    account: 'company',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'MOFU',
    score: 5,
    bridge: "Iboga Learn — Ateliers pratiques sur mesure pour rendre les equipes financieres et administratives autonomes sur les outils IA du quotidien",
    angles: [
      {
        label: "Angle Pratique",
        format: "Tutoriel d'Usage en Entreprise",
        hook: "Anthropic vient d'ouvrir Claude aux petites entreprises avec des connecteurs prets a l'emploi pour vos outils comptables habituels.",
        points: [
          "Integration directe sans competence en developpement avec QuickBooks, HubSpot et la suite bureautique Microsoft.",
          "Capacite a scanner des dossiers de pieces justificatives, detecter les incoherences de montants et generer les ecritures de pre-comptabilite.",
          "Preparation automatique des campagnes de relance client personnalisees selon l'anciennete de la dette."
        ]
      },
      {
        label: "Angle Securite & Gouvernance",
        format: "Post Cadre et Conformite",
        hook: "Peut-on confier des donnees comptables d'entreprise a un assistant IA sans violer le secret commercial ?",
        points: [
          "Les clauses professionnelles d'Anthropic garantissent l'absence d'entrainement des modeles sur vos donnees privees.",
          "Importance de segmenter les acces : les donnees salariales et confidentielles doivent rester cloisonnees.",
          "Former les collaborateurs au respect des regles de confidentialite est la premiere condition de succes."
        ]
      },
      {
        label: "Angle Productivite Equipe",
        format: "Transformation RH & Metier",
        hook: "L'intelligence artificielle ne supprime pas le comptable : elle le libere enfin du role ingrat de scanner vivant.",
        points: [
          "Un comptable consacre historiquement 60% de son energie a verifier des chiffres et chasser les factures manquantes.",
          "Avec l'IA d'extraction, il redevient un conseiller financier au service du dirigeant pour anticiper la tresorerie.",
          "Former ses collaborateurs a ces outils est le meilleur investissement de retention des talents."
        ]
      }
    ],
    sources: [
      {
        title: "Claude for Small Business : Automating Core Business Operations",
        domain: "anthropic.com",
        date: "2026",
        url: "https://www.anthropic.com/news/claude-for-small-business"
      },
      {
        title: "State of AI Agents in Enterprise Survey 2026",
        domain: "zapier.com",
        date: "2026",
        url: "https://zapier.com/blog/ai-agents-survey/"
      },
      {
        title: "Actualite de la transformation digitale et des technologies d'entreprise",
        domain: "lemagit.fr",
        date: "04/09/2026",
        url: "https://www.lemagit.fr/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_05`,
    session_id: sessionId,
    type: 'content',
    title: "Du droit a l'intelligence artificielle appliquee : Pourquoi la rigueur des regles juridiques est le meilleur atout pour concevoir des systemes fiables",
    account: 'personal',
    pillar: 'builder',
    pillar_label: 'Parcours Builder',
    funnel: 'TOFU',
    score: 4,
    bridge: "Aucun pitch commercial direct — Humanisation, posture de mentor praticien et transmission d'experience sur l'execution terrain",
    angles: [
      {
        label: "Angle Storytelling",
        format: "Post Parcours Personnel",
        hook: "Quand j'ai quitte le milieu du droit pour plonger dans la logistique de terrain puis dans la tech, beaucoup ont pense que je perdais mon temps.",
        points: [
          "Le droit ne m'a pas seulement appris des codes d'articles : il m'a appris la structure de la logique formelle et la gestion stricte des exceptions.",
          "Sur le terrain a Port-Gentil, gerer des stocks et des flux m'a montre que si un processus comporte une faille, la realite le detruit sans pitie.",
          "Aujourd'hui, quand je conçois des workflows d'automatisation et forme des professionnels a l'IA, j'applique exactement la meme rigueur."
        ]
      },
      {
        label: "Angle Vision / Competences",
        format: "Manifeste Builder",
        hook: "L'IA n'appartient pas aux mathematiciens qui creent les modeles : elle appartient a ceux qui savent traduire un probleme metier en regles claires.",
        points: [
          "La redaction d'un prompt d'entreprise repond exactement aux memes exigences que la redaction d'un contrat commercial.",
          "Chaque ambiguite dans les instructions produit un litige avec votre modele de langage.",
          "Ne complexez jamais si vous venez d'une filiere litteraire, juridique ou operationnelle : vous possedez deja les competences de cadrage indispensables."
        ]
      },
      {
        label: "Angle Transmission",
        format: "Conseil Carriere & Mentorat",
        hook: "Aux plus de 300 talents que j'ai eu la chance d'accompagner : voici pourquoi votre parcours non conventionnel est votre force.",
        points: [
          "Les entreprises n'ont pas besoin de theorie pure : elles cherchent des profils capables de resoudre des goulots d'etranglement reels.",
          "On n'attend pas la prochaine revolution technologique assis dans un bureau : on la build chaque jour sur le terrain.",
          "Prenez un probleme concret, creez un flux qui fonctionne et mesurez l'impact."
        ]
      }
    ],
    sources: [
      {
        title: "Actualite de la gouvernance numerique et des DSI en Afrique",
        domain: "cio-mag.com",
        date: "2026",
        url: "https://cio-mag.com/"
      },
      {
        title: "Digital Business Africa Coverage",
        domain: "digitalbusiness.africa",
        date: "2026",
        url: "https://www.digitalbusiness.africa/"
      },
      {
        title: "Techpoint Digest : Talent and Tech Ecosystem",
        domain: "techpoint.africa",
        date: "04/09/2026",
        url: "https://techpoint.africa/insight/techpoint-digest-1425/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_06`,
    session_id: sessionId,
    type: 'content',
    title: "Du mode Projet au mode Produit : Comment transformer une prestation de service artisanale en une machine scalable et industrialisee",
    account: 'company',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'BOFU',
    score: 5,
    bridge: "Iboga Process & Iboga Dev — Accompagnement produit et developpement de modules logiciels internes dedies aux PME africaines",
    angles: [
      {
        label: "Angle Strategique",
        format: "Framework d'Organisation d'Entreprise",
        hook: "Pourquoi tant de prestataires et d'agences en Afrique travaillent 14 heures par jour sans jamais reussir a faire grandir leur entreprise ?",
        points: [
          "Le piege du mode Projet : chaque contrat commence a partir d'une page blanche, le livrable est livre, on est paye et on recommence a zero le lendemain.",
          "L'atout du mode Produit : capitaliser sur chaque mission pour creer un composant standard, un gabarit ou un pipeline logiciel reutilisable.",
          "Passer du temps vendu a la valeur industrielle livree est la seule trajectoire pour doubler son chiffre d'affaires sans doubler sa charge de travail."
        ]
      },
      {
        label: "Angle Pratique",
        format: "Plan d'Action en 3 Etapes",
        hook: "Comment transformer votre savoir-faire de societe de services en une offre packagee et reproductible.",
        points: [
          "Etape 1 : Identifier la tache commune a 80% de vos interventions et la documenter au cordeau.",
          "Etape 2 : Automatiser les 50% de traitement administratif ou de calcul qui ne necessitent aucun arbitrage humain.",
          "Etape 3 : Vendre le resultat garanti plutot que les heures passees sur le dossier."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Mise en Garde Commerciale",
        hook: "Etre fier de proposer du sur-mesure a tous vos clients est la plus belle excuse pour masquer votre incapacite a industrialiser vos processus.",
        points: [
          "Le sur-mesure artisanal plait au client mais ruine la rentabilite de la societe.",
          "Les clients paient pour une solution rapide et fiable, pas pour vos hesitations de conception.",
          "Standardisez le socle technique, personnalisez uniquement la relation humaine."
        ]
      }
    ],
    sources: [
      {
        title: "Digitalisation to improve tax revenues by 606 million USD in four years",
        domain: "financialafrik.com",
        date: "11/07/2026",
        url: "https://www.financialafrik.com/en/2026/07/11/gabon-digitalization-to-improve-tax-revenues-by-606-million-usd-in-four-years/"
      },
      {
        title: "Actualite de la gouvernance numerique et des DSI en Afrique",
        domain: "cio-mag.com",
        date: "2026",
        url: "https://cio-mag.com/"
      },
      {
        title: "Disrupt Africa Startup and Business Models",
        domain: "disrupt-africa.com",
        date: "04/09/2026",
        url: "https://disrupt-africa.com/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_07`,
    session_id: sessionId,
    type: 'content',
    title: "La formule PIQPACC en entreprise : Le protocole en 7 etapes pour obtenir des livrables exploitables des le premier prompt",
    account: 'personal',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'MOFU',
    score: 4,
    bridge: "Iboga Learn — Distribution du framework exclusif de prompts metier pour managers, RH et responsables des operations",
    angles: [
      {
        label: "Angle Pedagogique",
        format: "Fiche Pratique & Decorticage",
        hook: "Si votre assistant IA vous renvoie des reponses vagues ou hors-sol, cessez de lui reprocher son manque d'intelligence. Voici la formule PIQPACC.",
        points: [
          "P comme Persona : Definir precisement le role et le niveau de seniorite attendu.",
          "I comme Instruction : Formuler le verbe d'action principal sans circonlocution.",
          "Q comme Qualite / Contexte : Fournir les donnees du dossier et le cadre de travail.",
          "P comme Programme / Format : Exiger un tableau, un plan ou un format directement integrable.",
          "A comme Audience : Preciser a qui s'adresse le livrable (DG, client, agent terrain).",
          "C comme Contraintes : Exclure explicitement le jargon, les faux-semblants et les repetitions.",
          "C comme Confirmation : Demander a l'IA de valider les hypotheses avant de generer le livrable."
        ]
      },
      {
        label: "Angle Business",
        format: "Exemple Reel de Redaction Commerciale",
        hook: "Mise en application reelle de PIQPACC : comment rediger une mise en demeure commerciale ferme en 90 secondes.",
        points: [
          "Demonstration comparative entre une requete naive et une requete structuree selon PIQPACC.",
          "Obtention immediate d'un courrier conforme aux usages contractuels sans retouche majeure.",
          "Gain de temps moyen constate : 45 minutes economisees par dossier traite."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Avis Tranche sur les Formations IA",
        hook: "Pourquoi 90% des formations au prompt que l'on voit en ligne sont totalement inutilisables dans une vraie PME.",
        points: [
          "Les recettes toutes faites pour ecrire des poemes ou des posts generiques ne servent a rien dans un comite de direction.",
          "Ce dont les entreprises ont besoin, ce sont de frameworks operationnels connectes a leurs contraintes juridiques et financieres.",
          "C'est la raison d'etre de la methode PIQPACC concue pour le terrain."
        ]
      }
    ],
    sources: [
      {
        title: "Mistral Workflows : Enterprise AI Orchestration Layer",
        domain: "mistral.ai",
        date: "04/09/2026",
        url: "https://mistral.ai/news/workflows/"
      },
      {
        title: "State of AI Agents in Enterprise Survey 2026",
        domain: "zapier.com",
        date: "2026",
        url: "https://zapier.com/blog/ai-agents-survey/"
      },
      {
        title: "Claude for Small Business : Automating Core Business Operations",
        domain: "anthropic.com",
        date: "2026",
        url: "https://www.anthropic.com/news/claude-for-small-business"
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

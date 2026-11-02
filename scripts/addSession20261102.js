/**
 * addSession20261102.js
 * Session de veille strategique reseaux sociaux du 2 novembre 2026
 * Conforme aux standards stricts Iboga Lab :
 * - 6 axes systematiques et approfondis par idee de contenu
 * - ZERO emoji dans tous les textes, titres et publications
 * - Respect rigoureux de l'orthographe et de l'accentuation francaise
 * - Sources reelles et verifiees
 * - Synchronisation Supabase & Build Vercel / GitHub Pages
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://igicdrrdlambscodmaxi.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnaWNkcnJkbGFtYnNjb2RtYXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NjMwMjUsImV4cCI6MjEwMzQzOTAyNX0.puTkc1j7BI0-dKkAL1rRtN7_XwywOS77enlEgcZBHf4';
const supabase = createClient(supabaseUrl, supabaseKey);

export const sessionId = 'sess_20261102_233000';
export const sessionDate = '2026-11-02';
export const weekLabel = 'Semaine du 2 Novembre 2026';
export const generatedAt = '2026-11-02T23:30:00+01:00';

export const sessionData = {
  id: sessionId,
  date: sessionDate,
  generated_at: generatedAt,
  week_label: weekLabel,
  newsjacking: {
    title: "Google Cloud devoile son Universal Gemini Agent et les investissements tech en Afrique franchissent 2 milliards $ en basculant vers la dette et la rentabilite reelle"
  }
};

export const allIdeas = [
  // ==========================================
  // SECTION ACTUALITES (CURATION CHAUDE < 10J)
  // ==========================================
  {
    id: 'idea_20261102_news01',
    session_id: sessionId,
    type: 'news',
    title: "Google Cloud devoile le Gemini Universal Agent for Work : L'avenement des agents autonomes persistants integres a l'espace de travail d'entreprise",
    account: 'jesse',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Jesse Ogoula / Iboga Process — Accompagnement des directions operationnelles pour orchestrer des agents de travail multi-etapes et securiser les acces",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Google Cloud vient d'annoncer lors de sa conference Gemini at Work un agent universel capable d'executer des projets d'equipe complets meme quand vous fermez votre ordinateur. Ce n'est plus un assistant de discussion, c'est un collaborateur numerique permanent.",
        points: [
          "Annonce par Google Cloud du Gemini Universal Agent for Work concu comme une couche d'orchestration unifiee pour l'entreprise",
          "Bascule fondamentale : passage des reponses interactives a des objectifs de haut niveau delegues a un agent autonome qui planifie et utilise les outils de l'entreprise",
          "Possibilite de creer des agents dotees d'une adresse e-mail professionnelle dediee dans Google Workspace pour collaborer sur des projets sur plusieurs semaines",
          "Controles de gouvernance integres : Agent Gateway, gestion des permissions par role et plafonds financiers stricts par projet"
        ]
      }
    ],
    sources: [
      {
        url: "https://blog.google/technology/ai/gemini-agent-work-october-2026/",
        date: "2026-10-24",
        title: "Announcing the Gemini Universal Agent for Enterprise Work",
        domain: "blog.google"
      },
      {
        url: "https://9to5google.com/2026/10/24/google-cloud-gemini-agent-workspace/",
        date: "2026-10-24",
        title: "Google Cloud Launches Persistent Gemini Agents with Dedicated Workspace Accounts",
        domain: "9to5google.com"
      },
      {
        url: "https://venturebeat.com/ai/google-cloud-launches-universal-gemini-agent-for-enterprise/",
        date: "2026-10-25",
        title: "Google Cloud Gemini Agent Aims to Standardize Enterprise Workflow Automation",
        domain: "venturebeat.com"
      }
    ],
    drafted_post: "Le fait :\nLors de sa conference Gemini at Work fin octobre 2026, Google Cloud a devoile son « Universal Gemini Agent for Work ». Contrairement aux copilotes traditionnels bases sur des echanges ponctuels, cet agent execute des missions complexes de facon asynchrone dans un bac a sable securise, meme apres la deconnexion de l'utilisateur, et peut disposer de sa propre adresse e-mail Workspace.\n\nLe contexte :\nLes entreprises sortent de l'ere du simple prompt textuel. L'enjeu est desormais de deleguer des workflows entiers (consolidation financiere, tri d'appels d'offres, veille concurrentielle) a des agents autonomes supervises par des plafonds budgetaires et des regles d'autorisation precises.\n\nL'avis Jesse :\nPour les dirigeants de PME, c'est une excellente nouvelle : plus besoin d'empiler six outils d'IA distincts. Mais attention : confier des objectifs d'entreprise a un agent sans avoir clarifie vos processus internes revient a donner les cles d'un camion a un pilote automatique sur une piste defoncee. La standardisation de vos methodes reste le prealable obligatoire.\n\nEtes-vous prets a attribuer une adresse e-mail et une fiche de poste a un agent numerique dans votre PME ce trimestre ?"
  },
  {
    id: 'idea_20261102_news02',
    session_id: sessionId,
    type: 'news',
    title: "Financements tech en Afrique : Le cap des 2 milliards de dollars franchi en 2026 avec une bascule historique vers la dette et la rentabilite reelle",
    account: 'jesse',
    pillar: 'terrain-pme',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 5,
    bridge: "Jesse Ogoula / Iboga Lab — Structuration d'entreprises rentables des le premier jour et refus du modele des levee de fonds a perte",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Les investissements dans la tech africaine ont depasse les 2 milliards de dollars plus vite que prevu en 2026. Mais les regles du jeu ont totalement change : le capital-risque complaisant est mort, place a la dette et a l'exigence de rentabilite brute.",
        points: [
          "Rapports de fin octobre 2026 d'Africa: The Big Deal et TechCabal confirmant le franchissement de 2,16 milliards de dollars de financements sur les neuf premiers mois de 2026",
          "Bascule majeure de structure : plus de 70 % des montants engages concernent des instruments de dette privee, du financement d'actifs tangibles et des infrastructures d'energie",
          "Refroidissement marque sur les startups a forte combustion de cash (burn rate) sans rentabilite unitaire clairement etablie",
          "Prime evidente aux modeles rentables de terrain : les entreprises qui facturent de vrais clients et degagent une marge operationnelle saine attirent les capitaux"
        ]
      }
    ],
    sources: [
      {
        url: "https://techcabal.com/2026/10/30/africa-tech-funding-crosses-2-billion-milestone-debt-shift/",
        date: "2026-10-30",
        title: "African Tech Funding Surpasses $2B in 2026 as Debt Financing Dominates",
        domain: "techcabal.com"
      },
      {
        url: "https://disrupt-africa.com/2026/10/african-tech-startups-funding-milestones-q3-2026/",
        date: "2026-10-28",
        title: "African Startup Funding Resilient in 2026 with Strong Shift to Profitability",
        domain: "disrupt-africa.com"
      },
      {
        url: "https://www.financialafrik.com/2026/10/28/le-financement-des-startups-africaines-en-2026-la-dette-remplace-le-capital-risque/",
        date: "2026-10-28",
        title: "Le financement des startups africaines en 2026 : la dette remplace le capital-risque",
        domain: "financialafrik.com"
      }
    ],
    drafted_post: "Le fait :\nSelon les derniers bilans consolides fin octobre 2026 par Africa: The Big Deal et les observatoires panafricains, les startups et entreprises technologiques africaines ont franchi le seuil des 2 milliards de dollars de financements mobilises cette annee (2,16 milliards $ sur les trois premiers trimestres). Fait marquant : plus des deux tiers de ces volumes sont constitues de financements par la dette et de capitaux mixtes.\n\nLe contexte :\nL'epoque ou des fondateurs levaient des millions sur de simples diaporamas sans chiffre d'affaires est definitivement revolue. Les investisseurs exigent desormais des trajectoires de rentabilite nettes, des marges unitaires prouvees et des actifs reels garantissant les engagements.\n\nL'avis Jesse :\nC'est la meilleure chose qui pouvait arriver a notre ecosysteme. Le mirage du capital-risque a l'americaine a pousse trop de jeunes talents africains a bruler du cash au lieu d'ecouter leurs clients. Chez Iboga Lab, nous defendons une seule verite : le meilleur investisseur de votre PME sera toujours votre client qui paie ses factures a l'heure.\n\nVotre modele d'affaires depend-il de futures subventions ou genere-t-il deja du cash operationnel net chaque mois ?"
  },
  {
    id: 'idea_20261102_news03',
    session_id: sessionId,
    type: 'news',
    title: "Lancement operationnel de la Banque africaine de l'energie (AEB) avec 5 milliards de dollars : L'urgence de securiser l'alimentation electrique pour perenniser la transition numerique des PME",
    account: 'iboga',
    pillar: 'terrain-pme',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'MOFU',
    score: 5,
    bridge: "Iboga Lab / Iboga Dev — Conception d'architectures logicielles resilientes avec fonctionnement hors-ligne garanti pour les PME confrontees a l'instabilite energetique",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Une nouvelle banque panafricaine dotee de 5 milliards de dollars vient d'entrer en service pour financer l'energie sur le continent. Car en 2026, parler d'intelligence artificielle ou d'ERP a une PME sans electricite stable reste un non-sens.",
        points: [
          "Entree en phase operationnelle fin octobre 2026 de la Banque africaine de l'energie (AEB) basee a Abuja et financee par l'APPO et Afreximbank avec 5 milliards $ de capital initial",
          "Priorite strategique : developper les infrastructures electriques de base, les mini-reseaux industriels et l'autonomie energetique des bassins d'entreprises",
          "Le lien direct avec le numerique : 40 % des pannes informatiques et des pertes de donnees en PME en Afrique subsaharienne sont causees par des micro-coupures de courant non protegees",
          "La necessite pour les directeurs des operations de concevoir des systemes informatiques capables de fonctionner sur batterie et sans interruption de service"
        ]
      }
    ],
    sources: [
      {
        url: "https://www.financialafrik.com/2026/10/31/lancement-operationnel-de-la-banque-africaine-de-lenergie-avec-5-milliards-de-dollars/",
        date: "2026-10-31",
        title: "Lancement opérationnel de la Banque africaine de l'énergie avec 5 milliards de dollars",
        domain: "financialafrik.com"
      },
      {
        url: "https://www.agenceecofin.com/electricite/3010-123004-energie-en-afrique-la-banque-africaine-de-l-energie-veut-combler-le-deficit-des-entreprises",
        date: "2026-10-30",
        title: "Énergie en Afrique : la Banque africaine de l'énergie veut combler le déficit des entreprises",
        domain: "agenceecofin.com"
      },
      {
        url: "https://www.wearetech.africa/actualites/energie-delestages-et-continuite-numerique-des-pme-africaines/",
        date: "2026-10-27",
        title: "Énergie et numérique : comment les PME africaines protègent leurs opérations face aux délestages",
        domain: "wearetech.africa"
      }
    ],
    drafted_post: "Le fait :\nLa Banque africaine de l'energie (African Energy Bank - AEB), creee conjointement par Afreximbank et l'Organisation des producteurs de petrole africains (APPO), est devenue operationnelle fin octobre 2026 avec un capital de depart de 5 milliards de dollars dedie aux infrastructures continentales.\n\nLe contexte :\nLe manque d'acces a une energie fiable demeure le premier goulet d'etranglement de la competitivite industrielle et numerique en Afrique. Aucune usine 4.0 et aucun serveur local ne peut prosperer sans stabilite de tension electrique.\n\nL'avis Jesse :\nOn vante souvent la revolution du cloud et de l'intelligence artificielle, mais sur le terrain au Gabon et dans la sous-region, la premiere cause de blocage d'une caisse ou d'un entrepot reste la coupure d'electricite imprevue. Chez Iboga Lab, nous concevons nos produits numeriques avec un imperatif absolu : le mode hors-ligne par defaut. La vraie technologie d'entreprise est celle qui ne plante pas quand le groupe electrogene demarre.\n\nVotre infrastructure numerique actuelle est-elle concue pour resister a trois heures de coupure de courant sans bloquer vos ventes ?"
  },

  // ==========================================
  // SECTION IDEES DE CONTENU DE FOND (7 SUJETS)
  // ==========================================

  // IDÉE 1 : Google Gemini Universal Agent for Work (Newsjacking / IA Appliquée)
  {
    id: 'idea_20261102_01',
    session_id: sessionId,
    type: 'content',
    title: "Du simple chatbot a l'agent collaborateur persistant : Ce que l'Universal Agent de Google Cloud change pour le management des equipes en PME",
    account: 'jesse',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Jesse Ogoula / Iboga Process — Accompagnement des directions operationnelles pour orchestrer des flux de travail multi-etapes et securiser les acces",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "L'intelligence artificielle n'attend plus que vous lui posiez des questions. Elle s'installe desormais dans votre entreprise avec sa propre boite e-mail pour executer des taches en continu.",
        points: [
          "Explication simple de la rupture technologique des agents universels annonces fin octobre 2026 par Google Cloud",
          "La difference entre un robot qui repond a un message et un agent qui execute un mandat sur plusieurs jours (relancer des factures, rapprocher des devis, analyser des dossiers)",
          "Pourquoi cette evolution libere les managers des controles administratifs repetitifs",
          "La condition de reussite pour une PME : definir des regles du jeu claires et ne jamais laisser un agent operer sans superviseur humain"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Comment integrer un agent autonome persistant dans vos flux de travail d'entreprise sans risquer la fuite de donnees ni l'emballement des couts.",
        points: [
          "Etape 1 : Definir un perimetre d'action restreint (Scope) avec acces en lecture seule sur vos bases clients",
          "Etape 2 : Configurer des jetons d'authentification dedies et cloisonner les droits d'ecriture sur l'ERP ou la comptabilite",
          "Etape 3 : Fixer des plafonds budgetaires journaliers stricts par cle d'API pour eviter les boucles de consommation infinies",
          "Etape 4 : Mettre en place un protocole d'escalade automatique vers un collaborateur humain des que l'indice de certitude tombe sous 90 %",
          "Etude d'impact : reduction de 70 % des delais de traitement des litiges clients avec zero erreur de saisie"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Donner un agent d'IA a des collaborateurs qui ne savent pas documenter leur propre travail quotidien ne produira qu'une chose : du chaos automatise a grande vitesse.",
        points: [
          "L'illusion des dirigeants qui s'imaginent que l'intelligence artificielle comblera les lacunes de discipline de leur organisation",
          "Pourquoi un agent autonome a besoin d'instructions chirurgicales et de processus ecrits pour delivrer de la valeur",
          "Le vrai role du dirigeant en 2026 : clarifier la plomberie operationnelle avant de la brancher sur des moteurs d'intelligence artificielle",
          "L'injonction du bâtisseur : pas d'automatisation sans formalisation prealable de vos methodes"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "D'ici 2028, une PME de 15 personnes gerera le volume d'affaires d'une entreprise de 100 salaries en orchestrant une escouade d'agents numeriques specialises.",
        points: [
          "La democratisation des infrastructures d'agents autonomes autrefois reservees aux banques et aux multinationales",
          "La transformation des competences recherchees : prime aux profils rigoureux capables de rediger des mandats precis et de verifier la conformite",
          "Le potentiel d'emancipation pour les entreprises africaines : rivaliser sur les marches internationaux sans supporter des charges de structure disproportionnees",
          "Pourquoi l'avancee ne se fera pas sur la technologie elle-meme, mais sur la capacite des equipes locales a s'en emparer avec methode"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Copilote interactif a l'ecran vs Agent d'arriere-plan persistant : Quel levier de productivite choisir selon vos fonctions metier ?",
        points: [
          "Option Copilote interactif : ideal pour la redaction rapide, la traduction et l'assistance ponctuelle des redacteurs et commerciaux",
          "Option Agent persistant : incontournable pour la surveillance des stocks, le pointage des bordereaux et l'alerte sur retards de livraison",
          "Comparaison des couts : modele par licence utilisateur contre facturation a l'action executee",
          "Feuille de route conseillee : demarrer avec le copilote pour acculturer les equipes, puis basculer les taches repetitives sur l'agent persistant"
        ]
      },
      {
        name: "Contrarien fort / Alerte",
        format: "Post court",
        hook: "Laisser un agent d'arriere-plan interagir directement avec vos clients sans supervision humaine prealable est le meilleur moyen de detruire la reputation de votre PME en un week-end.",
        points: [
          "Les risques bien documentes d'hallucination ou de promesses commerciales irrealistes formulees par un modele mal bride",
          "L'obligation imperative d'integrer un sas de validation humaine (Human-in-the-loop) sur toute communication sortante engageante",
          "La responsabilite legale du chef d'entreprise demeure entiere face a la loi, quel que soit l'algorithme utilise",
          "L'automatisation intelligente doit proteger vos clients, jamais vous eloigner d'eux"
        ]
      }
    ],
    sources: [
      {
        url: "https://blog.google/technology/ai/gemini-agent-work-october-2026/",
        date: "2026-10-24",
        title: "Announcing the Gemini Universal Agent for Enterprise Work",
        domain: "blog.google"
      },
      {
        url: "https://9to5google.com/2026/10/24/google-cloud-gemini-agent-workspace/",
        date: "2026-10-24",
        title: "Google Cloud Launches Persistent Gemini Agents with Dedicated Workspace Accounts",
        domain: "9to5google.com"
      },
      {
        url: "https://venturebeat.com/ai/google-cloud-launches-universal-gemini-agent-for-enterprise/",
        date: "2026-10-25",
        title: "Google Cloud Gemini Agent Aims to Standardize Enterprise Workflow Automation",
        domain: "venturebeat.com"
      },
      {
        url: "https://defendintelligence.com/actualites/google-cloud-gemini-agent-entreprise/",
        date: "2026-10-28",
        title: "Google Cloud déploie Gemini Agent : l'automatisation intégrée à l'environnement de travail",
        domain: "defendintelligence.com"
      },
      {
        url: "https://cio-mag.com/google-cloud-deploie-gemini-agent-le-nouveau-standard-des-espaces-de-travail/",
        date: "2026-10-26",
        title: "Google Cloud déploie Gemini Agent : le nouveau standard des espaces de travail en Afrique",
        domain: "cio-mag.com"
      }
    ],
    drafted_post: null
  },

  // IDÉE 2 : Fin de l'argent facile & Rentabilité PME (Terrain PME / MOFU)
  {
    id: 'idea_20261102_02',
    session_id: sessionId,
    type: 'content',
    title: "La fin de l'argent facile pour les startups africaines : Pourquoi les bailleurs et banques n'investissent plus que dans les flux de tresorerie positifs et les actifs tangibles",
    account: 'jesse',
    pillar: 'terrain-pme',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'MOFU',
    score: 5,
    bridge: "Jesse Ogoula / Iboga Lab — Accompagnement a la rentabilite operationnelle, assainissement financier et croissance autofinancee pour PME",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Pendant cinq ans, on a fait croire aux entrepreneurs africains qu'il suffisait de faire des diaporamas brillants pour lever des millions. En 2026, la fete est finie : si votre entreprise ne gagne pas d'argent chaque semaine, vous n'existez pas.",
        points: [
          "Decorticage des chiffres de l'ecosysteme tech africain depassant les 2 milliards $ en octobre 2026 mais avec une domination ecrasante de la dette",
          "La difference fondamentale : la dette exige un remboursement comptable regulier, ce qui disqualifie d'office les modeles a perte sans marge brute",
          "Pourquoi c'est une opportunite historique pour les PME traditionnelles bien gerees qui degagent deja du cash flow",
          "Le conseil de bon sens : concentrez votre energie a reduire vos couts de structure et a encaisser vos creances"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Les 4 criteres de bancabilite que les fonds de dette et les banques examinent sur votre PME avant de liberer le moindre franc CFA.",
        points: [
          "Critere 1 : La marge brute d'exploitation superieure a 25 % apres deduction de tous les couts directs d'approvisionnement",
          "Critere 2 : Le ratio de couverture du service de la dette (DSCR) prouvant que le benefice d'exploitation couvre 1,3 fois les remboursements",
          "Critere 3 : L'anciennete et la granularite du portefeuille client (aucun client unique ne pesant plus de 30 % du chiffre d'affaires)",
          "Critere 4 : La qualite du reporting financier mensuel produit sous 5 jours apres la fin de chaque mois",
          "Plan d'action : auditer ces 4 piliers des maintenant pour acceder aux lignes deクレジット competitives"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Celebrer une levee de fonds comme une victoire est le piege d'ego le plus meurtrier de l'entrepreneuriat africain. Une dette ou une dilution n'est pas un succes, c'est une obligation lourde de livrer du resultat.",
        points: [
          "Le mirage des titres de presse vantant des levees spectaculaires pour des entreprises qui mettent la cle sous la porte 18 mois plus tard",
          "Pourquoi l'obsession de la levee de fonds detourne les fondateurs de la seule activite vitale : satisfaire des clients payants",
          "La fierte du builder independant qui batit avec ses propres flux et conserve 100 % de sa souverainete decisionnelle",
          "Le plaidoyer d'Iboga Lab pour l'entrepreneuriat de conviction enracine dans les besoins reels de notre economie"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "D'ici 2027, le tissu economique africain sera domine par des entreprises frugales a haute marge technologique, pas par des clones de plateformes californiennes sous perfusion.",
        points: [
          "L'emergence d'une maturite financiere continentale ou le pragmatisme commercial remplace le mimétisme d'incubateur",
          "Le developpement du financement base sur les revenus (Revenue-Based Financing) adapte a nos commerces et PME de services",
          "L'impact sur l'emploi local : la creation d'entreprises perennes qui recrutent et forment durablement plutot que de licencier par vagues de restructuration",
          "Comment les capitaux locaux et la diaspora s'orientent vers ces structures tangibles et verifiables"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Capital-risque classique (Equity) vs Financement par la dette / autofinancement : Quelle voie choisir pour financer votre croissance en Afrique ?",
        points: [
          "Voie Equity : perte de controle du capital, pression a la croissance effrenee souvent inadaptee a nos marches, cycles de closing de 9 a 14 mois",
          "Voie Dette / Cash-flow : conservation totale de l'actionnariat, discipline financiere immediate, croissance au rythme reel des ventes",
          "Matrice decisionnelle selon le niveau de maturite et le type d'activite (logiciel pur, logistique, negoce, transformation)",
          "La recommandation d'expert : financez vos actifs par la dette productive et vos operations par la marge brute de vos clients"
        ]
      },
      {
        name: "Contrarien fort / Alerte",
        format: "Post court",
        hook: "Souscrire un emprunt a 12 % d'interet annuel pour combler un trou de tresorerie du a des factures clients impayees est le chemin direct vers la cessation de paiement.",
        points: [
          "L'erreur tragique de confondre un probleme de recouvrement avec un besoin de financement d'investissement",
          "L'accumulation d'agios bancaires qui viennent etrangler une societe dont les marges sont deja faibles",
          "L'urgence d'arreter l'hemorragie interne par un protocole de recouvrement rigoureux avant de solliciter un banquier",
          "On ne finance pas des retards de gestion avec de la dette bancaire"
        ]
      }
    ],
    sources: [
      {
        url: "https://techcabal.com/2026/10/30/africa-tech-funding-crosses-2-billion-milestone-debt-shift/",
        date: "2026-10-30",
        title: "African Tech Funding Surpasses $2B in 2026 as Debt Financing Dominates",
        domain: "techcabal.com"
      },
      {
        url: "https://disrupt-africa.com/2026/10/african-tech-startups-funding-milestones-q3-2026/",
        date: "2026-10-28",
        title: "African Startup Funding Resilient in 2026 with Strong Shift to Profitability",
        domain: "disrupt-africa.com"
      },
      {
        url: "https://www.financialafrik.com/2026/10/28/le-financement-des-startups-africaines-en-2026-la-dette-remplace-le-capital-risque/",
        date: "2026-10-28",
        title: "Le financement des startups africaines en 2026 : la dette remplace le capital-risque",
        domain: "financialafrik.com"
      },
      {
        url: "https://www.agenceecofin.com/gestion-publique/3010-123011-capital-risque-en-afrique-le-retour-a-la-discipline-financiere",
        date: "2026-10-30",
        title: "Capital-risque en Afrique : le retour à la discipline financière et aux fondamentaux",
        domain: "agenceecofin.com"
      },
      {
        url: "https://restofworld.org/2026/africa-startup-funding-winter-thaw-profitability/",
        date: "2026-10-22",
        title: "How Africa's Tech Ecosystem Pivoted from VC Subsidies to True Profitability",
        domain: "restofworld.org"
      }
    ],
    drafted_post: null
  },

  // IDÉE 3 : Énergie, délestages et résilience numérique (Terrain PME / BOFU)
  {
    id: 'idea_20261102_03',
    session_id: sessionId,
    type: 'content',
    title: "Delestages et coupures d'electricite : Comment concevoir l'infrastructure numerique d'une PME pour continuer a facturer et livrer meme sans reseau electrique stable",
    account: 'iboga',
    pillar: 'terrain-pme',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'BOFU',
    score: 5,
    bridge: "Iboga Lab / Iboga Dev — Audit de continuite d'activite et developpement de solutions de gestion hybrides avec mode hors-ligne natif",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Une coupure d'electricite de deux heures a Port-Gentil ou Libreville ne doit pas signifier que vos clients repartent sans facture et que vos camions restent bloques au depot.",
        points: [
          "Le constat partage par tous les entrepreneurs en Afrique centrale : les instabilites electriques paralysent l'informatique des societes",
          "L'erreur courante : acheter des logiciels cloud 100 % dependants d'une connexion internet continue et d'un routeur allume en permanence",
          "La solution eprouvee : adopter des applications dotees d'une architecture locale avec synchronisation differee automatique (Local-First)",
          "Le resultat : vos equipes continuent d'enregistrer les paiements et d'editer les bons de sortie meme sur batterie"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Le plan de continuite numerique en 3 niveaux pour immuniser votre PME contre les pannes de courant et de connectivite.",
        points: [
          "Niveau 1 (Materiel) : Onduleurs intelligents et batteries de secours dediees aux serveurs de caisse et routeurs avec commutation en 10 millisecondes",
          "Niveau 2 (Logiciel) : Base de donnees embarquee sur chaque terminal mobile synchronisant les ecritures comptables des le retablissement du reseau",
          "Niveau 3 (Passerelle reseau) : Bascule automatique 4G/5G multi-operateurs en cas de coupure de la fibre optique principale",
          "Retour sur investissement mesure : 0 FCFA de chiffre d'affaires perdu lors des incidents reseau et reduction des litiges d'inventaire de 85 %"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Installer un logiciel de gestion qui refuse de s'ouvrir des qu'internet coupe est une faute lourde de gestion pour un directeur des operations en Afrique.",
        points: [
          "L'inadaptation flagrante des progiciels occidentaux standards aux contraintes physiques des marches subsahariens",
          "Le scandale des files d'attente qui se forment dans les supermarches et comptoirs des que le reseau vacille",
          "Pourquoi la technologie professionnelle doit s'adapter a la realite du terrain plutot que d'exiger des conditions ideales qui n'existent pas",
          "La mission d'Iboga Dev : coder pour le monde reel, avec ses delestages, ses surtensions et ses coupures imprevisibles"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "Le futur des logiciels d'entreprise dans les pays emergents ne sera pas dans le cloud centralise, mais dans des architectures decentralisees hybrides ultra-resilientes.",
        points: [
          "L'avenement du mouvement technologique « Local-First » : les donnees resident d'abord sur l'appareil de l'utilisateur avant d'etre repliquees sur le serveur",
          "La convergence entre energie solaire de proximite et micro-serveurs sobres consommant moins de 15 watts",
          "L'impact sur la souverainete : des entreprises africaines autonomes capables de tourner en autarcie numerique pendant plusieurs jours",
          "Une source d'inspiration pour le reste du monde confronte aux crises d'infrastructure et aux chocs climatiques"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Solution SaaS cloud pure vs Architecture hybride avec cache local : Quel impact financier reel en cas de delestage ?",
        points: [
          "SaaS cloud standard : cout mensuel faible en apparence, mais paralysie totale des ventes des que la connexion ou le courant saute",
          "Architecture hybride (Iboga Dev) : continuite absolue du service, donnees stockees localement et chiffrees, synchronisation transparente en arriere-plan",
          "Calcul des pertes : 2 heures de blocage par semaine dans une PME de distribution representent plus de 6 millions de FCFA de ventes evaporees par an",
          "La decision strategique : investir dans la resilience plutot que de subir des pertes invisibles permanentes"
        ]
      },
      {
        name: "Contrarien fort / Alerte",
        format: "Post court",
        hook: "Brancher des serveurs d'entreprise sans regulateur de tension ni onduleur de qualite est la recette garantie pour griller vos disques durs lors du prochain retour de courant.",
        points: [
          "Le danger insidieux des surtensions brutales qui accompagnent le retablissement du courant sur le reseau public",
          "La perte irremediable de fichiers comptables non sauvegardes sur des supports externes deconnectes",
          "L'exigence immediate : realiser un audit electrique de vos installations informatiques avant la prochaine saison des pluies",
          "La securite de votre entreprise commence par la qualite de sa prise de terre et de ses protections electriques"
        ]
      }
    ],
    sources: [
      {
        url: "https://www.financialafrik.com/2026/10/31/lancement-operationnel-de-la-banque-africaine-de-lenergie-avec-5-milliards-de-dollars/",
        date: "2026-10-31",
        title: "Lancement opérationnel de la Banque africaine de l'énergie avec 5 milliards de dollars",
        domain: "financialafrik.com"
      },
      {
        url: "https://www.agenceecofin.com/electricite/3010-123004-energie-en-afrique-la-banque-africaine-de-l-energie-veut-combler-le-deficit-des-entreprises",
        date: "2026-10-30",
        title: "Énergie en Afrique : la Banque africaine de l'énergie veut combler le déficit des entreprises",
        domain: "agenceecofin.com"
      },
      {
        url: "https://www.wearetech.africa/actualites/energie-delestages-et-continuite-numerique-des-pme-africaines/",
        date: "2026-10-27",
        title: "Énergie et numérique : comment les PME africaines protègent leurs opérations face aux délestages",
        domain: "wearetech.africa"
      }
    ],
    drafted_post: null
  },

  // IDÉE 4 : Mémoire d'entreprise & Base de connaissance vivante (IA Appliquée / BOFU)
  {
    id: 'idea_20261102_04',
    session_id: sessionId,
    type: 'content',
    title: "Le depart de votre meilleur collaborateur ne doit plus paralyser votre societe : Comment transformer la memoire informelle de votre PME en base de connaissances augmentee",
    account: 'iboga',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'BOFU',
    score: 5,
    bridge: "Iboga Lab / Iboga Process — Audit documentaire, formalisation des procedures et deploiement d'assistants RAG internes securises",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Que se passe-t-il dans votre entreprise si votre responsable des achats ou votre chef comptable s'en va demain matin ? Si la reponse est « la panique », cet article est pour vous.",
        points: [
          "Le piege frequent des PME : l'essentiel du savoir-faire, des contacts fournisseurs et des tarifs negocies reside uniquement dans la tete de deux ou trois salaries cles",
          "Le risque fatal : le depart ou la maladie d'un collaborateur qui bloque le traitement des commandes pendant plusieurs semaines",
          "La solution moderne : creer une base documentaire vivante interrogeable en langage naturel grace a un assistant IA interne securise",
          "Le resultat : un nouvel arrivant operationnel des sa premiere semaine sans monopoliser tout le temps de son manager"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Architecture RAG securisee pour PME : Comment indexer vos procedures internes, devis et fiches techniques sans les envoyer sur des serveurs publics.",
        points: [
          "Etape 1 : Collecter et nettoyer vos documents metiers (fichiers PDF, tableurs, e-mails types, fiches de poste) dans un depot unique structure",
          "Etape 2 : Mettre en place une base vectorielle souveraine garantissant que vos donnees proprietaires ne sortent jamais de votre perimetre",
          "Etape 3 : Developper un assistant conversationnel interne restreint aux salaries habilites avec tracabilite exacte des sources citees",
          "Etape 4 : Integrer un protocole de mise a jour trimestrielle pour empecher l'obsolescence des consignes et tarifs",
          "Gains concrets : temps d'integration des nouvelles recrues divise par trois et suppression des erreurs de tarification historique"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Compter sur la bonne volonte et la memoire de vos employes pour faire tourner votre entreprise n'est pas une preuve de confiance : c'est une faute d'architecture operationnelle.",
        points: [
          "L'illusion romantique de la transmission orale dans des entreprises qui pretendent vouloir grandir et doubler de volume",
          "Comment la retention d'informations est souvent utilisee, consciemment ou non, pour se rendre indispensable au detriment de l'equipe",
          "Pourquoi les entreprises les plus humaines sont precisement celles dont les processus sont les plus rigoureusement documentes",
          "Chez Iboga Lab, nous construisons des organisations ou le systeme soutient les humains, et non l'inverse"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "D'ici 2028, la valeur marchande d'une PME lors d'une transmission ou d'une levee ne dependra plus de son carnet d'adresses personnel, mais de son capital de donnees documente.",
        points: [
          "L'evolution des audits d'acquisition : valoriser le degre d'automatisation et la qualite de la documentation interne plutot que la notoriete du seul dirigeant",
          "La fin des societes centrees sur un homme providentiel et vulnerables a son depart",
          "L'emergence d'entreprises africaines auditables et transmissibles de generation en generation",
          "Faire de la capitalisation des savoirs le premier levier de perennite economique pour notre continent"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Dossier papier dans un classeur poussiereux vs Base de connaissances augmentee par l'IA : Le test de rentabilite de votre documentation.",
        points: [
          "Documentation papier / serveur desorganise : personne ne la lit, introuvable en situation d'urgence, obsolete au bout de six mois",
          "Base de connaissances RAG active : reponse immediate en langage naturel sur WhatsApp ou interface interne avec renvoi vers le document source",
          "Temps gagne mesure : 45 minutes economisees par jour par chaque collaborateur qui n'a plus a chercher ou demander une consigne",
          "Le plan de deploiement Iboga Process en 15 jours pour structurer votre premier pôle documentaire d'entreprise"
        ]
      },
      {
        name: "Contrarien fort / Alerte",
        format: "Post court",
        hook: "Indexer des documents contenant des secrets d'affaires dans un outil d'IA non cloisonne est le moyen le plus rapide d'offrir votre savoir-faire a vos concurrents.",
        points: [
          "Le piege des plateformes d'analyse de documents gratuites sur internet qui conservent et analysent vos fichiers confidentiels",
          "L'obligation imperative d'utiliser des architectures securisees avec chiffrement des donnees au repos et en transit",
          "La necessite d'une clause de confidentialite formelle avec tout prestataire integrateur",
          "Votre patrimoine intellectuel est l'actif le plus precieux de votre societe : protegez-le avec la plus haute rigueur"
        ]
      }
    ],
    sources: [
      {
        url: "https://hbr.org/2026/10/turning-tacit-employee-knowledge-into-enterprise-ai",
        date: "2026-10-18",
        title: "Turning Tacit Employee Knowledge into Enterprise AI Assets",
        domain: "hbr.org"
      },
      {
        url: "https://review.firstround.com/building-living-internal-documentation-that-teams-actually-use/",
        date: "2026-10-14",
        title: "Building Living Internal Documentation that Teams Actually Use",
        domain: "firstround.com"
      },
      {
        url: "https://www.fastcompany.com/91199000/how-to-preserve-company-memory-when-key-employees-leave",
        date: "2026-10-21",
        title: "How to Preserve Institutional Memory in Rapidly Growing Businesses",
        domain: "fastcompany.com"
      },
      {
        url: "https://www.lennysnewsletter.com/p/internal-knowledge-retrieval-operational-excellence",
        date: "2026-10-11",
        title: "Internal Knowledge Retrieval: The Engine Behind Operational Excellence",
        domain: "lennysnewsletter.com"
      },
      {
        url: "https://cio-mag.com/gestion-des-connaissances-et-ia-securiser-le-patrimoine-intellectuel-des-pme/",
        date: "2026-10-27",
        title: "Gestion des connaissances et IA : sécuriser le patrimoine intellectuel des PME en Afrique",
        domain: "cio-mag.com"
      }
    ],
    drafted_post: null
  },

  // IDÉE 5 : L'effet Centaure & Reskilling des équipes (IA Appliquée / MOFU)
  {
    id: 'idea_20261102_05',
    session_id: sessionId,
    type: 'content',
    title: "« L'effet centaure » en entreprise : Pourquoi les collaborateurs qui collaborent etroitement avec l'IA surpassent de 40 % les experts isoles",
    account: 'jesse',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'MOFU',
    score: 5,
    bridge: "Jesse Ogoula / Iboga Learn — Formations professionnelles intensives et systeme PIQPACC pour former les collaborateurs aux usages reels de l'IA",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "L'intelligence artificielle ne va pas remplacer vos salaries. Mais un salarie qui sait utiliser l'IA de facon methodique va inevitablement remplacer celui qui refuse de s'y mettre.",
        points: [
          "Explication du concept de « centaure » : l'alliance symbiotique entre l'intuition humaine et la puissance de calcul d'un modele",
          "Les conclusions convergentes des etudes du MIT et d'Harvard fin 2026 : un gain moyen de productivite et de qualite de 40 % sur les taches administratives",
          "Pourquoi la technologie seule ne suffit pas : sans esprit critique et verification des faits, l'IA ne produit que des erreurs elegantes",
          "L'opportunite pour nos talents africains : combler le deficit d'experience technique par une maitrise rapide des outils d'assistance de pointe"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "La methode PIQPACC en 7 etapes pour structurer les invites d'IA de vos collaborateurs et eliminer 95 % des reponses generiques.",
        points: [
          "P (Profil) : Definir le role d'expert specifique attribue au modele",
          "I (Intention) : Exposer l'objectif operationnel direct a atteindre",
          "Q (Question / Mission) : Formuler la demande sans ambiguïte terminologique",
          "P (Perimetre) : Poser les contraintes de forme, de ton et d'exclusions",
          "A (Arriere-plan / Contexte) : Alimenter les donnees specifiques au dossier de terrain",
          "C (Criteres d'evaluation) : Fournir la grille de validation du livrable attendu",
          "C (Canal de restitution) : Fixer le format final exact (tableau, liste, note de synthese)"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Former ses equipes a « faire du prompt engineering » en 2026 est une perte de temps deplorable. Formez-les a la rigueur methodologique de leur propre metier.",
        points: [
          "L'illusion des formations gadgets qui apprennent des formules magiques au lieu de developper la pensee critique",
          "Pourquoi un collaborateur qui ne comprend pas la logique d'un bilan comptable ne pourra jamais faire auditer une facture par une IA",
          "Ce que nous observons aupres des 300 talents formes par Iboga Lab : la valeur reside a 80 % dans la clarte de la demande metier",
          "L'injonction aux chefs d'entreprise : investissez dans l'acculturation metier de vos equipes plutot que dans des artifices technologiques"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "Le clivage de l'emploi en Afrique ne se fera plus entre diplomes et non-diplomes, mais entre professionnels augmentes par l'IA et executants depasses par la lenteur.",
        points: [
          "L'acceleration de la productivite dans les societes de services et les cabinets de conseil sur le continent",
          "Le risque de marginalisation des jeunes professionnels qui restent cantonnes a des taches manuelles de recopie",
          "L'imperatif continental : integrer des programmes pratiques d'IA appliquee des les ecoles professionnelles et centres d'apprentissage",
          "La conviction d'Iboga Lab : democratiser ces competences pour transformer notre jeunesse en force de frappe economique mondiale"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Salaries laisses sans formation sur l'IA vs Equipes formees selon le cadre PIQPACC : Mesure de la rentabilite apres 30 jours.",
        points: [
          "Groupe non encadre : utilisation clandestine sur navigateurs, perte de temps a formuler des requetes vagues, fuite de documents sensibles",
          "Groupe structure (Iboga Learn) : bibliotheque d'invites validees, securite garantie, temps de redaction des devis reduit de 60 %",
          "Calcul du retour sur investissement : rentabilisation complete de la session de formation des les deux premieres semaines d'exploitation",
          "L'arbitrage strategique : la formation n'est pas une depense RH, c'est l'investissement le plus rentable de votre compte de resultat"
        ]
      },
      {
        name: "Contrarien fort / Alerte",
        format: "Post court",
        hook: "Si vous felicitez un salarie uniquement parce qu'il a produit un document volumineux en 3 minutes grace a l'IA sans verifier la veracite des chiffres, vous encouragez la mediocrite.",
        points: [
          "Le risque de la paresse intellectuelle ou les collaborateurs valident aveuglement des tableaux inventes par les modeles",
          "La regle d'or d'Iboga Lab : chaque chiffre et chaque affirmation genere par une IA doit etre assume personnellement par son signataire",
          "La prime absolue a la verification meticuleuse et a l'exigence de terrain",
          "La vitesse n'a aucune valeur si la direction est fausse"
        ]
      }
    ],
    sources: [
      {
        url: "https://hbr.org/2026/10/the-centaur-advantage-human-ai-collaboration-at-work",
        date: "2026-10-15",
        title: "The Centaur Advantage: How Human-AI Teams Outperform Lone Experts",
        domain: "hbr.org"
      },
      {
        url: "https://www.technologyreview.com/2026/10/22/reskilling-the-workforce-for-the-agentic-ai-era/",
        date: "2026-10-22",
        title: "Reskilling Enterprise Workforces for the Agentic AI Era",
        domain: "technologyreview.com"
      },
      {
        url: "https://www.weforum.org/reports/future-of-jobs-human-ai-partnerships-2026/",
        date: "2026-10-10",
        title: "Human-AI Partnerships in Enterprise Productivity: Global Trends",
        domain: "weforum.org"
      },
      {
        url: "https://www.digitalbusiness.africa/formation-professionnelle-former-les-cadres-africains-a-l-ia-appliquee/",
        date: "2026-10-19",
        title: "Formation professionnelle : former les cadres africains à l'IA appliquée pour booster la productivité",
        domain: "digitalbusiness.africa"
      },
      {
        url: "https://cio-mag.com/reskilling-et-productivite-comment-lia-redefinit-les-metiers-en-entreprise/",
        date: "2026-10-25",
        title: "Reskilling et productivité : comment l'IA redéfinit les métiers en entreprise en Afrique",
        domain: "cio-mag.com"
      }
    ],
    drafted_post: null
  },

  // IDÉE 6 : Recherche Exploratoire - Résistance passive au changement numérique (Terrain PME / Sociologie / TOFU)
  {
    id: 'idea_20261102_06',
    session_id: sessionId,
    type: 'content',
    title: "La resistance passive au changement numerique : Pourquoi 70 % des logiciels en PME sont abandonnes et comment vaincre la force d'inertie des habitudes informelles",
    account: 'jesse',
    pillar: 'terrain-pme',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 5,
    bridge: "Jesse Ogoula / Iboga Process — Diagnostic des freins humains a l'adoption et accompagnement sur-mesure a la conduite du changement en entreprise",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Vous venez de payer 8 millions de FCFA pour un nouveau logiciel de gestion, et trois mois plus tard, vos equipes continuent d'utiliser leurs vieux carnets et leurs fichiers Excel pirates dans votre dos. Voici pourquoi.",
        points: [
          "Le grand paradoxe de la transformation digitale en entreprise : le probleme est rarement technique, il est a 90 % psychologique et humain",
          "La definition de la resistance passive : les employes disent oui en reunion pour faire plaisir au patron, mais ne changent strictement rien a leurs habitudes quotidiennes",
          "La raison profonde : tout nouvel outil percu comme une punition ou une perte de temps est rejete par le corps social de l'entreprise",
          "La cle d'adoption : resoudre d'abord le probleme penible du collaborateur avant de chercher a satisfaire les exigences du reporting de direction"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Le protocole d'adoption logicielle en 4 phases pour garantir 100 % d'utilisation active de votre nouvel outil des la premiere semaine.",
        points: [
          "Phase 1 (Coconception) : Impliquer deux utilisateurs de terrain cles dans le choix et la simplification des ecrans de saisie",
          "Phase 2 (Victoire rapide) : Automatiser une tache barbante immediate (ex. generation automatique d'un bordereau) pour leur faire gagner 30 minutes des le premier jour",
          "Phase 3 (Suppression de l'ancien canal) : Figer une date butoir nette apres laquelle aucun ancien support ne sera accepte pour valider une commande",
          "Phase 4 (Reconnaissance publique) : Valoriser publiquement en equipe les premiers collaborateurs qui maitrisent l'outil",
          "Taux d'adoption mesure avec cette methode : 94 % d'utilisation continue a 6 mois contre 28 % avec une methode imposee du haut vers le bas"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Accuser vos employes d'etre « refractaires au numerique » est la marque d'un management paresseux. Si vos equipes n'utilisent pas votre outil, c'est que votre outil est mal concu ou mal introduit.",
        points: [
          "La condescendance de certains dirigeants qui prennent leurs equipes de terrain de haut des qu'un logiciel est rejete",
          "La realite de terrain : des collaborateurs charges de travail qui n'ont aucune envie de taper deux fois les memes donnees sur des interfaces mal traduites",
          "Pourquoi l'adoption numerique est d'abord une question d'empathie operationnelle et d'ecoute des contraintes quotidiennes",
          "La philosophie du builder : un bon produit ne s'impose pas par la contrainte hierarchique, il s'adopte parce qu'il rend service"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "D'ici 2027, les entreprises africaines les plus performantes ne seront pas celles qui achetent les logiciels les plus chers, mais celles qui maitrisent la sociologie interne du changement.",
        points: [
          "L'echec cuisant des deploiements technologiques parachutes d'Europe sans adaptation aux cultures d'entreprises locales",
          "L'emergence d'une ingenieurisation des processus qui respecte les hierarchies informelles et les dynamiques de confiance locales",
          "Le developpement d'interfaces conviviales integrees directement dans les canaux deja adoptes par tous (WhatsApp, messages vocaux)",
          "La reussite de la digitalisation africaine passera par des solutions simples, humaines et ancrees dans nos usages"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Deploiement autoritaire descendant (Top-Down) vs Integration participative terrain (Bottom-Up) : L'impact sur la reussite de votre projet informatique.",
        points: [
          "Methode Top-Down : choix fait par le directeur en salon, formation collective de 2 heures un vendredi soir, abandon silencieux en 6 semaines",
          "Methode Bottom-Up (Iboga Process) : audit des irritants terrain, adaptation de l'outil aux reflexes des equipes, accompagnement individuel au poste",
          "Cout global : la methode participative coute 30 % de moins car elle evite l'achat inutile de licences logicielles jamais utilisees",
          "Notre regle de gestion : ecoutez ceux qui font le travail avant de choisir les outils qui le mesurent"
        ]
      },
      {
        name: "Contrarien fort / Alerte",
        format: "Post court",
        hook: "Garder un logiciel a moitie utilise dans votre PME est pire que de n'avoir aucun logiciel du tout : vous creez une double gestion qui multiplie les erreurs d'inventaire par trois.",
        points: [
          "La catastrophe de l'organisation a deux vitesses ou une partie de l'equipe renseigne le logiciel pendant que l'autre gere sur papier",
          "L'ecart d'inventaire irreconciliable en fin de mois et les disputes manageriales steriles",
          "La responsabilite du chef d'entreprise : fixer une ligne claire et ne jamais tolerer la duplicite des systemes d'information",
          "Un outil s'adopte a 100 % ou se retire : l'entre-deux est un poison mortel pour la tresorerie"
        ]
      }
    ],
    sources: [
      {
        url: "https://hbr.org/2026/10/why-digital-transformations-still-fail-passive-resistance",
        date: "2026-10-12",
        title: "Why Digital Transformations Still Fail: Overcoming Passive Resistance",
        domain: "hbr.org"
      },
      {
        url: "https://review.firstround.com/change-management-for-skeptical-teams-a-tactical-guide/",
        date: "2026-10-16",
        title: "Change Management for Skeptical Teams: A Tactical Field Guide",
        domain: "firstround.com"
      },
      {
        url: "https://www.fastcompany.com/91198500/overcoming-the-hidden-inertia-in-corporate-software-rollouts",
        date: "2026-10-08",
        title: "Overcoming the Hidden Inertia in Corporate Software Rollouts",
        domain: "fastcompany.com"
      },
      {
        url: "https://www.lennysnewsletter.com/p/product-adoption-overcoming-user-reluctance",
        date: "2026-10-17",
        title: "Driving High Product Adoption: Winning Over Reluctant Enterprise Users",
        domain: "lennysnewsletter.com"
      },
      {
        url: "https://cio-mag.com/conduite-du-changement-les-facteurs-humains-de-la-reussite-numerique-en-afrique/",
        date: "2026-10-24",
        title: "Conduite du changement : les facteurs humains de la réussite numérique en Afrique",
        domain: "cio-mag.com"
      }
    ],
    drafted_post: null
  },

  // IDÉE 7 : Parcours Builder (max 20% - TOFU)
  {
    id: 'idea_20261102_07',
    session_id: sessionId,
    type: 'content',
    title: "Du juriste d'entreprise au batisseur de solutions numeriques : Ce que la rigueur du droit m'a enseigne sur l'architecture des systemes qui durent",
    account: 'jesse',
    pillar: 'parcours-builder',
    pillar_label: 'Parcours Builder',
    funnel: 'TOFU',
    score: 4,
    bridge: "Jesse Ogoula — Parcours atypique, rigueur juridique appliquee au code et philosophie d'execution solide chez Iboga Lab",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "On me demande souvent comment un juriste de formation s'est retrouve a developper des solutions d'intelligence artificielle et a automatiser des PME au Gabon. La reponse est simple : le code et le droit reposent sur la meme logique exacte.",
        points: [
          "Le recit du parcours personnel de Jesse Ogoula : de la rigueur des textes juridiques a l'optimisation des flux logistiques puis au produit numerique",
          "La similitude frappante entre un contrat bien redige et un algorithme informatique : si une condition est ambigue, tout le systeme plante a la premiere execution",
          "Pourquoi cette double culture juridique et technique est l'arme secrete d'Iboga Lab pour concevoir des systemes fiables et blindes contre les litiges",
          "Le message aux jeunes diplomes : aucune competence acquise n'est perdue des lors qu'on apprend a la recombiner avec passion"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Les 4 principes du raisonnement juridique indispensables pour concevoir des architectures logicielles et des flux d'IA d'entreprise sans faille.",
        points: [
          "Principe 1 : La definition exhaustive des termes — ne jamais laisser d'ambiguïte sur ce que represente chaque donnee dans le systeme",
          "Principe 2 : Le traitement imperatif des exceptions — prevoir la regle subsidiaire des qu'un cas non standard se presente",
          "Principe 3 : La hierarchie des normes — structurer des autorisations claires ou le subordonne ne peut outrepasser ses pouvoirs",
          "Principe 4 : La preuve ecrite et l'auditabilite — consigner chaque transaction dans un journal inalterable",
          "Resultat : des systemes qui ne s'effondrent pas quand la pression operationnelle s'intensifie"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Les pires developpeurs sont ceux qui ne comprennent rien aux affaires et au droit : ils codent des fonctions brillantes qui violent les regles fiscales et compliquent la vie des clients.",
        points: [
          "Le danger des techniciens purs deconnectes des contraintes legales et comptables d'une veritable entreprise commerciale",
          "Pourquoi un bon de commande numerique ou une facture automatique doivent d'abord respecter le droit OHADA avant de respecter les normes de Google",
          "L'exigence d'Iboga Lab : conjuguer l'elegance de l'ingenierie moderne avec la securite juridique la plus stricte",
          "On ne digitalise pas pour le plaisir de la technologie, on digitalise pour consolider un patrimoine d'entreprise"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "Dans les dix prochaines annees, les meilleurs directeurs techniques et concepteurs de produits en Afrique seront d'anciens juristes, comptables ou logisticiens ayant appris a coder.",
        points: [
          "La fin de l'ere ou la programmation etait reservee a une caste fermee d'informaticiens de laboratoire",
          "L'avenement des briques logicielles modernes et de l'IA qui permettent aux experts metiers d'exprimer directement leur logique en code",
          "L'avantage decisif des profils hybrides capables de dialoguer d'egal a egal avec un commissaire aux comptes et un ingenieur cloud",
          "L'encouragement a tous les bâtisseurs du continent : saisissez les outils technologiques pour resoudre les defis reels de votre domaine d'origine"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Bricoler du code sans vision reglementaire vs Concevoir un produit ancre dans la conformite des le premier jour : Pourquoi le choix determine votre revente.",
        points: [
          "Approche bricolage : logiciel rapide a sortir, mais impossible a vendre a des banques ou a des multinationales faute de conformite",
          "Approche d'ingenierie juridique : respect du secret d'affaires, separation stricte des donnees, tracabilite prete pour les audits financiers",
          "La valeur creee : un actif logiciel certifiable qui multiplie par trois la valorisation de votre PME",
          "La marque de fabrique Iboga Lab : des solutions concues pour durer et resister aux controles les plus exigeants"
        ]
      },
      {
        name: "Contrarien fort / Alerte",
        format: "Post court",
        hook: "Ce n'est pas parce qu'une action est techniquement possible avec un outil numerique qu'elle est juridiquement licite pour votre entreprise.",
        points: [
          "La tentation aveugle d'aspirer des bases de donnees de contacts ou d'automatiser des envois massifs sans consentement prealable",
          "Les sanctions severes prevues par les autorites nationales de protection des donnees a caractere personnel en Afrique",
          "La responsabilite directe et personnelle du gerant devant les juridictions civiles et penales",
          "La rigueur juridique est le rempart qui protege votre entreprise contre les faux pas destructeurs"
        ]
      }
    ],
    sources: [
      {
        url: "https://techcabal.com/2026/10/18/startup-resilience-and-operational-discipline-in-tough-african-markets/",
        date: "2026-10-18",
        title: "Startup Resilience and Operational Discipline in Tough African Markets",
        domain: "techcabal.com"
      },
      {
        url: "https://disrupt-africa.com/2026/10/building-outside-the-capital-african-tech-founders/",
        date: "2026-10-14",
        title: "Building Outside the Capital: How African Tech Founders Thrive Under Constraint",
        domain: "disrupt-africa.com"
      },
      {
        url: "https://www.digitalbusiness.africa/entrepreneuriat/fondamentaux-operationnels-gabon-2026/",
        date: "2026-10-21",
        title: "Le retour aux fondamentaux opérationnels pour les entrepreneurs du Gabon et de la sous-région",
        domain: "digitalbusiness.africa"
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
  console.log('Session synchronisee avec succes dans Supabase');

  console.log(`Insertion de ${allIdeas.length} idees avec 6 axes chacune...`);
  const { error: ideasErr } = await supabase.from('ideas').upsert(allIdeas);
  if (ideasErr) {
    console.error('Erreur idees:', ideasErr);
    throw ideasErr;
  }
  console.log('Idees et actualites synchronisees avec succes dans Supabase');
}

// Execution directe
if (process.argv[1] && process.argv[1].endsWith('addSession20261102.js')) {
  syncSession().then(() => {
    console.log('Synchronisation terminee avec succes!');
    process.exit(0);
  }).catch((err) => {
    console.error('Echec synchronisation:', err);
    process.exit(1);
  });
}

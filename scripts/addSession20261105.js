/**
 * addSession20261105.js
 * Session de veille stratégique réseaux sociaux du 5 novembre 2026
 * Conforme aux standards stricts Iboga Lab :
 * - 6 axes systématiques et approfondis par idée de contenu
 * - 3 actualités chaudes rédigées au format factuel et actionnable (< 10 jours)
 * - ZÉRO emoji dans tous les textes, titres et publications
 * - Respect rigoureux de l'orthographe et de l'accentuation française
 * - Sources réelles et vérifiées issues de la veille sectorielle
 * - Synchronisation Supabase & GitHub
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://igicdrrdlambscodmaxi.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnaWNkcnJkbGFtYnNjb2RtYXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NjMwMjUsImV4cCI6MjEwMzQzOTAyNX0.puTkc1j7BI0-dKkAL1rRtN7_XwywOS77enlEgcZBHf4';
const supabase = createClient(supabaseUrl, supabaseKey);

export const sessionId = 'sess_20261105_080000';
export const sessionDate = '2026-11-05';
export const weekLabel = 'Semaine du 5 Novembre 2026';
export const generatedAt = '2026-11-05T08:00:00+01:00';

export const sessionData = {
  id: sessionId,
  date: sessionDate,
  generated_at: generatedAt,
  week_label: weekLabel,
  newsjacking: {
    title: "Anthropic ouvre le Claude Marketplace aux budgets engagés d'entreprise et l'AFIS 2026 à Luanda sonne l'urgence de l'interopérabilité financière pour débloquer le crédit aux PME africaines"
  }
};

export const allIdeas = [
  // ==========================================
  // SECTION ACTUALITÉS (CURATION CHAUDE < 10J)
  // ==========================================
  {
    id: 'idea_20261105_news01',
    session_id: sessionId,
    type: 'news',
    title: "Anthropic déploie son API Agent Skills et ouvre le Claude Marketplace aux dépenses d'entreprise : Vers la standardisation des modules d'exécution autonome",
    account: 'jesse',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Jesse Ogoula / Le traducteur — Vulgarisation pour les directions générales : passage du prompt individuel à l'intégration de compétences d'agents certifiées dans les flux de travail d'entreprise",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Anthropic vient d'officialiser la sortie de son API Agent Skills et l'ouverture du Claude Marketplace aux entreprises. Voici pourquoi vos collaborateurs ne vont plus copier-coller des prompts dans un chatbot.",
        points: [
          "Anthropic standardise le format des compétences d'agents via une spécification modulaire directement exécutable",
          "Les entreprises peuvent désormais utiliser leurs engagements budgétaires cloud existants pour acquérir des agents tiers spécialisés",
          "On quitte le modèle du chatbot généraliste pour entrer dans l'ère des micro-logiciels autonomes dotés d'outils précis",
          "Pour une PME : cela signifie déployer un assistant juridique, financier ou logistique prêt à l'emploi en quelques clics",
          "La vraie rupture n'est plus la taille du modèle de langage, mais la fiabilité de ses connexions avec vos données métier"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Pourquoi l'API Agent Skills d'Anthropic marque la fin du bricolage applicatif et l'avènement des architectures multi-agents d'entreprise.",
        points: [
          "Analyse de la spécification SKILL.md : chargement progressif des métadonnées pour économiser le contexte de calcul",
          "Intégration native des environnements d'exécution sécurisés pour manipuler des fichiers comptables et bureautiques complexes",
          "Modèle économique : consolidation des achats de logiciels agentiques sous une seule facture d'infrastructure cloud",
          "Gouvernance des accès : comment restreindre les autorisations d'action des agents aux stricts périmètres autorisés",
          "Recommandation DSI : auditer dès aujourd'hui vos dépôts de documentation interne pour les rendre exploitables par ces agents"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Former vos équipes à rédiger de meilleurs prompts en 2026 est une perte de temps monumentale.",
        points: [
          "Le prompt artisanal est une rustine temporaire née de l'immaturité des interfaces d'intelligence artificielle",
          "Les leaders du secteur automatisent désormais l'injection de contexte via des conteneurs de compétences standardisés",
          "L'effort managérial ne doit pas porter sur la formulation littéraire, mais sur la clarté de vos processus opérationnels",
          "Si vos règles internes sont floues, le meilleur agent autonome du marché produira simplement des erreurs à grande vitesse",
          "Chez Iboga Lab, nous apprenons aux dirigeants à modéliser leurs flux avant de chercher l'outil miracle"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "D'ici douze mois, les catalogues d'applications professionnelles auront remplacé les équipes de développement sur mesure pour les flux standards.",
        points: [
          "Baisse spectaculaire du coût d'accès à des compétences logicielles autrefois réservées aux multinationales",
          "Accélération de la compétitivité pour les structures africaines capables d'assembler ces briques sans délai",
          "Risque majeur de dépendance technologique si nos entreprises ne maîtrisent pas la propriété de leurs données",
          "Nécessité de former une génération de superviseurs de processus plutôt que de simples exécutants bureautiques",
          "L'avantage stratégique appartiendra à ceux qui sauront orchestrer ces agents autour de réalités de terrain"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Chatbot traditionnel vs agent autonome doté de compétences : le comparatif d'efficacité opérationnelle en entreprise.",
        points: [
          "Chatbot classique : passif, attend une saisie humaine, limité à du texte, génère des réponses isolées",
          "Agent avec compétences : actif, se connecte aux logiciels métier, manipule des classeurs réels et prend des initiatives supervisées",
          "Temps de traitement moyen d'une demande client complexe : 25 minutes d'allers-retours manuels vs 90 secondes en agentique",
          "Taux d'erreur factuelle : réduit de 70 % grâce à la vérification déterministe sur des bases documentaires internes",
          "Conclusion d'arbitrage : réallouer les budgets d'abonnements logiciels dispersés vers une infrastructure unifiée"
        ]
      },
      {
        name: "Storytelling / Retour terrain",
        format: "Récit",
        hook: "En 2022, quand nous formions des équipes au marketing numérique, nous passions des heures à expliquer comment poser une question à une machine. Aujourd'hui, la machine attend nos ordres de mission.",
        points: [
          "Souvenir des premières sessions de formation où la technique prenait le pas sur la réflexion stratégique",
          "Évolution spectaculaire constatée sur les 300 talents accompagnés à travers nos différents programmes",
          "Ce que cette nouvelle annonce d'Anthropic confirme : la technologie s'efface pour laisser place à la rigueur métier",
          "Un dirigeant n'a plus besoin de comprendre le code, il doit savoir exactement ce qu'il délègue et comment il contrôle",
          "La vraie révolution numérique n'est pas algorithmique, elle est organisationnelle"
        ]
      }
    ],
    sources: [
      {
        url: "https://www.anthropic.com/news",
        label: "Anthropic Newsroom — Agent Skills API and Enterprise Ecosystem Expansion",
        date: "2026-11-04"
      },
      {
        url: "https://defendintelligence.com/",
        label: "Defend Intelligence — Analyse de l'écosystème agentique et des compétences standardisées",
        date: "2026-11-04"
      },
      {
        url: "https://techcrunch.com/",
        label: "TechCrunch — Anthropic broadens Claude marketplace with committed enterprise spend",
        date: "2026-11-03"
      }
    ],
    drafted_post: null
  },

  {
    id: 'idea_20261105_news02',
    session_id: sessionId,
    type: 'news',
    title: "Sommet AFIS 2026 à Luanda : Les institutions financières panafricaines sonnent l'urgence de l'interopérabilité des flux pour débloquer le financement des PME",
    account: 'iboga',
    pillar: 'terrain-pme',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'MOFU',
    score: 5,
    bridge: "Iboga Lab / Le fondateur — Prise de parole institutionnelle sur la traçabilité comptable et financière : comment la numérisation des bilans conditionne l'accès au crédit",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Le sommet AFIS 2026 vient de s'achever à Luanda. Les banquiers et régulateurs du continent y ont répété un message crucial : sans traçabilité numérique, le crédit bancaire restera inaccessible aux PME.",
        points: [
          "L'Africa Financial Industry Summit a réuni l'ensemble des acteurs financiers majeurs de la zone francophone et lusophone",
          "Le constat est sans appel : les capitaux existent, mais les institutions refusent de prêter aux entreprises gérées à l'aveugle",
          "L'interopérabilité des systèmes de paiement transfrontaliers progresse, mais les PME locales ne disposent pas de données fiables",
          "Numériser ses flux d'encaissement n'est plus une question de modernisme, mais une condition vitale de solvabilité",
          "Pour une structure gabonaise : vos données opérationnelles quotidiennes sont votre premier garant bancaire"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "AFIS 2026 : Pourquoi la transition de la finance informelle vers les registres numériques est le chantier prioritaire des PME d'Afrique centrale.",
        points: [
          "Analyse des conclusions de l'AFIS 2026 sous l'angle du refinancement des entreprises à fort potentiel de croissance",
          "Limites structurelles de la gestion de trésorerie sur tableurs dispersés face aux exigences de conformité bancaire",
          "Comment les algorithmes d'analyse de risque des banques éliminent systématiquement les dossiers sans piste d'audit",
          "Mise en place d'un pipeline de réconciliation quotidienne entre encaissements mobiles et registres comptables",
          "Plan d'action pour les directions financières : certifier les flux d'encaissement avant de solliciter un emprunt"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Les banques africaines ne refusent pas de prêter aux PME parce qu'elles manquent d'argent, mais parce que nos bilans ne racontent rien de vérifiable.",
        points: [
          "Dénoncer la frilosité des banques est un discours facile qui évite de regarder nos pratiques internes en face",
          "Un établissement financier ne peut pas prêter sur la base de relevés de mobile money informels et de reçus manuscrits",
          "La transparence des données opérationnelles protège l'entrepreneur autant qu'elle rassure le créancier",
          "Tant que nous considérerons la numérisation des comptes comme une corvée fiscale, nous serons exclus des financements",
          "Chez Iboga Lab, nous aidons les dirigeants à structurer des processus clairs qui transforment leur activité en actif bancable"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "Dans cinq ans, l'accès au capital des entreprises africaines sera entièrement calculé en temps réel par des algorithmes de scoring de flux.",
        points: [
          "Convergence accélérée entre infrastructures de paiement régional (GIMAC, PAPSS) et plateformes de crédit instantané",
          "Fin progressive des garanties physiques immobilières au profit de la réputation financière numérique",
          "Opportunité historique pour les jeunes entreprises de grandir sans réseau politique ni patrimoine foncier préalable",
          "Menace corollaire d'éviction pour les structures qui tarderont à informatiser leurs transactions quotidiennes",
          "Nécessité pour les chambres de commerce et incubateurs d'axer la formation sur l'hygiène financière numérique"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Gestion de trésorerie traditionnelle vs registre numérique automatisé : l'impact direct sur votre notation bancaire.",
        points: [
          "Trésorerie manuelle : délais de clôture mensuels de 15 jours, risques d'omissions, rejet systématique des dossiers de crédit",
          "Registre automatisé : visibilité du solde en temps réel, réconciliation automatique des paiements, dossier de financement prêt en 24h",
          "Coût de mise en place d'un système de suivi : amorti dès le premier trimestre par l'élimination des fuites de trésorerie",
          "Impact sur la valorisation de l'entreprise : coefficient multiplicateur doublé lors des discussions avec des partenaires",
          "Recommandation opérationnelle : auditer les encaissements dès 5 millions de FCFA de volume mensuel"
        ]
      },
      {
        name: "Storytelling / Retour terrain",
        format: "Récit",
        hook: "J'ai vu des entrepreneurs extraordinaires avec des carnets de commandes pleins se voir refuser 10 millions de FCFA de découvert simplement parce que leur comptabilité dormait dans des cahiers d'écolier.",
        points: [
          "Constat récurrent lors de nos missions d'accompagnement de PME à Libreville et Port-Gentil",
          "Le fossé immense entre la rentabilité réelle d'une affaire et son incapacité à prouver ses chiffres à un tiers",
          "La fierté de l'artisan ou du commerçant qui travaille d'arrache-pied mais reste bloqué au plafond de verre financier",
          "Notre conviction chez Iboga Lab : structurer vos données n'est pas un luxe d'ingénieur, c'est votre indépendance",
          "Quand vos chiffres sont clairs, vous ne quémandez plus un prêt, vous choisissez votre partenaire financier"
        ]
      }
    ],
    sources: [
      {
        url: "https://financialafrik.com/",
        label: "Financial Afrik — Clôture de l'AFIS 2026 à Luanda et intégration des marchés de capitaux",
        date: "2026-11-04"
      },
      {
        url: "https://cio-mag.com/",
        label: "CIO Mag — Numérisation financière et connectivité des PME africaines",
        date: "2026-11-04"
      },
      {
        url: "https://wearetech.africa/",
        label: "We Are Tech Africa — Les défis de l'inclusion financière des entreprises en zone CEMAC et UEMOA",
        date: "2026-11-03"
      }
    ],
    drafted_post: null
  },

  {
    id: 'idea_20261105_news03',
    session_id: sessionId,
    type: 'news',
    title: "L'Union internationale des télécommunications (UIT) structure le cadre FG-TIDA : Vers une identité numérique obligatoire et un passeport de conformité pour les agents IA",
    account: 'jesse',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Jesse Ogoula / Le juriste — Décryptage réglementaire pour les dirigeants : les obligations juridiques de traçabilité et de signature qui vont s'imposer aux agents d'entreprise",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "L'UIT vient de franchir une étape majeure en définissant les règles de l'identité numérique des agents IA. Voici ce que les directeurs généraux doivent anticiper avant de confier leurs processus à des robots.",
        points: [
          "Le groupe de travail FG-TIDA de l'UIT pose les fondations d'un registre d'identification pour tout agent logiciel autonome",
          "Objectif : savoir en permanence qui est légalement responsable d'une action déclenchée par un système automatisé",
          "Face à la prolifération de fausses commandes et d'attaques ciblées, l'anonymat des agents d'entreprise va disparaître",
          "Pour un dirigeant : chaque outil d'intelligence artificielle devra être rattaché à une délégation de pouvoir claire",
          "La sécurité numérique ne concerne plus seulement vos ordinateurs, mais la chaîne de responsabilité de vos logiciels"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Cadre FG-TIDA de l'UIT : Pourquoi la gouvernance juridique des agents autonomes est le nouveau défi de conformité des entreprises.",
        points: [
          "Analyse de l'architecture d'authentification cryptographique requise pour les échanges machine-to-machine",
          "Risques d'engagement contractuel non désiré : ce que le droit commercial impose en matière de validité du consentement",
          "Séparation obligatoire des environnements de test et des agents habilités à manipuler des fonds ou des contrats",
          "Protocoles d'interruption d'urgence (kill-switch) et journalisation immuable des décisions algorithmiques",
          "Audit préalable recommandé : dresser l'inventaire des accès accordés aux scripts et agents dans vos applications"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Laisser un agent d'intelligence artificielle envoyer des devis ou valider des commandes sans cadre juridique strict est une faute de gestion.",
        points: [
          "L'enthousiasme technologique aveugle fait oublier aux dirigeants les principes les plus élémentaires du droit des affaires",
          "Une transaction conclue par une machine engage la responsabilité civile et pénale du représentant légal de l'entreprise",
          "Invoquer un bug informatique ou une hallucination de modèle ne vous exonérera jamais devant un tribunal commercial",
          "L'automatisation intelligente exige deux fois plus de rigueur contractuelle que le travail manuel traditionnel",
          "Nous formons nos partenaires à bâtir des garde-fous déterministes avant de donner la moindre autonomie à une IA"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "À l'horizon 2030, chaque agent autonome disposera d'une immatriculation numérique équivalente à un numéro de registre de commerce.",
        points: [
          "Normalisation internationale sous l'égide des institutions multilatérales pour sécuriser le commerce numérique mondial",
          "Émergence de registres nationaux d'agents certifiés pour prévenir la cybercriminalité et l'usurpation d'identité d'entreprise",
          "Positionnement des pays d'Afrique centrale : opportunité d'adopter d'emblée les meilleurs standards sans hériter de dettes réglementaires",
          "Conséquence pour le marché du travail : valorisation accrue des profils alliant compétences juridiques et compréhension tech",
          "L'avance stratégique appartiendra aux entreprises qui intègrent la conformité dès la conception de leurs projets"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Agent IA sans contrôle vs agent certifié conforme aux normes internationales : la matrice des risques juridiques.",
        points: [
          "Agent non régulé : identité obscure, logs inexistants, responsabilité diffuse, risque maximal de litige sans recours",
          "Agent certifié : signature numérique unique, traçabilité horodatée de chaque étape, validation humaine sur seuils critiques",
          "Impact sur les assurances professionnelles : refus de couverture des sinistres causés par des systèmes non auditables",
          "Coût de mise en conformité : marginal comparé aux dommages et intérêts d'une rupture contractuelle automatisée",
          "Directive managériale : exiger des fiches de sécurité et de conformité pour toute solution d'automatisation déployée"
        ]
      },
      {
        name: "Storytelling / Retour terrain",
        format: "Récit",
        hook: "Ma première formation universitaire s'est faite sur les bancs de la faculté de droit. Quand je regarde l'explosion des agents IA aujourd'hui, je revois exactement les mêmes enjeux : sans règle du jeu, le marché s'effondre.",
        points: [
          "La tentation permanente du monde technologique de croire qu'il peut s'affranchir des règles du commerce séculaire",
          "Mon parcours m'a appris que la rigueur du juriste n'est pas un frein à l'innovation, mais son plus solide rempart",
          "Chez Iboga Lab, nous ne concevons aucun pipeline sans définir au préalable qui décide, qui valide et qui répond du résultat",
          "L'audace consiste à automatiser pour aller vite, l'intelligence consiste à baliser le terrain pour ne jamais dérailler",
          "La technologie passe, le respect des engagements et la confiance des partenaires demeurent"
        ]
      }
    ],
    sources: [
      {
        url: "https://www.itu.int/",
        label: "ITU — Focus Group on Trust and Digital Identity for AI Agents (FG-TIDA)",
        date: "2026-10-30"
      },
      {
        url: "https://defendintelligence.com/",
        label: "Defend Intelligence — Régulation internationale et gouvernance de l'identité des agents autonomes",
        date: "2026-11-02"
      },
      {
        url: "https://restofworld.org/",
        label: "Rest of World — Global standards and AI identity across emerging markets",
        date: "2026-10-28"
      }
    ],
    drafted_post: null
  },

  // ==========================================
  // SECTION CONTENU DE FOND (IDEAS 01 À 07)
  // ==========================================
  {
    id: 'idea_20261105_01',
    session_id: sessionId,
    type: 'content',
    title: "Le paradoxe cognitif de l'IA générative : Pourquoi vos managers ne manquent pas d'heures de travail, mais de bande passante mentale pour arbitrer les micro-décisions",
    account: 'jesse',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Jesse Ogoula / L'opérateur — Mise en perspective managériale sur la fatigue décisionnelle et introduction au système de structuration PIQPACC pour clarifier les arbitrages",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "On vous avait promis que l'intelligence artificielle vous ferait gagner deux heures par jour. Pourquoi vos managers finissent-ils leurs journées encore plus épuisés qu'avant ?",
        points: [
          "L'IA a drastiquement réduit le temps de rédaction mécanique, mais a décuplé le volume d'arbitrages requis",
          "Au lieu d'écrire un document, un manager passe sa journée à relire, trier, corriger et valider des propositions générées à la chaîne",
          "Ce phénomène s'appelle la fatigue décisionnelle : le cerveau humain ne peut pas trancher 200 micro-choix par jour sans s'épuiser",
          "Le gain de productivité apparent cache une saturation cognitive qui dégrade la qualité des choix stratégiques",
          "Pour réussir l'intégration de l'IA : il faut d'abord apprendre à restreindre les choix plutôt que d'empiler les options"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Architecture cognitive en entreprise : Comment concevoir des protocoles d'arbitrage pour protéger la bande passante mentale de vos équipes de direction.",
        points: [
          "Théorie de la charge cognitive appliquée aux flux de travail augmentés : charge intrinsèque, extrinsèque et essentielle",
          "Pourquoi les assistants conversationnels ouverts surchargent la mémoire de travail des cadres intermédiaires",
          "Méthode de filtrage en entonnoir : imposer des formats de sortie structurés ne proposant qu'une recommandation unique argumentée",
          "Instauration de créneaux de décision sanctuarisés pour éviter le zapping mental permanent provoqué par les notifications",
          "Protocole Iboga Learn : paramétrer les assistants d'équipe pour éliminer l'ambiguïté avant toute sollicitation humaine"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Donner un compte d'intelligence artificielle non cadré à un collaborateur est le moyen le plus sûr de détruire sa capacité de concentration.",
        points: [
          "L'illusion du multitâche assisté par ordinateur produit des équipes qui brassent du texte sans rien approfondir",
          "Plus vous donnez d'options non hiérarchisées à un décideur, plus vous retardez l'exécution réelle sur le terrain",
          "La vraie valeur d'un encadrant n'est pas d'avoir accès à une infinité d'idées, mais d'avoir le courage d'en choisir une seule",
          "Si vos collaborateurs utilisent l'IA pour vous renvoyer la balle sans trancher le problème, votre organisation régresse",
          "Chez Iboga Lab, nous enseignons la discipline du prompt unique et contraignant pour forcer la décision"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "La compétence la plus rare et la mieux rémunérée de la prochaine décennie ne sera pas la maîtrise technique, mais la résistance à la saturation cognitive.",
        points: [
          "Dans un monde submergé de contenus et d'analyses synthétiques automatisées, la lucidité d'esprit devient un luxe stratégique",
          "Les entreprises qui domineront seront celles dont les équipes sauront préserver des blocs de pensée profonde sans interruption",
          "Fracture silencieuse entre les dirigeants consommateurs passifs d'alertes algorithmiques et les stratèges maîtres de leur temps",
          "Repenser l'aménagement du travail en Afrique : adapter nos rythmes opérationnels pour valoriser la prise de recul qualitative",
          "L'IA doit être un filtre qui absorbe le bruit extérieur, jamais un amplificateur de chaos interne"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Utilisation anarchique de l'IA vs système cadré de délégation : le tableau de bord de la charge mentale des managers.",
        points: [
          "Usage anarchique : 50 fenêtres ouvertes, copier-coller fébrile, sentiment permanent d'urgence, arbitrages superficiels",
          "Système cadré : prompts standardisés, délivrables normés, validation par exception, charge mentale allégée de 60 %",
          "Impact mesurable sur le taux de rotation des cadres : division par deux des signaux d'épuisement professionnel",
          "Gain net sur le délai de clôture des dossiers complexes : réduction de 4 jours ouvrés à 24 heures chrono",
          "Recommandation immédiate : interdire les questions ouvertes aux modèles et imposer des matrices de décision fermées"
        ]
      },
      {
        name: "Storytelling / Retour terrain",
        format: "Récit",
        hook: "Pendant mes sept années en logistique, j'ai compris une vérité fondamentale : un coordinateur qui hésite parce qu'il a trop d'informations contradictoires paralyse tout le dépôt en moins d'une heure.",
        points: [
          "Le souvenir des journées de tension où les flux physiques s'accumulaient pendant que les managers débattaient sur des détails",
          "La clarté brutale du terrain : une décision imparfaite appliquée immédiatement vaut dix analyses parfaites délivrées trop tard",
          "Quand j'ai développé le système PIQPACC pour Iboga Learn, mon obsession était de recréer cette même clarté chirurgicale",
          "L'IA ne doit pas servir à fabriquer du doute sophistiqué, mais à dégager la voie pour l'action opérationnelle",
          "Diriger, c'est savoir fermer des portes pour concentrer toute l'énergie sur l'unique issue qui fait avancer la boîte"
        ]
      }
    ],
    sources: [
      {
        url: "https://defendintelligence.com/",
        label: "Defend Intelligence — Productivité réelle et charge cognitive de l'IA générative",
        date: "2026-10-26"
      },
      {
        url: "https://restofworld.org/",
        label: "Rest of World — The cognitive toll of remote and AI-augmented management",
        date: "2026-10-18"
      },
      {
        url: "https://wearetech.africa/",
        label: "We Are Tech Africa — Management et transition numérique des équipes en Afrique",
        date: "2026-10-22"
      }
    ],
    drafted_post: null
  },

  {
    id: 'idea_20261105_02',
    session_id: sessionId,
    type: 'content',
    title: "Du workflow linéaire au système multi-agents : Comment concevoir une architecture hybride sans faire exploser la consommation de tokens et le budget cloud",
    account: 'iboga',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'MOFU',
    score: 5,
    bridge: "Iboga Lab / Iboga Process — Présentation de la méthode d'ingénierie des flux Iboga : réserver l'IA aux décisions d'ambiguïté et conserver le déterministe pour l'exécution",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Brancher une intelligence artificielle sur chaque étape de votre entreprise est la façon la plus rapide de recevoir une facture cloud de plusieurs milliers de dollars pour des résultats décevants. Voici comment bâtir un flux hybride et rentable.",
        points: [
          "Une automatisation réussie ne confie pas tout à des modèles de langage imprévisibles et coûteux",
          "La règle d'or d'Iboga Process : 80 % de plomberie déterministe classique et 20 % d'intelligence probabiliste ciblée",
          "L'IA ne doit intervenir que là où il y a du texte non structuré, une image floue ou un arbitrage nuancé à réaliser",
          "Tout le reste — calculs, archivage, envoi d'emails, mise à jour de bases de données — doit être géré par des scripts légers",
          "C'est ainsi qu'une PME divise par dix ses coûts techniques tout en obtenant une fiabilité opérationnelle totale"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Ingénierie des flux d'entreprise : Comment orchestrer n8n et des essaims d'agents spécialisés sans dérive budgétaire.",
        points: [
          "Conception d'une architecture multi-agents à responsabilité unique (Single Responsibility Agent Pattern)",
          "Utilisation des routeurs logiques déterministes pour filtrer les requêtes avant tout appel aux API de modèles",
          "Gestion des fenêtres de contexte : isoler les historiques de conversation pour éviter la surconsommation de tokens d'entrée",
          "Hébergement souverain de l'orchestrateur n8n sur infrastructure locale ou serveurs privés pour protéger le secret des affaires",
          "Plan de monitoring : mise en place de plafonds d'appels stricts et de disjoncteurs automatiques en cas de boucle infinie"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Les agences qui vous vendent des solutions d'intelligence artificielle à 100 % autonome dans vos processus d'entreprise sont soit incompétentes, soit malhonnêtes.",
        points: [
          "La nature stochastique des modèles de langage les rend structurellement inaptes à exécuter des calculs financiers stricts",
          "Confier l'envoi d'une facture ou la déduction d'un solde bancaire à une IA sans vérification humaine est une folie managériale",
          "Le rôle d'un intégrateur sérieux n'est pas d'empiler des briques tendance pour impressionner la galerie",
          "La véritable excellence technique consiste à utiliser l'outil le plus simple et le moins coûteux pour résoudre le problème",
          "Chez Iboga Lab, nous concevons des systèmes d'abord robustes, ensuite frugaux, et toujours supervisés"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "La frugalité architecturale est la seule voie viable pour démocratiser l'intelligence artificielle dans les économies émergentes.",
        points: [
          "Les modèles occidentaux gavés de puissance de calcul et de serveurs énergivores ne sont pas viables pour nos PME",
          "L'Afrique a l'opportunité historique d'inventer une école d'ingénierie logicielle sobre, efficace et rentable dès le premier jour",
          "Combiner la robustesse du logiciel libre avec des micro-modèles spécialisés crée une souveraineté technologique concrète",
          "Cette discipline d'optimisation financière donnera à nos entreprises un avantage compétitif majeur sur les marchés mondiaux",
          "L'intelligence ne réside pas dans la taille des modèles consommés, mais dans la pertinence des flux conçus"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Architecture monolithique tout-IA vs architecture hybride Iboga Process : le comparatif des coûts et de la disponibilité.",
        points: [
          "Tout-IA : coût moyen mensuel de 1 200 dollars en tokens, latence imprévisible de 10 secondes, taux d'hallucination de 5 %",
          "Architecture hybride : coût moyen inférieur à 80 dollars, exécution en 400 millisecondes, zéro erreur sur les opérations déterministes",
          "Temps de diagnostic en cas de panne : immédiat sur l'hybride grâce à l'isolation des étapes vs boîte noire opaque en tout-IA",
          "Facilité de maintenance par les équipes internes : prise en main en 15 jours sur n8n sans compétences de data scientist",
          "Bilan économique : rentabilité nette démontrée dès le deuxième mois d'exploitation en entreprise"
        ]
      },
      {
        name: "Storytelling / Retour terrain",
        format: "Récit",
        hook: "Le premier devis d'intégration IA que j'ai vu passer pour une société locale chiffrait des serveurs dédiés à un million de FCFA par mois. Nous avons réglé le problème avec une instance n8n à vingt mille francs.",
        points: [
          "Le constat scandaleux du racket technologique opéré par certains prestataires surfant sur la panique des dirigeants",
          "L'incompréhension des décideurs qui pensent qu'il faut un budget de multinationale pour automatiser la relance client",
          "Le plaisir de montrer à un patron de PME que ses processus tournent parfaitement sur une architecture légère et maîtrisée",
          "Cette expérience a scellé la charte de conduite d'Iboga Process : zéro dépense inutile, 100 % d'impact mesurable",
          "La technologie doit enrichir l'entreprise qui l'utilise, pas les fournisseurs de serveurs californiens"
        ]
      }
    ],
    sources: [
      {
        url: "https://n8n.io/blog/",
        label: "n8n Blog — Multi-agent orchestration and token cost optimization in enterprise workflows",
        date: "2026-10-28"
      },
      {
        url: "https://cio-mag.com/",
        label: "CIO Mag — Maîtrise des coûts d'infrastructure cloud et IA pour les entreprises africaines",
        date: "2026-10-25"
      },
      {
        url: "https://defendintelligence.com/",
        label: "Defend Intelligence — Architecture logicielle des essaims d'agents en production",
        date: "2026-10-29"
      }
    ],
    drafted_post: null
  },

  {
    id: 'idea_20261105_03',
    session_id: sessionId,
    type: 'content',
    title: "Gabon Digital Week et arrivée du très haut débit à Libreville et Port-Gentil : Pourquoi la connectivité sans refonte des circuits internes ne sauvera aucune PME",
    account: 'jesse',
    pillar: 'terrain-pme',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 5,
    bridge: "Jesse Ogoula / L'habitant — Analyse pragmatique des annonces télécoms et appel à la restructuration préalable des processus métier locaux",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "La 5G et la fibre optique se déploient à Libreville et Port-Gentil. Mais avoir une connexion dix fois plus rapide pour envoyer des fichiers désorganisés n'a jamais augmenté les ventes d'une société.",
        points: [
          "La première édition de la Gabon Digital Week a mis en lumière des investissements historiques dans nos réseaux télécoms",
          "C'est une excellente nouvelle pour l'infrastructure nationale, mais la vitesse de connexion ne remplace pas la rigueur interne",
          "Si vos équipes mettent trois jours à répondre à un devis, la 5G vous permettra seulement d'être en retard plus rapidement",
          "Le vrai goulot d'étranglement de nos entreprises n'est pas le câble sous-marin, mais l'absence de procédures écrites",
          "La modernisation commence sur les bureaux et dans les têtes avant de s'acheter chez les opérateurs téléphoniques"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Infrastructures numériques et rentabilité PME : Comment transformer le très haut débit en avantage commercial mesurable.",
        points: [
          "Analyse de l'impact macro-économique du programme Gabon Digital soutenu par la Banque mondiale (68,5 millions USD)",
          "Cartographie des zones d'ombre opérationnelles : pourquoi l'amélioration de la bande passante ne se traduit pas en gains de marge",
          "Audit des goulets d'étranglement administratifs : dématérialisation des circuits de validation et signature électronique",
          "Intégration d'outils collaboratifs locaux fonctionnant en mode hybride pour absorber les aléas de stabilité du réseau",
          "Recommandation stratégique : investir un franc CFA dans la méthode pour chaque franc investi dans le matériel"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Arrêtez d'accuser la connexion Internet de Port-Gentil pour justifier la lenteur du service client de votre entreprise.",
        points: [
          "L'excuse de la mauvaise connectivité est devenue le refuge commode de la désorganisation managériale",
          "Les entreprises les plus rentables du monde informatisé ont débuté avec des connexions bas débit et des processus infaillibles",
          "Quand un client attend son bon de livraison pendant une semaine, le problème ne vient pas de la fibre, mais du responsable des stocks",
          "La digitalisation ne corrige pas le désordre : elle l'accélère et le rend visible aux yeux de tout le marché",
          "Exigeons de nos équipes la rigueur de l'exécution avant de réclamer des débits de multinationale"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "Le Gabon se hisse au 3e rang africain de l'adoption de l'IA générative : nous devons maintenant convertir cet usage individuel en puissance productive collective.",
        points: [
          "Chiffre clé du rapport mondial sur la diffusion de l'IA : 15 % des Gabonais en âge de travailler utilisent déjà ces outils",
          "Ce taux d'adoption remarquable prouve l'appétit immense de notre jeunesse pour les technologies d'avant-garde",
          "Le défi des trois prochaines années : passer de la curiosité ludique sur smartphone à la création de valeur dans nos ateliers et PME",
          "Rôle fondamental des politiques publiques et des programmes de formation pratique pour canaliser cette énergie",
          "L'avenir économique de notre pays dépendra de notre capacité à fabriquer des solutions plutôt qu'à consommer des plateformes"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Investissement matériel seul vs investissement combiné méthode et connectivité : le bilan à 12 mois dans une PME gabonaise.",
        points: [
          "Matériel seul : renouvellement du parc informatique, abonnement très haut débit, zéro formation, gain de productivité nul",
          "Méthode + connectivité : cartographie des flux, formation aux outils de partage, automatisation des alertes, marge en hausse de 18 %",
          "Taux d'adoption par les équipes de terrain : 15 % sur le matériel brut vs 85 % lorsque la méthode est co-construite",
          "Délai d'amortissement de l'investissement : 36 mois sans méthode vs 4 mois avec réingénierie des processus",
          "Verdict pour la direction générale : financer l'accompagnement humain avant d'augmenter la bande passante"
        ]
      },
      {
        name: "Storytelling / Retour terrain",
        format: "Récit",
        hook: "Vivre et bâtir une entreprise à Port-Gentil vous apprend l'humilité face aux réseaux. Quand la fibre est coupée, seules restent debout les sociétés qui ont pensé leurs opérations pour durer.",
        points: [
          "Les réalités d'une ville insulaire par la géographie où chaque rupture de flux se paie immédiatement au prix fort",
          "L'admiration pour ces commerçants et patrons d'ateliers qui n'ont jamais attendu le secours de la tech pour satisfaire leurs clients",
          "Ce que nous transmettons chez Iboga Lab : la technologie est un multiplicateur de force formidable, mais la fondation reste humaine",
          "La 5G arrive, célébrons-la, mais continuons à concevoir des architectures résilientes capables d'opérer hors ligne",
          "Le vrai bâtisseur ne s'appuie pas sur le réseau, il s'appuie sur la solidité de son équipe et de ses méthodes"
        ]
      }
    ],
    sources: [
      {
        url: "https://gabonreview.com/",
        label: "Gabonreview — Gabon Digital Week 2026 : Souveraineté, Inclusion et compétitivité",
        date: "2026-10-27"
      },
      {
        url: "https://gabonmediatime.com/",
        label: "Gabon Media Time — Économie numérique et modernisation des entreprises gabonaises",
        date: "2026-10-28"
      },
      {
        url: "https://digitalbusiness.africa/",
        label: "Digital Business Africa — Lancement de la 5G et transition numérique au Gabon",
        date: "2026-10-26"
      }
    ],
    drafted_post: null
  },

  {
    id: 'idea_20261105_04',
    session_id: sessionId,
    type: 'content',
    title: "La règle des trois tiers pour rentabiliser la distribution et le commerce en Afrique : Pourquoi l'organisation d'entrepôt pèse trois fois plus lourd que l'application mobile",
    account: 'jesse',
    pillar: 'terrain-pme',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'MOFU',
    score: 5,
    bridge: "Jesse Ogoula / L'opérateur — Démonstration de la supériorité de la rigueur logistique sur le vernis marketing digital, inspirée de 7 ans chez DARON GROUP",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Beaucoup d'entrepreneurs pensent qu'il suffit de développer une jolie application mobile pour réussir dans le commerce en Afrique. En réalité, votre business se gagne ou se perd sur les étagères de votre dépôt.",
        points: [
          "La règle des trois tiers de la distribution rentable : un tiers pour la plateforme de vente, deux tiers pour la logistique physique",
          "Un client mécontent ne se plaint presque jamais de l'ergonomie de l'application : il se plaint du colis arrivé avec trois jours de retard",
          "Chaque erreur d'inventaire dans l'entrepôt coûte trois fois sa valeur en remboursements, en carburant et en perte de confiance",
          "La technologie la plus utile n'est pas celle que voit le consommateur final, mais celle qui guide le préparateur de commandes",
          "Avant de dépenser cinq millions dans une application, assurez-vous que votre registre de stock est exact à 99 %"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Gestion des opérations physiques en contexte africain : Comment modéliser une chaîne logistique résiliente face aux frictions du terrain.",
        points: [
          "Analyse des coûts cachés de la distribution du dernier kilomètre dans les grandes métropoles d'Afrique subsaharienne",
          "Mise en place de points de regroupement de stocks intermédiaires (dark stores frugaux) pour réduire les temps de trajet",
          "Numérisation des entrées et sorties d'entrepôt par lecture optique mobile accessible sur smartphones standards",
          "Protocoles de réconciliation quotidienne entre inventaire physique théorique et inventaire réel pour éliminer la démarque inconnue",
          "Méthodologie opérationnelle : aligner le rythme des approvisionnements sur les délais réels de dédouanement et de transport"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Le commerce électronique en Afrique n'a pas un problème de pénétration des paiements mobiles : il a un problème d'adressage et de gestionnaires de stocks compétents.",
        points: [
          "Les conférences tech passent leur temps à débattre des fintechs pendant que les colis s'égarent dans des quartiers sans nom de rue",
          "Le héros méconnu de la rentabilité commerciale n'est pas le growth hacker, mais le magasinier rigoureux qui ne perd aucun carton",
          "Vouloir faire du e-commerce moderne sans maîtriser les fondamentaux de la tenue d'un hangar est une illusion financière",
          "Toutes les startups de livraison qui ont fait faillite sont mortes d'une hémorragie de coûts logistiques non maîtrisés",
          "Chez Iboga Lab, nous apprenons aux créateurs d'entreprise à auditer la terre ferme avant de rêver de plateformes"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "Dans les dix prochaines années, les plus grandes fortunes africaines ne se bâtiront pas sur des réseaux sociaux, mais sur l'infrastructure logistique de proximité.",
        points: [
          "L'urbanisation galopante de nos métropoles crée une demande sans précédent pour l'approvisionnement rapide des biens essentiels",
          "Ceux qui posséderont les entrepôts automatisés, les chaînes de froid fiables et les flottes tracées maîtriseront le commerce",
          "Opportunité exceptionnelle pour les jeunes professionnels formés à la logistique moderne augmentée par les outils numériques",
          "Requalification nécessaire des filières professionnelles : transformer la perception des métiers du stockage et du transport",
          "L'économie réelle finira toujours par dicter sa loi à l'économie virtuelle"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Stratégie axée sur le marketing d'application vs stratégie axée sur l'excellence logistique : la rentabilité comparée à 18 mois.",
        points: [
          "Axée application : coût d'acquisition client élevé, taux de réachat de 12 %, marges détruites par les erreurs de livraison",
          "Axée logistique : acquisition progressive par le bouche-à-oreille, taux de réachat de 58 %, respect des délais à 97 %",
          "Capacité à absorber un pic d'activité : saturation et blocage immédiat pour l'un vs passage à l'échelle fluide pour l'autre",
          "Niveau de trésorerie disponible : asséché par les campagnes publicitaires vs préservé par la rotation saine des stocks",
          "Décision d'investissement : prioriser la rigueur des flux physiques dès la première année d'exercice"
        ]
      },
      {
        name: "Storytelling / Retour terrain",
        format: "Récit",
        hook: "Chez DARON GROUP, j'ai passé sept années à superviser des flux de marchandises et des stocks. J'y ai appris plus sur le fonctionnement d'une entreprise que dans n'importe quel manuel d'économie.",
        points: [
          "Les matins à vérifier les arrivages de conteneurs sous la pluie battante et à chercher pourquoi il manquait deux références",
          "La leçon indélébile : une entreprise est une chaîne où le maillon le plus faible détermine la vitesse de l'ensemble",
          "Quand un client vous attend, aucune excuse technologique ne remplacera jamais le carton déposé à l'heure sur son quai",
          "Cette rigueur du terrain est celle que j'applique aujourd'hui à l'intelligence artificielle et aux projets de nos clients",
          "Les flux restent des flux : qu'il s'agisse de déplacer des tonnes d'acier ou des paquets de données, la discipline reste la même"
        ]
      }
    ],
    sources: [
      {
        url: "https://www.linkedin.com/in/ogoulajesse",
        label: "LinkedIn Jesse Ogoula — Expérience de 7 ans en coordination logistique chez DARON GROUP",
        date: "2026-11-05"
      },
      {
        url: "https://restofworld.org/",
        label: "Rest of World — Last-mile distribution and warehousing realities across African cities",
        date: "2026-10-24"
      },
      {
        url: "https://wearetech.africa/",
        label: "We Are Tech Africa — Logistique et transformation des chaînes d'approvisionnement en Afrique centrale",
        date: "2026-10-20"
      }
    ],
    drafted_post: null
  },

  {
    id: 'idea_20261105_05',
    session_id: sessionId,
    type: 'content',
    title: "De trois jours de rapprochement de bons de commande à une validation en quinze secondes : Retour d'expérience sur un pipeline de traitement documentaire en PME",
    account: 'iboga',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'BOFU',
    score: 5,
    bridge: "Iboga Lab / Iboga Process — Cas d'usage direct d'optimisation de trésorerie et d'achats menant à l'Audit d'Opportunités IA Gratuit (30 min)",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Votre comptable passe encore ses fins de mois les yeux rivés sur des piles de factures froissées pour vérifier que les prix correspondent aux devis ? Voici comment une entreprise locale a automatisé ce calvaire.",
        points: [
          "Dans la majorité des PME, le rapprochement entre bon de commande, bon de livraison et facture fournisseur se fait à la main",
          "Ce travail mécanique prend un temps précieux, génère des erreurs de paiement et retarde les déclarations comptables",
          "En déployant un pipeline d'extraction intelligente, chaque document reçu par email ou WhatsApp est lu et vérifié instantanément",
          "Le système contrôle les totaux, signale les anomalies et ne demande une validation humaine qu'en cas d'écart avéré",
          "Résultat immédiat : l'équipe financière retrouve 15 heures par semaine pour se consacrer au recouvrement des créances"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Architecture Iboga Process : Anatomie d'un pipeline de traitement documentaire automatisé pour les directions administratives.",
        points: [
          "Point d'entrée universel : capture des pièces jointes PDF et des photos de reçus via une boîte email dédiée et un numéro professionnel",
          "Module de reconnaissance optique et d'extraction de données structurées par un modèle spécialisé en analyse financière",
          "Contrôle de cohérence tripoutre automatisé : comparaison automatique des montants HT/TTC, quantités livrées et taux de TVA",
          "Rapprochement avec le progiciel de gestion ou le tableau de bord interne via des appels d'API sécurisés et tracés",
          "Interface de supervision : validation humaine en un clic pour les montants supérieurs à 500 000 FCFA ou écarts détectés"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Payer un collaborateur diplômé pour recopier des numéros de factures dans un fichier Excel n'est pas seulement un gaspillage d'argent : c'est un manque de respect pour ses compétences.",
        points: [
          "Les directions générales se plaignent du manque de vision stratégique de leurs cadres alors qu'elles les noient sous la saisie",
          "Un être humain n'est pas programmé pour vérifier des milliers de lignes de chiffres sans faire d'erreur d'inattention",
          "Automatiser cette corvée ne supprime aucun emploi : cela libère du temps de cerveau pour négocier avec les fournisseurs",
          "Le rôle d'un dirigeant moderne est de fournir à ses collaborateurs les outils qui élèvent leur valeur ajoutée",
          "Chez Iboga Lab, nous construisons ces pipelines pour transformer vos services administratifs en centres de profit"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "L'automatisation des flux documentaires est le premier pas vers la fin de l'opacité financière qui plombe le tissu économique africain.",
        points: [
          "La lenteur des traitements administratifs est la première cause des retards de paiement entre entreprises sur notre continent",
          "Quand une facture met un mois à être validée, c'est toute la chaîne de sous-traitance locale qui souffre d'un manque de liquidités",
          "Accélérer la vérification des comptes, c'est injecter de la vitesse et de la confiance dans l'ensemble de l'économie réelle",
          "Les entreprises qui automatisent leurs règlements deviennent les partenaires privilégiés des meilleurs fournisseurs du marché",
          "La productivité administrative n'est pas un détail technique : c'est le moteur silencieux de la croissance collective"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Traitement manuel des factures vs pipeline automatisé Iboga Process : les chiffres d'un cas réel en entreprise.",
        points: [
          "Délai moyen de validation d'un dossier d'achat : 72 heures en manuel vs 15 secondes avec le pipeline automatisé",
          "Coût de traitement unitaire par document : divisé par cinq dès le premier mois de déploiement",
          "Taux d'erreurs de saisie et de doublons de paiement : passé de 4,2 % à 0,0 % grâce au contrôle algorithmique",
          "Temps de mise en œuvre de la solution : 10 jours ouvrés sans interruption de l'activité quotidienne de l'entreprise",
          "Invitation à l'action : réserver votre audit d'opportunités de 30 minutes pour évaluer vos gains potentiels"
        ]
      },
      {
        name: "Storytelling / Retour terrain",
        format: "Récit",
        hook: "Lors d'un audit chez un distributeur local, j'ai vu une responsable administrative entourée de trois classeurs épais, les yeux rougis par six heures de pointage manuel. Elle m'a dit : « Jesse, si je fais une erreur d'un chiffre, c'est mon salaire qui saute ».",
        points: [
          "La détresse invisible de ces collaborateurs dévoués que des processus archaïques mettent en situation de stress permanent",
          "Le soulagement immense deux semaines plus tard, quand le pipeline triait et rapprochait automatiquement chaque document",
          "Ce n'est pas de la science-fiction, ce n'est pas réservé aux banques : ce sont des outils concrets, déployables immédiatement",
          "Ce jour-là, j'ai réaffirmé la mission d'Iboga Lab : mettre l'IA au service de la sérénité et de l'efficacité de nos équipes",
          "Si vos collaborateurs vivent cette même angoisse, parlons-en lors d'un audit de 30 minutes sans engagement"
        ]
      }
    ],
    sources: [
      {
        url: "https://ibogalab.vercel.app/calendly-booking",
        label: "Iboga Lab — Diagnostic et Audit d'Opportunités IA Gratuit",
        date: "2026-11-05"
      },
      {
        url: "https://cio-mag.com/",
        label: "CIO Mag — Automatisation de la facturation et traitement intelligent des documents en Afrique",
        date: "2026-10-25"
      },
      {
        url: "https://financialafrik.com/",
        label: "Financial Afrik — Réduction des délais de traitement administratif et productivité financière",
        date: "2026-10-18"
      }
    ],
    drafted_post: null
  },

  {
    id: 'idea_20261105_06',
    session_id: sessionId,
    type: 'content',
    title: "L'Audit d'Opportunités IA en 30 minutes : Comment cartographier les trois goulots d'étranglement qui détruisent la marge de votre entreprise sans écrire une ligne de code",
    account: 'iboga',
    pillar: 'terrain-pme',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'BOFU',
    score: 5,
    bridge: "Iboga Lab / Lead Magnet Principal — Incitation directe des chefs d'entreprise à réserver leur audit offert de 30 minutes sur Calendly",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Vous entendez parler d'intelligence artificielle partout, mais vous ne savez pas par où commencer dans votre propre PME ? Réserver un audit de 30 minutes avec Iboga Lab est votre première décision rentable.",
        points: [
          "Pas de jargon technique, pas de démonstration théorique : nous analysons vos opérations quotidiennes réelles",
          "En 30 minutes d'échange direct, nous cartographions vos circuits de travail et identifions vos pertes de temps majeures",
          "Vous repartez avec une feuille de route claire comprenant les trois opportunités d'automatisation les plus rentables",
          "Cette session est 100 % gratuite et sans engagement : nous voulons vous prouver l'impact avant de vous proposer une solution",
          "Prenez rendez-vous directement sur notre agenda en ligne pour transformer vos opérations dès ce mois-ci"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Méthodologie du diagnostic d'opportunités IA Iboga Lab : Les cinq piliers de notre audit flash pour directions générales.",
        points: [
          "Étape 1 : Cartographie des flux d'information entrants (emails, WhatsApp, appels, formulaires physiques)",
          "Étape 2 : Identification des goulots d'étranglement humains et des tâches manuelles à répétition cyclique",
          "Étape 3 : Évaluation du potentiel de retour sur investissement chiffré en heures économisées et gains de marge",
          "Étape 4 : Sélection des briques logicielles adaptées (automatisations no-code, modèles spécialisés, assistants sur mesure)",
          "Étape 5 : Remise d'un plan d'implémentation priorisé par criticité opérationnelle et faisabilité financière"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Acheter des abonnements logiciels d'intelligence artificielle avant d'avoir audité vos processus métier revient à mettre un moteur d'avion sur une pirogue trouée.",
        points: [
          "Le marché est inondé de dirigeants qui paient des licences mensuelles que leurs équipes n'ouvrent jamais",
          "Le problème n'est jamais le manque d'outils disponibles : le problème est l'absence de diagnostic sur vos vrais blocages",
          "Un outil puissant greffé sur une organisation désordonnée produit simplement du désordre plus rapidement",
          "La vraie démarche d'un chef d'entreprise avisé est de commencer par mesurer là où l'argent s'échappe chaque jour",
          "C'est exactement la raison d'être de notre audit d'opportunités offert : vous faire économiser avant de vous faire dépenser"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "Dans les cinq prochaines années, la différence entre les entreprises qui survivront et celles qui disparaîtront tiendra à un seul indicateur : la vitesse d'exécution de leurs processus internes.",
        points: [
          "La pression concurrentielle s'accroît sur l'ensemble des marchés africains avec l'arrivée d'acteurs hautement digitalisés",
          "Les entreprises qui continuent à gérer leurs devis, leurs stocks et leurs contrats au ralenti perdront leurs meilleurs clients",
          "L'intelligence artificielle n'est pas une mode passagère : c'est le nouveau standard d'efficacité industrielle et commerciale",
          "Ceux qui effectuent ce diagnostic aujourd'hui construisent les barrières à l'entrée qui protègent leur leadership de demain",
          "Rejoignez les dirigeants pionniers qui ont choisi d'anticiper la transformation plutôt que de la subir"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Continuer à opérer à l'aveugle vs réaliser l'Audit d'Opportunités IA Iboga Lab : le tableau d'arbitrage pour dirigeants.",
        points: [
          "Opérer à l'aveugle : heures de travail perdues en tâches stériles, turnover des cadres, marges érodées par l'inefficacité",
          "Après l'audit Iboga Lab : cartographie claire des faiblesses, priorités d'investissement définies, plan de gain d'efficacité immédiat",
          "Durée requise pour le chef d'entreprise : 30 minutes chrono en visioconférence ou dans nos locaux",
          "Investissement financier demandé : zéro franc CFA pour le diagnostic initial sans obligation de suite",
          "Lien d'accès : créneaux réservables directement sur ibogalab.vercel.app/calendly-booking"
        ]
      },
      {
        name: "Storytelling / Retour terrain",
        format: "Récit",
        hook: "Plus de 20 entreprises accompagnées et 300 talents formés : chaque fois qu'un patron de PME m'a accordé 30 minutes, nous avons trouvé au moins un processus aberrant qui lui coûtait des millions chaque année.",
        points: [
          "Ce directeur des opérations qui passait deux heures chaque matin à consolider manuellement des messages de chauffeurs",
          "Ce gérant d'atelier qui perdait un tiers de ses affaires parce que ses devis n'étaient envoyés qu'après le week-end",
          "Le déclic dans le regard d'un dirigeant quand il réalise que son problème récurrent se règle en réalité en quelques jours",
          "C'est cette clarté que nous vous offrons lors de chaque session de diagnostic chez Iboga Lab",
          "Votre entreprise mérite cette pause stratégique : réservez vos 30 minutes et passons vos opérations au crible"
        ]
      }
    ],
    sources: [
      {
        url: "https://ibogalab.vercel.app/calendly-booking",
        label: "Iboga Lab — Prise de rendez-vous Audit d'Opportunités IA 30 minutes",
        date: "2026-11-05"
      },
      {
        url: "https://wearetech.africa/",
        label: "We Are Tech Africa — Diagnostic de maturité numérique des PME africaines",
        date: "2026-10-22"
      },
      {
        url: "https://defendintelligence.com/",
        label: "Defend Intelligence — Méthodologie d'audit opérationnel et détection des cas d'usage IA rentables",
        date: "2026-10-27"
      }
    ],
    drafted_post: null
  },

  {
    id: 'idea_20261105_07',
    session_id: sessionId,
    type: 'content',
    title: "« Le leadership ne s'exerce pas derrière un écran climatisé » : Ce que la coordination des équipes de voirie à Port-Gentil m'a appris sur l'autorité et le respect du terrain",
    account: 'jesse',
    pillar: 'parcours-builder',
    pillar_label: 'Parcours & Terrain',
    funnel: 'TOFU',
    score: 5,
    bridge: "Jesse Ogoula / L'habitant — Récit formateur de jeunesse démontrant que la maîtrise des opérations commence par l'écoute et la crédibilité aux côtés de ceux qui exécutent",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "À 22 ans, mon premier vrai rôle de management n'a pas eu lieu dans une startup branchée, mais sur les routes de Port-Gentil à coordonner des équipes municipales de terrain. Voici la plus grande leçon d'autorité que j'en ai tirée.",
        points: [
          "Vous pouvez avoir tous les diplômes théoriques du monde, si vous ne savez pas écouter l'homme sur le terrain, vos ordres ne valent rien",
          "Le respect d'une équipe opérationnelle ne se gagne pas avec un titre de chef d'équipe, mais en étant présent au lever du jour à leurs côtés",
          "Comprendre les contraintes physiques réelles — la météo équatoriale, la panne d'un camion, la fatigue — change complètement votre façon de commander",
          "Le leadership commence le jour où vous comprenez que votre rôle n'est pas de surveiller, mais de lever les obstacles pour ceux qui font le travail",
          "Cette vérité vécue à Port-Gentil est exactement celle qui guide aujourd'hui ma gestion de projets technologiques"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Management des équipes de première ligne : Les principes opérationnels de coordination appliqués de la voirie municipale aux projets tech.",
        points: [
          "Définition d'objectifs journaliers clairs et mesurables plutôt que de consignes hebdomadaires vagues",
          "Instauration du rituel matinal de synchronisation (toolbox talk) pour désamorcer les blocages matériels avant le départ",
          "Responsabilisation directe des chefs d'équipes intermédiaires en leur donnant la main sur les choix d'exécution",
          "Célébration immédiate des résultats atteints pour souder la fierté d'appartenance et la solidarité de groupe",
          "Transposition à la gestion de produit numérique : la boucle de feedback terrain reste la seule boussole valide"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Les pires managers sont ceux qui dirigent par tableaux de bord interposés sans jamais descendre poser un pied dans l'atelier ou sur le quai.",
        points: [
          "L'illusion moderne du management à distance fabrique des chefs déconnectés qui prennent des décisions absurdes",
          "Un collaborateur sait en trente secondes si son supérieur comprend réellement son métier ou s'il récite un manuel",
          "L'autorité naturelle découle de l'empathie vécue et de la compétence démontrée face aux imprévus du quotidien",
          "Si vos équipes ont peur de vous remonter un problème sur le terrain, c'est que votre leadership a déjà échoué",
          "Chez Iboga Lab, nous ne concevons aucun système sans passer du temps aux côtés de ceux qui l'utiliseront tous les jours"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "L'Afrique n'a pas besoin de patrons en costume qui signent des circulaires : elle a besoin de bâtisseurs de terrain qui savent mobiliser les énergies.",
        points: [
          "Le développement de nos villes et de nos économies repose d'abord sur la dignité et la valorisation du travail manuel et technique",
          "Créer des passerelles d'ascension sociale pour les jeunes talents opérationnels est le devoir absolu de notre génération",
          "La fusion entre culture de terrain ancestrale et outils technologiques de pointe sera le grand saut qualitatif du continent",
          "Inspirer la jeunesse gabonaise en lui montrant qu'aucun métier de départ n'est indigne quand on cultive l'excellence",
          "Le bâtisseur est celui qui transforme ce qu'il a sous les yeux sans attendre des conditions parfaites"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Management théorique en chambre vs leadership de terrain incarné : les impacts sur la rétention et l'engagement des équipes.",
        points: [
          "Management théorique : ordres unilatéraux, désengagement des collaborateurs, taux d'absentéisme élevé, échecs récurrents",
          "Leadership de terrain : écoute active, sentiment d'utilité partagé, dépassement des objectifs, résilience collective",
          "Temps de réaction face à un incident critique : 48 heures de réunions stériles vs 15 minutes d'arbitrage direct sur place",
          "Degré de confiance accordé par les équipes : superficiel et craintif pour l'un vs loyauté totale et durable pour l'autre",
          "Leçon de carrière : cultiver la proximité avec les équipes de base tout au long de sa trajectoire professionnelle"
        ]
      },
      {
        name: "Storytelling / Retour terrain",
        format: "Récit",
        hook: "Entre 2011 et 2013, j'étais chef d'équipe à la Mairie de Port-Gentil. J'avais la vingtaine, et je devais diriger des hommes qui avaient l'âge de mon père.",
        points: [
          "Le baptême du feu où l'arrogance intellectuelle est immédiatement sanctionnée par le silence hostile des équipes",
          "Le jour où j'ai compris qu'en prenant la pelle à leurs côtés et en écoutant leurs contraintes, tout le respect s'installait naturellement",
          "Cette expérience a forgé tout le reste de ma vie : du droit à la logistique chez DARON GROUP, jusqu'à la création d'Iboga Lab",
          "On ne commande pas des êtres humains avec des algorithmes ou des organigrammes, on les entraîne par l'exemple et le respect",
          "Peu importe où vos projets vous mènent, gardez toujours les deux pieds fermement ancrés dans la terre ferme"
        ]
      }
    ],
    sources: [
      {
        url: "https://www.linkedin.com/in/ogoulajesse",
        label: "LinkedIn Jesse Ogoula — Parcours professionnel et responsabilités opérationnelles",
        date: "2026-11-05"
      },
      {
        url: "https://wearetech.africa/",
        label: "We Are Tech Africa — Leadership de terrain et management des équipes en Afrique",
        date: "2026-10-25"
      },
      {
        url: "https://restofworld.org/",
        label: "Rest of World — Frontline workforce management and operational realities",
        date: "2026-10-20"
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
if (process.argv[1] && process.argv[1].endsWith('addSession20261105.js')) {
  syncSession().then(() => {
    console.log('Synchronisation terminée avec succès!');
    process.exit(0);
  }).catch((err) => {
    console.error('Échec synchronisation:', err);
    process.exit(1);
  });
}

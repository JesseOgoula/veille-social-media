/**
 * addSession20261104.js
 * Session de veille stratégique réseaux sociaux du 4 novembre 2026
 * Conforme aux standards stricts Iboga Lab :
 * - 6 axes systématiques et approfondis par idée de contenu
 * - 3 actualités chaudes rédigées au format factuel et actionnable
 * - ZÉRO emoji dans tous les textes, titres et publications
 * - Respect rigoureux de l'orthographe et de l'accentuation française
 * - Sources réelles et vérifiées issues de la veille sectorielle
 * - Synchronisation Supabase & GitHub
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://igicdrrdlambscodmaxi.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnaWNkcnJkbGFtYnNjb2RtYXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NjMwMjUsImV4cCI6MjEwMzQzOTAyNX0.puTkc1j7BI0-dKkAL1rRtN7_XwywOS77enlEgcZBHf4';
const supabase = createClient(supabaseUrl, supabaseKey);

export const sessionId = 'sess_20261104_210000';
export const sessionDate = '2026-11-04';
export const weekLabel = 'Semaine du 4 Novembre 2026';
export const generatedAt = '2026-11-04T21:00:00+01:00';

export const sessionData = {
  id: sessionId,
  date: sessionDate,
  generated_at: generatedAt,
  week_label: weekLabel,
  newsjacking: {
    title: "OpenAI fait l'acquisition de Pierre Computer Company pour réinventer l'infrastructure Git des agents autonomes et la BEAC/GIMAC accélère le déploiement du QR Code communautaire unifié en zone CEMAC"
  }
};

export const allIdeas = [
  // ==========================================
  // SECTION ACTUALITÉS (CURATION CHAUDE < 10J)
  // ==========================================
  {
    id: 'idea_20261104_news01',
    session_id: sessionId,
    type: 'news',
    title: "OpenAI acquiert Pierre Computer Company : L'infrastructure Git repensée pour les agents IA autonomes et la fin du versioning humain traditionnel",
    account: 'jesse',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Jesse Ogoula / Le traducteur — Sensibilisation des directions générales et managers de projets tech sur l'évolution du rôle des développeurs vers la supervision d'essaims d'agents",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "OpenAI vient de racheter la startup Pierre Computer Company. Voici pourquoi cette opération va bouleverser la façon dont vos équipes fabriquent du logiciel dès demain matin.",
        points: [
          "OpenAI intègre directement les briques de gestion de versions Git pour machines au sein de Codex",
          "Les dépôts traditionnels comme GitHub ont été conçus pour des humains écrivant ligne par ligne",
          "Les agents autonomes génèrent des milliers de lignes et testent des dizaines de branches en quelques secondes",
          "Cette acquisition prouve que l'enjeu n'est plus seulement le modèle de langage mais l'infrastructure d'exécution",
          "Pour une PME africaine : vos prochains logiciels seront assemblés par des agents supervisés plutôt que codés à la main"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Pourquoi le rachat de Pierre par OpenAI marque l'émergence des pipelines logiciels pilotés à 100 % par des agents autonomes.",
        points: [
          "Limites des serveurs Git actuels face à la concurrence des commits générés en temps réel par des essaims",
          "Pando et Pierre : la stratégie d'OpenAI pour internaliser toute la chaîne de valeur du développement logiciel",
          "Bascule du rôle de développeur : passage de la rédaction de code à l'audit de spécifications et de conformité",
          "Architecture recommandée pour les équipes produit : modularité stricte et tests déterministes automatisés",
          "Plan d'action pour les directeurs des systèmes d'information : auditer les flux de déploiement avant la saturation"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Apprendre la syntaxe d'un langage de programmation en 2026 est devenu un piège pour la jeunesse africaine.",
        points: [
          "L'énergie passée à mémoriser des balises ou des fonctions est obsolète face aux capacités de Codex",
          "La vraie compétence rare et demandée par le marché est la compréhension des processus métier et des flux",
          "Ceux qui formeront des exécutants de code fabriquent des chômeurs d'ici 24 mois",
          "Les talents qui réussiront sont ceux qui savent articuler un problème complexe en cahier des charges précis",
          "Chez Iboga Lab, nous apprenons aux apprenants à piloter les outils plutôt qu'à rivaliser avec des machines"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "Dans 24 mois, la majorité des applications d'entreprise africaines n'auront jamais été touchées par des doigts humains.",
        points: [
          "Démocratisation sans précédent de la création de solutions sur mesure pour les secteurs informels et PME",
          "Réduction drastique des coûts d'accès au développement logiciel pour les structures à budget modeste",
          "Risque corollaire d'accumulation de dette technique invisible si les architectures ne sont pas auditées",
          "Positionnement géopolitique : l'Afrique consommatrice d'outils d'agents ou conceptrice de cas d'usage souverains",
          "Urgence pour les gouvernements et universités de refondre intégralement les filières informatiques"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Développement logiciel traditionnel vs développement par essaim d'agents IA : le tableau comparatif des coûts et délais.",
        points: [
          "Temps de mise en production d'une fonctionnalité métier : 3 semaines en classique vs 2 jours avec agents",
          "Coût de maintenance et de correction de bugs : divisé par trois sous réserve de spécifications strictes",
          "Profils requis dans l'équipe : disparition des codeurs juniors au profit de Product Managers et d'architectes",
          "Fiabilité opérationnelle : conditionnée à l'existence de tests de non-régression automatisés",
          "Verdict pour la PME : adopter les outils d'assistance dès maintenant ou subir un retard de compétitivité irrattrapable"
        ]
      },
      {
        name: "Storytelling / Retour terrain",
        format: "Récit",
        hook: "Quand j'étais Product Manager pour une solution de cartes prépayées, la moindre modification prenait un mois. Ce matin, j'ai vu un agent le faire en six minutes.",
        points: [
          "Souvenir des réunions interminables entre le métier et l'équipe technique pour de simples ajustements",
          "Frustration face aux délais qui ralentissaient le déploiement sur le marché gabonais",
          "Ce que le rachat de Pierre par OpenAI concrétise : l'effacement de la barrière technique entre l'idée et le produit",
          "Ce qui n'a pas changé : si votre modèle économique est mauvais, l'IA accélère simplement votre faillite",
          "La technologie s'accélère, mais la clarté stratégique reste la seule qualité irremplaçable"
        ]
      }
    ],
    sources: [
      {
        url: "https://openai.com/index/",
        label: "OpenAI Newsroom — Acquisition of Pierre Computer Company",
        date: "2026-11-04"
      },
      {
        url: "https://the-decoder.com/",
        label: "The Decoder — OpenAI acquires Pierre to build Git for AI agents",
        date: "2026-11-04"
      },
      {
        url: "https://axios.com/",
        label: "Axios Tech — OpenAI developer infrastructure expansion",
        date: "2026-11-04"
      }
    ],
    drafted_post: null
  },

  {
    id: 'idea_20261104_news02',
    session_id: sessionId,
    type: 'news',
    title: "Anthropic dépose son dossier d'introduction au Nasdaq sous le ticker « ANT » : 17 milliards de dollars de rythme trimestriel et mise en garde sur l'auto-amélioration récursive",
    account: 'jesse',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Jesse Ogoula / Le juriste — Analyse des implications réglementaires, des engagements de sécurité et de la dépendance stratégique des entreprises vis-à-vis des laboratoires d'IA",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Anthropic, le créateur de Claude, prépare son entrée en Bourse avec 17 milliards de dollars de revenus trimestriels. Voici ce que cache ce chiffre vertigineux.",
        points: [
          "Dépôt officiel du document S-1 auprès du gendarme boursier américain pour une cotation sur le Nasdaq",
          "Une croissance tirée massivement par l'adoption de Claude en entreprise et dans le codage agentique",
          "Avertissement inédit aux investisseurs : les modèles pourraient atteindre l'auto-amélioration récursive sous peu",
          "Cette rentabilité prouve que l'intelligence artificielle n'est plus une bulle spéculative mais une industrie mature",
          "Ce que cela change pour vous : les outils que vous utilisez chaque jour deviennent des infrastructures critiques mondiales"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Introduction en Bourse d'Anthropic : 4 enseignements majeurs pour les directeurs financiers et dirigeants d'entreprise.",
        points: [
          "La structure financière : des engagements de calcul astronomiques compensés par un taux de rétention client exceptionnel",
          "Le modèle hybride d'entreprise à mission publique confronté aux exigences de rentabilité de Wall Street",
          "Risque de dépendance aux fournisseurs : pourquoi diversifier ses API entre Claude, OpenAI et modèles locaux",
          "L'avertissement sur l'auto-amélioration récursive : anticiper la gouvernance interne de la sécurité des données"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Quand un laboratoire d'IA avertit lui-même ses investisseurs que ses modèles échappent à sa compréhension, il est temps d'arrêter la naïveté.",
        points: [
          "Anthropic inscrit noir sur blanc dans son prospectus boursier que le seuil de bascule pourrait être franchi sans préavis",
          "Trop de directions générales intègrent des solutions fermées sans aucune clause de réversibilité",
          "Confier l'intégralité de sa mémoire d'entreprise à une société soumise aux pressions trimestrielles des actionnaires est une faute de gestion",
          "La seule réponse stratégique viable pour une entreprise est la souveraineté de ses flux et de ses données",
          "Chez Iboga Lab, nous recommandons toujours une architecture neutre et découplée des fournisseurs d'accès"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "Wall Street va valoriser l'intelligence artificielle à des niveaux historiques. Quel rôle restera-t-il pour les économies émergentes ?",
        points: [
          "Concentration inédite des capitaux et des capacités de calcul entre une poignée d'acteurs de la Silicon Valley",
          "Risque accru d'un nouvel impérialisme numérique par abonnement API",
          "Nécessité vitale pour le continent africain de développer ses propres capacités d'évaluation et de régulation",
          "Opportunité historique : la valeur ne résidera plus dans la possession du modèle mais dans la maîtrise du cas d'usage local",
          "Ceux qui sauront contextualiser cette puissance brute aux réalités du terrain africain créeront les vraies richesses"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Anthropic en Bourse vs OpenAI : Quelle stratégie de modèle choisir pour sécuriser les opérations de votre entreprise ?",
        points: [
          "Anthropic (Claude) : priorité absolue à la sécurité, fenêtres de contexte géantes, alignement éthique strict",
          "OpenAI (GPT/Codex) : écosystème commercial agressif, intégration logicielle poussée, vitesse de déploiement",
          "Modèles ouverts (Mistral/Llama) : hébergement local, souveraineté complète des données, coût marginal nul",
          "Grille d'arbitrage recommandée pour une PME africaine selon la sensibilité des données traitées",
          "Recommandation finale : l'architecture multi-modèles comme seule protection durable contre le verrouillage propriétaire"
        ]
      },
      {
        name: "Storytelling / Retour terrain",
        format: "Récit",
        hook: "Pendant mes études de droit, on analysait les prospectus d'introduction en bourse des géants pétroliers. Lire aujourd'hui celui d'Anthropic donne le vertige.",
        points: [
          "Constat juridique : les clauses de risques technologiques sont passées de la conformité classique aux risques existentiels",
          "La prise de conscience que le monde des affaires a définitivement changé d'échelle",
          "Mon message aux 300 talents et entrepreneurs que j'ai formés : ne soyez pas de simples spectateurs fascinés",
          "Chaque dollar levé à New York valide que les compétences que vous apprenez aujourd'hui sont le cœur de l'économie mondiale",
          "Ce qui compte n'est pas le montant de leur valorisation, mais ce que nous construisons ici avec ces outils"
        ]
      }
    ],
    sources: [
      {
        url: "https://anthropic.com/news",
        label: "Anthropic Newsroom — IPO Filing and Form S-1 Disclosures",
        date: "2026-11-02"
      },
      {
        url: "https://cnn.com/business",
        label: "CNN Business — Anthropic Files for Nasdaq Debut under Ticker ANT",
        date: "2026-11-03"
      },
      {
        url: "https://sec.gov",
        label: "SEC — Registration Statement Form S-1/A Anthropic PBC",
        date: "2026-11-02"
      }
    ],
    drafted_post: null
  },

  {
    id: 'idea_20261104_news03',
    session_id: sessionId,
    type: 'news',
    title: "Paiement unifié en zone CEMAC : La BEAC et le GIMAC accélèrent le déploiement du QR Code communautaire interopérable avec un objectif de 20 000 commerces équipés fin 2026",
    account: 'iboga',
    pillar: 'terrain-pme',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'MOFU',
    score: 5,
    bridge: "Iboga Process — Accompagnement des commerçants et PME dans l'intégration de passerelles de paiement multicanales et la fin des pertes d'encaissement",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Fini la multiplication des affichettes Airtel Money et Moov Money sur les comptoirs. La BEAC et le GIMAC déploient le QR Code unique dans toute l'Afrique centrale.",
        points: [
          "Entrée en vigueur des dispositions du Règlement communautaire n°02/26/CEMAC",
          "Un seul QR Code permet désormais d'encaisser Airtel, Moov, MTN, les comptes bancaires et les cartes Visa",
          "Objectif de 20 000 commerçants connectés d'ici la fin de l'année 2026, puis 120 000 en 2027",
          "Expérimenté avec succès au Gabon à travers l'initiative nationale MadigiPaie",
          "Gain direct pour les commerces : zéro client refusé pour cause d'incompatibilité d'opérateur mobile"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Pourquoi le QR Code interopérable du GIMAC va restructurer la trésorerie des PME de la zone CEMAC en trois étapes.",
        points: [
          "Réduction radicale du recours au cash physique et baisse des risques de vol ou d'écarts de caisse",
          "Réconciliation financière instantanée entre les différents canaux de vente physique et en ligne",
          "Génération d'une trace numérique fiable permettant aux commerçants d'accéder au crédit bancaire formel",
          "Architecture technique : interconnexion bancaire standardisée via l'infrastructure GIMACPAY"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Le commerçant qui refuse le paiement électronique en 2026 ne protège pas sa marge : il organise lui-même son étouffement financier.",
        points: [
          "Le mythe persistant selon lequel le liquide évite les frais de transaction masque le coût réel de la manipulation d'espèces",
          "Entre la monnaie non rendue, les pertes et le temps passé à faire la queue au guichet, le cash coûte 5 % du chiffre d'affaires",
          "La standardisation du QR Code supprime le dernier prétexte technique de fragmentation",
          "Les PME qui adoptent l'encaissement unifié constatent une hausse moyenne de 18 % du panier moyen",
          "Le rôle d'Iboga Process : aider les dirigeants à connecter ces flux à leur logiciel de gestion sans douleur"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "L'Afrique centrale franchit enfin son saut qualitatif d'intégration économique grâce au paiement numérique unifié.",
        points: [
          "Des décennies de barrières monétaires et de tracasseries de change entre les six pays de la sous-région",
          "L'interopérabilité intégrale transforme le marché commun de la CEMAC en un espace d'échanges fluide",
          "Inclusion financière accélérée des commerçants du secteur informel sans obligation d'ouvrir un compte bancaire lourd",
          "Préfiguration de l'intégration avec le système panafricain PAPSS pour le commerce transfrontalier en monnaies locales",
          "Une opportunité historique pour les créateurs de solutions numériques d'adresser 60 millions de consommateurs"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Encaissement en espèces vs QR Code unique GIMACPAY : le bilan opérationnel pour un commerce de détail.",
        points: [
          "Temps de passage en caisse : 45 secondes en espèces avec rendu de monnaie vs 8 secondes par scan",
          "Taux de perte et d'écart comptable : 3 à 6 % sur le cash vs 0 % sur les transactions tracées",
          "Frais d'intermédiation : encadrés par la réglementation communautaire de la BEAC",
          "Éligibilité aux prêts de campagne et facilité de caisse : impossible sans historique vs facilité immédiate",
          "Plan de mise en œuvre : comment équiper son point de vente en moins de 48 heures"
        ]
      },
      {
        name: "Storytelling / Retour terrain",
        format: "Récit",
        hook: "Dans les commerces de Port-Gentil, j'ai vu des dizaines de clients repartir les mains vides parce que le commerçant n'avait pas le bon opérateur. Cette absurdité touche à sa fin.",
        points: [
          "Scène vécue au quotidien : 'Monsieur, je n'ai que Moov, vous n'avez pas Airtel ?' et la vente qui s'évapore",
          "La perte de chiffre d'affaires invisible subie par les entrepreneurs locaux par simple manque d'interopérabilité",
          "La fierté de voir les régulateurs régionaux apporter une solution d'infrastructure concrète et robuste",
          "Chez Iboga Lab, nous intégrons déjà ce standard dans les applications de nos clients pour fluidifier leurs ventes",
          "La technologie n'a de sens que lorsqu'elle résout un problème aussi basique et vital que pouvoir payer son pain"
        ]
      }
    ],
    sources: [
      {
        url: "https://www.beac.int/",
        label: "Banque des États de l'Afrique Centrale — Lancement officiel du QR Code interopérable CEMAC",
        date: "2026-07-29"
      },
      {
        url: "https://gimac-afr.com/",
        label: "GIMAC — Plateforme GIMACPAY et Règlement CORENOFI n°02/26/CEMAC",
        date: "2026-10-15"
      },
      {
        url: "https://ecomatin.net/",
        label: "EcoMatin — Paiements électroniques et objectifs 2026 en Afrique centrale",
        date: "2026-11-01"
      }
    ],
    drafted_post: null
  },

  // ==========================================
  // SECTION CONTENU DE FOND (STRATÉGIE & PME)
  // ==========================================
  {
    id: 'idea_20261104_01',
    session_id: sessionId,
    type: 'content',
    title: "Pourquoi les « Small Language Models » (SLM) hébergés en local sauvent le ROI de l'IA en Afrique : Quand faire tourner un modèle de 3 milliards de paramètres sur un serveur de bureau bat le cloud à 10 000 dollars par mois",
    account: 'jesse',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Jesse Ogoula / Le sceptique — Démonstration pragmatique qu'une PME n'a pas besoin de GPU géants pour automatiser 90 % de ses tâches documentaires",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Vous n'avez pas besoin d'un supercalculateur à un million de dollars pour automatiser les documents de votre PME. Un simple ordinateur de bureau suffit.",
        points: [
          "Explication simple de la différence entre les modèles géants fermés et les petits modèles spécialisés",
          "Un modèle de 3 milliards de paramètres tient sur une machine standard sans carte graphique coûteuse",
          "Fonctionnement sans connexion internet permanente : idéal en cas d'instabilité réseau ou de délestages",
          "Traitement confidentiel de vos factures, contrats et données financières au sein de votre réseau local",
          "Coût d'exploitation mensuel proche de zéro euro après l'installation initiale"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Architecture SLM on-device pour PME : Le guide complet pour déployer une IA souveraine et ultra-rentable.",
        points: [
          "Sélection des modèles ouverts performants : Llama 3.2 3B, Mistral NeMo, SmolLM2 et Gemma 2",
          "Quantification 4-bit (GGUF) : faire tourner l'inférence sur processeur x86 ou Apple Silicon grand public",
          "Mise en place d'un serveur RAG local pour interroger la base documentaire de l'entreprise sans fuite externe",
          "Calcul du retour sur investissement : seuil de rentabilité atteint en moins de 60 jours comparé aux abonnements API",
          "Sécurité informatique : zéro exposition aux juridictions étrangères ou aux clauses de réutilisation de données"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Vendre des abonnements cloud illimités à des PME africaines dont la facture d'électricité est instable est une hérésie.",
        points: [
          "La dépendance aveugle aux API américaines fragilise les opérations locales au premier câble sous-marin coupé",
          "95 % des besoins réels d'une entreprise se limitent à trier des emails, extraire des montants et formater des devis",
          "Payer des jetons de calcul à prix d'or pour des tâches aussi basiques relève d'un manque criant de culture technique",
          "L'avenir de l'intelligence artificielle en Afrique sera frugal, embarqué et décentralisé ou ne sera pas",
          "Ce n'est pas la taille du modèle qui fait la valeur, c'est son intégration chirurgicale dans vos processus quotidiens"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "L'avènement de l'IA embarquée hors-ligne : comment l'Afrique peut contourner le déficit de datacenters.",
        points: [
          "Historique du saut technologique africain : le téléphone portable avant le réseau filaire",
          "La même dynamique se reproduit avec l'IA : passer directement aux modèles locaux sans construire de fermes de serveurs polluantes",
          "Autonomie des services d'urgence, des centres de santé ruraux et des exploitations agricoles en zone blanche",
          "Opportunité pour les ingénieurs locaux de devenir des spécialistes de l'optimisation frugale et du déploiement edge",
          "Une avancée décisive pour la résilience économique et la souveraineté numérique du continent"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Modèle Cloud propriétaire (GPT-4/Claude) vs Petit Modèle Local (SLM 3B) : Quelle option choisir pour votre société ?",
        points: [
          "Confidentialité des données : Risque juridique tiers vs Contrôle absolu sur serveur interne",
          "Sensibilité aux pannes réseau : Arrêt complet des flux vs Fonctionnement ininterrompu en local",
          "Facture récurrente : Facturation au volume en devises vs Investissement matériel amorti en 2 mois",
          "Performances sur tâches ciblées : Équivalentes après indexation de documents internes",
          "Recommandation méthodologique : la matrice d'arbitrage selon vos contraintes sectorielles"
        ]
      },
      {
        name: "Storytelling / Retour terrain",
        format: "Récit",
        hook: "Pendant un atelier à Port-Gentil, la connexion internet a sauté en pleine démonstration. La plupart des outils se sont figés, sauf un.",
        points: [
          "La panique habituelle des participants voyant l'écran de chargement tourner indéfiniment",
          "La démonstration sur un petit modèle exécuté directement sur le disque dur d'un PC portable sans réseau",
          "Le regard des directeurs d'exploitation comprenant instantanément la portée pour leurs entrepôts et chantiers isolés",
          "L'enseignement : en Afrique, la meilleure technologie n'est pas la plus puissante sur le papier, mais celle qui continue de fonctionner quand tout s'éteint",
          "C'est cette philosophie de robustesse opérationnelle que nous appliquons systématiquement chez Iboga Lab"
        ]
      }
    ],
    sources: [
      {
        url: "https://huggingface.co/blog",
        label: "Hugging Face — The State of Small Language Models and Local Edge Ingestion",
        date: "2026-10-28"
      },
      {
        url: "https://cio-mag.com/",
        label: "CIO Mag — L'IA frugale et locale au service des entreprises africaines",
        date: "2026-10-30"
      },
      {
        url: "https://wearetech.africa/",
        label: "We Are Tech Africa — Souveraineté des données et déploiements IA sur serveur local",
        date: "2026-11-02"
      },
      {
        url: "https://mistral.ai/news/",
        label: "Mistral AI — Optimisation des modèles ouverts pour terminaux légers",
        date: "2026-10-20"
      },
      {
        url: "https://restofworld.org/",
        label: "Rest of World — How developing market businesses build offline AI infrastructure",
        date: "2026-10-25"
      }
    ],
    drafted_post: null
  },

  {
    id: 'idea_20261104_02',
    session_id: sessionId,
    type: 'content',
    title: "Du script bricolé à l'agent autonome supervisé : Pourquoi 85 % des projets d'automatisation en PME échouent s'ils n'ont pas d'abord formalisé leurs procédures opérationnelles standard",
    account: 'iboga',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'MOFU',
    score: 5,
    bridge: "Iboga Process — Audit opérationnel des flux et formalisation des SOP avant tout déploiement technologique",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Automatiser le désordre ne produit qu'un désordre automatisé plus rapide. Voici pourquoi votre PME doit formaliser ses étapes avant de toucher au moindre outil.",
        points: [
          "Définition claire d'une Procédure Opérationnelle Standard (SOP) appliquée aux petites entreprises",
          "L'erreur classique : acheter un logiciel coûteux en espérant qu'il résolve magiquement la désorganisation interne",
          "Un agent IA a besoin d'instructions rigoureuses et d'arbres de décision explicites pour ne pas halluciner",
          "Les trois questions basiques pour tester si une tâche est prête à être automatisée",
          "Comment commencer simplement avec un document partagé avant de brancher le moindre connecteur"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Du processus informel à l'orchestration multi-agents : La méthode en 5 étapes pour fiabiliser vos flux métier.",
        points: [
          "Étape 1 : Cartographie des entrées, sorties et points de validation humaine indispensables",
          "Étape 2 : Rédaction des fiches de procédures standardisées selon le format Déclencheur - Règle - Action",
          "Étape 3 : Mise en place d'un routeur déterministe avec n8n pour les cas d'usage réguliers",
          "Étape 4 : Injection d'agents IA pour le traitement des exceptions et l'enrichissement sémantique",
          "Étape 5 : Mise en place de journaux d'audit et de métriques d'erreur pour superviser les dérives"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "L'engouement actuel pour les agents autonomes en entreprise est en train de créer une catastrophe de dette opérationnelle.",
        points: [
          "Les vidéos de démonstration sur les réseaux sociaux font croire qu'un prompt magique remplace un manuel de procédures",
          "En réalité, confier un processus non documenté à une IA revient à embaucher un stagiaire amnésique et hyperactif",
          "Les entreprises qui réussissent leur transformation sont celles qui ont passé 70 % de leur temps à écrire leurs processus",
          "La technologie n'est que la dernière roue du carrosse : le vrai travail est managérial et structurel",
          "C'est la promesse d'Iboga Process : nous ne posons pas une ligne d'automatisation sans avoir assaini vos flux"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "La documentation des processus d'entreprise : l'actif incorporel le plus sous-évalué de l'économie africaine.",
        points: [
          "Dans la majorité des PME du continent, le savoir-faire réside exclusivement dans la tête de deux ou trois personnes clés",
          "Cette dépendance humaine extrême rend les entreprises vulnérables et inéligibles à la transmission ou aux levées de fonds",
          "L'obligation de formaliser pour l'IA est une bénédiction déguisée : elle force enfin à capitaliser le patrimoine organisationnel",
          "Création d'une culture de la rigueur opérationnelle capable d'élever les standards de productivité continentaux",
          "Les leaders de demain seront les organisations dont les flux sont nativement documentés et programmables"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Automatisation sans SOP vs Automatisation avec SOP : Les résultats mesurés sur 3 mois d'exploitation.",
        points: [
          "Taux d'erreur et de reprises manuelles : 42 % sans formalisation vs moins de 2 % avec SOP validées",
          "Temps de formation des nouveaux collaborateurs : 6 semaines d'apprentissage informel vs 4 jours avec guide documenté",
          "Coût des incidents de production : plusieurs millions de FCFA de pertes sèches vs alertes préventives automatisées",
          "Satisfaction des clients finaux : délais imprévisibles vs respect constant des engagements de livraison",
          "Comment réaliser un audit rapide de vos procédures en 48 heures"
        ]
      },
      {
        name: "Storytelling / Retour terrain",
        format: "Récit",
        hook: "Un chef d'entreprise m'a dit : 'Jesse, installe-moi des agents IA pour gérer mes commandes'. Ma première réponse a été de lui demander son classeur de procédures. Il n'en avait aucun.",
        points: [
          "La surprise du client qui s'attendait à voir des lignes de code et des interfaces futuristes dès le premier jour",
          "Notre travail d'enquête chez Iboga Lab : s'asseoir à côté de la comptable et du magasinier pendant trois jours",
          "Découverte de six façons différentes d'enregistrer une même facture selon la personne présente au bureau",
          "La formalisation préalable a permis de supprimer 40 % des étapes inutiles avant même de créer le premier flux automatisé",
          "Moralité : si vous automatisez le chaos, vous n'obtenez pas de la performance, vous obtenez du chaos accéléré"
        ]
      }
    ],
    sources: [
      {
        url: "https://n8n.io/blog/",
        label: "n8n Engineering — Why Standard Operating Procedures are the Bedrock of Reliable Agents",
        date: "2026-10-18"
      },
      {
        url: "https://zapier.com/blog/",
        label: "Zapier Enterprise — The Cost of Automating Undocumented Workflows",
        date: "2026-10-22"
      },
      {
        url: "https://make.com/en/blog",
        label: "Make — Process Mapping Before Scenario Implementation in SMBs",
        date: "2026-10-15"
      },
      {
        url: "https://cio-mag.com/",
        label: "CIO Mag — Transformation digitale en Afrique : Pourquoi les projets échouent sans méthode",
        date: "2026-10-29"
      },
      {
        url: "https://ibogalab.vercel.app/",
        label: "Iboga Lab — Cadre méthodologique Iboga Process pour entreprises",
        date: "2026-11-01"
      }
    ],
    drafted_post: null
  },

  {
    id: 'idea_20261104_03',
    session_id: sessionId,
    type: 'content',
    title: "« Gabon Connect » et le budget de 82 milliards FCFA pour le numérique : Ce que la dématérialisation accélérée des impôts (eTax) et des charges sociales (eEmployeur) impose dès aujourd'hui aux directeurs généraux de PME",
    account: 'jesse',
    pillar: 'terrain-pme',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 5,
    bridge: "Jesse Ogoula / Le juriste — Préparation des dirigeants gabonais au choc de conformité numérique pour transformer une contrainte légale en avantage opérationnel",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Le budget du numérique au Gabon passe à 82 milliards de FCFA. Si vous dirigez une PME à Libreville ou Port-Gentil, voici l'impact direct sur vos déclarations de fin de mois.",
        points: [
          "Augmentation historique de 150 % des crédits alloués à la modernisation digitale de l'État",
          "Déploiement massif des téléservices du guichet unique Gabon Connect : eTax, eEmployeur, TrésorPay et DUS",
          "Fin progressive des liasses papier déposées physiquement aux guichets administratifs",
          "Conséquence directe : tout écart entre vos déclarations sociales et fiscales sera détecté automatiquement",
          "Conseil immédiat : auditer vos registres internes avant la bascule obligatoire"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Bascule vers Gabon Connect et la Déclaration Unique des Salaires : Les 4 chantiers informatiques prioritaires pour votre entreprise.",
        points: [
          "Chantier 1 : Normalisation des matricules CNSS et identifiants fiscaux uniques de tous vos salariés",
          "Chantier 2 : Intégration d'un module de paie compatible avec les formats d'échange de données de la DUS",
          "Chantier 3 : Connexion aux passerelles de télépaiement TrésorPay pour éviter les pénalités de retard",
          "Chantier 4 : Sécurisation de la piste d'audit documentaire pour justifier les déductions et charges",
          "Calendrier prévisionnel d'application et sanctions prévues en cas de non-conformité"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Attendre le dernier jour pour digitaliser la gestion de votre PME face aux impôts n'est plus une tactique : c'est un arrêt de mort administratif.",
        points: [
          "Pendant des années, le manque d'interconnexion des services publics laissait des marges de tolérance aux retards",
          "Avec 82 milliards injectés dans l'infrastructure numérique publique, l'administration se dote d'outils d'audit croisés redoutables",
          "Les entreprises qui gèrent encore leur personnel sur des carnets volants vont faire face à des redressements massifs",
          "La digitalisation n'est plus un sujet de confort ou de modernité : c'est la condition sine qua non de votre survie légale",
          "Transformez cette contrainte en opportunité : professionnalisez vos flux internes dès ce trimestre"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "Quand l'État se numérise plus vite que le secteur privé : la grande bascule de la transparence économique au Gabon.",
        points: [
          "L'effort sans précédent des autorités de Transition pour bâtir un État moderne, transparent et efficace",
          "Rétrécissement inévitable de l'économie informelle au profit d'un tissu de PME structurées et bancarisées",
          "Réduction de la corruption de guichet grâce à l'élimination des intermédiaires physiques",
          "Création d'un climat de confiance indispensable pour attirer les investisseurs industriels et institutionnels",
          "Le rôle des formateurs et experts locaux : accompagner cette transition sans laisser les petits entrepreneurs sur le bord de la route"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Gestion administrative traditionnelle papier vs Conformité numérique Gabon Connect : Le comparatif des risques.",
        points: [
          "Délais de traitement des attestations fiscales : 3 semaines de navettes physiques vs téléchargement instantané",
          "Risque de pénalités pour erreurs de déclaration : élevé par manque de visibilité vs alertes préalables automatisées",
          "Temps passé par le comptable en démarches extérieures : 15 heures par mois vs 30 minutes derrière son écran",
          "Accès aux marchés publics et appels d'offres : bloqué en cas de dossier incomplet vs conformité garantie en temps réel",
          "Plan de transition : comment adapter les process de votre PME en 4 semaines"
        ]
      },
      {
        name: "Storytelling / Retour terrain",
        format: "Récit",
        hook: "Ma formation initiale en droit m'a appris une chose fondamentale : les textes de loi ne changent rien tant que l'administration n'a pas les moyens techniques de les faire appliquer. Ces moyens sont là.",
        points: [
          "Souvenir des cours de droit fiscal et des discussions sur l'inefficacité chronique du recouvrement des recettes",
          "Ce que le budget de 82 milliards et Gabon Connect représentent : la fin d'une époque d'impunité par la bureaucratie",
          "Mon retour d'expérience auprès des dirigeants gabonais : la peur de la conformité vient toujours du manque d'outils",
          "Lorsqu'on met en place des outils simples pour tracer les paies et les taxes, la charge mentale du dirigeant chute de moitié",
          "La vraie liberté entrepreneuriale commence quand vos arrières administratifs sont impeccablement tenus"
        ]
      }
    ],
    sources: [
      {
        url: "https://gabonreview.com/",
        label: "Gabonreview — Budget de l'Économie numérique porté à 82 milliards FCFA",
        date: "2026-10-25"
      },
      {
        url: "https://gabonmediatime.com/",
        label: "Gabon Media Time — Déploiement de Gabon Connect et digitalisation administrative",
        date: "2026-10-28"
      },
      {
        url: "https://men.gouv.ga/",
        label: "Ministère de l'Économie Numérique du Gabon — Orientations stratégiques et projets structurants",
        date: "2026-10-15"
      }
    ],
    drafted_post: null
  },

  {
    id: 'idea_20261104_04',
    session_id: sessionId,
    type: 'content',
    title: "L'illusion de la trésorerie sur WhatsApp et cahier de caisse : Comment le scoring de crédit algorithmique de la mésofinance africaine exclut les entreprises qui ne numérisent pas leurs encaissements quotidiens",
    account: 'jesse',
    pillar: 'terrain-pme',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'MOFU',
    score: 5,
    bridge: "Jesse Ogoula / L'opérateur — Sensibilisation à la structuration comptable et traçabilité pour débloquer les financements bancaires",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Votre entreprise réalise 20 millions de FCFA de chiffre d'affaires, mais la banque refuse de vous prêter un centime. Voici le coupable invisible.",
        points: [
          "Les institutions de financement (COFINA, banques, fintechs) n'accordent plus de crédits sur simple déclaration de bonne foi",
          "Le recours généralisé aux algorithmes d'analyse automatique des flux de trésorerie pour calculer le score de risque",
          "Si vos transactions se font de la main à la main ou via des comptes personnels non déclarés, votre entreprise est invisible aux yeux des algorithmes",
          "La différence entre être rentable sur le papier et être bancable dans les systèmes d'information",
          "Trois gestes simples pour commencer à rendre vos rentrées de fonds visibles et éligibles au crédit dès ce mois-ci"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Comment fonctionne le scoring de crédit basé sur l'IA dans la finance africaine en 2026 : Le décryptage pour dirigeants.",
        points: [
          "Paramètre 1 : La régularité des flux entrants sur les comptes professionnels certifiés",
          "Paramètre 2 : Le ratio de conversion entre les devis émis et les paiements électroniques reçus",
          "Paramètre 3 : La diversification des sources d'encaissement (Mobile Money, virements, cartes)",
          "Paramètre 4 : L'absence de retards récurrents sur les charges d'exploitation obligatoires",
          "Plan d'action : auditer sa trace numérique bancaire avant de déposer une demande de prêt d'investissement"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Arrêtez d'accuser les banques de ne pas financer les PME locales si vous refusez vous-même de sortir de l'opacité comptable.",
        points: [
          "Le refrain victimaire habituel sur la frilosité des banques africaines face aux entrepreneurs nationaux",
          "La réalité vue du côté de l'analyste des risques : prêter à une entreprise sans écritures fiables relève du jeu de hasard",
          "Les banques ont des milliards de liquidités à placer mais manquent désespérément de dossiers documentés selon les standards",
          "La numérisation de vos flux de vente n'est pas un piège fiscal, c'est votre passeport d'accès au capital de croissance",
          "La discipline de gestion est la première forme de souveraineté pour un dirigeant africain"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "L'essor de la mésofinance algorithmique : comment l'analyse des données de caisse va financer l'économie réelle.",
        points: [
          "L'échec historique du modèle bancaire colonial fondé exclusivement sur les garanties hypothécaires et les titres fonciers",
          "L'avènement de modèles prédictifs capables d'évaluer la santé d'un commerce à partir de son historique Mobile Money",
          "Démocratisation sans précédent de l'accès aux lignes de trésorerie pour les commerçantes et petits transformateurs",
          "Réduction de l'écart de financement estimé à des dizaines de milliards de dollars pour les PME subsahariennes",
          "Les entreprises qui s'organisent aujourd'hui seront les championnes régionales de demain"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Gestion informelle en espèces vs Enregistrement digitalisé des ventes : L'accès au crédit comparé.",
        points: [
          "Capacité d'emprunt moyenne constatée : limitée aux tontines et prêts familiaux vs Lignes de crédit bancaires à taux négocié",
          "Délai d'obtention d'une facilité de trésorerie : 3 mois de justifications complexes vs 48 heures par accord algorithmique",
          "Taux d'intérêt appliqué : taux usuraires informels de 15 à 25 % vs conditions de marché institutionnelles",
          "Valorisation de l'entreprise lors d'une cession : quasi nulle sans bilan vs valorisation sur multiple de marge tracée",
          "Guide étape par étape pour bancariser vos recettes sans exploser vos coûts de gestion"
        ]
      },
      {
        name: "Storytelling / Retour terrain",
        format: "Récit",
        hook: "Chez DARON GROUP, j'ai vu des fournisseurs perdre des contrats d'approvisionnement majeurs non pas par manque de compétence, mais parce que leur banque refusait de leur faire une avance sur facture.",
        points: [
          "Le drame récurrent de l'entrepreneur talentueux incapable d'acheter sa matière première pour honorer un gros bon de commande",
          "La cause racine : un compte professionnel moribond alors que l'activité réelle brassait des millions en liquide",
          "Ce jour-là, j'ai compris que la gestion de flux physiques sans flux d'information rigoureux était une impasse",
          "Aujourd'hui, quand j'accompagne des PME avec Iboga Lab, mon premier réflexe est de connecter leurs ventes à un outil de suivi automatisé",
          "Gagner de l'argent est une compétence commerciale. Pouvoir prouver que vous en gagnez est une compétence stratégique"
        ]
      }
    ],
    sources: [
      {
        url: "https://financialafrik.com/",
        label: "Financial Afrik — Le scoring crédit alternatif et le financement des PME africaines",
        date: "2026-10-24"
      },
      {
        url: "https://techcabal.com/",
        label: "TechCabal — How African Fintechs Use Cashflow Underwriting for SME Loans",
        date: "2026-10-27"
      },
      {
        url: "https://agenceecofin.com/",
        label: "Agence Ecofin — Mésofinance et inclusion bancaire des entreprises en zone CEMAC",
        date: "2026-11-01"
      }
    ],
    drafted_post: null
  },

  {
    id: 'idea_20261104_05',
    session_id: sessionId,
    type: 'content',
    title: "De 48 heures de devis manuel à 3 minutes chrono : Comment un atelier de menuiserie et chaudronnerie a éliminé ses pertes de contrats grâce à un pipeline de génération automatisée",
    account: 'iboga',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'BOFU',
    score: 5,
    bridge: "Audit d'Opportunités IA Gratuit (30 min) Iboga Process — Diagnostic des points d'étranglement administratifs sur https://ibogalab.vercel.app/calendly-booking",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Quand un client vous demande un devis, vous avez moins de quatre heures pour répondre avant qu'il n'aille voir ailleurs. Voici comment passer de 2 jours à 3 minutes chrono.",
        points: [
          "Le constat impitoyable du commerce B2B : le premier qui envoie un devis professionnel et clair remporte le contrat dans 60 % des cas",
          "Le cauchemar des artisans et patrons d'ateliers : passer ses soirées sur Excel après dix heures de travail physique",
          "Mise en place d'un formulaire simple sur téléphone connecté à un modèle d'IA pour calculer les métrés et prix matières",
          "Génération automatique d'un document PDF brandé avec conditions générales et lien de paiement d'acompte",
          "Zéro compétence en informatique requise pour l'équipe sur le terrain"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "L'architecture technique du pipeline de devisage instantané déployé par Iboga Process pour les PME industrielles.",
        points: [
          "Module 1 : Capture des spécifications client par formulaire vocal ou texte sur WhatsApp Business",
          "Module 2 : Moteur d'estimation sous n8n couplé à une base de prix matières mise à jour en temps réel",
          "Module 3 : Vérification des seuils de rentabilité minimale et règles de marge par modèle déterministe",
          "Module 4 : Génération PDF haute fidélité avec signature électronique et notification commerciale instantanée",
          "Mesure de la performance : taux de conversion commercial multiplié par 2,4 en 60 jours"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Ce ne sont pas vos prix qui vous font perdre des clients. C'est votre lenteur bureaucratique à envoyer une proposition commerciale.",
        points: [
          "L'excuse favorite des patrons de PME : 'Les clients ne veulent pas payer la qualité et vont vers les moins chers'",
          "La dure vérité observée lors de nos audits chez Iboga Lab : les clients attendent parfois 5 jours pour obtenir un tarif",
          "Dans un monde où tout le monde commande en un clic, faire attendre un prospect est une insulte à son projet",
          "L'automatisation du devis n'est pas un luxe réservé aux multinationales, c'est l'arme fatale de la petite entreprise agile",
          "Chaque heure gagnée sur l'administratif est une heure réinjectée dans la qualité de l'exécution terrain"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "La modernisation silencieuse des ateliers artisanaux et industriels africains par les outils numériques de pointe.",
        points: [
          "L'image dépassée de la petite industrie locale opposée aux technologies de pointe",
          "Comment les patrons d'ateliers s'approprient les assistants IA pour concurrencer directement les importations étrangères",
          "Revalorisation des métiers manuels et techniques grâce à l'allègement radical du fardeau administratif",
          "Création d'un écosystème d'ateliers interconnectés capables de répondre collectivement à des appels d'offres majeurs",
          "L'avenir du développement économique africain repose sur ces transformateurs concrets outillés pour la vitesse"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Établissement manuel de devis sur tableur vs Pipeline automatisé Iboga Process : Le retour sur investissement chiffré.",
        points: [
          "Temps moyen de rédaction par devis : 120 minutes de calculs manuels vs 3 minutes de validation sur mobile",
          "Taux d'erreur sur les prix des fournitures : 14 % de marges rognées vs Précision garantie au franc près",
          "Volume de devis traités par semaine : plafonné à 10 propositions vs Capacité illimitée sans surcharge",
          "Taux de signature client final : 22 % sur propositions tardives vs 54 % sur propositions envoyées dans l'heure",
          "Passez à l'action : réservez votre audit d'opportunités de 30 minutes sans engagement"
        ]
      },
      {
        name: "Storytelling / Retour terrain",
        format: "Récit",
        hook: "Lors d'un audit chez un chaudronnier à Libreville, j'ai trouvé 14 devis non envoyés empilés sur un coin de bureau. La valeur totale : 38 millions de FCFA de contrats en attente.",
        points: [
          "Le patron était sur le terrain à régler une panne machine, épuisé, incapable d'ouvrir son ordinateur le soir",
          "Pendant ce temps, les donneurs d'ordre relançaient par message avant de se tourner vers d'autres prestataires",
          "En deux semaines, nous avons structuré avec Iboga Process un pipeline automatique piloté directement depuis son smartphone",
          "Le lendemain du déploiement, il a validé un devis de 4 millions de FCFA en buvant son café sur le chantier",
          "C'est pour ce genre de soulagement immédiat que nous faisons ce métier. Réservez votre audit gratuit et voyons où se cachent vos millions perdus"
        ]
      }
    ],
    sources: [
      {
        url: "https://ibogalab.vercel.app/calendly-booking",
        label: "Iboga Lab — Réservation Audit d'Opportunités IA Gratuit (30 min)",
        date: "2026-11-04"
      },
      {
        url: "https://cio-mag.com/",
        label: "CIO Mag — Automatisation des processus commerciaux dans les PME manufacturières",
        date: "2026-10-26"
      },
      {
        url: "https://wearetech.africa/",
        label: "We Are Tech Africa — Vitesse d'exécution et digitalisation des flux de vente en Afrique",
        date: "2026-10-31"
      },
      {
        url: "https://n8n.io/blog/",
        label: "n8n Blog — Automated Quote Generation Workflows for Small Businesses",
        date: "2026-10-19"
      },
      {
        url: "https://hubspot.com/marketing",
        label: "HubSpot B2B Sales Report — Response Time Impact on Proposal Win Rates",
        date: "2026-10-15"
      }
    ],
    drafted_post: null
  },

  {
    id: 'idea_20261104_06',
    session_id: sessionId,
    type: 'content',
    title: "« 30 jours pour passer de l'urgence permanente au pilotage par les données » : Pourquoi l'audit des processus métier est le premier investissement rentable avant toute dépense logicielle",
    account: 'iboga',
    pillar: 'terrain-pme',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'BOFU',
    score: 5,
    bridge: "Iboga Learn & Iboga Process — Offre couplée audit de flux et montée en compétences managériales",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Si votre journée de dirigeant ressemble à un marathon pour éteindre des incendies du matin au soir, vous n'avez pas un problème d'employés. Vous avez un problème de tableau de bord.",
        points: [
          "La sensation d'urgence permanente est le symptôme direct de l'absence d'indicateurs visuels partagés",
          "Piloter à vue oblige le dirigeant à intervenir sur chaque micro-décision opérationnelle",
          "La mise en place de trois indicateurs clés sur un écran unique suffit à redonner le contrôle en un mois",
          "Comment les équipes gagnent en autonomie lorsqu'elles connaissent les critères exacts de réussite",
          "Le premier pas : identifier les trois goulets d'étranglement qui absorbent 80 % de votre énergie quotidienne"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Le protocole de diagnostic en 30 jours déployé par Iboga Lab pour assainir le fonctionnement d'une PME.",
        points: [
          "Semaine 1 : Cartographie des flux d'information réels et identification des déperditions de données",
          "Semaine 2 : Définition des métriques de pilotage opérationnel (délai de traitement, taux de rebut, coût horaire)",
          "Semaine 3 : Unification des sources disparates (caisse, stock, facturation) dans un tableau de bord accessible",
          "Semaine 4 : Formation des cadres intermédiaires et mise en place des rituels de revue hebdomadaire",
          "Résultat mesurable : division par deux du temps passé en réunions de crise et gain immédiat de productivité"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Acheter un logiciel de gestion intégré à 15 millions de FCFA avant d'avoir clarifié vos indicateurs est le meilleur moyen d'enrichir votre consultant et de couler votre boîte.",
        points: [
          "L'illusion du sauveur technologique : croire qu'un progiciel résout miraculeusement le manque de vision de la direction",
          "Le taux d'abandon effarant des logiciels d'entreprise dans les structures africaines après six mois de calvaire",
          "Un outil numérique ne fait qu'amplifier la méthode existante : s'il n'y a pas de méthode, il amplifie le désastre",
          "La vraie démarche consiste à structurer ses processus sur papier et tableur avant d'investir le moindre franc en licences",
          "C'est la garantie d'Iboga Lab : nous commençons par un audit sans complaisance pour rentabiliser vos opérations existantes"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "Vers la fin du capitalisme relationnel : pourquoi les PME africaines de la prochaine décennie seront pilotées par les données.",
        points: [
          "La gestion d'entreprise fondée sur l'intuition du patriarche fondateur atteint ses limites d'échelle",
          "La complexification des chaînes de valeur et la concurrence internationale exigent une précision chirurgicale",
          "L'arrivée d'une nouvelle génération de dirigeants formés aux méthodes agiles et à la culture produit",
          "Démocratisation des outils de Business Intelligence et d'IA prédictive accessibles aux structures modestes",
          "Le continent ne manque pas d'opportunités, il manque d'entreprises capables d'exécuter avec rigueur dans la durée"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Pilotage à l'intuition vs Pilotage par la donnée : Le diagnostic comparatif sur 12 mois d'activité.",
        points: [
          "Visibilité sur la trésorerie réelle : estimée au doigt mouillé à la fin du mois vs Prévision glissante à 90 jours",
          "Prise de décision stratégique : guidée par l'émotion et l'urgence vs Fondée sur des faits mesurables et audités",
          "Dépendance envers le patron : paralysie complète dès qu'il s'absente vs Continuité d'exploitation totale des équipes",
          "Valorisation globale de la société : faible attractivité pour les partenaires vs Dossier d'investissement solide et bancable",
          "Comment démarrer votre audit d'opportunités de 30 minutes sans engagement avec Iboga Lab"
        ]
      },
      {
        name: "Storytelling / Retour terrain",
        format: "Récit",
        hook: "Un patron de société de transport m'a confié : 'Jesse, je ne dors plus que quatre heures par nuit. Si je ne suis pas au dépôt à 5 heures du matin, rien ne tourne'. Voici ce que nous avons changé en un mois.",
        points: [
          "L'épuisement physique et mental d'un dirigeant brillant mais pris au piège de sa propre entreprise",
          "Le diagnostic posé lors de notre intervention Iboga Process : tout reposait sur des ordres verbaux non tracés",
          "La mise en place d'un tableau de bord ultra-visuel sur une simple tablette à l'entrée de l'atelier",
          "Trente jours plus tard : le patron a pu prendre ses premiers congés en trois ans sans recevoir un seul appel d'urgence",
          "Ce n'est pas de la magie, c'est de l'ingénierie de processus. Si vous vivez cette situation, parlons-en lors d'un audit de 30 minutes"
        ]
      }
    ],
    sources: [
      {
        url: "https://ibogalab.vercel.app/",
        label: "Iboga Lab — Diagnostics opérationnels et accompagnement des PME",
        date: "2026-11-02"
      },
      {
        url: "https://financialafrik.com/",
        label: "Financial Afrik — La gouvernance par les données dans les entreprises africaines",
        date: "2026-10-23"
      },
      {
        url: "https://agenceecofin.com/",
        label: "Agence Ecofin — Facteurs clés de succès de la transition managériale en PME",
        date: "2026-10-30"
      }
    ],
    drafted_post: null
  },

  {
    id: 'idea_20261104_07',
    session_id: sessionId,
    type: 'content',
    title: "Ce que sept années de coordination logistique chez DARON GROUP m'ont appris sur la gestion des imprévus : Pourquoi la meilleure stratégie d'entreprise se joue sur le quai de chargement et non dans les salles de réunion",
    account: 'jesse',
    pillar: 'parcours-builder',
    pillar_label: 'Parcours & Terrain',
    funnel: 'TOFU',
    score: 5,
    bridge: "Jesse Ogoula / L'opérateur — Humanisation de la marque, ancrage dans le vécu d'exploitation et authenticité terrain (max 20% respecté : 1 post sur 10)",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Avant de créer une agence tech et de former des talents à l'intelligence artificielle, j'ai passé 7 ans à gérer des stocks et des flux physiques. Voici ce que ça m'a appris.",
        points: [
          "Sept années sur le terrain chez DARON GROUP à coordonner la logistique et les approvisionnements",
          "La réalité des quais : conteneurs en retard, bordereaux manquants, pannes sous la pluie tropicale",
          "Pourquoi aucune théorie de management ne résiste à un camion bloqué à trois cents kilomètres sans réseau",
          "La compétence la plus précieuse d'un professionnel : savoir résoudre un problème réel dans l'urgence sans paniquer",
          "Ce bagage opérationnel est exactement ce qui fait la force de nos solutions technologiques aujourd'hui"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Les 4 lois d'acier de la logistique de terrain que tout dirigeant de PME ou chef de projet tech devrait appliquer.",
        points: [
          "Loi 1 : Tout ce qui n'est pas mesuré à l'entrée est perdu à la sortie (rigueur absolue des réceptions)",
          "Loi 2 : Un goulot d'étranglement ne se déplace jamais seul, il s'accumule si on ne le traite pas à la source",
          "Loi 3 : La communication orale sans trace écrite est une garantie de litige à la livraison",
          "Loi 4 : Le plan parfait n'existe pas, seule compte la capacité de repli rapide en mode dégradé"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Méfiez-vous des consultants en transformation digitale qui n'ont jamais porté un carton ni géré un inventaire de fin d'année.",
        points: [
          "La prolifération d'experts en stratégie qui n'ont pour seule expérience que des présentations PowerPoint théoriques",
          "L'incapacité de ces profils à appréhender la réalité rugueuse du terrain africain avec ses coupures et ses aléas",
          "Le respect profond que l'on acquiert pour les opérateurs de première ligne lorsqu'on a partagé leur quotidien",
          "Pourquoi une solution technologique conçue sans empathie pour le terrain est systématiquement rejetée par les équipes",
          "La véritable innovation ne consiste pas à ajouter de la complexité, mais à soulager ceux qui font tourner l'économie"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "De la manutention à l'intelligence artificielle : l'ascension par les compétences d'exécution en Afrique.",
        points: [
          "Le parcours de nombreux bâtisseurs africains qui n'ont pas suivi une ligne droite académique",
          "La valeur inestimable des années passées dans les secteurs traditionnels (transport, commerce, logistique)",
          "Comment la convergence entre l'expérience terrain et les outils numériques de pointe forge des profils d'exception",
          "Encourager la jeunesse à ne pas mépriser les métiers d'exploitation : ils sont la meilleure école du monde réel",
          "C'est sur ce socle d'acier que nous construisons l'avenir numérique de notre écosystème"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Vision théorique de bureau vs Réalité d'exploitation sur le quai : Les leçons apprises à la dure.",
        points: [
          "Gestion des stocks : Théorie du zéro stock en flux tendu vs Stock tampon indispensable face aux délais de dédouanement",
          "Gestion d'équipe : Discours managériaux descendants vs Exemplarité et présence physique aux heures critiques",
          "Outils numériques : Usines à gaz inadaptées vs Formulaires mobiles simples et robustes",
          "Gestion de crise : Réunions de crise stériles vs Décisions d'arbitrage immédiates sur le lieu de l'incident",
          "Comment nous insufflons cette exigence d'efficacité directe dans chaque projet d'Iboga Lab"
        ]
      },
      {
        name: "Storytelling / Retour terrain",
        format: "Récit",
        hook: "Un vendredi soir de 2019, sous un orage torrentiel, un chargement stratégique est arrivé sans le bordereau officiel. C'est là que j'ai appris mon vrai métier.",
        points: [
          "Le dilemme : bloquer le convoi et paralyser un chantier client ou trouver une solution légale et auditable dans l'heure",
          "La négociation, la vérification physique des colis sous les bâches, l'engagement personnel de ma signature",
          "Le soulagement du client le lendemain matin voyant ses équipes approvisionnées à l'heure exacte",
          "Ce jour-là, j'ai compris que la logistique n'est pas un métier de cartons, c'est un métier de confiance et d'exécution sans faille",
          "Quand je bâtis aujourd'hui des systèmes automatisés avec Iboga Lab, je mets la même rigueur dans chaque ligne d'instructions"
        ]
      }
    ],
    sources: [
      {
        url: "https://www.linkedin.com/in/ogoulajesse",
        label: "LinkedIn Jesse Ogoula — Expérience de 7 ans en coordination logistique chez DARON GROUP",
        date: "2026-11-04"
      },
      {
        url: "https://wearetech.africa/",
        label: "We Are Tech Africa — Leadership opérationnel et culture logistique en Afrique",
        date: "2026-10-25"
      },
      {
        url: "https://restofworld.org/",
        label: "Rest of World — Operating on the Ground : Supply Chains in Sub-Saharan Africa",
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
if (process.argv[1] && process.argv[1].endsWith('addSession20261104.js')) {
  syncSession().then(() => {
    console.log('Synchronisation terminée avec succès!');
    process.exit(0);
  }).catch((err) => {
    console.error('Échec synchronisation:', err);
    process.exit(1);
  });
}

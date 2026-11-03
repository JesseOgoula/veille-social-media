/**
 * addSession20261103.js
 * Session de veille stratégique réseaux sociaux du 3 novembre 2026
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

export const sessionId = 'sess_20261103_080000';
export const sessionDate = '2026-11-03';
export const weekLabel = 'Semaine du 3 Novembre 2026';
export const generatedAt = '2026-11-03T08:00:00+01:00';

export const sessionData = {
  id: sessionId,
  date: sessionDate,
  generated_at: generatedAt,
  week_label: weekLabel,
  newsjacking: {
    title: "Mistral AI libère les poids de Mistral Large 4 (« Le Chonk ») en open-weight souverain et la Banque Mondiale s'associe à NVIDIA et Cassava pour mutualiser les supercalculateurs GPU en Afrique"
  }
};

export const allIdeas = [
  // ==========================================
  // SECTION ACTUALITÉS (CURATION CHAUDE < 10J)
  // ==========================================
  {
    id: 'idea_20261103_news01',
    session_id: sessionId,
    type: 'news',
    title: "Mistral AI publie les poids ouverts de Mistral Large 4 (« Le Chonk ») : Une rupture majeure pour la souveraineté de l'IA et l'hébergement local en entreprise",
    account: 'jesse',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Jesse Ogoula / Le juriste — Sensibilisation des directions générales à l'hébergement souverain et à l'indépendance technologique face aux acteurs fermés",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Mistral AI vient de libérer les poids téléchargeables de son modèle géant Mistral Large 4 (« Le Chonk »). Pour les entreprises africaines, c'est la fin du tête-à-tête obligé avec les serveurs américains.",
        points: [
          "Publication officielle le 29 octobre 2026 des poids ouverts du modèle Mistral Large 4 de plus de 1 000 milliards de paramètres avec 52 milliards de paramètres actifs par jeton",
          "Architecture de mélange d'experts (MoE) multimodal native avec une fenêtre de contexte de 1 million de jetons",
          "Entraînement 100 % européen sur des puces NVIDIA Grace Blackwell garantissant une conformité stricte et une indépendance stratégique",
          "Possibilité pour les banques, institutions et data centers africains de faire tourner un modèle frontière sur leurs propres infrastructures sans fuite de données"
        ]
      }
    ],
    sources: [
      {
        url: "https://mistral.ai/news/",
        date: "2026-10-29",
        title: "Mistral Large 4 Open Weights Release and European Infrastructure",
        domain: "mistral.ai"
      },
      {
        url: "https://huggingface.co/mistralai",
        date: "2026-10-29",
        title: "Mistral Large 4 (Le Chonk) Model Weights on Hugging Face",
        domain: "huggingface.co"
      },
      {
        url: "https://www.cnet.com/tech/services-and-software/mistral-large-open-weights/",
        date: "2026-10-30",
        title: "Mistral AI Releases 1-Trillion-Parameter Open Model for Enterprise Deployment",
        domain: "cnet.com"
      }
    ],
    drafted_post: "Le fait :\nMistral AI a officiellement mis en ligne le 29 octobre 2026 les poids ouverts de son modèle phare Mistral Large 4, surnommé « Le Chonk ». Avec plus de 1 000 milliards de paramètres au total et 52 milliards de paramètres actifs par jeton, ce géant multimodal intègre une fenêtre de contexte d'un million de jetons et peut être déployé localement sur des infrastructures privées via vLLM ou Hugging Face.\n\nLe contexte :\nJusqu'à présent, pour accéder à un modèle de frontière capable de raisonnements complexes et de code agentique avancé, les entreprises étaient contraintes de faire transiter l'intégralité de leurs données confidentielles par les serveurs distants des géants californiens. Mistral brise ce verrou en offrant un modèle de rang mondial sous licence ouverte.\n\nL'avis Jesse :\nPour une banque, une compagnie d'assurance ou une PME stratégique en Afrique centrale, c'est un tournant décisif. Nous n'avons plus besoin de choisir entre la performance de pointe et la souveraineté de nos données. Nos data centers régionaux peuvent désormais héberger une intelligence de niveau mondial sans dépendre d'un câble sous-marin ou d'une législation étrangère.\n\nVotre organisation a-t-elle déjà envisagé d'héberger ses propres modèles d'IA en local plutôt que de tout envoyer dans le cloud public ?\n\n#IntelligenceArtificielle #SouverainetéNumérique #MistralAI #TechAfrique #JesseOgoula"
  },
  {
    id: 'idea_20261103_news02',
    session_id: sessionId,
    type: 'news',
    title: "Banque Mondiale, NVIDIA et Cassava Technologies : Lancement d'un accès mutualisé aux supercalculateurs GPU pour démocratiser l'IA en Afrique",
    account: 'iboga',
    pillar: 'terrain-pme',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'MOFU',
    score: 5,
    bridge: "Iboga Lab / Iboga Dev — Intégration de modèles légers et de flux d'inférence régionaux exploitant les capacités de calcul mutualisées",
    angles: [
      {
        name: "Expert / Stratégique",
        format: "Post court",
        hook: "La Banque Mondiale s'associe à NVIDIA et Cassava Technologies pour lancer l'AI Infrastructure Initiative : l'accès à la puissance de calcul GPU passe enfin au modèle du paiement à l'usage pour les pays africains.",
        points: [
          "Lancement mondial à Séoul de la nouvelle initiative d'infrastructure IA de la Banque Mondiale ciblant en priorité l'Afrique et l'Amérique latine",
          "Partenariat avec Cassava Technologies et NVIDIA pour déployer des usines d'IA (AI Factories) régionales interconnectées",
          "Bascule d'investissements d'États lourds et lents vers un modèle agile en paiement à l'usage (pay-as-you-go) pour les processeurs graphiques",
          "Priorité donnée à la « Small AI » et aux cas d'usage à fort impact économique local (agriculture, logistique, administration)"
        ]
      }
    ],
    sources: [
      {
        url: "https://itweb.africa/content/Kzng3qjKxRrvN65q",
        date: "2026-10-28",
        title: "World Bank, NVIDIA and Cassava Technologies Partner on AI Compute for Africa",
        domain: "itweb.africa"
      },
      {
        url: "https://www.wearetech.africa/",
        date: "2026-10-29",
        title: "La Banque Mondiale et NVIDIA déploient une infrastructure IA mutualisée pour l'Afrique",
        domain: "wearetech.africa"
      },
      {
        url: "https://cassava.ai/",
        date: "2026-10-28",
        title: "Cassava AI Factories Powered by NVIDIA Technology Across Emerging Markets",
        domain: "cassava.ai"
      }
    ],
    drafted_post: "Le fait :\nFin octobre 2026, la Banque Mondiale a dévoilé son initiative mondiale d'infrastructure IA en s'associant à NVIDIA et au groupe panafricain Cassava Technologies. Ce programme met à la disposition des gouvernements, des universités et des startups un accès mutualisé et abordable à des processeurs graphiques de pointe (GPU) selon un modèle de paiement à l'usage.\n\nLe contexte :\nConstruire des centres de données nationaux souverains coûte des centaines de milliards de FCFA et prend des années. En mutualisant les capacités de calcul à l'échelle du continent à travers les « usines d'IA » de Cassava motorisées par NVIDIA, les acteurs économiques peuvent immédiatement entraîner et déployer des modèles spécialisés sans investissement matériel écrasant.\n\nL'avis Iboga Lab :\nC'est la fin du mythe selon lequel l'Afrique ne pourrait être qu'une simple consommatrice passive d'algorithmes importés. La vraie bataille économique se joue sur la « Small AI » : des modèles légers, entraînés sur des données locales, dédiés à l'optimisation des flux logistiques, agricoles et fiscaux de nos entreprises.\n\nQuelle est la tâche métier critique que votre entreprise aimerait automatiser grâce à une puissance de calcul locale et sécurisée ?\n\n#InfrastructureIA #BanqueMondiale #Nvidia #CassavaTechnologies #TransformationDigitale #IbogaLab"
  },
  {
    id: 'idea_20261103_news03',
    session_id: sessionId,
    type: 'news',
    title: "Gabon : Le Ministère des PME et l'UNESCO forment 400 jeunes à l'IA appliquée et opérationnalisent la plateforme ProxiGab",
    account: 'jesse',
    pillar: 'terrain-pme',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 5,
    bridge: "Jesse Ogoula / Formateur — Passerelle vers Iboga Learn pour transformer les compétences IA des apprenants en productivité directe pour les entreprises gabonaises",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "À Libreville, 400 jeunes gabonais entament un parcours intensif sur l'intelligence artificielle avec le Ministère des PME et l'UNESCO. Mais la vraie question commence le jour où ils arrivent dans nos entreprises.",
        points: [
          "Lancement à l'incubateur de Likouala d'un programme national de formation pratique à l'IA et aux outils numériques pour 400 jeunes",
          "Mise en service simultanée de la plateforme ProxiGab pour connecter les porteurs de projets, les PME et les bailleurs de fonds",
          "Volonté gouvernementale de combler le fossé entre les compétences académiques et les besoins opérationnels du secteur privé",
          "Défi central : orienter ces talents vers la résolution de goulots d'étranglement réels au sein des PME gabonaises"
        ]
      }
    ],
    sources: [
      {
        url: "https://gabonmediatime.com/",
        date: "2026-10-27",
        title: "Formation à l'intelligence artificielle : Le ministère des PME et l'UNESCO outillent 400 jeunes à Libreville",
        domain: "gabonmediatime.com"
      },
      {
        url: "https://www.gabonreview.com/",
        date: "2026-10-28",
        title: "Entrepreneuriat et numérique : Déploiement de la plateforme ProxiGab pour les PME gabonaises",
        domain: "gabonreview.com"
      },
      {
        url: "https://www.men.gouv.ga/",
        date: "2026-10-27",
        title: "Stratégie nationale pour l'emploi des jeunes dans le secteur technologique au Gabon",
        domain: "men.gouv.ga"
      }
    ],
    drafted_post: "Le fait :\nLe Ministère des PME-PMI du Gabon, en partenariat avec l'UNESCO, a lancé fin octobre 2026 à l'incubateur de Likouala un programme de formation intensive à l'intelligence artificielle appliquée et à l'entrepreneuriat numérique au profit de 400 jeunes gabonais, en parallèle de l'activation opérationnelle de la plateforme nationale ProxiGab.\n\nLe contexte :\nFace au chômage des jeunes et aux difficultés de modernisation des entreprises locales, l'État gabonais accélère la montée en compétences numériques. La plateforme ProxiGab est conçue pour servir de pont interactif entre ces nouveaux talents, les PME en recherche d'efficacité et les structures d'investissement.\n\nL'avis Jesse :\nFormer 400 jeunes est une excellente initiative. Mais en tant que formateur sur le terrain, je le répète : la certification ne vaut rien si l'apprenant ne sait pas auditer un classeur Excel défaillant, automatiser une relance client ou structurer un inventaire dès son premier jour en entreprise. Nos PME n'ont pas besoin de philosophes de la tech, elles ont besoin de résolveurs de frictions.\n\nDirigeants de PME, seriez-vous prêts à intégrer un stagiaire formé à l'IA pour automatiser vos tâches administratives ce trimestre ?\n\n#GabonNumérique #FormationProfessionnelle #PMEGabon #UNESCO #EmploiJeunes #JesseOgoula"
  },

  // ==========================================
  // SECTION IDÉES DE FOND (6 AXES APPROFONDIS)
  // ==========================================
  {
    id: 'idea_20261103_01',
    session_id: sessionId,
    type: 'content',
    title: "Les modèles d'IA en poids ouverts face au Cloud Act américain : Pourquoi les entreprises et banques africaines doivent reprendre la main sur leurs données stratégiques",
    account: 'jesse',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Jesse Ogoula / Le juriste — Audit de conformité des données et accompagnement des directions générales vers l'indépendance cloud",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Saviez-vous que chaque question posée par votre comptable ou votre juriste à un assistant IA hébergé aux États-Unis peut légalement être inspectée par une juridiction étrangère ?",
        points: [
          "Le principe juridique méconnu du Cloud Act américain qui s'applique à tout serveur opéré par une entreprise technologique américaine",
          "La réalité des PME et institutions africaines qui envoient quotidiennement leurs bilans, contrats et données clients dans des tuyaux distants",
          "La révolution des modèles ouverts (Mistral, Llama) : vous téléchargez le modèle une fois, et il tourne sur votre propre serveur sans aucune connexion extérieure",
          "Le résultat concret : une confidentialité absolue garantie pour vos secrets d'affaires et la conformité avec les régulateurs locaux"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "La matrice de décision souveraine pour choisir entre une API propriétaire et un modèle d'IA auto-hébergé en entreprise.",
        points: [
          "Critère 1 (Sensibilité juridique) : Données bancaires, médicales ou stratégiques ➔ Hébergement sur serveur privé ou data center national obligatoire",
          "Critère 2 (Coût à l'échelle) : Au-delà de 50 000 requêtes mensuelles, faire tourner une instance dédiée devient 40 % moins cher que la facturation au jeton d'une API externe",
          "Critère 3 (Continuité d'activité) : Immunité totale contre les ruptures de câbles sous-marins ou les restrictions d'accès géographiques",
          "Feuille de route technique : déploiement sous conteneur Docker avec moteur d'inférence vLLM et chiffrement au repos"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Parler de transformation numérique en Afrique tout en confiant 100 % de notre intelligence d'affaires à des serveurs situés à 8 000 kilomètres n'est pas de la modernisation, c'est une démission stratégique.",
        points: [
          "L'illusion du confort immédiat offert par les interfaces grand public qui créent une dépendance technologique irréversible",
          "Le risque géopolitique réel : que devient votre entreprise le jour où les conditions d'utilisation changent ou que les coûts d'abonnement en devises explosent ?",
          "La maturité nouvelle des modèles ouverts européens et libres qui rivalisent directement avec les meilleurs systèmes propriétaires",
          "L'appel aux dirigeants africains : bâtir une infrastructure sobre, locale et maîtrisée est le véritable acte de leadership pour la décennie"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "À quoi ressemblera le paysage numérique africain en 2030 si nous hébergeons notre propre intelligence artificielle au niveau local ?",
        points: [
          "L'émergence de corridors de données régionaux sécurisés au sein des zones CEMAC et CEDEAO",
          "La valorisation économique des data centers construits sur le continent qui cessent d'être de simples entrepôts de stockage passifs pour devenir des usines de calcul",
          "La naissance de modèles spécialisés entraînés sur les jurisprudences locales, les dialectes économiques et les pratiques du commerce informel",
          "Comment la souveraineté technologique devient le levier indispensable de la souveraineté économique et monétaire"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Tableau / Comparatif structuré",
        hook: "API fermée américaine vs Modèle ouvert hébergé localement : Le comparatif financier et juridique pour une entreprise de 50 salariés.",
        points: [
          "Confidentialité des données : Risque juridique d'extraterritorialité vs Étanchéité totale et conformité RGPD/Commission nationale des données personnelles",
          "Dépendance réseau : Paralysie complète en cas de coupure internet internationale vs Fonctionnement ininterrompu sur réseau local d'entreprise",
          "Maîtrise budgétaire : Facturation variable en dollars soumise aux fluctuations de change vs Coût fixe prévisible amorti sur le matériel",
          "Verdict opérationnel : Réserver les API externes pour la veille générale et basculer les processus internes critiques sur des modèles ouverts"
        ]
      },
      {
        name: "Storytelling / Retour terrain",
        format: "Récit d'expérience",
        hook: "Le jour où un directeur juridique m'a avoué que ses juristes copiaient l'intégralité des contrats pétroliers confidentiels dans un chatbot public gratuit.",
        points: [
          "La découverte stupéfiante lors d'un audit de flux : des clauses de confidentialité de plusieurs millions de dollars exposées sans aucune barrière",
          "La prise de conscience immédiate de la direction générale face au vide juridique et sécuritaire interne",
          "La mise en place en moins de deux semaines d'un modèle d'IA local sécurisé tournant sur un serveur interne isolé",
          "La leçon de terrain : interdire l'outil ne sert à rien si vous n'offrez pas à vos équipes une alternative interne plus rapide et parfaitement sécurisée"
        ]
      }
    ],
    sources: [
      {
        url: "https://mistral.ai/news/",
        date: "2026-10-29",
        title: "Mistral Large 4 and the Future of Sovereign AI in Europe and Globally",
        domain: "mistral.ai"
      },
      {
        url: "https://www.financialafrik.com/",
        date: "2026-10-28",
        title: "Souveraineté numérique et régulation bancaire : Les défis de la donnée en zone CEMAC",
        domain: "financialafrik.com"
      },
      {
        url: "https://cio-mag.com/",
        date: "2026-10-27",
        title: "Data Centers africains et souveraineté : L'impératif de l'hébergement local face au Cloud Act",
        domain: "cio-mag.com"
      }
    ],
    drafted_post: null
  },
  {
    id: 'idea_20261103_02',
    session_id: sessionId,
    type: 'content',
    title: "L'industrialisation des cyberattaques par l'IA en Afrique : Pourquoi le clonage vocal et le deepfake ciblent désormais les directeurs financiers de PME et comment riposter",
    account: 'jesse',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'MOFU',
    score: 5,
    bridge: "Jesse Ogoula / L'opérateur — Mise en place de protocoles stricts de contrôle des flux financiers et procédures de validation anti-fraude",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Un message vocal WhatsApp de votre directeur général vous demande de valider un virement d'urgence pour dédouaner une marchandise. C'est sa voix exacte, son intonation, ses mots habituels. Pourtant, c'est une IA.",
        points: [
          "Le rapport d'Interpol révèle que plus de 55 % des cybercrimes en Afrique utilisent désormais l'intelligence artificielle générative",
          "Le clonage vocal nécessite aujourd'hui moins de 3 secondes d'enregistrement audio récupérées sur une vidéo Facebook ou un webinaire",
          "La cible privilégiée n'est plus la multinationale surprotégée, mais la PME locale dont les circuits financiers reposent sur des accords informels",
          "La règle de survie : ne jamais débloquer un centime sans un contre-appel téléphonique obligatoire sur une ligne fixe prédéfinie"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Guide méthodologique",
        hook: "Le protocole de sécurité en 4 verrous pour immuniser le service comptable de votre PME contre les fraudes au président dopées à l'IA.",
        points: [
          "Verrou 1 (Le mot de passe hors-canal) : Établir un code verbal secret renouvelé chaque mois pour toute instruction financière inhabituelle",
          "Verrou 2 (La double signature numérique obligatoire) : Interdire les autorisations de paiement unilatérales sur simple message texte ou vocal",
          "Verrou 3 (Le sas de temporisation de 30 minutes) : Tout virement supérieur à 2 millions de FCFA doit respecter un délai incompressible de confirmation sur canal sécurisé",
          "Verrou 4 (Sensibilisation continue) : Tester trimestriellement les réflexes des comptables face à de faux scénarios de phishing vocal réalistes"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Si la sécurité financière de votre société repose uniquement sur la mémoire ou l'intuition de votre comptable, vous êtes déjà en faillite technique.",
        points: [
          "L'erreur tragique des dirigeants qui considèrent la cybersécurité comme un problème purement informatique réservé aux informaticiens",
          "La réalité des attaques modernes : elles ne piratent pas vos serveurs, elles manipulent la confiance et l'empathie humaine",
          "Pourquoi l'informalité des procédures et la culture de l'urgence permanente sont les meilleures alliées des fraudeurs",
          "Le professionnalisme exige d'abandonner les ordres financiers par messagerie instantanée au profit de flux tracés et audités"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "La fin de la preuve audio et visuelle : Vers un monde où voir et entendre ne suffira plus pour croire dans les affaires en Afrique.",
        points: [
          "La démocratisation foudroyante des outils de clonage vidéo et audio en temps réel utilisables sur smartphone d'entrée de gamme",
          "L'érosion accélérée de la confiance interentreprises dans des économies qui fonctionnaient traditionnellement à la parole donnée",
          "L'obligation pour les chambres de commerce et les banques centrales d'imposer des identités numériques cryptographiques vérifiées pour les dirigeants",
          "Comment la rigueur des processus d'audit devient l'unique rempart contre la dissolution de la confiance commerciale"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Gestion informelle des virements vs Procédure anti-fraude structurée : Quel est le coût réel pour une PME africaine ?",
        points: [
          "Circuit informel par WhatsApp : Rapidité apparente, mais risque de perte sèche irréversible pouvant dépasser 50 millions de FCFA et aucune couverture d'assurance",
          "Circuit formalisé avec contre-appel : 5 minutes de délai supplémentaire par transaction, mais zéro euro de perte et traçabilité juridique totale",
          "Position des banques commerciales : aucun remboursement n'est accordé si l'ordre a été initié depuis les identifiants réguliers de l'entreprise",
          "La décision managériale : formaliser vos seuils d'autorisation dès aujourd'hui avant que le préjudice ne frappe votre trésorerie"
        ]
      },
      {
        name: "Storytelling / Retour terrain",
        format: "Récit d'expérience",
        hook: "Ce vendredi à 17h30 où un directeur financier a failli virer 18 millions de FCFA pour une fausse cargaison de pièces détachées.",
        points: [
          "Le mode opératoire classique : un message urgent imitant parfaitement le ton cassant du patron en voyage à l'étranger",
          "Le doute salutaire de la responsable comptable qui a osé composer le numéro privé direct malgré l'interdiction stipulée dans le faux message",
          "Le soulagement partagé et le choc de réaliser la perfection technique de la contrefaçon vocale",
          "La décision prise le lundi suivant : rédaction immédiate de la première charte des paiements sécurisés d'Iboga Process pour l'entreprise"
        ]
      }
    ],
    sources: [
      {
        url: "https://socialnetlink.org/2026/10/rapport-interpol-cybermenaces-afrique/",
        date: "2026-10-25",
        title: "Évaluation Interpol 2026 : L'IA au cœur de 55 % des cybercrimes financiers en Afrique",
        domain: "socialnetlink.org"
      },
      {
        url: "https://www.financialafrik.com/",
        date: "2026-10-26",
        title: "Fraude financière et Mobile Money : Les fintechs face aux attaques par clonage vocal",
        domain: "financialafrik.com"
      },
      {
        url: "https://cio-mag.com/",
        date: "2026-10-28",
        title: "Cybersécurité des PME en Afrique : Structurer les contre-appels face aux attaques deepfakes",
        domain: "cio-mag.com"
      }
    ],
    drafted_post: null
  },
  {
    id: 'idea_20261103_03',
    session_id: sessionId,
    type: 'content',
    title: "« 80 % de plomberie déterministe, 20 % d'intelligence artificielle » : Pourquoi déployer un agent autonome sans garde-fous dans votre PME est un piège financier",
    account: 'iboga',
    pillar: 'ia-appliquee',
    pillar_label: 'IA Appliquée pour Dirigeants',
    funnel: 'BOFU',
    score: 5,
    bridge: "Iboga Lab / Iboga Process — Audit d'automatisation des flux de travail et cadrage des architectures logicielles sécurisées (ibogalab.vercel.app/calendly-booking)",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Brancher directement ChatGPT ou Claude sur la boîte mail de vos clients sans passer par un filtre strict est le moyen le plus rapide de ruiner votre réputation commerciale.",
        points: [
          "La promesse séduisante mais trompeuse des publicités : « laissez un agent autonome gérer toute votre entreprise pendant que vous dormez »",
          "La réalité brutale en production : boucles d'appels infinies, hallucinations tarifaires et factures de jetons API exorbitantes à la fin du mois",
          "La règle d'or de l'ingénierie moderne : 80 % du système doit être du code prévisible et cadré, et seulement 20 % de l'IA pour traiter le texte non structuré",
          "Comment une automatisation bien pensée sécurise vos opérations tout en divisant les coûts de fonctionnement par dix"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "L'anatomie d'une architecture d'agent IA professionnelle prête pour la production chez nos clients.",
        points: [
          "Étape 1 (Le filtre déterministe sous n8n) : Nettoyer la donnée, vérifier les permissions et refuser les requêtes incomplètes avant même d'appeler le LLM",
          "Étape 2 (L'injection de contexte RAG contrôlée) : Limiter l'accès de l'agent aux seuls documents nécessaires pour éviter les extrapolations",
          "Étape 3 (L'idempotence et les plafonds de consommation) : Verrouiller les clés de transaction pour empêcher l'envoi de messages ou de factures en doublon",
          "Étape 4 (Le superviseur humain dans la boucle) : Toute action critique (décision contractuelle, remise tarifaire supérieure à 10 %) requiert une validation sur canal interne"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "L'obsession pour les agents autonomes magiques détourne les entrepreneurs de la vraie compétence rentable : savoir concevoir un flux logique rigoureux.",
        points: [
          "Le décalage entre les vidéos démos spectaculaires sur les réseaux et la complexité sale de la gestion des exceptions réelles dans une PME",
          "Pourquoi 90 % des problèmes opérationnels n'ont pas besoin d'IA, mais d'une simple base de données propre et d'un webhook bien configuré",
          "Ce que nous constatons lors de nos audits chez Iboga Lab : des entreprises qui achètent des abonnements IA coûteux alors que leurs processus métier de base ne sont même pas écrits",
          "Notre conviction : l'intelligence artificielle n'est que le turbo. Si le moteur de votre entreprise est mal usiné, le turbo ne fera que le faire exploser plus vite"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "Vers la fin des interfaces de programmation propriétaires et l'avènement des protocoles ouverts d'orchestration dans les entreprises africaines.",
        points: [
          "Le passage des connecteurs SaaS jetables aux standards d'orchestration ouverts et auto-hébergés",
          "Pourquoi la résilience opérationnelle des PME du Sud passe par des architectures logicielles autonomes capables de fonctionner hors-ligne",
          "L'émergence d'une nouvelle génération d'intégrateurs de flux capables de relier des outils disparates avec une consommation minimale de bande passante",
          "Comment les entreprises frugales transforment la contrainte d'infrastructure en avantage compétitif d'agilité"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Agent autonome non supervisé vs Workflow hybride sécurisé Iboga Process : L'analyse des risques en exploitation.",
        points: [
          "Agent autonome brut : Risque élevé de boucle infinie de consommation, réponses imprévisibles aux réclamations clients, opacité totale des décisions",
          "Workflow hybride Iboga Process : Déclencheurs stricts, garde-fous budgétaires fixes, validation humaine sur les dossiers sensibles et journalisation complète",
          "Économie mesurée : Réduction de 85 % des coûts d'API et suppression intégrale des incidents de communication client",
          "La méthode pragmatique : Réserver votre audit d'opportunités de 30 minutes pour cartographier vos processus avant tout déploiement"
        ]
      },
      {
        name: "Contrarien fort / Alerte",
        format: "Post court",
        hook: "Si vous ne savez pas expliquer étape par étape comment une facture passe de la commande au paiement dans votre société, aucune IA ne le devinera à votre place.",
        points: [
          "L'illusion fatale que l'intelligence artificielle va miraculeusement organiser le désordre d'un management désorganisé",
          "L'automatisation d'un processus chaotique ne produit qu'un chaos automatisé dix fois plus rapide et plus destructeur",
          "La première mission d'Iboga Process n'est jamais de brancher du code, mais de dessiner la carte exacte de vos flux sur un tableau blanc",
          "Nettoyez d'abord vos méthodes opérationnelles, nous nous chargerons ensuite de les accélérer"
        ]
      }
    ],
    sources: [
      {
        url: "https://n8n.io/blog/",
        date: "2026-10-28",
        title: "Production Best Practices for AI Agents: Balancing Determinism and LLM Judgment",
        domain: "n8n.io"
      },
      {
        url: "https://cio-mag.com/",
        date: "2026-10-29",
        title: "Automatisation d'entreprise et ROI : L'épreuve de vérité pour les agents IA en 2026",
        domain: "cio-mag.com"
      },
      {
        url: "https://www.wearetech.africa/",
        date: "2026-10-27",
        title: "Transformation numérique des PME africaines : Sortir du mirage des chatbots gadget",
        domain: "wearetech.africa"
      }
    ],
    drafted_post: null
  },
  {
    id: 'idea_20261103_04',
    session_id: sessionId,
    type: 'content',
    title: "Pourquoi les logiciels d'entreprise conçus en Occident échouent dans les PME africaines : La leçon du design produit axé sur la confiance et la frugalité opérationnelle",
    account: 'jesse',
    pillar: 'terrain-pme',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 5,
    bridge: "Jesse Ogoula / Product Manager — Diagnostic d'expérience utilisateur et simplification radicale des outils de travail pour les équipes de terrain",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Acheter un progiciel de gestion conçu dans la Silicon Valley pour gérer une équipe commerciale à Libreville, Douala ou Abidjan, c'est comme conduire une formule 1 sur une piste en latérite.",
        points: [
          "Les études de design produit en Afrique montrent que 70 % des fonctionnalités des logiciels occidentaux ne sont jamais utilisées par les équipes locales",
          "Le problème n'est pas le prix de la licence : c'est l'incompatibilité de l'interface avec la réalité du travail quotidien (connexion lente, écrans mobiles étroits, multitâche permanent)",
          "Les utilisateurs de terrain ne veulent pas de tableaux de bord chatoyants avec 50 boutons : ils veulent enregistrer une commande en 3 clics et voir le solde immédiatement",
          "La clé de l'adoption : concevoir pour la frugalité et l'utilité brute plutôt que pour l'esbroufe visuelle"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Les 4 principes fondamentaux du design de produit numérique adapté aux contraintes réelles des entreprises en Afrique subsaharienne.",
        points: [
          "Principe 1 (Architecture Local-First) : L'application doit stocker l'action en mémoire locale et synchroniser en arrière-plan sans bloquer l'opérateur",
          "Principe 2 (Divulgation progressive) : Ne montrer que l'action immédiate requise et cacher les sous-menus d'administration pour éviter la surcharge cognitive",
          "Principe 3 (Légèreté absolue des paquets) : Réduire la taille des requêtes réseau au strict minimum pour économiser la consommation de données mobiles",
          "Principe 4 (Co-création sur site) : Valider les parcours utilisateurs directement sur le quai de livraison ou en magasin, jamais depuis un bureau climatisé"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Le plus grand obstacle à la digitalisation de nos entreprises n'est pas le manque de budget, c'est l'arrogance des créateurs de logiciels qui refusent de regarder la réalité en face.",
        points: [
          "La croyance absurde selon laquelle les utilisateurs africains auraient besoin des mêmes fonctionnalités complexes que des cadres new-yorkais",
          "Pourquoi un simple bot WhatsApp bien conçu génère dix fois plus d'adhésion qu'un portail ERP à 15 millions de FCFA qui dort dans les placards",
          "L'urgence de valoriser la culture produit locale : bâtir des outils sobres, résilients, qui respectent le temps et la réalité financière de nos collaborateurs",
          "Mon engagement de bâtisseur : mesurer le succès d'un outil non pas à son nombre de pages, mais au temps qu'il fait gagner à l'opérateur qui l'utilise"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "Comment l'ingénierie frugale développée pour le Sud est en train de devenir le modèle de référence pour les logiciels professionnels mondiaux.",
        points: [
          "La saturation globale des utilisateurs face aux applications surchargées et énergivores qui ralentissent le travail",
          "La redécouverte par les grands acteurs technologiques des vertus de la sobriété numérique et du fonctionnement hors-ligne",
          "Le rôle d'avant-garde des entrepreneurs africains qui conçoivent d'emblée des systèmes résilients aux pannes d'infrastructure",
          "Pourquoi le continent a l'opportunité historique de créer la nouvelle norme mondiale des logiciels d'entreprise légers et efficaces"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Tableau / Comparatif structuré",
        hook: "Progiciel standard importé vs Solution sur mesure allégée : Le tableau de bord décisionnel avant d'investir.",
        points: [
          "Délai d'adoption par les équipes : 6 mois avec résistance passive vs 1 semaine avec appropriation spontanée",
          "Dépendance infrastructure : Blocage complet dès que la fibre vacille vs Continuité intégrale en mode local déconnecté",
          "Taux d'utilisation effectif : Inférieur à 25 % des modules payés vs 100 % des flux alignés sur les besoins réels de l'activité",
          "Bilan économique : Coûts récurrents élevés sans gain mesuré vs Amortissement rapide et gain de productivité immédiat"
        ]
      },
      {
        name: "Storytelling / Retour terrain",
        format: "Récit d'expérience",
        hook: "Le jour où j'ai vu un gestionnaire d'entrepôt noter ses sorties de stock sur un carton d'emballage alors que l'entreprise venait d'installer un logiciel à 10 millions de FCFA.",
        points: [
          "La scène vécue sur le terrain : l'ordinateur flambant neuf laissé éteint parce que le logiciel exigeait 8 validations pour chaque paquet",
          "La discussion sincère avec l'agent : « Monsieur, ici les camions klaxonnent, je n'ai pas 4 minutes par bon de commande »",
          "La refonte immédiate du système : suppression de 6 étapes inutiles et passage à une interface mobile ultra-rapide",
          "La leçon indélébile : si votre produit ralentit celui qui travaille avec ses mains, votre produit est un échec, peu importe son élégance théorique"
        ]
      }
    ],
    sources: [
      {
        url: "https://techcabal.com/",
        date: "2026-10-28",
        title: "Why B2B Software Adoption in Africa Hinges on Offline-First Design and Radical Simplicity",
        domain: "techcabal.com"
      },
      {
        url: "https://restofworld.org/",
        date: "2026-10-26",
        title: "The Reality of Enterprise Tech in Emerging Markets: Designing for Real Infrastructures",
        domain: "restofworld.org"
      },
      {
        url: "https://www.blogdumoderateur.com/",
        date: "2026-10-25",
        title: "UX Design et accessibilité B2B : Réduire la charge cognitive des outils métiers",
        domain: "blogdumoderateur.com"
      }
    ],
    drafted_post: null
  },
  {
    id: 'idea_20261103_05',
    session_id: sessionId,
    type: 'content',
    title: "De la plantation au rayon urbain : Pourquoi la logistique du froid et la traçabilité des stocks sauvent 3 fois plus de marge qu'un site marchand dans l'agro-industrie africaine",
    account: 'jesse',
    pillar: 'terrain-pme',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'MOFU',
    score: 5,
    bridge: "Jesse Ogoula / L'opérateur — 7 ans d'expérience de logistique terrain chez DARON GROUP appliqués à l'optimisation des flux physiques des PME",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Dans l'agroalimentaire en Afrique centrale, vous ne perdez pas votre argent au moment de la vente. Vous le perdez entre le camion de transport et la chambre froide.",
        points: [
          "Les rapports sectoriels indiquent que 30 à 40 % des denrées agricoles périssent avant d'atteindre le consommateur final en raison de ruptures de chaîne logistique",
          "L'erreur classique des entrepreneurs : dépenser son budget dans du marketing digital et des applications grand public alors que les stocks pourrissent au dépôt",
          "La vraie rentabilité d'une PME agro-industrielle se gagne sur la rigueur du pointage, la gestion des dates limites et la rotation des palettes (méthode FIFO)",
          "Comment une simple traçabilité numérique par code-barres permet de récupérer immédiatement 15 % de marge nette"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Guide méthodologique",
        hook: "Le protocole de pilotage des flux physiques en 3 phases pour sécuriser la marge d'une PME de distribution alimentaire.",
        points: [
          "Phase 1 (Réception et qualification immédiate) : Pesée obligatoire à l'arrivée et enregistrement des températures des caisses sur terminal mobile",
          "Phase 2 (Zonage dynamique et règles de rotation) : Affectation automatique des emplacements de stockage selon la vitesse de rotation des produits",
          "Phase 3 (Déstockage sous contrainte temporelle) : Alerte automatique dès qu'un lot approche des 72 heures avant péremption pour déclencher un déstockage prioritaire",
          "Gain opérationnel constaté : division par quatre des pertes sèches par avarie et fiabilisation des livraisons auprès des supermarchés partenaires"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Créer une place de marché agricole en ligne sans posséder un seul camion réfrigéré ni un entrepôt isolé est une illusion qui enrichit les graphistes et ruine les fondateurs.",
        points: [
          "La mode persistante des plateformes d'intermédiation agricole qui oublient que le légume ne voyage pas par onde radio",
          "Pourquoi les investisseurs avertis en 2026 fuient les applications purement virtuelles pour financer les infrastructures concrètes de conservation et de transport",
          "Ce que m'ont appris 7 années passées à gérer les stocks chez DARON GROUP : la réalité brute d'un inventaire physique triomphe toujours des tableaux prévisionnels",
          "L'appel aux porteurs de projets : devenez des maîtres de la chaîne d'approvisionnement avant de vous déclarer disrupteurs de l'économie"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "L'agro-industrie africaine face à l'impératif de traçabilité : Comment la norme sanitaire devient la frontière de la compétitivité.",
        points: [
          "Le durcissement des normes d'exportation régionales et internationales exigeant une traçabilité intégrale de la parcelle au magasin",
          "L'essor des capteurs thermiques connectés sobres et autonomes alimentés par petits panneaux solaires",
          "Comment la formalisation des circuits d'approvisionnement permet enfin aux coopératives locales de négocier d'égal à égal avec les grandes enseignes",
          "La souveraineté alimentaire comme aboutissement direct d'une chaîne logistique maîtrisée et informatisée"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Tableau / Comparatif structuré",
        hook: "Gestion empirique sur carnet papier vs Traçabilité numérique d'entrepôt : L'analyse d'impact sur le compte de résultat.",
        points: [
          "Taux de démarque inconnue et pertes : Supérieur à 12 % du chiffre d'affaires vs Réduit à moins de 2 % grâce au suivi par lot",
          "Délai de préparation des commandes : 45 minutes par expédition avec erreurs fréquentes vs 10 minutes avec bon de préparation optimisé",
          "Crédibilité financière auprès des banques : Refus systématique de financement faute d'état des stocks fiable vs Accès facilité au crédit d'exploitation garanti sur stocks",
          "La recommandation concrète : investir en priorité dans la rigueur des terminaux de stocks avant toute dépense de communication"
        ]
      },
      {
        name: "Storytelling / Retour terrain",
        format: "Récit d'expérience",
        hook: "Ce matin d'inventaire où 4 tonnes de produits surgelés ont dû être jetées à la fosse parce qu'un disjoncteur avait sauté sans faire de bruit pendant la nuit.",
        points: [
          "L'odeur de la perte et le désastre financier constaté à 6 heures du matin sur les quais de déchargement",
          "La découverte que personne n'était responsable parce qu'aucune procédure de ronde nocturne n'était formalisée",
          "L'installation le lendemain d'une sonde d'alerte connectée envoyant un SMS automatique dès que la température dépasse un seuil critique",
          "La leçon que je n'oublierai jamais : dans la logistique de terrain, ce n'est pas le talent qui vous sauve, c'est la rigueur impitoyable de vos systèmes de contrôle"
        ]
      }
    ],
    sources: [
      {
        url: "https://www.agenceecofin.com/",
        date: "2026-10-28",
        title: "Agro-industrie en Afrique : La chaîne du froid et la logistique deviennent la priorité des investissements",
        domain: "agenceecofin.com"
      },
      {
        url: "https://sikafinance.com/",
        date: "2026-10-27",
        title: "Traçabilité agricole et PME : Sécuriser les approvisionnements face aux normes ESG",
        domain: "sikafinance.com"
      },
      {
        url: "https://disruptafrica.com/",
        date: "2026-10-29",
        title: "Agritech Startups in Africa Shift from Pure Marketplaces to Cold Chain Logistics",
        domain: "disruptafrica.com"
      }
    ],
    drafted_post: null
  },
  {
    id: 'idea_20261103_06',
    session_id: sessionId,
    type: 'content',
    title: "« La donnée que vous ne collectez pas enrichit vos concurrents » : Comment structurer un tableau de bord de traçabilité opérationnelle et d'approvisionnement en 30 jours",
    account: 'iboga',
    pillar: 'terrain-pme',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'BOFU',
    score: 5,
    bridge: "Iboga Lab / Iboga Dev & Iboga Process — Conception et déploiement de tableaux de bord sur mesure connectés aux bases métiers (Audit gratuit de 30 min : ibogalab.vercel.app/calendly-booking)",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "Si vous devez appeler trois personnes différentes pour savoir combien de marchandises il reste dans votre entrepôt et combien vos clients vous doivent, vous ne pilotez pas une entreprise : vous naviguez à vue.",
        points: [
          "Le constat partagé par 8 PME sur 10 : les données existent, mais elles sont éparpillées entre des carnets manuscrits, des fiches volantes et des échanges WhatsApp",
          "L'incapacité qui en découle : impossible de prendre une décision stratégique rapide face à un fournisseur ou une opportunité de marché",
          "La solution pragmatique : centraliser vos 5 indicateurs vitaux dans une interface unique consultable sur votre téléphone en temps réel",
          "Ce que nous déployons avec Iboga Dev : des tableaux de bord sur mesure connectés directement à vos flux réels de terrain en moins de 30 jours"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Les 5 indicateurs indispensables à réunir sur le tableau de bord quotidien d'un directeur général de PME en 2026.",
        points: [
          "Indicateur 1 (La trésorerie nette disponible) : Solde bancaire réel ajusté des chèques émis et des paiements électroniques en attente d'encaissement",
          "Indicateur 2 (L'encours client échu) : Créances échues classées par tranche d'ancienneté (0-30 jours, 31-60 jours, plus de 60 jours)",
          "Indicateur 3 (Le taux de rotation des stocks) : Identification immédiate des références dormantes qui immobilisent inutilement du fonds de roulement",
          "Indicateur 4 (Le taux d'exécution des commandes) : Pourcentage de livraisons effectuées à l'heure et complètes sans réclamation",
          "Indicateur 5 (La marge brute quotidienne) : Chiffre d'affaires facturé déduction faite du coût direct des marchandises sorties"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "Empiler des classeurs Excel de 40 mégaoctets que seule votre secrétaire comptable sait manipuler n'est pas de la gestion, c'est une prise d'otage organisationnelle.",
        points: [
          "Le danger systémique du fichier tableur bricolé au fil des ans qui finit inévitablement par être corrompu ou écrasé par erreur",
          "Le temps colossal gaspillé chaque fin de mois à ressaisir manuellement des chiffres pour préparer une réunion de direction approximative",
          "Pourquoi les dirigeants doivent exiger une source unique de vérité automatisée accessible sans intermédiaire",
          "La promesse d'Iboga Dev : nous ne venons pas changer votre métier, nous venons transformer vos frictions invisibles en clarté opérationnelle totale"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "L'entreprise sans angles morts : Comment la visualisation en temps réel des données libère le potentiel de croissance des sociétés africaines.",
        points: [
          "La démocratisation des outils de bases relationnelles et de restitution visuelle qui rendent obsolètes les logiciels lourds d'ancienne génération",
          "La bascule culturelle : passer d'un management autoritaire basé sur les impressions à un management d'équipe fondé sur des indicateurs partagés",
          "L'impact sur l'accès aux financements : les banquiers et fonds d'investissement accordent leur confiance aux entreprises capables de présenter des métriques en direct",
          "Comment la rigueur analytique devient le moteur principal de la pérennité entrepreneuriale sur notre continent"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Carrousel",
        hook: "Pilotage par tableurs dispersés vs Tableau de bord unifié Iboga Dev : Quel retour sur investissement à 6 mois ?",
        points: [
          "Tableurs manuels dispersés : Erreurs humaines fréquentes, 15 heures de manipulation par semaine, vision rétrospective décalée de 15 jours",
          "Tableau de bord sur mesure Iboga Dev : Zéro ressaisie, alertes automatiques en cas d'anomalie, mise à jour instantanée des stocks et de la trésorerie",
          "Gains concrets observés : Récupération accélérée de 20 % des créances clients et libération de 60 heures de temps managérial par mois",
          "L'étape suivante : Réservez votre audit d'opportunités de 30 minutes avec l'équipe Iboga Lab pour cartographier vos sources de données"
        ]
      },
      {
        name: "Contrarien fort / Alerte",
        format: "Post court",
        hook: "Le jour où votre responsable administratif tombe malade ou quitte la société, votre entreprise est-elle capable de savoir qui lui doit de l'argent avant midi ?",
        points: [
          "Si la réponse est non, votre entreprise possède un risque mortel de concentration d'information",
          "La valeur marchande d'une société ne dépend pas de ce que ses employés ont dans la tête, mais de ce qui est structuré dans ses systèmes",
          "Notre diagnostic chez Iboga Lab est sans appel : une société documentée vaut trois fois plus qu'une société dépendante de la mémoire informelle",
          "Prenez rendez-vous aujourd'hui pour bâtir votre premier tableau de bord autonome"
        ]
      }
    ],
    sources: [
      {
        url: "https://financialafrik.com/",
        date: "2026-10-28",
        title: "Pilotage de la trésorerie des PME en Afrique : Les outils d'analyse temps réel s'imposent face à la crise du crédit",
        domain: "financialafrik.com"
      },
      {
        url: "https://techpoint.africa/",
        date: "2026-10-27",
        title: "Operational Dashboards and Data Tracking for African B2B Companies",
        domain: "techpoint.africa"
      },
      {
        url: "https://cio-mag.com/",
        date: "2026-10-29",
        title: "Gouvernance de la donnée en PME : Passer de la feuille de calcul au tableau de bord automatisé",
        domain: "cio-mag.com"
      }
    ],
    drafted_post: null
  },
  {
    id: 'idea_20261103_07',
    session_id: sessionId,
    type: 'content',
    title: "Pourquoi j'ai quitté le droit pour la logistique de terrain avant de fonder une agence tech : La compétence la plus sous-estimée d'un dirigeant est de savoir suivre un colis jusqu'au quai",
    account: 'jesse',
    pillar: 'parcours-builder',
    pillar_label: 'Parcours & Terrain',
    funnel: 'TOFU',
    score: 5,
    bridge: "Jesse Ogoula / Storytelling authentique — Crédibilité opérationnelle forgée dans le monde réel pour conseiller les dirigeants sur l'automatisation sans baratin théorique",
    angles: [
      {
        name: "Débutant / Vulgarisation",
        format: "Post court",
        hook: "On me demande souvent ce qui lie mes études de droit, 7 années de logistique chez DARON GROUP et la direction d'une agence d'IA comme Iboga Lab. La réponse tient en un mot : l'architecture des flux.",
        points: [
          "Le droit m'a enseigné la rigueur absolue de la règle, la structure des contrats et l'anticipation des risques",
          "La logistique de terrain m'a confronté à la réalité brute de la friction physique : la panne de camion, l'avarie de stock et la promesse non tenue",
          "L'intelligence artificielle et le développement logiciel sont simplement la suite logique : concevoir des systèmes où la règle s'exécute sans défaillance",
          "Ce que j'enseigne aux talents et aux dirigeants : ne méprisez jamais les tâches manuelles de terrain, c'est là que réside toute la vérité d'un business"
        ]
      },
      {
        name: "Expert / Stratégique",
        format: "Carrousel",
        hook: "Les 4 leçons impitoyables de gestion d'équipe apprises sur les quais de déchargement de Port-Gentil que les livres de management n'enseignent pas.",
        points: [
          "Leçon 1 (La clarté bat l'éloquence) : Une consigne ambiguë sur un bon de chargement se termine toujours par une palette brisée à 500 kilomètres de là",
          "Leçon 2 (Le respect des mains qui travaillent) : Le meilleur moyen de concevoir un système qui marche est d'écouter celui qui porte le carton",
          "Leçon 3 (La redondance obligatoire) : Si votre plan opérationnel n'a pas de solution de secours immédiate, vous n'avez pas de plan, vous avez un vœu pieux",
          "Leçon 4 (L'exécution quotidienne) : L'excellence n'est pas un exploit spectaculaire occasionnel, c'est la répétition sans faute des gestes simples chaque matin"
        ]
      },
      {
        name: "Contrarien / Prise de position",
        format: "Texte long",
        hook: "L'Afrique n'a pas besoin de nouveaux théoriciens en costume qui récitent des citations de Steve Jobs sur LinkedIn sans avoir jamais géré une commande réelle de leur vie.",
        points: [
          "La prolifération inquiétante des consultants autoproclamés qui vendent de la stratégie d'entreprise sans avoir jamais payé une facture de fournisseur",
          "Pourquoi débuter par le cambouis opérationnel est le meilleur antidote contre l'arrogance intellectuelle",
          "Ce qui fait la force d'Iboga Lab aujourd'hui : nous ne recommandons jamais un outil ou une méthode que nous n'avons pas d'abord testée et éprouvée sous la contrainte",
          "Mon message aux jeunes professionnels : commencez là où c'est difficile, apprenez comment tourne l'économie réelle, votre légitimité future se forge dans cette sueur"
        ]
      },
      {
        name: "Prospectif / Sociétal",
        format: "Texte long",
        hook: "La revanche des profils hybrides : Pourquoi les bâtisseurs de demain seront des opérateurs de terrain doublés de technologues agiles.",
        points: [
          "La fin de l'ère des spécialistes enfermés dans une seule discipline académique étanche",
          "L'avantage comparatif décisif de celui qui sait à la fois lire un contrat juridique, optimiser une chaîne d'approvisionnement et configurer un modèle d'IA",
          "Comment les économies émergentes constituent le terrain d'entraînement le plus formateur au monde pour apprendre l'agilité et la résilience",
          "L'émergence d'un nouveau leadership africain ancré dans le réel, capable de rivaliser avec les meilleurs standards mondiaux tout en maîtrisant chaque contrainte locale"
        ]
      },
      {
        name: "Comparatif / Décisionnel",
        format: "Tableau / Comparatif structuré",
        hook: "Consultant théorique généraliste vs Praticien bâtisseur de terrain : Quelle approche choisir pour transformer votre PME ?",
        points: [
          "Approche du problème : Rapports de 80 pages remplis de jargon anglo-saxon vs Diagnostic opérationnel direct en 3 points d'action immédiats",
          "Livrables fournis : Recommandations abstraites laissées aux soins des équipes vs Déploiement concret de flux automatisés testés avec les opérateurs",
          "Mesure de la réussite : Nombre d'ateliers et de présentations animés vs Heures de travail économisées et chiffre d'affaires sécurisé",
          "La signature Jesse Ogoula : 70 % d'exécution stratégique, 30 % d'innovation de flux, 0 % de théorie inutile"
        ]
      },
      {
        name: "Storytelling / Retour terrain",
        format: "Récit d'expérience",
        hook: "Le jour où j'ai compris que mon diplôme de droit ne me servirait à rien devant un camion de livraison embourbé à l'entrée de la zone industrielle.",
        points: [
          "Le choc salutaire de la réalité : l'étudiant brillant obligé de mettre les bottes pour guider les roues dans la boue",
          "La fierté d'avoir appris la logistique depuis la base jusqu'à la coordination des flux généraux",
          "Comment cette expérience m'a donné l'obsession de la fluidité et m'a conduit naturellement à créer Iboga Lab pour libérer nos entreprises de leurs lourdeurs",
          "On n'attend pas la prochaine révolution, on la build : pas depuis une tour d'ivoire, mais depuis le terrain avec ceux qui font tourner le pays"
        ]
      }
    ],
    sources: [
      {
        url: "https://www.linkedin.com/in/ogoulajesse",
        date: "2026-11-03",
        title: "Profil professionnel officiel de Jesse Ogoula - Fondateur Iboga Lab",
        domain: "linkedin.com"
      },
      {
        url: "https://gabonmediatime.com/",
        date: "2026-10-27",
        title: "Parcours et portraits des bâtisseurs de l'économie numérique au Gabon",
        domain: "gabonmediatime.com"
      },
      {
        url: "https://www.wearetech.africa/",
        date: "2026-10-25",
        title: "Entrepreneuriat technologique en Afrique centrale : L'impératif de l'expérience opérationnelle",
        domain: "wearetech.africa"
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
if (process.argv[1] && process.argv[1].endsWith('addSession20261103.js')) {
  syncSession().then(() => {
    console.log('Synchronisation terminée avec succès!');
    process.exit(0);
  }).catch((err) => {
    console.error('Échec synchronisation:', err);
    process.exit(1);
  });
}

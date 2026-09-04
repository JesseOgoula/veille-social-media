import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://igicdrrdlambscodmaxi.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnaWNkcnJkbGFtYnNjb2RtYXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NjMwMjUsImV4cCI6MjEwMzQzOTAyNX0.puTkc1j7BI0-dKkAL1rRtN7_XwywOS77enlEgcZBHf4';
const supabase = createClient(supabaseUrl, supabaseKey);

const sessionId = 'sess_20260904_113000';
const sessionDate = '2026-09-04';
const weekLabel = 'Semaine du 04 Septembre 2026';
const generatedAt = new Date().toISOString();

const sessionData = {
  id: sessionId,
  date: sessionDate,
  generated_at: generatedAt,
  week_label: weekLabel,
  newsjacking: {
    title: "Cloture du FONED a Libreville et deploiement de SYSTAC 2 : La modernisation des flux financiers en Afrique Centrale et le defi de digitalisation pour les PME"
  }
};

const newsItems = [
  {
    id: `idea_${sessionId}_news01`,
    session_id: sessionId,
    type: 'news',
    title: "Le Paradoxe du ROI de l'IA en entreprise : 40% de deploiements mais seulement 18% mesurent le gain reel",
    account: 'personal',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Process — Cartographie prealable des flux de travail pour garantir un ROI financier mesurable",
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualite court",
        hook: "L'intelligence artificielle n'a plus un probleme de modele, mais un probleme de retour sur investissement. 40% des grandes entreprises deploient des agents, mais 18% seulement mesurent ce que cela rapporte.",
        points: [
          "Les etudes d'aout et debut septembre 2026 montrent une acceleration massive des deploiements d'agents autonomes dans les organisations.",
          "Cependant, le club des entreprises tirant un impact reel sur leur resultat d'exploitation (EBIT) reste bloque a 6%.",
          "La raison principale identifiee par les analystes : les agents sont greffes sur des processus d'entreprise mal concus, non documentes ou silotes.",
          "Les directions generales arretent d'evaluer la vitesse de generation pour exiger le cout par resultat et le gain direct de capacite."
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
        title: "Executive AI Strategy Questions to Drive ROI",
        domain: "forbes.com",
        date: "27/08/2026",
        url: "https://www.forbes.com/sites/noahbarsky/2026/05/27/4-ai-strategy-questions-every-executive-needs-to-drive-roi/"
      }
    ],
    drafted_post: "OBSERVATOIRE IA : L'epoque de l'IA gadget en entreprise est officiellement terminee.\n\nCe qui s'est passe :\nLes donnees publiees en cette fin d'ete 2026 confirment ce que nous voyons sur le terrain : pres de 40% des entreprises accedent desormais a des agents d'intelligence artificielle, mais a peine 18% mesurent formellement leur retour sur investissement reel.\n\nPourquoi ce paradoxe existe :\nInjecter un agent IA sur un flux de travail flou ou desorganise ne regle aucun probleme. Cela produit seulement de la desorganisation a la vitesse de la lumiere. Le goulot d'etranglement n'est plus l'intelligence du modele, mais la structure des donnees internes et la clarte des responsabilites de validation.\n\nMon avis de praticien :\nSi vous voulez du ROI avec l'IA dans votre entreprise, ne commencez pas par chercher un outil. Commencez par poser vos processus sur papier, definir qui valide quoi, et mesurer le temps gaspille sur chaque etape. L'automatisation vient ensuite, jamais avant.\n\nMesurez-vous le temps reel economise par vos equipes grace aux outils numeriques ?\n\n#IntelligenceArtificielle #ROI #TransformationDigitale #Productivite #IbogaLab"
  },
  {
    id: `idea_${sessionId}_news02`,
    session_id: sessionId,
    type: 'news',
    title: "Cloture du Forum National de l'Epargne au Gabon : Lancement d'OKIRA 241 pour financer les investissements nationaux",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Lab — Accompagnement des PME dans la structuration digitale pour capter les capitaux et marches du PNCD",
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualite court",
        hook: "Financer notre croissance par notre propre epargne : les 2 et 3 septembre 2026, Libreville a pose les bases d'une souverainete financiere concrete avec le FONED.",
        points: [
          "Cloture a Libreville de la premiere edition du Forum National de l'Epargne pour le Developpement (FONED), orchestree par la Caisse des Depots et Consignations (CDC).",
          "Lancement officiel d'OKIRA 241, premier produit d'epargne reglementee et 100% digitalise, garanti et defiscalise pour les residents et la diaspora.",
          "Sur les 27 000 milliards de FCFA prevus pour le Plan National de Croissance et de Developpement (PNCD 2026-2030), 18 000 milliards doivent provenir des ressources nationales et privees.",
          "Opportunite pour les PME locales : les capitaux collectes ont vocation a irriguer les projets concrets d'infrastructures, d'agriculture et de technologie."
        ]
      }
    ],
    sources: [
      {
        title: "Gabon : La CDC lance OKIRA 241 lors du premier FONED",
        domain: "gabondailynews.com",
        date: "03/09/2026",
        url: "https://www.fr.gabondailynews.com/public/index.php/fr/read/1133"
      },
      {
        title: "Financement du developpement : Le Gabon mise sur l'epargne nationale et de la diaspora",
        domain: "leconomie.info",
        date: "02/09/2026",
        url: "https://leconomie.info/article/financement-du-developpement-le-gabon-mise-sur-lepargne-nationale-et-de-la-diaspora"
      },
      {
        title: "La CDC Gabon mobilise les forces vives pour le PNCD 2026-2030",
        domain: "gabonactu.com",
        date: "03/09/2026",
        url: "https://gabonactu.com/"
      }
    ],
    drafted_post: "ECONOMIE & GABON : Le premier Forum National de l'Epargne vient de s'achever a Libreville, et c'est un signal fort pour nos entreprises.\n\nCe qui s'est passe :\nLes 2 et 3 septembre 2026, la Caisse des Depots et Consignations (CDC Gabon) a reuni les acteurs economiques au Palais des Congres de Libreville et officialise le lancement d'OKIRA 241, un produit d'epargne reglementee 100% digital destine a canaliser les capitaux locaux et de la diaspora vers l'economie reelle.\n\nPourquoi c'est determinant pour les PME :\nLe Plan National de Croissance et de Developpement (PNCD 2026-2030) necessite 27 000 milliards de FCFA. Pres des deux tiers doivent etre trouves localement. Pour les entrepreneurs gabonais, l'epargne dormante commence enfin a trouver un vehicule d'investissement structure.\n\nMon avis de builder :\nL'argent existe en Afrique centrale ; ce qui manquait, c'etait la confiance, la tracabilite et les vehicules transparents. Mais attention : pour capter ces financements, les PME devront presenter des comptes clairs, des operations digitalisees et une gouvernance irreprochable.\n\nVotre PME est-elle prete a demontrer sa rigueur pour lever des capitaux locaux ?\n\n#Gabon #FONED #FinanceAfricaine #PMEGabon #SouveraineteFinanciere #IbogaLab"
  },
  {
    id: `idea_${sessionId}_news03`,
    session_id: sessionId,
    type: 'news',
    title: "Telecompensation interbancaire en zone CEMAC : SYSTAC 2 connecte 71 institutions a la norme ISO 20022",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Process — Automatisation des rapprochements bancaires et flux de tresorerie pour PME",
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualite court",
        hook: "Une transformation bancaire silencieuse mais colossale s'est operee en Afrique Centrale : la BEAC vient d'activer SYSTAC 2.",
        points: [
          "Entree en production operationnelle du systeme SYSTAC 2 par la Banque des Etats de l'Afrique Centrale (BEAC) avec ProgressSoft.",
          "Interconnexion de 71 banques, etablissements financiers et tresors publics dans les 6 pays membres de la CEMAC.",
          "Migration vers le standard international de messagerie financiere ISO 20022.",
          "Objectif direct : accelerer les delais de compensation des virements interbancaires et des operations de masse pour les entreprises."
        ]
      }
    ],
    sources: [
      {
        title: "ProgressSoft and BEAC Launch SYSTAC II Payment System",
        domain: "ffnews.com",
        date: "03/08/2026",
        url: "https://ffnews.com/newsarticle/fintech/progresssoft-and-beac-launch-systac-ii-system/"
      },
      {
        title: "CEMAC : La BEAC operationnalise la nouvelle telecompensation SYSTAC 2",
        domain: "ecomatin.net",
        date: "12/08/2026",
        url: "https://www.ecomatin.net/cemac-beac-systac-2-telecompensation/"
      },
      {
        title: "ProgressSoft Corporation Central Clearing Solutions",
        domain: "progressoft.com",
        date: "15/08/2026",
        url: "https://www.progressoft.com/"
      }
    ],
    drafted_post: "INFRASTRUCTURE FINANCIERE : Révolution silencieuse pour les paiements interbancaires en zone CEMAC.\n\nCe qui s'est passe :\nLa Banque des Etats de l'Afrique Centrale (BEAC) a deploye SYSTAC 2 aupres de 71 institutions financieres et tresors nationaux au Gabon, au Cameroun, au Congo, au Tchad, en RCA et en Guinee Equatoriale, en adoptant le standard mondial ISO 20022.\n\nPourquoi c'est un enjeu vital de tresorerie :\nPendant des annees, un virement interbancaire transfrontalier ou meme national pouvait immobiliser la tresorerie d'une PME pendant plusieurs jours ouvrables. La telecompensation modernisee reduit ces frottements et pave la voie a l'integration des fintechs et du commerce digitalise.\n\nMon avis de praticien :\nL'infrastructure sous-regionale se modernise. La vraie question pour nos PME est interne : etes-vous encore en train de pointer manuellement vos releves bancaires ligne par ligne a la fin du mois, ou vos outils sont-ils prets pour la reconciliation automatique ?\n\nCombien de jours votre PME perd-elle chaque mois a attendre la confirmation de ses virements ?\n\n#CEMAC #Banque #SYSTAC #FintechAfrique #Tresorerie #IbogaLab"
  }
];

const contentIdeas = [
  {
    id: `idea_${sessionId}_01`,
    session_id: sessionId,
    type: 'content',
    title: "Automatiser sur du desordre : Pourquoi 80% des echecs de projets IA en PME viennent de processus non formalises",
    account: 'business',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'MOFU',
    score: 5,
    bridge: "Iboga Process — Audit de flux et formalisation de SOPs avant tout outil",
    angles: [
      {
        label: "Debutant",
        format: "Post explicatif avec retour de diagnostic terrain",
        hook: "Si vous donnez un outil d'intelligence artificielle a une equipe qui ne sait pas qui valide une facture, vous obtiendrez des erreurs generees trois fois plus vite.",
        points: [
          "L'illusion du logiciel magique : croire que l'IA va compenser le manque de clarte des consignes internes.",
          "Le principe fondamental : une machine ne peut optimiser que ce qui est previsible, repete et documente.",
          "Les trois questions prealables : quel est le declencheur du flux, qui possede la donnee, quelle est la regle de validation."
        ]
      },
      {
        label: "Expert",
        format: "Carrousel LinkedIn methodologique (5 slides)",
        hook: "La Matrice de Maturite Operationnelle : Les 4 etapes indispensables avant d'installer un agent IA.",
        points: [
          "Slide 1 : Niveau 1 - Le stade Oral et Informel (consignes sur WhatsApp, perte de temps maximale).",
          "Slide 2 : Niveau 2 - Le stade Standardise (SOPs ecrites, modeles de documents uniformes).",
          "Slide 3 : Niveau 3 - Le stade Automatise Deterministe (connexions API simples, regles logiques fiables a 100%).",
          "Slide 4 : Niveau 4 - Le stade Augmente par IA (agents conversationnels et extraction intelligente sur donnees propres).",
          "Slide 5 : Pourquoi bruler les etapes 2 et 3 mene directement a la catastrophe budgetaire."
        ]
      },
      {
        label: "Contrarien",
        format: "Post opinion tranchee",
        hook: "Arretez de chercher des 'prompts miracles'. Votre entreprise a besoin de fiches de processus claires, pas de formules magiques.",
        points: [
          "La mode du prompt engineering a distrait les dirigeants de leur responsabilite premiere : organiser le travail.",
          "Chez Iboga Lab, le premier atelier chez un client ne touche aucun ordinateur : nous prenons des post-its et cartographions le parcours de l'information.",
          "Ce n'est pas glamour, mais c'est la seule methode qui genere des gains de productivite durables et mesurables."
        ]
      }
    ],
    sources: [
      {
        title: "The Agentic Reckoning : Runtime and Process Infrastructure in Enterprise AI",
        domain: "venturebeat.com",
        date: "28/08/2026",
        url: "https://venturebeat.com/resources/the-agentic-reckoning-enterprise-ai-organizations-have-a-runtime-problem-not-a-model-problem"
      },
      {
        title: "Executive Decision Making and Operational Biases in AI Deployments",
        domain: "hbr.org",
        date: "2026",
        url: "https://hbr.org/topic/subject/behavioral-economics"
      },
      {
        title: "Behavioral Design for Enterprise Process Change",
        domain: "behavioralscientist.org",
        date: "2026",
        url: "https://behavioralscientist.org/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_02`,
    session_id: sessionId,
    type: 'content',
    title: "L'Audit d'Opportunites IA en direct : Comment une entreprise de logistique a reduit de 65% le temps de traitement des bons de livraison",
    account: 'business',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'BOFU',
    score: 5,
    bridge: "Audit d'Opportunites IA Gratuit (ibogalab.vercel.app/calendly-booking) — Optimisation operationnelle",
    angles: [
      {
        label: "Debutant",
        format: "Etude de cas terrain chiffree",
        hook: "Chaque matin, 3 collaborateurs passaient 4 heures a recopier a la main des bons de livraison papier dans un tableau Excel. Voici comment nous avons change la donne.",
        points: [
          "Le diagnostic initial : perte de documents en transit maritime, erreurs de saisie des quantites, retards de facturation de plus de 10 jours.",
          "La solution mise en place par Iboga Lab : scan photo via mobile, extraction automatique des references et synchronisation directe avec le stock.",
          "Le resultat apres 30 jours : delai de traitement passe de 4h a 20 minutes, zero bon egare, facturation acceleree."
        ]
      },
      {
        label: "Expert",
        format: "Schema de flux technique et economique",
        hook: "L'architecture no-code et OCR appliquee aux contraintes de connectivite d'Afrique Centrale.",
        points: [
          "Capture d'image sur le terrain avec compression locale pour fonctionner sur connexion 3G/4G instable.",
          "Pipeline d'extraction structuree utilisant un modele de vision leger et validation humaine uniquement en cas de score de confiance inferieur a 90%.",
          "Mise a jour automatique de la base centrale sans remplacer le progiciel de gestion existant de l'entreprise."
        ]
      },
      {
        label: "Contrarien",
        format: "Post coup de gueule pragmatique",
        hook: "Vous n'avez pas besoin d'une refonte informatique a 50 millions de FCFA pour regler un goulot d'etranglement administratif.",
        points: [
          "Trop de prestataires vendent des suites logicielles lourdes et inadaptees que le personnel finit par abandonner.",
          "Chez Iboga Lab, nous construisons des passerelles pragmatiques autour des habitudes existantes de vos equipes.",
          "Un audit gratuit de 30 minutes suffit souvent a identifier les 3 chantiers prioritaires qui liberent 15h par semaine."
        ]
      }
    ],
    sources: [
      {
        title: "Guichet unique du commerce exterieur et digitalisation logistique au Gabon",
        domain: "ecomatin.net",
        date: "2026",
        url: "https://ecomatin.net/le-gabon-enclenche-la-mise-en-place-de-son-guichet-unique-du-commerce-exterieur"
      },
      {
        title: "Modernisation des frontieres et fluidification des echanges commerciaux en CEMAC",
        domain: "ecomatin.net",
        date: "2026",
        url: "https://ecomatin.net/commerce-transfrontalier-la-cemac-engage-des-demarches-aupres-de-livoirien-scanning-systems-pour-moderniser-ses-frontieres"
      },
      {
        title: "ProgressSoft Enterprise Transaction Workflows",
        domain: "progressoft.com",
        date: "2026",
        url: "https://www.progressoft.com/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_03`,
    session_id: sessionId,
    type: 'content',
    title: "L'IA Frugale et locale : Pourquoi les PME africaines ont interet a adopter les petits modeles (SLM) hors-ligne",
    account: 'personal',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'MOFU',
    score: 5,
    bridge: "Iboga Learn & Dev — Deploiement de modeles IA locaux et souverains adaptes aux reseaux restreints",
    angles: [
      {
        label: "Debutant",
        format: "Post de vulgarisation technologique",
        hook: "Pourquoi payer un abonnement cloud americain quand un modele IA de 3 milliards de parametres peut tourner gratuitement sur l'ordinateur de votre bureau ?",
        points: [
          "La fin du mythe de la taille : pour trier des emails, rediger des fiches de poste ou extraire des devis, vous n'avez pas besoin d'un modele geant.",
          "L'avantage decisive en Afrique : zero dependance a la coupure de fibre optique sous-marine ou aux ralentissements internet.",
          "La confidentialite absolue : vos contrats et bilans financiers ne sortent jamais du reseau interne de l'entreprise."
        ]
      },
      {
        label: "Expert",
        format: "Guide d'implementation pour directeurs techniques",
        hook: "De Llama 3.2 a SmolLM : Comment configurer une instance Ollama sur serveur d'entreprise local.",
        points: [
          "Benchmark comparatif de performance : qualite d'extraction et temps de reponse sur processeur standard (CPU).",
          "Integration avec des outils internes via API REST locale sans facturation au token.",
          "La demarche Iboga Learn pour former les developpeurs et equipes internes a la maintenance de ces modeles autonomes."
        ]
      },
      {
        label: "Contrarien",
        format: "Post prise de position",
        hook: "Confier l'integralite des donnees de votre PME a des serveurs situes a 10 000 km d'ici n'est pas de la modernite, c'est une vulnerabilite strategique.",
        points: [
          "La vraie souverainete numerique d'une entreprise commence sur ses propres disques durs.",
          "L'IA frugale n'est pas un choix par defaut, c'est l'arme la plus intelligente pour batir des systemes resilients dans notre contexte economique.",
          "Ceux qui buildent en local aujourd'hui seront les seuls operationnels lors de la prochaine coupure reseau."
        ]
      }
    ],
    sources: [
      {
        title: "SmolLM : Compact Language Models for On-Device and Local Computing",
        domain: "huggingface.co",
        date: "2026",
        url: "https://huggingface.co/blog/smollm"
      },
      {
        title: "Ollama Local Model Framework Documentation",
        domain: "ollama.com",
        date: "2026",
        url: "https://ollama.com"
      },
      {
        title: "Hugging Face Machine Learning Publications and Guides",
        domain: "huggingface.co",
        date: "2026",
        url: "https://huggingface.co/blog"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_04`,
    session_id: sessionId,
    type: 'content',
    title: "Tresorerie et delais de reglement en zone CEMAC : Comment preparer sa PME a l'acceleration des paiements interbancaires",
    account: 'business',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'BOFU',
    score: 5,
    bridge: "Audit d'Opportunites IA Gratuit (ibogalab.vercel.app/calendly-booking) — Automatisation des rapprochements comptables",
    angles: [
      {
        label: "Debutant",
        format: "Conseil de gestion de tresorerie pour directeurs generaux",
        hook: "Avec la modernisation des systemes de paiement en Afrique Centrale, vos clients n'auront bientot plus l'excuse du 'virement en cours'. Mais votre propre comptabilite est-elle prete ?",
        points: [
          "L'evolution des usages : les virements interbancaires deviennent plus rapides et tracables grace a la norme ISO 20022 de SYSTAC 2.",
          "Le risque pour les PME : continuer a gerer les encaissements sur des carnets papier pendant que les flux financiers s'accelerent.",
          "La solution : mettre en place un pipeline automatique qui reconcilie les avis bancaires des reception et emet le recu client."
        ]
      },
      {
        label: "Expert",
        format: "Guide d'automatisation financiere",
        hook: "De la reception du justificatif a la mise a jour de la balance agee : le flux d'automatisation comptable type pour PME.",
        points: [
          "Capture des avis de credit bancaires et parsing automatique par IA d'extraction.",
          "Rapprochement automatique avec le numero de facture client dans la base de donnees.",
          "Alerte immediate sur le canal de communication de la direction en cas de decalage de montant."
        ]
      },
      {
        label: "Contrarien",
        format: "Post sans filtre",
        hook: "La plupart des retards de paiement dans nos PME ne viennent pas de la mauvaise volonte des clients, mais de notre lenteur a envoyer les factures conformes.",
        points: [
          "Une facture envoyee 15 jours apres la livraison d'un service est une facture qui sera payee avec 45 jours de retard.",
          "Automatiser l'emission et la relance immediate est le moyen le plus simple d'augmenter votre tresorerie de 20% sans faire un seul client supplementaire.",
          "C'est exactement ce que nous auditions lors des sessions Iboga Process."
        ]
      }
    ],
    sources: [
      {
        title: "ProgressSoft and BEAC Launch SYSTAC II Payment System",
        domain: "ffnews.com",
        date: "03/08/2026",
        url: "https://ffnews.com/newsarticle/fintech/progresssoft-and-beac-launch-systac-ii-system/"
      },
      {
        title: "CEMAC : La BEAC operationnalise la nouvelle telecompensation SYSTAC 2",
        domain: "ecomatin.net",
        date: "12/08/2026",
        url: "https://www.ecomatin.net/cemac-beac-systac-2-telecompensation/"
      },
      {
        title: "BEAC Payment Modernization and Clearing Standards",
        domain: "progressoft.com",
        date: "2026",
        url: "https://www.progressoft.com/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_05`,
    session_id: sessionId,
    type: 'content',
    title: "Corridors de transport et goulots d'etranglement : La digitalisation du suivi de marchandises en Afrique Centrale",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 4,
    bridge: "Iboga Dev & Process — Tableaux de bord de suivi logistique temps reel",
    angles: [
      {
        label: "Debutant",
        format: "Storytelling logistique terrain",
        hook: "Entre Libreville et Port-Gentil par bateau, ou de Douala a Libreville par la route : pourquoi la logistique est le premier destructeur de marge des PME d'Afrique Centrale.",
        points: [
          "L'incertitude permanente sur la position des marchandises et les dates effectives de mise a quai.",
          "Les couts caches de surestaries et de stockage imprevus qui mangent la rentabilite des importateurs et distributeurs.",
          "Comment de simples alertes automatisees permettent d'anticiper le dedouanement et d'eviter les penalites."
        ]
      },
      {
        label: "Expert",
        format: "Analyse des initiatives regionales",
        hook: "Guichet unique du commerce exterieur au Gabon et postes frontaliers CEMAC : ce que les transitaires et PME doivent integrer des aujourd'hui.",
        points: [
          "Le passage a la dematerialisation des declarations douanieres et des autorisations d'importation.",
          "L'importance pour les entreprises de se connecter aux nouveaux guichets uniques pour accelerer le dedouanement.",
          "L'architecture de donnees necessaire pour que les PME partagent leurs manifestes de fret sans friction."
        ]
      },
      {
        label: "Contrarien",
        format: "Prise de position operateur",
        hook: "Nos problemes logistiques ne sont pas seulement dus a l'etat des routes, mais a notre addiction aux bons de commande papier.",
        points: [
          "On accuse souvent les infrastructures physiques, mais le principal retard est documentaire : des papiers perdus, ratures ou non signes.",
          "La vraie digitalisation ne consiste pas a acheter un logiciel americain a 50 000 dollars, mais a faire en sorte qu'une confirmation de dechargement soit transmise en 3 clics par le chauffeur.",
          "C'est sur ces petits flux que se gagne la rentabilite quotidienne."
        ]
      }
    ],
    sources: [
      {
        title: "Le Gabon enclenche la mise en place de son guichet unique du commerce exterieur",
        domain: "ecomatin.net",
        date: "2026",
        url: "https://ecomatin.net/le-gabon-enclenche-la-mise-en-place-de-son-guichet-unique-du-commerce-exterieur"
      },
      {
        title: "Modernisation des frontieres CEMAC et postes de controle juxtaposes",
        domain: "ecomatin.net",
        date: "2026",
        url: "https://ecomatin.net/commerce-transfrontalier-la-cemac-engage-des-demarches-aupres-de-livoirien-scanning-systems-pour-moderniser-ses-frontieres"
      },
      {
        title: "Porteo Group Infrastructures et logistique regionale",
        domain: "porteo-group.com",
        date: "2026",
        url: "https://porteo-group.com/afrique-centrale-un-pas-de-plus-vers-lindependance-numerique/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_06`,
    session_id: sessionId,
    type: 'content',
    title: "Le Biais de Confirmation et le 'Theatre de la Digitalisation' : Pourquoi les dirigeants achetent des logiciels pour se rassurer",
    account: 'personal',
    pillar: 'builder',
    pillar_label: 'Parcours Builder',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Lab — Approche builder pragmatique : 70% d'execution, 30% d'innovation de flux, 0% de theorie inutile",
    angles: [
      {
        label: "Debutant",
        format: "Reflexion personnelle et partage de constat",
        hook: "Acheter un logiciel a 10 000 dollars donne l'illusion qu'on avance. Mais si votre equipe continue d'imprimer des feuilles pour les signer a la main, vous venez juste d'acheter du theatre.",
        points: [
          "Le piege psychologique : confondre la signature d'un bon de commande informatique avec la transformation reelle des habitudes de travail.",
          "Pourquoi tant d'outils finissent a l'abandon apres trois mois d'utilisation.",
          "La regle du bâtisseur : une solution n'est valide que si la personne la moins technophile de l'equipe l'utilise tous les jours avec plaisir."
        ]
      },
      {
        label: "Expert",
        format: "Decryptage en economie comportementale",
        hook: "L'effet des couts irrecuperables (Sunk Cost Fallacy) dans les choix numeriques des directions d'entreprise.",
        points: [
          "Pourquoi les managers continuent a payer des licences inadaptees simplement parce qu'ils y ont deja investi du temps et de l'argent.",
          "Comment appliquer le desengagement rapide et le pivot operationnel sans culpabilite.",
          "Le framework de decision Iboga Lab : utilite immediate vs complexite technique."
        ]
      },
      {
        label: "Contrarien",
        format: "Philosophie builder sans filtre",
        hook: "Si votre transformation digitale n'a pas reduit la fatigue mentale de vos equipes d'au moins 20%, ce n'etait pas une transformation, c'etait une surcharge.",
        points: [
          "Le numerique doit simplifier la vie, pas ajouter des formulaires a rallonge pour justifier des postes de controleurs.",
          "Je prefere voir une PME tourner a plein regime sur WhatsApp et Google Sheets bien structures, plutot qu'une entreprise paralyseee par un ERP que personne ne comprend.",
          "0% de theorie inutile. 100% de pragmatisme."
        ]
      }
    ],
    sources: [
      {
        title: "Outsmart Your Own Biases in Business Decisions",
        domain: "hbr.org",
        date: "2026",
        url: "https://hbr.org/topic/subject/behavioral-economics"
      },
      {
        title: "Behavioral Economics and Management Decision Traps",
        domain: "behavioralscientist.org",
        date: "2026",
        url: "https://behavioralscientist.org/"
      },
      {
        title: "Behavioral Design for Sustainable Workplace Change",
        domain: "suebehaviouraldesign.com",
        date: "2026",
        url: "https://www.suebehaviouraldesign.com/en/"
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

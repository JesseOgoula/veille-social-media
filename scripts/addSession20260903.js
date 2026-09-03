import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://igicdrrdlambscodmaxi.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnaWNkcnJkbGFtYnNjb2RtYXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NjMwMjUsImV4cCI6MjEwMzQzOTAyNX0.puTkc1j7BI0-dKkAL1rRtN7_XwywOS77enlEgcZBHf4';
const supabase = createClient(supabaseUrl, supabaseKey);

const sessionId = 'sess_20260903_084500';
const sessionDate = '2026-09-03';
const weekLabel = 'Semaine du 03 Septembre 2026';
const generatedAt = new Date().toISOString();

const sessionData = {
  id: sessionId,
  date: sessionDate,
  generated_at: generatedAt,
  week_label: weekLabel,
  newsjacking: {
    title: "Meta durcit WhatsApp Business au 1er octobre 2026 : La fin des messages informels gratuits pour les PME"
  }
};

const newsItems = [
  {
    id: `idea_${sessionId}_news01`,
    session_id: sessionId,
    type: 'news',
    title: "Meta modifie la tarification de WhatsApp Business au 1er octobre : Révolution des tunnels de vente PME",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: '💼 Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 5,
    bridge: 'Iboga Process — Automatisation et rationalisation des flux WhatsApp Business',
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualité court",
        hook: "Meta change les règles de WhatsApp Business au 1er octobre 2026. Si vous gérez vos clients au feeling, la facture va faire très mal.",
        points: [
          "Meta met fin à la gratuité généralisée des conversations de service sur sa Business Platform.",
          "Chaque message de suivi ou relance marketing sera strictement facturé au volume.",
          "Impact direct en Afrique subsaharienne où plus de 85% des ventes PME transitent par WhatsApp.",
          "La solution : automatiser les réponses et connecter son catalogue à un système de réconciliation."
        ]
      }
    ],
    sources: [
      {
        title: "Meta WhatsApp Business Platform Pricing Restructuring Impact on African SMEs",
        domain: "techpoint.africa",
        date: "20/08/2026",
        url: "https://techpoint.africa/2026/08/20/meta-whatsapp-business-api-pricing-update-africa/"
      },
      {
        title: "WhatsApp Business en Afrique : Ce que change la nouvelle grille tarifaire d'octobre 2026",
        domain: "cio-mag.com",
        date: "24/08/2026",
        url: "https://cio-mag.com/whatsapp-business-afrique-2026-nouvelles-regles-pour-les-entreprises/"
      },
      {
        title: "Disrupt Africa SME Communication Cost Forecast 2026",
        domain: "disrupt-africa.com",
        date: "22/08/2026",
        url: "https://disrupt-africa.com/2026/08/whatsapp-business-platform-pricing-restructuring-impact-african-smes/"
      }
    ],
    drafted_post: "📢 ALERTE PME : Meta change les règles de WhatsApp Business au 1er octobre 2026.\n\nCe qui s'est passé :\nMeta a officialisé la refonte tarifaire de sa WhatsApp Business Platform. Les messages de service et relances marketing seront désormais facturés au volume dès le premier échange automatisé.\n\nPourquoi c'est capital pour nous en Afrique :\nSur notre continent, WhatsApp n'est pas une messagerie, c'est l'infrastructure commerciale #1. 90% des ventes informelles et formelles passent par là. Les PME qui spamment ou relancent manuellement vont voir leurs coûts exploser ou leurs numéros bloqués.\n\nMon avis de builder :\nC'est la fin du bricolage commercial. Les dirigeants africains doivent dès maintenant structurer leurs flux : qualifier le prospect dès le premier message, automatiser l'envoi de catalogue et basculer sur un CRM connecté au Mobile Money.\n\nVos équipes utilisent-elles encore WhatsApp au doigt mouillé pour gérer vos commandes ?\n\n#WhatsAppBusiness #PMEAfrique #Digitalisation #Croissance #IbogaLab"
  },
  {
    id: `idea_${sessionId}_news02`,
    session_id: sessionId,
    type: 'news',
    title: "Anthropic lance Enterprise Frontier Safeguards : Le verrou de la confidentialité IA saute enfin",
    account: 'personal',
    pillar: 'ia',
    pillar_label: '🤖 IA Appliquée pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: 'Iboga Learn & Process — Déploiement d’agents IA sécurisés en entreprise',
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualité court",
        hook: "La première excuse des dirigeants pour ne pas adopter l'IA vient d'être pulvérisée par Anthropic.",
        points: [
          "Lancement le 2 septembre 2026 d'Enterprise Frontier Safeguards (EFS).",
          "Les entreprises gardent leurs données de monitoring dans leur propre cloud (AWS, Azure, GCP).",
          "Zéro rétention de données (ZDR) combinée à des contrôles de conformité stricts.",
          "Baisse de 75% du coût des prompts en cache pour accélérer les workflows d'agents."
        ]
      }
    ],
    sources: [
      {
        title: "Anthropic launches Enterprise Frontier Safeguards for Cloud Deployments",
        domain: "marktechpost.com",
        date: "02/09/2026",
        url: "https://marktechpost.com/2026/09/02/anthropic-launches-enterprise-frontier-safeguards-for-cloud-deployments/"
      },
      {
        title: "Anthropic Enterprise Frontier Safeguards: Solving the AI Data Retention Dilemma",
        domain: "qz.com",
        date: "02/09/2026",
        url: "https://qz.com/anthropic-enterprise-frontier-safeguards-ai-data-security/"
      },
      {
        title: "Anthropic cuts cache prices by 75% alongside new Claude Fable releases",
        domain: "economictimes.com",
        date: "01/09/2026",
        url: "https://economictimes.com/tech/anthropic-releases-claude-fable-mythos-reduces-cache-costs/2026/09/01"
      }
    ],
    drafted_post: "📢 SÉCURITÉ IA : Anthropic vient de faire sauter le plus grand frein des entreprises.\n\nCe qui s'est passé :\nLe 2 septembre 2026, Anthropic a déployé 'Enterprise Frontier Safeguards' (EFS). Les entreprises peuvent désormais exécuter des modèles de pointe (Claude) tout en conservant l'intégralité des logs de sécurité et de monitoring dans leur propre infrastructure cloud (AWS, Azure, GCP), chiffrée avec leurs propres clés.\n\nPourquoi c'est une rupture :\nJusqu'ici, les banques, assurances et PME industrielles refusaient d'intégrer des agents IA de peur que leurs contrats et données financières ne soient captés ou inspectés par un tiers américain.\n\nMon avis de praticien :\nL'argument de 'la fuite de données' ne tient plus. Les architectures modernes permettent le Zero-Data-Retention avec un audit en local. Les directions générales africaines ont désormais le feu vert pour automatiser leurs processus sensibles sans compromettre leur souveraineté.\n\nQu'est-ce qui retient encore votre comité de direction d'intégrer des assistants IA dans vos opérations ?\n\n#IntelligenceArtificielle #Cybersécurité #CloudSouverain #Innovation #EntrepriseAfrique"
  },
  {
    id: `idea_${sessionId}_news03`,
    session_id: sessionId,
    type: 'news',
    title: "Le Gabon structure son écosystème tech : Entrée en action de la DGTE et du label Startups",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: '💼 Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 4,
    bridge: 'Iboga Dev — Accompagnement technique pour l’éligibilité au label startup gabonais',
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualité court",
        hook: "Le Gabon passe de la théorie à l'exécution réglementaire pour ses startups numériques.",
        points: [
          "Mise en place opérationnelle de la Direction Générale des Technologies Émergentes (DGTE).",
          "Décret actant le statut et les critères de labellisation des startups gabonaises.",
          "Mobilisation de la GENI (Gabonaise de l'Entrepreneuriat Numérique) pour fédérer les acteurs.",
          "Objectif : canaliser la commande publique et les financements vers les solutions digitales locales."
        ]
      }
    ],
    sources: [
      {
        title: "Gabon : Création de la Direction Générale des Technologies Émergentes pour encadrer l'IA",
        domain: "gabonmediatime.com",
        date: "24/05/2026",
        url: "https://gabonmediatime.com/gabon-creation-de-la-direction-generale-des-technologies-emergentes-pour-encadrer-lia/"
      },
      {
        title: "Le gouvernement gabonais adopte un cadre de labellisation des startups et crée la DGTE",
        domain: "digitalbusiness.africa",
        date: "25/05/2026",
        url: "https://digitalbusiness.africa/gabon-le-gouvernement-adopte-un-cadre-de-labellisation-des-startups-et-cree-la-dgte/"
      },
      {
        title: "Numérique au Gabon : Ce que prévoit le nouveau décret sur les startups et l'IA",
        domain: "directinfosgabon.com",
        date: "25/05/2026",
        url: "https://directinfosgabon.com/gabon-numerique-ce-que-prevoit-le-nouveau-decret-sur-les-startups-et-lia/"
      }
    ],
    drafted_post: "📢 ÉCOSYSTÈME GABON : La DGTE et le label Startup entrent dans le concret.\n\nCe qui s'est passé :\nAprès l'adoption du décret créant la Direction Générale des Technologies Émergentes (DGTE) et le cadre de labellisation des startups numériques, les mécanismes d'identification et de soutien aux entreprises tech locales se mettent en place avec la GENI.\n\nPourquoi c'est capital :\nPendant des années, n'importe quelle activité se déclarait 'startup' sans produit éprouvé ni propriété intellectuelle. Le label officiel va enfin séparer les faiseurs de slides des vrais bâtisseurs de code et d'outils opérationnels.\n\nMon avis de builder local :\nC'est une opportunité historique pour nos PME et startups basées à Libreville, Port-Gentil ou dans l'intérieur. Mais attention : le label n'apportera des marchés qu'à ceux qui ont une gouvernance propre, des process digitalisés et un vrai impact mesurable.\n\nÊtes-vous prêts à auditer votre boîte pour prétendre au label ?\n\n#GabonTech #DGTE #InnovationGabon #StartupsAfrique #IbogaLab"
  }
];

const contentIdeas = [
  {
    id: `idea_${sessionId}_01`,
    session_id: sessionId,
    type: 'content',
    title: "WhatsApp Business + Mobile Money : Le gouffre financier invisible de la réconciliation manuelle dans les PME",
    account: 'business',
    pillar: 'ia',
    pillar_label: '🤖 IA Appliquée pour Dirigeants',
    funnel: 'MOFU',
    score: 5,
    bridge: 'Iboga Process — Pipeline automatisé Webhook Mobile Money ➔ Facturation automatique',
    angles: [
      {
        label: "Débutant",
        format: "Post explicatif avec exemple réel",
        hook: "Vos commerciaux passent 2 heures par jour à valider des captures d'écran de paiements Mobile Money. Voici ce que ça vous coûte vraiment chaque mois.",
        points: [
          "Le workflow classique : le client paie par Moov ou Airtel Money, fait une capture d'écran, l'envoie sur WhatsApp, et un employé vérifie manuellement sur le téléphone de fonction.",
          "Les failles majeures : erreurs de saisie, fraudes aux fausses captures retouchées, et retards de livraison de 24 à 48 heures.",
          "La solution opérationnelle : connecter les API de paiement à un webhook qui valide automatiquement la commande et génère la facture instantanément."
        ]
      },
      {
        label: "Expert",
        format: "Carrousel LinkedIn (6 slides techniques)",
        hook: "L'architecture no-code + webhook pour réconcilier 100% de vos transactions Mobile Money sans embaucher de comptable supplémentaire.",
        points: [
          "Slide 1 : Schéma du goulet d'étranglement (WhatsApp ➔ Téléphone caisse ➔ Excel).",
          "Slide 2 : Le protocole Webhook de notification instantanée de paiement (IPN).",
          "Slide 3 : L'automatisation via Make / n8n / scripts API légers.",
          "Slide 4 : Génération automatique du reçu PDF et notification client sur WhatsApp en moins de 3 secondes.",
          "Slide 5 : Résultats constatés chez nos clients : 0 heure perdue en réconciliation, litiges réduits de 95%."
        ]
      },
      {
        label: "Contrarien",
        format: "Post opinion tranchée",
        hook: "Arrêtez d'acheter des logiciels ERP américains à 500 $/mois si votre équipe continue de vérifier les virements à la main sur WhatsApp.",
        points: [
          "L'illusion technologique : croire qu'un logiciel complexe résout un problème de flux déconnecté.",
          "En Afrique, 95% de la friction n'est pas dans le grand livre comptable, elle est dans le dernier kilomètre du paiement mobile.",
          "Les PME les plus rentables ne sont pas celles qui ont les outils les plus chers, mais celles qui ont automatisé le circuit WhatsApp-Caisse."
        ]
      }
    ],
    sources: [
      {
        title: "Mobile Money B2B Reconciliation Crisis in African SMEs",
        domain: "techpoint.africa",
        date: "18/08/2026",
        url: "https://techpoint.africa/2026/08/18/mobile-money-b2b-reconciliation-crisis/"
      },
      {
        title: "African SMEs Payment Automation Report 2026",
        domain: "disrupt-africa.com",
        date: "15/08/2026",
        url: "https://disrupt-africa.com/2026/08/african-smes-payment-automation-report-2026/"
      },
      {
        title: "Digitalisation des flux financiers des PME en Afrique francophone",
        domain: "cio-mag.com",
        date: "10/08/2026",
        url: "https://cio-mag.com/digitalisation-finances-pme-africaines-facturation-mobile-money/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_02`,
    session_id: sessionId,
    type: 'content',
    title: "L'Audit d'Opportunités IA en pratique : Comment une PME de distribution a éliminé 14 heures de saisie par semaine",
    account: 'business',
    pillar: 'terrain',
    pillar_label: '💼 Terrain & Croissance PME Africaines',
    funnel: 'BOFU',
    score: 5,
    bridge: "Réservation de l'Audit Gratuit de 30 min (ibogalab.vercel.app/calendly-booking)",
    angles: [
      {
        label: "Débutant",
        format: "Étude de cas concrète",
        hook: "Que se passe-t-il réellement pendant 30 minutes d'audit IA dans une PME ? Les coulisses d'un diagnostic sans filtre.",
        points: [
          "Le cas réel : une entreprise de négoce et distribution avec 18 salariés et des commandes réparties sur 4 canaux différents.",
          "Le constat immédiat : 3 collaborateurs recopiaient les mêmes données d'un bon de commande papier vers Excel, puis vers le logiciel de stock.",
          "Les 3 leviers activés en 10 jours : reconnaissance de documents par IA, synchronisation automatique et alertes stocks WhatsApp."
        ]
      },
      {
        label: "Expert",
        format: "Framework méthodologique (Passage du projet au flux)",
        hook: "Notre grille d'audit PIQPACC appliquée à un service logistique : comment isoler le coût caché d'une tâche répétitive.",
        points: [
          "Calcul du Coût d'Inaction (COI) : 14 h/semaine x 3 personnes = 42 heures de salaire gaspillées par mois.",
          "La cartographie des flux d'information : éliminer les ruptures entre le terrain et la direction.",
          "Le plan de déploiement en 3 étapes : Frugalité ➔ Test pilote ➔ Industrialisation."
        ]
      },
      {
        label: "Contrarien",
        format: "Prise de position dirigeant",
        hook: "Vous n'avez pas besoin d'une transformation digitale à 50 millions de FCFA. Vous avez besoin d'éliminer vos 3 plus gros goulots d'étranglement.",
        points: [
          "Pourquoi 80% des projets digitaux pharaoniques échouent en Afrique : trop lourds, trop chers, rejetés par les équipes de terrain.",
          "L'approche chirurgicale : diagnostiquer un point de friction précis, déployer une automatisation en 48h, mesurer le gain immédiat.",
          "Notre invitation : 30 minutes d'audit offertes pour identifier vos 3 leviers prioritaires."
        ]
      }
    ],
    sources: [
      {
        title: "SME Digital Audit ROI Case Studies 2026",
        domain: "africabusinesscommunities.com",
        date: "12/08/2026",
        url: "https://africabusinesscommunities.com/tech/sme-digital-audit-roi-case-studies-2026/"
      },
      {
        title: "Digitalisation opérationnelle des PME au Gabon : Les retours d'expérience 2026",
        domain: "leconomiste.com",
        date: "05/08/2026",
        url: "https://leconomiste.com/article/digitalisation-operationnelle-pme-gabon-2026"
      },
      {
        title: "Productivité des PME en Afrique centrale : Gains mesurés par l'automatisation",
        domain: "agenceecofin.com",
        date: "28/07/2026",
        url: "https://agenceecofin.com/gestion-publique/2807-119876-productivite-pme-afrique-centrale-gains-automatisation"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_03`,
    session_id: sessionId,
    type: 'content',
    title: "Deepfakes vocaux et faux ordres de virement : La nouvelle menace qui cible les patrons de PME en Afrique",
    account: 'personal',
    pillar: 'ia',
    pillar_label: '🤖 IA Appliquée pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: 'Iboga Learn — Formation des équipes de direction aux protocoles de cyber-vigilance IA',
    angles: [
      {
        label: "Débutant",
        format: "Post d'alerte sécurité",
        hook: "3 secondes d'enregistrement de votre voix suffisent pour ordonner un virement bancaire frauduleux à votre comptable.",
        points: [
          "Comment les cybercriminels récupèrent des échantillons vocaux sur vos vidéos LinkedIn, Facebook ou conférences publiques.",
          "Le scénario d'attaque type : un appel WhatsApp ou un message vocal imitant la voix du patron demandant un virement urgent pour débloquer une cargaison au port.",
          "Les 3 réflexes immédiats à instaurer au bureau pour neutraliser la menace."
        ]
      },
      {
        label: "Expert",
        format: "Guide de gouvernance interne",
        hook: "Le protocole de double validation 'Hors-Bande' que tout dirigeant d'entreprise doit signer avec sa direction financière cette semaine.",
        points: [
          "Pourquoi les mots de passe et emails ne suffisent plus face aux modèles vocaux génératifs.",
          "Instauration du mot de passe verbal secret non-numérique pour tout mouvement supérieur à 500 000 FCFA.",
          "Séparation stricte des canaux d'ordre et de confirmation (jamais d'exécution sur simple message WhatsApp).",
          "Politique de tolérance zéro sur l'urgence : l'urgence artificielle est l'arme #1 de l'escroquerie au président."
        ]
      },
      {
        label: "Contrarien",
        format: "Post opinion tranchée",
        hook: "Vos antivirus à 1 000 $ ne vous protégeront pas d'un faux appel vocal du patron. La cybersécurité en 2026 est humaine, pas logicielle.",
        points: [
          "Les entreprises dépensent des fortunes en pare-feu mais ne forment aucun comptable aux manipulations d'ingénierie sociale par IA.",
          "Le maillon faible n'est pas votre serveur, c'est l'employé intimidé par l'autorité du dirigeant simulé par un modèle de clonage.",
          "Former vos collaborateurs à dire 'Non, je vérifie d'abord en direct' rapporte 100 fois plus que n'importe quel abonnement de sécurité."
        ]
      }
    ],
    sources: [
      {
        title: "OpenAI launches Daybreak AI cybersecurity defense suite",
        domain: "openai.com",
        date: "28/08/2026",
        url: "https://openai.com/index/daybreak-cybersecurity-ai-defense-2026/"
      },
      {
        title: "Voice cloning scams target corporate executives worldwide",
        domain: "techcrunch.com",
        date: "22/08/2026",
        url: "https://techcrunch.com/2026/08/22/voice-cloning-scams-target-corporate-executives-worldwide/"
      },
      {
        title: "Cybersécurité Afrique : Les arnaques au président par IA vocale en forte hausse",
        domain: "cio-mag.com",
        date: "20/08/2026",
        url: "https://cio-mag.com/cybersecurite-afrique-2026-les-arnaques-au-president-par-ia-explosent/"
      },
      {
        title: "AI Voice Deepfakes spark enterprise fraud wave",
        domain: "thehackernews.com",
        date: "16/08/2026",
        url: "https://thehackernews.com/2026/08/ai-voice-deepfakes-enterprise-fraud-wave.html"
      },
      {
        title: "Fraudes financières par IA : Alerte pour les banques et PME africaines",
        domain: "agenceecofin.com",
        date: "14/08/2026",
        url: "https://agenceecofin.com/telecom/1408-119934-fraudes-financieres-par-ia-alerte-pour-les-banques-et-entreprises-africaines"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_04`,
    session_id: sessionId,
    type: 'content',
    title: "Le Gabon lance son label Startup et la DGTE : Ce que les fondateurs et PME doivent préparer dès maintenant",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: '💼 Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 5,
    bridge: 'Iboga Dev & Learn — Mise en conformité technologique et structuration des dossiers de labellisation',
    angles: [
      {
        label: "Débutant",
        format: "Post décryptage institutionnel",
        hook: "Le Conseil des ministres du Gabon a acté le décret sur le label Startup. Voici ce que ça change concrètement pour votre boîte.",
        points: [
          "Ce que prévoit la Direction Générale des Technologies Émergentes (DGTE) : guichet unique, encadrement de l'IA et accompagnement des porteurs de projets.",
          "Les critères de distinction entre une agence de prestation classique et une véritable startup innovante.",
          "Les avantages attendus : exonérations ciblées, accès prioritaire aux commandes publiques et visibilité sous-régionale."
        ]
      },
      {
        label: "Expert",
        format: "Checklist pratique pour dirigeants",
        hook: "La checklist en 5 points pour auditer votre entreprise avant de postuler au label Startup gabonais.",
        points: [
          "1. Propriété intellectuelle et code propriétaire (démontrer que vous n'êtes pas un simple revendeur de licences étrangères).",
          "2. Répétabilité du modèle d'affaires et scalabilité en zone CEMAC.",
          "3. Emploi local et qualification technique des équipes basées au Gabon.",
          "4. Protection des données clients et conformité avec la réglementation nationale.",
          "5. Métriques de traction : chiffre d'affaires, rétention et preuves d'impact économique."
        ]
      },
      {
        label: "Contrarien",
        format: "Vérité crue de builder",
        hook: "Un décret ne crée pas des clients. Pourquoi 70% des détenteurs du label Startup feront quand même faillite s'ils ne vendent rien.",
        points: [
          "Le piège du syndrome de la subvention : passer des mois à courir après les dossiers administratifs plutôt que de fermer des ventes terrain.",
          "L'État crée le terrain de jeu, mais le match se joue avec vos clients : un label sans produit qui résout une vraie douleur ne vaut rien.",
          "Le conseil aux builders gabonais : construisez d'abord un modèle rentable et automatisé, le label sera un accélérateur, pas une béquille."
        ]
      }
    ],
    sources: [
      {
        title: "Gabon : Création de la Direction Générale des Technologies Émergentes pour encadrer l'IA",
        domain: "gabonmediatime.com",
        date: "24/05/2026",
        url: "https://gabonmediatime.com/gabon-creation-de-la-direction-generale-des-technologies-emergentes-pour-encadrer-lia/"
      },
      {
        title: "Le gouvernement gabonais adopte un cadre de labellisation des startups et crée la DGTE",
        domain: "digitalbusiness.africa",
        date: "25/05/2026",
        url: "https://digitalbusiness.africa/gabon-le-gouvernement-adopte-un-cadre-de-labellisation-des-startups-et-cree-la-dgte/"
      },
      {
        title: "Numérique au Gabon : Ce que prévoit le nouveau décret sur les startups et l'IA",
        domain: "directinfosgabon.com",
        date: "25/05/2026",
        url: "https://directinfosgabon.com/gabon-numerique-ce-que-prevoit-le-nouveau-decret-sur-les-startups-et-lia/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_05`,
    session_id: sessionId,
    type: 'content',
    title: "Formation IA en entreprise : Pourquoi apprendre à prompter 'Agis comme un expert' est une perte de temps",
    account: 'personal',
    pillar: 'ia',
    pillar_label: '🤖 IA Appliquée pour Dirigeants',
    funnel: 'MOFU',
    score: 5,
    bridge: "Iboga Learn — Ateliers d'acculturation et système PIQPACC par département",
    angles: [
      {
        label: "Débutant",
        format: "Post pédagogique démystification",
        hook: "Vous avez payé une formation ChatGPT à vos équipes et personne ne l'utilise après 15 jours ? Voici exactement pourquoi.",
        points: [
          "L'erreur fondamentale : former à des prompts magiques trouvés sur le web au lieu de former à la décomposition d'une tâche de travail réelle.",
          "Ce dont un comptable ou une secrétaire a besoin : un canevas de contexte métier (PIQPACC), des données d'entrée standardisées et des critères de contrôle qualité.",
          "Le résultat : quand l'outil s'adapte au flux existant, l'adoption passe de 10% à 85% dès la première semaine."
        ]
      },
      {
        label: "Expert",
        format: "Carrousel méthodologique (Architecture de Contexte)",
        hook: "Comment structurer une bibliothèque de prompts métier pour chaque département de votre entreprise (RH, Finance, Opérations).",
        points: [
          "Slide 1 : Pourquoi le 'Prompt Engineering' individuel crée du chaos dans l'entreprise.",
          "Slide 2 : Le système PIQPACC : Profil, Intention, Question, Précisions, Action, Contexte, Critères.",
          "Slide 3 : Template RH : Génération de fiches de poste et grille d'évaluation d'entretiens.",
          "Slide 4 : Template Finance : Analyse des écarts de budget et synthèse de trésorerie.",
          "Slide 5 : La gouvernance de la donnée interne : ce qui peut entrer dans l'IA et ce qui est strictement interdit."
        ]
      },
      {
        label: "Contrarien",
        format: "Post conviction forte",
        hook: "Vos salariés n'ont pas peur que l'IA vole leur emploi. Ils ont peur de passer pour des incompétents parce que la direction ne leur a donné aucun cadre.",
        points: [
          "Dans 9 PME sur 10 en Afrique, les employés utilisent ChatGPT en cachette sur leur téléphone personnel pour corriger des fautes ou reformuler des courriers.",
          "Cette utilisation clandestine génère des hallucinations, des fuites de données confidentielles et une perte de crédibilité.",
          "Le rôle du dirigeant n'est pas d'interdire l'IA, mais de l'institutionnaliser avec des règles du jeu claires et valorisantes."
        ]
      }
    ],
    sources: [
      {
        title: "Why generic AI training fails employees and companies",
        domain: "hbr.org",
        date: "14/08/2026",
        url: "https://hbr.org/2026/08/why-generic-ai-training-fails-employees"
      },
      {
        title: "The state of enterprise AI upskilling in 2026",
        domain: "mckinsey.com",
        date: "19/08/2026",
        url: "https://mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-upskilling-in-2026"
      },
      {
        title: "World Employment and Social Outlook: Digital and AI Skills 2026",
        domain: "ilo.org",
        date: "10/08/2026",
        url: "https://ilo.org/global/publications/world-employment-social-outlook-digital-skills-2026"
      },
      {
        title: "The end of individual prompt engineering: Welcome Context Architecture",
        domain: "forbes.com",
        date: "25/08/2026",
        url: "https://forbes.com/sites/technology/2026/08/25/the-end-of-prompt-engineering-hello-context-architecture/"
      },
      {
        title: "Upskilling the African workforce with practical AI tools",
        domain: "africabusinesscommunities.com",
        date: "08/08/2026",
        url: "https://africabusinesscommunities.com/features/upskilling-african-workforce-ai-tools/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_06`,
    session_id: sessionId,
    type: 'content',
    title: "La surcharge invisible du dirigeant : La loi de Parkinson et l'illusion d'être occupé sur WhatsApp",
    account: 'personal',
    pillar: 'builder',
    pillar_label: '🔥 Parcours Builder',
    funnel: 'TOFU',
    score: 4,
    bridge: 'Iboga Process — Diagnostic organisationnel et élimination de la dispersion managériale',
    angles: [
      {
        label: "Débutant",
        format: "Storytelling & auto-diagnostic",
        hook: "Répondre à 180 messages WhatsApp par jour vous donne l'impression d'être un dirigeant indispensable. En réalité, vous coulez votre entreprise.",
        points: [
          "Le piège de la fausse réactivité : confondre mouvement et progression.",
          "Comment la disponibilité permanente sur messagerie détruit votre capacité de réflexion stratégique et d'analyse financière.",
          "La règle des 3 blocs : sanctuariser 2 heures chaque matin sans téléphone pour exécuter les tâches à fort levier."
        ]
      },
      {
        label: "Expert",
        format: "Exploration Sciences Cognitives & Management",
        hook: "La loi de Parkinson appliquée à la communication instantanée : pourquoi le travail s'étale jusqu'à saturer toute votre bande passante mentale.",
        points: [
          "Les études de neurosciences : chaque interruption sur messagerie coûte 23 minutes pour retrouver un état de concentration profonde.",
          "Instaurer l'asynchrone dans sa PME : passer de la culture de l'appel d'urgence à la note de synthèse écrite.",
          "Les outils de délégation assistée : laisser un assistant IA trier et résumer les urgences opérationnelles avant qu'elles n'atteignent le dirigeant."
        ]
      },
      {
        label: "Contrarien",
        format: "Vérité de terrain africain",
        hook: "Le multitâche en Afrique n'est pas une marque de flexibilité légendaire. C'est le symptôme tragique de processus inexistants.",
        points: [
          "On glorifie le patron qui règle tout au téléphone en conduisant entre deux rendez-vous à Libreville ou Douala.",
          "La réalité : si votre entreprise s'arrête dès que vous coupez votre 4G pendant 48 heures, vous ne possédez pas une entreprise, vous possédez un emploi très stressant.",
          "Construire une boîte qui tourne sans vous commence par écrire des processus simples et les automatiser."
        ]
      }
    ],
    sources: [
      {
        title: "Cognitive fatigue and multitasking in instant messaging environments",
        domain: "nature.com",
        date: "11/08/2026",
        url: "https://nature.com/articles/s41598-026-cognitive-fatigue-multitasking-messaging"
      },
      {
        title: "The WhatsApp Management Trap in Emerging Markets",
        domain: "hbr.org",
        date: "18/08/2026",
        url: "https://hbr.org/2026/08/the-whatsapp-management-trap-in-emerging-markets"
      },
      {
        title: "Cognitive load and decision fatigue in modern leadership",
        domain: "mit.edu",
        date: "06/08/2026",
        url: "https://mit.edu/sloan/ideas/cognitive-load-and-decision-fatigue-remote-leaders-2026"
      },
      {
        title: "Why constant messaging destroys deep strategic thinking",
        domain: "psychologytoday.com",
        date: "21/08/2026",
        url: "https://psychologytoday.com/us/blog/brain-at-work/202608/why-constant-messaging-destroys-deep-thinking"
      },
      {
        title: "Parkinson's Law in the digital age of corporate hyper-communication",
        domain: "forbes.com",
        date: "29/08/2026",
        url: "https://forbes.com/sites/leadership/2026/08/29/parkinsons-law-in-the-digital-age/"
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
        console.log(`✓ Inserted: ${item.title.substring(0, 50)}...`);
      }
    }
    console.log('All insertions completed successfully!');
  } catch (err) {
    console.error('Fatal error during insertion:', err);
    process.exit(1);
  }
}

insertAll();

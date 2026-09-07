import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://igicdrrdlambscodmaxi.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnaWNkcnJkbGFtYnNjb2RtYXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NjMwMjUsImV4cCI6MjEwMzQzOTAyNX0.puTkc1j7BI0-dKkAL1rRtN7_XwywOS77enlEgcZBHf4';
const supabase = createClient(supabaseUrl, supabaseKey);

const sessionId = 'sess_20260907_171500';
const sessionDate = '2026-09-07';
const weekLabel = 'Semaine du 07 Septembre 2026';
const generatedAt = '2026-09-07T16:15:00.000Z';

const sessionData = {
  id: sessionId,
  date: sessionDate,
  generated_at: generatedAt,
  week_label: weekLabel,
  newsjacking: {
    title: "OpenAI alloue 1 milliard de dollars a la cybersecurite et Google DeepMind deploie WeatherNext 3 : La course aux infrastructures critiques et l'imperatif de cyber-resilience pour les PME"
  }
};

const newsItems = [
  {
    id: `idea_${sessionId}_news01`,
    session_id: sessionId,
    type: 'news',
    title: "Startups africaines : 2,10 milliards de dollars mobilises en 8 mois en 2026 avec un fort retour de la dette et des fintechs",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Process — Structuration des donnees financieres et automatisation du reporting pour rendre les PME africaines eligibles aux financements non dilutifs",
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualite court",
        hook: "Malgre le durcissement du capital-risque mondial, l'ecosysteme tech africain demontre une solidite operationnelle remarquable. En 8 mois, les startups du continent ont franchi le cap des 2,10 milliards de dollars mobilises.",
        points: [
          "Selon le rapport publie le 7 septembre 2026 par TechCabal, les startups africaines ont leve 2,10 milliards de dollars entre janvier et aout 2026.",
          "La structure des deals confirme la maturite du marche : les instruments de dette representent desormais une part substantielle des volumes, limitant la dilution des fondateurs.",
          "Les fintechs et la digitalisation des chaines logistiques captent plus de 60% des flux, portees par l'acceleration des paiements transfrontaliers.",
          "Pour les dirigeants de PME, cela prouve que les investisseurs ne financent plus des promesses de croissance a perte mais des modeles ancres dans l'economie reelle."
        ]
      }
    ],
    sources: [
      {
        title: "African startups hit $2.10 billion in 8 months",
        domain: "techcabal.com",
        date: "07/09/2026",
        url: "https://techcabal.com/2026/09/07/african-startups-hit-2-10-billion-in-8-months/"
      },
      {
        title: "IA : Les startups africaines ont leve 1,2 milliard en 6 ans",
        domain: "cio-mag.com",
        date: "2026",
        url: "https://cio-mag.com/ia-les-startups-africaines-ont-leve-12-milliard-en-6-ans/"
      },
      {
        title: "Fintech et interoperabilite 2.0 : l'Afrique accelere la revolution des paiements",
        domain: "cio-mag.com",
        date: "2026",
        url: "https://cio-mag.com/fintech-et-interoperabilite-2-0-lafrique-accelere-la-revolution-des-paiements-transfrontaliers/"
      }
    ],
    drafted_post: "OBSERVATOIRE TECH AFRIQUE : 2,10 milliards de dollars leves en 8 mois par les startups du continent.\n\nCe qui s'est passe :\nEntre janvier et fin aout 2026, l'ecosysteme tech africain a securise 2,10 milliards de dollars selon les donnees consolidees publiees ce 7 septembre par TechCabal. La reprise se confirme apres deux annees d'ajustement mondial, mais avec une dynamique nouvelle : la part dominante des instruments de dette et le ciblage exclusif de la rentabilite d'exploitation.\n\nPourquoi c'est important pour nos marches :\nFinie l'epoque des valorisations artificielles. Les investisseurs n'injectent plus de capitaux dans des applications gadget sans chiffre d'affaires. Ce sont les infrastructures de paiement, la logistique de distribution et la digitalisation des operations B2B qui concentrent l'essentiel des montants.\n\nMon avis de praticien :\nCe chiffre envoie un message limpide aux dirigeants de PME et aux fondateurs africains : la rigueur de gestion paie. Les entreprises qui attirent des fonds aujourd'hui sont celles qui ont des comptes clairs, des processus formalises et des flux financiers tracables. L'automatisation de vos operations et la tenue rigoureuse de vos donnees sont devenues la premiere condition de votre solvabilite.\n\nVotre PME dispose-t-elle d'un reporting financier suffisamment structure pour rassurer un bailleur de fonds demain matin ?\n\n#TechAfrique #Financement #PME #Fintech #IbogaLab"
  },
  {
    id: `idea_${sessionId}_news02`,
    session_id: sessionId,
    type: 'news',
    title: "Samb'a Finances Holding depose une demande d'agrement au Cameroun pour sa filiale de micro-assurance agricole et PME",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Process — Digitalisation des flux de souscription et automatisation de l'indemnisation pour les reseaux de distribution en zone CEMAC",
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualite court",
        hook: "L'inclusion financiere en zone CEMAC franchit une etape operationnelle. Le groupe Samb'a Finances Holding, deja pionnier au Gabon, etend son modele de micro-assurance vers le Cameroun.",
        points: [
          "Financial Afrik confirme ce 7 septembre 2026 le depot formel de la demande d'agrement de Samb'a Finances Holding aupres des autorites de regulation camerounaises.",
          "Le produit vise specifiquement la protection des exploitants agricoles et des petits commercants contre les aleas climatiques et les sinistres d'exploitation.",
          "Apres le deploiement reussi d'offres similaires au Gabon, cette initiative illustre la montee en puissance d'operateurs financiers panafricains adaptes aux realites des travailleurs informels.",
          "Pour les PME de la sous-region, l'emergence d'assurances fractionnees a bas cout represente un bouclier indispensable pour securiser leur tresorerie."
        ]
      }
    ],
    sources: [
      {
        title: "Au Cameroun, Samba Finances Holding depose une demande d'agrement pour sa filiale de micro-assurance",
        domain: "financialafrik.com",
        date: "07/09/2026",
        url: "https://www.financialafrik.com/2026/09/07/au-cameroun-samba-finances-holding-depose-une-demande-dagrement-pour-sa-filiale-de-micro-assurance/"
      },
      {
        title: "CEMAC : La BEAC anticipe une hausse de ses reserves de change",
        domain: "financialafrik.com",
        date: "2026",
        url: "https://www.financialafrik.com/en/2026/07/11/cemac-by-the-end-of-2026-beac-expects-a-25-increase-in-its-foreign-exchange-reserves-thanks-to-eurobonds/"
      },
      {
        title: "L'intelligence artificielle transforme le paysage financier africain",
        domain: "cio-mag.com",
        date: "2026",
        url: "https://cio-mag.com/rocky-abdoul-milingita-lintelligence-artificielle-transforme-le-paysage-financier-africain-en-particulier-dans-les-zones-a-faible-acces-bancaire/"
      }
    ],
    drafted_post: "EXPANSION REGIONALE CEMAC : Samb'a Finances Holding poursuit son deploiement et vise le marche camerounais de la micro-assurance.\n\nCe qui s'est passe :\nCe lundi 7 septembre 2026, Samb'a Finances Holding a officialise le depot de sa demande d'agrement pour operer dans la micro-assurance au Cameroun. L'objectif est de repliquer l'approche deployee au Gabon en protegeant les acteurs agricoles, transporteurs et commercants de proximite avec des polices simplifiees et payables sur mobile.\n\nPourquoi c'est un signal fort pour l'Afrique Centrale :\nHistoriquement, moins de 3% des acteurs de l'economie reelle en zone CEMAC beneficient d'une couverture d'assurance. Un incendie dans un atelier ou une intemperie sur une recolte suffit a detruire des annees d'efforts. En abaissant le ticket d'entree et en digitalisant la souscription, la micro-assurance transforme un risque mortel en depense d'exploitation geree.\n\nMon avis de praticien :\nLa force de ce type d'initiative repose a 100% sur l'execution technologique : si l'indemnisation prend deux mois a cause de formulaires papier, l'adhesion s'effondre. C'est ici que l'automatisation des flux et le mobile money changent la donne en permettant un traitement des dossiers en quelques heures. C'est la finance pragmatique dont notre economie a besoin.\n\nQuelle est la part de vos actifs professionnels reellement protegee contre un sinistre imprevu ?\n\n#MicroAssurance #CEMAC #InclusionFinanciere #PME #Gabon #Cameroun"
  },
  {
    id: `idea_${sessionId}_news03`,
    session_id: sessionId,
    type: 'news',
    title: "OpenAI lance Daybreak for Frontline Defenders : 1 milliard de dollars pour blinder la cybersecurite des services essentiels",
    account: 'personal',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Learn — Ateliers de sensibilisation aux cyber-menaces amplifiees par l'IA et audit des droits d'acces aux outils internes",
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualite court",
        hook: "L'intelligence artificielle n'est plus seulement un outil de productivite, c'est le nouveau champ de bataille de la securite informatique mondiale. OpenAI vient de degager 1 milliard de dollars pour defendre les infrastructures critiques.",
        points: [
          "Annoncee le 3 septembre 2026, l'initiative Daybreak for Frontline Defenders met a disposition des modeles d'analyse cyber de pointe pour proteger les hopitaux, reseaux d'eau et services financiers.",
          "OpenAI repond ainsi a la multiplication des attaques autonomes sophistiquees capables de detecter les vulnerabilites logicielles a grande vitesse.",
          "Cette mobilisation sans precedent illustre l'urgence de passer d'une posture defensive passive a une veille active pilotee par algorithmes.",
          "Pour les entreprises privees, l'alerte est maximale : si les geants de la tech investissent des milliards, aucune PME ne peut continuer a gerer ses acces avec de simples mots de passe partages."
        ]
      }
    ],
    sources: [
      {
        title: "OpenAI launches Daybreak for Frontline Defenders",
        domain: "openai.com",
        date: "03/09/2026",
        url: "https://openai.com/index/daybreak-for-frontline-defenders/"
      },
      {
        title: "OpenAI commits $1 billion to expand frontier AI cybersecurity",
        domain: "industrialcyber.co",
        date: "03/09/2026",
        url: "https://industrialcyber.co/critical-infrastructure/openai-commits-1-billion-to-expand-frontier-ai-cybersecurity-for-critical-infrastructure-essential-services/"
      },
      {
        title: "Google DeepMind introduces WeatherNext 3",
        domain: "blog.google",
        date: "03/09/2026",
        url: "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-weathernext-3/"
      }
    ],
    drafted_post: "SECURITE NUMERIQUE MONDIALE : OpenAI investit 1 milliard de dollars dans la defense contre les cyberattaques par IA.\n\nCe qui s'est passe :\nOpenAI a officialise son programme Daybreak for Frontline Defenders. Le principe : allouer 1 milliard de dollars de ressources techniques et d'acces a ses modeles cyber pour aider les operateurs critiques a contrer la vague d'attaques automatisees.\n\nPourquoi chaque dirigeant d'entreprise doit se sentir concerne :\nLa cyberattaque artisanale est terminee. Aujourd'hui, les pirates utilisent l'IA pour generer des attaques de phishing personnalisees a la virgule pres et sonder en temps reel les failles de vos serveurs et de vos boites mails. Ce qui ciblait autrefois les multinationales frappe desormais de plein fouet les PME locales.\n\nMon avis de praticien :\n95% des intrusions dans les entreprises africaines ne viennent pas d'un piratage de film hollywoodien, mais d'un collaborateur qui a clique sur un faux lien de facture ou partage ses identifiants sur une messagerie. La reponse n'est pas uniquement technologique, elle est comportementale : formez vos equipes, cadrez les usages et mettez en place une verification systematique des ordres de virement.\n\nVotre equipe est-elle formee pour identifier un email frauduleux genere par IA des demain ?\n\n#Cybersecurite #IntelligenceArtificielle #Gouvernance #Entreprise #ProtectionDesDonnees"
  }
];

const contentIdeas = [
  {
    id: `idea_${sessionId}_01`,
    session_id: sessionId,
    type: 'content',
    title: "OpenAI investit 1 milliard dans la cybersecurite : Pourquoi la premiere faille de securite de votre PME n'est pas un hacker mais le compte WhatsApp d'un employe",
    account: 'personal',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Learn — Ateliers pratiques de securisation des flux operationnels et sensibilisation des collaborateurs a la cyber-hygiene",
    angles: [
      {
        label: "Angle Vulgarisation",
        format: "Post Choc / Prise de conscience",
        hook: "OpenAI vient de mettre 1 milliard de dollars sur la table pour la cybersecurite. Mais dans votre entreprise, le plus grand danger s'appelle encore motdepasse2026.",
        points: [
          "Pendant que les labos d'IA developpent des boucliers a 1 milliard de dollars, la plupart des PME partagent encore des fichiers Excel comptables sur des groupes WhatsApp non securises.",
          "Une etude recente montre que 82% des incidents de securite dans les PME proviennent d'une simple erreur humaine ou d'un canal de communication non officiel.",
          "L'arrivee d'outils d'IA accessibles permet aujourd'hui a n'importe quel escroc d'imiter parfaitement le style d'ecriture d'un fournisseur ou d'un dirigeant.",
          "La premiere barriere de securite ne coute rien : c'est l'etablissement de regles d'echange claires et le bannissement des validations financieres par message informel."
        ]
      },
      {
        label: "Angle Expert",
        format: "Framework de Securisation Interne",
        hook: "Voici le protocole en 4 verrous que chaque PME africaine doit instaurer pour neutraliser les arnaques au faux ordre de virement amplifiees par IA.",
        points: [
          "Verrou 1 : Double canal obligatoire pour toute modification de RIB ou ordre de virement superieur a un montant seuil (appel telephonique sur ligne fixe de reference).",
          "Verrou 2 : Separation stricte entre boites mails professionnelles certifiees et messageries instantanees personnelles.",
          "Verrou 3 : Gestionnaire de mots de passe centralise avec double facteur d'authentification (2FA) sur tous les logiciels metier.",
          "Verrou 4 : Audit trimestriel des acces pour revoquer immediatement les droits des stagiaires et anciens collaborateurs."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Coup de Gueule Constructif",
        hook: "Arretez d'acheter des logiciels antivirus sophistiques si vous continuez a valider des decaissements de plusieurs millions par un simple pouce leve sur WhatsApp.",
        points: [
          "La technologie ne compensera jamais la paresse organisationnelle et l'absence de formalisme.",
          "Les patrons aiment accuser les pirates anonymes, mais la realite est que la porte etait grande ouverte depuis six mois.",
          "La discipline de vos processus internes est votre seule vraie muraille contre les arnaques modernes."
        ]
      }
    ],
    sources: [
      {
        title: "OpenAI launches Daybreak for Frontline Defenders",
        domain: "openai.com",
        date: "03/09/2026",
        url: "https://openai.com/index/daybreak-for-frontline-defenders/"
      },
      {
        title: "OpenAI commits $1 billion to expand frontier AI cybersecurity",
        domain: "industrialcyber.co",
        date: "03/09/2026",
        url: "https://industrialcyber.co/critical-infrastructure/openai-commits-1-billion-to-expand-frontier-ai-cybersecurity-for-critical-infrastructure-essential-services/"
      },
      {
        title: "Enterprise Workflow Automation & Governed AI Agents",
        domain: "zapier.com",
        date: "2026",
        url: "https://zapier.com/blog/enterprise-workflow-automation/"
      },
      {
        title: "Claude Opus 5 for enterprise workflows and coding agents",
        domain: "anthropic.com",
        date: "2026",
        url: "https://www.anthropic.com/news/claude-opus-5"
      },
      {
        title: "Google DeepMind introduces WeatherNext 3",
        domain: "blog.google",
        date: "03/09/2026",
        url: "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-weathernext-3/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_02`,
    session_id: sessionId,
    type: 'content',
    title: "Pourquoi Uber vacille au Nigeria et comment le marche informel reprend toujours ses droits face aux plateformes occidentales",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'MOFU',
    score: 5,
    bridge: "Iboga Dev — Conception de produits numeriques legers adaptes aux contraintes locales de connectivite et de pouvoir d'achat",
    angles: [
      {
        label: "Angle Vulgarisation",
        format: "Analyse de Cas / Storytelling",
        hook: "L'echec ou le recul des geants technologiques en Afrique n'est jamais un probleme d'algorithme. C'est toujours une incomprehension totale du pouvoir d'achat reel et de l'economie de terrain.",
        points: [
          "L'enquete de TechCabal de ce week-end decortique le recul historique d'Uber sur le marche nigerian face a l'inflation et au carburant.",
          "Vouloir appliquer une commission rigide de 25% dans un marche ou les chauffeurs paient leur essence au prix fort et subissent des devises volatiles est voue a l'echec.",
          "Les chauffeurs et les clients ont rapidement contourne la plateforme en negociant en direct par cash ou virement instantane.",
          "La lecon pour tout entrepreneur africain : si votre technologie ajoute un cout sans absorber une friction locale, le marche informel vous balaye en six mois."
        ]
      },
      {
        label: "Angle Expert",
        format: "Strategie Produit & Pricing",
        hook: "Voici les 3 piliers de conception produit indispensables pour reussir sur les marches a forte contrainte en Afrique francophone et CEMAC.",
        points: [
          "Pilier 1 : Un modele de tarification elastique base sur les couts reels du producteur local (energie, logistique) plutot que sur des marges californiennes.",
          "Pilier 2 : L'integration native des moyens de paiement que les gens possedent deja (Mobile Money, agents de proximite) sans obliger a la carte bancaire.",
          "Pilier 3 : La tolerance a la connectivite degradee : l'outil doit fonctionner en mode deconnecte ou par messagerie simple."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Prise de Position Tranchee",
        hook: "Arretez de copier les licornes de la Silicon Valley : le copier-coller sans adaptation culturelle est la cause numero un de mortalite des startups africaines.",
        points: [
          "Construire une entreprise au Gabon ou en Afrique Centrale exige une frugalite extreme et un alignement immediat avec les marges des utilisateurs.",
          "Si votre solution demande a un artisan ou un transporteur de payer avant de gagner, vous construisez pour un fantome.",
          "La vraie innovation africaine n'est pas dans le tape-a-l'oeil, elle est dans l'efficience brute du dernier kilometre."
        ]
      }
    ],
    sources: [
      {
        title: "Next Wave: Why Uber broke in Nigeria",
        domain: "techcabal.com",
        date: "06/09/2026",
        url: "https://techcabal.com/2026/09/06/next-wave-why-uber-broke-in-nigeria/"
      },
      {
        title: "African startups hit $2.10 billion in 8 months",
        domain: "techcabal.com",
        date: "07/09/2026",
        url: "https://techcabal.com/2026/09/07/african-startups-hit-2-10-billion-in-8-months/"
      },
      {
        title: "Ne nous demandez pas d'etre des Amazon",
        domain: "cio-mag.com",
        date: "18/08/2026",
        url: "https://cio-mag.com/ne-nous-demandez-pas-detre-des-amazon/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_03`,
    session_id: sessionId,
    type: 'content',
    title: "Governed Automation : Pourquoi connecter des agents IA a vos logiciels sans verrouiller vos droits d'acces est une bombe a retardement",
    account: 'agency',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'BOFU',
    score: 5,
    bridge: "Audit d'Opportunites IA Gratuit — Diagnostic en 30 minutes de vos flux d'information pour securiser et automatiser sans risque de corruption de donnees",
    angles: [
      {
        label: "Angle Vulgarisation",
        format: "Cas d'Usage PME",
        hook: "Donneriez-vous les cles de votre coffre-fort a un stagiaire sans verifier ses antecedents ? C'est exactement ce que vous faites quand vous branchez un agent IA sur votre base client sans regles strictes.",
        points: [
          "L'automatisation intelligente promet de repondre aux clients, de rediger des devis et de classer des factures a la vitesse de l'eclair.",
          "Mais que se passe-t-il si l'agent applique une remise de 80% par erreur ou supprime une fiche fournisseur sur un malentendu de formulation ?",
          "Le concept d'automatisation gouvernee (Governed Automation) separe strictement les droits d'ecriture des droits de lecture.",
          "Chez Iboga Lab, nous imposons un principe intangible : l'IA propose et prepare, mais l'action critique requiert une validation humaine previsible."
        ]
      },
      {
        label: "Angle Expert",
        format: "Architecture des Systemes",
        hook: "L'anatomie d'un pipeline d'automatisation d'entreprise fiable : comment integrer Make, Zapier et des LLM sans jamais risquer de corrompre vos donnees metier.",
        points: [
          "Niveau 1 : Couche de lecture et d'analyse (lecture seule sur l'ERP ou le CRM).",
          "Niveau 2 : Normalisation et validation de schemas avant execution pour rejeter toute reponse aberrante.",
          "Niveau 3 : File d'attente d'approbation (Human-in-the-Loop) pour tout changement d'etat financier ou contractuel.",
          "Niveau 4 : Journal d'audit immutable enregistrant l'identifiant exact de l'agent et le prompt declencheur."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Avis d'Agence Specialisee",
        hook: "Les agences qui vous vendent des agents 100% autonomes sans garde-fous vous vendent en realite votre futur proces commercial.",
        points: [
          "L'autonomie totale en PME est une illusion marketing d'editeurs de logiciels.",
          "Une automatisation reussie est a 80% deterministe et a 20% probabiliste.",
          "Reservez votre audit gratuit chez Iboga Lab pour cartographier vos processus avant de commettre l'irreparable."
        ]
      }
    ],
    sources: [
      {
        title: "Enterprise Workflow Automation & Governed AI Agents",
        domain: "zapier.com",
        date: "2026",
        url: "https://zapier.com/blog/enterprise-workflow-automation/"
      },
      {
        title: "Claude Opus 5 for enterprise workflows and coding agents",
        domain: "anthropic.com",
        date: "2026",
        url: "https://www.anthropic.com/news/claude-opus-5"
      },
      {
        title: "OpenAI commits $1 billion to expand frontier AI cybersecurity",
        domain: "industrialcyber.co",
        date: "03/09/2026",
        url: "https://industrialcyber.co/critical-infrastructure/openai-commits-1-billion-to-expand-frontier-ai-cybersecurity-for-critical-infrastructure-essential-services/"
      },
      {
        title: "IA : ABA Technology et Atos ciblent Fusion AI",
        domain: "digitalbusiness.africa",
        date: "2026",
        url: "https://www.digitalbusiness.africa/ia-aba-technology-et-atos-ciblent-un-marche-de-1-500-milliards-de-dollars-avec-fusion-ai/"
      },
      {
        title: "Google DeepMind introduces WeatherNext 3",
        domain: "blog.google",
        date: "03/09/2026",
        url: "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-weathernext-3/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_04`,
    session_id: sessionId,
    type: 'content',
    title: "Le piege des couts irrecuperables en entreprise : Pourquoi tant de dirigeants continuent de payer pour des logiciels que personne n'utilise",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'MOFU',
    score: 4,
    bridge: "Iboga Process — Rationalisation du parc logiciel et mise en place d'architectures frugales qui reduisent immediatement les abonnements SaaS inutiles",
    angles: [
      {
        label: "Angle Vulgarisation",
        format: "Exploration Psychologique & Business",
        hook: "Vous avez depense 10 millions de FCFA pour un progiciel il y a deux ans. Vos equipes l'evitent et utilisent Excel en secret. Mais vous refusez de l'abandonner parce que vous y avez trop investi. Bienvenue dans le piege des couts irrecuperables.",
        points: [
          "En economie comportementale, le Sunk Cost Fallacy decrit notre incapacite a couper une perte passee par peur d'avouer notre echec.",
          "Dans les PME que nous auditons a Port-Gentil et Libreville, nous trouvons en moyenne 3 a 5 abonnements a des outils surdimensionnes qui ne servent a rien.",
          "Continuer a payer la maintenance d'un outil mort ne vous remboursera pas votre investissement initial : cela ne fait qu'aggraver votre saignee financiere.",
          "Le test est simple : Si vous deviez tout recreer aujourd'hui a partir de zero, racheteriez-vous ce logiciel ?"
        ]
      },
      {
        label: "Angle Expert",
        format: "Methode d'Audit d'Usage",
        hook: "Comment conduire un audit d'utilite reelle sur votre parc informatique en 3 etapes pour recuperer jusqu'a 30% de budget SaaS.",
        points: [
          "Etape 1 : Relever les dates de derniere connexion reelle de chaque utilisateur plutot que de se fier aux licences declarees.",
          "Etape 2 : Identifier le Shadow IT positif : quels sont les classeurs ou outils informels que les collaborateurs ont crees pour compenser la lourdeur du logiciel officiel ?",
          "Etape 3 : Remplacer l'usine a gaz par un flux automatise no-code ultra-cible, dix fois moins cher et adopte en 48 heures."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Plaidoyer Frugal",
        hook: "Avoir honte d'abandonner un projet rate vous coute plus cher que le projet lui-meme. Les meilleurs dirigeants savent tuer leurs mauvaises decisions rapidement.",
        points: [
          "Reconnaitre qu'un logiciel ne correspond pas a votre maturite n'est pas un echec de gestion, c'est un acte de salubrite financiere.",
          "La grandeur d'une organisation ne se mesure pas a la complexite de ses logiciels mais a la clarte de son execution.",
          "Nettoyez vos outils, vos collaborateurs vous remercieront."
        ]
      }
    ],
    sources: [
      {
        title: "The Sunk Cost Fallacy at work in business decision making",
        domain: "suebehaviouraldesign.com",
        date: "2026",
        url: "https://www.suebehaviouraldesign.com/en/blog/sunk-cost-fallacy-at-work/"
      },
      {
        title: "Loss Aversion in managerial choice",
        domain: "behavioraleconomics.com",
        date: "2026",
        url: "https://www.behavioraleconomics.com/resources/mini-encyclopedia-of-be/loss-aversion/"
      },
      {
        title: "Ne nous demandez pas d'etre des Amazon",
        domain: "cio-mag.com",
        date: "18/08/2026",
        url: "https://cio-mag.com/ne-nous-demandez-pas-detre-des-amazon/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_05`,
    session_id: sessionId,
    type: 'content',
    title: "1,2 milliard de dollars investis dans l'IA en Afrique : Pourquoi 80% des PME n'en voient pas un seul centime sur leur resultat net",
    account: 'agency',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'BOFU',
    score: 5,
    bridge: "Iboga Learn — Programme d'acculturation et d'ateliers pratiques d'IA appliquee aux postes cles (RH, logistique, comptabilite, direction)",
    angles: [
      {
        label: "Angle Vulgarisation",
        format: "Post Chiffres & Realites",
        hook: "Les titres de presse celebrent les milliards leves par les startups d'intelligence artificielle sur le continent. Pourtant, dans 8 PME sur 10, les managers passent toujours leur journee a copier-coller des donnees a la main.",
        points: [
          "Selon CIO Mag, plus de 1,2 milliard de dollars ont ete investis dans les startups d'IA en Afrique au cours des six dernieres annees.",
          "Le decalage est saisissant entre les annonces de laboratoires deeptech et la realite quotidienne des chefs d'entreprise gabonais et africains.",
          "Le probleme n'est pas le manque de technologie : les modeles de pointe sont disponibles sur n'importe quel navigateur ou telephone portable.",
          "Le vrai gouffre reside dans la formation des equipes a l'utilisation pratique orientee metier."
        ]
      },
      {
        label: "Angle Expert",
        format: "Matrice d'Integration Operationnelle",
        hook: "Comment transformer l'IA en gain de productivite immediat pour vos quatre departements piliers grace a la methode Iboga Learn.",
        points: [
          "Departement RH : Filtrage et synthese automatique de 200 CV selon vos criteres stricts de poste en moins de 15 minutes.",
          "Departement Achats : Comparaison automatique des devis fournisseurs et detection des ecarts tarifaires anormaux.",
          "Departement Operations : Synthese des rapports de chantiers ou de flotte en indicateurs de pilotage hebdomadaires.",
          "Direction Generale : Generation des comptes-rendus strategiques et preparation des conseils d'administration."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Offre & Conversion Directe",
        hook: "Si votre plan de formation IA consiste a dire a vos collaborateurs d'utiliser ChatGPT, vous gaspillez votre temps et vos marges.",
        points: [
          "Sans methode structuree, vos equipes utilisent l'IA pour rediger des emails polis mais ne resolvent aucun probleme operationnel de fond.",
          "Iboga Learn intervient directement dans vos bureaux pour former vos equipes sur vos fichiers reels, avec des cas d'usage immediatement rentables.",
          "Reservez votre diagnostic de competences gratuit de 30 minutes via notre lien Calendly."
        ]
      }
    ],
    sources: [
      {
        title: "IA : Les startups africaines ont leve 1,2 milliard en 6 ans",
        domain: "cio-mag.com",
        date: "2026",
        url: "https://cio-mag.com/ia-les-startups-africaines-ont-leve-12-milliard-en-6-ans/"
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
      },
      {
        title: "Google DeepMind introduces WeatherNext 3",
        domain: "blog.google",
        date: "03/09/2026",
        url: "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/introducing-weathernext-3/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_06`,
    session_id: sessionId,
    type: 'content',
    title: "La micro-assurance et l'inclusion financiere en zone CEMAC : Comment proteger le capital des entrepreneurs agricoles et commercants locaux",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'MOFU',
    score: 4,
    bridge: "Iboga Process — Automatisation des flux de declaration et rapprochement d'indemnisation pour les acteurs de la distribution de proximite",
    angles: [
      {
        label: "Angle Vulgarisation",
        format: "Sensibilisation aux Risques PME",
        hook: "Dans notre environnement economique, 80% des micro-entreprises meurent non pas par manque de clients, mais a la suite d'un seul accident de parcours non assure.",
        points: [
          "Un chargement de marchandises abime sur la route de Bitam ou une inondation a Port-Gentil efface couramment des annees de travail acharne.",
          "La demarche engagee par Samb'a Finances au Gabon et au Cameroun prouve que la finance inclusive doit depasser le simple pret d'argent pour integrer l'assurance du risque.",
          "Quand les primes d'assurance sont fractionnees et payables au jour le jour via le credit telephonique, l'entrepreneur ne subit plus de charge ecrasante.",
          "C'est cette couche de protection de base qui permettra a notre tissu entrepreneurial de capitaliser sur la duree."
        ]
      },
      {
        label: "Angle Expert",
        format: "Mecanismes Operationnels CEMAC",
        hook: "Comment les technologies d'automatisation permettent de reduire les couts de gestion d'une police d'assurance de 85% en zone CEMAC.",
        points: [
          "Point 1 : Verification parametrique des sinistres (indices meteo satellitaires pour l'agriculture sans besoin d'expert physique couteux sur place).",
          "Point 2 : Traitement automatise des dossiers d'indemnisation sous un delai de 24 heures vers le wallet mobile de l'abonne.",
          "Point 3 : Lutte contre la fraude documentaire par recoupement automatique des pieces justificatives avec les registres d'etat civil ou de commerce."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Prise de Recul Strategique",
        hook: "Donner des credits a des PME sans leur offrir d'assurance de base, c'est leur tendre une corde pour qu'elles s'endettent au premier coup dur.",
        points: [
          "Les institutions de microfinance doivent cesser d'etre de simples preteurs d'argent sous forte pression de recouvrement.",
          "La vraie responsabilite sociale et economique consiste a coupler le financement a un mecanisme de protection operationnelle.",
          "C'est la seule voie pour batir une classe moyenne durable."
        ]
      }
    ],
    sources: [
      {
        title: "Au Cameroun, Samba Finances Holding depose une demande d'agrement pour sa filiale de micro-assurance",
        domain: "financialafrik.com",
        date: "07/09/2026",
        url: "https://www.financialafrik.com/2026/09/07/au-cameroun-samba-finances-holding-depose-une-demande-dagrement-pour-sa-filiale-de-micro-assurance/"
      },
      {
        title: "L'intelligence artificielle transforme le paysage financier africain",
        domain: "cio-mag.com",
        date: "2026",
        url: "https://cio-mag.com/rocky-abdoul-milingita-lintelligence-artificielle-transforme-le-paysage-financier-africain-en-particulier-dans-les-zones-a-faible-acces-bancaire/"
      },
      {
        title: "CEMAC : La BEAC anticipe une hausse de ses reserves de change",
        domain: "financialafrik.com",
        date: "2026",
        url: "https://www.financialafrik.com/en/2026/07/11/cemac-by-the-end-of-2026-beac-expects-a-25-increase-in-its-foreign-exchange-reserves-thanks-to-eurobonds/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_07`,
    session_id: sessionId,
    type: 'content',
    title: "Ne nous demandez pas d'etre des Amazon : Pourquoi le salut des entrepreneurs africains passe par la rentabilite des le premier client",
    account: 'personal',
    pillar: 'builder',
    pillar_label: 'Parcours Builder',
    funnel: 'TOFU',
    score: 4,
    bridge: "Audit d'Opportunites IA Gratuit — Echanger 30 minutes avec un builder qui connait les realites de tresorerie du continent pour structurer vos gains de temps",
    angles: [
      {
        label: "Angle Vulgarisation",
        format: "Manifeste du Builder Africain",
        hook: "« Ne nous demandez pas d'etre des Amazon ». Cette phrase lue recemment dans la presse tech resume a la perfection ce que chaque batisseur africain ressent au quotidien.",
        points: [
          "On nous bassine avec des modeles occidentaux bases sur des levees de fonds massives ou l'on perd de l'argent pendant dix ans avant d'esperer un profit.",
          "En Afrique, si vous perdez de l'argent des le deuxieme mois sans filet de securite, votre entreprise s'arrete et vos salaries ne sont pas payes.",
          "Chez Iboga Lab, nous avons choisi la voie de l'artisanat industriel : chaque produit developpe, chaque formation livree, chaque audit conduit doit generer une valeur financiere immediate.",
          "Il n'y a aucune honte a etre petit, rentable et maitre de son destin."
        ]
      },
      {
        label: "Angle Expert",
        format: "Regles de Gestion Frugale",
        hook: "Les 3 regles de gestion non negociables que j'applique pour maintenir Iboga Lab rentable sans capital externe depuis le premier jour.",
        points: [
          "Regle 1 : Facturation d'acompte systematique de 50% au demarrage de toute mission technique ou de conseil.",
          "Regle 2 : Zéro charge fixe superficielle : nous automatisons nos processus avec des flux legers au lieu d'empiler des logiciels couteux.",
          "Regle 3 : Culture du livrable tangible en moins de 14 jours pour que le client touche du doigt le gain de productivite sans attendre six mois."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Debat & Conviction Personnelle",
        hook: "Le mythe de la startup a forte croissance a detruit plus de talents en Afrique qu'il n'en a reveles. Retrouvons le gout du commerce solide.",
        points: [
          "Une entreprise qui encaisse 5 millions de FCFA de marge nette par mois vaut dix fois plus qu'une plateforme qui leve 1 million de dollars et brule 50 000 dollars chaque semaine.",
          "Bâtir en Afrique n'est pas un concours de pitchs dans des salons climatises, c'est resoudre des blocages concrets pour des entreprises qui paient.",
          "On n'attend pas la prochaine revolution, on la build."
        ]
      }
    ],
    sources: [
      {
        title: "Ne nous demandez pas d'etre des Amazon",
        domain: "cio-mag.com",
        date: "18/08/2026",
        url: "https://cio-mag.com/ne-nous-demandez-pas-detre-des-amazon/"
      },
      {
        title: "African startups hit $2.10 billion in 8 months",
        domain: "techcabal.com",
        date: "07/09/2026",
        url: "https://techcabal.com/2026/09/07/african-startups-hit-2-10-billion-in-8-months/"
      },
      {
        title: "Next Wave: Why Uber broke in Nigeria",
        domain: "techcabal.com",
        date: "06/09/2026",
        url: "https://techcabal.com/2026/09/06/next-wave-why-uber-broke-in-nigeria/"
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

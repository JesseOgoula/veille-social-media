import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://igicdrrdlambscodmaxi.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnaWNkcnJkbGFtYnNjb2RtYXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NjMwMjUsImV4cCI6MjEwMzQzOTAyNX0.puTkc1j7BI0-dKkAL1rRtN7_XwywOS77enlEgcZBHf4';
const supabase = createClient(supabaseUrl, supabaseKey);

const sessionId = 'sess_20260912_080000';
const sessionDate = '2026-09-12';
const weekLabel = 'Semaine du 12 Septembre 2026';
const generatedAt = new Date().toISOString();

const sessionData = {
  id: sessionId,
  date: sessionDate,
  generated_at: generatedAt,
  week_label: weekLabel,
  newsjacking: {
    title: "L'automatisation industrielle et la transformation des competences : L'Afrique face au defi du travail pilote par l'IA"
  }
};

const newsItems = [
  {
    id: `idea_${sessionId}_news01`,
    session_id: sessionId,
    type: 'news',
    title: "Automatisation industrielle en Afrique : Pourquoi l'IA dans les mines et l'energie vise a sortir le travailleur de la fosse",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Process — Automatisation et securisation des flux operationnels dans les environnements industriels et logistiques a risques",
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualite court",
        hook: "L'intelligence artificielle et la robotique dans l'industrie lourde africaine ne cherchent pas a remplacer les ouvriers de bureau, mais a retirer les humains des zones de danger mortel.",
        points: [
          "Entretien strategique publie le 11 septembre 2026 par TechCabal avec Charl Marais (ABB) sur la mutation des mines et sites industriels africains.",
          "Priorite absolue des deploiements technologiques : eliminer l'exposition humaine directe dans les fosses profondes et les zones de confinement toxiques grace a la telemetrie et aux bras automatises.",
          "Transformation des metiers de manœuvre physique vers des postes d'operateurs numeriques surveillant des flottes de capteurs.",
          "Signal puissant pour l'industrie extractive et logistique africaine : la rentabilite s'aligne desormais sur la preservation des vies humaines."
        ]
      }
    ],
    sources: [
      {
        title: "Take the worker out of the pit : How ABB sees the future of African mining",
        domain: "techcabal.com",
        date: "11/09/2026",
        url: "https://techcabal.com/2026/09/11/coffee-with-charl-marais/"
      },
      {
        title: "Huawei launches Agentic AI Cloud in Nigeria to accelerate intelligence",
        domain: "techafricanews.com",
        date: "31/08/2026",
        url: "https://techafricanews.com/2026/08/31/huawei-launches-agentic-ai-cloud-nigeria/"
      },
      {
        title: "Enterprise AI and Applied Intelligence Solutions",
        domain: "figolabs.ai",
        date: "03/09/2026",
        url: "https://www.figolabs.ai/"
      }
    ],
    drafted_post: "OBSERVATOIRE INDUSTRIE : Ce que les debats de salon sur l'IA oublient trop souvent.\n\nCe qui s'est passe :\nCe 11 septembre 2026, TechCabal a publie un echange decisif avec la direction d'ABB sur l'avenir des operations industrielles et extractives en Afrique. Le mot d'ordre : 'Take the worker out of the pit' (sortir le travailleur de la fosse). Concretement, l'IA et les capteurs autonomes sont deployes en priorite la ou un homme risque sa vie sous terre ou dans des conduites toxiques.\n\nPourquoi c'est capital :\nPendant 7 ans sur le terrain logistique a Port-Gentil, j'ai vu ce que represente le risque physique sur les chantiers lourds et les terminaux. L'automatisation intelligente en Afrique ne sert pas a fabriquer des gadgets : elle sert d'abord a transformer un travailleur expose en operateur de controle forme et securise.\n\nMon avis de builder :\nL'Afrique n'a pas besoin d'IA pour remplacer des emplois utiles, elle a besoin d'IA pour eradiquer les taches dangereuses et manuelles abrutissantes. Les dirigeants de PME et de grands groupes qui investissent dans la securite de leurs operateurs constatent immediatement une baisse des temps d'arret et une fidelisation historique de leurs talents.\n\nQuels sont les postes les plus penibles ou risques dans vos operations qui devraient etre securises en priorite ?\n\n#Industrie #Logistique #Afrique #TransformationDigitale #SecuriteAuTravail #IbogaLab"
  },
  {
    id: `idea_${sessionId}_news02`,
    session_id: sessionId,
    type: 'news',
    title: "L'education traditionnelle depassee par la vitesse de l'IA : Pourquoi l'Afrique doit inventer un nouveau modele de formation continue",
    account: 'personal',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Learn — Ateliers pratiques, frameworks de prompts personnalises et acculturation rapide des collaborateurs",
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualite court",
        hook: "L'intelligence artificielle evolue plus vite que les programmes universitaires ne peuvent etre rediges. L'Afrique est en train de tracer une autre voie basee sur l'agilite et l'apprentissage modulaire.",
        points: [
          "Analyse de fond publiee le 11 septembre 2026 par Disrupt Africa sur l'obsolescence acceleree des formations diplomantes classiques de 3 a 5 ans face a l'IA.",
          "Les entreprises n'attendent plus des diplomes academiques rigides, mais des competences d'execution verifiables sur les outils actuels.",
          "L'Afrique, avec sa jeunesse et sa flexibilite structurelle, experimente a grande echelle des bootcamps modulaires et des formations de terrain en flux tendu.",
          "Necessite absolue pour les PME d'instituer la formation continue interne comme routine hebdomadaire permanente."
        ]
      }
    ],
    sources: [
      {
        title: "AI is changing work faster than education can adapt, Africa may offer a different model",
        domain: "disruptafrica.com",
        date: "11/09/2026",
        url: "https://disruptafrica.com/2026/09/11/ai-is-changing-work-faster-than-education-can-adapt-africa-may-offer-a-different-model/"
      },
      {
        title: "ChipMango raises $1.9M to expand African semiconductor talent globally",
        domain: "techinafrica.com",
        date: "04/09/2026",
        url: "https://www.techinafrica.com/chipmango-raises-1-9m-to-expand-african-semiconductor-talent-globall/"
      },
      {
        title: "African startups invited to apply for Kickstarter, Google Next Wave Fund",
        domain: "disruptafrica.com",
        date: "10/09/2026",
        url: "https://disruptafrica.com/2026/09/10/african-startups-invited-to-apply-for-kickstarter-google-next-wave-fund/"
      }
    ],
    drafted_post: "COMPETENCES 2026 : Le diplome de 5 ans est officiellement trop lent pour le rythme de l'IA.\n\nCe qui s'est passe :\nUne etude parue ce 11 septembre 2026 sur Disrupt Africa confirme un constat que nous vivons chaque jour : les cycles universitaires traditionnels sont incapables de s'adapter a la vitesse de deploiement des agents IA en entreprise. Pour combler le fossé, l'Afrique est en train d'imposer un modele different : des formations courtes, modulaires et 100% connectees aux besoins reels du terrain.\n\nPourquoi c'est decisif pour les dirigeants :\nAttendre que l'ecole vous livre des profils prets a l'emploi est une illusion. Si vous voulez des managers et collaborateurs qui maitrisent l'IA appliquee, c'est a votre entreprise de creer son propre sas d'apprentissage continu.\n\nMon avis de praticien :\nAyant forme plus de 300 talents au Gabon avec l'OIF, Simplon et l'Ecole 241, j'ai vu des juristes, des gestionnaires de stocks et des marketeurs devenir d'excellents praticiens de l'IA en 4 semaines d'ateliers intenses. La competence moderne ne se resume plus a accumuler des concepts : elle consiste a tester, mesurer et resoudre un probleme le jour meme.\n\nRecrutez-vous encore sur la base du parchemin, ou sur la capacite reelle a executer avec les outils d'aujourd'hui ?\n\n#Formation #Competences #AvenirDuTravail #Leadership #Gabon #IbogaLab"
  },
  {
    id: `idea_${sessionId}_news03`,
    session_id: sessionId,
    type: 'news',
    title: "Expansion transfrontaliere et notation credit B2B : CreditChek rachete Algosys pour digitaliser les PME en Afrique de l'Est",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 5,
    bridge: "Iboga Process — Structuration des donnees internes et normalisation des flux comptables pour rendre les PME auditables",
    angles: [
      {
        label: "Curation Factuelle",
        format: "Post d'actualite court",
        hook: "L'Afrique avance vers l'interoperabilite bancaire et l'analyse de risque automatisee. CreditChek rachete le fournisseur ougandais Algosys pour accelerer le credit aux PME.",
        points: [
          "Annonce le 11 septembre 2026 de l'acquisition de la societe ougandaise de core banking Algosys par la fintech nigeriane CreditChek.",
          "Objectif strategique : connecter l'historique de flux reels des PME d'Afrique de l'Ouest et de l'Est pour automatiser l'octroi de credits commerciaux.",
          "Les bilans papier tardifs sont remplaces par des passerelles d'API inspectant en continu la solvabilite des acteurs economiques.",
          "Confirmation que la tresorerie des PME dependra desormais de la propre maturite de leurs flux de donnees internes."
        ]
      }
    ],
    sources: [
      {
        title: "Nigeria's CreditChek begins East African expansion by acquiring Uganda's Algosys",
        domain: "disruptafrica.com",
        date: "11/09/2026",
        url: "https://disruptafrica.com/2026/09/11/nigerias-creditchek-begins-east-african-expansion-by-acquiring-ugandas-algosys/"
      },
      {
        title: "SA's Grindstone Ventures launches new $31m fund",
        domain: "disruptafrica.com",
        date: "11/09/2026",
        url: "https://disruptafrica.com/2026/09/11/sas-grindstone-ventures-launches-new-31m-fund/"
      },
      {
        title: "BluDive Calls for Greater Technology Ownership as GITEX Nigeria 2026 Spotlights Sovereign Innovation",
        domain: "techpoint.africa",
        date: "10/09/2026",
        url: "https://techpoint.africa/brandpress/bludive-calls-for-greater-technology-ownership-as-gitex-nigeria-2026-spotlights-sovereign-innovation/"
      }
    ],
    drafted_post: "FINTECH B2B : La fin de l'opacite financiere pour les PME africaines.\n\nCe qui s'est passe :\nCe vendredi 11 septembre 2026, la plateforme CreditChek a rachete Algosys en Ouganda. Ce n'est pas juste une operation financiere de plus : c'est l'interconnexion transfrontaliere des donnees bancaires et commerciales des PME a travers l'Afrique de l'Ouest et de l'Est pour automatiser l'analyse de solvabilite.\n\nCe que cela change pour votre entreprise :\nPendant des decennies, les patrons de PME se plaignaient a juste titre du refus de pret des banques. Pourquoi ? Parce qu'un bilan annuel remis avec 6 mois de retard ne prouve rien. Aujourd'hui, les systemes d'evaluation se branchent directement sur les flux de facturation et d'encaissement en temps reel.\n\nMon avis de praticien :\nSi votre comptabilite est encore dispersee sur des carnets manuscrits ou des fichiers Excel isoles, votre entreprise est litteralement invisible pour les nouveaux circuits de financement. Structurer et digitaliser ses donnees internes n'est plus une corvee de secretariat : c'est votre premier passeport pour acceder au capital.\n\nVotre PME serait-elle capable de produire un historique de flux net et verifiable si une banque vous le demandait ce matin ?\n\n#Fintech #PMEAfrique #Tresorerie #Financement #TransformationDigitale #IbogaLab"
  }
];

const contentIdeas = [
  {
    id: `idea_${sessionId}_01`,
    session_id: sessionId,
    type: 'content',
    title: "Le Cout Cache de la Desillusion IA : Pourquoi 60% des PME abandonnent leurs projets d'automatisation apres 90 jours (et comment garantir un ROI des le premier mois)",
    account: 'business',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'MOFU',
    score: 5,
    bridge: "Iboga Process — Audit d'Opportunites IA Gratuit (30 min) pour cadrer 3 leviers a gain immediat avant tout deploiement",
    angles: [
      {
        label: "Angle Debutant",
        format: "Post Diagnostic / Autopsie d'Echec",
        hook: "Vous avez pris 3 abonnements a des outils IA, vos salaries ont assiste a un webinaire, et trois mois plus tard : rien n'a change dans vos comptes. Voici pourquoi.",
        points: [
          "L'erreur classique consiste a acheter des licences sans definir la tache exacte a automatiser ni le responsable du flux.",
          "Les collaborateurs utilisent l'outil quelques jours comme curiosite, puis reviennent a leurs vieilles habitudes manuelles des le premier obstacle.",
          "L'IA sans cartographie prealable des processus ne cree pas de productivite : elle cree simplement un abonnement bancaire inutile de plus."
        ]
      },
      {
        label: "Angle Expert",
        format: "Carrousel Methodologique (5 slides)",
        hook: "Le protocole en 3 etapes pour eviter le cimetiere des projets IA en entreprise et securiser un retour sur investissement chiffrable des 30 jours.",
        points: [
          "Slide 1 : Identifier un processus unique a friction elevee (ex: saisie des bons de commande ou generation de devis).",
          "Slide 2 : Mesurer le temps actuel et fixer une cible chiffree (ex: passer de 4 heures a 25 minutes par dossier).",
          "Slide 3 : Concevoir un flux deterministe rigide avec controle humain final avant d'injecter la moindre touche de generation.",
          "Slide 4 : Former l'utilisateur operationnel sur ses cas reels, pas sur des prompts theoriques."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Post d'Opinion Dirigeant",
        hook: "Si votre projet IA a echoue, ce n'est pas la faute de la technologie. C'est la preuve que votre management refuse de regarder la realite de ses processus en face.",
        points: [
          "L'intelligence artificielle est un miroir grossissant : elle sublime une organisation rigoureuse et acheve une organisation confuse.",
          "Un bon dirigeant ne demande pas 'Quelle IA devrais-je acheter ?', il demande 'Quel goulot d'etranglement paralyse la croissance de mes equipes ?'",
          "Commencez par nettoyer vos tuyaux, les outils intelligents viendront ensuite."
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
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_02`,
    session_id: sessionId,
    type: 'content',
    title: "L'IA Frugale et les Petits Modeles (SLM) : Pourquoi votre PME n'a pas besoin de supercalculateur pour automatiser 80% de ses operations",
    account: 'personal',
    pillar: 'ia',
    pillar_label: 'IA Appliquee pour Dirigeants',
    funnel: 'MOFU',
    score: 4,
    bridge: "Iboga Process & Dev — Integration de modeles d'IA frugaux, locaux et autonomes adaptes aux contraintes africaines",
    angles: [
      {
        label: "Angle Debutant",
        format: "Post Pedagogique / Demystification",
        hook: "Vous pensez que faire tourner de l'IA dans votre entreprise necessite des connexions satellites ultra-rapides et des millions de budget informatique ? C'est faux.",
        points: [
          "Les petits modeles de langage (SLM) sont concus pour executer des taches d'entreprise precises sur du materiel standard.",
          "Ils n'ont pas besoin de connaitre toute l'encyclopedie du monde pour trier des emails, verifier des factures ou rediger des comptes-rendus de reunion.",
          "Une machine de bureau ordinaire peut desormais faire tourner un assistant IA complet sans consommer de bande passante cloud."
        ]
      },
      {
        label: "Angle Expert",
        format: "Guide d'Architecture Technique Legere",
        hook: "L'equation gagnante de l'IA en contexte contraint : zero dependance aux serveurs etrangers, zero abonnement mensuel en devises.",
        points: [
          "Deploiement de modeles compacts specialises (1 a 3 milliards de parametres) directement dans le reseau local de l'entreprise.",
          "Confidentialite totale des donnees financieres et commerciales qui ne quittent jamais le batiment.",
          "Fonctionnement garanti meme en cas de coupure de cable sous-marin ou d'interruption temporaire d'internet."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Prise de Position Efficacite",
        hook: "Utiliser un modele geant a des milliards de parametres pour extraire un nom et un montant sur un bon de livraison, c'est envoyer un avion de ligne chercher une baguette de pain.",
        points: [
          "Le gigantisme des modeles americains est un modele economique pour les fournisseurs de cloud, pas une reponse aux besoins d'une PME.",
          "La vraie elegance en ingenierie consiste a resoudre un probleme avec le minimum de ressources et de cout possible.",
          "La frugalite numerique est le plus grand avantage concurrentiel des entrepreneurs africains."
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
        title: "ChipMango raises $1.9M to expand African semiconductor talent globally",
        domain: "techinafrica.com",
        date: "04/09/2026",
        url: "https://www.techinafrica.com/chipmango-raises-1-9m-to-expand-african-semiconductor-talent-globall/"
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
    id: `idea_${sessionId}_03`,
    session_id: sessionId,
    type: 'content',
    title: "Delestages, Coupures Reseau et Continuite de Service : Comment concevoir des flux de travail resilientes pour une PME en Afrique",
    account: 'business',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'BOFU',
    score: 5,
    bridge: "Iboga Dev & Process — Conception de plateformes et d'architectures asynchrones resistantes aux coupures et pannes locales",
    angles: [
      {
        label: "Angle Debutant",
        format: "Post Realite de Terrain",
        hook: "Que se passe-t-il dans votre entreprise a Port-Gentil, Douala ou Abidjan quand le courant saute ou que la fibre est coupee pendant 4 heures ?",
        points: [
          "Pour la majorite des societes, c'est l'arret complet des operations : plus de devis, plus de validation des livraisons, standard telephonique mort.",
          "Les logiciels occidentaux 'cloud-first' sont concus pour un monde ou l'electricite et la 5G ne coupent jamais.",
          "En Afrique, une digitalisation qui ne prevoit pas les coupures n'est pas un progres : c'est un piege operationnel."
        ]
      },
      {
        label: "Angle Expert",
        format: "Guide Pratique d'Architecture Frugale",
        hook: "Les 3 principes fondamentaux pour construire un systeme d'information PME qui continue de tourner hors-ligne.",
        points: [
          "1. L'architecture asynchrone : chaque saisie sur mobile ou tablette est stockee localement et se synchronise automatiquement des le retour du reseau.",
          "2. Les files d'attente d'automatisation : si une API externe est injoignable, le workflow reessaie avec temporisation sans bloquer l'operateur.",
          "3. La double voie Mobile Money / WhatsApp qui permet de maintenir les alertes critiques meme avec une bande passante minimale."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Appel au Pragmatisme",
        hook: "Arretez d'accuser les operateurs telecom pour vos pertes d'exploitation. C'est a votre architecture logicielle de s'adapter a notre environnement, pas l'inverse.",
        points: [
          "Le contexte africain impose la resilience par conception.",
          "Les entreprises qui dominent leur marche local ne sont pas celles qui attendent des infrastructures parfaites, mais celles qui maitrisent les flux contraints.",
          "Chez Iboga Lab, nous batissons nos solutions pour resister au monde reel, pas a un laboratoire ideal."
        ]
      }
    ],
    sources: [
      {
        title: "Take the worker out of the pit : How ABB sees the future of African mining",
        domain: "techcabal.com",
        date: "11/09/2026",
        url: "https://techcabal.com/2026/09/11/coffee-with-charl-marais/"
      },
      {
        title: "Huawei launches Agentic AI Cloud in Nigeria to accelerate intelligence",
        domain: "techafricanews.com",
        date: "31/08/2026",
        url: "https://techafricanews.com/2026/08/31/huawei-launches-agentic-ai-cloud-nigeria/"
      },
      {
        title: "BluDive Calls for Greater Technology Ownership as GITEX Nigeria 2026 Spotlights Sovereign Innovation",
        domain: "techpoint.africa",
        date: "10/09/2026",
        url: "https://techpoint.africa/brandpress/bludive-calls-for-greater-technology-ownership-as-gitex-nigeria-2026-spotlights-sovereign-innovation/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_04`,
    session_id: sessionId,
    type: 'content',
    title: "Technology Ownership : Pourquoi les dirigeants africains doivent cesser d'acheter des solutions boite noire qu'ils ne maitrisent pas",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'MOFU',
    score: 4,
    bridge: "Iboga Learn & Process — Autonomisation des equipes internes sur leurs outils d'automatisation sans dependance aveugle a un prestataire",
    angles: [
      {
        label: "Angle Debutant",
        format: "Post Prise de Conscience",
        hook: "Si votre prestataire informatique disparait demain matin, combien de temps votre entreprise mettra-t-elle avant d'etre totalement paralysée ?",
        points: [
          "Trop d'entreprises africaines achetent des logiciels cles en main sans acces au code, sans documentation de leurs propres flux et sans formation de leurs employes.",
          "Au premier bug ou a la premiere demande de changement, la facture explose et le dirigeant se retrouve otage d'un contrat opaque.",
          "La vraie souverainete numerique ne commence pas au niveau d'un Etat : elle commence au sein de votre propre PME."
        ]
      },
      {
        label: "Angle Expert",
        format: "Analyse Strategique de Gouvernance",
        hook: "Le plaidoyer de GITEX 2026 pour le Technology Ownership : comment concilier outils modernes et maitrise absolue de ses actifs numeriques.",
        points: [
          "Privilegier les briques open-source ou no-code auto-hebergeables (comme n8n) plutot que des solutions fermees et captives.",
          "Exiger systematiquement la cartographie detaillee des flux automatises sous forme de Standard Operating Procedures (SOP).",
          "Former au moins deux collaborateurs internes pour etre capables de maintenir et ajuster les parametres de base sans assistance externe."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Manifeste d'Independance",
        hook: "Payer des abonnements mensuels exorbitants a l'etranger pour des outils que vos equipes ne comprennent pas n'est pas de la modernisation : c'est une nouvelle forme de dependance economique.",
        points: [
          "La technologie doit appartenir a ceux qui la font fonctionner au quotidien.",
          "Un outil dont vous n'avez pas la cle de controle n'est pas un actif, c'est une charge financiere permanente.",
          "Construisez vos fondations numeriques sur ce que vous comprenez et ce que vous maitrisez."
        ]
      }
    ],
    sources: [
      {
        title: "BluDive Calls for Greater Technology Ownership as GITEX Nigeria 2026 Spotlights Sovereign Innovation",
        domain: "techpoint.africa",
        date: "10/09/2026",
        url: "https://techpoint.africa/brandpress/bludive-calls-for-greater-technology-ownership-as-gitex-nigeria-2026-spotlights-sovereign-innovation/"
      },
      {
        title: "AI is changing work faster than education can adapt, Africa may offer a different model",
        domain: "disruptafrica.com",
        date: "11/09/2026",
        url: "https://disruptafrica.com/2026/09/11/ai-is-changing-work-faster-than-education-can-adapt-africa-may-offer-a-different-model/"
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
    id: `idea_${sessionId}_05`,
    session_id: sessionId,
    type: 'content',
    title: "Recrutement et Tri de Candidatures en PME : Comment diviser par 4 le temps de qualification sans tomber dans le piege des filtres aveugles",
    account: 'business',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'BOFU',
    score: 5,
    bridge: "Audit d'opportunites IA gratuit (30 min) / Iboga Process — Automatisation des flux RH et de qualification de profils pour PME",
    angles: [
      {
        label: "Angle Debutant",
        format: "Post Douleur Operationnelle / RH",
        hook: "Vous publiez une offre d'emploi pour un poste commercial ou comptable, et en 48 heures vous recevez 250 CVs sur WhatsApp et par email. Qui va passer son week-end a tout lire ?",
        points: [
          "Dans une PME, le dirigeant ou le manager RH passe 20 a 30 heures a ouvrir des pieces jointes inadaptees, avec le risque de rater le meilleur candidat par simple fatigue visuelle.",
          "Les plateformes occidentales de recrutement coutent des fortunes et rejettent aveuglement des talents prometteurs sur un mot-cle manquant.",
          "Un simple formulaire de prescreening automatise avec scoring de cas pratiques permet de prequalifier les 10 meilleurs profils en temps reel."
        ]
      },
      {
        label: "Angle Expert",
        format: "Pipeline Pas a Pas (Cas d'Usage)",
        hook: "Le pipeline de recrutement en 3 etapes qui fait gagner 18 heures a chaque ouverture de poste dans une PME.",
        points: [
          "Etape 1 : Remplacer le CV statique par un test de situation professionnelle court (3 questions concretes sur le metier).",
          "Etape 2 : Un assistant IA analyse la logique de reponse et classe les dossiers selon une grille de competences standardisee.",
          "Etape 3 : Le manager recoit directement un tableau de synthese avec les 5 candidats a inviter en entretien d'evaluation."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Post Debunking Recrutement",
        hook: "Le CV traditionnel sous format PDF est le pire outil jamais invente pour evaluer les competences reelles d'un collaborateur en 2026.",
        points: [
          "N'importe qui peut rediger un CV seduisant en 30 secondes avec ChatGPT.",
          "Ce qui compte, ce n'est pas ce que le candidat affirme savoir faire sur une feuille, c'est sa maniere de raisonner face a un probleme reel de votre entreprise.",
          "Automatiser le pre-test pratique remet le merite et l'efficacite au centre du recrutement."
        ]
      }
    ],
    sources: [
      {
        title: "AI is changing work faster than education can adapt, Africa may offer a different model",
        domain: "disruptafrica.com",
        date: "11/09/2026",
        url: "https://disruptafrica.com/2026/09/11/ai-is-changing-work-faster-than-education-can-adapt-africa-may-offer-a-different-model/"
      },
      {
        title: "Executive AI Strategy Questions to Drive ROI",
        domain: "forbes.com",
        date: "27/08/2026",
        url: "https://www.forbes.com/sites/noahbarsky/2026/05/27/4-ai-strategy-questions-every-executive-needs-to-drive-roi/"
      },
      {
        title: "Shadow AI : The 76 Percent Enterprise Problem",
        domain: "olakai.ai",
        date: "2026",
        url: "https://olakai.ai/blog/shadow-ai-76-percent-problem/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_06`,
    session_id: sessionId,
    type: 'content',
    title: "Du Solopreneur Epuise au Batisseur d'Organisation : La regle des 70/30/0 pour ne plus etre le goulot d'etranglement de son entreprise",
    account: 'personal',
    pillar: 'builder',
    pillar_label: 'Parcours Builder',
    funnel: 'TOFU',
    score: 4,
    bridge: "Culture d'execution Iboga Lab : 70% d'execution strategique, 30% d'innovation de flux, 0% de theorie inutile",
    angles: [
      {
        label: "Angle Debutant",
        format: "Storytelling Incarné / Parcours",
        hook: "Pendant longtemps, j'ai cru que bien diriger consistait a tout surveiller, tout corriger et tout valider moi-meme du matin au soir.",
        points: [
          "Resultat : des journees de 14 heures, un stress permanent et l'angoisse de voir l'activite s'effondrer des que je m'eloignais de l'ecran.",
          "Le tournant a ete d'accepter une realite dure : si tout depend de vous, vous n'avez pas cree une entreprise, vous vous etes cree une prison.",
          "C'est cette prise de conscience qui m'a pousse a formaliser mes propres processus et a appliquer a Iboga Lab la rigueur que je transmets aujourd'hui a mes clients."
        ]
      },
      {
        label: "Angle Expert",
        format: "Methode d'Organisation (Le Cadre 70/30/0)",
        hook: "Comment repartir son temps hebdomadaire quand on veut faire passer son entreprise a l'echelle sans exploser en vol.",
        points: [
          "70% d'execution strategique : se focaliser sur les 2 ou 3 activites prioritaires qui generent directement du chiffre d'affaires et de la valeur client.",
          "30% d'innovation de flux : automatiser, documenter et former son equipe pour que chaque reussite soit reproductible sans votre presence.",
          "0% de theorie inutile : eliminer les reunions interminables, les rapports non lus et les fioritures qui masquent l'absence de resultats."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Manifeste Bâtisseur",
        hook: "Travailler dur est admirable. Travailler sur des taches que vous auriez du automatiser il y a six mois est une faute de gestion.",
        points: [
          "La bravoure de l'entrepreneur ne se mesure pas au nombre d'heures de souffrance derriere un bureau.",
          "Elle se mesure a sa capacite a batir un systeme qui libere le potentiel de ses collaborateurs et produit de la valeur de facon previsible.",
          "On n'attend pas la prochaine revolution, on la build."
        ]
      }
    ],
    sources: [
      {
        title: "Take the worker out of the pit : How ABB sees the future of African mining",
        domain: "techcabal.com",
        date: "11/09/2026",
        url: "https://techcabal.com/2026/09/11/coffee-with-charl-marais/"
      },
      {
        title: "AI is changing work faster than education can adapt, Africa may offer a different model",
        domain: "disruptafrica.com",
        date: "11/09/2026",
        url: "https://disruptafrica.com/2026/09/11/ai-is-changing-work-faster-than-education-can-adapt-africa-may-offer-a-different-model/"
      },
      {
        title: "BluDive Calls for Greater Technology Ownership as GITEX Nigeria 2026 Spotlights Sovereign Innovation",
        domain: "techpoint.africa",
        date: "10/09/2026",
        url: "https://techpoint.africa/brandpress/bludive-calls-for-greater-technology-ownership-as-gitex-nigeria-2026-spotlights-sovereign-innovation/"
      }
    ],
    drafted_post: null
  },
  {
    id: `idea_${sessionId}_07`,
    session_id: sessionId,
    type: 'content',
    title: "L'Economie Informelle Africaine n'est pas un Desordre : C'est un Algorithme Social Ultra-Optimise (et ce que les ingenieurs tech n'ont toujours pas compris)",
    account: 'personal',
    pillar: 'terrain',
    pillar_label: 'Terrain & Croissance PME Africaines',
    funnel: 'TOFU',
    score: 5,
    bridge: "Culture produit et pragmatisme Iboga Lab — Digitaliser sans detruire le capital social et les reseaux de confiance locaux",
    angles: [
      {
        label: "Angle Debutant",
        format: "Post Sociologie Economique & Regard Neuf",
        hook: "Quand un expert occidental ou un developpeur regarde un grand marche africain, il voit du desordre. Quand un praticien regarde ce meme marche, il voit un systeme d'une precision chirurgicale.",
        points: [
          "Les tontines, le credit fournisseur base sur la parole, les rabatteurs et la solidarite de quartier tournent avec un taux de defaut souvent inferieur a celui des banques commerciales.",
          "Ce systeme fonctionne parce qu'il repose sur un actif supreme : la confiance interpersonnelle et la reputation locale.",
          "Vouloir parachuter une application froide sans comprendre cette dynamique sociale est la garantie d'un rejet immediat."
        ]
      },
      {
        label: "Angle Expert",
        format: "Guide Produit & Conception Tech",
        hook: "Pourquoi 95% des applications creees pour 'digitaliser les commercants informels' echouent lamentablement en Afrique.",
        points: [
          "L'erreur fondamentale : demander au commercant de tout re-saisir dans une interface rigide qui lui fait perdre son temps et l'expose sans avantage immediat.",
          "La bonne approche : greffer la technologie sur ses flux de confiance existants (WhatsApp, messages vocaux, notifications de paiement simples).",
          "La regle d'or d'Iboga Lab : la technologie ne doit pas remplacer le lien humain, elle doit fluidifier la trace et accelerer l'echange."
        ]
      },
      {
        label: "Angle Contrarien",
        format: "Plaidoyer d'Authenticite",
        hook: "Arretez d'essayer de 'civiliser' l'economie africaine avec des theories de manuels de management etrangers. Apprenez d'abord comment nos commercants survivent et prosperent depuis 50 ans.",
        points: [
          "La vraie innovation en Afrique ne consiste pas a copier Silicon Valley, elle consiste a construire des outils numeriques qui epousent nos codes culturels et nos realites locales.",
          "Les futurs geants de la tech africaine seront ceux qui comprendront la psychologie du marche reel, pas ceux qui empilent des algorithmes hors-sol.",
          "Le pragmatisme est notre plus grande force."
        ]
      }
    ],
    sources: [
      {
        title: "AI is changing work faster than education can adapt, Africa may offer a different model",
        domain: "disruptafrica.com",
        date: "11/09/2026",
        url: "https://disruptafrica.com/2026/09/11/ai-is-changing-work-faster-than-education-can-adapt-africa-may-offer-a-different-model/"
      },
      {
        title: "Kenya's political operator used Claude for propaganda, Anthropic says",
        domain: "techcabal.com",
        date: "11/09/2026",
        url: "https://techcabal.com/2026/09/11/kenyas-political-operator-used-claude-for-propaganda/"
      },
      {
        title: "Nigeria's CreditChek begins East African expansion by acquiring Uganda's Algosys",
        domain: "disruptafrica.com",
        date: "11/09/2026",
        url: "https://disruptafrica.com/2026/09/11/nigerias-creditchek-begins-east-african-expansion-by-acquiring-ugandas-algosys/"
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

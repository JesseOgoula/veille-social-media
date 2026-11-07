/**
 * addIdea08.js
 * Ajout de l'idée 11 (content08) à la session du 7 novembre 2026 :
 * « Aujourd'hui la technologie : pourquoi l'Afrique est en retard ? »
 * Analyse structurelle de la fracture numérique globale (data centers, énergie, matériel, souveraineté)
 * Données chiffrées issues de l'UIT, de la Banque Mondiale et du Forum Économique Mondial.
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://igicdrrdlambscodmaxi.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnaWNkcnJkbGFtYnNjb2RtYXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NjMwMjUsImV4cCI6MjEwMzQzOTAyNX0.puTkc1j7BI0-dKkAL1rRtN7_XwywOS77enlEgcZBHf4';
const supabase = createClient(supabaseUrl, supabaseKey);

export const sessionId = 'sess_20261107_080000';

export const idea08 = {
  id: 'idea_20261107_content08',
  session_id: sessionId,
  type: 'content',
  title: "« Aujourd'hui la technologie : pourquoi l'Afrique est en retard ? » La vérité crue sur la fracture numérique et l'illusion des smartphones",
  account: 'jesse',
  pillar: 'terrain-pme',
  pillar_label: 'Terrain & Croissance PME Africaines',
  funnel: 'TOFU',
  score: 5,
  bridge: "Jesse Ogoula / L'habitant — Analyse sans concession de la fracture technologique : 18 % de la population mondiale pour moins de 1 % de la capacité mondiale de calcul et de centres de données (Banque Mondiale / UIT)",
  angles: [
    {
      name: "Débutant / Vulgarisation",
      format: "Post court avec visuel",
      hook: "Pourquoi l'Afrique est-elle encore en retard sur la technologie mondiale ? La réponse n'est pas dans le manque d'intelligence de notre jeunesse, elle est sous terre et dans nos prises électriques.",
      points: [
        "Avoir un smartphone dans la poche et payer par mobile money donne l'illusion de vivre dans la modernité technologique",
        "En réalité, 99 % des applications que nous utilisons chaque seconde tournent sur des serveurs situés en Europe ou aux États-Unis",
        "L'Afrique compte 18 % de la population humaine mais moins de 1 % de la capacité mondiale des centres de données",
        "Nous consommons des technologies que nous ne possédons pas et nous exportons gratuitement nos données brutes",
        "Le premier pas pour rattraper ce retard est d'arrêter de confondre être connecté sur les réseaux sociaux et détenir une industrie numérique"
      ]
    },
    {
      name: "Expert / Stratégique",
      format: "Carrousel",
      hook: "Anatomie de la fracture d'infrastructure : les quatre verrous structurels qui bloquent l'émergence d'une souveraineté technologique africaine.",
      points: [
        "Verrou 1 (Énergie et stabilité électrique) : l'impossibilité d'alimenter des centres de calcul haute densité sans réseau électrique continu à coût compétitif",
        "Verrou 2 (Pression douanière sur le matériel) : des droits de douane de 30 % à 50 % sur les serveurs et composants réseau qui renchérissent l'équipement local",
        "Verrou 3 (Coût du transit IP et connectivité terrestre) : la faiblesse du maillage fibre intra-continental obligeant le trafic régional à transiter par des câbles sous-marins distants",
        "Verrou 4 (Fuite de la valeur ajoutée des données) : les PME et institutions locales paient des factures cloud récurrentes en devises sans retour sur investissement national",
        "Recommandation stratégique : instaurer des zones franches numériques exonérées de droits de douane et couplées à des centrales d'énergie dédiées"
      ]
    },
    {
      name: "Contrarien / Prise de position",
      format: "Texte long",
      hook: "Arrêtons de célébrer le taux de pénétration des téléphones portables comme une victoire technologique : c'est la preuve que nous sommes le plus grand marché de consommateurs captifs de la planète.",
      points: [
        "L'écosystème tech africain adore se gargariser du succès de l'argent mobile pour masquer notre retard industriel absolu",
        "Utiliser un téléphone conçu en Asie, avec un système d'exploitation américain, pour envoyer de l'argent sur une application tierce ne fait pas de nous des innovateurs",
        "Tant que nous ne fabriquerons pas nos processeurs, nos serveurs de stockage et nos propres systèmes d'hébergement, nous resterons dépendants",
        "Un pays qui ne possède pas ses serveurs ne contrôle ni sa monnaie numérique, ni ses secrets d'affaires, ni sa sécurité nationale",
        "La souveraineté technologique commence par la métallurgie, l'électricité et les disques durs, pas par des discours dans des salons feutrés"
      ]
    },
    {
      name: "Prospectif / Sociétal",
      format: "Texte long",
      hook: "D'ici 2035, l'écart technologique mondial ne se mesurera plus au nombre de diplômés, mais à la capacité énergétique et matérielle de calcul par habitant.",
      points: [
        "L'explosion des besoins mondiaux en puissance de calcul transforme l'infrastructure physique en nouveau pétrole du siècle",
        "Les nations qui ne posséderont pas d'infrastructures locales de calcul seront réduites à sous-traiter leurs décisions économiques à des puissances étrangères",
        "L'Afrique dispose d'un potentiel solaire et hydroélectrique inégalé pour alimenter les centres de calcul les plus écologiques du monde",
        "Opportunité historique de faire de la zone CEMAC et de l'Afrique centrale un carrefour d'hébergement neutre et souverain",
        "La jeunesse africaine ne doit pas seulement apprendre à utiliser des logiciels : elle doit construire les infrastructures physiques qui les hébergent"
      ]
    },
    {
      name: "Comparatif / Décisionnel",
      format: "Carrousel",
      hook: "Consommer la technologie des autres versus construire son infrastructure souveraine : la matrice de l'indépendance africaine.",
      points: [
        "Modèle A (Consommation passive dépendante) : 100 % des données hébergées hors continent, vulnérabilité totale aux sanctions et coupures internationales, fuite massive de devises",
        "Modèle B (Infrastructure souveraine partagée) : centres de données régionaux mutualisés, latence divisée par quatre, conformité stricte aux lois nationales de protection des données",
        "Équation financière : un investissement de dix milliards de dollars en infrastructures rapporte cent milliards en économie de devises et attractivité industrielle sur dix ans",
        "Indicateur de pilotage continental : passer de moins de 1 % à 5 % de la capacité mondiale de centres de données d'ici 2030",
        "Conclusion d'arbitrage : subventionner l'achat de serveurs et détaxer l'infrastructure informatique est l'urgence nationale numéro un"
      ]
    },
    {
      name: "Storytelling / Retour terrain",
      format: "Récit",
      hook: "Ici à Port-Gentil, quand une coupure de courant survient au milieu de l'après-midi et que les groupes électrogènes se mettent à rugir pour alimenter trois ordinateurs, la réalité de la fracture numérique vous frappe en plein visage.",
      points: [
        "Pendant que les experts de la Silicon Valley dissertent sur l'intelligence artificielle quantique, nos entreprises luttent pour garder une connexion stable",
        "Un chef d'entreprise locale m'a confié qu'il dépense plus d'argent en carburant pour son générateur de secours qu'en abonnements logiciels pour ses équipes",
        "C'est cette vérité rugueuse du terrain qui manque cruellement dans les grands débats sur la technologie africaine",
        "Nous ne manquons ni de courage, ni d'idées, ni de talents brillants : nous manquons de mégawatts stables et de serveurs sur notre sol",
        "Chaque fois que nous posons un câble fiable et sécurisons un flux chez Iboga Lab, nous posons une brique concrète pour combler ce fossé"
      ]
    }
  ],
  sources: [
    {
      url: "https://www.itu.int/",
      label: "Union Internationale des Télécommunications (UIT) — Facts and Figures : The Global Connectivity and Infrastructure Divide",
      date: "2026-10-15"
    },
    {
      url: "https://www.worldbank.org/",
      label: "Banque Mondiale — Africa's Digital Infrastructure Deficit : Data Centers, Power Grids and Compute Sovereignty",
      date: "2026-10-22"
    },
    {
      url: "https://www.weforum.org/",
      label: "World Economic Forum — The Global Compute Gap and Africa's Less-than-1-Percent Data Center Share",
      date: "2026-10-28"
    },
    {
      url: "https://www.gsma.com/mobileeconomy/",
      label: "GSMA — The Mobile Economy Sub-Saharan Africa : Infrastructure Bottlenecks and Smartphone Penetration Paradox",
      date: "2026-11-01"
    }
  ],
  drafted_post: `Pourquoi l'Afrique est-elle encore en retard sur la technologie mondiale ?

La réponse facile consiste à parler du manque de diplômes, de la formation ou du manque d'intérêt de la jeunesse.
C'est un mensonge commode.

Le continent africain possède l'une des jeunesses les plus créatives du monde et détient le record mondial de l'adoption du paiement mobile.
Le problème n'a jamais été dans les cerveaux.

Le problème est enfoui sous terre, dans le béton et dans les câbles.

Voici la réalité crue documentée par l'Union Internationale des Télécommunications (UIT) et la Banque Mondiale :
L'Afrique représente 18 % de la population mondiale.
Mais elle détient moins de 1 % (exactement 0,7 %) de la capacité mondiale des centres de données et de calcul.

Tant que cette équation matérielle ne changera pas, notre retard technologique ne fera que s'aggraver.

Pourquoi sommes-nous coincés ?
1. L'illusion du smartphone consommateur :
Avoir un téléphone portable dans la poche ne fait pas de nous des acteurs technologiques. Nous consommons des logiciels hébergés à dix mille kilomètres, nous payons la bande passante au prix fort, et nous enrichissons des plateformes étrangères sans posséder la moindre brique de l'infrastructure sous-jacente.

2. L'obstacle fondamental de l'énergie :
La technologie moderne a soif d'électricité continue et refroidie. Un centre de données ne peut pas tolérer cinq minutes de coupure de courant par semaine. Tant que nos réseaux électriques nationaux restent instables, aucune entreprise locale ne peut héberger de supercalculateurs sans des coûts de générateurs prohibitifs.

3. La fiscalité punitive sur le matériel :
Dans la plupart de nos pays, importer un serveur, un routeur ou un ordinateur professionnel est taxé comme un bien de luxe avec des droits de douane allant de 30 % à 50 %. Nous taxons l'outil de production numérique au lieu d'en subventionner l'entrée massive.

4. L'exportation brute de nos données :
Chaque jour, les entreprises africaines envoient leurs données financières, médicales et commerciales sur des serveurs situés en Virginie ou à Francfort, avant de racheter à ces mêmes géants des services de traitement à prix d'or. Nous exportons notre matière grise numérique brute exactement comme nous exportions nos matières premières agricoles au siècle dernier.

La véritable fracture numérique n'est pas un manque d'idées ou d'applications mobiles.
C'est un gouffre d'infrastructures physiques.

On ne peut pas bâtir l'indépendance technologique d'un continent sur les disques durs des autres.

Tant que nous ne construirons pas nos propres centrales d'énergie, nos propres câbles terrestres et nos propres centres de calcul régionaux, nous resterons des spectateurs payants du progrès des autres.

À quand un véritable plan d'action africain pour exonérer totalement de taxes l'infrastructure matérielle et construire des centres de données souverains ?

#TechnologieAfrique #FractureNumérique #Infrastructures #SouverainetéNumérique #DataCenters #UIT #BanqueMondiale #IbogaLab`
};

export async function addIdea() {
  console.log("Insertion de l'idée 08 sur la fracture numérique globale dans Supabase...");
  const { error } = await supabase.from('ideas').upsert(idea08);
  if (error) {
    console.error('Erreur insertion:', error);
    throw error;
  }
  console.log('✓ Idée 08 insérée avec succès dans Supabase !');
}

if (process.argv[1] && process.argv[1].endsWith('addIdea08.js')) {
  addIdea().then(() => process.exit(0)).catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

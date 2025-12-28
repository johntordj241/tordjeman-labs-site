import { DashboardProject } from '../types/dashboard';

export const dashboardProjects: DashboardProject[] = [
  {
    id: 'fashionfusion',
    title: 'FashionFusion',
    description: 'Plateforme collaborative révolutionnaire qui relie stylistes émergents et consommateurs.',
    status: 'completed',
    progress: 100,
    impact: {
      'Réduction CO2': '-30%',
      'Designers': '500+',
      'Satisfaction': '95%'
    },
    nextPhase: 'Expansion internationale',
    lastUpdate: '2024-03-01',
    category: 'Mode Durable'
  },
  {
    id: 'fitlens',
    title: 'FitLens',
    description: 'Application mobile utilisant l\'IA pour analyser les besoins des utilisateurs.',
    status: 'in-progress',
    progress: 85,
    impact: {
      'Utilisateurs': '100k+',
      'Satisfaction': '95%',
      'Rétention': '80%'
    },
    nextPhase: 'Lancement v2.0',
    lastUpdate: '2024-03-10',
    category: 'Santé'
  },
  {
    id: 'manta-boat',
    title: 'Bateau Raie Manta',
    description: 'Prototype de bateau durable inspiré par la nature.',
    status: 'in-progress',
    progress: 70,
    impact: {
      'Efficacité': '+40%',
      'Émissions': '-45%'
    },
    nextPhase: 'Tests en mer',
    lastUpdate: '2024-03-12',
    category: 'Transport'
  },
  {
    id: 'zerowaste',
    title: 'ZeroWaste Industries',
    description: 'Usine de fabrication innovante sans déchets.',
    status: 'completed',
    progress: 100,
    impact: {
      'Déchets': '-100%',
      'Énergie': '85%'
    },
    nextPhase: 'Expansion',
    lastUpdate: '2024-02-28',
    category: 'Industrie'
  },
  {
    id: 'oceanguard',
    title: 'OceanGuard',
    description: 'Programme global de protection des écosystèmes marins.',
    status: 'in-progress',
    progress: 80,
    impact: {
      'Zones protégées': '1000km²',
      'Impact': '85%'
    },
    nextPhase: 'Extension zones',
    lastUpdate: '2024-03-08',
    category: 'Environnement'
  },
  {
    id: 'lifelong',
    title: 'LifeLong',
    description: 'Programme innovant axé sur la longévité et le bien-être.',
    status: 'planned',
    progress: 30,
    impact: {
      'Participants': '10k+',
      'Satisfaction': '92%'
    },
    nextPhase: 'Lancement pilote',
    lastUpdate: '2024-03-05',
    category: 'Santé'
  },
  {
    id: 'globalgrid',
    title: 'GlobalGrid',
    description: 'Réseau mondial d\'énergie renouvelable.',
    status: 'in-progress',
    progress: 60,
    impact: {
      'Couverture': '60%',
      'Efficacité': '95%'
    },
    nextPhase: 'Extension réseau',
    lastUpdate: '2024-03-07',
    category: 'Énergie'
  },
  {
    id: 'healthcloud',
    title: 'HealthCloud',
    description: 'Plateforme de santé connectée améliorant l\'accès aux soins.',
    status: 'completed',
    progress: 100,
    impact: {
      'Utilisateurs': '50k+',
      'Satisfaction': '96%'
    },
    nextPhase: 'Nouvelles fonctionnalités',
    lastUpdate: '2024-02-25',
    category: 'Santé'
  },
  {
    id: 'earthsustain',
    title: 'EarthSustain',
    description: 'Projet d\'agriculture régénératrice à grande échelle.',
    status: 'in-progress',
    progress: 75,
    impact: {
      'Surface traitée': '5000ha',
      'Biodiversité': '+75%'
    },
    nextPhase: 'Extension zones',
    lastUpdate: '2024-03-09',
    category: 'Agriculture'
  },
  {
    id: 'safecities',
    title: 'SafeCities',
    description: 'Initiative pour des infrastructures urbaines résilientes.',
    status: 'planned',
    progress: 25,
    impact: {
      'Villes': '10+',
      'Impact': '85%'
    },
    nextPhase: 'Pilote',
    lastUpdate: '2024-03-11',
    category: 'Innovation'
  },
  {
    id: 'ecotrans',
    title: 'EcoTrans',
    description: 'Solution de transport intelligent réduisant l\'empreinte carbone.',
    status: 'in-progress',
    progress: 65,
    impact: {
      'CO2 réduit': '-40%',
      'Efficacité': '+35%'
    },
    nextPhase: 'Tests terrain',
    lastUpdate: '2024-03-13',
    category: 'Transport'
  },
  {
    id: 'deepspace',
    title: 'DeepSpace',
    description: 'Projet d\'exploration spatiale commerciale.',
    status: 'planned',
    progress: 15,
    impact: {
      'Missions': '5+',
      'Innovation': '95%'
    },
    nextPhase: 'Prototypage',
    lastUpdate: '2024-03-14',
    category: 'Innovation'
  },
  {
    id: 'cleanocean',
    title: 'CleanOcean',
    description: 'Initiative globale pour la dépollution des océans.',
    status: 'in-progress',
    progress: 70,
    impact: {
      'Déchets collectés': '10000t',
      'Zones nettoyées': '500km²'
    },
    nextPhase: 'Extension zones',
    lastUpdate: '2024-03-10',
    category: 'Environnement'
  },
  {
    id: 'hydrogrid',
    title: 'HydroGrid',
    description: 'Réseau hydrique intelligent pour une gestion optimale des ressources en eau.',
    status: 'completed',
    progress: 100,
    impact: {
      'Économie d\'eau': '45%',
      'Efficacité': '90%'
    },
    nextPhase: 'Optimisation',
    lastUpdate: '2024-02-20',
    category: 'Environnement'
  },
  {
    id: 'greenpulse',
    title: 'GreenPulse',
    description: 'Réseau électrique éco-optimisé.',
    status: 'in-progress',
    progress: 55,
    impact: {
      'Énergie verte': '80%',
      'Optimisation': '95%'
    },
    nextPhase: 'Extension réseau',
    lastUpdate: '2024-03-12',
    category: 'Énergie'
  },
  {
    id: 'urbansphere',
    title: 'UrbanSphere',
    description: 'Modélisation de villes durables.',
    status: 'planned',
    progress: 20,
    impact: {
      'Projets pilotes': '3',
      'Impact social': '75%'
    },
    nextPhase: 'Prototypage',
    lastUpdate: '2024-03-15',
    category: 'Innovation'
  },
  {
    id: 'biocycle',
    title: 'BioCycle',
    description: 'Méthodes innovantes de gestion des déchets organiques.',
    status: 'in-progress',
    progress: 85,
    impact: {
      'Valorisation': '95%',
      'Réduction déchets': '85%'
    },
    nextPhase: 'Optimisation',
    lastUpdate: '2024-03-08',
    category: 'Environnement'
  },
  {
    id: 'franceville',
    title: 'Ferme Franceville',
    description: 'Initiative agricole en Afrique intégrant des pratiques écologiques.',
    status: 'completed',
    progress: 100,
    impact: {
      'Bénéficiaires': '1000+',
      'Production': '+150%'
    },
    nextPhase: 'Extension',
    lastUpdate: '2024-02-15',
    category: 'Agriculture'
  },
  {
    id: 'onelife',
    title: 'OneLife',
    description: 'Projet indépendant promouvant des solutions pour un avenir plus harmonieux.',
    status: 'in-progress',
    progress: 60,
    impact: {
      'Communauté': '25k+',
      'Engagement': '92%'
    },
    nextPhase: 'Expansion',
    lastUpdate: '2024-03-11',
    category: 'Innovation'
  },
  {
    id: 'aquarenew',
    title: 'AquaRenew',
    description: 'Technologies de purification et recyclage de l\'eau.',
    status: 'completed',
    progress: 100,
    impact: {
      'Eau traitée': '1M m³',
      'Efficacité': '99%'
    },
    nextPhase: 'Optimisation',
    lastUpdate: '2024-02-28',
    category: 'Environnement'
  },
  {
    id: 'solarflare',
    title: 'SolarFlare',
    description: 'Développement de panneaux solaires nouvelle génération.',
    status: 'in-progress',
    progress: 75,
    impact: {
      'Rendement': '+40%',
      'Durabilité': '25 ans'
    },
    nextPhase: 'Tests finaux',
    lastUpdate: '2024-03-13',
    category: 'Énergie'
  },
  {
    id: 'windwave',
    title: 'WindWave',
    description: 'Exploitation combinée de l\'énergie éolienne et des vagues.',
    status: 'planned',
    progress: 35,
    impact: {
      'Production': '+65%',
      'Fiabilité': '92%'
    },
    nextPhase: 'Prototypage',
    lastUpdate: '2024-03-14',
    category: 'Énergie'
  },
  {
    id: 'urbangreen',
    title: 'UrbanGreen',
    description: 'Intégration de jardins verticaux et toits végétalisés dans les villes.',
    status: 'in-progress',
    progress: 80,
    impact: {
      'Surface verte': '+2000m²',
      'CO2 absorbé': '15t/an'
    },
    nextPhase: 'Extension',
    lastUpdate: '2024-03-12',
    category: 'Environnement'
  },
  {
    id: 'tech4good',
    title: 'Tech4Good',
    description: 'Initiative dédiée à la création de technologies innovantes.',
    status: 'in-progress',
    progress: 70,
    impact: {
      'Projets': '50+',
      'Impact': '100k+'
    },
    nextPhase: 'Expansion',
    lastUpdate: '2024-03-15',
    category: 'Innovation'
  },
  {
    id: 'voicecrush',
    title: 'VoiceCrush',
    description: 'Réinvente les rencontres en ligne grâce à la voix et à l\'IA.',
    status: 'in-progress',
    progress: 65,
    impact: {
      'Utilisateurs': '1000+',
      'Engagement': '85%',
      'Satisfaction': '92%'
    },
    nextPhase: 'Tests utilisateurs',
    lastUpdate: '2024-03-15',
    category: 'Innovation'
  },
  {
    id: 'openfin',
    title: 'OpenFin',
    description: 'Finance décentralisée accessible et sécurisée grâce à la blockchain.',
    status: 'in-progress',
    progress: 45,
    impact: {
      'Transactions': '5000+',
      'Volume': '100k€',
      'Utilisateurs': '500+'
    },
    nextPhase: 'Phase bêta',
    lastUpdate: '2024-03-14',
    category: 'Finance'
  }
];
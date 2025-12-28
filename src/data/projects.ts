import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'fashionfusion',
    title: 'FashionFusion',
    description: 'Plateforme collaborative révolutionnaire qui relie stylistes émergents et consommateurs, mettant l\'accent sur l\'éthique et la durabilité.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    categories: ['Innovation', 'Durabilité'],
    status: 'completed',
    stats: {
      'Réduction CO2': '-30%',
      'Designers': '500+'
    }
  },
  {
    id: 'fitlens',
    title: 'FitLens',
    description: 'Application mobile utilisant l\'IA pour analyser les besoins des utilisateurs et fournir des recommandations personnalisées pour un mode de vie plus sain.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    categories: ['Santé', 'Technologie'],
    status: 'in-progress',
    stats: {
      'Utilisateurs': '100k+',
      'Satisfaction': '95%'
    }
  },
  {
    id: 'manta-boat',
    title: 'Bateau Raie Manta',
    description: 'Prototype de bateau durable inspiré par la nature, adoptant des mouvements biomimétiques pour maximiser l\'efficacité.',
    image: 'https://images.unsplash.com/photo-1530878902700-5ad4f9e4c318?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    categories: ['Innovation', 'Transport'],
    status: 'in-progress',
    stats: {
      'Efficacité': '+40%',
      'Émissions': '-45%'
    }
  },
  {
    id: 'zerowaste',
    title: 'ZeroWaste Industries',
    description: 'Usine de fabrication innovante sans déchets, conçue pour minimiser l\'empreinte écologique.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    categories: ['Durabilité'],
    status: 'completed',
    stats: {
      'Déchets réduits': '100%',
      'Énergie verte': '85%'
    }
  },
  {
    id: 'oceanguard',
    title: 'OceanGuard',
    description: 'Programme global de protection des écosystèmes marins, incluant la surveillance et la réduction des menaces environnementales.',
    image: 'https://images.unsplash.com/photo-1484291470158-b8f8d608850d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    categories: ['Océans', 'Durabilité'],
    status: 'in-progress',
    stats: {
      'Zones protégées': '1000km²',
      'Impact': '85%'
    }
  },
  {
    id: 'lifelong',
    title: 'LifeLong',
    description: 'Programme innovant axé sur la longévité et le bien-être, combinant recherche scientifique et pratiques holistiques.',
    image: 'https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    categories: ['Santé', 'Innovation'],
    status: 'planned',
    stats: {
      'Participants': '10k+',
      'Satisfaction': '92%'
    }
  },
  {
    id: 'globalgrid',
    title: 'GlobalGrid',
    description: 'Réseau mondial d\'énergie renouvelable pour fournir une énergie durable et efficace.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    categories: ['Énergie', 'Innovation'],
    status: 'in-progress',
    stats: {
      'Couverture': '60%',
      'Efficacité': '95%'
    }
  },
  {
    id: 'healthcloud',
    title: 'HealthCloud',
    description: 'Plateforme de santé connectée améliorant l\'accès aux soins et facilitant le partage sécurisé des données médicales.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    categories: ['Santé', 'Technologie'],
    status: 'completed',
    stats: {
      'Utilisateurs': '50k+',
      'Satisfaction': '96%'
    }
  },
  {
    id: 'earthsustain',
    title: 'EarthSustain',
    description: 'Projet d\'agriculture régénératrice à grande échelle pour restaurer les sols et augmenter la biodiversité.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    categories: ['Agriculture', 'Durabilité'],
    status: 'in-progress',
    stats: {
      'Surface traitée': '5000ha',
      'Biodiversité': '+75%'
    }
  },
  {
    id: 'safecities',
    title: 'SafeCities',
    description: 'Initiative pour des infrastructures urbaines résilientes répondant aux défis climatiques et sociaux.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    categories: ['Innovation', 'Social'],
    status: 'planned',
    stats: {
      'Villes': '10+',
      'Impact': '85%'
    }
  },
  {
    id: 'ecotrans',
    title: 'EcoTrans',
    description: 'Solution de transport intelligent réduisant l\'empreinte carbone tout en optimisant les flux logistiques.',
    image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    categories: ['Transport', 'Durabilité'],
    status: 'in-progress',
    stats: {
      'CO2 réduit': '-40%',
      'Efficacité': '+35%'
    }
  },
  {
    id: 'deepspace',
    title: 'DeepSpace',
    description: 'Projet d\'exploration spatiale commerciale, rendant l\'espace accessible et exploitable de manière responsable.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    categories: ['Innovation', 'Technologie'],
    status: 'planned',
    stats: {
      'Missions': '5+',
      'Innovation': '95%'
    }
  },
  {
    id: 'cleanocean',
    title: 'CleanOcean',
    description: 'Initiative globale pour la dépollution des océans, avec des technologies avancées pour protéger la vie marine.',
    image: 'https://images.unsplash.com/photo-1484291470158-b8f8d608850d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    categories: ['Océans', 'Durabilité'],
    status: 'in-progress',
    stats: {
      'Déchets collectés': '10000t',
      'Zones nettoyées': '500km²'
    }
  },
  {
    id: 'hydrogrid',
    title: 'HydroGrid',
    description: 'Réseau hydrique intelligent pour une gestion optimale des ressources en eau à travers l\'innovation technologique.',
    image: 'https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    categories: ['Énergie', 'Innovation'],
    status: 'completed',
    stats: {
      'Économie d\'eau': '45%',
      'Efficacité': '90%'
    }
  },
  {
    id: 'greenpulse',
    title: 'GreenPulse',
    description: 'Réseau électrique éco-optimisé intégrant des sources d\'énergie renouvelables et des technologies intelligentes.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    categories: ['Énergie', 'Durabilité'],
    status: 'in-progress',
    stats: {
      'Énergie verte': '80%',
      'Optimisation': '95%'
    }
  },
  {
    id: 'urbansphere',
    title: 'UrbanSphere',
    description: 'Modélisation de villes durables combinant écologie, technologie et qualité de vie pour un avenir urbain meilleur.',
    image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    categories: ['Innovation', 'Social'],
    status: 'planned',
    stats: {
      'Projets pilotes': '3',
      'Impact social': '75%'
    }
  },
  {
    id: 'biocycle',
    title: 'BioCycle',
    description: 'Méthodes innovantes de gestion des déchets organiques pour leur recyclage et valorisation dans une économie circulaire.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    categories: ['Durabilité'],
    status: 'in-progress',
    stats: {
      'Valorisation': '95%',
      'Réduction déchets': '85%'
    }
  },
  {
    id: 'franceville',
    title: 'Ferme Franceville',
    description: 'Initiative agricole en Afrique intégrant des pratiques écologiques et durables pour soutenir les communautés locales.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    categories: ['Agriculture', 'Social'],
    status: 'completed',
    stats: {
      'Bénéficiaires': '1000+',
      'Production': '+150%'
    }
  },
  {
    id: 'onelife',
    title: 'OneLife',
    description: 'Projet indépendant promouvant des solutions pour un avenir plus harmonieux et connecté.',
    image: 'https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    categories: ['Innovation', 'Social'],
    status: 'in-progress',
    stats: {
      'Communauté': '25k+',
      'Engagement': '92%'
    }
  },
  {
    id: 'aquarenew',
    title: 'AquaRenew',
    description: 'Technologies de purification et recyclage de l\'eau pour les zones à ressources limitées.',
    image: 'https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    categories: ['Innovation', 'Durabilité'],
    status: 'completed',
    stats: {
      'Eau traitée': '1M m³',
      'Efficacité': '99%'
    }
  },
  {
    id: 'solarflare',
    title: 'SolarFlare',
    description: 'Développement de panneaux solaires nouvelle génération à haute efficacité énergétique.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    categories: ['Énergie', 'Innovation'],
    status: 'in-progress',
    stats: {
      'Rendement': '+40%',
      'Durabilité': '25 ans'
    }
  },
  {
    id: 'windwave',
    title: 'WindWave',
    description: 'Exploitation combinée de l\'énergie éolienne et des vagues pour une production hybride et innovante.',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    categories: ['Énergie', 'Innovation'],
    status: 'planned',
    stats: {
      'Production': '+65%',
      'Fiabilité': '92%'
    }
  },
  {
    id: 'urbangreen',
    title: 'UrbanGreen',
    description: 'Intégration de jardins verticaux et toits végétalisés dans les villes pour améliorer la qualité de l\'air.',
    image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    categories: ['Durabilité', 'Innovation'],
    status: 'in-progress',
    stats: {
      'Surface verte': '+2000m²',
      'CO2 absorbé': '15t/an'
    }
  },
  {
    id: 'tech4good',
    title: 'Tech4Good',
    description: 'Initiative dédiée à la création de technologies innovantes répondant aux défis sociaux et environnementaux.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    categories: ['Innovation', 'Social'],
    status: 'in-progress',
    stats: {
      'Projets': '50+',
      'Impact': '100k+'
    }
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
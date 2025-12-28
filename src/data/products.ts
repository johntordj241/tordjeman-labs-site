import { Product } from '../types/market';

export const categories = [
  'Tous',
  'Développement et Design',
  'Automatisation et Productivité',
  'Analyse de Données et IA',
  'Gestion et Stockage de Données',
  'Stratégie Digitale et Marketing',
  'Intégrations et Services Cloud',
  'Services Créatifs et Interactifs',
  'Services Personnalisés'
];

export const products: Product[] = [
  {
    id: '1',
    title: 'Développement Web sur Mesure',
    description: 'Solutions web personnalisées avec les dernières technologies et les meilleures pratiques de développement.',
    price: 5000,
    category: 'Développement et Design',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    availability: 'on-demand'
  },
  {
    id: '2',
    title: 'Design UX/UI Professionnel',
    description: 'Création d\'interfaces utilisateur modernes et intuitives optimisées pour une expérience utilisateur exceptionnelle.',
    price: 3500,
    category: 'Développement et Design',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isPopular: false,
    availability: 'immediate'
  },
  {
    id: '3',
    title: 'Automatisation des Processus',
    description: 'Optimisez vos flux de travail grâce à nos solutions d\'automatisation intelligente.',
    price: 3000,
    category: 'Automatisation et Productivité',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isPopular: false,
    availability: 'immediate'
  },
  {
    id: '4',
    title: 'Gestion de Projet Automatisée',
    description: 'Solutions complètes pour automatiser et optimiser la gestion de vos projets.',
    price: 2500,
    category: 'Automatisation et Productivité',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    availability: 'immediate'
  },
  {
    id: '5',
    title: 'Analyse Prédictive IA',
    description: 'Exploitez la puissance de l\'IA pour prédire les tendances et optimiser vos décisions.',
    price: null,
    category: 'Analyse de Données et IA',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    availability: 'on-demand'
  },
  {
    id: '6',
    title: 'Machine Learning Solutions',
    description: 'Implémentation de solutions de machine learning personnalisées pour votre entreprise.',
    price: 8000,
    category: 'Analyse de Données et IA',
    image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isPopular: false,
    availability: 'on-demand'
  },
  {
    id: '7',
    title: 'Cloud Storage Enterprise',
    description: 'Solution de stockage cloud sécurisée et évolutive pour entreprises.',
    price: 2000,
    category: 'Gestion et Stockage de Données',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isPopular: false,
    availability: 'immediate'
  },
  {
    id: '8',
    title: 'Base de Données Optimisée',
    description: 'Conception et optimisation de bases de données pour des performances maximales.',
    price: 4000,
    category: 'Gestion et Stockage de Données',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    availability: 'immediate'
  },
  {
    id: '9',
    title: 'Stratégie Marketing Digital',
    description: 'Développez votre présence en ligne avec une stratégie marketing personnalisée.',
    price: 4000,
    category: 'Stratégie Digitale et Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    availability: 'on-demand'
  },
  {
    id: '10',
    title: 'SEO et Référencement',
    description: 'Optimisation pour les moteurs de recherche et amélioration de votre visibilité en ligne.',
    price: 2500,
    category: 'Stratégie Digitale et Marketing',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isPopular: false,
    availability: 'immediate'
  },
  {
    id: '11',
    title: 'Intégration API Cloud',
    description: 'Services d\'intégration pour connecter vos applications aux principaux services cloud.',
    price: 1500,
    category: 'Intégrations et Services Cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isPopular: false,
    availability: 'immediate'
  },
  {
    id: '12',
    title: 'Migration Cloud',
    description: 'Services de migration vers le cloud avec zéro temps d\'arrêt.',
    price: 6000,
    category: 'Intégrations et Services Cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    availability: 'on-demand'
  },
  {
    id: '13',
    title: 'Design UX/UI Interactif',
    description: 'Création d\'interfaces utilisateur modernes et intuitives.',
    price: 3500,
    category: 'Services Créatifs et Interactifs',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    availability: 'on-demand'
  },
  {
    id: '14',
    title: 'Animation 3D',
    description: 'Création d\'animations 3D pour vos projets digitaux.',
    price: 4500,
    category: 'Services Créatifs et Interactifs',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isPopular: false,
    availability: 'on-demand'
  },
  {
    id: '15',
    title: 'Conseil Technologique',
    description: 'Services de conseil personnalisés pour votre transformation digitale.',
    price: null,
    category: 'Services Personnalisés',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isPopular: false,
    availability: 'on-demand'
  },
  {
    id: '16',
    title: 'Formation Sur Mesure',
    description: 'Programmes de formation adaptés à vos besoins spécifiques.',
    price: 2000,
    category: 'Services Personnalisés',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    availability: 'on-demand'
  }
];
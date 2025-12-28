import React, { useState } from 'react';
import { Brain, Building2, Leaf, Tractor, Zap, Heart, Search, Filter } from 'lucide-react';
import InteractiveMap from '../components/sectors/InteractiveMap';
import SectorCard from '../components/sectors/SectorCard';
import SectorDetails from '../components/sectors/SectorDetails';

const sectors = [
  {
    id: 'ai',
    icon: Brain,
    title: 'Intelligence Artificielle',
    description: 'Solutions IA éthiques pour optimiser les processus et prendre des décisions éclairées.',
    project: {
      name: 'DataSense',
      description: 'Analyse prédictive pour la maintenance industrielle',
      impact: 'Réduction de 40% des pannes machines'
    },
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    stats: {
      efficiency: '+40%',
      cost: '-25%',
      satisfaction: '95%'
    }
  },
  {
    id: 'smart-cities',
    icon: Building2,
    title: 'Villes Intelligentes',
    description: 'Technologies urbaines pour améliorer la qualité de vie et réduire l\'impact environnemental.',
    project: {
      name: 'SmartGrid',
      description: 'Gestion intelligente de l\'éclairage urbain',
      impact: 'Économie de 30% sur la consommation énergétique'
    },
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    stats: {
      energy: '-30%',
      emissions: '-45%',
      coverage: '85%'
    }
  },
  {
    id: 'green-tech',
    icon: Leaf,
    title: 'Technologies Vertes',
    description: 'Innovations pour la protection de l\'environnement et la réduction des déchets.',
    project: {
      name: 'WasteZero',
      description: 'Système de tri intelligent des déchets',
      impact: 'Augmentation de 75% du taux de recyclage'
    },
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    stats: {
      waste: '-50%',
      recycling: '+75%',
      efficiency: '90%'
    }
  },
  {
    id: 'agriculture',
    icon: Tractor,
    title: 'Agriculture Durable',
    description: 'Solutions pour une agriculture respectueuse de l\'environnement et plus productive.',
    project: {
      name: 'AgroSmart',
      description: 'Irrigation intelligente et monitoring des cultures',
      impact: 'Réduction de 40% de la consommation d\'eau'
    },
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    stats: {
      water: '-40%',
      yield: '+35%',
      sustainability: '95%'
    }
  },
  {
    id: 'renewable-energy',
    icon: Zap,
    title: 'Énergies Renouvelables',
    description: 'Technologies pour optimiser la production et la distribution d\'énergie verte.',
    project: {
      name: 'HydroGrid',
      description: 'Optimisation des centrales hydroélectriques',
      impact: 'Augmentation de 60% de la production'
    },
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    stats: {
      production: '+60%',
      efficiency: '95%',
      coverage: '75%'
    }
  },
  {
    id: 'social-innovation',
    icon: Heart,
    title: 'Innovation Sociétale',
    description: 'Technologies au service de l\'impact social et environnemental positif.',
    project: {
      name: 'CleanOcean',
      description: 'Système de détection et collecte des déchets marins',
      impact: 'Plus de 10000 tonnes de déchets collectés'
    },
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    stats: {
      impact: '10000+',
      satisfaction: '98%',
      adoption: '85%'
    },
    highlight: true
  }
];

export default function Sectors() {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [showDetails, setShowDetails] = useState<string | null>(null);

  const filteredSectors = sectors.filter(sector => {
    const matchesSearch = sector.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sector.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || sector.id === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Secteurs d'Innovation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nous transformons les défis d'aujourd'hui en opportunités pour demain
          </p>
        </div>

        {/* Barre de recherche et filtres */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Rechercher un secteur..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-blue-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Tous les secteurs
              </button>
              {sectors.map((sector) => (
                <button
                  key={sector.id}
                  onClick={() => setFilter(sector.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === sector.id
                      ? 'bg-blue-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {sector.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grille des secteurs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredSectors.map((sector) => (
            <SectorCard
              key={sector.id}
              sector={sector}
              onMouseEnter={() => setSelectedSector(sector.title)}
              onMouseLeave={() => setSelectedSector(null)}
              onClick={() => setShowDetails(sector.id)}
            />
          ))}
        </div>

        {/* Carte interactive */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Impact Géographique
          </h2>
          <InteractiveMap selectedSector={selectedSector || undefined} />
        </div>

        {/* Modal des détails du secteur */}
        {showDetails && (
          <SectorDetails
            sector={sectors.find(s => s.id === showDetails)!}
            onClose={() => setShowDetails(null)}
          />
        )}
      </div>
    </div>
  );
}
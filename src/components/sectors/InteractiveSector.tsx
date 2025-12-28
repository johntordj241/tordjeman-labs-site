import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Building2, Leaf, Tractor, Zap, Heart } from 'lucide-react';

interface Sector {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  stats: {
    [key: string]: string;
  };
}

const sectors: Sector[] = [
  {
    id: 'ai',
    icon: Brain,
    title: 'Intelligence Artificielle',
    description: 'Solutions IA éthiques pour optimiser les processus et prendre des décisions éclairées.',
    stats: {
      'Projets réalisés': '50+',
      'Efficacité améliorée': '40%',
      'Satisfaction client': '95%'
    }
  },
  {
    id: 'smart-cities',
    icon: Building2,
    title: 'Villes Intelligentes',
    description: 'Technologies urbaines pour améliorer la qualité de vie et réduire l\'impact environnemental.',
    stats: {
      'Villes connectées': '10+',
      'Économie d\'énergie': '30%',
      'Réduction CO2': '45%'
    }
  },
  {
    id: 'green-tech',
    icon: Leaf,
    title: 'Technologies Vertes',
    description: 'Innovations pour la protection de l\'environnement et la réduction des déchets.',
    stats: {
      'Déchets réduits': '50%',
      'Recyclage amélioré': '75%',
      'Impact positif': '90%'
    }
  }
];

export default function InteractiveSector() {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nos Secteurs d'Innovation
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez nos domaines d'expertise et leur impact sur la société
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sectors.map((sector) => (
            <motion.div
              key={sector.id}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setSelectedSector(sector.id)}
              onHoverEnd={() => setSelectedSector(null)}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <sector.icon className="h-8 w-8 text-blue-900" />
                <h3 className="text-xl font-bold ml-3">{sector.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{sector.description}</p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: selectedSector === sector.id ? 1 : 0 }}
                className="grid grid-cols-2 gap-4"
              >
                {Object.entries(sector.stats).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-blue-900">{value}</div>
                    <div className="text-sm text-gray-600">{key}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
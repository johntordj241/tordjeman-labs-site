import React from 'react';
import { Lightbulb, Recycle, Shield } from 'lucide-react';

const features = [
  {
    name: 'Innovation Responsable',
    description: 'Développement de solutions technologiques qui respectent l\'environnement et la société.',
    icon: Lightbulb,
  },
  {
    name: 'Durabilité',
    description: 'Création de projets pensés pour un impact positif à long terme sur notre planète.',
    icon: Recycle,
  },
  {
    name: 'Éthique',
    description: 'Engagement fort pour une innovation respectueuse des valeurs humaines et environnementales.',
    icon: Shield,
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Notre Mission
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Transformer les défis d'aujourd'hui en opportunités pour un avenir meilleur
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute h-12 w-12 rounded-md bg-blue-900 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
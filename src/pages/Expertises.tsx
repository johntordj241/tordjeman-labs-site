import React from 'react';
import { Brain, Building2, Leaf, Shield, Activity, Network } from 'lucide-react';

const expertiseAreas = [
  {
    title: 'IA responsable et souveraine',
    description:
      'Conception d’algorithmes explicables, audit de jeux de données et gouvernance des modèles pour les secteurs public et régulé.',
    icon: Brain,
    focus: ['Systèmes hybrides homme-machine', 'Evaluation éthique des modèles', 'Label de confiance']
  },
  {
    title: 'Territoires résilients',
    description:
      'Observation continue des signaux faibles urbains pour anticiper les risques climatiques, sanitaires et sociaux.',
    icon: Building2,
    focus: ['Jumeaux sobres des infrastructures', 'Tableaux de bord territoriaux', 'Accompagnement des exécutifs locaux']
  },
  {
    title: 'Santé intégrative et prévention',
    description:
      'Approches transdisciplinaires mêlant sciences du vivant, comportements et design de services pour renforcer la prévention.',
    icon: Activity,
    focus: ['Parcours patients augmentés', 'Bio-indicateurs contextualisés', 'Communautés apprenantes']
  },
  {
    title: 'Transition énergétique et biomimétisme',
    description:
      'Études systèmes pour décarboner les chaînes de valeur critiques en s’inspirant du vivant et des communs énergétiques.',
    icon: Leaf,
    focus: ['Ingénierie frugale', 'Boucles locales d’énergie', 'Certification d’impact']
  },
  {
    title: 'Sécurité, confiance et gouvernance des données',
    description:
      'Cadres de référence et architectures zero-trust pour protéger les actifs immatériels et les coopérations sensibles.',
    icon: Shield,
    focus: ['Cartographie des dépendances', 'Plans directeurs cybersécurité', 'Playbooks de réponse']
  },
  {
    title: 'Écosystèmes et coalitions',
    description:
      'Dispositifs de collaboration public-privé pour accélérer la mise à l’échelle des preuves de concept.',
    icon: Network,
    focus: ['Sourcing partenaires', 'Studios de co-conception', 'Partage de capital immatériel']
  }
];

export default function Expertises() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-blue-900 font-semibold mb-3">
            Axes d’expertise
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Des capacités au service des transitions institutionnelles
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Chaque axe associe recherche appliquée, observation terrain et cadres éthiques afin de
            livrer des livrables stratégiques directement actionnables par les directions générales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseAreas.map((area) => (
            <div key={area.title} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <span className="p-3 rounded-xl bg-blue-50 text-blue-900">
                  <area.icon className="h-6 w-6" />
                </span>
                <h2 className="ml-4 text-2xl font-semibold text-gray-900">{area.title}</h2>
              </div>
              <p className="text-gray-600 mb-6">{area.description}</p>
              <div className="space-y-2">
                {area.focus.map(point => (
                  <div
                    key={point}
                    className="flex items-center text-sm text-gray-700 bg-gray-50 rounded-lg px-4 py-2"
                  >
                    <span className="mr-3 h-2 w-2 rounded-full bg-blue-900" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Lightbulb, Recycle, Shield } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'Innovation responsable',
    description:
      'Observer, prototyper et évaluer sans surpromesse technologique, avec un souci constant de sobriété et de transparence.'
  },
  {
    icon: Shield,
    title: 'Cadres éthiques opposables',
    description:
      'Chaque mission s’appuie sur une charte, un comité indépendant et un dispositif de traçabilité des décisions.'
  },
  {
    icon: Recycle,
    title: 'Durabilité systémique',
    description:
      'Approche transdisciplinaire combinant sciences du vivant, design des politiques publiques et sécurité des données.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-900 font-semibold mb-3">
            Notre mission
          </p>
          <h2 className="text-3xl font-bold text-gray-900">Une vitrine institutionnelle assumée</h2>
          <p className="mt-4 text-lg text-gray-600">
            Le site public partage uniquement les orientations stratégiques. Les outils applicatifs
            demeurent dans l’atelier interne sécurisé.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
              <feature.icon className="h-10 w-10 text-blue-900 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

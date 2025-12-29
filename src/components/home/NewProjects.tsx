import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Activity } from 'lucide-react';

const programmes = [
  {
    id: 'atlas-biocites',
    title: 'Atlas Biocités',
    description:
      'Programme d’observation des corridors écologiques urbains pour aider les collectivités à préparer leurs documents d’urbanisme.',
    icon: Globe,
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
    status: 'Observation continue 2024-2025',
    outcomes: [
      'Tableaux de bord territoriaux frugaux',
      'Ateliers en binôme avec les agences d’urbanisme',
      'Notes d’aide à la décision transmises aux élus'
    ]
  },
  {
    id: 'veille-sante',
    title: 'Veille Santé intégrative',
    description:
      'Approche croisant sciences du vivant et sciences sociales pour renforcer la prévention dans les territoires ultramarins.',
    icon: Activity,
    image:
      'https://images.unsplash.com/photo-1456189777792-3af569c773f0?auto=format&fit=crop&w=1200&q=80',
    status: 'Phase d’analyse partagée',
    outcomes: [
      'Référentiels de prévention contextualisés',
      'Parcours patients augmentés par la donnée qualitative',
      'Feuilles de route remises aux ARS partenaires'
    ]
  }
];

export default function NewProjects() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Programmes d’étude en cours</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ces travaux sont menés dans des environnements sécurisés. Le site public ne présente que
            des synthèses pour éclairer les partenaires et futurs mandats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programmes.map((programme) => (
            <motion.div
              key={programme.id}
              whileHover={{ scale: 1.01 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="relative h-64">
                <img
                  src={programme.image}
                  alt={programme.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-3 mb-2">
                    <programme.icon className="h-6 w-6" />
                    <h3 className="text-2xl font-bold">{programme.title}</h3>
                  </div>
                  <p className="text-sm text-white/80">{programme.status}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-4">{programme.description}</p>
                <ul className="space-y-2">
                  {programme.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start text-sm text-gray-600">
                      <ArrowRight className="h-4 w-4 text-blue-900 mr-2 mt-0.5" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

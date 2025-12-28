import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mic, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';

const newProjects = [
  {
    id: 'voicecrush',
    title: 'VoiceCrush',
    description: 'Réinvente les rencontres en ligne grâce à la voix et à l\'IA.',
    icon: Mic,
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    status: 'En développement',
    features: [
      'Enregistrements vocaux personnalisés',
      'Algorithme intelligent de correspondance',
      'Communication via messagerie vocale',
      'Profils interactifs'
    ]
  },
  {
    id: 'openfin',
    title: 'OpenFin',
    description: 'Finance décentralisée accessible et sécurisée grâce à la blockchain.',
    icon: Wallet,
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    status: 'Modules clés opérationnels',
    features: [
      'Paiements P2P sécurisés',
      'Prêts décentralisés',
      'Portefeuille numérique tout-en-un',
      'Technologie blockchain avancée'
    ]
  }
];

export default function NewProjects() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nouveaux Projets en Développement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les initiatives les plus récentes de Tordjeman Labs, conçues pour transformer des idées novatrices en solutions concrètes et durables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {newProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-3 text-white mb-2">
                    <project.icon className="h-6 w-6" />
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-gray-200">{project.description}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {project.status}
                  </span>
                </div>

                <h4 className="font-semibold mb-3">Fonctionnalités clés :</h4>
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-900" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="btn w-full justify-center">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="btn inline-flex items-center"
          >
            Découvrez tous nos projets
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
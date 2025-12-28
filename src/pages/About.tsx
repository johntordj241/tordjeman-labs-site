import React from 'react';
import { Users, Target, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Innovation Responsable',
    description: 'Nous développons des solutions qui répondent aux défis actuels tout en préservant les ressources pour les générations futures.'
  },
  {
    icon: Heart,
    title: 'Engagement Éthique',
    description: 'Chaque décision est guidée par notre engagement envers l\'éthique et la responsabilité sociale.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Nous croyons en la force de la collaboration et du partage des connaissances pour créer un impact positif.'
  }
];

export default function About() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Fondateur */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Notre Histoire</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une vision audacieuse pour un avenir durable
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Georges John Tordjeman"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-blue-900/10 rounded-lg"></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Georges John Tordjeman</h2>
              <p className="text-gray-600 mb-6">
                Visionnaire et entrepreneur passionné, Georges John Tordjeman a fondé Tordjeman Labs avec une mission claire : 
                créer des solutions technologiques qui répondent aux défis environnementaux et sociaux de notre temps.
              </p>
              <p className="text-gray-600">
                Fort de son expertise en innovation durable et en développement technologique, il dirige l'entreprise vers 
                des solutions qui allient performance et responsabilité environnementale.
              </p>
            </div>
          </div>
        </div>

        {/* Section Valeurs */}
        <div className="bg-gray-50 py-16 rounded-2xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident chacune de nos actions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-xl shadow-sm">
                <value.icon className="h-12 w-12 text-blue-900 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
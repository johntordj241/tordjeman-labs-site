import React from 'react';
import { Leaf, Heart, Globe, ArrowRight } from 'lucide-react';

const impacts = [
  {
    icon: Leaf,
    title: 'Impact Environnemental',
    description: 'Nos solutions ont permis de réduire significativement l\'empreinte carbone de nos clients.',
    stat: '1000+',
    label: 'Tonnes de CO2 économisées'
  },
  {
    icon: Heart,
    title: 'Impact Social',
    description: 'Nous contribuons activement à l\'inclusion numérique et à la formation technologique.',
    stat: '500+',
    label: 'Personnes formées'
  },
  {
    icon: Globe,
    title: 'Innovation Durable',
    description: 'Nos projets sont conçus pour avoir un impact positif à long terme sur la société.',
    stat: '50+',
    label: 'Projets durables'
  }
];

export default function SocialImpact() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Notre Impact Sociétal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chez Tordjeman Labs, nous mesurons notre succès par l'impact positif 
            que nous générons sur la société et l'environnement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((impact) => (
            <div
              key={impact.title}
              className="bg-gray-50 rounded-xl p-8 text-center transition-transform hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <impact.icon className="h-8 w-8 text-blue-900" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {impact.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {impact.description}
              </p>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="text-3xl font-bold text-blue-900 mb-1">
                  {impact.stat}
                </div>
                <div className="text-sm text-gray-600">
                  {impact.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/engagement-societal"
            className="btn inline-flex items-center"
          >
            Découvrir nos engagements
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
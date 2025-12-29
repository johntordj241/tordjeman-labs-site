import React from 'react';
import { Leaf, Heart, Globe, ArrowRight } from 'lucide-react';

const impacts = [
  {
    icon: Leaf,
    title: 'Transition écologique',
    description:
      'Veille continue sur les solutions bas carbone et accompagnement des villes dans la planification climatique.',
    stat: '12',
    label: 'territoires suivis'
  },
  {
    icon: Heart,
    title: 'Impact social',
    description:
      'Programmes d’inclusion numérique et structuration des données sensibles aux côtés des ONG.',
    stat: '25',
    label: 'organisations accompagnées'
  },
  {
    icon: Globe,
    title: 'Innovation durable',
    description:
      'Notes d’orientation remises aux institutions européennes pour sécuriser l’adoption d’outils émergents.',
    stat: '8',
    label: 'publications partagées'
  }
];

export default function SocialImpact() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos engagements mesurables</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Les indicateurs publiés ici sont agrégés à partir de missions finalisées. Ils ne
            dévoilent pas les outils internes, mais attestent de notre exigence de transparence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((impact) => (
            <div
              key={impact.title}
              className="bg-gray-50 rounded-xl p-8 text-center border border-gray-100 shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <impact.icon className="h-8 w-8 text-blue-900" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{impact.title}</h3>
              <p className="text-gray-600 mb-6">{impact.description}</p>

              <div className="border-t border-gray-200 pt-6">
                <div className="text-3xl font-bold text-blue-900 mb-1">{impact.stat}</div>
                <div className="text-sm text-gray-600">{impact.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="/cadres-ethiques" className="btn inline-flex items-center">
            Consulter nos cadres
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

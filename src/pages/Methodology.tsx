import React from 'react';
import { Compass, Target, Layers, Repeat, Award } from 'lucide-react';

const steps = [
  {
    title: 'Exploration & signaux faibles',
    description:
      'Analyse documentaire, immersion terrain et entretiens croisés pour comprendre les points de bascule et clarifier le mandat.',
    icon: Compass,
    deliverables: ['Cartographie des risques/opportunités', 'Hypothèses partagées', 'Priorisation des sujets sensibles']
  },
  {
    title: 'Cadres éthiques et critères décisionnels',
    description:
      'Formalisation des principes de responsabilité, de transparence et d’inclusion propres à l’organisation.',
    icon: Target,
    deliverables: ['Matrice de décision', 'Comité d’arbitrage', 'Traçabilité des engagements']
  },
  {
    title: 'Modélisation & prototypage frugal',
    description:
      'Scénarisation rapide sous formes de canevas, récits utilisateurs ou démonstrateurs fonctionnels sobres.',
    icon: Layers,
    deliverables: ['Jumeaux conceptuels', 'Expériences guidées', 'Critères de passage en pilote']
  },
  {
    title: 'Itération encadrée',
    description:
      'Pilotes ciblés avec métriques qualitatives et quantitatives pour confirmer l’intérêt stratégique avant industrialisation.',
    icon: Repeat,
    deliverables: ['Journal d’apprentissage', 'Feuilles de route par direction', 'Recommandations budgétaires']
  },
  {
    title: 'Capitalisation & transfert',
    description:
      'Transmission des méthodes, formation des binômes internes et articulation avec l’atelier privé Tordjeman Labs.',
    icon: Award,
    deliverables: ['Guides opérationnels', 'Sessions de montée en compétence', 'Plan d’autonomie']
  }
];

export default function Methodology() {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-900 font-semibold mb-3">
            Méthodologie
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Une démarche sobre, documentée et transférable
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nous combinons prospective, design stratégique et sciences du vivant pour livrer des
            feuille-de-routes exploitables dès le comité de direction, sans biais technosolutionniste.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row md:items-start gap-6"
            >
              <div className="flex items-center md:w-1/4">
                <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-blue-50 text-blue-900">
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-xs uppercase tracking-wide text-gray-400">Étape {index + 1}</p>
                  <h2 className="text-xl font-semibold text-gray-900">{step.title}</h2>
                </div>
              </div>

              <div className="md:flex-1">
                <p className="text-gray-600">{step.description}</p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                  {step.deliverables.map(deliverable => (
                    <div
                      key={deliverable}
                      className="bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-700 border border-gray-100"
                    >
                      {deliverable}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

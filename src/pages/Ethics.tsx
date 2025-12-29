import React from 'react';
import { Scale, ShieldCheck, Users, FileCheck } from 'lucide-react';

const commitments = [
  {
    title: 'Charte Éthique Tordjeman Labs',
    description:
      'Document opposable décrivant les principes d’équité, de durabilité et de sobriété qui encadrent chaque mission.',
    icon: FileCheck
  },
  {
    title: 'Comité de vigilance pluridisciplinaire',
    description:
      'Experts externes en sciences sociales, droit, santé et technologie sollicités à chaque étape critique.',
    icon: Users
  },
  {
    title: 'Évaluations d’impact systématiques',
    description:
      'Matrices d’anticipation couvrant risques environnementaux, sociétaux et géopolitiques avant toute mise à l’échelle.',
    icon: Scale
  },
  {
    title: 'Protection des connaissances sensibles',
    description:
      'Dispositifs contractuels et techniques garantissant la confidentialité des données partagées au sein de l’atelier interne.',
    icon: ShieldCheck
  }
];

export default function Ethics() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-900 font-semibold mb-3">
            Cadres éthiques
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Un socle commun pour sécuriser l’innovation
          </h1>
          <p className="text-lg text-gray-600">
            Nous considérons l’éthique comme une discipline de projet à part entière. Elle structure
            la relation avec nos partenaires publics, privés et associatifs dès l’amorçage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {commitments.map((item) => (
            <div key={item.title} className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-gray-50">
              <div className="flex items-center mb-4">
                <span className="p-3 rounded-xl bg-blue-100 text-blue-900">
                  <item.icon className="h-5 w-5" />
                </span>
                <h2 className="ml-4 text-xl font-semibold text-gray-900">{item.title}</h2>
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 text-white rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-semibold mb-4">Interface avec l’atelier interne</h2>
          <p className="text-blue-100 mb-6">
            Les expérimentations avancées sont conduites dans un environnement privé, cloisonné
            juridiquement et techniquement. Seuls les décideurs mandatés y accèdent, via des règles
            d’authentification fortes et un suivi de conformité continu.
          </p>
          <p className="text-sm text-blue-100">
            Le site public présente les orientations stratégiques. Toute fonctionnalité applicative
            (tableaux de bord, IDE, KPI, outils de simulation) reste confinée dans l’atelier interne
            sécurisé.
          </p>
        </div>
      </div>
    </div>
  );
}

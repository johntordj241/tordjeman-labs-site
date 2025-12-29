import React from 'react';
import { Handshake, TimerReset, Shield, PenTool, Users } from 'lucide-react';

const phases = [
  {
    title: 'Diagnostic express (2 à 3 semaines)',
    description:
      'Prise de connaissance rapide, entretiens ciblés et consolidation des enjeux pour décider si une collaboration est pertinente.',
    icon: TimerReset
  },
  {
    title: 'Accord cadre & confidentialité',
    description:
      'Définition des périmètres, gouvernance conjointe et clauses de protection des données avant toute production sensible.',
    icon: Shield
  },
  {
    title: 'Atelier mixte',
    description:
      'Équipe réduite (8 à 10 personnes) combinant experts Tordjeman Labs et décideurs clients pour piloter les investigations.',
    icon: Users
  },
  {
    title: 'Livrables stratégiques',
    description:
      'Notes d’orientation, feuilles de route et dispositifs d’évaluation prêts à être partagés en comités exécutifs.',
    icon: PenTool
  }
];

export default function Collaboration() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-900 font-semibold mb-3">
            Modalités de collaboration
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Une relation claire, contractualisée et réversible
          </h1>
          <p className="text-lg text-gray-600">
            Le site public présente notre positionnement. Toute expérimentation est conduite dans un
            espace privé sécurisé, accessible uniquement aux équipes mandatées.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-10">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-2xl bg-blue-50 text-blue-900">
              <Handshake className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-semibold text-gray-900">Principes directeurs</h2>
              <p className="text-gray-600">
                Sobriété, réversibilité, traçabilité des décisions et partage équitable de la valeur.
              </p>
            </div>
          </div>
          <ul className="space-y-2 text-gray-700 list-disc pl-6">
            <li>Pas de promesse fonctionnelle publique : les démonstrateurs restent internes.</li>
            <li>Chaque mission dispose d’un référent éthique indépendant.</li>
            <li>Les livrables sont fournis sous licence adaptée (Creative Commons ou propriétaire).</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {phases.map((phase) => (
            <div key={phase.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-900">
                  <phase.icon className="h-5 w-5" />
                </div>
                <h3 className="ml-4 text-lg font-semibold text-gray-900">{phase.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

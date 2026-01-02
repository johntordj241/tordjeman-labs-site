import React from 'react';
import { BookOpen, Compass, Layers, ShieldCheck, Target } from 'lucide-react';

const researchAxes = [
  {
    title: 'Intelligence artificielle et mémoires longues',
    question:
      'Comment préserver la continuité stratégique des décideurs sans dépendre d’outils opaques ou changeants ?',
    focus: [
      'Design souverain de copilotes documentés dans TAI-Systeme, avec gouvernance éditoriale maîtrisée.',
      'Protocoles comparatifs pour mesurer fidélité contextuelle, latence et sobriété pour chaque mandat.'
    ]
  },
  {
    title: 'Cybersécurité et infrastructures sociétales',
    question:
      'Comment offrir une protection proportionnée aux structures intermédiaires sans sur-promesse applicative ?',
    focus: [
      'Cadres de résilience appliqués aux réseaux publics / privés, auditables par les directions générales.',
      'Référentiels d’alerte et de rapports compatibles avec une vitrine publique strictement figée.'
    ]
  },
  {
    title: 'Méthodologies et gouvernance multipartite',
    question:
      'Comment maintenir la rigueur documentaire lorsque plusieurs coalitions travaillent sans outil partagé ?',
    focus: [
      'Approche PROMPTS A-Z : audits de capacité outil, diagnostics d’état, checklists qualité.',
      'Lien constant entre vitrine publique, atelier privé et espaces confidentiels, sans confusion de périmètre.'
    ]
  }
];

const scenarios = [
  {
    horizon: 'Horizon 2026-2028',
    items: [
      'Généralisation des dispositifs IA à mémoire longue, avec exigences accrues en traçabilité.',
      'Cybersécurité démocratisée pour PME / ETI : cadres simples, auditables, compatibles RGPD.',
      'Renforcement des comités d’éthique pour toute automatisation touchant le public.'
    ]
  },
  {
    horizon: 'Horizon 2028-2035',
    items: [
      'Systèmes autonomes audités publiquement et transparents par construction.',
      'Souveraineté numérique européenne : hébergement critique local, standards ouverts généralisés.',
      'Modèles économiques post-croissance intégrant sobriété, durabilité et responsabilité.'
    ]
  }
];

const investigations = [
  {
    title: 'Programme TAI-Systeme',
    description:
      'Cadre conceptuel pour copilote stratégique à mémoire persistante, intégralement documenté côté atelier privé.',
    note: 'Statut : capitalisation interne, diffusion publique limitée aux axes validés.'
  },
  {
    title: 'Référentiel Corex',
    description:
      'Approche de cybersécurité proportionnée destinée aux structures intermédiaires, focalisée sur la gouvernance et la conformité.',
    note: 'Statut : documentation consolidée, partage réservé aux partenaires mandatés.'
  },
  {
    title: 'Cadre PROMPTS A-Z',
    description:
      'Méthode de finalisation de projets alliant audits, diagnostics d’état et plans de transfert vers Notion.',
    note: 'Statut : ressource vivante alimentée dans TAI-Systeme, non exposée en production.'
  }
];

const collaborationItems = [
  'Publications co-signées (notes, working papers, synthèses).',
  'Thèses ou programmes académiques sous clauses de confidentialité.',
  'Mises à disposition encadrées de jeux de données anonymisés.',
  'Co-construction de scénarios prospectifs au sein de comités restreints.'
];

export default function Research() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-900 font-semibold mb-3">
            Recherche & prospective
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Veille long-termiste reliée au hub stratégique
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cette page partage uniquement les axes autorisés. L’intégralité des travaux détaillés,
            décisions et jeux de données est pilotée hors site via TAI-Systeme. Aucune interface
            applicative n’est exposée publiquement.
          </p>
        </div>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
          <div className="flex items-start space-x-4">
            <Compass className="h-8 w-8 text-blue-900" />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Axes d’observation</h2>
              <div className="space-y-6">
                {researchAxes.map((axis) => (
                  <div key={axis.title} className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{axis.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{axis.question}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {axis.focus.map((item) => (
                        <div key={item} className="bg-white rounded-xl border border-gray-100 p-4 text-sm text-gray-600">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
          <div className="flex items-start space-x-4">
            <ShieldCheck className="h-8 w-8 text-blue-900" />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Scénarios prospectifs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {scenarios.map((scenario) => (
                  <div key={scenario.horizon} className="bg-gray-50 rounded-2xl p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-blue-900 font-semibold mb-3">
                      {scenario.horizon}
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {scenario.items.map((item) => (
                        <li key={item} className="flex items-start space-x-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-900" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
          <div className="flex items-start space-x-4">
            <Layers className="h-8 w-8 text-blue-900" />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Axes capitalisables</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {investigations.map((investigation) => (
                  <div key={investigation.title} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{investigation.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{investigation.description}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-blue-900">{investigation.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex items-start space-x-4">
            <BookOpen className="h-8 w-8 text-blue-900" />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cadre partenarial</h2>
              <p className="text-sm text-gray-600 mb-6">
                Les collaborations scientifiques ou institutionnelles sont orchestrées depuis TAI-Systeme.
                La vitrine publique relaie uniquement les éléments validés. Aucun outil, IDE ou tableau
                de bord n’est exposé ici.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {collaborationItems.map((item) => (
                  <li key={item} className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600 border border-gray-100">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a href="/publications" className="btn inline-flex items-center">
                  Consulter les publications autorisées
                  <Target className="ml-2 h-4 w-4" />
                </a>
                <a href="/modalites-collaboration" className="btn-outline inline-flex items-center text-sm font-semibold">
                  Modalités de collaboration
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

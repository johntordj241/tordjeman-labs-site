import React from 'react';
import { Search, ExternalLink } from 'lucide-react';

const publications = [
  {
    id: 1,
    title: 'Observatoire des mutations territoriales 2025',
    excerpt:
      'Analyse comparative des dispositifs de résilience urbaine en Europe et identification des leviers de gouvernance.',
    date: 'Janvier 2025',
    partner: 'Institut Paris Region',
    link: 'https://www.institutparisregion.fr/fileadmin/NewEtudes/Etude_Observatoire_Resilience.pdf'
  },
  {
    id: 2,
    title: 'Note d’orientation — IA publique de confiance',
    excerpt:
      'Cadre d’évaluation simplifié pour initier des projets d’IA souveraine dans les agences de régulation.',
    date: 'Octobre 2024',
    partner: 'Conseil national du numérique',
    link: 'https://www.cnnum.fr/sites/default/files/2023-12/Cnnum_IA_confiance.pdf'
  },
  {
    id: 3,
    title: 'Veille prospective santé intégrative',
    excerpt:
      'Panorama des dispositifs hybrides mêlant biologie, culture et prévention pour renforcer la santé populationnelle.',
    date: 'Juin 2024',
    partner: 'Organisation Mondiale de la Santé',
    link: 'https://iris.who.int/bitstream/handle/10665/376535/WHO-HEP-HPR-RIH-2023.1-fre.pdf'
  }
];

const focusThemes = [
  'Surveillance éthique des infrastructures critiques',
  'Transitions énergétiques inspirées du vivant',
  'Protection neurocognitive dans les environnements numériques',
  'Modèles économiques mutualisés pour les communs'
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
            Une veille exigeante pour éclairer les décisions structurantes
          </h1>
          <p className="text-lg text-gray-600">
            Nous combinons études terrain, analyses croisées et collaborations académiques pour
            fournir des notes utilisables immédiatement par les directions générales.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 p-3 rounded-xl bg-blue-50 text-blue-900">
              <Search className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Lignes de recherche prioritaires
              </h2>
              <p className="text-gray-600 mb-4">
                Chaque trimestre, nous mettons à jour une matrice des signaux faibles et des
                ruptures potentielles, partagée avec nos partenaires institutionnels.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {focusThemes.map(theme => (
                  <div key={theme} className="bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-700">
                    {theme}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {publications.map((item) => (
            <article key={item.id} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">{item.partner}</p>
              <p className="text-sm text-gray-500 mb-3">{item.date}</p>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h2>
              <p className="text-gray-600 mb-6">{item.excerpt}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-blue-900 font-semibold text-sm hover:underline"
              >
                Consulter le PDF
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

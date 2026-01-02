import React from 'react';
import { Download } from 'lucide-react';

const documents = [
  {
    title: 'Guide stratégique — Gouvernance de l’IA dans le secteur public',
    description:
      'Méthodes concrètes pour cadrer l’expérimentation de l’IA, définir les responsabilités et instaurer des revues régulières.',
    year: 2025,
    link: 'https://publications.europa.eu/resource/cellar/1d90d38c-d0d3-11ee-b0bb-01aa75ed71a1.0001.03/DOC_1.pdf',
    theme: 'IA & régulation'
  },
  {
    title: 'Manuel de résilience énergétique',
    description:
      'Retour d’expérience sur la mise en place de boucles locales d’énergie pour les campus et zones portuaires.',
    year: 2024,
    link: 'https://wedocs.unep.org/bitstream/handle/20.500.11822/9988/GEO5_report_full_en.pdf',
    theme: 'Transition énergétique'
  },
  {
    title: 'Cadre de collaboration avec les ONG d’intérêt général',
    description:
      'Protocoles juridiques et éthiques pour co-développer des solutions numériques avec des partenaires associatifs.',
    year: 2024,
    link: 'https://www.oecd.org/gov/open-government/OG-Principles-FR.pdf',
    theme: 'Coalitions'
  }
];

export default function Publications() {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-900 font-semibold mb-3">
            Publications
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sélection de documents accessibles librement
          </h1>
          <p className="text-lg text-gray-600">
            Chaque publication est accompagnée d’une note d’appropriation lors de nos missions. Les
            documents détaillant l’atelier interne sont transmis uniquement sur mandat.
          </p>
        </div>

        <div className="space-y-6">
          {documents.map((doc) => (
            <div key={doc.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400">{doc.theme}</p>
                <h2 className="text-2xl font-semibold text-gray-900 mt-1">{doc.title}</h2>
                <p className="text-gray-600 mt-2">{doc.description}</p>
                <p className="text-sm text-gray-500 mt-2">Édition {doc.year}</p>
              </div>
              <a
                href={doc.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 transition-colors"
              >
                Télécharger le PDF
                <Download className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Besoin d’un accès élargi ?</h2>
          <p className="text-gray-600 mb-4">
            Certaines publications restent réservées aux partenaires disposant d’un accord de
            confidentialité. Écrivez à{' '}
            <a href="mailto:editions@tordjemanlabs.com" className="text-blue-900 font-semibold">
              editions@tordjemanlabs.com
            </a>{' '}
            pour recevoir la table des matières sécurisée.
          </p>
        </div>
      </div>
    </div>
  );
}

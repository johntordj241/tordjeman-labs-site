import React from 'react';
import { ClipboardList, FileSignature, Handshake, Layers3, Shield, Users } from 'lucide-react';

const principles = [
  {
    title: 'Sélectivité',
    description:
      'Nous accompagnons uniquement les partenaires dont la gouvernance, la souveraineté et la vision long terme sont alignées avec celles du hub.'
  },
  {
    title: 'Clarté contractuelle',
    description:
      'Chaque mission fait l’objet d’un périmètre écrit : livrables, responsabilités, propriété intellectuelle, clauses de sortie.'
  },
  {
    title: 'Documentation exhaustive',
    description:
      'Rapports, matrices de décision, registres de conformité : tout est consigné afin d’assurer la réversibilité et le suivi par TAI-Systeme.'
  },
  {
    title: 'Intégrité éthique',
    description:
      'Aucun mandat ne peut contrevenir à nos lignes rouges (surveillance de masse, manipulation comportementale, captation non consentie de données, double usage non maîtrisé).'
  }
];

const collaborationTypes = [
  {
    title: 'Programmes de recherche appliquée',
    audience: 'Universités, laboratoires publics, organismes de recherche.',
    format: ['Partenariat académique ou convention de recherche.', 'Co-publication encadrée.', 'Financement public possible (ANR, Europe).'],
    conditions: [
      'Publication des résultats validés (sauf clause confidentielle justifiée).',
      'Propriété intellectuelle partagée ou ouverte.',
      'Pas d’exclusivité abusive.'
    ]
  },
  {
    title: 'Missions d’architecture stratégique',
    audience: 'PME, ETI, institutions publiques.',
    format: ['Cadrage conjoint', 'Livraisons séquencées', 'Transfert méthodologique vers les équipes internes.'],
    conditions: [
      'Budget défini avant lancement.',
      'Validation par jalons.',
      'Documentation complète remise aux décideurs compétents.'
    ]
  },
  {
    title: 'Conseil & gouvernance',
    audience: 'Directions générales, comités exécutifs, investisseurs.',
    format: ['Audit organisationnel ou technologique.', 'Benchmark d’outils / cadres.', 'Formation ciblée.'],
    conditions: [
      'Missions courtes (1 à 3 mois).',
      'Livrable écrit systématique.',
      'Aucun engagement opérationnel prolongé sans nouveau mandat.'
    ]
  },
  {
    title: 'Financement ciblé',
    audience: 'Fonds d’impact, business angels alignés, programmes publics.',
    format: ['Participation minoritaire décrite dans le CDC.', 'Financement fléché sur un projet défini.', 'Transparence sur l’usage des fonds.'],
    conditions: [
      'Pas de clause de sortie agressive.',
      'Gouvernance documentée et traçable.',
      'Vérification éthique préalable.'
    ]
  }
];

const accessLevels = [
  {
    title: 'Niveau public',
    description: 'Contenus publiés sur la vitrine, accessibles à tous. Exemple : cadres PROMPTS A-Z, veille IA souveraine.'
  },
  {
    title: 'Niveau privé',
    description:
      'Travaux en cours pilotés dans TAI-Systeme (Notion). Diffusion restreinte aux acteurs mandatés jusqu’à validation officielle.'
  },
  {
    title: 'Niveau confidentiel',
    description:
      'Projets sensibles soumis à NDA, comités fermés et archivage séparé. Exemple : architectures clients, R&D critique.'
  }
];

const processSteps = [
  {
    title: '1. Prise de contact',
    content:
      'Envoyer un courriel à contact@tordjemanlabs.com ou info@tordjemanlabs.com (objet : [Collaboration]) avec présentation de la structure, objectifs, périmètre et budget indicatif.'
  },
  {
    title: '2. Évaluation initiale',
    content: 'Réponse sous 5 à 7 jours ouvrés : GO (entretien), NO-GO (motivé), ou EN ATTENTE (informations complémentaires).'
  },
  {
    title: '3. Cadrage',
    content: 'Si GO, séance structurée afin de valider l’alignement stratégique, préciser le périmètre et établir une proposition.'
  },
  {
    title: '4. Contractualisation',
    content: 'Co-rédaction de l’accord, validation juridique si nécessaire, signature et démarrage encadré.'
  }
];

const exclusions = [
  'Projets sans documentation structurée.',
  'Maintenance long terme sans contrat dédié.',
  'Mandats incompatibles avec nos lignes éthiques.',
  'Engagements flous ou illimités.',
  'Travail non rémunéré hors recherche publique encadrée.'
];

const tariffs = [
  { label: 'Audit technique / organisationnel', range: '1 500 – 3 000 € HT selon périmètre.' },
  { label: 'Mission d’architecture ou cadrage', range: 'Budget fixé lors du devis (après diagnostic).' },
  { label: 'Conseil stratégique', range: '800 € HT / jour.' },
  { label: 'Formation / ateliers restreints', range: '1 200 € HT / jour.' }
];

export default function Collaboration() {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-900 font-semibold mb-3">Modalités de collaboration</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Un cadre institutionnel, sélectif et documenté</h1>
          <p className="text-lg text-gray-600">
            Le hub reste figé côté public. Toute collaboration active se déroule hors site, sous gouvernance TAI-Systeme,
            avec clauses strictes de confidentialité.
          </p>
        </div>

        <section className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-10">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-2xl bg-blue-50 text-blue-900">
              <Shield className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-semibold text-gray-900">Principes directeurs</h2>
              <p className="text-gray-600">Chaque mandat respecte les règles du CDC v2.0 et reste entièrement documenté.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {principles.map((principle) => (
              <div key={principle.title} className="rounded-2xl border border-gray-100 p-4 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{principle.title}</h3>
                <p className="text-sm text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6 mb-10">
          {collaborationTypes.map((type) => (
            <div key={type.title} className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Handshake className="h-5 w-5 text-blue-900 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
              </div>
              <p className="text-sm text-gray-500 mb-2">Public concerné : {type.audience}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-blue-900 font-semibold mb-2">Format</p>
                  <ul className="space-y-1 text-sm text-gray-600 list-disc pl-5">
                    {type.format.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-blue-900 font-semibold mb-2">Conditions</p>
                  <ul className="space-y-1 text-sm text-gray-600 list-disc pl-5">
                    {type.conditions.map((condition) => (
                      <li key={condition}>{condition}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="bg-white rounded-3xl border border-gray-100 p-8 mb-10">
          <div className="flex items-center mb-6">
            <Layers3 className="h-6 w-6 text-blue-900 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">Niveaux d’accès projet</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {accessLevels.map((level) => (
              <div key={level.title} className="rounded-2xl border border-gray-100 p-5 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{level.title}</h3>
                <p className="text-sm text-gray-600">{level.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-gray-100 p-8 mb-10">
          <div className="flex items-center mb-6">
            <ClipboardList className="h-6 w-6 text-blue-900 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">Processus de candidature</h2>
          </div>
          <div className="space-y-4">
            {processSteps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-gray-100 p-4 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.content}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-gray-100 p-8 mb-10">
          <div className="flex items-center mb-6">
            <FileSignature className="h-6 w-6 text-blue-900 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">Ce que nous refusons</h2>
          </div>
          <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
            {exclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="bg-white rounded-3xl border border-gray-100 p-8">
          <div className="flex items-center mb-6">
            <Users className="h-6 w-6 text-blue-900 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">Repères tarifaires 2025</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tariffs.map((tariff) => (
              <div key={tariff.label} className="rounded-2xl border border-gray-100 p-5 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{tariff.label}</h3>
                <p className="text-sm text-gray-600">{tariff.range}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Barème indicatif, ajusté selon la nature du mandat (recherche publique, impact social, coopération internationale).
          </p>
        </section>
      </div>
    </div>
  );
}

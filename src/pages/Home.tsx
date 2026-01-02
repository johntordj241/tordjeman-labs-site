import React from 'react';
import { ArrowRight, Shield, BookText, Users, Layers, Network, PenTool, Compass, Gavel } from 'lucide-react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProjectCarousel from '../components/home/ProjectCarousel';
import NewProjects from '../components/home/NewProjects';
import SocialImpact from '../components/home/SocialImpact';

const hubPoles = [
  {
    title: 'Recherche prospective',
    description:
      'Surveillance des signaux faibles, synthèses interdisciplinaires, partage restreint aux décideurs mandatés.',
    icon: Layers
  },
  {
    title: 'Cadrage stratégique',
    description:
      'Formalisation des scénarios, sélection des engagements et rédaction des notes d’orientation officielles.',
    icon: PenTool
  },
  {
    title: 'Orchestration & gouvernance',
    description:
      'Mise en cohérence des comités, suivi des engagements et application stricte des cadres éthiques.',
    icon: Gavel
  },
  {
    title: 'Écosystèmes confidentiels',
    description:
      'Relations ciblées avec institutions, ONG et partenaires privés, sans exposition publique des travaux.',
    icon: Network
  }
];

const principles = [
  {
    title: 'Souveraineté intellectuelle',
    description: 'Indépendance des analyses, maîtrise des sources et confidentialité garantie.'
  },
  {
    title: 'Rigueur méthodologique',
    description: 'Documentation exhaustive, comités de validation, traçabilité assumée.'
  },
  {
    title: 'Éthique et responsabilité',
    description: 'Cadres opposables définis avant toute action, audités en continu.'
  },
  {
    title: 'Vision durable',
    description: 'Arbitrages orientés long terme (environnemental, social, économique).'
  }
];

const domains = [
  {
    title: 'Recherche & prospective',
    description: 'Veille transdisciplinaire, scénarios, identification des signaux faibles.'
  },
  {
    title: 'Cadrage stratégique',
    description: 'Notes d’orientation, feuilles de route, arbitrages structurants.'
  },
  {
    title: 'Gouvernance & coalitions',
    description: 'Comités de décision, alignement des parties prenantes, dispositifs de confiance.'
  }
];

const approach = [
  {
    title: 'Observation',
    description: 'Collecte qualitative, analyses comparées, structuration des enjeux.'
  },
  {
    title: 'Cadrage',
    description: 'Synthèses stratégiques, formalisation des hypothèses, préparation des comités.'
  },
  {
    title: 'Orchestration',
    description: 'Coordination des acteurs mandatés, gouvernance éthique, suivi des engagements.'
  },
  {
    title: 'Capitalisation',
    description: 'Restitutions formalisées, mémoire des décisions, recommandations activables.'
  }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-900 font-semibold mb-3">
            Mission
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Hub d’orchestration stratégique</h2>
          <p className="text-lg text-gray-600">
            Tordjeman Labs observe les transitions systémiques, structure les arbitrages de long
            terme et relie recherche, cadrage, gouvernance et coalitions. La vitrine publique partage
            les orientations validées tandis que l’atelier privé reste hors exposition.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-200 font-semibold mb-3">
            Identité visuelle
          </p>
          <h2 className="text-3xl font-bold mb-4">Animation officielle du sceau Tordjeman Labs</h2>
          <p className="text-lg text-blue-100 mb-8">
            Cette animation est partagée uniquement pour illustrer l’univers de marque. Elle ne
            dévoile aucun outil de l’atelier interne.
          </p>
          <div className="aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-xl">
            <iframe
              src="https://player.vimeo.com/video/1150144011?title=0&byline=0&portrait=0"
              title="Animation du logo Tordjeman Labs"
              allow="autoplay; fullscreen; picture-in-picture"
              loading="lazy"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.4em] text-blue-900 font-semibold mb-3">
              Principes fondateurs
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Une posture fondée sur la souveraineté, la rigueur et l’éthique
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nos engagements guident l’ensemble des travaux menés dans le hub et dans l’atelier
              privé.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {principles.map((principle) => (
              <div key={principle.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <Shield className="h-8 w-8 text-blue-900 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{principle.title}</h3>
                <p className="text-sm text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.4em] text-blue-900 font-semibold mb-3">
              Cartographie du hub
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tordjeman Labs, hub d’orchestration stratégique
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nous articulons quatre pôles complémentaires. Ils s’alimentent mutuellement mais ne
              donnent lieu à aucune interface publique.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hubPoles.map((pole) => (
              <div key={pole.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-900">
                    <pole.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{pole.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{pole.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.4em] text-blue-900 font-semibold mb-3">
              Domaines d’intervention
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ce que nous observons et cadrons</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {domains.map((domain) => (
              <div key={domain.title} className="rounded-2xl border border-gray-100 shadow-sm p-6">
                <BookText className="h-6 w-6 text-blue-900 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{domain.title}</h3>
                <p className="text-sm text-gray-600">{domain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.4em] text-blue-900 font-semibold mb-3">
              Approche
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Un cycle récurrent, documenté</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {approach.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-gray-100 shadow-sm p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-blue-900 font-semibold mb-2">
                  Étape {index + 1}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/expertises" className="btn inline-flex items-center">
              Découvrir nos axes
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="/cadres-ethiques"
              className="btn-outline inline-flex items-center text-sm font-semibold"
            >
              Cadres éthiques
              <Compass className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <ProjectCarousel />
      <NewProjects />
      <SocialImpact />

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-200 font-semibold mb-3">
            Rôle de hub
          </p>
          <h2 className="text-3xl font-bold mb-4">Interface discrète entre institutions et ateliers</h2>
          <p className="text-blue-100 mb-6">
            Tordjeman Labs agit comme médiateur entre institutions publiques, partenaires privés et
            acteurs associatifs. La vitrine partage les orientations validées ; les travaux sensibles
            restent pilotés dans TAI-Systeme (Notion) et ne sont jamais exposés.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/modalites-collaboration" className="btn">
              Modalités de collaboration
            </a>
            <a href="/contact" className="btn-outline text-white border-white/60 hover:bg-white/10">
              Contact institutionnel
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

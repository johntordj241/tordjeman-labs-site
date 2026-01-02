import React from 'react';
import { Users, Target, ShieldCheck } from 'lucide-react';
import logo from '../assets/logo.png';

const values = [
  {
    icon: Target,
    title: 'Lucidité stratégique',
    description:
      'Apporter des analyses franches, même lorsqu’elles remettent en question une trajectoire ou un choix technologique.'
  },
  {
    icon: ShieldCheck,
    title: 'Intégrité et protection',
    description:
      'Garantir la confidentialité absolue des informations partagées et refuser toute promesse fonctionnelle non tenue.'
  },
  {
    icon: Users,
    title: 'Coalitions durables',
    description:
      'Créer des alliances équilibrées entre institutions, ONG, industriels et chercheurs pour accélérer la mise en œuvre.'
  }
];

export default function About() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-900 font-semibold mb-3">
            À propos
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hub d’orchestration fondé par Georges John Tordjeman</h1>
          <p className="text-lg text-gray-600">
            Laboratoire indépendant installé à Nice, Tordjeman Labs observe les transitions
            systémiques et soutient les dirigeants dans leurs arbitrages de long terme. Cette vitrine
            reflète notre posture ; l’atelier privé, piloté via TAI-Systeme (Notion), demeure hors exposition.
          </p>
          <p className="mt-6 text-base text-gray-500">
            Notre signature : discernement, continuité, responsabilité. Nous privilégions une parole
            rare et fiable à toute promesse opérationnelle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
              alt="Équipe Tordjeman Labs"
              className="rounded-3xl shadow-lg"
            />
            <div className="absolute inset-0 rounded-3xl border-2 border-blue-900/20 pointer-events-none" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Une gouvernance claire</h2>
            <p className="text-gray-600 mb-4">
              Les contenus publiés sont préparés dans cette instance. Les scénarios, arbitrages et
              décisions détaillés se déroulent dans l’atelier privé, sous accords dédiés.
            </p>
            <p className="text-gray-600">
              Cette séparation garantit la cohérence entre la parole institutionnelle et la
              protection des travaux sensibles.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-10 space-y-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <img
              src={logo}
              alt="Emblème Tordjeman Labs"
              className="h-16 w-auto object-contain"
              loading="lazy"
            />
            <p className="text-gray-600 text-sm text-center sm:text-left">
              Le sceau de Tordjeman Labs est réservé aux communications officielles. Sa diffusion
              publique reste limitée à cette vitrine afin de préserver l’intégrité de l’atelier privé.
            </p>
          </div>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos engagements</h2>
            <p className="text-gray-600">
              Trois principes structurent l’ensemble de nos mandats, qu’ils soient publics ou menés
              dans l’atelier interne.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <value.icon className="h-10 w-10 text-blue-900 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

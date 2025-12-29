import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply" />
      </div>

      <div className="relative z-10 pt-32 pb-16 sm:pt-48 sm:pb-24 lg:pt-64 lg:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.6em] text-blue-100 mb-6">
            Vitrine institutionnelle
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            L’innovation éthique au service des décisions publiques et privées
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-100 mb-12">
            Tordjeman Labs accompagne les dirigeants dans l’analyse des transitions critiques et la
            mise en œuvre de stratégies sobres, sans exposer l’atelier interne au grand public.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/expertises"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-blue-900 bg-white hover:bg-gray-100 transition-colors duration-300"
            >
              Découvrir nos axes
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/cadres-ethiques"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/40 text-base font-medium rounded-full text-white hover:bg-white/10 transition-colors duration-300"
            >
              Cadres éthiques
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

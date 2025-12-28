import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply" />
      </div>

      <div className="relative z-10 pt-32 pb-16 sm:pt-48 sm:pb-24 lg:pt-64 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            L'innovation éthique au service<br />d'un futur durable
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-200 mb-12">
            Nous développons des solutions innovantes et responsables pour répondre aux défis de demain, en plaçant l'éthique et la durabilité au cœur de notre démarche.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-gray-100 transition-colors duration-300"
            >
              Découvrir nos projets
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
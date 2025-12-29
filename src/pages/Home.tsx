import React from 'react';
import { ArrowRight, Compass, Shield, Users } from 'lucide-react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProjectCarousel from '../components/home/ProjectCarousel';
import NewProjects from '../components/home/NewProjects';
import SocialImpact from '../components/home/SocialImpact';

const quickLinks = [
  {
    title: 'Axes d’expertise',
    description: 'Cartographie des domaines que nous accompagnons au quotidien.',
    icon: Compass,
    href: '/expertises'
  },
  {
    title: 'Méthodologie & cadres',
    description: 'Une démarche sobre et documentée, sans promesse fonctionnelle superflue.',
    icon: Shield,
    href: '/methodologie'
  },
  {
    title: 'Modalités de collaboration',
    description: 'Processus d’accès à l’atelier interne sécurisé.',
    icon: Users,
    href: '/modalites-collaboration'
  }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="group bg-gray-50 p-6 rounded-xl hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="flex items-center space-x-4">
                  <link.icon className="h-8 w-8 text-blue-900" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-900">
                      {link.title}
                    </h3>
                    <p className="text-sm text-gray-600">{link.description}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-blue-900 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
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

      <ProjectCarousel />
      <NewProjects />
      <SocialImpact />
    </div>
  );
}

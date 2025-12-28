import React from 'react';
import { ArrowRight, Rocket, Leaf, Users } from 'lucide-react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProjectCarousel from '../components/home/ProjectCarousel';
import NewProjects from '../components/home/NewProjects';
import SocialImpact from '../components/home/SocialImpact';

const quickLinks = [
  {
    title: 'Projets Innovants',
    description: 'Découvrez nos dernières innovations',
    icon: Rocket,
    href: '/projects'
  },
  {
    title: 'Solutions & Services',
    description: 'Explorez notre marketplace',
    icon: Leaf,
    href: '/market'
  },
  {
    title: 'Partenariats',
    description: 'Collaborons ensemble',
    icon: Users,
    href: '/contact'
  }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      
      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="group bg-gray-50 p-6 rounded-lg hover:bg-blue-50 transition-colors duration-300"
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

      {/* Featured Projects Carousel */}
      <ProjectCarousel />

      {/* New Projects Section */}
      <NewProjects />

      {/* Social Impact Section */}
      <SocialImpact />
    </div>
  );
}
import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Tordjeman Labs</h3>
            <p className="text-sm leading-relaxed">
              Cette plateforme est la vitrine institutionnelle du laboratoire. Les outils
              opérationnels demeurent dans un espace privé sécurisé et ne sont jamais exposés ici.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Nous contacter</h3>
            <div className="space-y-2">
              <a href="mailto:contact@tordjeman-labs.com" className="flex items-center hover:text-white">
                <Mail className="h-5 w-5 mr-2" />
                contact@tordjeman-labs.com
              </a>
              <a href="tel:+33100000000" className="flex items-center hover:text-white">
                <Phone className="h-5 w-5 mr-2" />
                +33 1 84 80 22 00
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Ressources</h3>
            <p className="text-sm mb-3">
              Publications, notes d’orientation et cadres éthiques sont accessibles sur les pages
              dédiées. Les environnements collaboratifs restent strictement confidentiels.
            </p>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm font-semibold text-white hover:underline"
            >
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Tordjeman Labs — Site public. Atelier interne accessible sur invitation uniquement.
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { Download, ArrowRight } from 'lucide-react';

const freeResources = [
  {
    id: 1,
    title: 'Guide de l\'IA Éthique',
    description: 'Introduction aux principes de l\'IA responsable',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    downloads: 1200
  },
  {
    id: 2,
    title: 'Livre Blanc : Technologies Vertes',
    description: 'État des lieux et perspectives d\'avenir',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    downloads: 850
  }
];

export default function FreeResourcesSection() {
  return (
    <section className="bg-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8 rounded-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Ressources Gratuites
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Découvrez nos ressources gratuites pour commencer votre parcours d'apprentissage
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {freeResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <div className="flex items-start space-x-4">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-blue-100 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-200">
                      {resource.downloads} téléchargements
                    </span>
                    <button className="flex items-center text-white hover:text-blue-200 transition-colors">
                      <Download className="h-4 w-4 mr-2" />
                      Télécharger
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center">
            Voir toutes les ressources gratuites
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
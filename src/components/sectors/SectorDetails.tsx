import React from 'react';
import { X, ArrowRight, ExternalLink } from 'lucide-react';

interface SectorDetailsProps {
  sector: {
    id: string;
    icon: React.ElementType;
    title: string;
    description: string;
    project: {
      name: string;
      description: string;
      impact: string;
    };
    image: string;
    stats: {
      [key: string]: string;
    };
  };
  onClose: () => void;
}

const SectorDetails: React.FC<SectorDetailsProps> = ({ sector, onClose }) => {
  const Icon = sector.icon;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Icon className="h-6 w-6 text-blue-900" />
            <h2 className="text-2xl font-bold text-gray-900">{sector.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Hero Image */}
          <div className="relative h-64 rounded-lg overflow-hidden mb-8">
            <img
              src={sector.image}
              alt={sector.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Description */}
          <div className="prose max-w-none mb-8">
            <h3 className="text-xl font-bold mb-4">Vue d'ensemble</h3>
            <p className="text-gray-600">{sector.description}</p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {Object.entries(sector.stats).map(([key, value]) => (
              <div key={key} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-blue-900">{value}</div>
                <div className="text-sm text-gray-600 capitalize">
                  {key.replace(/_/g, ' ')}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Project */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Projet Phare</h3>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-bold text-blue-900 mb-2">
                {sector.project.name}
              </h4>
              <p className="text-gray-600 mb-4">{sector.project.description}</p>
              <div className="flex items-center space-x-2 text-green-600 font-medium">
                <span>Impact:</span>
                <span>{sector.project.impact}</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex space-x-4">
            <button className="btn flex-1">
              Collaborer avec nous
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="btn-outline flex-1">
              Télécharger la documentation
              <ExternalLink className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorDetails;
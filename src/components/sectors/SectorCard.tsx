import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SectorCardProps {
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
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

const SectorCard: React.FC<SectorCardProps> = ({ sector, onMouseEnter, onMouseLeave, onClick }) => {
  const Icon = sector.icon;

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div className="relative h-48">
        <img
          src={sector.image}
          alt={sector.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center space-x-3 text-white mb-2">
            <Icon className="h-6 w-6" />
            <h3 className="text-xl font-bold">{sector.title}</h3>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-4">{sector.description}</p>

        <div className="border-t border-gray-200 pt-4">
          <h4 className="font-semibold mb-2">Projet phare</h4>
          <div className="bg-gray-50 rounded-lg p-4">
            <h5 className="font-medium text-blue-900 mb-1">{sector.project.name}</h5>
            <p className="text-sm text-gray-600 mb-2">{sector.project.description}</p>
            <p className="text-sm font-medium text-green-600">{sector.project.impact}</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4">
          {Object.entries(sector.stats).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-lg font-bold text-blue-900">{value}</div>
              <div className="text-xs text-gray-600 capitalize">
                {key.replace(/_/g, ' ')}
              </div>
            </div>
          ))}
        </div>

        <button className="btn-outline w-full justify-center mt-6">
          En savoir plus
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default SectorCard;
import React from 'react';
import { X, Download } from 'lucide-react';

interface PreviewModalProps {
  resource: {
    title: string;
    description: string;
    price: number;
  };
  onClose: () => void;
}

export default function PreviewModal({ resource, onClose }: PreviewModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Aperçu: {resource.title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="prose max-w-none mb-8">
          <h4 className="text-lg font-semibold mb-4">À propos de cette ressource</h4>
          <p className="text-gray-600">{resource.description}</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-semibold mb-4">Contenu de l'aperçu</h4>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border border-gray-200">
              <h5 className="font-medium mb-2">Introduction</h5>
              <p className="text-sm text-gray-600">
                Découvrez les concepts clés et la structure de cette ressource...
              </p>
            </div>
            <div className="bg-white p-4 rounded border border-gray-200">
              <h5 className="font-medium mb-2">Chapitre 1 (extrait)</h5>
              <p className="text-sm text-gray-600">
                Plongez dans les fondamentaux avec cet extrait du premier chapitre...
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-blue-900">{resource.price}€</span>
            <span className="text-sm text-gray-500 ml-2">Prix complet</span>
          </div>
          <button className="btn flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Acheter maintenant
          </button>
        </div>
      </div>
    </div>
  );
}
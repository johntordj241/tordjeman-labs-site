import React, { useState } from 'react';
import { Book, Star, Eye, Download, Play, Headphones } from 'lucide-react';
import PaymentModal from './PaymentModal';
import PreviewModal from './PreviewModal';

interface Resource {
  id: string;
  type: 'ebook' | 'course' | 'podcast';
  title: string;
  subtitle: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  preview: boolean;
  duration?: string;
  episodes?: number;
}

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const [showPayment, setShowPayment] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const getIcon = () => {
    switch (resource.type) {
      case 'ebook':
        return Book;
      case 'course':
        return Play;
      case 'podcast':
        return Headphones;
      default:
        return Book;
    }
  };

  const Icon = getIcon();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={resource.image}
          alt={resource.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-blue-900 text-white text-sm rounded-full">
            {resource.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center mb-2">
          <Icon className="h-5 w-5 text-blue-900 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">{resource.title}</h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">{resource.subtitle}</p>

        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="ml-1 text-sm font-medium">{resource.rating}</span>
          </div>
          <span className="text-sm text-gray-500">({resource.reviews} avis)</span>
        </div>

        {resource.type === 'podcast' && resource.episodes && (
          <div className="text-sm text-gray-600 mb-4">
            {resource.episodes} épisodes • {resource.duration}
          </div>
        )}

        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-blue-900">{resource.price}€</span>
          {resource.preview && (
            <button
              onClick={() => setShowPreview(true)}
              className="flex items-center text-sm text-blue-900 hover:text-blue-700"
            >
              <Eye className="h-4 w-4 mr-1" />
              Aperçu gratuit
            </button>
          )}
        </div>

        <div className="space-y-2">
          <button
            onClick={() => setShowPayment(true)}
            className="btn w-full justify-center"
          >
            <Download className="h-4 w-4 mr-2" />
            {resource.type === 'podcast' ? 'S\'abonner' : 'Acheter maintenant'}
          </button>
        </div>
      </div>

      {showPayment && (
        <PaymentModal
          resource={resource}
          onClose={() => setShowPayment(false)}
          onSuccess={() => {
            setShowPayment(false);
            // Handle successful payment
          }}
        />
      )}

      {showPreview && (
        <PreviewModal
          resource={resource}
          onClose={() => setShowPreview(false)}
        />
      )}
    </div>
  );
};

export default ResourceCard;
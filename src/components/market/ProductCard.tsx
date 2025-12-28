import React from 'react';
import { Star, ShoppingCart, Heart, BarChart2 } from 'lucide-react';
import { Product } from '../../types/market';

interface ProductCardProps {
  product: Product;
  onAddToWishlist?: (product: Product) => void;
  onAddToComparison?: (product: Product) => void;
}

export default function ProductCard({ product, onAddToWishlist, onAddToComparison }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        {product.isPopular && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <Star className="h-4 w-4 mr-1" />
            Populaire
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-blue-900">
            {product.price ? `${product.price}€` : 'Sur devis'}
          </span>
          <span className="text-sm text-gray-500">
            {product.availability === 'immediate' ? 'Disponible immédiatement' : 'Sur demande'}
          </span>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => onAddToWishlist?.(product)}
            className="flex-1 btn-outline flex items-center justify-center"
          >
            <Heart className="h-4 w-4 mr-2" />
            Favoris
          </button>
          <button 
            onClick={() => onAddToComparison?.(product)}
            className="flex-1 btn-outline flex items-center justify-center"
          >
            <BarChart2 className="h-4 w-4 mr-2" />
            Comparer
          </button>
        </div>
      </div>
    </div>
  );
}
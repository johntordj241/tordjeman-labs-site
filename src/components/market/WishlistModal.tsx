import React from 'react';
import { X, Heart } from 'lucide-react';
import { Product } from '../../types/market';

interface WishlistModalProps {
  wishlist: Product[];
  onClose: () => void;
  onRemove: (product: Product) => void;
}

export default function WishlistModal({ wishlist, onClose, onRemove }: WishlistModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold flex items-center">
            <Heart className="h-5 w-5 mr-2 text-red-500" />
            Mes Favoris
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        {wishlist.length === 0 ? (
          <p className="text-center text-gray-600">Votre liste de favoris est vide</p>
        ) : (
          <div className="space-y-4">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-semibold">{product.title}</h4>
                    <p className="text-sm text-gray-600">{product.price ? `${product.price}€` : 'Sur devis'}</p>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(product)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
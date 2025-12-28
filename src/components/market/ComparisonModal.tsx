import React from 'react';
import { X, Check } from 'lucide-react';
import { Product } from '../../types/market';

interface ComparisonModalProps {
  products: Product[];
  onClose: () => void;
  onRemove: (product: Product) => void;
}

export default function ComparisonModal({ products, onClose, onRemove }: ComparisonModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Comparaison des Services</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        {products.length === 0 ? (
          <p className="text-center text-gray-600">
            Sélectionnez des services à comparer
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Caractéristiques</th>
                  {products.map((product) => (
                    <th key={product.id} className="px-4 py-2">
                      <div className="flex flex-col items-center">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-24 h-24 object-cover rounded mb-2"
                        />
                        <span className="font-semibold">{product.title}</span>
                        <button
                          onClick={() => onRemove(product)}
                          className="text-red-500 hover:text-red-700 mt-2"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 font-semibold">Prix</td>
                  {products.map((product) => (
                    <td key={product.id} className="px-4 py-2 text-center">
                      {product.price ? `${product.price}€` : 'Sur devis'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Catégorie</td>
                  {products.map((product) => (
                    <td key={product.id} className="px-4 py-2 text-center">
                      {product.category}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Disponibilité</td>
                  {products.map((product) => (
                    <td key={product.id} className="px-4 py-2 text-center">
                      {product.availability === 'immediate' ? 'Immédiate' : 'Sur demande'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Populaire</td>
                  {products.map((product) => (
                    <td key={product.id} className="px-4 py-2 text-center">
                      {product.isPopular ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
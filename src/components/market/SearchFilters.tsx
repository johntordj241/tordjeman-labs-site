import React from 'react';
import { Search } from 'lucide-react';
import RcSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface SearchFiltersProps {
  searchTerm: string;
  selectedCategory: string;
  priceRange: [number, number];
  availability: string;
  categories: string[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onPriceRangeChange: (value: [number, number]) => void;
  onAvailabilityChange: (value: string) => void;
}

export default function SearchFilters({
  searchTerm,
  selectedCategory,
  priceRange,
  availability,
  categories,
  onSearchChange,
  onCategoryChange,
  onPriceRangeChange,
  onAvailabilityChange,
}: SearchFiltersProps) {
  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Search */}
        <div className="md:col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Rechercher un produit ou service..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <select
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Availability Filter */}
        <div>
          <select
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={availability}
            onChange={(e) => onAvailabilityChange(e.target.value)}
          >
            <option value="all">Toutes disponibilités</option>
            <option value="immediate">Disponible immédiatement</option>
            <option value="on-demand">Sur demande</option>
          </select>
        </div>
      </div>

      {/* Price Range Slider */}
      <div className="mt-6">
        <p className="text-sm font-medium text-gray-700 mb-2">
          Plage de prix: {priceRange[0]}€ - {priceRange[1]}€
        </p>
        <RcSlider
          range
          min={0}
          max={8000}
          value={priceRange}
          onChange={(value) => onPriceRangeChange(value as [number, number])}
          className="mt-4"
          trackStyle={[{ backgroundColor: '#1a365d' }]}
          handleStyle={[
            { backgroundColor: '#1a365d', borderColor: '#1a365d' },
            { backgroundColor: '#1a365d', borderColor: '#1a365d' }
          ]}
          railStyle={{ backgroundColor: '#e5e7eb' }}
        />
      </div>
    </div>
  );
}
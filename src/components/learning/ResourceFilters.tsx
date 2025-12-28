import React from 'react';
import { Search, Filter } from 'lucide-react';

interface ResourceFiltersProps {
  searchTerm: string;
  selectedCategory: string;
  selectedType: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onTypeChange: (value: string) => void;
}

const ResourceFilters: React.FC<ResourceFiltersProps> = ({
  searchTerm,
  selectedCategory,
  selectedType,
  onSearchChange,
  onCategoryChange,
  onTypeChange
}) => {
  const categories = [
    'all',
    'Intelligence Artificielle',
    'Développement Durable',
    'Innovation',
    'Entrepreneuriat',
    'Technologies Vertes',
    'Villes Intelligentes'
  ];

  const types = [
    { value: 'all', label: 'Tous les types' },
    { value: 'ebook', label: 'Ebooks' },
    { value: 'course', label: 'Formations' },
    { value: 'podcast', label: 'Podcasts' }
  ];

  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Search */}
        <div className="md:col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Rechercher une ressource..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>

        {/* Type Filter */}
        <div>
          <select
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
          >
            {types.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Category Pills */}
      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category === 'all' ? 'Toutes les catégories' : category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ResourceFilters;
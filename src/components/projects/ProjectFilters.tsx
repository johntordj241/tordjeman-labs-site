import React from 'react';
import { motion } from 'framer-motion';

interface ProjectFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  'all',
  'Innovation',
  'Durabilité',
  'Santé',
  'Énergie',
  'Transport',
  'Agriculture',
  'Océans',
  'Technologie',
  'Social'
];

export default function ProjectFilters({ selectedCategory, onCategoryChange }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category
              ? 'bg-blue-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category === 'all' ? 'Tous les projets' : category}
        </motion.button>
      ))}
    </div>
  );
}
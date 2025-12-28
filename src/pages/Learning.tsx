import React, { useState } from 'react';
import { Book, Video, Star, Download, Search } from 'lucide-react';
import ResourceCard from '../components/learning/ResourceCard';
import ResourceFilters from '../components/learning/ResourceFilters';
import TestimonialSection from '../components/learning/TestimonialSection';
import FreeResourcesSection from '../components/learning/FreeResourcesSection';
import UserDashboard from '../components/learning/UserDashboard';
import LearningChatbot from '../components/learning/LearningChatbot';
import { motion } from 'framer-motion';

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

const resources: Resource[] = [
  {
    id: 'eb1',
    type: 'ebook',
    title: 'Guide de l\'IA Éthique',
    subtitle: 'Développer des solutions IA responsables',
    description: 'Un guide complet pour comprendre et implémenter des solutions d\'IA éthiques et durables.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Intelligence Artificielle',
    rating: 4.8,
    reviews: 124,
    preview: true
  },
  {
    id: 'eb2',
    type: 'ebook',
    title: 'Technologies Vertes',
    subtitle: 'Innovation pour un futur durable',
    description: 'Découvrez les dernières avancées en matière de technologies vertes et leur impact sur l\'environnement.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Développement Durable',
    rating: 4.6,
    reviews: 89,
    preview: true
  },
  {
    id: 'pod1',
    type: 'podcast',
    title: 'Innovation Tech',
    subtitle: 'Les dernières tendances technologiques',
    description: 'Un podcast hebdomadaire sur les innovations technologiques et leur impact sur notre société.',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Innovation',
    rating: 4.9,
    reviews: 156,
    preview: true,
    episodes: 24,
    duration: '30 min par épisode'
  }
];

const userProgress = {
  completedCourses: 3,
  inProgressCourses: 2,
  certificates: 2,
  totalHours: 45
};

export default function Learning() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const filteredResources = resources.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesType = selectedType === 'all' || item.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Développez vos compétences avec nos ressources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des ebooks, formations et podcasts conçus par des experts pour maîtriser 
            les technologies de demain
          </p>
        </motion.div>

        {/* User Dashboard for logged-in users */}
        <div className="mb-16">
          <UserDashboard progress={userProgress} />
        </div>

        {/* Filters */}
        <ResourceFilters
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          selectedType={selectedType}
          onSearchChange={setSearchTerm}
          onCategoryChange={setSelectedCategory}
          onTypeChange={setSelectedType}
        />

        {/* Resources Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredResources.map((resource) => (
            <motion.div
              key={resource.id}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ResourceCard resource={resource} />
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <TestimonialSection />

        {/* Free Resources */}
        <FreeResourcesSection />

        {/* Learning Chatbot */}
        <LearningChatbot />
      </div>
    </div>
  );
}
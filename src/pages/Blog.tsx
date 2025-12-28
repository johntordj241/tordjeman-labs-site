import React, { useState } from 'react';
import { Search, Calendar, Tag, ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "L'impact des technologies sur la santé publique",
    excerpt: "Comment les innovations technologiques transforment le secteur de la santé et améliorent la vie des patients.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: "2024-03-15",
    category: "Impact Sociétal",
    author: "Dr. Sarah Martin"
  },
  {
    id: 2,
    title: "Tordjeman Labs x OceanGuard : Sauver les océans",
    excerpt: "Notre collaboration avec OceanGuard pour développer des solutions innovantes de nettoyage des océans.",
    image: "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: "2024-03-10",
    category: "Partenariats ONG",
    author: "Marine Dubois"
  },
  {
    id: 3,
    title: "Intelligence Artificielle : Vers une IA éthique",
    excerpt: "Les avancées de Tordjeman Labs dans le développement d'une IA responsable et transparente.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: "2024-03-05",
    category: "IA",
    author: "Thomas Chen"
  }
];

const categories = [
  "Tous",
  "Impact Sociétal",
  "Partenariats ONG",
  "IA",
  "Villes Intelligentes"
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blog & Actualités
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos dernières actualités, innovations et collaborations
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Rechercher un article..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-900 text-white text-sm rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(article.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Par {article.author}
                  </span>
                  <button className="btn-outline">
                    Lire plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Submit Article CTA */}
        <div className="mt-16 bg-blue-900 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Vous souhaitez contribuer ?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Partagez votre expertise et vos insights avec notre communauté.
            Nous sommes toujours à la recherche de nouvelles perspectives.
          </p>
          <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Soumettre un article
          </button>
        </div>
      </div>
    </div>
  );
}
import React, { useState, useMemo } from 'react';
import { Search, Filter, Star, ShoppingCart, Mic } from 'lucide-react';
import ReactSlider from 'react-slider';
import { useForm } from 'react-hook-form';
import { categories, products } from '../data/products';
import { Product } from '../types/market';
import ProductCard from '../components/market/ProductCard';
import SearchFilters from '../components/market/SearchFilters';
import VoiceSearch from '../components/market/VoiceSearch';
import Chatbot from '../components/market/Chatbot';
import WishlistModal from '../components/market/WishlistModal';
import ComparisonModal from '../components/market/ComparisonModal';
import toast from 'react-hot-toast';

export default function Market() {
  // États pour la gestion des filtres et de la recherche
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 8000]);
  const [availability, setAvailability] = useState('all');
  const [showWishlist, setShowWishlist] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [comparisonList, setComparisonList] = useState<Product[]>([]);
  const [isVoiceSearchActive, setIsVoiceSearchActive] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  // Filtrage des produits
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Tous' || product.category === selectedCategory;
      const matchesPrice = product.price === null || (product.price >= priceRange[0] && product.price <= priceRange[1]);
      const matchesAvailability = availability === 'all' || product.availability === availability;

      return matchesSearch && matchesCategory && matchesPrice && matchesAvailability;
    });
  }, [searchTerm, selectedCategory, priceRange, availability]);

  // Gestion des produits populaires
  const popularProducts = useMemo(() => {
    return filteredProducts.filter(product => product.isPopular);
  }, [filteredProducts]);

  // Handlers
  const handleAddToWishlist = (product: Product) => {
    if (!wishlist.find(p => p.id === product.id)) {
      setWishlist([...wishlist, product]);
      toast.success('Produit ajouté aux favoris');
    }
  };

  const handleAddToComparison = (product: Product) => {
    if (comparisonList.length < 3 && !comparisonList.find(p => p.id === product.id)) {
      setComparisonList([...comparisonList, product]);
      toast.success('Produit ajouté à la comparaison');
    } else if (comparisonList.length >= 3) {
      toast.error('Vous ne pouvez comparer que 3 produits maximum');
    }
  };

  const handleVoiceSearch = (text: string) => {
    setSearchTerm(text);
    setIsVoiceSearchActive(false);
  };

  const onContactSubmit = (data: any) => {
    console.log('Contact form data:', data);
    toast.success('Votre demande a été envoyée avec succès');
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explorez nos solutions innovantes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des services personnalisés pour vos besoins technologiques et stratégiques
          </p>
        </div>

        {/* Search and Filters */}
        <SearchFilters
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          priceRange={priceRange}
          availability={availability}
          categories={categories}
          onSearchChange={setSearchTerm}
          onCategoryChange={setSelectedCategory}
          onPriceRangeChange={setPriceRange}
          onAvailabilityChange={setAvailability}
        />

        {/* Voice Search Button */}
        <div className="mb-8 flex justify-end">
          <button
            onClick={() => setIsVoiceSearchActive(true)}
            className="btn-outline"
          >
            <Mic className="h-4 w-4 mr-2" />
            Recherche vocale
          </button>
        </div>

        {/* Popular Products Section */}
        {popularProducts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Services Populaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToWishlist={handleAddToWishlist}
                  onAddToComparison={handleAddToComparison}
                />
              ))}
            </div>
          </div>
        )}

        {/* All Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToWishlist={handleAddToWishlist}
              onAddToComparison={handleAddToComparison}
            />
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Besoin de plus d'informations ?
          </h2>
          <form onSubmit={handleSubmit(onContactSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom
              </label>
              <input
                type="text"
                {...register('name', { required: 'Ce champ est requis' })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message as string}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                {...register('email', {
                  required: 'Ce champ est requis',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Adresse email invalide'
                  }
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message as string}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                {...register('message', { required: 'Ce champ est requis' })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message as string}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <button type="submit" className="btn w-full justify-center">
                Envoyer ma demande
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modals */}
      {showWishlist && (
        <WishlistModal
          wishlist={wishlist}
          onClose={() => setShowWishlist(false)}
          onRemove={(product) => setWishlist(wishlist.filter(p => p.id !== product.id))}
        />
      )}

      {showComparison && (
        <ComparisonModal
          products={comparisonList}
          onClose={() => setShowComparison(false)}
          onRemove={(product) => setComparisonList(comparisonList.filter(p => p.id !== product.id))}
        />
      )}

      {/* Chatbot */}
      <Chatbot />

      {/* Voice Search Modal */}
      {isVoiceSearchActive && (
        <VoiceSearch
          onResult={handleVoiceSearch}
          onClose={() => setIsVoiceSearchActive(false)}
        />
      )}
    </div>
  );
}
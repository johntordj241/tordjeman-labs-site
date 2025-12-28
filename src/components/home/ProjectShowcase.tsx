import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Smart City Initiative',
    description: 'Solutions intelligentes pour les villes de demain, optimisant la consommation énergétique et améliorant la qualité de vie.',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    category: 'Infrastructure',
    stats: {
      impact: '30%',
      users: '100k+',
      efficiency: '45%'
    }
  },
  {
    id: 2,
    title: 'Green Energy Hub',
    description: 'Plateforme centralisée de gestion des ressources énergétiques renouvelables pour une distribution optimale.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    category: 'Énergie',
    stats: {
      impact: '50%',
      users: '75k+',
      efficiency: '65%'
    }
  },
  {
    id: 3,
    title: 'Waste Management AI',
    description: 'Intelligence artificielle révolutionnaire pour une gestion des déchets plus efficace et écologique.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    category: 'Environnement',
    stats: {
      impact: '40%',
      users: '50k+',
      efficiency: '55%'
    }
  }
];

export default function ProjectShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + projects.length) % projects.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nos Projets Phares
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nous transformons les défis d'aujourd'hui en opportunités pour demain
          </p>
        </div>

        <div className="relative h-[600px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-96">
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-blue-900 text-white text-sm rounded-full">
                      {projects[currentIndex].category}
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {projects[currentIndex].description}
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-blue-900">
                        {projects[currentIndex].stats.impact}
                      </div>
                      <div className="text-sm text-gray-600">Réduction CO2</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-blue-900">
                        {projects[currentIndex].stats.users}
                      </div>
                      <div className="text-sm text-gray-600">Utilisateurs</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-blue-900">
                        {projects[currentIndex].stats.efficiency}
                      </div>
                      <div className="text-sm text-gray-600">Efficacité</div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn flex items-center"
                    >
                      En savoir plus
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
            onClick={() => paginate(-1)}
          >
            <ArrowLeft className="h-6 w-6 text-gray-900" />
          </button>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
            onClick={() => paginate(1)}
          >
            <ArrowRight className="h-6 w-6 text-gray-900" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const direction = index - currentIndex;
                setDirection(direction);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-900' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
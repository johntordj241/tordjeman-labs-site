import React from 'react';
import { useForm } from 'react-hook-form';
import { Leaf, Heart, Globe, ArrowRight } from 'lucide-react';

const impacts = [
  {
    icon: Leaf,
    title: 'Impact Environnemental',
    description: 'Nos solutions ont permis de réduire significativement l\'empreinte carbone de nos clients.',
    stat: '1000+',
    label: 'Tonnes de CO2 économisées'
  },
  {
    icon: Heart,
    title: 'Impact Social',
    description: 'Nous contribuons activement à l\'inclusion numérique et à la formation technologique.',
    stat: '500+',
    label: 'Personnes formées'
  },
  {
    icon: Globe,
    title: 'Innovation Durable',
    description: 'Nos projets sont conçus pour avoir un impact positif à long terme sur la société.',
    stat: '50+',
    label: 'Projets durables'
  }
];

const projects = [
  {
    id: 1,
    title: 'EcoTech Education',
    description: 'Programme de formation en technologies vertes pour les communautés défavorisées.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 2,
    title: 'Smart Water Initiative',
    description: 'Solution IoT pour la gestion durable des ressources en eau.',
    image: 'https://images.unsplash.com/photo-1581093458791-9d42e3c2fd15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 3,
    title: 'Digital Inclusion',
    description: 'Plateforme d\'apprentissage numérique accessible à tous.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  }
];

type NGOFormData = {
  organization: string;
  contact: string;
  email: string;
  projectType: string;
  description: string;
};

export default function SocialImpact() {
  const { register, handleSubmit, formState: { errors } } = useForm<NGOFormData>();

  const onSubmit = (data: NGOFormData) => {
    console.log(data);
    // Ici, vous pourriez ajouter la logique d'envoi du formulaire
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Notre Engagement Sociétal
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chez Tordjeman Labs, nous croyons que l'innovation technologique doit servir 
            le progrès social et environnemental
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {impacts.map((impact) => (
            <div
              key={impact.title}
              className="bg-white rounded-xl p-8 text-center shadow-lg transition-transform hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <impact.icon className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {impact.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {impact.description}
              </p>
              <div className="border-t border-gray-200 pt-6">
                <div className="text-3xl font-bold text-blue-900 mb-1">
                  {impact.stat}
                </div>
                <div className="text-sm text-gray-600">
                  {impact.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nos Projets à Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <button className="btn-outline w-full justify-center">
                    Découvrir
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NGO Collaboration Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Collaborez avec nous
          </h2>
          <p className="text-gray-600 mb-8">
            Vous êtes une ONG et souhaitez collaborer sur des projets innovants ? 
            Contactez-nous pour discuter de vos idées.
          </p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom de l'organisation
              </label>
              <input
                type="text"
                {...register('organization', { required: 'Ce champ est requis' })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.organization && (
                <p className="mt-1 text-sm text-red-600">{errors.organization.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom du contact
              </label>
              <input
                type="text"
                {...register('contact', { required: 'Ce champ est requis' })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.contact && (
                <p className="mt-1 text-sm text-red-600">{errors.contact.message}</p>
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
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type de projet
              </label>
              <select
                {...register('projectType', { required: 'Ce champ est requis' })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Sélectionnez un type</option>
                <option value="education">Éducation</option>
                <option value="environment">Environnement</option>
                <option value="health">Santé</option>
                <option value="social">Social</option>
                <option value="other">Autre</option>
              </select>
              {errors.projectType && (
                <p className="mt-1 text-sm text-red-600">{errors.projectType.message}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description du projet
              </label>
              <textarea
                {...register('description', { required: 'Ce champ est requis' })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <button type="submit" className="btn w-full justify-center">
                Envoyer ma proposition
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
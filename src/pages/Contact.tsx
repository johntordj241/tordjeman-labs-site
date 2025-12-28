import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ReCAPTCHA from 'react-google-recaptcha';
import toast from 'react-hot-toast';
import 'leaflet/dist/leaflet.css';

type FormData = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
  attachment?: FileList;
};

const position: [number, number] = [48.8566, 2.3522]; // Paris coordinates

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [referenceNumber, setReferenceNumber] = useState<string>('');

  const getCurrentStatus = () => {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();
    
    if (day === 0 || day === 6) return false; // Weekend
    return hour >= 9 && hour < 18; // 9h-18h
  };

  const isOpen = getCurrentStatus();

  const generateReferenceNumber = () => {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(7).toUpperCase();
    return `TL-${timestamp}-${random}`;
  };

  const onSubmit = async (data: FormData) => {
    if (!recaptchaValue) {
      toast.error('Veuillez valider le reCAPTCHA');
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const reference = generateReferenceNumber();
      setReferenceNumber(reference);
      
      console.log('Form data:', { ...data, referenceNumber: reference });
      setIsSuccess(true);
      toast.success('Message envoyé avec succès !');
      reset();
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      toast.error('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous sommes à votre écoute pour discuter de vos projets et répondre à vos questions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nom complet *
                </label>
                <input
                  type="text"
                  {...register('name', { 
                    required: 'Ce champ est requis',
                    minLength: {
                      value: 2,
                      message: 'Le nom doit contenir au moins 2 caractères'
                    }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  aria-label="Nom complet"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email *
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  aria-label="Adresse email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    {...register('company')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    aria-label="Nom de l'entreprise"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    aria-label="Numéro de téléphone"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Sujet *
                </label>
                <input
                  type="text"
                  {...register('subject', { required: 'Ce champ est requis' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  aria-label="Sujet du message"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message *
                </label>
                <textarea
                  {...register('message', { 
                    required: 'Ce champ est requis',
                    minLength: {
                      value: 10,
                      message: 'Le message doit contenir au moins 10 caractères'
                    }
                  })}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  aria-label="Contenu du message"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="attachment" className="block text-sm font-medium text-gray-700">
                  Pièce jointe (PDF, DOC, JPG - max 5MB)
                </label>
                <input
                  type="file"
                  {...register('attachment')}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg"
                  className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-medium
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                  aria-label="Pièce jointe"
                />
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey="your-recaptcha-site-key"
                  onChange={(value) => setRecaptchaValue(value)}
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`btn w-full justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                aria-label="Envoyer le message"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="ml-2"
                    >
                      <CheckCircle className="h-5 w-5 text-white" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos Coordonnées</h2>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  whileHover={{ scale: 1.02 }}
                >
                  <Mail className="h-6 w-6 text-blue-900 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <a 
                      href="mailto:contact@tordjemanlabs.com"
                      className="text-gray-600 hover:text-blue-900 transition-colors"
                    >
                      contact@tordjemanlabs.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ scale: 1.02 }}
                >
                  <Phone className="h-6 w-6 text-blue-900 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Téléphone</h3>
                    <a 
                      href="tel:+33100000000"
                      className="text-gray-600 hover:text-blue-900 transition-colors"
                    >
                      +33 1 00 00 00 00
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ scale: 1.02 }}
                >
                  <MapPin className="h-6 w-6 text-blue-900 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Adresse</h3>
                    <p className="text-gray-600">Paris, France</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Horaires d'ouverture</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Lundi - Vendredi</span>
                  <span className="text-gray-900 font-medium">9h00 - 18h00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Samedi - Dimanche</span>
                  <span className="text-gray-900 font-medium">Fermé</span>
                </div>
                <div className={`mt-4 p-3 rounded-lg text-sm ${
                  isOpen 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  <div className="flex items-center">
                    {isOpen ? (
                      <Clock className="h-4 w-4 mr-2" />
                    ) : (
                      <AlertCircle className="h-4 w-4 mr-2" />
                    )}
                    <p className="font-medium">
                      {isOpen ? 'Nous sommes actuellement ouverts' : 'Nous sommes actuellement fermés'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Notre localisation</h2>
              <div className="h-[400px] rounded-lg overflow-hidden">
                <MapContainer 
                  center={position} 
                  zoom={13} 
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={position}>
                    <Popup>
                      Tordjeman Labs <br />
                      Paris, France <br />
                      <a 
                        href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Obtenir l'itinéraire
                      </a>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Success Modal */}
        <AnimatePresence>
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white rounded-lg p-8 max-w-md w-full mx-4"
              >
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Message envoyé avec succès !
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <p className="text-sm text-gray-500">
                    Numéro de référence : {referenceNumber}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
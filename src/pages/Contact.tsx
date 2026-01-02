import React from 'react';
import { Mail, Phone, MapPin, Clock, Users } from 'lucide-react';

const contactChannels = [
  {
    title: 'Relations institutionnelles',
    description: 'Cabinets ministériels, autorités indépendantes, collectivités territoriales.',
    icon: Users,
    email: 'contact@tordjemanlabs.com'
  },
  {
    title: 'Partenariats scientifiques & ONG',
    description: 'Laboratoires, think tanks, organisations à but non lucratif.',
    icon: Mail,
    email: 'info@tordjemanlabs.com'
  },
  {
    title: 'Presse & médias',
    description: 'Demandes d’interviews, tribunes ou prises de parole.',
    icon: Phone,
    email: 'contact@tordjemanlabs.com'
  }
];

export default function Contact() {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-blue-900 font-semibold mb-3">Contact</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Entrer en relation avec Tordjeman Labs</h1>
          <p className="text-lg text-gray-600">
            Le site public relaie des orientations validées. Pour accéder à l’atelier interne sécurisé ou initier une
            mission confidentielle, merci d’utiliser les canaux ci-dessous.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactChannels.map((channel) => (
            <div key={channel.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center mb-4">
                <span className="p-3 rounded-xl bg-blue-50 text-blue-900">
                  <channel.icon className="h-5 w-5" />
                </span>
                <h2 className="ml-3 text-lg font-semibold text-gray-900">{channel.title}</h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">{channel.description}</p>
              <a href={`mailto:${channel.email}`} className="text-sm font-semibold text-blue-900 hover:underline">
                {channel.email}
              </a>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center text-blue-900 mb-2">
                <MapPin className="h-5 w-5 mr-2" />
                Siège
              </div>
              <p className="text-gray-700 text-sm">
                10 rue de la Paix
                <br />
                75002 Paris — France
              </p>
            </div>
            <div>
              <div className="flex items-center text-blue-900 mb-2">
                <Clock className="h-5 w-5 mr-2" />
                Disponibilités
              </div>
              <p className="text-gray-700 text-sm">
                Lundi à vendredi : 09h00 / 18h30
                <br />
                Réponse sous 48h ouvrées.
              </p>
            </div>
            <div>
              <div className="flex items-center text-blue-900 mb-2">
                <Mail className="h-5 w-5 mr-2" />
                Points de contact
              </div>
              <div className="flex flex-col text-sm text-gray-700 space-y-1">
                <a href="mailto:contact@tordjemanlabs.com" className="hover:underline">
                  contact@tordjemanlabs.com
                </a>
                <a href="mailto:info@tordjemanlabs.com" className="hover:underline">
                  info@tordjemanlabs.com
                </a>
              </div>
              <p className="text-gray-500 text-xs mt-1">Les documents sensibles transitent uniquement par canaux chiffrés.</p>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>
            L’atelier interne (outils collaboratifs, IDE, tableaux de bord) reste strictement réservé aux équipes
            accréditées. Aucun compte public n’est délivré depuis ce site.
          </p>
        </div>
      </div>
    </div>
  );
}

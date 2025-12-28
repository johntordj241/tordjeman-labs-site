import React, { useState } from 'react';
import { Calendar, Clock, Users, Star } from 'lucide-react';
import PaymentModal from './PaymentModal';

interface CourseProps {
  course: {
    id: string;
    title: string;
    description: string;
    duration: string;
    modules: number;
    price: number;
    image: string;
    category: string;
    rating: number;
    reviews: number;
    startDate: string;
  };
}

export default function CourseCard({ course }: CourseProps) {
  const [showPayment, setShowPayment] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-blue-900 text-white text-sm rounded-full">
            {course.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{course.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            {course.duration}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2" />
            {course.modules} modules
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="ml-1 text-sm font-medium">{course.rating}</span>
          </div>
          <span className="text-sm text-gray-500">({course.reviews} avis)</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            Début: {new Date(course.startDate).toLocaleDateString('fr-FR')}
          </div>
          <span className="text-2xl font-bold text-blue-900">{course.price}€</span>
        </div>

        <button
          onClick={() => setShowPayment(true)}
          className="btn w-full justify-center"
        >
          S'inscrire maintenant
        </button>
      </div>

      {showPayment && (
        <PaymentModal
          resource={{ ...course, type: 'course' }}
          onClose={() => setShowPayment(false)}
          onSuccess={() => {
            setShowPayment(false);
            // Handle successful payment
          }}
        />
      )}
    </div>
  );
}
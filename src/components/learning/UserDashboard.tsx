import React from 'react';
import { Book, Play, Award, Clock } from 'lucide-react';

interface UserProgress {
  completedCourses: number;
  inProgressCourses: number;
  certificates: number;
  totalHours: number;
}

interface UserDashboardProps {
  progress: UserProgress;
}

export default function UserDashboard({ progress }: UserDashboardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Mon Tableau de Bord
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
            <Book className="h-6 w-6 text-blue-900" />
          </div>
          <div className="text-2xl font-bold text-blue-900 mb-1">
            {progress.completedCourses}
          </div>
          <div className="text-sm text-gray-600">
            Cours terminés
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
            <Play className="h-6 w-6 text-green-900" />
          </div>
          <div className="text-2xl font-bold text-green-900 mb-1">
            {progress.inProgressCourses}
          </div>
          <div className="text-sm text-gray-600">
            Cours en cours
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-4">
            <Award className="h-6 w-6 text-yellow-900" />
          </div>
          <div className="text-2xl font-bold text-yellow-900 mb-1">
            {progress.certificates}
          </div>
          <div className="text-sm text-gray-600">
            Certificats obtenus
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
            <Clock className="h-6 w-6 text-purple-900" />
          </div>
          <div className="text-2xl font-bold text-purple-900 mb-1">
            {progress.totalHours}h
          </div>
          <div className="text-sm text-gray-600">
            Temps total d'apprentissage
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-bold text-gray-900 mb-4">Prochaines sessions</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white rounded-lg">
            <div>
              <h4 className="font-medium">Introduction à l'IA</h4>
              <p className="text-sm text-gray-500">Module 3: Deep Learning</p>
            </div>
            <button className="btn-outline">
              Continuer
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-white rounded-lg">
            <div>
              <h4 className="font-medium">Technologies Vertes</h4>
              <p className="text-sm text-gray-500">Module 2: Énergies Renouvelables</p>
            </div>
            <button className="btn-outline">
              Continuer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
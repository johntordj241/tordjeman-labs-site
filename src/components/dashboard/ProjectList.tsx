import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { DashboardProject } from '../../types/dashboard';

interface ProjectListProps {
  projects: DashboardProject[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900">
              {project.title}
            </h3>
            <div className="flex items-center space-x-2">
              <button className="text-gray-400 hover:text-yellow-500">
                <Star className="h-5 w-5" />
              </button>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                project.status === 'in-progress'
                  ? 'bg-blue-100 text-blue-800'
                  : project.status === 'completed'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {project.status === 'in-progress' ? 'En cours' : 
                 project.status === 'completed' ? 'Terminé' : 'Planifié'}
              </span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4">{project.description}</p>
          
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Progression</span>
              <span>{project.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-900 rounded-full h-2"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            {Object.entries(project.impact).map(([key, value]) => (
              <div key={key} className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500 capitalize">
                  {key.replace(/_/g, ' ')}
                </div>
                <div className="text-xl font-bold text-gray-900">
                  {value}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center text-sm">
            <div className="text-gray-500">
              Prochaine étape : {project.nextPhase}
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500">
                Mise à jour : {new Date(project.lastUpdate).toLocaleDateString()}
              </span>
              <button className="text-blue-900 hover:text-blue-700 font-medium flex items-center">
                Voir les détails
                <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
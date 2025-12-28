import React from 'react';
import { BarChart, PieChart, TrendingUp } from 'lucide-react';
import { DashboardProject } from '../../types/dashboard';

interface ProjectMetricsProps {
  projects: DashboardProject[];
}

export default function ProjectMetrics({ projects }: ProjectMetricsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Progression des Projets
        </h3>
        <div className="flex justify-center">
          <BarChart className="h-48 w-48 text-blue-900" />
        </div>
        <div className="mt-4 space-y-2">
          {projects.map(project => (
            <div key={project.id} className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{project.title}</span>
              <span className="text-sm font-medium">{project.progress}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Impact par Catégorie
        </h3>
        <div className="flex justify-center">
          <PieChart className="h-48 w-48 text-blue-900" />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {projects.map(project => (
            <div key={project.id} className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm font-medium text-gray-900">{project.title}</div>
              <div className="text-xs text-gray-500">{project.category}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
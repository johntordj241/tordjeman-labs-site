import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col"
    >
      <div className="relative h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        </div>
      </div>

      <div className="p-6 flex-grow">
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.categories.map((category) => (
            <span
              key={category}
              className="px-3 py-1 bg-blue-100 text-blue-900 text-sm rounded-full"
            >
              {category}
            </span>
          ))}
        </div>

        {project.stats && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="bg-gray-50 p-3 rounded-lg text-center">
                <div className="text-lg font-bold text-blue-900">{value}</div>
                <div className="text-sm text-gray-600">{key}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="p-6 border-t border-gray-200">
        <div className="flex space-x-4">
          <button className="btn flex-1 justify-center">
            En savoir plus
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center px-4"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
import React from 'react';
import CollaborativeIDE from '../components/collaboration/CollaborativeIDE';
import WorkflowAutomation from '../components/collaboration/WorkflowAutomation';

export default function Collaboration() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Espace Collaboration
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un environnement de développement collaboratif avec gestion des workflows intégrée
          </p>
        </div>

        <div className="space-y-12">
          <CollaborativeIDE />
          <WorkflowAutomation />
        </div>
      </div>
    </div>
  );
}
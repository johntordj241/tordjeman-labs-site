import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, AlertCircle, ArrowRight } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  status: 'pending' | 'in-progress' | 'completed' | 'blocked';
  assignee: string;
  deadline: string;
  priority: 'low' | 'medium' | 'high';
}

const tasks: Task[] = [
  {
    id: '1',
    title: 'Intégration API Smart City',
    status: 'in-progress',
    assignee: 'Marie Laurent',
    deadline: '2024-03-20',
    priority: 'high'
  },
  {
    id: '2',
    title: 'Tests Unitaires IA',
    status: 'pending',
    assignee: 'Thomas Chen',
    deadline: '2024-03-25',
    priority: 'medium'
  },
  {
    id: '3',
    title: 'Documentation Technique',
    status: 'completed',
    assignee: 'Sarah Martin',
    deadline: '2024-03-15',
    priority: 'low'
  }
];

export default function WorkflowAutomation() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const getStatusIcon = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-blue-500" />;
      case 'blocked':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Automatisation des Workflows
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tasks List */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {tasks.map((task) => (
              <motion.div
                key={task.id}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-4 rounded-lg cursor-pointer"
                onClick={() => setSelectedTask(task)}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(task.status)}
                    <h3 className="font-medium">{task.title}</h3>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{task.assignee}</span>
                  <span>Échéance : {new Date(task.deadline).toLocaleDateString()}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Task Details */}
        <div className="bg-gray-50 p-6 rounded-lg">
          {selectedTask ? (
            <div>
              <h3 className="text-xl font-bold mb-4">{selectedTask.title}</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <div className="flex items-center mt-1">
                    {getStatusIcon(selectedTask.status)}
                    <span className="ml-2 capitalize">{selectedTask.status}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Assigné à</label>
                  <div className="mt-1">{selectedTask.assignee}</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Échéance</label>
                  <div className="mt-1">
                    {new Date(selectedTask.deadline).toLocaleDateString()}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Priorité</label>
                  <span className={`inline-block mt-1 px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(selectedTask.priority)}`}>
                    {selectedTask.priority}
                  </span>
                </div>

                <button className="btn w-full justify-center mt-4">
                  Mettre à jour le statut
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              Sélectionnez une tâche pour voir les détails
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
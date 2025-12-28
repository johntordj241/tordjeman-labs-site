import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Pause, RefreshCw } from 'lucide-react';

interface SimulationData {
  energySaved: number;
  co2Reduced: number;
  efficiency: number;
}

export default function ProjectSimulator() {
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationData, setSimulationData] = useState<SimulationData>({
    energySaved: 0,
    co2Reduced: 0,
    efficiency: 0
  });

  const startSimulation = () => {
    setIsSimulating(true);
    const interval = setInterval(() => {
      setSimulationData(prev => ({
        energySaved: Math.min(prev.energySaved + 5, 100),
        co2Reduced: Math.min(prev.co2Reduced + 3, 75),
        efficiency: Math.min(prev.efficiency + 4, 90)
      }));
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setIsSimulating(false);
    }, 3000);
  };

  const resetSimulation = () => {
    setSimulationData({
      energySaved: 0,
      co2Reduced: 0,
      efficiency: 0
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Simulateur de Projet
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-4">Énergie Économisée</h4>
          <motion.div 
            className="h-4 bg-gray-200 rounded-full overflow-hidden"
            initial={{ width: 0 }}
          >
            <motion.div
              className="h-full bg-green-500"
              animate={{ width: `${simulationData.energySaved}%` }}
              transition={{ duration: 1 }}
            />
          </motion.div>
          <p className="mt-2 text-right font-medium">{simulationData.energySaved}%</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-4">CO2 Réduit</h4>
          <motion.div 
            className="h-4 bg-gray-200 rounded-full overflow-hidden"
            initial={{ width: 0 }}
          >
            <motion.div
              className="h-full bg-blue-500"
              animate={{ width: `${simulationData.co2Reduced}%` }}
              transition={{ duration: 1 }}
            />
          </motion.div>
          <p className="mt-2 text-right font-medium">{simulationData.co2Reduced}%</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-4">Efficacité</h4>
          <motion.div 
            className="h-4 bg-gray-200 rounded-full overflow-hidden"
            initial={{ width: 0 }}
          >
            <motion.div
              className="h-full bg-purple-500"
              animate={{ width: `${simulationData.efficiency}%` }}
              transition={{ duration: 1 }}
            />
          </motion.div>
          <p className="mt-2 text-right font-medium">{simulationData.efficiency}%</p>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={startSimulation}
          disabled={isSimulating}
          className="btn flex items-center"
        >
          {isSimulating ? (
            <>
              <Pause className="h-4 w-4 mr-2" />
              Simulation en cours...
            </>
          ) : (
            <>
              <Play className="h-4 w-4 mr-2" />
              Lancer la simulation
            </>
          )}
        </button>
        <button
          onClick={resetSimulation}
          className="btn-outline flex items-center"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Réinitialiser
        </button>
      </div>
    </div>
  );
}
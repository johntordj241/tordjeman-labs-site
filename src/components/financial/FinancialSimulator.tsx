import React, { useState } from 'react';
import { Calculator, TrendingUp, Download, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface FinancialData {
  initialInvestment: number;
  annualRevenue: number;
  operatingCosts: number;
  growthRate: number;
  projectDuration: number;
}

interface SimulationResults {
  roi: number;
  npv: number;
  paybackPeriod: number;
  yearlyData: {
    revenues: number[];
    costs: number[];
    profits: number[];
  };
}

export default function FinancialSimulator() {
  const [financialData, setFinancialData] = useState<FinancialData>({
    initialInvestment: 100000,
    annualRevenue: 50000,
    operatingCosts: 30000,
    growthRate: 5,
    projectDuration: 5
  });

  const [results, setResults] = useState<SimulationResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFinancialData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  const calculateMetrics = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const { initialInvestment, annualRevenue, operatingCosts, growthRate, projectDuration } = financialData;
      
      const yearlyData = {
        revenues: [],
        costs: [],
        profits: []
      };

      // Calculate yearly data
      for (let i = 0; i < projectDuration; i++) {
        const yearRevenue = annualRevenue * Math.pow(1 + growthRate / 100, i);
        const yearCost = operatingCosts;
        const yearProfit = yearRevenue - yearCost;

        yearlyData.revenues.push(yearRevenue);
        yearlyData.costs.push(yearCost);
        yearlyData.profits.push(yearProfit);
      }

      // Calculate ROI
      const totalRevenue = yearlyData.revenues.reduce((a, b) => a + b, 0);
      const totalCosts = yearlyData.costs.reduce((a, b) => a + b, 0) + initialInvestment;
      const roi = ((totalRevenue - totalCosts) / initialInvestment) * 100;

      // Calculate NPV
      const discountRate = 0.1;
      const npv = yearlyData.profits.reduce((acc, profit, i) => {
        return acc + profit / Math.pow(1 + discountRate, i + 1);
      }, -initialInvestment);

      // Calculate Payback Period
      const yearlyProfit = annualRevenue - operatingCosts;
      const paybackPeriod = initialInvestment / yearlyProfit;

      setResults({
        roi: parseFloat(roi.toFixed(2)),
        npv: parseFloat(npv.toFixed(2)),
        paybackPeriod: parseFloat(paybackPeriod.toFixed(2)),
        yearlyData
      });
      
      setIsCalculating(false);
    }, 1500);
  };

  const chartData = results ? {
    labels: Array.from({ length: financialData.projectDuration }, (_, i) => `Année ${i + 1}`),
    datasets: [
      {
        label: 'Revenus',
        data: results.yearlyData.revenues,
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
      },
      {
        label: 'Coûts',
        data: results.yearlyData.costs,
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
      },
      {
        label: 'Profits',
        data: results.yearlyData.profits,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      }
    ]
  } : null;

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Projection Financière'
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Input Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Simulateur Financier
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Investissement Initial (€)
              </label>
              <input
                type="number"
                name="initialInvestment"
                value={financialData.initialInvestment}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Revenu Annuel Estimé (€)
              </label>
              <input
                type="number"
                name="annualRevenue"
                value={financialData.annualRevenue}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Coûts Opérationnels Annuels (€)
              </label>
              <input
                type="number"
                name="operatingCosts"
                value={financialData.operatingCosts}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Taux de Croissance Annuel (%)
              </label>
              <input
                type="number"
                name="growthRate"
                value={financialData.growthRate}
                onChange={handleInputChange}
                min="0"
                max="100"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Durée du Projet (années)
              </label>
              <input
                type="number"
                name="projectDuration"
                value={financialData.projectDuration}
                onChange={handleInputChange}
                min="1"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button
              onClick={calculateMetrics}
              disabled={isCalculating}
              className="btn w-full justify-center"
            >
              {isCalculating ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Calcul en cours...
                </>
              ) : (
                <>
                  Calculer les Métriques
                  <Calculator className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Résultats de la Simulation
          </h2>

          {results ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-blue-600 mb-1">ROI</div>
                  <div className="text-2xl font-bold text-blue-900">
                    {results.roi}%
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-sm text-green-600 mb-1">VAN</div>
                  <div className="text-2xl font-bold text-green-900">
                    {results.npv}€
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-sm text-purple-600 mb-1">
                    Délai de Récupération
                  </div>
                  <div className="text-2xl font-bold text-purple-900">
                    {results.paybackPeriod} ans
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                {chartData && <Line data={chartData} options={chartOptions} />}
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Analyse des Résultats</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>
                    • Le ROI de {results.roi}% indique{' '}
                    {results.roi > 0 ? 'un retour positif' : 'une perte'} sur
                    l'investissement.
                  </p>
                  <p>
                    • La VAN de {results.npv}€ suggère que le projet est{' '}
                    {results.npv > 0 ? 'rentable' : 'non rentable'} sur la durée.
                  </p>
                  <p>
                    • Le délai de récupération de {results.paybackPeriod} ans
                    représente le temps nécessaire pour récupérer l'investissement
                    initial.
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  // Implement report download
                  toast.success('Rapport téléchargé');
                }}
                className="btn-outline w-full justify-center"
              >
                Télécharger le Rapport
                <Download className="ml-2 h-4 w-4" />
              </button>
            </motion.div>
          ) : (
            <div className="text-center text-gray-500">
              Remplissez le formulaire et lancez la simulation pour voir les
              résultats
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
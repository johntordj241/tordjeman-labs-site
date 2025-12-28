import React, { useState } from 'react';
import FinancialSimulator from '../components/financial/FinancialSimulator';
import ContractAssistant from '../components/financial/ContractAssistant';
import { motion } from 'framer-motion';

export default function Financial() {
  const [activeTab, setActiveTab] = useState<'simulator' | 'contracts'>('simulator');

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Outils Financiers et Juridiques
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simulez vos investissements et générez des contrats personnalisés
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('simulator')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'simulator'
                  ? 'border-blue-900 text-blue-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Simulateur Financier
            </button>
            <button
              onClick={() => setActiveTab('contracts')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'contracts'
                  ? 'border-blue-900 text-blue-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Assistant Contrats
            </button>
          </nav>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="space-y-8"
        >
          {activeTab === 'simulator' ? (
            <FinancialSimulator />
          ) : (
            <ContractAssistant />
          )}
        </motion.div>
      </div>
    </div>
  );
}
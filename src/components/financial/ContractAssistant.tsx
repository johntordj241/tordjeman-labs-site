import React, { useState } from 'react';
import { FileText, Download, Check, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { jsPDF } from 'jspdf';

interface ContractData {
  type: string;
  companyName: string;
  contactName: string;
  startDate: string;
  duration: string;
  specialClauses: string;
}

export default function ContractAssistant() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContractData>();
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [generatedContract, setGeneratedContract] = useState<ContractData | null>(null);

  const onSubmit = (data: ContractData) => {
    setIsGenerating(true);
    // Simulate contract generation
    setTimeout(() => {
      setGeneratedContract(data);
      setIsGenerating(false);
      setIsGenerated(true);
      toast.success('Contrat généré avec succès');
    }, 1500);
  };

  const downloadContract = () => {
    if (!generatedContract) return;

    const doc = new jsPDF();
    
    // Add header
    doc.setFontSize(20);
    doc.text('CONTRAT', 105, 20, { align: 'center' });
    
    // Add contract type
    doc.setFontSize(16);
    doc.text(getContractTypeTitle(generatedContract.type), 105, 30, { align: 'center' });
    
    // Add content
    doc.setFontSize(12);
    doc.text([
      `Entre les soussignés :`,
      `Tordjeman Labs, représenté par Georges John Tordjeman`,
      `Et`,
      `${generatedContract.companyName}, représenté par ${generatedContract.contactName}`,
      ``,
      `Date de début : ${generatedContract.startDate}`,
      `Durée : ${generatedContract.duration}`,
      ``,
      `Clauses spéciales :`,
      generatedContract.specialClauses
    ], 20, 50);

    // Save the PDF
    doc.save(`contrat-${generatedContract.type}-${new Date().getTime()}.pdf`);
    toast.success('Contrat téléchargé avec succès');
  };

  const getContractTypeTitle = (type: string) => {
    switch (type) {
      case 'partnership':
        return 'Contrat de Partenariat';
      case 'service':
        return 'Contrat de Service';
      case 'nda':
        return 'Accord de Confidentialité';
      default:
        return 'Contrat';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contract Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Générer un Contrat
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type de Contrat
              </label>
              <select
                {...register('type', { required: 'Ce champ est requis' })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="partnership">Partenariat</option>
                <option value="service">Prestation de Service</option>
                <option value="nda">Accord de Confidentialité (NDA)</option>
              </select>
              {errors.type && (
                <p className="mt-1 text-sm text-red-600">{errors.type.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom de l'Entreprise
              </label>
              <input
                type="text"
                {...register('companyName', { required: 'Ce champ est requis' })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.companyName && (
                <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom du Contact
              </label>
              <input
                type="text"
                {...register('contactName', { required: 'Ce champ est requis' })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.contactName && (
                <p className="mt-1 text-sm text-red-600">{errors.contactName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date de Début
              </label>
              <input
                type="date"
                {...register('startDate', { required: 'Ce champ est requis' })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.startDate && (
                <p className="mt-1 text-sm text-red-600">{errors.startDate.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Durée
              </label>
              <input
                type="text"
                {...register('duration', { required: 'Ce champ est requis' })}
                placeholder="ex: 12 mois"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.duration && (
                <p className="mt-1 text-sm text-red-600">{errors.duration.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Clauses Spéciales
              </label>
              <textarea
                {...register('specialClauses')}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              disabled={isGenerating}
              className="btn w-full justify-center"
            >
              {isGenerating ? (
                <>Génération en cours...</>
              ) : (
                <>
                  Générer le Contrat
                  <FileText className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Preview */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Aperçu du Contrat
          </h2>

          {isGenerated && generatedContract ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">
                    {getContractTypeTitle(generatedContract.type)}
                  </h3>
                  <Check className="h-6 w-6 text-green-500" />
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-medium">Entreprise:</span>{' '}
                    {generatedContract.companyName}
                  </div>
                  <div>
                    <span className="font-medium">Contact:</span>{' '}
                    {generatedContract.contactName}
                  </div>
                  <div>
                    <span className="font-medium">Date de début:</span>{' '}
                    {generatedContract.startDate}
                  </div>
                  <div>
                    <span className="font-medium">Durée:</span>{' '}
                    {generatedContract.duration}
                  </div>
                  {generatedContract.specialClauses && (
                    <div>
                      <span className="font-medium">Clauses spéciales:</span>
                      <p className="mt-1">{generatedContract.specialClauses}</p>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={downloadContract}
                className="btn-outline w-full justify-center"
              >
                Télécharger le Contrat
                <Download className="ml-2 h-4 w-4" />
              </button>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg">
              <AlertCircle className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-center text-gray-500">
                Remplissez le formulaire et générez le contrat pour voir l'aperçu
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
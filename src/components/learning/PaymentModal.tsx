import React from 'react';
import { useForm } from 'react-hook-form';
import { X, CreditCard, Lock } from 'lucide-react';
import toast from 'react-hot-toast';

interface PaymentModalProps {
  resource: {
    title: string;
    price: number;
    type?: 'ebook' | 'course' | 'podcast';
  };
  onClose: () => void;
  onSuccess: () => void;
}

interface PaymentFormData {
  cardNumber: string;
  expiry: string;
  cvc: string;
  name: string;
}

export default function PaymentModal({ resource, onClose, onSuccess }: PaymentModalProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<PaymentFormData>();

  const onSubmit = (data: PaymentFormData) => {
    // Simulate payment processing
    console.log('Processing payment:', data);
    
    setTimeout(() => {
      toast.success('Paiement effectué avec succès');
      onSuccess();
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Paiement sécurisé</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-2">{resource.title}</h4>
          <p className="text-2xl font-bold text-blue-900">{resource.price}€</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom sur la carte
            </label>
            <input
              type="text"
              {...register('name', { required: 'Ce champ est requis' })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Numéro de carte
            </label>
            <div className="relative">
              <input
                type="text"
                {...register('cardNumber', {
                  required: 'Ce champ est requis',
                  pattern: {
                    value: /^[0-9]{16}$/,
                    message: 'Numéro de carte invalide'
                  }
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="1234 5678 9012 3456"
              />
              <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            {errors.cardNumber && (
              <p className="mt-1 text-sm text-red-600">{errors.cardNumber.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date d'expiration
              </label>
              <input
                type="text"
                {...register('expiry', {
                  required: 'Ce champ est requis',
                  pattern: {
                    value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                    message: 'Format invalide (MM/YY)'
                  }
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="MM/YY"
              />
              {errors.expiry && (
                <p className="mt-1 text-sm text-red-600">{errors.expiry.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVC
              </label>
              <input
                type="text"
                {...register('cvc', {
                  required: 'Ce champ est requis',
                  pattern: {
                    value: /^[0-9]{3,4}$/,
                    message: 'CVC invalide'
                  }
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="123"
              />
              {errors.cvc && (
                <p className="mt-1 text-sm text-red-600">{errors.cvc.message}</p>
              )}
            </div>
          </div>

          <div className="flex items-center text-sm text-gray-600 mt-4">
            <Lock className="h-4 w-4 mr-2" />
            Paiement sécurisé via Stripe
          </div>

          <button type="submit" className="btn w-full justify-center">
            Payer {resource.price}€
          </button>
        </form>
      </div>
    </div>
  );
}
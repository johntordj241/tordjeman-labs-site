import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { getConsent, setConsent, type ConsentPreferences } from '../lib/ga';

export default function ConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences | null>(null);

  useEffect(() => {
    const consent = getConsent();
    setPreferences(consent);
    // Show banner only if never explicitly set
    const isFirstVisit = localStorage.getItem('tordjeman-labs-consent-shown') === null;
    if (isFirstVisit) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setConsent(true);
    localStorage.setItem('tordjeman-labs-consent-shown', 'true');
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    setConsent(false);
    localStorage.setItem('tordjeman-labs-consent-shown', 'true');
    setIsVisible(false);
  };

  const handleManagePreferences = () => {
    // In production, this would open a preference center modal
    setConsent(false);
    localStorage.setItem('tordjeman-labs-consent-shown', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 bg-gray-900 text-white shadow-2xl border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-sm font-semibold mb-2">Consentement & confidentialité</h3>
            <p className="text-xs text-gray-300 leading-relaxed mb-3">
              Ce site utilise Google Analytics 4 pour mesurer votre usage uniquement si vous y consentez.
              Aucun cookie Analytics n'est déposé sans votre accord. Lisez notre{' '}
              <a
                href="/contact"
                className="underline hover:text-white"
              >
                politique de confidentialité
              </a>
              {' '}pour plus de détails.
            </p>
            <p className="text-xs text-gray-400">
              Vous pouvez modifier votre choix à tout moment via le pied de page.
            </p>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="mt-2 text-gray-400 hover:text-white flex-shrink-0"
            aria-label="Fermer la bannière"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <button
            onClick={handleAcceptAll}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-blue-900 hover:bg-blue-800 text-white transition-colors"
          >
            Accepter Analytics
          </button>
          <button
            onClick={handleRejectAll}
            className="px-4 py-2 rounded-lg text-xs font-semibold border border-gray-600 hover:bg-gray-800 text-gray-300 transition-colors"
          >
            Refuser Analytics
          </button>
          <button
            onClick={handleManagePreferences}
            className="px-4 py-2 rounded-lg text-xs font-semibold border border-gray-600 hover:bg-gray-800 text-gray-300 transition-colors"
          >
            Gérer les préférences
          </button>
        </div>
      </div>
    </div>
  );
}

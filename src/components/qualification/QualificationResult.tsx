import React from 'react';
import type { QualificationResult as QualificationResultType } from '../../lib/qualificationScoring';

interface QualificationResultProps {
  result: QualificationResultType;
}

export default function QualificationResult({ result }: QualificationResultProps) {
  return (
    <section className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
      <p className="text-xs uppercase tracking-[0.3em] text-blue-900 font-semibold mb-2">Resultat d'evaluation</p>
      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{result.category}</h3>
      <p className="text-sm text-gray-700 mb-4">{result.message}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
        <div className="rounded-xl border border-gray-200 bg-white p-3">
          <p className="text-gray-500">Score total</p>
          <p className="text-lg font-semibold text-gray-900">{result.totalScore}</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-3">
          <p className="text-gray-500">Maturite</p>
          <p className="text-lg font-semibold text-gray-900">{result.maturityScore}</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-3">
          <p className="text-gray-500">Faisabilite</p>
          <p className="text-lg font-semibold text-gray-900">{result.feasibilityScore}</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-3">
          <p className="text-gray-500">Valeur strategique</p>
          <p className="text-lg font-semibold text-gray-900">{result.strategicValueScore}</p>
        </div>
      </div>
    </section>
  );
}
import React, { useMemo, useState } from 'react';
import QualificationResult from './QualificationResult';
import {
  buildQualificationSubmission,
  type OrganizationType,
  type QualificationAnswers,
  type QualificationSubmission
} from '../../lib/qualificationScoring';

const stepTitles = [
  'Etape 1 - Identification institutionnelle',
  'Etape 2 - Nature et cadrage du projet',
  'Etape 3 - Complexite, ressources et contraintes',
  'Etape 4 - Budget et processus de decision'
];

const initialAnswers: QualificationAnswers = {
  organizationName: '',
  organizationType: 'private-company',
  contactName: '',
  contactRole: '',
  professionalEmail: '',
  phone: '',
  website: '',
  location: '',
  sector: '',
  projectSummary: '',
  projectMaturity: 'idea',
  projectType: 'creation',
  mainObjectiveCategory: 'innovation',
  supportNeed: 'strategic-advisory',
  specificationStatus: 'in-progress',
  mainObjective: '',
  expectedOutcome: '',
  aiDataSystemsLevel: 'none',
  regulatoryConstraints: 'moderate',
  complexityLevel: 'medium',
  technicalTeam: 'partial',
  budgetRange: '15k-50k',
  decisionTimeline: '3-6-months',
  stakeholderCount: '3-5',
  decisionProcess: 'committee',
  shortSprintOpenness: 'discuss',
  criticalDeadline: false,
  ipProtectionStatus: 'reflection'
};

export default function StrategicQualificationForm() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<QualificationAnswers>(initialAnswers);
  const [submission, setSubmission] = useState<QualificationSubmission | null>(null);

  const isLastStep = step === 4;
  const progress = useMemo(() => Math.round((step / 4) * 100), [step]);

  const updateAnswer = <K extends keyof QualificationAnswers>(key: K, value: QualificationAnswers[K]) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const goNext = () => setStep((prev) => Math.min(4, prev + 1));
  const goBack = () => setStep((prev) => Math.max(1, prev - 1));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isLastStep) {
      goNext();
      return;
    }

    const result = buildQualificationSubmission(answers);
    setSubmission(result);
  };

  const restart = () => {
    setSubmission(null);
    setStep(1);
    setAnswers(initialAnswers);
  };

  return (
    <section className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 mb-12">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.4em] text-blue-900 font-semibold mb-3">Qualification strategique</p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Cadre de pre-qualification des projets</h2>
        <p className="text-sm text-gray-600">
          Ce questionnaire structure l'evaluation de maturite, de faisabilite et de valeur strategique avant tout
          engagement operationnel.
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span>{stepTitles[step - 1]}</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-blue-900" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nom de l'organisation</label>
              <input
                type="text"
                value={answers.organizationName}
                onChange={(e) => updateAnswer('organizationName', e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type d'organisation</label>
              <select
                value={answers.organizationType}
                onChange={(e) => updateAnswer('organizationType', e.target.value as OrganizationType)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="private-company">Entreprise privée</option>
                <option value="startup">Startup</option>
                <option value="sme-eti">PME / ETI</option>
                <option value="public-institution">Institution publique</option>
                <option value="local-authority">Collectivité territoriale</option>
                <option value="university-lab">Université / laboratoire</option>
                <option value="ngo-association">ONG / association</option>
                <option value="consulting-firm">Cabinet de conseil</option>
                <option value="investor-fund">Investisseur / fonds</option>
                <option value="other">Autre</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nom et prenom du contact</label>
              <input
                type="text"
                value={answers.contactName}
                onChange={(e) => updateAnswer('contactName', e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fonction</label>
              <input
                type="text"
                value={answers.contactRole}
                onChange={(e) => updateAnswer('contactRole', e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email professionnel</label>
              <input
                type="email"
                value={answers.professionalEmail}
                onChange={(e) => updateAnswer('professionalEmail', e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Telephone</label>
              <input
                type="text"
                value={answers.phone}
                onChange={(e) => updateAnswer('phone', e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Site web ou presentation publique</label>
              <input
                type="url"
                value={answers.website}
                onChange={(e) => updateAnswer('website', e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Localisation geographique</label>
              <input
                type="text"
                value={answers.location}
                onChange={(e) => updateAnswer('location', e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Secteur d'activite</label>
              <input
                type="text"
                value={answers.sector}
                onChange={(e) => updateAnswer('sector', e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Maturite du projet</label>
              <select
                value={answers.projectMaturity}
                onChange={(e) => updateAnswer('projectMaturity', e.target.value as QualificationAnswers['projectMaturity'])}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="idea">Idee</option>
                <option value="in-progress">En cours</option>
                <option value="structured">Structure</option>
              </select>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Présentation synthétique du projet</label>
              <textarea
                value={answers.projectSummary}
                onChange={(e) => updateAnswer('projectSummary', e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 min-h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                Décrivez votre projet ou produit en quelques lignes, comme si vous le présentiez à un partenaire
                stratégique ou à un comité de décision.<br />
                <span className="italic">
                  Exemple : Plateforme de diagnostic médical préventif utilisant l’IA et des données biométriques
                  collectées via objets connectés.
                </span>
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nature du projet</label>
              <select
                value={answers.projectType}
                onChange={(e) => updateAnswer('projectType', e.target.value as QualificationAnswers['projectType'])}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="creation">Creation</option>
                <option value="evolution">Evolution d'un projet existant</option>
                <option value="extension">Extension ou diversification</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Objectif principal</label>
              <select
                value={answers.mainObjectiveCategory}
                onChange={(e) => updateAnswer('mainObjectiveCategory', e.target.value as QualificationAnswers['mainObjectiveCategory'])}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="innovation">Innovation technologique</option>
                <option value="growth">Croissance ou traction</option>
                <option value="cost-reduction">Reduction de couts</option>
                <option value="automation">Automatisation de processus</option>
                <option value="ip-valorization">Valorisation d'un actif de PI</option>
                <option value="other">Autre</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type d'accompagnement recherche</label>
              <select
                value={answers.supportNeed}
                onChange={(e) => updateAnswer('supportNeed', e.target.value as QualificationAnswers['supportNeed'])}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="strategic-advisory">Conseil strategique</option>
                <option value="exploratory-audit">Audit exploratoire</option>
                <option value="product-design">Design produit / prototype</option>
                <option value="software-ai-development">Developpement logiciel / IA</option>
                <option value="fundraising-support">Accompagnement levee de fonds</option>
                <option value="market-study">Etude de marche / business plan</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cahier des charges</label>
              <select
                value={answers.specificationStatus}
                onChange={(e) => updateAnswer('specificationStatus', e.target.value as QualificationAnswers['specificationStatus'])}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="yes">Oui</option>
                <option value="in-progress">En cours</option>
                <option value="no">Non</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Problematique a resoudre</label>
              <textarea
                value={answers.mainObjective}
                onChange={(e) => updateAnswer('mainObjective', e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 min-h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Resultat attendu</label>
              <textarea
                value={answers.expectedOutcome}
                onChange={(e) => updateAnswer('expectedOutcome', e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 min-h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Usage IA / donnees / systemes</label>
              <select
                value={answers.aiDataSystemsLevel}
                onChange={(e) => updateAnswer('aiDataSystemsLevel', e.target.value as QualificationAnswers['aiDataSystemsLevel'])}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="none">Aucun usage significatif</option>
                <option value="limited">Usage partiel</option>
                <option value="core">Usage central au projet</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contraintes reglementaires</label>
              <select
                value={answers.regulatoryConstraints}
                onChange={(e) => updateAnswer('regulatoryConstraints', e.target.value as QualificationAnswers['regulatoryConstraints'])}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="high">Elevees (RGPD, securite critique, certification)</option>
                <option value="moderate">Moderees</option>
                <option value="low">Limitees</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Niveau de complexite</label>
              <select
                value={answers.complexityLevel}
                onChange={(e) => updateAnswer('complexityLevel', e.target.value as QualificationAnswers['complexityLevel'])}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="low">Faible</option>
                <option value="medium">Moyenne</option>
                <option value="high">Elevee</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Equipe technique disponible</label>
              <select
                value={answers.technicalTeam}
                onChange={(e) => updateAnswer('technicalTeam', e.target.value as QualificationAnswers['technicalTeam'])}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="yes">Oui (interne)</option>
                <option value="partial">Partiellement</option>
                <option value="no">Non</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Protection de la propriete intellectuelle</label>
              <select
                value={answers.ipProtectionStatus}
                onChange={(e) => updateAnswer('ipProtectionStatus', e.target.value as QualificationAnswers['ipProtectionStatus'])}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="none">Aucune demarche</option>
                <option value="reflection">En reflexion</option>
                <option value="active">Demarches engagees</option>
              </select>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Budget alloue</label>
              <select
                value={answers.budgetRange}
                onChange={(e) => updateAnswer('budgetRange', e.target.value as QualificationAnswers['budgetRange'])}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="under-5k">Moins de 5 000 EUR</option>
                <option value="5k-15k">5 000 - 15 000 EUR</option>
                <option value="15k-50k">15 000 - 50 000 EUR</option>
                <option value="50k-100k">50 000 - 100 000 EUR</option>
                <option value="100k-plus">Plus de 100 000 EUR</option>
                <option value="undefined">Budget non defini</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fenetre de decision</label>
              <select
                value={answers.decisionTimeline}
                onChange={(e) => updateAnswer('decisionTimeline', e.target.value as QualificationAnswers['decisionTimeline'])}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="immediate">Immediate</option>
                <option value="under-1-month">Moins d'un mois</option>
                <option value="1-3-months">1 a 3 mois</option>
                <option value="3-6-months">3 a 6 mois</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de decideurs</label>
              <select
                value={answers.stakeholderCount}
                onChange={(e) => updateAnswer('stakeholderCount', e.target.value as QualificationAnswers['stakeholderCount'])}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="1-2">1 a 2</option>
                <option value="3-5">3 a 5</option>
                <option value="6-plus">6 et plus</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Processus de validation</label>
              <select
                value={answers.decisionProcess}
                onChange={(e) => updateAnswer('decisionProcess', e.target.value as QualificationAnswers['decisionProcess'])}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="individual">Decision individuelle</option>
                <option value="committee">Comite interne</option>
                <option value="tender">Appel d'offres</option>
                <option value="legal">Validation juridique</option>
                <option value="other">Autre</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ouverture a un sprint strategique court</label>
              <select
                value={answers.shortSprintOpenness}
                onChange={(e) => updateAnswer('shortSprintOpenness', e.target.value as QualificationAnswers['shortSprintOpenness'])}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="yes">Oui</option>
                <option value="discuss">A discuter</option>
                <option value="no">Non</option>
              </select>
            </div>
            <label className="md:col-span-2 inline-flex items-start gap-3 rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={answers.criticalDeadline}
                onChange={(e) => updateAnswer('criticalDeadline', e.target.checked)}
                className="mt-1 h-4 w-4 text-blue-900 rounded border-gray-300"
              />
              Presence d'une deadline critique (juridique, salon, publication)
            </label>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 sm:justify-between">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 1}
            className="btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Etape precedente
          </button>
          <button type="submit" className="btn">
            {isLastStep ? 'Lancer la qualification' : 'Etape suivante'}
          </button>
        </div>
      </form>

      {submission && (
        <div className="mt-8 space-y-4">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-4">
            <p className="text-sm text-gray-700">
              Votre demande de pré-qualification a bien été enregistrée.<br />
              Après analyse initiale, un retour pourra être effectué si le projet entre dans le périmètre
              d’intervention du hub.
            </p>
          </div>
          <QualificationResult result={submission.evaluation} />
          <div className="flex justify-end">
            <button type="button" onClick={restart} className="btn-outline">
              Reinitialiser l'evaluation
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
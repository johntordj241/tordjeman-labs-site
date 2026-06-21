export type OrganizationType =
  | 'private-company'
  | 'startup'
  | 'sme-eti'
  | 'public-institution'
  | 'local-authority'
  | 'university-lab'
  | 'ngo-association'
  | 'consulting-firm'
  | 'investor-fund'
  | 'other';

export type ProjectMaturity = 'idea' | 'in-progress' | 'structured';
export type ProjectType = 'creation' | 'evolution' | 'extension';
export type MainObjectiveCategory = 'innovation' | 'growth' | 'cost-reduction' | 'automation' | 'ip-valorization' | 'other';
export type SupportNeed =
  | 'strategic-advisory'
  | 'exploratory-audit'
  | 'product-design'
  | 'software-ai-development'
  | 'fundraising-support'
  | 'market-study';
export type SpecificationStatus = 'yes' | 'in-progress' | 'no';
export type AiDataSystemsLevel = 'none' | 'limited' | 'core';
export type RegulatoryConstraints = 'high' | 'moderate' | 'low';
export type ComplexityLevel = 'high' | 'medium' | 'low';
export type TechnicalTeam = 'yes' | 'partial' | 'no';
export type BudgetRange = 'under-5k' | '5k-15k' | '15k-50k' | '50k-100k' | '100k-plus' | 'undefined';
export type DecisionTimeline = 'immediate' | 'under-1-month' | '1-3-months' | '3-6-months' | 'flexible';
export type StakeholderCount = '1-2' | '3-5' | '6-plus';
export type SprintOpenness = 'no' | 'discuss' | 'yes';
export type DecisionProcess = 'individual' | 'committee' | 'tender' | 'legal' | 'other';
export type IpProtectionStatus = 'none' | 'reflection' | 'active';

export interface QualificationAnswers {
  organizationName: string;
  organizationType: OrganizationType;
  contactName: string;
  contactRole: string;
  professionalEmail: string;
  phone: string;
  website: string;
  location: string;
  sector: string;
  projectSummary: string;
  projectMaturity: ProjectMaturity;
  projectType: ProjectType;
  mainObjectiveCategory: MainObjectiveCategory;
  supportNeed: SupportNeed;
  specificationStatus: SpecificationStatus;
  mainObjective: string;
  expectedOutcome: string;
  aiDataSystemsLevel: AiDataSystemsLevel;
  regulatoryConstraints: RegulatoryConstraints;
  complexityLevel: ComplexityLevel;
  technicalTeam: TechnicalTeam;
  budgetRange: BudgetRange;
  decisionTimeline: DecisionTimeline;
  stakeholderCount: StakeholderCount;
  decisionProcess: DecisionProcess;
  shortSprintOpenness: SprintOpenness;
  criticalDeadline: boolean;
  ipProtectionStatus: IpProtectionStatus;
  consentGiven: boolean;
}

export type QualificationCategory = 'NO-GO' | 'Pre-qualification' | 'GO' | 'Priority';

export interface QualificationResult {
  totalScore: number;
  maturityScore: number;
  feasibilityScore: number;
  strategicValueScore: number;
  category: QualificationCategory;
  message: string;
}

const messages: Record<QualificationCategory, string> = {
  'NO-GO': 'The project does not currently match the intervention scope.',
  'Pre-qualification': 'Additional information is required to assess feasibility.',
  GO: 'The project matches the intervention criteria. A structured phase can be considered.',
  Priority: 'The project shows strong alignment and can be prioritized for strategic intervention.'
};

function scoreByMap<T extends string>(value: T, map: Record<T, number>): number {
  return map[value] ?? 0;
}

function scoreTextField(value: string): number {
  return value.trim().length >= 20 ? 1 : 0;
}

export function classifyScore(totalScore: number): QualificationCategory {
  if (totalScore <= 5) return 'NO-GO';
  if (totalScore <= 10) return 'Pre-qualification';
  if (totalScore <= 15) return 'GO';
  return 'Priority';
}

export function evaluateQualification(answers: QualificationAnswers): QualificationResult {
  const maturityScore =
    scoreByMap(answers.projectMaturity, {
      idea: 1,
      'in-progress': 2,
      structured: 3
    }) +
    scoreByMap(answers.specificationStatus, {
      yes: 2,
      'in-progress': 1,
      no: 0
    }) +
    scoreTextField(answers.mainObjective) +
    scoreTextField(answers.expectedOutcome) +
    scoreTextField(answers.projectSummary);

  const feasibilityScore =
    scoreByMap(answers.regulatoryConstraints, {
      high: 0,
      moderate: 1,
      low: 2
    }) +
    scoreByMap(answers.complexityLevel, {
      high: 0,
      medium: 1,
      low: 2
    }) +
    scoreByMap(answers.technicalTeam, {
      yes: 2,
      partial: 1,
      no: 0
    }) +
    scoreByMap(answers.decisionTimeline, {
      immediate: 3,
      'under-1-month': 3,
      '1-3-months': 2,
      '3-6-months': 1,
      flexible: 1
    }) +
    scoreByMap(answers.stakeholderCount, {
      '1-2': 2,
      '3-5': 1,
      '6-plus': 0
    }) +
    scoreByMap(answers.decisionProcess, {
      individual: 2,
      committee: 1,
      legal: 1,
      tender: 0,
      other: 1
    }) +
    (answers.criticalDeadline ? 0 : 1);

  const strategicValueScore =
    scoreByMap(answers.projectType, {
      creation: 1,
      evolution: 2,
      extension: 2
    }) +
    scoreByMap(answers.mainObjectiveCategory, {
      innovation: 2,
      growth: 1,
      'cost-reduction': 1,
      automation: 1,
      'ip-valorization': 2,
      other: 1
    }) +
    scoreByMap(answers.supportNeed, {
      'strategic-advisory': 2,
      'exploratory-audit': 2,
      'product-design': 1,
      'software-ai-development': 2,
      'fundraising-support': 1,
      'market-study': 1
    }) +
    scoreByMap(answers.aiDataSystemsLevel, {
      none: 0,
      limited: 1,
      core: 2
    }) +
    scoreByMap(answers.budgetRange, {
      'under-5k': 0,
      '5k-15k': 0,
      '15k-50k': 1,
      '50k-100k': 2,
      '100k-plus': 3,
      undefined: 0
    }) +
    scoreByMap(answers.shortSprintOpenness, {
      no: 0,
      discuss: 1,
      yes: 2
    }) +
    scoreByMap(answers.ipProtectionStatus, {
      none: 0,
      reflection: 1,
      active: 2
    });

  const totalScore = maturityScore + feasibilityScore + strategicValueScore;
  const category = classifyScore(totalScore);

  return {
    totalScore,
    maturityScore,
    feasibilityScore,
    strategicValueScore,
    category,
    message: messages[category]
  };
}

export interface QualificationSubmission {
  submittedAt: string;
  answers: QualificationAnswers;
  evaluation: QualificationResult;
}

export function buildQualificationSubmission(answers: QualificationAnswers): QualificationSubmission {
  return {
    submittedAt: new Date().toISOString(),
    answers,
    evaluation: evaluateQualification(answers)
  };
}
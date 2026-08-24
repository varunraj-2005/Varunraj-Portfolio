export interface NavElement {
  symbol: string;
  number: string;
  name: string;
  sectionId: string;
  category: 'core' | 'dossier' | 'elements' | 'experiments' | 'numbers' | 'connection' | 'records' | 'results' | 'deal';
  atomicWeight?: string;
  electronConfig?: string;
}

export interface SkillElement {
  number: string;
  symbol: string;
  name: string;
  category: 'Programming' | 'Web Stack' | 'Database' | 'Intelligence & Core';
  categoryColor: string;
  proficiencyLevel: 'Mastery' | 'Advanced' | 'Proficient' | 'Core';
  qualitativeBar: number; // 0-100 for visual bar
  usedFor: string[];
  reactions: string;
  atomicMass: string;
}

export interface ProjectExperiment {
  id: string;
  number: string;
  symbol: string;
  title: string;
  tagline: string;
  classification: string;
  summary: string;
  specs: string[];
  highlights: string[];
  status: string;
  purity: string;
}

export interface CertificationRecord {
  id: string;
  recordNo: string;
  title: string;
  issuer: string;
  badge: string;
  score?: string;
  date: string;
  verificationId: string;
  status: 'VERIFIED' | 'ACCREDITED';
  category: string;
}

export interface MeasurementStat {
  id: string;
  metric: string;
  value: string;
  unit: string;
  label: string;
  precision: string;
  verificationNote: string;
  category: string;
}

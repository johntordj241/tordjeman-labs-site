export interface DashboardProject {
  id: string;
  title: string;
  description: string;
  status: 'in-progress' | 'completed' | 'planned';
  progress: number;
  impact: {
    [key: string]: string;
  };
  nextPhase: string;
  lastUpdate: string;
  category: string;
}
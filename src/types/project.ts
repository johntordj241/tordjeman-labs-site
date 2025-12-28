export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  stats?: {
    [key: string]: string;
  };
  demoUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
}
export type Product = {
  id: string;
  title: string;
  description: string;
  price: number | null;
  category: string;
  image: string;
  isPopular: boolean;
  availability: 'immediate' | 'on-demand';
};
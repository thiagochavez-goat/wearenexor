export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  extendedDescription: string;
  keyDeliverables: string[];
  duration: string;
  iconName: string; // matches lucide icons dynamically
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  imageUrl: string;
  tags: string[];
  metrics: string;
  client: string;
}

export interface ProcessStep {
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  duration: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatarUrl: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  metric?: string;
  statLabel?: string;
}

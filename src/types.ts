import { ReactNode } from 'react';

export interface Tool {
  id: string;
  name: string;
  icon: ReactNode;
  category: string;
  description: string;
  tags: string[];
  keyFeatures: string[];
  industryUseCase: string;
  integration: string[];
  licensing: string;
}

export interface Category {
  id: string;
  name: string;
  icon: ReactNode;
}
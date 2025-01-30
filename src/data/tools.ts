import { Database, Drill, Baseline as Pipeline, Mountain, FlaskRound as Flask, BarChart3, Shield, Brain } from 'lucide-react';
import { Tool, Category } from '../types';

export const categories: Category[] = [
  { id: 'reservoir', name: 'Reservoir Engineering', icon: <Database className="w-6 h-6" /> },
  { id: 'drilling', name: 'Drilling Engineering', icon: <Drill className="w-6 h-6" /> },
  { id: 'production', name: 'Production Engineering', icon: <Pipeline className="w-6 h-6" /> },
  { id: 'geoscience', name: 'Geoscience & Exploration', icon: <Mountain className="w-6 h-6" /> },
  { id: 'facilities', name: 'Pipeline & Facilities', icon: <Flask className="w-6 h-6" /> },
  { id: 'economics', name: 'Economic & Risk Analysis', icon: <BarChart3 className="w-6 h-6" /> },
  { id: 'hse', name: 'HSE', icon: <Shield className="w-6 h-6" /> },
  { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-6 h-6" /> },
];

export const tools: Tool[] = [
  {
    id: 'eclipse',
    name: 'Schlumberger ECLIPSE',
    icon: <Database className="w-6 h-6" />,
    category: 'reservoir',
    description: 'Industry-standard numerical reservoir simulator for oil, gas, and condensate reservoirs',
    tags: ['Simulation', 'Reservoir', 'Engineering'],
    keyFeatures: ['Black oil simulation', 'Thermal capabilities', 'Parallel processing'],
    industryUseCase: 'Field development planning',
    integration: ['Petrel', 'Techlog'],
    licensing: 'Commercial'
  },
  // ... Add all other tools here
];
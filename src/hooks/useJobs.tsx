
import { useState } from 'react';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  postedDate: string;
  category: string;
}

export function useJobs() {
  // Sample job data
  const [jobs] = useState<Job[]>([
    {
      id: '1',
      title: 'Frontend Developer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      description: 'We are looking for a skilled frontend developer with React experience.',
      postedDate: '2 days ago',
      category: 'Engineering'
    },
    {
      id: '2',
      title: 'Product Manager',
      company: 'InnovateCo',
      location: 'New York, NY',
      description: 'Lead product development and strategy for our SaaS platform.',
      postedDate: '1 week ago',
      category: 'Product'
    },
    {
      id: '3',
      title: 'UX Designer',
      company: 'DesignStudio',
      location: 'Austin, TX',
      description: 'Create beautiful and intuitive user experiences for our clients.',
      postedDate: '3 days ago',
      category: 'Design'
    },
    {
      id: '4',
      title: 'Data Scientist',
      company: 'AnalyticsPro',
      location: 'Remote',
      description: 'Analyze large datasets and build predictive models.',
      postedDate: '5 days ago',
      category: 'Data'
    },
    {
      id: '5',
      title: 'DevOps Engineer',
      company: 'CloudTech',
      location: 'Seattle, WA',
      description: 'Manage and improve our cloud infrastructure and CI/CD pipelines.',
      postedDate: 'Just now',
      category: 'Engineering'
    },
    {
      id: '6',
      title: 'Marketing Specialist',
      company: 'GrowthHub',
      location: 'Chicago, IL',
      description: 'Develop and execute marketing campaigns to drive user acquisition.',
      postedDate: '1 day ago',
      category: 'Marketing'
    },
  ]);

  const categories = ['Engineering', 'Product', 'Design', 'Data', 'Marketing'];

  return {
    jobs,
    categories
  };
}

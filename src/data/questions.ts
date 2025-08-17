import { Question } from '@/types/assessment';

export const assessmentQuestions: Question[] = [
  // Psychometric Section - Interest Scale
  {
    id: 'psy1',
    text: 'I am interested in creating long-term impact in communities.',
    type: 'likert',
    section: 'psychometric',
    construct: 'interest'
  },
  {
    id: 'psy2', 
    text: 'I follow sustainability or ESG trends regularly.',
    type: 'likert',
    section: 'psychometric',
    construct: 'interest'
  },
  {
    id: 'psy3',
    text: 'I enjoy balancing business and ethical decisions.',
    type: 'likert',
    section: 'psychometric',
    construct: 'interest'
  },
  {
    id: 'psy4',
    text: 'I prefer working with people rather than just data.',
    type: 'likert',
    section: 'psychometric',
    construct: 'cognitive_style'
  },
  {
    id: 'psy5',
    text: 'I am motivated more by internal values than external rewards.',
    type: 'likert',
    section: 'psychometric',
    construct: 'motivation'
  },

  // Technical & Aptitude Section
  {
    id: 'tech1',
    text: 'What does the "triple bottom line" refer to in business?',
    type: 'multiple_choice',
    section: 'technical',
    options: [
      'People, Planet, Profit',
      'Revenue, Growth, Market Share', 
      'Quality, Cost, Delivery',
      'Safety, Efficiency, Innovation'
    ]
  },
  {
    id: 'tech2',
    text: 'Which framework is commonly used for sustainability reporting?',
    type: 'multiple_choice', 
    section: 'technical',
    options: [
      'GRI (Global Reporting Initiative)',
      'IFRS (International Financial Reporting Standards)',
      'GAAP (Generally Accepted Accounting Principles)',
      'ISO 9001'
    ]
  },
  {
    id: 'tech3',
    text: 'A company faces accusations of greenwashing. What should be the first step?',
    type: 'multiple_choice',
    section: 'technical',
    options: [
      'Conduct an internal audit of all sustainability claims',
      'Immediately deny all accusations publicly',
      'Hire a PR firm to manage the crisis',
      'Reduce all environmental messaging'
    ]
  },
  {
    id: 'tech4',
    text: 'ESG stands for:',
    type: 'multiple_choice',
    section: 'technical', 
    options: [
      'Environmental, Social, Governance',
      'Economic, Sustainable, Growth',
      'Ethics, Standards, Guidelines',
      'Equity, Strategy, Goals'
    ]
  },

  // WISCAR Framework Questions
  {
    id: 'wiscar1',
    text: 'Do you take initiative in social causes without being asked?',
    type: 'likert',
    section: 'wiscar',
    construct: 'W'
  },
  {
    id: 'wiscar2',
    text: 'Do you actively keep up with sustainability policies and news?',
    type: 'likert',
    section: 'wiscar',
    construct: 'I'
  },
  {
    id: 'wiscar3',
    text: 'How confident are you in writing clear stakeholder communications?',
    type: 'likert',
    section: 'wiscar',
    construct: 'S'
  },
  {
    id: 'wiscar4',
    text: 'You can effectively analyze and identify gaps in sustainability reports.',
    type: 'likert',
    section: 'wiscar',
    construct: 'C'
  },
  {
    id: 'wiscar5',
    text: 'You actively seek and respond well to feedback for improvement.',
    type: 'likert',
    section: 'wiscar',
    construct: 'A'
  },
  {
    id: 'wiscar6',
    text: 'How well do you understand the day-to-day responsibilities of a CSR Manager?',
    type: 'likert',
    section: 'wiscar',
    construct: 'R'
  }
];

export const likertOptions = [
  { value: 1, label: 'Strongly Disagree' },
  { value: 2, label: 'Disagree' },
  { value: 3, label: 'Neutral' },
  { value: 4, label: 'Agree' },
  { value: 5, label: 'Strongly Agree' }
];
export interface Question {
  id: string;
  text: string;
  type: 'likert' | 'multiple_choice' | 'scenario';
  section: string;
  options?: string[];
  construct?: string;
}

export interface AssessmentResponse {
  questionId: string;
  value: number | string;
}

export interface SectionScores {
  psychometric: number;
  technical: number;
  wiscar: {
    W: number; // Will
    I: number; // Interest  
    S: number; // Skill
    C: number; // Cognitive Readiness
    A: number; // Ability to Learn
    R: number; // Real-World Alignment
  };
}

export interface AssessmentResults {
  scores: SectionScores;
  confidenceScore: number;
  recommendation: 'Yes' | 'No' | 'Maybe';
  insights: string[];
  nextSteps: string[];
  careerAlignment: string[];
}

export const ASSESSMENT_SECTIONS = {
  PSYCHOMETRIC: 'psychometric',
  TECHNICAL: 'technical', 
  WISCAR: 'wiscar'
} as const;
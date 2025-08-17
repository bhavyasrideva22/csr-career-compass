import { AssessmentResponse, SectionScores, AssessmentResults } from '@/types/assessment';
import { assessmentQuestions } from '@/data/questions';

export function calculateScores(responses: AssessmentResponse[]): AssessmentResults {
  const responseMap = new Map(responses.map(r => [r.questionId, r.value]));
  
  // Calculate psychometric score (average of interest, cognitive_style, motivation)
  const psychometricQuestions = assessmentQuestions.filter(q => q.section === 'psychometric');
  const psychometricSum = psychometricQuestions.reduce((sum, q) => {
    const response = responseMap.get(q.id);
    return sum + (typeof response === 'number' ? response : 0);
  }, 0);
  const psychometric = Math.round((psychometricSum / (psychometricQuestions.length * 5)) * 100);

  // Calculate technical score (correct answers / total)
  const technicalQuestions = assessmentQuestions.filter(q => q.section === 'technical');
  const correctAnswers = technicalQuestions.reduce((count, q) => {
    const response = responseMap.get(q.id);
    const correctAnswer = getCorrectAnswer(q.id);
    return count + (response === correctAnswer ? 1 : 0);
  }, 0);
  const technical = Math.round((correctAnswers / technicalQuestions.length) * 100);

  // Calculate WISCAR scores
  const wiscarQuestions = assessmentQuestions.filter(q => q.section === 'wiscar');
  const wiscarScores = {
    W: 0, I: 0, S: 0, C: 0, A: 0, R: 0
  };
  
  wiscarQuestions.forEach(q => {
    const response = responseMap.get(q.id);
    const score = typeof response === 'number' ? response : 0;
    const dimension = q.construct as keyof typeof wiscarScores;
    if (dimension && dimension in wiscarScores) {
      wiscarScores[dimension] = Math.round((score / 5) * 100);
    }
  });

  // Calculate overall confidence score
  const wiscarAverage = Object.values(wiscarScores).reduce((a, b) => a + b, 0) / 6;
  const confidenceScore = Math.round((psychometric + technical + wiscarAverage) / 3);

  // Determine recommendation
  let recommendation: 'Yes' | 'No' | 'Maybe';
  if (confidenceScore >= 80) recommendation = 'Yes';
  else if (confidenceScore >= 60) recommendation = 'Maybe';
  else recommendation = 'No';

  // Generate insights and next steps
  const insights = generateInsights(psychometric, technical, wiscarScores);
  const nextSteps = generateNextSteps(recommendation, psychometric, technical);
  const careerAlignment = getCareerAlignment(confidenceScore);

  return {
    scores: {
      psychometric,
      technical,
      wiscar: wiscarScores
    },
    confidenceScore,
    recommendation,
    insights,
    nextSteps,
    careerAlignment
  };
}

function getCorrectAnswer(questionId: string): string {
  const correctAnswers: Record<string, string> = {
    'tech1': 'People, Planet, Profit',
    'tech2': 'GRI (Global Reporting Initiative)',
    'tech3': 'Conduct an internal audit of all sustainability claims',
    'tech4': 'Environmental, Social, Governance'
  };
  return correctAnswers[questionId] || '';
}

function generateInsights(psychometric: number, technical: number, wiscar: SectionScores['wiscar']): string[] {
  const insights: string[] = [];
  
  if (psychometric >= 80) {
    insights.push("You demonstrate strong values alignment and motivation for CSR work.");
  } else if (psychometric >= 60) {
    insights.push("You show good potential but may benefit from developing stronger passion for social impact.");
  } else {
    insights.push("Consider exploring whether CSR aligns with your core interests and values.");
  }

  if (technical >= 80) {
    insights.push("You have solid foundational knowledge of CSR and sustainability concepts.");
  } else if (technical >= 60) {
    insights.push("You have basic knowledge but should strengthen your understanding of ESG frameworks.");
  } else {
    insights.push("You need to build fundamental knowledge in sustainability and CSR practices.");
  }

  const lowWiscarAreas = Object.entries(wiscar).filter(([_, score]) => score < 60);
  if (lowWiscarAreas.length > 0) {
    const areas = lowWiscarAreas.map(([key]) => {
      switch(key) {
        case 'W': return 'motivation and initiative';
        case 'I': return 'industry knowledge and curiosity';
        case 'S': return 'communication and reporting skills';
        case 'C': return 'analytical thinking';
        case 'A': return 'learning agility';
        case 'R': return 'understanding of CSR roles';
        default: return key;
      }
    });
    insights.push(`Focus on developing: ${areas.join(', ')}.`);
  }

  return insights;
}

function generateNextSteps(recommendation: string, psychometric: number, technical: number): string[] {
  const steps: string[] = [];
  
  if (recommendation === 'Yes') {
    steps.push("Begin with GRI certification or impact strategy course");
    steps.push("Start following leading CSR professionals on LinkedIn");
    steps.push("Look for CSR internship or volunteer opportunities");
  } else if (recommendation === 'Maybe') {
    if (technical < 70) {
      steps.push("Enroll in CSR fundamentals course");
      steps.push("Study ESG reporting frameworks (GRI, SASB, TCFD)");
    }
    if (psychometric < 70) {
      steps.push("Explore volunteer opportunities in sustainability");
      steps.push("Read case studies of successful CSR initiatives");
    }
    steps.push("Connect with CSR professionals for informational interviews");
  } else {
    steps.push("Consider alternative careers in sustainability or social impact");
    steps.push("Explore roles in ESG data analysis or environmental consulting");
    steps.push("Take a foundational course in business ethics or sustainability");
  }

  return steps;
}

function getCareerAlignment(confidenceScore: number): string[] {
  if (confidenceScore >= 80) {
    return [
      "CSR Manager",
      "Sustainability Director", 
      "ESG Strategy Lead",
      "Impact Consultant"
    ];
  } else if (confidenceScore >= 60) {
    return [
      "CSR Coordinator",
      "Sustainability Analyst",
      "ESG Reporting Specialist",
      "Social Impact Associate"
    ];
  } else {
    return [
      "ESG Data Analyst",
      "Environmental Compliance Officer",
      "Sustainability Coordinator",
      "Social Research Assistant"
    ];
  }
}
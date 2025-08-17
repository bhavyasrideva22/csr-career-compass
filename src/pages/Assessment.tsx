import { useState } from 'react';
import { AssessmentResponse } from '@/types/assessment';
import { assessmentQuestions } from '@/data/questions';
import { calculateScores } from '@/utils/scoring';
import { QuestionCard } from '@/components/QuestionCard';
import { ResultsDisplay } from '@/components/ResultsDisplay';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Assessment() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<AssessmentResponse[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [results, setResults] = useState(null);

  const currentQuestion = assessmentQuestions[currentQuestionIndex];
  const currentResponse = responses.find(r => r.questionId === currentQuestion?.id);

  const handleAnswer = (value: number | string) => {
    const newResponses = responses.filter(r => r.questionId !== currentQuestion.id);
    newResponses.push({ questionId: currentQuestion.id, value });
    setResponses(newResponses);
  };

  const handleNext = () => {
    if (currentQuestionIndex < assessmentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Assessment complete
      const assessmentResults = calculateScores(responses);
      setResults(assessmentResults);
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setResponses([]);
    setIsComplete(false);
    setResults(null);
  };

  const isAnswered = currentResponse !== undefined;
  const canProceed = isAnswered;

  if (isComplete && results) {
    return <ResultsDisplay results={results} onRestart={handleRestart} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            CSR Manager Assessment
          </h1>
          <p className="text-muted-foreground">
            Discover if Corporate Social Responsibility Management is right for you
          </p>
        </div>

        {/* Question */}
        <div className="mb-8">
          <QuestionCard
            question={currentQuestion}
            value={currentResponse?.value}
            onAnswer={handleAnswer}
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={assessmentQuestions.length}
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          <div className="text-sm text-muted-foreground">
            Section: {currentQuestion.section.charAt(0).toUpperCase() + currentQuestion.section.slice(1)}
          </div>

          <Button
            variant="assessment"
            onClick={handleNext}
            disabled={!canProceed}
          >
            {currentQuestionIndex === assessmentQuestions.length - 1 ? 'Finish Assessment' : 'Next'}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
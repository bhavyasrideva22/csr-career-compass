import { AssessmentResults } from '@/types/assessment';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, AlertCircle, XCircle, ArrowRight, Target, BookOpen, Users } from 'lucide-react';

interface ResultsDisplayProps {
  results: AssessmentResults;
  onRestart: () => void;
}

export function ResultsDisplay({ results, onRestart }: ResultsDisplayProps) {
  const getRecommendationIcon = () => {
    switch (results.recommendation) {
      case 'Yes': return <CheckCircle className="h-8 w-8 text-secondary" />;
      case 'Maybe': return <AlertCircle className="h-8 w-8 text-accent" />;
      case 'No': return <XCircle className="h-8 w-8 text-destructive" />;
    }
  };

  const getRecommendationText = () => {
    switch (results.recommendation) {
      case 'Yes': return 'Excellent fit for CSR Management!';
      case 'Maybe': return 'Good potential with some development needed';
      case 'No': return 'Consider alternative career paths';
    }
  };

  const getRecommendationColor = () => {
    switch (results.recommendation) {
      case 'Yes': return 'bg-secondary';
      case 'Maybe': return 'bg-accent';
      case 'No': return 'bg-destructive';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Your CSR Assessment Results
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive analysis of your suitability for CSR Management
          </p>
        </div>

        {/* Overall Recommendation */}
        <Card className="shadow-elegant">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              {getRecommendationIcon()}
            </div>
            <CardTitle className="text-2xl">{getRecommendationText()}</CardTitle>
            <div className="flex justify-center mt-4">
              <Badge className={`${getRecommendationColor()} text-white px-6 py-2 text-lg`}>
                Confidence Score: {results.confidenceScore}%
              </Badge>
            </div>
          </CardHeader>
        </Card>

        {/* Detailed Scores */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Psychometric & Technical Scores */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Core Assessment Scores
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Psychological Fit</span>
                  <span className="font-bold">{results.scores.psychometric}%</span>
                </div>
                <Progress value={results.scores.psychometric} className="h-3" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Technical Readiness</span>
                  <span className="font-bold">{results.scores.technical}%</span>
                </div>
                <Progress value={results.scores.technical} className="h-3" />
              </div>
            </CardContent>
          </Card>

          {/* WISCAR Framework */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-secondary" />
                WISCAR Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(results.scores.wiscar).map(([key, score]) => {
                const labels: Record<string, string> = {
                  W: 'Will & Motivation',
                  I: 'Interest & Curiosity', 
                  S: 'Skills & Communication',
                  C: 'Cognitive Readiness',
                  A: 'Ability to Learn',
                  R: 'Role Understanding'
                };
                return (
                  <div key={key}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{labels[key]}</span>
                      <span className="text-sm font-bold">{score}%</span>
                    </div>
                    <Progress value={score} className="h-2" />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Insights */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-accent" />
              Key Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {results.insights.map((insight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Career Alignment & Next Steps */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Recommended Career Paths</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {results.careerAlignment.map((career, index) => (
                  <Badge key={index} variant="outline" className="mr-2 mb-2">
                    {career}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {results.nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <Button variant="outline" onClick={onRestart}>
            Retake Assessment
          </Button>
          <Button variant="hero" asChild>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Explore Learning Paths
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
import { Question } from '@/types/assessment';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { likertOptions } from '@/data/questions';

interface QuestionCardProps {
  question: Question;
  value?: number | string;
  onAnswer: (value: number | string) => void;
  currentQuestion: number;
  totalQuestions: number;
}

export function QuestionCard({ 
  question, 
  value, 
  onAnswer, 
  currentQuestion, 
  totalQuestions 
}: QuestionCardProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-card">
      <CardHeader className="text-center">
        <div className="text-sm text-muted-foreground mb-2">
          Question {currentQuestion} of {totalQuestions}
        </div>
        <div className="w-full bg-muted rounded-full h-2 mb-4">
          <div 
            className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
          />
        </div>
        <CardTitle className="text-xl">{question.text}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {question.type === 'likert' && (
          <div className="grid gap-2">
            {likertOptions.map((option) => (
              <Button
                key={option.value}
                variant={value === option.value ? "default" : "outline"}
                className="w-full justify-start h-auto p-4"
                onClick={() => onAnswer(option.value)}
              >
                <div className="flex items-center justify-between w-full">
                  <span>{option.label}</span>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${
                          i < option.value 
                            ? 'bg-primary' 
                            : 'bg-border'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </Button>
            ))}
          </div>
        )}
        
        {question.type === 'multiple_choice' && question.options && (
          <div className="grid gap-2">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant={value === option ? "default" : "outline"}
                className="w-full justify-start h-auto p-4 text-left"
                onClick={() => onAnswer(option)}
              >
                <span className="mr-3 font-semibold">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </Button>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
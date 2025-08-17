// Update this page (the content is just a fallback if you fail to update the page)

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { Target, Users, TrendingUp, Award, Clock, CheckCircle } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-gradient-primary text-white mb-4 px-4 py-2">
              Career Assessment Tool
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Is CSR Management Right for You?
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover if Corporate Social Responsibility Management aligns with your values, 
              skills, and career aspirations through our comprehensive assessment.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => navigate('/assessment')}
              className="text-lg px-8 py-4"
            >
              Start Assessment
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Learn More
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">20-30 min</div>
              <div className="text-muted-foreground">Assessment Duration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">16</div>
              <div className="text-muted-foreground">Comprehensive Questions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Personalized Results</div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Discover */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What You'll Discover</h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive assessment evaluates multiple dimensions of your fit for CSR Management
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-card hover:shadow-elegant transition-all">
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Psychological Fit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Assess your values, personality traits, and motivation alignment with CSR work.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-secondary mb-2" />
                <CardTitle>Technical Readiness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Evaluate your knowledge of ESG frameworks, sustainability, and CSR practices.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all">
              <CardHeader>
                <Users className="h-8 w-8 text-accent mb-2" />
                <CardTitle>WISCAR Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive evaluation of Will, Interest, Skills, Cognitive readiness, Ability, and Role understanding.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Assessment Features */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Assessment Features</h2>
            <p className="text-lg text-muted-foreground">
              Built on proven frameworks and industry best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Psychometric Profiling</h3>
                  <p className="text-muted-foreground">Based on Big Five personality model and Holland Codes for accurate personality assessment.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Industry Knowledge Testing</h3>
                  <p className="text-muted-foreground">Evaluate understanding of ESG, sustainability frameworks, and CSR best practices.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Personalized Career Guidance</h3>
                  <p className="text-muted-foreground">Receive tailored recommendations and learning paths based on your results.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Award className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Evidence-Based Scoring</h3>
                  <p className="text-muted-foreground">Scientific approach to measuring aptitude and career fit with detailed score breakdown.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Quick Yet Thorough</h3>
                  <p className="text-muted-foreground">Complete assessment in 20-30 minutes with comprehensive insights and next steps.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Target className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Actionable Results</h3>
                  <p className="text-muted-foreground">Get specific recommendations for skill development and career path optimization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Discover Your CSR Potential?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards understanding your fit for Corporate Social Responsibility Management
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => navigate('/assessment')}
            className="text-lg px-8 py-4"
          >
            Begin Assessment Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;

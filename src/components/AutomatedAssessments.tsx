import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Brain, PlayCircle, CheckCircle, Clock, Award } from 'lucide-react';

interface AutomatedAssessmentsProps {}

export const AutomatedAssessments: React.FC<AutomatedAssessmentsProps> = () => {
  const [quizStatus, setQuizStatus] = useState<'idle' | 'generating' | 'ready' | 'completed'>('idle');
  const [score, setScore] = useState<number>(0);

  const generateQuiz = () => {
    setQuizStatus('generating');
    
    setTimeout(() => {
      setQuizStatus('ready');
    }, 2000);
  };

  const completeQuiz = () => {
    setQuizStatus('completed');
    setScore(85 + Math.floor(Math.random() * 15)); // Random score between 85-100
  };

  return (
    <section id="assessments" className="py-20 px-6 bg-background-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Automated Assessments</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Generate personalized quizzes and assessments based on your study materials. 
            Track your progress and identify areas for improvement.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quiz Generator */}
          <div className="glass-card p-8 rounded-2xl slide-in-right">
            <div className="text-center mb-6">
              <Brain className="w-16 h-16 text-accent-gold mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-2">AI Quiz Generator</h3>
              <p className="text-muted-foreground">
                Automatically create quizzes from your documents
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-secondary/50 p-4 rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Quiz Settings</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Questions:</span>
                    <span>10</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Difficulty:</span>
                    <span>Adaptive</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time Limit:</span>
                    <span>15 minutes</span>
                  </div>
                </div>
              </div>

              <Button 
                className={`w-full py-3 rounded-xl ${
                  quizStatus === 'idle' ? 'btn-premium' : 'btn-secondary'
                }`}
                onClick={generateQuiz}
                disabled={quizStatus === 'generating'}
              >
                {quizStatus === 'generating' ? (
                  <>
                    <Brain className="w-5 h-5 mr-2 animate-spin" />
                    Generating Quiz...
                  </>
                ) : quizStatus === 'ready' ? (
                  <>
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Start Quiz
                  </>
                ) : quizStatus === 'completed' ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Quiz Completed
                  </>
                ) : (
                  'Generate Quiz'
                )}
              </Button>
            </div>
          </div>

          {/* Quiz Progress */}
          <div className="glass-card p-8 rounded-2xl bounce-in">
            <div className="text-center mb-6">
              <Clock className="w-16 h-16 text-accent-gold mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-2">Progress Tracking</h3>
            </div>

            {quizStatus === 'ready' && (
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-gold mb-2">
                    Question 3/10
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-gradient-accent h-2 rounded-full progress-glow" style={{ width: '30%' }} />
                  </div>
                </div>

                <div className="bg-secondary/50 p-4 rounded-lg">
                  <p className="text-foreground font-medium mb-3">
                    What is the primary function of mitochondria?
                  </p>
                  <div className="space-y-2">
                    {['Energy production', 'Protein synthesis', 'DNA storage', 'Cell division'].map((option, index) => (
                      <div key={index} className="p-2 bg-secondary rounded cursor-pointer hover:bg-secondary-hover transition-colors">
                        <span className="text-muted-foreground">{option}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  className="w-full btn-premium py-2 rounded-lg"
                  onClick={completeQuiz}
                >
                  Complete Quiz
                </Button>
              </div>
            )}

            {quizStatus !== 'ready' && (
              <div className="text-center text-muted-foreground">
                <p>Generate a quiz to start tracking your progress</p>
              </div>
            )}
          </div>

          {/* Results */}
          <div className="glass-card p-8 rounded-2xl slide-in-right delay-200">
            <div className="text-center mb-6">
              <Award className="w-16 h-16 text-accent-gold mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-2">Assessment Results</h3>
            </div>

            {quizStatus === 'completed' ? (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-gradient mb-2">
                    {score}%
                  </div>
                  <p className="text-lg text-foreground">Excellent Work!</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Correct Answers:</span>
                    <span className="text-success font-medium">{Math.floor(score/10)}/10</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Time Taken:</span>
                    <span className="text-foreground">12:34</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Accuracy:</span>
                    <span className="text-accent-gold font-medium">{score}%</span>
                  </div>
                </div>

                <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                  <p className="text-success text-sm">
                    🎉 Great job! You've mastered this topic. Ready for the next challenge?
                  </p>
                </div>

                <Button 
                  className="w-full btn-secondary py-2 rounded-lg"
                  onClick={() => {
                    setQuizStatus('idle');
                    setScore(0);
                  }}
                >
                  Take Another Quiz
                </Button>
              </div>
            ) : (
              <div className="text-center text-muted-foreground">
                <p>Complete an assessment to see your results</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomatedAssessments;
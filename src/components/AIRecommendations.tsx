import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, RefreshCw, BookOpen, Clock, Target, Lightbulb } from 'lucide-react';

interface AIRecommendationsProps {}

export const AIRecommendations: React.FC<AIRecommendationsProps> = () => {
  const [recommendations, setRecommendations] = useState([
    {
      type: 'study_focus',
      title: 'Focus on Cellular Biology',
      description: 'Your quiz results show room for improvement in cellular processes. Spend 30 minutes reviewing mitochondria functions.',
      priority: 'high',
      icon: Target,
      estimatedTime: '30 min'
    },
    {
      type: 'study_method',
      title: 'Try Spaced Repetition',
      description: 'Based on your learning pattern, spaced repetition could improve retention by 40%.',
      priority: 'medium',
      icon: Clock,
      estimatedTime: '15 min setup'
    },
    {
      type: 'resource',
      title: 'Recommended Reading',
      description: 'Chapter 12: "Cellular Energy" aligns perfectly with your current study goals.',
      priority: 'medium',
      icon: BookOpen,
      estimatedTime: '45 min'
    }
  ]);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshRecommendations = () => {
    setIsRefreshing(true);
    
    setTimeout(() => {
      const newRecommendations = [
        {
          type: 'practice',
          title: 'Practice Problems Available',
          description: 'New practice questions have been generated based on your recent document uploads.',
          priority: 'high',
          icon: Lightbulb,
          estimatedTime: '20 min'
        },
        {
          type: 'review',
          title: 'Review Previous Topics',
          description: 'It\'s been 3 days since you studied photosynthesis. A quick review is recommended.',
          priority: 'low',
          icon: RefreshCw,
          estimatedTime: '15 min'
        },
        {
          type: 'study_method',
          title: 'Visual Learning Opportunity',
          description: 'Your learning style indicates you prefer visual content. Try the new diagram exercises.',
          priority: 'medium',
          icon: Target,
          estimatedTime: '25 min'
        }
      ];
      
      setRecommendations(newRecommendations);
      setIsRefreshing(false);
    }, 2000);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-accent-gold bg-accent-gold/5';
      case 'medium': return 'border-l-warning bg-warning/5';
      case 'low': return 'border-l-success bg-success/5';
      default: return 'border-l-muted bg-muted/5';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-accent-gold';
      case 'medium': return 'text-warning';
      case 'low': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section id="recommendations" className="py-20 px-6 bg-background-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">AI-Driven Recommendations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get personalized study suggestions powered by advanced AI analysis of your 
            learning patterns, performance, and goals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header with Refresh Button */}
          <div className="flex justify-between items-center mb-8 slide-in-right">
            <div className="flex items-center space-x-3">
              <Sparkles className="w-8 h-8 text-accent-gold" />
              <h3 className="text-2xl font-semibold text-foreground">Personalized Study Tips</h3>
            </div>
            
            <Button 
              className={`btn-premium px-6 py-3 rounded-xl ${isRefreshing ? 'opacity-50' : ''}`}
              onClick={refreshRecommendations}
              disabled={isRefreshing}
            >
              {isRefreshing ? (
                <>
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                  Refreshing...
                </>
              ) : (
                <>
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Refresh Recommendations
                </>
              )}
            </Button>
          </div>

          {/* Recommendations List */}
          <div className="space-y-6">
            {recommendations.map((rec, index) => (
              <div 
                key={index}
                className={`glass-card p-6 rounded-2xl border-l-4 ${getPriorityColor(rec.priority)} bounce-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-gold/20 rounded-xl flex items-center justify-center">
                      <rec.icon className="w-6 h-6 text-accent-gold" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-foreground">{rec.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityText(rec.priority)} bg-current/10`}>
                        {rec.priority.toUpperCase()}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {rec.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>Estimated time: {rec.estimatedTime}</span>
                      </div>
                      
                      <Button className="btn-secondary px-4 py-2 rounded-lg text-sm">
                        Start Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* AI Insight Card */}
          <div className="glass-card p-8 rounded-2xl mt-8 bg-accent-gold/5 border-accent-gold/20 slide-in-right delay-300">
            <div className="flex items-center space-x-4 mb-4">
              <Sparkles className="w-8 h-8 text-accent-gold" />
              <h3 className="text-xl font-semibold text-foreground">AI Insight</h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your learning velocity has increased by <span className="text-accent-gold font-semibold">23%</span> this week! 
              Your consistent study schedule and focus on weak areas are paying off. 
              Keep up this momentum to reach your goal of mastering Biology by next month.
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                <span className="text-sm text-success font-medium">On Track</span>
              </div>
              <span className="text-sm text-muted-foreground">
                Projected completion: 3 weeks ahead of schedule
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIRecommendations;
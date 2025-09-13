import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, Target, Calendar, PlayCircle } from 'lucide-react';

interface ProgressAnalyticsProps {}

export const ProgressAnalytics: React.FC<ProgressAnalyticsProps> = () => {
  const [progress, setProgress] = useState(65);
  const [isAnimating, setIsAnimating] = useState(false);

  const updateProgress = () => {
    setIsAnimating(true);
    
    // Simulate progress update
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 85) {
          clearInterval(interval);
          setIsAnimating(false);
          return 85;
        }
        return prev + 1;
      });
    }, 50);
  };

  const stats = [
    { label: 'Study Hours', value: '127.5', icon: Calendar, color: 'text-accent-gold' },
    { label: 'Topics Mastered', value: '23/30', icon: Target, color: 'text-success' },
    { label: 'Weekly Growth', value: '+12%', icon: TrendingUp, color: 'text-accent-gold' },
    { label: 'Quiz Average', value: '88%', icon: BarChart3, color: 'text-success' },
  ];

  return (
    <section id="analytics" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Progress Analytics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive insights into your learning journey with detailed analytics, 
            progress tracking, and performance metrics to optimize your study plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Progress Visualization */}
          <div className="glass-card p-8 rounded-2xl slide-in-right">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Learning Progress</h3>
              
              {/* Circular Progress */}
              <div className="relative w-48 h-48 mx-auto mb-6">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="hsl(var(--secondary))"
                    strokeWidth="8"
                    fill="none"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress / 100)}`}
                    className={`transition-all duration-1000 ease-out ${isAnimating ? 'progress-glow' : ''}`}
                  />
                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--accent-gold))" />
                      <stop offset="100%" stopColor="hsl(var(--accent-gold-muted))" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Center text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient mb-1">
                      {progress}%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Complete
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                className="btn-premium px-6 py-3 rounded-xl"
                onClick={updateProgress}
                disabled={isAnimating}
              >
                {isAnimating ? (
                  <>
                    <PlayCircle className="w-5 h-5 mr-2 animate-spin" />
                    Updating...
                  </>
                ) : (
                  <>
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Update Progress
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="space-y-6 bounce-in">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Performance Metrics</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="glass-card p-6 rounded-xl hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                  </div>
                  <div className={`text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Weekly Progress Chart Placeholder */}
            <div className="glass-card p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-foreground mb-4">Weekly Study Pattern</h4>
              <div className="flex items-end space-x-2 h-32">
                {[40, 65, 45, 80, 55, 70, 90].map((height, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="bg-gradient-accent rounded-t w-full transition-all duration-500 hover:opacity-80"
                      style={{ 
                        height: `${height}%`,
                        animationDelay: `${index * 100}ms`
                      }}
                    />
                    <span className="text-xs text-muted-foreground mt-2">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="glass-card p-6 rounded-xl bg-success/5 border-success/20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-success">Consistency Streak</h4>
                  <p className="text-success/80">7 days of continuous learning!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressAnalytics;
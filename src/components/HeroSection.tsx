import React from 'react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';

interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          filter: 'brightness(0.3)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent-gold/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent-gold/5 rounded-full blur-2xl animate-pulse delay-500" />
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-accent-gold/15 rounded-full blur-lg animate-pulse delay-1000" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 fade-in">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-foreground">Personalized</span>
            <br />
            <span className="text-gradient">Study System</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Transform your learning experience with AI-driven document processing, 
            automated assessments, and personalized study recommendations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              className="btn-premium px-8 py-4 text-lg rounded-xl"
              onClick={() => document.getElementById('document-processing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Learning
            </Button>
            <Button 
              variant="outline" 
              className="btn-secondary px-8 py-4 text-lg rounded-xl border-2 border-glass-border"
            >
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent-gold rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
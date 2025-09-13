import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-card border-b border-glass-border backdrop-blur-glass py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-bold text-gradient">
          StudyAI Pro
        </div>
        
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection('document-processing')}
            className="text-foreground hover:text-accent-gold transition-colors"
          >
            Document Processing
          </button>
          <button
            onClick={() => scrollToSection('assessments')}
            className="text-foreground hover:text-accent-gold transition-colors"
          >
            Assessments
          </button>
          <button
            onClick={() => scrollToSection('analytics')}
            className="text-foreground hover:text-accent-gold transition-colors"
          >
            Analytics
          </button>
          <button
            onClick={() => scrollToSection('recommendations')}
            className="text-foreground hover:text-accent-gold transition-colors"
          >
            AI Recommendations
          </button>
        </div>

        <Button className="btn-premium px-6 py-2 rounded-lg">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
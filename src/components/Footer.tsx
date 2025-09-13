import React from 'react';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="py-12 px-6 border-t border-glass-border">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          <div className="text-3xl font-bold text-gradient">
            StudyAI Pro
          </div>
          
          <p className="text-muted-foreground max-w-md mx-auto">
            Revolutionizing education through AI-powered personalized learning experiences. 
            Master any subject with intelligent study systems.
          </p>
          
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-accent-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent-gold transition-colors">Support</a>
            <a href="#" className="hover:text-accent-gold transition-colors">Contact</a>
          </div>
          
          <div className="pt-6 border-t border-glass-border/50">
            <p className="text-sm text-muted-foreground">
              © 2024 StudyAI Pro. All rights reserved. | Powered by Advanced AI Technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
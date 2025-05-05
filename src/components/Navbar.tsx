import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-sand-50/95 backdrop-blur-md shadow-sm' : 'bg-earth-dark text-sand-50'}`}>
      <div className="container-custom flex items-center justify-between h-12">
        <a href="#" className="text-lg font-display font-medium tracking-tight">
          The Vedra
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <a href="#how-it-works" className="hover:text-earth-light transition-colors font-medium text-sm">How It Works</a>
          <a href="#features" className="hover:text-earth-light transition-colors font-medium text-sm">Features</a>
          <a href="#pricing" className="hover:text-earth-light transition-colors font-medium text-sm">Pricing</a>
          <a href="#faq" className="hover:text-earth-light transition-colors font-medium text-sm">FAQ</a>
          <Button asChild size="sm" className="bg-sand-100 hover:bg-sand-200 text-earth-dark font-medium ml-1 h-7 px-4 shadow-md border border-earth-dark/10 hover:scale-105 transition-all duration-200">
            <a href="#get-started">
              Start Now <ArrowRight className="ml-1 h-3 w-3" />
            </a>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-1" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-sand-50 border-t border-sand-300/30 shadow-md">
          <div className="container-custom py-2 flex flex-col">
            <a href="#how-it-works" className="py-1.5 text-earth-dark/80 hover:text-earth-dark transition-colors font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#features" className="py-1.5 text-earth-dark/80 hover:text-earth-dark transition-colors font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#pricing" className="py-1.5 text-earth-dark/80 hover:text-earth-dark transition-colors font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#faq" className="py-1.5 text-earth-dark/80 hover:text-earth-dark transition-colors font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <Button asChild className="mt-2 bg-earth-dark hover:bg-earth-darker h-8 text-sm w-full shadow-md hover:scale-[1.02] transition-all duration-200 font-medium">
              <a href="#get-started" onClick={() => setMobileMenuOpen(false)}>
                Start Now <ArrowRight className="ml-1 h-3 w-3" />
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

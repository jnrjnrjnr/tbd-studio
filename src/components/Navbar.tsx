
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-sand-50/95 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container-custom flex items-center justify-between h-24">
        <a href="#" className="text-2xl font-display font-medium italic text-earth-dark">
          TBD Studio
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-earth-dark/80 hover:text-earth-dark transition-colors">How It Works</a>
          <a href="#features" className="text-earth-dark/80 hover:text-earth-dark transition-colors">Features</a>
          <a href="#pricing" className="text-earth-dark/80 hover:text-earth-dark transition-colors">Pricing</a>
          <a href="#faq" className="text-earth-dark/80 hover:text-earth-dark transition-colors">FAQ</a>
          <Button asChild variant="outline" className="border-earth hover:bg-earth-dark/5 text-earth-dark">
            <a href="#get-started">Start Now</a>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-earth-dark p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-sand-50 border-t border-sand-300/30">
          <div className="container-custom py-4 flex flex-col">
            <a href="#how-it-works" className="py-3 text-earth-dark/80 hover:text-earth-dark transition-colors" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#features" className="py-3 text-earth-dark/80 hover:text-earth-dark transition-colors" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#pricing" className="py-3 text-earth-dark/80 hover:text-earth-dark transition-colors" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#faq" className="py-3 text-earth-dark/80 hover:text-earth-dark transition-colors" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <Button asChild className="mt-4 bg-earth-dark hover:bg-earth-darker">
              <a href="#get-started" onClick={() => setMobileMenuOpen(false)}>Start Now</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

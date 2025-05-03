
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-sand-50/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container-custom flex items-center justify-between h-16">
        <a href="#" className="text-xl font-display font-medium italic text-earth-dark tracking-tight">
          TBD Studio
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#how-it-works" className="text-earth-dark/80 hover:text-earth-dark transition-colors font-medium text-sm">How It Works</a>
          <a href="#features" className="text-earth-dark/80 hover:text-earth-dark transition-colors font-medium text-sm">Features</a>
          <a href="#pricing" className="text-earth-dark/80 hover:text-earth-dark transition-colors font-medium text-sm">Pricing</a>
          <a href="#faq" className="text-earth-dark/80 hover:text-earth-dark transition-colors font-medium text-sm">FAQ</a>
          <Button asChild variant="outline" className="border-earth hover:bg-earth-dark/5 text-earth-dark h-8 text-sm">
            <a href="#get-started">Start Now</a>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-earth-dark p-1" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-sand-50 border-t border-sand-300/30">
          <div className="container-custom py-3 flex flex-col">
            <a href="#how-it-works" className="py-2 text-earth-dark/80 hover:text-earth-dark transition-colors font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#features" className="py-2 text-earth-dark/80 hover:text-earth-dark transition-colors font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#pricing" className="py-2 text-earth-dark/80 hover:text-earth-dark transition-colors font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#faq" className="py-2 text-earth-dark/80 hover:text-earth-dark transition-colors font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <Button asChild className="mt-3 bg-earth-dark hover:bg-earth-darker h-8 text-sm">
              <a href="#get-started" onClick={() => setMobileMenuOpen(false)}>Start Now</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

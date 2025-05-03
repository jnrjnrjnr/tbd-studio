
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background shadow-sm' : 'bg-transparent'}`}>
      <div className="container-custom flex items-center justify-between h-20">
        <a href="#" className="text-2xl font-bold">
          TBD Studio
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">How It Works</a>
          <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">Features</a>
          <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">Pricing</a>
          <a href="#faq" className="text-foreground/80 hover:text-foreground transition-colors">FAQ</a>
          <Button asChild>
            <a href="#get-started">Launch My Site</a>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background">
          <div className="container-custom py-4 flex flex-col">
            <a href="#how-it-works" className="py-3 text-foreground/80 hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#features" className="py-3 text-foreground/80 hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#pricing" className="py-3 text-foreground/80 hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#faq" className="py-3 text-foreground/80 hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <Button asChild className="mt-4">
              <a href="#get-started" onClick={() => setMobileMenuOpen(false)}>Launch My Site</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

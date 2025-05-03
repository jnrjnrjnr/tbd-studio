
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUp } from 'lucide-react';

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className={`fixed bottom-6 right-6 z-40 flex items-center space-x-3 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'}`}>
      <Button asChild className="bg-earth hover:bg-earth-dark shadow-md shadow-earth/20 h-10 px-4 py-2 text-sm">
        <a href="#get-started">Launch Now</a>
      </Button>
      <button 
        onClick={scrollToTop}
        className="bg-sand-200 hover:bg-sand-300 text-earth-dark p-2 rounded-full transition-colors shadow-md"
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
};


import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUp } from 'lucide-react';

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
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
    <div className={`fixed bottom-3 right-3 z-40 flex items-center space-x-2 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'}`}>
      <Button asChild className="bg-earth-dark hover:bg-earth-darker text-sand-50 shadow-md shadow-earth/20 h-8 px-2 py-1 text-xs">
        <a href="#get-started">Launch Now</a>
      </Button>
      <button 
        onClick={scrollToTop}
        className="bg-sand-200 hover:bg-sand-300 text-earth-dark p-1 rounded-full transition-colors shadow-sm"
        aria-label="Scroll to top"
      >
        <ArrowUp size={14} />
      </button>
    </div>
  );
};

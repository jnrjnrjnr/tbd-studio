import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Sun, Moon, Type, Eye } from "lucide-react";

export const AccessibilityToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleFontSize = () => {
    const sizes = ['normal', 'large', 'x-large'];
    const currentIndex = sizes.indexOf(fontSize);
    const nextIndex = (currentIndex + 1) % sizes.length;
    const newSize = sizes[nextIndex];
    
    setFontSize(newSize);
    document.documentElement.style.fontSize = 
      newSize === 'normal' ? '16px' : 
      newSize === 'large' ? '18px' : '20px';
  };

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-2">
      <Button
        onClick={toggleTheme}
        size="sm"
        variant="outline"
        className="w-10 h-10 p-0 bg-white/90 backdrop-blur-sm border-sand-200 shadow-lg hover:bg-white"
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? <Sun size={16} /> : <Moon size={16} />}
      </Button>
      
      <Button
        onClick={toggleFontSize}
        size="sm"
        variant="outline"
        className="w-10 h-10 p-0 bg-white/90 backdrop-blur-sm border-sand-200 shadow-lg hover:bg-white"
        title="Increase font size"
      >
        <Type size={16} />
      </Button>
      
      <Button
        onClick={toggleContrast}
        size="sm"
        variant="outline"
        className={`w-10 h-10 p-0 backdrop-blur-sm border-sand-200 shadow-lg hover:bg-white ${
          highContrast ? 'bg-yellow-100' : 'bg-white/90'
        }`}
        title="Toggle high contrast"
      >
        <Eye size={16} />
      </Button>
    </div>
  );
}; 
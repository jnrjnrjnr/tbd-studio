import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useGSAP = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Fade in animation
    gsap.fromTo(element, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  return elementRef;
};

export const useButtonHover = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseEnter = () => {
      gsap.to(button, { 
        scale: 1.05, 
        duration: 0.2, 
        ease: "power2.out" 
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, { 
        scale: 1, 
        duration: 0.2, 
        ease: "power2.out" 
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return buttonRef;
};

export const useStepProgress = (currentStep: number, totalSteps: number) => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const progress = progressRef.current;
    if (!progress) return;

    const percentage = (currentStep / totalSteps) * 100;
    
    gsap.to(progress, {
      width: `${percentage}%`,
      duration: 0.5,
      ease: "power2.out"
    });
  }, [currentStep, totalSteps]);

  return progressRef;
}; 
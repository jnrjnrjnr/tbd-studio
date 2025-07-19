import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import { useGSAP, useStepProgress } from "@/hooks/useGSAP";

type StepProps = {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
  isActive?: boolean;
};

const Step = ({ number, title, description, isLast = false, isActive = false }: StepProps) => {
  const stepRef = useGSAP();
  
  return (
    <div ref={stepRef} className="flex">
      <div className="flex flex-col items-center mr-3">
        <div className={`flex items-center justify-center w-8 h-8 rounded-sm font-display font-bold text-sm shadow-sm transition-all duration-300 ${
          isActive 
            ? 'bg-earth-dark text-sand-50 shadow-earth/20' 
            : 'bg-sand-200 text-earth-dark/60'
        }`}>
          {number}
        </div>
        {!isLast && <div className="w-0.5 bg-gradient-to-b from-earth/60 to-sand-300 grow mt-1.5"></div>}
      </div>
      <div className={cn("pb-5", isLast && "pb-0")}>
        <h3 className={`text-base font-display font-medium mb-0.5 transition-colors duration-300 ${
          isActive ? 'text-earth-darker' : 'text-earth-dark/60'
        }`}>{title}</h3>
        <p className="text-earth-dark/80 text-xs">{description}</p>
      </div>
    </div>
  );
};

export const HowItWorks = () => {
  const progressRef = useStepProgress(1, 3);
  const containerRef = useGSAP();
  
  return (
    <section id="how-it-works" className="py-6 bg-sand-50">
      <div className="container-custom">
        <div className="text-center mb-5">
          <h2 className="text-xl md:text-2xl font-display font-medium mb-1 text-earth-darker">How It Works</h2>
          <p className="text-sm text-earth-dark/80 max-w-xl mx-auto">
            From concept to live website in 24 hours
          </p>
        </div>
        
        {/* Progress Bar */}
        <div className="max-w-lg mx-auto mb-6">
          <div className="bg-sand-200 rounded-full h-2 overflow-hidden">
            <div 
              ref={progressRef}
              className="bg-earth-dark h-full rounded-full transition-all duration-500"
              style={{ width: '33%' }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-earth-dark/60 mt-2">
            <span>Brief</span>
            <span>Build</span>
            <span>Launch</span>
          </div>
        </div>
        
        <div ref={containerRef} className="max-w-lg mx-auto bg-white p-4 rounded border border-sand-200">
          <Step 
            number={1} 
            title="Project Brief" 
            description="Fill out our quick questionnaire about your business, goals, and design preferences. It takes just 10 minutes."
            isActive={true}
          />
          <Step 
            number={2} 
            title="Development" 
            description="Our team builds your fully functional site with all pages, forms, and features based on your brief."
          />
          <Step 
            number={3} 
            title="Launch" 
            description="We deliver your completed site within 24 hours of your initial request, ready to go live immediately."
            isLast
          />
        </div>
        
        <div className="text-center mt-4">
          <a href="https://tally.so/r/3Eo66B" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-earth-dark hover:text-earth-darker text-sm font-medium">
            Ready to start? <MoveRight size={14} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

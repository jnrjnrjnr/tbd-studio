import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";

type StepProps = {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
};

const Step = ({ number, title, description, isLast = false }: StepProps) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-sm bg-earth-dark text-sand-50 font-display font-bold text-sm shadow-sm shadow-earth/20">
          {number}
        </div>
        {!isLast && <div className="w-0.5 bg-gradient-to-b from-earth/60 to-sand-300 grow mt-1.5"></div>}
      </div>
      <div className={cn("pb-5", isLast && "pb-0")}>
        <h3 className="text-base font-display font-medium mb-0.5 text-earth-darker">{title}</h3>
        <p className="text-earth-dark/80 text-xs">{description}</p>
      </div>
    </div>
  );
};

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-6 bg-sand-50">
      <div className="container-custom">
        <div className="text-center mb-5">
          <h2 className="text-xl md:text-2xl font-display font-medium mb-1 text-earth-darker">How It Works</h2>
          <p className="text-sm text-earth-dark/80 max-w-xl mx-auto">
            From concept to live website in 24 hours
          </p>
        </div>
        
        <div className="max-w-lg mx-auto bg-white p-4 rounded border border-sand-200">
          <Step 
            number={1} 
            title="Project Brief" 
            description="Fill out our quick questionnaire about your business, goals, and design preferences. It takes just 10 minutes."
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
          <a href="#get-started" className="inline-flex items-center text-earth-dark hover:text-earth-darker text-sm font-medium">
            Ready to start? <MoveRight size={14} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};


import { cn } from "@/lib/utils";

type StepProps = {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
};

const Step = ({ number, title, description, isLast = false }: StepProps) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-earth text-sand-50 font-display font-bold text-lg shadow-md shadow-earth/20">
          {number}
        </div>
        {!isLast && <div className="w-0.5 bg-gradient-to-b from-earth/60 to-sand-300 grow mt-3"></div>}
      </div>
      <div className={cn("pb-10", isLast && "pb-0")}>
        <h3 className="text-xl font-display font-medium mb-1 text-earth-darker">{title}</h3>
        <p className="text-earth-dark/80 text-sm">{description}</p>
      </div>
    </div>
  );
};

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-12 px-4 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-display font-medium mb-3 text-earth-darker">How It Works</h2>
          <p className="text-lg text-earth-dark/80 max-w-xl mx-auto">
            Two simple steps to get your business online
          </p>
        </div>
        
        <div className="max-w-xl mx-auto bg-sand-50 p-6 rounded-lg border border-sand-200">
          <Step 
            number={1} 
            title="Share your vision" 
            description="Send us your existing site or business details. Tell us about your brand, goals, and preferences."
          />
          <Step 
            number={2} 
            title="Get your new site in 24 hours" 
            description="We'll deliver your beautiful, mobile-friendly, SEO-optimized website within a day. No waiting, no hassle."
            isLast
          />
        </div>
      </div>
    </section>
  );
};

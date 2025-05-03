
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
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-earth text-sand-50 font-display font-bold text-lg shadow-md shadow-earth/20">
          {number}
        </div>
        {!isLast && <div className="w-0.5 bg-gradient-to-b from-earth/60 to-sand-300 grow mt-2"></div>}
      </div>
      <div className={cn("pb-8", isLast && "pb-0")}>
        <h3 className="text-lg font-display font-medium mb-1 text-earth-darker">{title}</h3>
        <p className="text-earth-dark/80 text-sm">{description}</p>
      </div>
    </div>
  );
};

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-10 bg-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-medium mb-2 text-earth-darker">How It Works</h2>
          <p className="text-base text-earth-dark/80 max-w-xl mx-auto">
            Get online in two simple steps
          </p>
        </div>
        
        <div className="max-w-xl mx-auto bg-sand-50 p-5 rounded-lg border border-sand-200">
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


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
      <div className="flex flex-col items-center mr-6">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-earth text-sand-50 font-display font-bold text-xl shadow-lg shadow-earth/20">
          {number}
        </div>
        {!isLast && <div className="w-0.5 bg-gradient-to-b from-earth/60 to-sand-300 grow mt-4"></div>}
      </div>
      <div className={cn("pb-12", isLast && "pb-0")}>
        <h3 className="text-2xl font-display font-medium mb-2 text-earth-darker">{title}</h3>
        <p className="text-earth-dark/80">{description}</p>
      </div>
    </div>
  );
};

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-4 text-earth-darker">How It Works</h2>
          <p className="text-xl text-earth-dark/80 max-w-xl mx-auto">
            Two simple steps to get your business online
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-sand-50 p-10 rounded-xl border border-sand-200">
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


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
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg shadow-lg shadow-primary/20">
          {number}
        </div>
        {!isLast && <div className="w-0.5 bg-gradient-to-b from-primary/60 to-muted grow mt-4"></div>}
      </div>
      <div className={cn("pb-12", isLast && "pb-0")}>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-700 bg-clip-text text-transparent">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process gets your business online in just 24 hours
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-gradient-to-b from-accent/30 to-background p-8 rounded-2xl">
          <Step 
            number={1} 
            title="Show us your current site — or let us know you don't have one" 
            description="Share your existing website or business details if you're starting from scratch. We'll understand your brand and goals."
          />
          <Step 
            number={2} 
            title="Choose a modern design template" 
            description="Select from our curated collection of professional designs tailored for your industry and business needs."
          />
          <Step 
            number={3} 
            title="We deliver your refreshed site in 24 hours" 
            description="Your new mobile-friendly, SEO-optimized website will be ready within 24 hours of approval. No waiting, no tech hassle."
            isLast
          />
        </div>
      </div>
    </section>
  );
};

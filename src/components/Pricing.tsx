
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

type PlanProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  isAddon?: boolean;
  buttonText: string;
};

const Plan = ({ title, price, description, features, isPopular = false, isAddon = false, buttonText }: PlanProps) => {
  return (
    <Card className={`p-4 relative card-shadow border-0 ${isPopular ? 'shadow-xl bg-accent/40' : 'bg-white'}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-earth-dark text-sand-50 px-3 py-0.5 rounded-full text-xs font-medium shadow-sm">
          Most Popular
        </div>
      )}
      {isAddon && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-earth-light text-sand-50 px-3 py-0.5 rounded-full text-xs font-medium shadow-sm">
          Add-On
        </div>
      )}
      <h3 className="text-xl font-display font-medium mb-1.5 text-earth-darker">{title}</h3>
      <div className="mb-3">
        <span className="text-2xl font-bold text-earth-dark">{price}</span>
        {price !== "$79" && <span className="text-earth-dark/70 ml-1 text-sm">one-time</span>}
        {price === "$79" && <span className="text-earth-dark/70 ml-1 text-sm">/month</span>}
      </div>
      <p className="text-xs text-earth-dark/80 mb-3">{description}</p>
      <ul className="space-y-1.5 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-earth-dark mr-1.5 mt-0.5">
              <Check size={12} />
            </span>
            <span className="text-earth-dark/80 text-xs">{feature}</span>
          </li>
        ))}
      </ul>
      <Button asChild variant={isPopular ? "default" : "outline"} className={isPopular ? "w-full bg-earth-dark hover:bg-earth-darker text-sand-50 h-8 text-xs" : "w-full border-earth-dark/20 hover:bg-earth-dark/5 text-earth-dark h-8 text-xs"}>
        <a href="#get-started">{buttonText}</a>
      </Button>
    </Card>
  );
};

export const Pricing = () => {
  return (
    <section id="pricing" className="py-6 bg-sand-50">
      <div className="container-custom">
        <div className="text-center mb-5">
          <h2 className="text-xl md:text-2xl font-display font-medium mb-1 text-earth-darker">Simple, Transparent Pricing</h2>
          <p className="text-sm text-earth-dark/80 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <Plan 
            title="Starter Plan"
            price="$399"
            description="Perfect for small businesses just getting started online"
            features={[
              "Single-page site",
              "Mobile-optimized",
              "Basic SEO",
              "24-hour delivery",
              "Contact form"
            ]}
            buttonText="Choose Starter"
          />
          <Plan 
            title="Professional Plan"
            price="$599"
            description="Our most popular option for established businesses"
            features={[
              "Multi-page site (Up to 5 pages)",
              "Everything in Starter",
              "More layout flexibility",
              "Custom design elements",
              "Basic analytics setup"
            ]}
            isPopular
            buttonText="Choose Professional"
          />
          <Plan 
            title="Care Plan"
            price="$79"
            description="Ongoing support to keep your site fresh and performing"
            features={[
              "Monthly updates (text/images)",
              "SEO tuning and analytics",
              "Google indexing",
              "Hosting/domain support",
              "Priority support (48h turnaround)"
            ]}
            isAddon
            buttonText="Add Care Plan"
          />
        </div>
      </div>
    </section>
  );
};

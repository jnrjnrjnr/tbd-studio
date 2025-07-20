import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";

type PlanProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  isAddon?: boolean;
  buttonText: string;
  valueMetric?: string;
};

const Plan = ({ title, price, description, features, isPopular = false, isAddon = false, buttonText, valueMetric }: PlanProps) => {
  return (
    <Card className={`p-4 relative card-shadow border-0 h-full flex flex-col ${isPopular ? 'shadow-xl bg-accent/40' : 'bg-white'}`}>
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
      <div>
        <h3 className="text-xl font-display font-medium mb-1.5 text-earth-darker">{title}</h3>
        <div className="mb-3">
          <span className="text-2xl font-bold text-earth-dark">{price}</span>
          {price !== "$399" && <span className="text-earth-dark/70 ml-1 text-sm">one-time</span>}
          {price === "$399" && <span className="text-earth-dark/70 ml-1 text-sm">/month</span>}
        </div>
        <p className="text-xs text-earth-dark/80 mb-3">{description}</p>
        {valueMetric && (
          <div className="mb-3 p-2 bg-earth-dark/5 rounded text-xs">
            <span className="font-medium text-earth-dark">✓ {valueMetric}</span>
          </div>
        )}
      </div>
      <ul className="space-y-1.5 mb-4 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-earth-dark mr-1.5 mt-0.5 flex-shrink-0">
              <Check size={12} />
            </span>
            <span className="text-earth-dark/80 text-xs">{feature}</span>
          </li>
        ))}
      </ul>
      <Button asChild variant={isPopular ? "default" : "outline"} className={isPopular ? "w-full bg-earth-dark hover:bg-earth-darker text-sand-50 h-8 text-xs hover:scale-[1.02] transition-all duration-200" : "w-full border-earth-dark/20 hover:bg-earth-dark/5 text-earth-dark h-8 text-xs hover:scale-[1.02] transition-all duration-200"}>
        <a href="https://tally.so/r/3Eo66B" target="_blank" rel="noopener noreferrer">{buttonText}</a>
      </Button>
    </Card>
  );
};

export const Pricing = () => {
  return (
    <section id="pricing" className="py-8 bg-sand-50">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-display font-medium mb-1 text-earth-darker">Simple, Transparent Pricing</h2>
          <p className="text-sm text-earth-dark/80 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Plan 
            title="Starter Plan"
            price="$999"
            description="Perfect for small businesses just getting started online"
            valueMetric="Single-page site with 3 custom sections"
            features={[
              "Single-page site",
              "Mobile-optimized design",
              "Basic SEO setup",
              "24-hour turnaround",
              "Contact form implementation",
              "Social media integration"
            ]}
            buttonText="Choose Starter"
          />
          <Plan 
            title="Professional Plan"
            price="$1999"
            description="Our most popular option for established businesses"
            valueMetric="Up to 5 pages with unlimited custom sections"
            features={[
              "Multi-page site (Up to 5 pages)",
              "Everything in Starter plan",
              "Enhanced layout flexibility",
              "Custom design elements",
              "Analytics dashboard setup",
              "Professional copywriting included"
            ]}
            isPopular
            buttonText="Choose Professional"
          />
          <Plan 
            title="Care Plan"
            price="$399"
            description="Ongoing support to keep your site fresh and performing"
            features={[
              "Monthly content updates",
              "Performance optimization",
              "SEO monitoring & tuning",
              "Google Search Console setup",
              "Security monitoring",
              "Hosting & domain support",
              "48-hour support response"
            ]}
            isAddon
            buttonText="Add Care Plan"
          />
        </div>
      </div>
    </section>
  );
};

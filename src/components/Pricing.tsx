
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

type PlanProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
};

const Plan = ({ title, price, description, features, isPopular = false, buttonText }: PlanProps) => {
  return (
    <Card className={`glass-card p-8 relative ${isPopular ? 'border-highlight border-2' : ''}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-highlight text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold">{price}</span>
        {price !== "$79" && <span className="text-gray-300 ml-2">one-time</span>}
        {price === "$79" && <span className="text-gray-300 ml-2">/month</span>}
      </div>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-highlight mr-3 mt-1">
              <Check size={16} />
            </span>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Button asChild className={`w-full ${isPopular ? 'btn-primary' : 'btn-secondary'}`}>
        <a href="#get-started">{buttonText}</a>
      </Button>
    </Card>
  );
};

export const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-blue-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
            buttonText="Add Care Plan"
          />
        </div>
      </div>
    </section>
  );
};

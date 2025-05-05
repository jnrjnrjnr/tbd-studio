import { Clock, Smartphone, Globe, Search, Monitor, Shield, Zap, FileCode } from "lucide-react";
import { Card } from "@/components/ui/card";

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <Card className="p-5 transition-all hover:-translate-y-1 duration-300 ease-in-out border-0 bg-sand-50 shadow hover:shadow-md h-full">
      <div className="bg-earth-dark/10 w-12 h-12 flex items-center justify-center rounded-sm mb-4">
        <div className="text-earth-dark">{icon}</div>
      </div>
      <h3 className="text-base font-display font-medium mb-2">{title}</h3>
      <p className="text-xs text-earth-dark/80">{description}</p>
    </Card>
  );
};

export const Features = () => {
  const features = [
    {
      icon: <Clock size={24} />,
      title: "Fast Delivery",
      description: "Full website delivered in 24 hours, guaranteed."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile-First",
      description: "Optimized for all devices with responsive design."
    },
    {
      icon: <Search size={24} />,
      title: "SEO Ready",
      description: "Built to be found on Google with proper optimization."
    },
    {
      icon: <Globe size={24} />,
      title: "Accessibility",
      description: "WCAG compliant for inclusive user experience."
    },
    {
      icon: <Shield size={24} />,
      title: "Secure & Safe",
      description: "SSL security and privacy compliance built-in."
    },
    {
      icon: <Zap size={24} />,
      title: "Lightning Fast",
      description: "Optimized for speed to boost engagement."
    },
    {
      icon: <FileCode size={24} />,
      title: "Clean Code",
      description: "Custom, maintainable code that scales with you."
    },
    {
      icon: <Monitor size={24} />,
      title: "Analytics",
      description: "Track performance and visitor behavior."
    }
  ];

  return (
    <section id="features" className="py-10 bg-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-display font-medium mb-1 text-earth-darker">Key Features</h2>
          <p className="text-sm text-earth-dark/80 max-w-2xl mx-auto">
            Everything you need for an effective online presence
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

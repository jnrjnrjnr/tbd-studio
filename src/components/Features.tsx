
import { Clock, Smartphone, Globe, Search, Monitor, Wand } from "lucide-react";
import { Card } from "@/components/ui/card";

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <Card className="p-4 transition-all hover:-translate-y-1 duration-300 ease-in-out border-0 bg-sand-50 shadow hover:shadow-md">
      <div className="bg-earth-dark/10 w-10 h-10 flex items-center justify-center rounded-sm mb-3">
        <div className="text-earth-dark">{icon}</div>
      </div>
      <h3 className="text-base font-display font-medium mb-1">{title}</h3>
      <p className="text-xs text-earth-dark/80">{description}</p>
    </Card>
  );
};

export const Features = () => {
  const features = [
    {
      icon: <Clock size={20} />,
      title: "24-hour turnaround",
      description: "Get your professional website delivered within 24 hours, guaranteed."
    },
    {
      icon: <Smartphone size={20} />,
      title: "Mobile-friendly design",
      description: "Your site automatically adapts to look perfect on any device."
    },
    {
      icon: <Search size={20} />,
      title: "SEO-ready",
      description: "Built with search engines in mind so customers can find you easily."
    },
    {
      icon: <Globe size={20} />,
      title: "Hosting support",
      description: "We'll help you secure your domain and provide reliable hosting solutions."
    },
    {
      icon: <Monitor size={20} />,
      title: "Responsive layout",
      description: "Beautiful layouts that work perfectly across all screen sizes."
    },
    {
      icon: <Wand size={20} />,
      title: "Conversion-friendly",
      description: "Strategically designed to turn visitors into paying customers."
    }
  ];

  return (
    <section id="features" className="py-6 bg-white">
      <div className="container-custom">
        <div className="text-center mb-5">
          <h2 className="text-xl md:text-2xl font-display font-medium mb-1 text-earth-darker">Key Features</h2>
          <p className="text-sm text-earth-dark/80 max-w-2xl mx-auto">
            Everything you need to succeed online
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

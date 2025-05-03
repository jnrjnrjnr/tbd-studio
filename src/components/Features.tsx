
import { Clock, Smartphone, Globe, Search, Monitor, Wand } from "lucide-react";
import { Card } from "@/components/ui/card";

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <Card className="feature-card transition-all hover:translate-y-[-5px]">
      <div className="bg-accent w-14 h-14 flex items-center justify-center rounded-xl mb-6">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
};

export const Features = () => {
  const features = [
    {
      icon: <Clock size={28} />,
      title: "Free 24-hour turnaround",
      description: "Get your professional website delivered within 24 hours, guaranteed."
    },
    {
      icon: <Smartphone size={28} />,
      title: "Mobile-friendly & responsive",
      description: "Your site automatically adapts to look perfect on any device."
    },
    {
      icon: <Search size={28} />,
      title: "SEO-ready",
      description: "Built with search engines in mind so customers can find you easily."
    },
    {
      icon: <Globe size={28} />,
      title: "Hosting & domain support",
      description: "We'll help you secure your domain and provide reliable hosting solutions."
    },
    {
      icon: <Monitor size={28} />,
      title: "Responsive design",
      description: "Beautiful layouts that work perfectly across all screen sizes."
    },
    {
      icon: <Wand size={28} />,
      title: "Clean, conversion-friendly design",
      description: "Strategically designed to turn visitors into paying customers."
    }
  ];

  return (
    <section id="features" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed online
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

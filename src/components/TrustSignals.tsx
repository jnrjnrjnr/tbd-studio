import { Shield, Clock, CheckCircle, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

export const TrustSignals = () => {
  const signals = [
    {
      icon: <Shield size={20} />,
      title: "SSL Secured",
      description: "Bank-level security on every site"
    },
    {
      icon: <Clock size={20} />,
      title: "99.9% Uptime",
      description: "Guaranteed reliability"
    },
    {
      icon: <CheckCircle size={20} />,
      title: "24-Hour Guarantee",
      description: "100% refund if not live in 24h"
    },
    {
      icon: <Award size={20} />,
      title: "WCAG Compliant",
      description: "Accessible to all users"
    }
  ];

  const clientLogos = [
    "Wildflower Boutique",
    "MR Consulting Group", 
    "Balance Studio NYC",
    "Harbor Restaurant",
    "TechFlow Solutions",
    "Green Earth Organics"
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container-custom">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {signals.map((signal, index) => (
            <Card key={index} className="p-4 text-center border-0 shadow-sm bg-sand-50">
              <div className="flex justify-center mb-2">
                <div className="text-earth-dark">{signal.icon}</div>
              </div>
              <h3 className="text-sm font-medium text-earth-darker mb-1">{signal.title}</h3>
              <p className="text-xs text-earth-dark/70">{signal.description}</p>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-sm font-medium text-earth-dark/70 mb-4">Trusted by businesses like yours</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="w-16 h-8 bg-sand-100 rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-earth-dark/60">{client}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-earth-dark mb-1">24h</div>
            <div className="text-sm text-earth-dark/70">Average Delivery Time</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-earth-dark mb-1">98%</div>
            <div className="text-sm text-earth-dark/70">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-earth-dark mb-1">500+</div>
            <div className="text-sm text-earth-dark/70">Sites Delivered</div>
          </div>
        </div>
      </div>
    </section>
  );
}; 
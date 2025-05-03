
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-sand-50 to-sand-100">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <span className="absolute -top-6 -left-2 md:-left-4 text-5xl md:text-7xl text-sand-400 opacity-60 font-display italic">24h</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-4 leading-tight relative z-10 text-earth-darker">
              A stunning website <span className="italic">for your business</span> in just 24 hours.
            </h1>
            <p className="text-lg md:text-xl text-earth-dark/80 mb-6 leading-relaxed">
              Fast, beautiful, affordable websites for businesses that deserve better.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button asChild size="lg" className="h-12 text-base bg-earth hover:bg-earth-dark shadow-md">
                <a href="#get-started">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild size="lg" className="h-12 text-base border-earth text-earth-dark hover:bg-sand-200/50">
                <a href="#pricing">View Pricing</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

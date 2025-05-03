
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-20 pb-8 md:pt-28 md:pb-12 bg-sand-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="relative mb-8">
            <span className="absolute -top-5 -left-1 text-4xl md:text-7xl text-sand-400 opacity-60 font-display italic">24h</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-3 leading-tight relative z-10 text-earth-darker">
              A stunning website <br /><span className="italic">for your business</span> in just 24 hours.
            </h1>
            <p className="text-base md:text-lg text-earth-dark/80 mb-6 max-w-2xl">
              Fast, beautiful, affordable websites for businesses that deserve better. 
              Just $399 one-time payment for a complete, conversion-focused design.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button asChild size="lg" className="h-11 text-base bg-earth hover:bg-earth-dark shadow-md">
                <a href="#get-started">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild size="lg" className="h-11 text-base border-earth text-earth-dark hover:bg-sand-200/50">
                <a href="#pricing">View Pricing</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

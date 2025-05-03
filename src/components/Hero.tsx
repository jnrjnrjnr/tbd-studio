
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-36 pb-20 md:pt-48 md:pb-28 bg-gradient-to-b from-sand-50 to-sand-100">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <span className="absolute -top-8 -left-4 md:-left-8 text-6xl md:text-8xl text-sand-400 opacity-60 font-display italic">24h</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6 leading-tight relative z-10 text-earth-darker">
              A stunning website <span className="italic">for your business</span> in just 24 hours.
            </h1>
            <p className="text-xl md:text-2xl text-earth-dark/80 mb-8 leading-relaxed">
              Fast, beautiful, affordable websites for businesses that deserve better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button asChild size="lg" className="h-14 text-lg bg-earth hover:bg-earth-dark shadow-md">
                <a href="#get-started">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" asChild size="lg" className="h-14 text-lg border-earth text-earth-dark hover:bg-sand-200/50">
                <a href="#pricing">View Pricing</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-14 pb-6 md:pt-16 md:pb-8 bg-earth-dark text-sand-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-2 leading-tight relative z-10">
              A refreshed website <br /><span className="italic">for your business</span> in just one day.
            </h1>
            <p className="text-sm md:text-base text-sand-100/90 mb-4 max-w-2xl">
              Fast, beautiful, affordable websites for businesses that deserve better. 
              Just $999 one-time payment for a complete, conversion-focused design.
            </p>
            <div className="flex flex-row gap-3 mt-6">
              <Button asChild size="sm" className="h-10 px-5 text-sm bg-sand-100 hover:bg-sand-50 text-earth-dark font-medium shadow-lg border border-sand-50/20 hover:scale-105 transition-all duration-200 relative overflow-hidden group">
                <a href="#get-started" className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute inset-0 bg-sand-50/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


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
              Just $499 one-time payment for a complete, conversion-focused design.
            </p>
            <div className="flex flex-row gap-3 mt-4">
              <Button asChild size="sm" className="h-9 text-sm bg-sand-100 hover:bg-sand-50 text-earth-dark shadow-md">
                <a href="#get-started">
                  Get Started
                  <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

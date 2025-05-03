
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="get-started" className="py-10 bg-sand-50">
      <div className="container-custom max-w-4xl">
        <div className="bg-gradient-to-tr from-earth-dark to-earth-light rounded-lg p-6 text-center shadow-xl shadow-earth/10">
          <h2 className="text-xl md:text-2xl font-display font-medium mb-2 text-sand-50">Ready for a better website?</h2>
          <p className="text-base text-sand-100/90 mb-4 max-w-2xl mx-auto">
            Join hundreds of businesses who transformed their online presence in 24 hours.
          </p>
          <Button asChild size="lg" className="h-10 px-5 bg-sand-100 text-earth-dark hover:bg-sand-50">
            <a href="#get-started">
              Start My Site Today
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

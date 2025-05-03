
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="get-started" className="py-6 bg-sand-50">
      <div className="container-custom max-w-4xl">
        <div className="bg-earth-dark rounded p-5 text-center shadow-lg">
          <h2 className="text-lg md:text-xl font-display font-medium mb-1.5 text-sand-50">Ready for a better website?</h2>
          <p className="text-sm text-sand-100/90 mb-3 max-w-2xl mx-auto">
            Join hundreds of businesses who transformed their online presence in 24 hours.
          </p>
          <Button asChild size="sm" className="h-9 px-4 bg-sand-100 text-earth-dark hover:bg-sand-50">
            <a href="#get-started">
              Start My Site Today
              <ArrowRight className="ml-1 h-3 w-3" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

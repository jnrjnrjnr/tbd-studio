
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="get-started" className="section-padding bg-sand-50">
      <div className="container-custom max-w-4xl">
        <div className="bg-gradient-to-tr from-earth-dark to-earth-light rounded-xl p-10 md:p-16 text-center shadow-xl shadow-earth/10">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-sand-50">Ready for a better website?</h2>
          <p className="text-xl text-sand-100/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses who transformed their online presence in 24 hours.
          </p>
          <Button asChild size="lg" className="text-lg h-14 px-8 bg-sand-100 text-earth-dark hover:bg-sand-50">
            <a href="#get-started">
              Start My Site Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

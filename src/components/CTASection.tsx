
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="get-started" className="section-padding bg-gradient-to-b from-blue-gray to-dark">
      <div className="container-custom max-w-4xl">
        <div className="glass-card p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to upgrade your online presence?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the hundreds of businesses who've transformed their digital presence in just 24 hours.
          </p>
          <Button asChild className="btn-primary text-lg h-14 px-8">
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

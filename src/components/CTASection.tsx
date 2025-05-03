
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="get-started" className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <div className="bg-gradient-to-br from-primary/90 to-purple-700 rounded-2xl p-10 md:p-16 text-center shadow-xl shadow-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to upgrade your online presence?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the hundreds of businesses who've transformed their digital presence in just 24 hours.
          </p>
          <Button asChild size="lg" className="text-lg h-14 px-8 bg-white text-primary hover:bg-white/90">
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

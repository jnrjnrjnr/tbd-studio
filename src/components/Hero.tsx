
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-blue-gray to-dark">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your business deserves a modern website.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            We rebuild outdated or missing websites in 24 hours — fast, beautiful, and affordable.
          </p>
          <div className="bg-highlight/20 rounded-xl px-6 py-4 mb-10 inline-block">
            <p className="text-lg text-white font-medium">
              <span className="text-highlight font-bold">✨</span> 24-hour delivery is always free <span className="text-highlight font-bold">✨</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="btn-primary text-lg h-14 px-8">
              <a href="#get-started">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" asChild className="border-white/20 text-white hover:bg-white/10 text-lg h-14">
              <a href="#pricing">View Pricing</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

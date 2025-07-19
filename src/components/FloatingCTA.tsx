
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FloatingCTA = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button asChild size="sm" className="bg-earth-dark hover:bg-earth-darker text-sand-50 font-medium shadow-lg border border-earth-dark/20 hover:scale-105 transition-all duration-200">
        <a href="https://tally.so/r/3Eo66B" target="_blank" rel="noopener noreferrer">
          Launch Now
        </a>
      </Button>
    </div>
  );
};

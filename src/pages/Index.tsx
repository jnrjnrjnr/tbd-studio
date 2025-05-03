
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-foreground">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Testimonials />
      <BeforeAfter />
      <Features />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;

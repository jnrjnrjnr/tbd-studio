
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

const Index = () => {
  useEffect(() => {
    // Add scroll animation with faster transitions
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    }, { threshold: 0.05, rootMargin: '-30px' });

    document.querySelectorAll('section').forEach((section) => {
      if (section) {
        observer.observe(section);
        section.classList.add('opacity-0'); // Start with opacity 0
      }
    });

    return () => {
      document.querySelectorAll('section').forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Testimonials />
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

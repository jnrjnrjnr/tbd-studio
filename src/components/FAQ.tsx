
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "How long does it really take to get my website?",
      answer: "We deliver all websites within 24 hours of receiving your information and template selection. Once we deliver, you'll have the opportunity to request minor revisions if needed."
    },
    {
      question: "How many revisions are included?",
      answer: "Our packages include two rounds of revisions after initial delivery. Additional revisions are available at an hourly rate."
    },
    {
      question: "Do I own my website after purchase?",
      answer: "Yes, you own 100% of your website after purchase. We provide you with full access to your site and its assets."
    },
    {
      question: "Can you help with domain registration and hosting?",
      answer: "Absolutely! We can assist you with domain registration and recommend affordable hosting options that work well with your new site. If you add our Care Plan, hosting support is included."
    },
    {
      question: "What kind of support do I get after my site is live?",
      answer: "All plans include 30 days of email support after your site goes live. For ongoing support and updates, our Care Plan provides monthly updates, SEO tuning, and priority support."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-accent/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-700 bg-clip-text text-transparent">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl shadow-md border-0">
                <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

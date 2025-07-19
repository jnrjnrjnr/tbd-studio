import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { useGSAP } from "@/hooks/useGSAP";

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
  company: string;
  results: string;
  avatarSrc?: string;
  initials: string;
  stars: number;
};

const Testimonial = ({ quote, name, role, company, results, avatarSrc, initials, stars }: TestimonialProps) => {
  const cardRef = useGSAP();
  
  return (
    <Card ref={cardRef} className="p-8 h-full flex flex-col card-shadow hover:shadow-xl transition-shadow border-0 bg-gradient-to-br from-white to-accent/30">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className={i < stars ? "fill-yellow-500 text-yellow-500" : "text-gray-300"} />
        ))}
      </div>
      <div className="mb-6 flex-grow">
        <p className="italic text-foreground/80">&ldquo;{quote}&rdquo;</p>
        <p className="text-sm text-earth-dark/70 mt-3 font-medium">Results: {results}</p>
      </div>
      <div className="flex items-center">
        <Avatar className="h-12 w-12 mr-3 border border-primary/20 shadow-sm">
          <AvatarImage src={avatarSrc} />
          <AvatarFallback className="bg-primary/10 text-primary font-semibold">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">{role}, <span className="font-medium">{company}</span></p>
        </div>
      </div>
    </Card>
  );
};

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "The Vedra delivered our new site in just 18 hours from start to finish. The design matches our brand perfectly and looks like it took weeks to create.",
      name: "Sarah Johnson",
      role: "Owner",
      company: "Wildflower Boutique",
      results: "43% increase in online appointments in the first month",
      initials: "SJ",
      stars: 5
    },
    {
      quote: "After five years of no website, I finally have a professional online presence I'm proud to share with clients. The process was incredibly simple.",
      name: "Michael Rodriguez",
      role: "Principal",
      company: "MR Consulting Group",
      results: "Landed 3 new clients within two weeks of launch",
      initials: "MR",
      stars: 5
    },
    {
      quote: "My outdated Wix site was hurting our brand image. The Vedra transformed it into a modern, sleek experience that perfectly captures what we do.",
      name: "Tara Williams",
      role: "Director",
      company: "Balance Studio NYC",
      results: "Site load time reduced by 68%, mobile conversions up 51%",
      initials: "TW",
      stars: 5
    }
  ];

  return (
    <section className="section-padding bg-accent/30 -mt-1">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-display font-medium mb-1 text-earth-darker">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};


import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
  avatarSrc?: string;
  initials: string;
};

const Testimonial = ({ quote, name, role, avatarSrc, initials }: TestimonialProps) => {
  return (
    <Card className="p-8 h-full flex flex-col card-shadow hover:shadow-xl transition-shadow border-0 bg-gradient-to-br from-white to-accent/30">
      <div className="mb-6 flex-grow">
        <p className="italic text-foreground/80">&ldquo;{quote}&rdquo;</p>
      </div>
      <div className="flex items-center">
        <Avatar className="h-12 w-12 mr-3 border border-primary/20 shadow-sm">
          <AvatarImage src={avatarSrc} />
          <AvatarFallback className="bg-primary/10 text-primary font-semibold">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </Card>
  );
};

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "TBD Studio made it so easy — I was live the next day. Couldn't believe how painless the process was!",
      name: "Sarah Johnson",
      role: "Boutique Owner",
      initials: "SJ"
    },
    {
      quote: "No website for 5 years, now I'm proud to share it with all my clients. Worth every penny!",
      name: "Michael Rodriguez",
      role: "Consulting Services",
      initials: "MR"
    },
    {
      quote: "My outdated site was hurting our business. TBD Studio gave us a modern look that converted immediately.",
      name: "Tara Williams",
      role: "Fitness Studio",
      initials: "TW"
    }
  ];

  return (
    <section className="section-padding bg-accent/30 -mt-1">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

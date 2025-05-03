
export const BeforeAfter = () => {
  const examples = [
    {
      title: "Local Restaurant",
      before: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=300&q=80",
      after: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&h=300&q=80",
    },
    {
      title: "Fitness Studio",
      before: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&h=300&q=80",
      after: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=500&h=300&q=80",
    }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Before & After</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the dramatic difference a modern website makes
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {examples.map((example, index) => (
            <div key={index} className="flex flex-col space-y-8">
              <h3 className="text-2xl font-bold text-center">{example.title}</h3>
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-background/90 px-4 py-2 rounded-md font-medium shadow-sm">Before</div>
                  <img 
                    src={example.before} 
                    alt={`${example.title} before`} 
                    className="w-full h-64 object-cover rounded-xl border border-border opacity-70 card-shadow" 
                  />
                </div>
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-highlight/90 px-4 py-2 rounded-md font-medium text-white shadow-sm">After</div>
                  <img 
                    src={example.after} 
                    alt={`${example.title} after`} 
                    className="w-full h-64 object-cover rounded-xl border border-border shadow-lg" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const GrowthStrategySlide = () => {
  const growthStrategies = [
    {
      title: "Events",
      description: "Participate in technology fairs like FEBRACE and Campus Party to showcase our product.",
      icon: "💻"
    },
    {
      title: "Content",
      description: "Create academic publications and technical content on social media to build authority.",
      icon: "📝"
    },
    {
      title: "Partnerships",
      description: "Collaborate with solar energy companies (e.g., Solstar, Blue Sol) and startups focused on rural electrification.",
      icon: "🤝"
    },
    {
      title: "Corporate ESG",
      description: "Engage with companies with active ESG policies, such as WEG, Enel, and CEMIG.",
      icon: "🌱"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gradient-primary animate-fade-in">
        Growth Strategy & Conclusion
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="animate-fade-in-left">
          <h4 className="text-2xl md:text-3xl font-bold mb-8 text-gradient-secondary">
            Growth & Outreach Plan
          </h4>
          
          <div className="space-y-6">
            {growthStrategies.map((strategy, index) => (
              <div 
                key={strategy.title} 
                className="card-stat animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{strategy.icon}</div>
                  <div>
                    <h5 className="font-bold text-lg mb-2 text-gradient-secondary">
                      {strategy.title}
                    </h5>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {strategy.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="animate-fade-in-right">
          <div className="card-content h-full flex flex-col justify-center">
            <h4 className="text-2xl md:text-3xl font-bold mb-6 text-gradient-secondary">
              Conclusion
            </h4>
            <p className="text-muted-foreground leading-relaxed text-lg">
              The LAMAU PowerBrick is a viable, sustainable, and replicable project. It leverages our team's technical 
              expertise to address a real-world environmental problem, creating a product with a clear market fit and 
              strong positive impact.
            </p>
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl border border-primary/30">
              <p className="text-center font-semibold text-lg">
                We are ready to turn our engineering knowledge into a successful business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
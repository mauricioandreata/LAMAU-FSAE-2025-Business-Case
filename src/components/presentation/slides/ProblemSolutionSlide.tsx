export const ProblemSolutionSlide = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gradient-primary animate-fade-in">
        The Problem & Our Solution
      </h3>
      
      <div className="grid grid-cols-1 lg:[grid-template-columns:0.4fr_0.6fr] gap-12 items-start">
        <div className="space-y-8 animate-fade-in-left">
          <div className="card-content">
            <h4 className="text-2xl md:text-3xl font-bold mb-4 text-gradient-secondary">
              The Opportunity
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              The EV market is creating a massive challenge: what to do with batteries no longer fit for automotive use? 
              These packs retain 70-80% of their capacity, and discarding them is a significant environmental and economic waste.
            </p>
          </div>
          
          <div className="card-content">
            <h4 className="text-2xl md:text-3xl font-bold mb-4 text-gradient-secondary">
              Our Solution
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              We repurpose these cells into the "LAMAU PowerBrick": a modular, safe, and affordable energy storage system 
              for second-life applications, promoting a circular economy.
            </p>
          </div>
        </div>
        
        <div className="animate-fade-in-right">
          <div className="card-content h-full flex items-center justify-center min-h-[400px]">
            <div className="text-center">
            <div className="w-full max-w-xl aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-muted/30 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}images/battery-graph.png`}
                alt="Battery Discharge Cycle Graph"
                className="w-full h-full object-contain"
              />
            </div>
              <p className="text-sm text-muted-foreground">
                Battery Discharge Cycle Graph
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
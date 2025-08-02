export const MarketStudySlide = () => {
  const marketData = [
    { region: "Asia", percentage: 44, color: "bg-primary" },
    { region: "North America", percentage: 25, color: "bg-secondary" },
    { region: "Europe", percentage: 18, color: "bg-accent" },
    { region: "Latin America", percentage: 7, color: "bg-green-500" },
    { region: "Others", percentage: 6, color: "bg-muted" }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gradient-primary animate-fade-in">
        Market Study
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-left">
          <div className="card-content">
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              Today, it is estimated that <span className="font-bold text-primary">44%</span> of the power bank 
              market is located in Asia, while the Latin American market (especially Brazil and Mexico) represents{" "}
              <span className="font-bold text-primary">7%</span>. It is estimated that the main age group for 
              product use is between 18 and 45, especially university students and adults in the job market.
            </p>
            
            <div className="space-y-4">
              <h5 className="font-bold text-xl text-gradient-secondary mb-4">Market Distribution</h5>
              {marketData.map((item, index) => (
                <div 
                  key={item.region}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{item.region}</span>
                    <span className="font-bold text-primary">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full ${item.color} transition-all duration-1000 ease-out rounded-full`}
                      style={{ 
                        width: `${item.percentage}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="animate-fade-in-right">
          <div className="card-content h-full flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse" />
                <div className="text-6xl relative z-10">🌍</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Global Market Distribution
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
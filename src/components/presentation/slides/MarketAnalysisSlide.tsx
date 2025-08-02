export const MarketAnalysisSlide = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gradient-primary animate-fade-in">
        Market Analysis
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-left">
          <div className="card-content">
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              The power bank market, although a niche, currently moves an estimated{" "}
              <span className="font-bold text-primary">$11 million</span> annually, and can be considered 
              an emerging market, as there is a forecast of up to{" "}
              <span className="font-bold text-primary">81% growth</span> in the next 5 years. 
              However, there is still room for development in this product, especially in terms of sustainability.
            </p>
            
            <div className="text-center mb-6">
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-6xl md:text-8xl font-extrabold text-gradient-primary">20</span>
                <span className="text-2xl md:text-3xl font-bold ml-4">billion dollars</span>
              </div>
              <p className="text-muted-foreground">
                Estimated market movement in the Powerbank niche by 2030.
              </p>
            </div>
          </div>
        </div>
        
        <div className="animate-fade-in-right">
          <div className="card-content h-full flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse" />
                <div className="text-6xl relative z-10">📈</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Market Growth Visualization
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
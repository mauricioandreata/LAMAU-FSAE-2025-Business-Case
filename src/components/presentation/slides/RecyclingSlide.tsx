export const RecyclingSlide = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gradient-primary animate-fade-in">
        Recycling
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-left">
          <div className="card-content">
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              It is estimated that more than{" "}
              <span className="font-bold text-primary">500,000 tons</span> of lithium batteries have already 
              been improperly discarded. That is, there is an urgent need to create an industry around this problem, 
              so that it is possible to decrease the environmental impact of lithium cells in the environment.
            </p>
            
            <div className="text-center mb-6">
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-6xl md:text-8xl font-extrabold text-gradient-primary">5%</span>
                <span className="text-xl md:text-2xl font-bold ml-4">properly discarded</span>
              </div>
              <p className="text-muted-foreground">
                of the world's electronic waste
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Source: Worldmetrics
              </p>
            </div>
          </div>
        </div>
        
        <div className="animate-fade-in-right">
          <div className="card-content h-full flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="w-full h-64 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 animate-pulse" />
                <div className="text-6xl relative z-10">♻️</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Electronic Waste Recycling
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const MVPSlide = () => {
  const specs = [
    { label: "Capacity", value: "7.5 Ah", icon: "🔋" },
    { label: "Max Power", value: "86 W", icon: "⚡" },
    { label: "Cell Config", value: "12 Cells", icon: "🔗" },
    { label: "Voltage", value: "11.1 V", icon: "⚡" }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gradient-primary animate-fade-in">
        MVP, KPIs & FSAE Connection
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-left">
          <div className="grid grid-cols-2 gap-6">
            {specs.map((spec, index) => (
              <div 
                key={spec.label} 
                className="card-stat text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-2">{spec.icon}</div>
                <p className="text-lg font-semibold text-gradient-secondary mb-1">
                  {spec.label}
                </p>
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="animate-fade-in-right">
          <div className="card-content h-full flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse" />
                <div className="text-6xl relative z-10">🔋</div>
              </div>
              <p className="text-sm text-muted-foreground">
                PowerBrick 3D Diagram
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 animate-fade-in [animation-delay:0.6s]">
        <div className="card-content">
          <h4 className="text-2xl md:text-3xl font-bold mb-4 text-gradient-secondary">
            The FSAE R&D Link
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            Our participation in Formula SAE is the core of our technical validation process. We gain hands-on experience 
            in high-voltage pack design, BMS integration, and safety protocols.
          </p>
        </div>
      </div>
    </div>
  );
};
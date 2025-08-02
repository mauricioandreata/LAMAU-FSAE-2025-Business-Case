export const MarketFinancialsSlide = () => {
  const investmentItems = [
    { item: "Cell Testing Equipment", cost: "R$ 7.000" },
    { item: "BMS & Control Hardware", cost: "R$ 2.500" },
    { item: "Enclosure & Materials", cost: "R$ 3.500" }
  ];

  const productionCosts = [
    { item: "Repurposed Cells (12x)", cost: "R$ 60" },
    { item: "BMS & Electronics", cost: "R$ 80" },
    { item: "Enclosure & Connectors", cost: "R$ 50" }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gradient-primary animate-fade-in">
        Market, Logistics & Financials
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8 animate-fade-in-left">
          <div className="card-content">
            <h4 className="text-2xl md:text-3xl font-bold mb-4 text-gradient-secondary">
              Go-to-Market Strategy
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Our initial focus is on the B2B market: universities, labs, and technical schools needing affordable DC power. 
              We will then expand to off-grid and residential backup power solutions.
            </p>
          </div>
          
          <div className="card-content">
            <h4 className="text-2xl md:text-3xl font-bold mb-4 text-gradient-secondary">
              Operational Workflow
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Our process involves sourcing used packs, safely disassembling them, grading each cell for capacity and resistance, 
              and assembling matched cells into new PowerBrick modules.
            </p>
          </div>
        </div>
        
        <div className="space-y-6 animate-fade-in-right">
          <div className="card-content">
            <h4 className="text-xl md:text-2xl font-bold mb-4 text-gradient-secondary">
              MVP Investment (4-Month)
            </h4>
            <div className="space-y-3">
              {investmentItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border/30 last:border-b-0">
                  <span className="text-muted-foreground">{item.item}</span>
                  <span className="font-semibold">{item.cost}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-3 text-lg font-bold text-primary border-t-2 border-primary/20 mt-4">
                <span>Total Investment</span>
                <span>R$ 13.000</span>
              </div>
            </div>
          </div>
          
          <div className="card-content">
            <h4 className="text-xl md:text-2xl font-bold mb-4 text-gradient-secondary">
              Production Cost per Unit
            </h4>
            <div className="space-y-3">
              {productionCosts.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border/30 last:border-b-0">
                  <span className="text-muted-foreground">{item.item}</span>
                  <span className="font-semibold">{item.cost}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-3 text-lg font-bold text-primary border-t-2 border-primary/20 mt-4">
                <span>Total Cost per Unit</span>
                <span>R$ 190</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
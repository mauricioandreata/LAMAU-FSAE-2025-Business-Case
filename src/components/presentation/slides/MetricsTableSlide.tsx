interface MetricsData {
  time: number;
  quantity: number;
  totalCost: number;
  unitPrice: number;
  profit: number;
}

interface MetricsTableSlideProps {
  title: string;
  subtitle: string;
  data: MetricsData[];
  currency: string;
  flag: string;
}

export const MetricsTableSlide = ({ title, subtitle, data, currency, flag }: MetricsTableSlideProps) => {
  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gradient-primary animate-fade-in">
        {title}
      </h3>
      
      <h4 className="text-xl md:text-2xl font-bold mb-8 text-center text-gradient-secondary animate-fade-in [animation-delay:0.2s]">
        {subtitle} {flag}
      </h4>
      
      <div className="card-content animate-scale-in [animation-delay:0.4s]">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-primary/20">
                <th className="text-left py-4 px-4 font-bold text-lg">Time (Months)</th>
                <th className="text-center py-4 px-4 font-bold text-lg">Qty. Produced</th>
                <th className="text-center py-4 px-4 font-bold text-lg">Total Cost ({currency})</th>
                <th className="text-center py-4 px-4 font-bold text-lg">Unit Price ({currency})</th>
                <th className="text-center py-4 px-4 font-bold text-lg">Profit ({currency})</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr 
                  key={index} 
                  className="border-b border-border/30 hover:bg-muted/20 transition-all duration-300"
                  style={{ 
                    animation: `fade-in 0.5s ease-out ${(index + 1) * 0.1}s both`
                  }}
                >
                  <td className="py-4 px-4 font-semibold text-primary">{row.time}</td>
                  <td className="py-4 px-4 text-center font-medium">{row.quantity}</td>
                  <td className="py-4 px-4 text-center font-medium">
                    {typeof row.totalCost === 'string' ? row.totalCost : row.totalCost.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-center font-medium">
                    {typeof row.unitPrice === 'string' ? row.unitPrice : row.unitPrice.toLocaleString()}
                  </td>
                  <td className={`py-4 px-4 text-center font-bold ${
                    row.profit >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {typeof row.profit === 'string' ? row.profit : row.profit.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
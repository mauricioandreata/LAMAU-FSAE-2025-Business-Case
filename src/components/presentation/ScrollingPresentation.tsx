import { AnimatedSection } from "./AnimatedSection";
import { TitleSlide } from "./slides/TitleSlide";
import { ProblemSolutionSlide } from "./slides/ProblemSolutionSlide";
import { MVPSlide } from "./slides/MVPSlide";
import { MarketFinancialsSlide } from "./slides/MarketFinancialsSlide";
import { GrowthStrategySlide } from "./slides/GrowthStrategySlide";
import { MarketAnalysisSlide } from "./slides/MarketAnalysisSlide";
import { RecyclingSlide } from "./slides/RecyclingSlide";
import { MetricsTableSlide } from "./slides/MetricsTableSlide";
import { MarketStudySlide } from "./slides/MarketStudySlide";

export const ScrollingPresentation = () => {
  // Metrics data for different scenarios
  const positiveBRLData = [
    { time: 1, quantity: 50, totalCost: 9500, unitPrice: 190, profit: 0 },
    { time: 2, quantity: 60, totalCost: 11400, unitPrice: 200, profit: 600 },
    { time: 3, quantity: 75, totalCost: 14250, unitPrice: 200, profit: 2250 }
  ];

  const positiveUSDData = [
    { time: 1, quantity: 50, totalCost: 1714.8, unitPrice: 34.29, profit: 0 },
    { time: 2, quantity: 60, totalCost: 2057.76, unitPrice: 36.1, profit: 108.3 },
    { time: 3, quantity: 75, totalCost: 2572.2, unitPrice: 36.1, profit: 406.13 }
  ];

  const realisticBRLData = [
    { time: 1, quantity: 50, totalCost: 9500, unitPrice: 190, profit: -3800 },
    { time: 5, quantity: 99, totalCost: 18842, unitPrice: 222, profit: -1267 },
    { time: 8, quantity: 137, totalCost: 25967, unitPrice: 225, profit: 283 },
    { time: 12, quantity: 187, totalCost: 35467, unitPrice: 229, profit: 2700 }
  ];

  const realisticUSDData = [
    { time: 1, quantity: 50, totalCost: 1714.8, unitPrice: 34.29, profit: -3800 },
    { time: 5, quantity: 99, totalCost: 3401.08, unitPrice: 40.07, profit: -1267 },
    { time: 8, quantity: 137, totalCost: 4506.67, unitPrice: 40.61, profit: 283 },
    { time: 12, quantity: 187, totalCost: 6401.98, unitPrice: 41.33, profit: 2700 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative">
      {/* Background decoration */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Content sections */}
      <div className="relative z-10">
        <AnimatedSection animationClass="animate-slide-up">
          <TitleSlide />
        </AnimatedSection>

        <AnimatedSection animationClass="animate-fade-in-left">
          <ProblemSolutionSlide />
        </AnimatedSection>

        <AnimatedSection animationClass="animate-fade-in-right">
          <MVPSlide />
        </AnimatedSection>

        <AnimatedSection animationClass="animate-slide-up">
          <MarketFinancialsSlide />
        </AnimatedSection>

        <AnimatedSection animationClass="animate-slide-in-blur">
          <GrowthStrategySlide />
        </AnimatedSection>

        <AnimatedSection animationClass="animate-scale-in">
          <MarketAnalysisSlide />
        </AnimatedSection>

        <AnimatedSection animationClass="animate-slide-up">
          <RecyclingSlide />
        </AnimatedSection>

        <AnimatedSection animationClass="animate-fade-in-left">
          <MetricsTableSlide
            title="Metrics and Estimates"
            subtitle="Positive Scenario - BRL"
            data={positiveBRLData}
            currency="R$"
            flag="🇧🇷"
          />
        </AnimatedSection>

        <AnimatedSection animationClass="animate-fade-in-right">
          <MetricsTableSlide
            title="Metrics and Estimates"
            subtitle="Positive Scenario - USD (5.54 BRL as of 08/01/2025)"
            data={positiveUSDData}
            currency="US$"
            flag="🇺🇸"
          />
        </AnimatedSection>

        <AnimatedSection animationClass="animate-fade-in-left">
          <MetricsTableSlide
            title="Metrics and Estimates"
            subtitle="Realistic Scenario - BRL"
            data={realisticBRLData}
            currency="R$"
            flag="🇧🇷"
          />
        </AnimatedSection>

        <AnimatedSection animationClass="animate-fade-in-right">
          <MetricsTableSlide
            title="Metrics and Estimates"
            subtitle="Realistic Scenario - USD (5.54 BRL as of 08/01/2025)"
            data={realisticUSDData}
            currency="US$"
            flag="🇺🇸"
          />
        </AnimatedSection>

        <AnimatedSection animationClass="animate-fade-in-left">
          <MarketStudySlide />
        </AnimatedSection>
      </div>
    </div>
  );
};
import { useState, useEffect } from "react";
import { SlideContainer } from "./SlideContainer";
import { Navigation } from "./Navigation";
import { TitleSlide } from "./slides/TitleSlide";
import { ProblemSolutionSlide } from "./slides/ProblemSolutionSlide";
import { MVPSlide } from "./slides/MVPSlide";
import { MarketFinancialsSlide } from "./slides/MarketFinancialsSlide";
import { GrowthStrategySlide } from "./slides/GrowthStrategySlide";
import { MarketAnalysisSlide } from "./slides/MarketAnalysisSlide";
import { RecyclingSlide } from "./slides/RecyclingSlide";
import { MetricsTableSlide } from "./slides/MetricsTableSlide";
import { MarketStudySlide } from "./slides/MarketStudySlide";

export const PresentationApp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const slides = [
    { component: <TitleSlide />, key: "title" },
    { component: <ProblemSolutionSlide />, key: "problem-solution" },
    { component: <MVPSlide />, key: "mvp" },
    { component: <MarketFinancialsSlide />, key: "market-financials" },
    { component: <GrowthStrategySlide />, key: "growth" },
    { component: <MarketAnalysisSlide />, key: "market-analysis" },
    { component: <RecyclingSlide />, key: "recycling" },
    {
      component: (
        <MetricsTableSlide
          title="Metrics and Estimates"
          subtitle="Positive Scenario - BRL"
          data={positiveBRLData}
          currency="R$"
          flag="🇧🇷"
        />
      ),
      key: "positive-brl"
    },
    {
      component: (
        <MetricsTableSlide
          title="Metrics and Estimates"
          subtitle="Positive Scenario - USD (5.54 BRL as of 08/01/2025)"
          data={positiveUSDData}
          currency="US$"
          flag="🇺🇸"
        />
      ),
      key: "positive-usd"
    },
    {
      component: (
        <MetricsTableSlide
          title="Metrics and Estimates"
          subtitle="Realistic Scenario - BRL"
          data={realisticBRLData}
          currency="R$"
          flag="🇧🇷"
        />
      ),
      key: "realistic-brl"
    },
    {
      component: (
        <MetricsTableSlide
          title="Metrics and Estimates"
          subtitle="Realistic Scenario - USD (5.54 BRL as of 08/01/2025)"
          data={realisticUSDData}
          currency="US$"
          flag="🇺🇸"
        />
      ),
      key: "realistic-usd"
    },
    { component: <MarketStudySlide />, key: "market-study" }
  ];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown" || event.key === " ") {
        event.preventDefault();
        setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1));
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setCurrentSlide((prev) => Math.max(0, prev - 1));
      } else if (event.key === "Home") {
        event.preventDefault();
        setCurrentSlide(0);
      } else if (event.key === "End") {
        event.preventDefault();
        setCurrentSlide(slides.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slides.length]);

  // Scroll-based navigation
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (event.deltaY > 0) {
          setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1));
        } else if (event.deltaY < 0) {
          setCurrentSlide((prev) => Math.max(0, prev - 1));
        }
      }, 50);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(timeoutId);
    };
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent" />
      
      {/* Navigation */}
      <Navigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onSlideChange={setCurrentSlide}
      />

      {/* Slides */}
      <div className="relative z-10">
        {slides.map((slide, index) => (
          <SlideContainer
            key={slide.key}
            isActive={index === currentSlide}
            slideIndex={index}
            className={index === currentSlide ? "block" : "hidden"}
          >
            {slide.component}
          </SlideContainer>
        ))}
      </div>

      {/* Instructions overlay */}
      <div className="fixed bottom-4 left-4 z-50">
        <div className="bg-card/80 backdrop-blur-sm rounded-lg p-3 border border-border/50 text-xs text-muted-foreground">
          <p>Use ↑↓ arrows, scroll, or sidebar to navigate</p>
        </div>
      </div>
    </div>
  );
};
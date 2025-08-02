import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onSlideChange: (slide: number) => void;
}

export const Navigation = ({ currentSlide, totalSlides, onSlideChange }: NavigationProps) => {
  const slides = [
    { title: "Title", icon: "🏠" },
    { title: "Problem & Solution", icon: "💡" },
    { title: "MVP & FSAE", icon: "⚡" },
    { title: "Market & Financials", icon: "💼" },
    { title: "Growth Strategy", icon: "📈" },
    { title: "Market Analysis", icon: "📊" },
    { title: "Recycling", icon: "♻️" },
    { title: "Positive Scenario BRL", icon: "🇧🇷" },
    { title: "Positive Scenario USD", icon: "🇺🇸" },
    { title: "Realistic Scenario BRL", icon: "📋" },
    { title: "Realistic Scenario USD", icon: "💲" },
    { title: "Market Study", icon: "🔍" }
  ];

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      {/* Progress indicator */}
      <div className="bg-card/80 backdrop-blur-sm rounded-xl p-3 border border-border/50">
        <div className="text-xs text-muted-foreground mb-2">
          {currentSlide + 1} of {totalSlides}
        </div>
        <div className="w-32 h-1 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          />
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="bg-card/80 backdrop-blur-sm rounded-xl p-2 border border-border/50">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onSlideChange(Math.max(0, currentSlide - 1))}
          disabled={currentSlide === 0}
          className="mb-1"
        >
          <ChevronUp className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onSlideChange(Math.min(totalSlides - 1, currentSlide + 1))}
          disabled={currentSlide === totalSlides - 1}
        >
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      {/* Slide indicator dots */}
      <div className="bg-card/80 backdrop-blur-sm rounded-xl p-3 border border-border/50 max-h-96 overflow-y-auto">
        <div className="flex flex-col gap-1">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => onSlideChange(index)}
              className={cn(
                "p-2 rounded-lg text-xs transition-all duration-200 text-left flex items-center gap-2",
                index === currentSlide 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "hover:bg-muted text-muted-foreground"
              )}
              title={slide.title}
            >
              <span className="text-sm">{slide.icon}</span>
              <span className="hidden lg:block truncate w-20">{slide.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
import { ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SlideContainerProps {
  children: ReactNode;
  className?: string;
  isActive: boolean;
  slideIndex: number;
}

export const SlideContainer = ({ children, className, isActive, slideIndex }: SlideContainerProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isActive && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isActive, hasAnimated]);

  return (
    <section
      className={cn(
        "min-h-screen w-full flex flex-col justify-center items-center relative px-4 md:px-8 transition-all duration-700",
        isActive ? "opacity-100" : "opacity-0",
        hasAnimated && isActive ? "animate-fade-in" : "",
        className
      )}
      data-slide={slideIndex}
    >
      <div className="container max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};
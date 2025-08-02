import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationClass?: string;
}

export const AnimatedSection = ({ children, className, animationClass }: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "min-h-screen w-full flex flex-col justify-center items-center relative px-4 md:px-8 py-16 transition-all duration-1000",
        isVisible ? "opacity-100" : "opacity-0",
        hasAnimated && isVisible && animationClass, // <- animação aplicada aqui
        className
      )}
    >
      <div className="container max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

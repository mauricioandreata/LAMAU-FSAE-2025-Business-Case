import { Badge } from "@/components/ui/badge";

export const TitleSlide = () => {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <div className="mb-8 animate-scale-in">
        <div className="w-48 h-36 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-2xl animate-pulse-glow">
          <div className="text-white font-bold text-lg">LAMAU</div>
        </div>
      </div>
      
      <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in text-gradient-primary">
        Second-Life Battery Systems
      </h1>
      
      <h2 className="text-xl md:text-3xl font-light text-muted-foreground mb-8 animate-fade-in [animation-delay:0.2s]">
        A Business Case for Sustainable Energy Storage
      </h2>
      
      <div className="space-y-3 animate-fade-in [animation-delay:0.4s]">
        <Badge variant="secondary" className="text-base py-2 px-4">
          LAMAU Racing Team
        </Badge>
        <p className="text-sm md:text-base text-muted-foreground">
          Universidade Federal de Uberlândia (UFU)
        </p>
      </div>
    </div>
  );
};
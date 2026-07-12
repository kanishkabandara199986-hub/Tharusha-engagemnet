import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface LuxuryCardProps {
  children: ReactNode;
  className?: string;
}

export const LuxuryCard = ({ children, className }: LuxuryCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-8 md:p-12 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-divider relative overflow-hidden",
        className
      )}
    >
      {/* Decorative corners */}
      <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold/30 rounded-tl-lg" />
      <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gold/30 rounded-tr-lg" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gold/30 rounded-bl-lg" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold/30 rounded-br-lg" />
      
      <div className="relative z-10">{children}</div>
    </div>
  );
};

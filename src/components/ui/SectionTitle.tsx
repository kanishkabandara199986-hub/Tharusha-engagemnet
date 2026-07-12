import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionTitle = ({ title, subtitle, className }: SectionTitleProps) => {
  return (
    <div className={cn("text-center mb-16", className)}>
      {subtitle && (
        <p className="text-gold tracking-[0.3em] text-sm uppercase mb-4 font-medium">
          {subtitle}
        </p>
      )}
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text">
        {title}
      </h2>
    </div>
  );
};

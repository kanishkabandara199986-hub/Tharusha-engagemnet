import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  variant?: "horizontal" | "vertical";
}

export const Divider = ({ className, variant = "horizontal" }: DividerProps) => {
  return (
    <div
      className={cn(
        "bg-divider",
        variant === "horizontal" ? "h-[1px] w-full" : "w-[1px] h-full",
        className
      )}
    />
  );
};

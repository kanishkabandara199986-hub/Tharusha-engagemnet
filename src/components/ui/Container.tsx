import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Container = ({ children, className, id }: ContainerProps) => {
  return (
    <section
      id={id}
      className={cn(
        "w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32",
        className
      )}
    >
      {children}
    </section>
  );
};

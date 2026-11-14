import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  glass?: boolean;
  hover?: boolean;
};

export default function Card({ children, className = "", glass = false, hover = false }: CardProps) {
  return (
    <div className={`${glass ? "glass" : "card"} ${hover ? "lift" : ""} ${className}`}>
      {children}
    </div>
  );
}

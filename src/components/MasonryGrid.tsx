import type { ReactNode } from "react";

export default function MasonryGrid({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid ${className}`}
    >
      {children}
    </div>
  );
}

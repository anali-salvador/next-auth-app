import Image from "next/image";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import IconBubble from "./IconBubble";
import type { Tone } from "./tones";

type FeatureCardProps = {
  icon: IconType;
  title: string;
  tone?: Tone;
  image?: { src: string; width: number; height: number; alt: string };
  children?: ReactNode;
  className?: string;
};

export default function FeatureCard({
  icon,
  title,
  tone = "lilac",
  image,
  children,
  className = "",
}: FeatureCardProps) {
  return (
    <article className={`card lift group overflow-hidden p-0 ${className}`}>
      {image && (
        <div className="overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-auto w-full transition duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>
      )}
      <div className="relative p-6">
        <IconBubble
          icon={icon}
          tone={tone}
          className={image ? "-mt-14 mb-4" : "mb-4"}
        />
        <h3 className="font-display text-xl font-bold text-slate-900">{title}</h3>
        {children && <div className="mt-2 text-sm leading-relaxed text-slate-600">{children}</div>}
      </div>
    </article>
  );
}

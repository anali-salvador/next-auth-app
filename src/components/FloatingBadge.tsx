import type { IconType } from "react-icons";
import IconBubble from "./IconBubble";
import type { Tone } from "./tones";

type FloatingBadgeProps = {
  icon: IconType;
  title: string;
  subtitle: string;
  tone: Tone;
  className?: string;
  delay?: string;
};

export default function FloatingBadge({
  icon,
  title,
  subtitle,
  tone,
  className = "",
  delay = "0s",
}: FloatingBadgeProps) {
  return (
    <div
      className={`float-soft absolute flex items-center gap-3 rounded-3xl bg-white/90 p-3 pr-5 shadow-[0_18px_40px_-15px_rgba(124,92,214,0.5)] ring-1 ring-white backdrop-blur ${className}`}
      style={{ animationDelay: delay }}
    >
      <IconBubble icon={icon} tone={tone} size="sm" />
      <div className="leading-tight">
        <p className="text-sm font-bold text-slate-900">{title}</p>
        <p className="text-xs text-slate-500">{subtitle}</p>
      </div>
    </div>
  );
}

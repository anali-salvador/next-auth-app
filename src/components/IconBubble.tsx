import type { IconType } from "react-icons";
import { TONES, type Tone } from "./tones";

const SIZES = {
  sm: "h-10 w-10 rounded-xl text-xl",
  md: "h-14 w-14 rounded-2xl text-3xl",
  lg: "h-20 w-20 rounded-3xl text-5xl",
};

type IconBubbleProps = {
  icon: IconType;
  tone?: Tone;
  size?: keyof typeof SIZES;
  className?: string;
};

export default function IconBubble({
  icon: Icon,
  tone = "lilac",
  size = "md",
  className = "",
}: IconBubbleProps) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center bg-linear-to-br shadow-lg ring-2 ring-white/80 ${SIZES[size]} ${TONES[tone].bubble} ${className}`}
    >
      <Icon />
    </span>
  );
}

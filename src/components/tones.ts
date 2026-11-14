// Paleta pastel compartida. Clases completas para que Tailwind las detecte.
export type Tone = "lilac" | "rose" | "sky" | "mint" | "peach";

export const TONES: Record<Tone, { bubble: string; soft: string; text: string }> = {
  lilac: {
    bubble: "from-violet-200 to-fuchsia-200 text-violet-700 shadow-violet-300/60",
    soft: "bg-lilac/50",
    text: "text-violet-700",
  },
  rose: {
    bubble: "from-pink-200 to-rose-200 text-pink-700 shadow-pink-300/60",
    soft: "bg-rose/50",
    text: "text-pink-700",
  },
  sky: {
    bubble: "from-sky-200 to-indigo-200 text-sky-700 shadow-sky-300/60",
    soft: "bg-sky/50",
    text: "text-sky-700",
  },
  mint: {
    bubble: "from-emerald-200 to-teal-200 text-emerald-700 shadow-emerald-300/60",
    soft: "bg-mint/60",
    text: "text-emerald-700",
  },
  peach: {
    bubble: "from-orange-200 to-amber-200 text-orange-700 shadow-orange-300/60",
    soft: "bg-peach/60",
    text: "text-orange-700",
  },
};

import type { ReactNode } from "react";
import { PiCheckCircleDuotone, PiWarningCircleDuotone } from "react-icons/pi";

const VARIANTS = {
  error: { Icon: PiWarningCircleDuotone, className: "bg-rose/60 text-rose-800 ring-rose-200" },
  success: { Icon: PiCheckCircleDuotone, className: "bg-mint/70 text-emerald-800 ring-emerald-200" },
};

export default function Alert({
  type,
  children,
}: {
  type: keyof typeof VARIANTS;
  children: ReactNode;
}) {
  const { Icon, className } = VARIANTS[type];
  return (
    <div
      role={type === "error" ? "alert" : "status"}
      className={`flex items-start gap-2 rounded-2xl px-4 py-3 text-sm font-medium ring-1 ${className}`}
    >
      <Icon className="h-5 w-5 shrink-0" />
      <span>{children}</span>
    </div>
  );
}

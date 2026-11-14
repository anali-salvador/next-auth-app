import type { InputHTMLAttributes } from "react";
import type { IconType } from "react-icons";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: IconType;
  label: string;
};

export default function FormInput({ icon: Icon, label, id, ...props }: FormInputProps) {
  const inputId = id ?? props.name;
  return (
    <label htmlFor={inputId} className="block">
      <span className="mb-1.5 block text-xs font-semibold text-slate-600">{label}</span>
      <span className="relative block">
        <Icon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-violet-500" />
        <input
          id={inputId}
          {...props}
          className="w-full rounded-2xl border border-white bg-white/80 py-3 pl-12 pr-4 text-sm text-slate-800 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
        />
      </span>
    </label>
  );
}

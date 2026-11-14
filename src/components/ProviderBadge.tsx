import { getProvider } from "./providers";

export default function ProviderBadge({ provider }: { provider?: string | null }) {
  const { label, Icon } = getProvider(provider);
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
      <Icon className="h-4 w-4" />
      {label}
    </span>
  );
}

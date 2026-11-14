import Link from "next/link";
import { PiHeartDuotone } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="mt-20 px-4 pb-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 rounded-3xl bg-white/60 px-6 py-5 text-sm text-slate-600 ring-1 ring-white/80 backdrop-blur sm:flex-row">
        <p className="font-display font-bold text-slate-800">NextAuth App</p>
        <p className="flex items-center gap-1">
          Hecho con <PiHeartDuotone className="h-4 w-4 text-pink-500" /> en Next.js · Lab S13 ·
          <Link href="/privacy" className="font-semibold text-violet-700 hover:underline">
            Privacidad
          </Link>
        </p>
      </div>
    </footer>
  );
}

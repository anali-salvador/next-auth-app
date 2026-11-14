import Image from "next/image";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import IconBubble from "./IconBubble";

type AuthLayoutProps = {
  icon: IconType;
  title: string;
  subtitle: string;
  quote: string;
  children: ReactNode;
};

export default function AuthLayout({ icon, title, subtitle, quote, children }: AuthLayoutProps) {
  return (
    <main className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-8 px-4 py-10 lg:grid-cols-2">
      <aside className="relative hidden h-full min-h-[560px] flex-col justify-between overflow-hidden rounded-[2.5rem] bg-linear-to-br from-violet-200 via-pink-200 to-orange-100 p-10 shadow-[0_30px_70px_-25px_rgba(124,92,214,0.5)] lg:flex">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/30 blur-2xl" />
        <p className="relative font-display text-4xl font-bold leading-tight text-slate-900">
          {quote}
        </p>
        <Image
          src="/images/hero-phone.svg"
          alt="Celular con candado de seguridad"
          width={600}
          height={600}
          className="float-soft relative mx-auto h-auto w-4/5"
        />
        <p className="relative text-sm font-medium text-slate-700">
          Protegido con OAuth 2.0, JWT y bcrypt.
        </p>
      </aside>

      <section className="glass mx-auto w-full max-w-md">
        <div className="mb-7 text-center">
          <IconBubble icon={icon} tone="rose" size="lg" className="mx-auto" />
          <h1 className="mt-5 font-display text-4xl font-bold text-slate-900">{title}</h1>
          <p className="mt-1 font-light text-slate-600">{subtitle}</p>
        </div>
        {children}
      </section>
    </main>
  );
}

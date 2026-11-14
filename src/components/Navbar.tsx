"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  PiHouseDuotone,
  PiShieldCheckDuotone,
  PiSignInDuotone,
  PiSquaresFourDuotone,
  PiUserCircleDuotone,
} from "react-icons/pi";
import IconBubble from "./IconBubble";
import LogoutButton from "./LogoutButton";

const LINKS = [
  { href: "/", label: "Inicio", Icon: PiHouseDuotone },
  { href: "/dashboard", label: "Dashboard", Icon: PiSquaresFourDuotone },
  { href: "/profile", label: "Perfil", Icon: PiUserCircleDuotone },
];

export default function Navbar() {
  const pathname = usePathname();
  const { status } = useSession();

  return (
    <header className="sticky top-0 z-30 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-3xl bg-white/70 px-3 py-2.5 shadow-[0_12px_30px_-18px_rgba(124,92,214,0.5)] ring-1 ring-white/80 backdrop-blur-xl sm:px-4">
        <Link href="/" className="flex items-center gap-2.5">
          <IconBubble icon={PiShieldCheckDuotone} tone="lilac" size="sm" />
          <span className="hidden font-display text-xl font-bold text-slate-900 sm:inline">
            NextAuth App
          </span>
        </Link>

        <ul className="flex items-center gap-1">
          {LINKS.map(({ href, label, Icon }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-label={label}
                  className={`flex items-center gap-1.5 rounded-2xl px-3 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-linear-to-r from-violet-100 to-pink-100 text-violet-800"
                      : "text-slate-600 hover:bg-white hover:text-slate-900"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="hidden md:inline">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {status === "authenticated" ? (
          <LogoutButton className="px-3 py-2" />
        ) : (
          <Link href="/signIn" className="btn-primary px-3 py-2">
            <PiSignInDuotone className="h-5 w-5" />
            <span>Entrar</span>
          </Link>
        )}
      </nav>
    </header>
  );
}

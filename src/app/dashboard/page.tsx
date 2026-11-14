"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  PiArrowRightBold,
  PiFingerprintDuotone,
  PiKeyDuotone,
  PiLockKeyDuotone,
  PiPulseDuotone,
  PiShieldCheckDuotone,
  PiTimerDuotone,
  PiUserCircleDuotone,
} from "react-icons/pi";
import Card from "@/components/Card";
import IconBubble from "@/components/IconBubble";
import LoadingScreen from "@/components/LoadingScreen";
import MasonryGrid from "@/components/MasonryGrid";
import ProfileCover from "@/components/ProfileCover";
import ProviderBadge from "@/components/ProviderBadge";
import { getProvider } from "@/components/providers";

const SECURITY_ITEMS = [
  { icon: PiKeyDuotone, label: "JWT", text: "Sesión firmada" },
  { icon: PiLockKeyDuotone, label: "bcrypt", text: "10 rondas de hash" },
  { icon: PiTimerDuotone, label: "5 intentos", text: "Bloqueo de 15 min" },
] as const;

export default function DashboardPage() {
  const { data: session, status } = useSession({ required: true });

  if (status === "loading") return <LoadingScreen />;

  const user = session.user;
  const firstName = user?.name?.split(" ")[0] ?? "Usuario";
  const provider = getProvider(user?.provider);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
      <ProfileCover name={user?.name} image={user?.image}>
        <h1 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">
          ¡Hola, {firstName}! 👋
        </h1>
        <p className="mt-1 break-all font-light text-slate-600">
          {user?.email ?? "Sin email público"}
        </p>
      </ProfileCover>

      <MasonryGrid className="mt-8">
        <Card hover className="bg-linear-to-br from-white/90 to-mint/60">
          <div className="flex items-center justify-between">
            <IconBubble icon={PiPulseDuotone} tone="mint" />
            <span className="flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-100">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 motion-reduce:animate-none" />
              En línea
            </span>
          </div>
          <p className="mt-5 text-sm text-slate-500">Estado de sesión</p>
          <p className="font-display text-3xl font-bold text-slate-900">Activa</p>
          <p className="mt-1 text-sm text-slate-600">Token JWT válido en este navegador.</p>
        </Card>

        <Card hover className="group overflow-hidden p-0">
          <div className="overflow-hidden">
            <Image
              src="/images/fingerprint.svg"
              alt="Huella digital en tonos pastel"
              width={400}
              height={420}
              className="h-auto w-full transition duration-500 group-hover:scale-105 motion-reduce:transition-none"
            />
          </div>
          <div className="p-6">
            <p className="text-sm text-slate-500">Proveedor</p>
            <div className="mt-1 flex items-center gap-3">
              <provider.Icon className="h-8 w-8" />
              <p className="font-display text-3xl font-bold text-slate-900">{provider.label}</p>
            </div>
          </div>
        </Card>

        <Card hover className="bg-linear-to-br from-white/90 to-sky/60">
          <IconBubble icon={PiShieldCheckDuotone} tone="sky" />
          <h2 className="mt-5 font-display text-2xl font-bold text-slate-900">Seguridad</h2>
          <ul className="mt-4 space-y-3">
            {SECURITY_ITEMS.map(({ icon, label, text }) => (
              <li key={label} className="flex items-center gap-3 rounded-2xl bg-white/80 p-3">
                <IconBubble icon={icon} tone="sky" size="sm" />
                <div className="leading-tight">
                  <p className="font-bold text-slate-900">{label}</p>
                  <p className="text-xs text-slate-500">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card hover className="bg-linear-to-br from-white/90 to-lilac/60">
          <IconBubble icon={PiUserCircleDuotone} tone="lilac" />
          <h2 className="mt-5 font-display text-2xl font-bold text-slate-900">Tu perfil</h2>
          <dl className="mt-3 space-y-3 text-sm">
            <div>
              <dt className="text-slate-500">Nombre</dt>
              <dd className="font-semibold text-slate-800">{user?.name ?? "—"}</dd>
            </div>
            <div>
              <dt className="text-slate-500">Email</dt>
              <dd className="break-all font-semibold text-slate-800">
                {user?.email ?? "Sin email público"}
              </dd>
            </div>
            <div>
              <dt className="mb-1 text-slate-500">Conectado con</dt>
              <dd>
                <ProviderBadge provider={user?.provider} />
              </dd>
            </div>
          </dl>
        </Card>

        <Link href="/profile" className="group block">
          <Card hover className="overflow-hidden p-0">
            <div className="overflow-hidden">
              <Image
                src="/images/clouds.svg"
                alt="Cielo pastel con nubes"
                width={400}
                height={260}
                className="h-auto w-full transition duration-500 group-hover:scale-105 motion-reduce:transition-none"
              />
            </div>
            <div className="flex items-center justify-between gap-4 p-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-slate-900">Mi perfil completo</h2>
                <p className="text-sm text-slate-600">Foto, id y proveedor.</p>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-pink-200 to-orange-200 text-slate-900 transition group-hover:translate-x-1 motion-reduce:transition-none">
                <PiArrowRightBold />
              </span>
            </div>
          </Card>
        </Link>

        <Card hover className="bg-linear-to-br from-white/90 to-peach/60">
          <IconBubble icon={PiFingerprintDuotone} tone="peach" />
          <p className="mt-5 text-sm text-slate-500">Rutas protegidas</p>
          <p className="font-display text-3xl font-bold text-slate-900">2</p>
          <p className="mt-1 text-sm text-slate-600">/dashboard y /profile, cuidadas por el middleware.</p>
        </Card>
      </MasonryGrid>
    </main>
  );
}

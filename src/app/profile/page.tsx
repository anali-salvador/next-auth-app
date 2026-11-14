"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import type { IconType } from "react-icons";
import {
  PiArrowLeftBold,
  PiEnvelopeSimpleDuotone,
  PiHashDuotone,
  PiIdentificationCardDuotone,
  PiUserDuotone,
} from "react-icons/pi";
import Card from "@/components/Card";
import IconBubble from "@/components/IconBubble";
import LoadingScreen from "@/components/LoadingScreen";
import LogoutButton from "@/components/LogoutButton";
import MasonryGrid from "@/components/MasonryGrid";
import ProfileCover from "@/components/ProfileCover";
import ProviderBadge from "@/components/ProviderBadge";
import { getProvider } from "@/components/providers";
import type { Tone } from "@/components/tones";

function InfoCard({ icon, tone, label, value }: { icon: IconType; tone: Tone; label: string; value: string }) {
  return (
    <Card hover>
      <IconBubble icon={icon} tone={tone} />
      <p className="mt-4 text-sm text-slate-500">{label}</p>
      <p className="break-all font-display text-xl font-bold text-slate-900">{value}</p>
    </Card>
  );
}

export default function ProfilePage() {
  const { data: session, status } = useSession({ required: true });

  if (status === "loading") return <LoadingScreen />;

  const user = session.user;
  const provider = getProvider(user?.provider);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
      <ProfileCover name={user?.name} image={user?.image}>
        <h1 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">
          {user?.name ?? "Usuario"}
        </h1>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
          <ProviderBadge provider={user?.provider} />
          <div className="flex gap-2">
            <Link href="/dashboard" className="btn-secondary px-3 py-2">
              <PiArrowLeftBold /> Dashboard
            </Link>
            <LogoutButton className="px-3 py-2" />
          </div>
        </div>
      </ProfileCover>

      <MasonryGrid className="mt-8">
        <InfoCard icon={PiUserDuotone} tone="lilac" label="Nombre" value={user?.name ?? "—"} />
        <InfoCard
          icon={PiEnvelopeSimpleDuotone}
          tone="rose"
          label="Email"
          value={user?.email ?? "Sin email público"}
        />
        <InfoCard icon={PiHashDuotone} tone="sky" label="ID de usuario" value={user?.id || "—"} />
        <InfoCard
          icon={PiIdentificationCardDuotone}
          tone="mint"
          label="Proveedor"
          value={provider.label}
        />
      </MasonryGrid>
    </main>
  );
}

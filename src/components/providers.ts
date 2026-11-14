import type { IconType } from "react-icons";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { PiEnvelopeSimpleDuotone } from "react-icons/pi";

export type ProviderId = "google" | "github" | "credentials";

export const PROVIDERS: Record<ProviderId, { label: string; Icon: IconType }> = {
  google: { label: "Google", Icon: FcGoogle },
  github: { label: "GitHub", Icon: FaGithub },
  credentials: { label: "Email y contraseña", Icon: PiEnvelopeSimpleDuotone },
};

export function getProvider(id?: string | null) {
  return PROVIDERS[(id as ProviderId) ?? "credentials"] ?? PROVIDERS.credentials;
}

"use client";

import { signIn } from "next-auth/react";
import { PROVIDERS } from "./providers";

type SocialButtonProps = {
  provider: "google" | "github";
  callbackUrl?: string;
};

export default function SocialButton({
  provider,
  callbackUrl = "/dashboard",
}: SocialButtonProps) {
  const { label, Icon } = PROVIDERS[provider];
  return (
    <button
      type="button"
      onClick={() => signIn(provider, { callbackUrl })}
      className="btn-secondary w-full"
    >
      <Icon className="h-5 w-5" />
      {label}
    </button>
  );
}

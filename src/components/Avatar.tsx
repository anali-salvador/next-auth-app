"use client";

import { useState } from "react";
import Image from "next/image";

type AvatarProps = {
  src?: string | null;
  name?: string | null;
  size?: number;
  className?: string;
};

export default function Avatar({ src, name, size = 64, className = "" }: AvatarProps) {
  const [failed, setFailed] = useState(false);
  const initial = (name?.trim()?.[0] ?? "?").toUpperCase();
  const base = `shrink-0 rounded-full ring-4 ring-white shadow-md ${className}`;

  if (!src || failed) {
    return (
      <div
        style={{ width: size, height: size, fontSize: size * 0.4 }}
        className={`${base} flex items-center justify-center bg-linear-to-br from-lilac via-rose to-peach font-bold text-slate-800`}
        aria-label={name ?? "Usuario"}
      >
        {initial}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={name ?? "Usuario"}
      width={size}
      height={size}
      onError={() => setFailed(true)}
      className={`${base} object-cover`}
      style={{ width: size, height: size }}
    />
  );
}

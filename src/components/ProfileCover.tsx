import Image from "next/image";
import type { ReactNode } from "react";
import Avatar from "./Avatar";

type ProfileCoverProps = {
  name?: string | null;
  image?: string | null;
  children: ReactNode;
};

/** Portada en degradado con la foto de perfil sobresaliendo por debajo. */
export default function ProfileCover({ name, image, children }: ProfileCoverProps) {
  return (
    <section className="card overflow-hidden p-0">
      <div className="relative h-40 sm:h-56">
        <Image
          src="/images/cover.svg"
          alt="Portada en degradado pastel con nubes"
          fill
          priority
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-4 px-6 pb-6 text-center sm:flex-row sm:items-end sm:text-left">
        <Avatar
          src={image}
          name={name}
          size={128}
          className="relative z-10 -mt-16 sm:-mt-20"
        />
        <div className="min-w-0 flex-1 sm:pb-2">{children}</div>
      </div>
    </section>
  );
}

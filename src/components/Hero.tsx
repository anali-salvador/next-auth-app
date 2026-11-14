import Image from "next/image";
import Link from "next/link";
import {
  PiCheckCircleDuotone,
  PiLockKeyDuotone,
  PiShieldCheckDuotone,
  PiSignInDuotone,
  PiSparkleDuotone,
  PiUserPlusDuotone,
} from "react-icons/pi";
import FloatingBadge from "./FloatingBadge";

export default function Hero() {
  return (
    <section className="grid items-center gap-12 lg:grid-cols-2">
      <div className="text-center lg:text-left">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm ring-1 ring-white">
          <PiSparkleDuotone className="h-5 w-5" /> Laboratorio NextAuth.js
        </span>
        <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
          Tu acceso, <span className="title-gradient">simple y seguro</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-slate-600 lg:mx-0">
          Entra con Google, GitHub o tu email. Autenticación moderna con sesiones JWT,
          contraseñas cifradas y rutas protegidas.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
          <Link href="/signIn" className="btn-primary px-7 py-3.5 text-base">
            <PiSignInDuotone className="h-6 w-6" /> Iniciar sesión
          </Link>
          <Link href="/register" className="btn-secondary px-7 py-3.5 text-base">
            <PiUserPlusDuotone className="h-6 w-6" /> Crear cuenta
          </Link>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
        <Image
          src="/images/hero-phone.svg"
          alt="Ilustración de un celular con un candado de seguridad"
          width={600}
          height={600}
          priority
          className="h-auto w-full drop-shadow-xl"
        />
        <FloatingBadge
          icon={PiShieldCheckDuotone}
          tone="lilac"
          title="OAuth 2.0"
          subtitle="Google y GitHub"
          className="left-0 top-10 sm:-left-6"
        />
        <FloatingBadge
          icon={PiLockKeyDuotone}
          tone="peach"
          title="bcrypt"
          subtitle="Contraseña cifrada"
          className="right-0 top-1/2 sm:-right-6"
          delay="-2s"
        />
        <FloatingBadge
          icon={PiCheckCircleDuotone}
          tone="mint"
          title="Sesión activa"
          subtitle="Token JWT válido"
          className="bottom-6 left-6 sm:left-2"
          delay="-4s"
        />
      </div>
    </section>
  );
}

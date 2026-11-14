import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import {
  PiDatabaseDuotone,
  PiEnvelopeSimpleDuotone,
  PiHandshakeDuotone,
  PiLockKeyDuotone,
  PiShieldCheckDuotone,
} from "react-icons/pi";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import IconBubble from "@/components/IconBubble";
import type { Tone } from "@/components/tones";

export const metadata: Metadata = {
  title: "Política de privacidad · NextAuth App",
  description: "Cómo usa NextAuth App tus datos.",
};

const CONTACT_EMAIL = "salvadorany83@gmail.com";

function Section({
  icon,
  tone,
  title,
  children,
}: {
  icon: IconType;
  tone: Tone;
  title: string;
  children: ReactNode;
}) {
  return (
    <Card className="flex flex-col gap-4 sm:flex-row sm:items-start">
      <IconBubble icon={icon} tone={tone} />
      <div>
        <h2 className="font-display text-2xl font-bold text-slate-900">{title}</h2>
        <div className="mt-2 space-y-2 leading-relaxed text-slate-600">{children}</div>
      </div>
    </Card>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12">
        <header className="text-center">
          <IconBubble icon={PiShieldCheckDuotone} tone="lilac" size="lg" className="mx-auto" />
          <h1 className="mt-6 font-display text-5xl font-bold text-slate-900">
            Política de <span className="title-gradient">privacidad</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl font-light text-slate-600">
            NextAuth App es un proyecto de laboratorio. Aquí te contamos, de forma sencilla,
            qué datos usamos y para qué.
          </p>
        </header>

        <div className="mt-10 space-y-5">
          <Section icon={PiDatabaseDuotone} tone="sky" title="Qué datos usamos">
            <p>
              <strong className="text-slate-800">Si entras con Google o GitHub:</strong> tu
              nombre, tu correo y tu foto de perfil, tal como los comparte ese proveedor.
            </p>
            <p>
              <strong className="text-slate-800">Si te registras con email:</strong> tu nombre,
              tu correo y tu contraseña. La contraseña nunca se guarda tal cual: se guarda
              cifrada con bcrypt.
            </p>
          </Section>

          <Section icon={PiLockKeyDuotone} tone="peach" title="Para qué los usamos">
            <p>
              Solo para autenticarte: saber quién eres, mantener tu sesión abierta y mostrarte
              tu dashboard y tu perfil. No los usamos para publicidad ni para nada más.
            </p>
          </Section>

          <Section icon={PiHandshakeDuotone} tone="mint" title="No compartimos tus datos">
            <p>Tus datos no se venden ni se comparten con terceros.</p>
          </Section>

          <Section icon={PiEnvelopeSimpleDuotone} tone="rose" title="Contacto">
            <p>
              Si tienes dudas o quieres que borremos tu cuenta, escríbenos a{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold text-violet-700 underline-offset-2 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}

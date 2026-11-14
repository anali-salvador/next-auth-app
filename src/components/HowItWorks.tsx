import { PiShieldCheckDuotone, PiSignInDuotone, PiUserPlusDuotone } from "react-icons/pi";
import IconBubble from "./IconBubble";
import type { Tone } from "./tones";

const STEPS: { icon: typeof PiUserPlusDuotone; title: string; text: string; tone: Tone }[] = [
  { icon: PiUserPlusDuotone, title: "Regístrate", text: "Crea tu cuenta con email o usa Google / GitHub.", tone: "rose" },
  { icon: PiSignInDuotone, title: "Inicia sesión", text: "Validamos tus datos y generamos un token JWT.", tone: "sky" },
  { icon: PiShieldCheckDuotone, title: "Accede protegido", text: "Entra a tu dashboard y perfil de forma segura.", tone: "mint" },
];

export default function HowItWorks() {
  return (
    <section className="glass mt-24 px-6 py-12 sm:px-12">
      <h2 className="text-center font-display text-4xl font-bold text-slate-900">Cómo funciona</h2>
      <p className="mt-2 text-center font-light text-slate-600">Tres pasos y listo.</p>
      <ol className="mt-10 grid gap-10 md:grid-cols-3">
        {STEPS.map(({ icon, title, text, tone }, i) => (
          <li key={title} className="flex flex-col items-center text-center">
            <div className="relative">
              <IconBubble icon={icon} tone={tone} size="lg" />
              <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                {i + 1}
              </span>
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold text-slate-900">{title}</h3>
            <p className="mt-1 max-w-xs text-sm text-slate-600">{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

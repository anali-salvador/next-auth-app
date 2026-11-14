import {
  PiCloudDuotone,
  PiDeviceMobileDuotone,
  PiFingerprintDuotone,
  PiKeyDuotone,
  PiLockKeyDuotone,
  PiShieldCheckDuotone,
} from "react-icons/pi";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MasonryGrid from "@/components/MasonryGrid";

const FEATURES = [
  {
    icon: PiShieldCheckDuotone,
    tone: "lilac",
    title: "Seguridad OAuth 2.0",
    text: "Inicia sesión con Google o GitHub sin compartir tu contraseña con nosotros.",
    image: { src: "/images/shield.svg", width: 400, height: 300, alt: "Escudo con check de seguridad" },
  },
  {
    icon: PiKeyDuotone,
    tone: "peach",
    title: "Sesiones JWT",
    text: "Tu sesión viaja firmada en un token seguro, rápido y sin estado.",
    image: { src: "/images/key.svg", width: 400, height: 480, alt: "Llave dorada con destellos" },
  },
  {
    icon: PiLockKeyDuotone,
    tone: "rose",
    title: "Contraseñas con bcrypt",
    text: "Se guardan cifradas y la cuenta se bloquea 15 minutos tras 5 intentos fallidos.",
  },
  {
    icon: PiDeviceMobileDuotone,
    tone: "mint",
    title: "Funciona en todos lados",
    text: "Diseño responsive pensado para móvil, tablet y escritorio.",
    image: { src: "/images/laptop.svg", width: 400, height: 340, alt: "Laptop en un escritorio con una planta" },
  },
  {
    icon: PiFingerprintDuotone,
    tone: "lilac",
    title: "Rutas protegidas",
    text: "El middleware cuida tu dashboard y tu perfil: solo entras con sesión.",
    image: { src: "/images/fingerprint.svg", width: 400, height: 420, alt: "Huella digital en tonos pastel" },
  },
  {
    icon: PiCloudDuotone,
    tone: "sky",
    title: "Datos en la nube",
    text: "Usuarios guardados de forma segura en PostgreSQL con Prisma.",
    image: { src: "/images/clouds.svg", width: 400, height: 260, alt: "Cielo en degradado con nubes" },
  },
] as const;

export default function Home() {
  return (
    <>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pt-10 sm:pt-16">
        <Hero />

        <section className="mt-24">
          <h2 className="text-center font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            Todo lo que <span className="title-gradient">te protege</span>
          </h2>
          <p className="mt-3 text-center font-light text-slate-600">
            Seguridad real, con un diseño que da gusto usar.
          </p>
          <MasonryGrid className="mt-10">
            {FEATURES.map(({ text, ...feature }) => (
              <FeatureCard key={feature.title} {...feature}>
                {text}
              </FeatureCard>
            ))}
          </MasonryGrid>
        </section>

        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}

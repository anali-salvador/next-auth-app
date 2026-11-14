"use client";

import { Suspense, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { PiEnvelopeSimpleDuotone, PiLockKeyDuotone, PiSignInDuotone } from "react-icons/pi";
import Alert from "@/components/Alert";
import AuthLayout from "@/components/AuthLayout";
import FormInput from "@/components/FormInput";
import SocialLogin from "@/components/SocialLogin";

function RegisteredNotice() {
  const params = useSearchParams();
  if (!params.get("registered")) return null;
  return (
    <div className="mb-4">
      <Alert type="success">Cuenta creada con éxito. Ya puedes iniciar sesión.</Alert>
    </div>
  );
}

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);
    if (!res || res.error) {
      setError(res?.error ?? "Credenciales inválidas");
      return;
    }
    router.push("/dashboard");
  }

  return (
    <AuthLayout
      icon={PiSignInDuotone}
      title="¡Hola de nuevo!"
      subtitle="Inicia sesión para continuar"
      quote="Qué bueno verte otra vez ✨"
    >
      <Suspense fallback={null}>
        <RegisteredNotice />
      </Suspense>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FormInput
          icon={PiEnvelopeSimpleDuotone}
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          icon={PiLockKeyDuotone}
          label="Contraseña"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <Alert type="error">{error}</Alert>}
        <button type="submit" disabled={loading} className="btn-primary mt-1 w-full py-3">
          {loading ? "Ingresando..." : "Ingresar"}
        </button>
      </form>

      <SocialLogin />

      <p className="mt-6 text-center text-sm text-slate-600">
        ¿No tienes cuenta?{" "}
        <Link href="/register" className="font-semibold text-violet-700 hover:underline">
          Regístrate
        </Link>
      </p>
    </AuthLayout>
  );
}

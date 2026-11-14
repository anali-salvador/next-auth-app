"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PiEnvelopeSimpleDuotone, PiLockKeyDuotone, PiUserDuotone, PiUserPlusDuotone } from "react-icons/pi";
import Alert from "@/components/Alert";
import AuthLayout from "@/components/AuthLayout";
import FormInput from "@/components/FormInput";
import SocialLogin from "@/components/SocialLogin";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error ?? "No se pudo registrar");
        return;
      }
      router.push("/signIn?registered=1");
    } catch {
      setError("Error de conexión");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout
      icon={PiUserPlusDuotone}
      title="Crea tu cuenta"
      subtitle="Solo te tomará un minuto"
      quote="Tu espacio seguro empieza aquí 💜"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FormInput
          icon={PiUserDuotone}
          label="Nombre"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
          autoComplete="new-password"
          placeholder="Mínimo 8 caracteres"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
        />
        {error && <Alert type="error">{error}</Alert>}
        <button type="submit" disabled={loading} className="btn-primary mt-1 w-full py-3">
          {loading ? "Registrando..." : "Registrarse"}
        </button>
      </form>

      <SocialLogin />

      <p className="mt-6 text-center text-sm text-slate-600">
        ¿Ya tienes cuenta?{" "}
        <Link href="/signIn" className="font-semibold text-violet-700 hover:underline">
          Inicia sesión
        </Link>
      </p>
    </AuthLayout>
  );
}

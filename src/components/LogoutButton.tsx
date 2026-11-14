"use client";

import { signOut } from "next-auth/react";
import { PiSignOutDuotone } from "react-icons/pi";

export default function LogoutButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: "/" })}
      className={`btn bg-rose text-rose-900 hover:-translate-y-0.5 hover:shadow-md ${className}`}
    >
      <PiSignOutDuotone className="h-5 w-5" />
      <span>Salir</span>
    </button>
  );
}

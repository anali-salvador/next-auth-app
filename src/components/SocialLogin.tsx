import SocialButton from "./SocialButton";

export default function SocialLogin() {
  return (
    <>
      <div className="my-6 flex items-center gap-3 text-xs font-medium text-slate-500">
        <span className="h-px flex-1 bg-slate-300/60" />
        o continúa con
        <span className="h-px flex-1 bg-slate-300/60" />
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <SocialButton provider="google" />
        <SocialButton provider="github" />
      </div>
    </>
  );
}

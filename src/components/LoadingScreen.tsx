export default function LoadingScreen() {
  return (
    <main className="flex flex-1 items-center justify-center">
      <div className="card flex items-center gap-3 text-sm font-medium text-slate-600">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-violet-300 border-t-transparent motion-reduce:animate-none" />
        Cargando...
      </div>
    </main>
  );
}

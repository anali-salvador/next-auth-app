const BLOBS = [
  { className: "bg-lilac left-[-6rem] top-[-4rem] h-80 w-80", delay: "0s" },
  { className: "bg-rose right-[-5rem] top-24 h-72 w-72", delay: "-6s" },
  { className: "bg-sky bottom-[-6rem] left-1/4 h-96 w-96", delay: "-12s" },
  { className: "bg-mint bottom-10 right-1/4 h-64 w-64", delay: "-18s" },
  { className: "bg-peach left-1/2 top-1/3 h-56 w-56", delay: "-9s" },
];

export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-linear-to-br from-violet-50 via-pink-50 to-sky-50"
    >
      {BLOBS.map((blob, i) => (
        <span
          key={i}
          className={`blob ${blob.className}`}
          style={{ animationDelay: blob.delay }}
        />
      ))}
    </div>
  );
}

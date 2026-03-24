"use client";

/**
 * Full-viewport hero section with centered headline,
 * radial orange glow, grain texture, and scroll indicator.
 */
export default function Hero() {
  return (
    <section className="grain relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20 text-center">
      {/* Radial orange glow */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(255,92,0,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        {/* Badge */}
        <div className="animate-fade-up delay-100 mb-6 inline-block rounded-full border border-accent-orange/20 bg-accent-orange/5 px-4 py-1.5 text-[11px] font-bold tracking-[3px] uppercase text-accent-orange">
          All-In-One Fitness
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up delay-200 font-[family-name:var(--font-display)] text-5xl leading-[1.05] font-black tracking-tight md:text-7xl">
          Train Hard.
          <br />
          <span className="gradient-text">Track Everything.</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up delay-300 mx-auto mt-6 max-w-md text-lg leading-relaxed text-text-body">
          Workouts, nutrition, and body progress — beautifully unified in one
          app that works everywhere, even offline.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="animate-float absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-[10px] font-bold tracking-[2px] uppercase text-text-muted">
          Scroll
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-text-muted to-transparent" />
      </div>
    </section>
  );
}

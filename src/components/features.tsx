"use client";

import { useEffect, useRef, useState } from "react";

/** Data for each feature card. */
const features = [
  {
    icon: "💪",
    title: "Workout Planning",
    description:
      "Build custom training plans or choose from templates. Log every set, rep, and weight in real time.",
    tags: ["Custom Plans", "Live Logging", "Supersets"],
    accent: "var(--color-accent-orange)",
  },
  {
    icon: "🥗",
    title: "Smart Nutrition",
    description:
      "Track macros and meals with AI-powered food scanning. Create recipes and hit your daily targets.",
    tags: ["AI Food Scan", "Macro Tracking", "Recipes"],
    accent: "var(--color-accent-blue)",
  },
  {
    icon: "📊",
    title: "Progress Analytics",
    description:
      "Visualize your gains with charts, personal records, and body measurements over time.",
    tags: ["Charts", "Personal Records", "Trends"],
    accent: "var(--color-accent-green)",
  },
] as const;

/**
 * Three-column feature grid with scroll-triggered fade-in
 * and hover effects (card lift + top-edge accent glow).
 */
export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="mx-auto max-w-5xl px-6 pt-20 pb-24 md:px-12"
    >
      {/* Section header */}
      <div className="mb-14 text-center">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-sm font-bold tracking-[3px] uppercase text-accent-orange">
          Everything You Need
        </h2>
        <p className="text-[15px] text-text-muted">
          Three pillars of fitness. One unified experience.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid gap-5 md:grid-cols-3">
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className={`feature-card group relative overflow-hidden rounded-2xl border border-border-subtle bg-surface p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] ${
              visible
                ? "animate-fade-up"
                : "opacity-0"
            }`}
            style={
              {
                "--card-accent": feature.accent,
                animationDelay: visible ? `${i * 0.12}s` : undefined,
              } as React.CSSProperties
            }
          >
            {/* Icon */}
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-[14px] border border-white/5 bg-white/[0.03] text-2xl">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="mb-2 font-[family-name:var(--font-display)] text-base font-bold">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-[13px] leading-relaxed text-text-body">
              {feature.description}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap justify-center gap-1.5">
              {feature.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/[0.06] bg-white/[0.04] px-2.5 py-0.5 text-[10px] text-text-body"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

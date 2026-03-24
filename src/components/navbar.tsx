"use client";

import Link from "next/link";

interface NavbarProps {
  dict: { features: string };
  locale: string;
}

/** Fixed top navbar with blur backdrop, logo, and features anchor. */
export default function Navbar({ dict, locale }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 border-b border-white/[0.04] bg-bg/80 backdrop-blur-xl">
      {/* Logo */}
      <Link href={`/${locale}`} className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-orange">
          <span className="font-[family-name:var(--font-display)] text-base font-black text-white">
            T
          </span>
        </div>
        <span className="font-[family-name:var(--font-display)] text-base font-bold tracking-tight">
          TrainTrack
        </span>
      </Link>

      {/* Nav link */}
      <a
        href="#features"
        className="text-sm font-medium text-text-muted transition-colors hover:text-white"
      >
        {dict.features}
      </a>
    </nav>
  );
}

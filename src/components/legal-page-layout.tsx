import Link from "next/link";

interface LegalSection {
  heading: string;
  content: string;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  sections: Record<string, LegalSection>;
  locale: string;
  backLabel: string;
}

/** Shared prose layout for legal pages (Privacy, Terms). */
export default function LegalPageLayout({
  title,
  lastUpdated,
  sections,
  locale,
  backLabel,
}: LegalPageLayoutProps) {
  return (
    <>
      {/* Navbar with back link */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 border-b border-white/[0.04] bg-bg/80 backdrop-blur-xl">
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
        <Link
          href={`/${locale}`}
          className="text-sm font-medium text-text-muted transition-colors hover:text-white"
        >
          {backLabel}
        </Link>
      </nav>

      {/* Prose content */}
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-20 md:px-12">
        <h1 className="mb-2 font-[family-name:var(--font-display)] text-4xl font-black tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="mb-12 text-sm text-text-muted">{lastUpdated}</p>

        <div className="space-y-10">
          {Object.values(sections).map((section) => (
            <section key={section.heading}>
              <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl font-bold text-text-primary">
                {section.heading}
              </h2>
              <p className="text-[15px] leading-relaxed text-text-body">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}

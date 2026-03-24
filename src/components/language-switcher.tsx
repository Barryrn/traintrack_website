"use client";

import { usePathname, useRouter } from "next/navigation";

const locales = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "fr", label: "FR" },
] as const;

/** Functional language switcher — replaces the locale segment in the URL. */
export default function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  /** Replace the locale prefix in the current path and navigate. */
  function switchLocale(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  return (
    <div className="flex gap-2 text-[11px]">
      {locales.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => switchLocale(code)}
          className={
            code === currentLocale
              ? "text-accent-orange"
              : "cursor-pointer text-text-muted transition-colors hover:text-text-body"
          }
        >
          {label}
        </button>
      ))}
    </div>
  );
}

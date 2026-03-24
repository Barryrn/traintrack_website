import Link from "next/link";
import LanguageSwitcher from "./language-switcher";

interface FooterProps {
  dict: {
    copyright: string;
    privacy: string;
    terms: string;
  };
  locale: string;
}

/** Footer with legal links and functional language switcher. */
export default function Footer({ dict, locale }: FooterProps) {
  return (
    <footer className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 border-t border-border-subtle px-6 py-10 md:flex-row md:justify-between md:px-12">
      {/* Logo + copyright */}
      <div className="flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded-[5px] bg-accent-orange text-[10px] font-black text-white">
          T
        </div>
        <span className="text-xs text-text-muted">{dict.copyright}</span>
      </div>

      {/* Legal links */}
      <div className="flex gap-6">
        <Link
          href={`/${locale}/privacy`}
          className="text-xs text-text-muted transition-colors hover:text-text-body"
        >
          {dict.privacy}
        </Link>
        <Link
          href={`/${locale}/terms`}
          className="text-xs text-text-muted transition-colors hover:text-text-body"
        >
          {dict.terms}
        </Link>
      </div>

      {/* Language switcher */}
      <LanguageSwitcher currentLocale={locale} />
    </footer>
  );
}

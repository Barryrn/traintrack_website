import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { getDictionary, hasLocale } from "./dictionaries";

/** Display font — bold geometric headings */
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

/** Body font — clean readable text */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/** Pre-render all supported locale paths at build time. */
export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }, { locale: "fr" }];
}

/** Dynamic metadata based on the current locale. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
  };
}

/** Locale-aware root layout — replaces the old app/layout.tsx. */
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      className={`${outfit.variable} ${inter.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}

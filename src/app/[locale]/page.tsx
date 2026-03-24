import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Footer from "@/components/footer";

/** TrainTrack landing page with locale-aware content. */
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  return (
    <>
      <Navbar dict={dict.navbar} locale={locale} />
      <main>
        <Hero dict={dict.hero} />
        <Features dict={dict.features} />
      </main>
      <Footer dict={dict.footer} locale={locale} />
    </>
  );
}

import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import LegalPageLayout from "@/components/legal-page-layout";
import Footer from "@/components/footer";

/** Privacy Policy page — template content, locale-aware. */
export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  return (
    <>
      <LegalPageLayout
        title={dict.privacy.title}
        lastUpdated={dict.privacy.lastUpdated}
        sections={dict.privacy.sections}
        locale={locale}
        backLabel={dict.common.backToHome}
      />
      <Footer dict={dict.footer} locale={locale} />
    </>
  );
}

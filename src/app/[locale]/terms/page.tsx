import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import LegalPageLayout from "@/components/legal-page-layout";
import Footer from "@/components/footer";

/** Terms of Service page — template content, locale-aware. */
export default async function TermsPage({
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
        title={dict.terms.title}
        lastUpdated={dict.terms.lastUpdated}
        sections={dict.terms.sections}
        locale={locale}
        backLabel={dict.common.backToHome}
      />
      <Footer dict={dict.footer} locale={locale} />
    </>
  );
}

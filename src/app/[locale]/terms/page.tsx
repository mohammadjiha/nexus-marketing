import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalPage } from "@/components/legal/LegalPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.terms" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: locale === "ar" ? "/terms" : `/${locale}/terms`,
      languages: { ar: "/terms", en: "/en/terms", "x-default": "/terms" },
    },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "legal" });
  const tt = await getTranslations({ locale, namespace: "legal.terms" });
  const sections = tt.raw("sections") as { heading: string; body: string }[];

  return (
    <>
      <Navbar />
      <main>
        <LegalPage
          eyebrow={tt("eyebrow")}
          title={tt("title")}
          intro={tt("intro")}
          sections={sections}
          backLabel={t("back")}
        />
      </main>
      <Footer />
    </>
  );
}

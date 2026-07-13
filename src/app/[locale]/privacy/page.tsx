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
  const t = await getTranslations({ locale, namespace: "legal.privacy" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: locale === "ar" ? "/privacy" : `/${locale}/privacy`,
      languages: { ar: "/privacy", en: "/en/privacy", "x-default": "/privacy" },
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "legal" });
  const tp = await getTranslations({ locale, namespace: "legal.privacy" });
  const sections = tp.raw("sections") as { heading: string; body: string }[];

  return (
    <>
      <Navbar />
      <main>
        <LegalPage
          eyebrow={tp("eyebrow")}
          title={tp("title")}
          intro={tp("intro")}
          sections={sections}
          backLabel={t("back")}
        />
      </main>
      <Footer />
    </>
  );
}

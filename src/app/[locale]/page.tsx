import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/sections/Hero";
import { StatsStrip } from "@/sections/StatsStrip";
import { FeaturesGrid } from "@/sections/FeaturesGrid";
import { AudienceTabs } from "@/sections/AudienceTabs";
import { DeepDiveAICoach } from "@/sections/DeepDiveAICoach";
import { DeepDiveNutrition } from "@/sections/DeepDiveNutrition";
import { DeepDiveWorkout } from "@/sections/DeepDiveWorkout";
import { HowItWorks } from "@/sections/HowItWorks";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";
import { FAQ } from "@/sections/FAQ";
import { CTABand } from "@/sections/CTABand";
import { Contact } from "@/sections/Contact";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <FeaturesGrid />
        <AudienceTabs />
        <DeepDiveAICoach />
        <DeepDiveNutrition />
        <DeepDiveWorkout />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTABand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

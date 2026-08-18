import { Hero } from "@/components/sections/Hero";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PlansSection } from "@/components/sections/PlansSection";
import { PricingComparisonSection } from "@/components/sections/PricingComparisonSection";
import { CatalogPreviewSection } from "@/components/sections/CatalogPreviewSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <SolutionsSection />
      <ShowcaseSection />
      <ComparisonSection />
      <HowItWorksSection />
      <PlansSection />
      <PricingComparisonSection />
      <CatalogPreviewSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}

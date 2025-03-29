import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/features-section";
import { ShowcaseSection } from "@/components/home/showcase-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { PartnersSection } from "@/components/home/partners-section";
import { FAQSection } from "@/components/home/faq-section";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ShowcaseSection />
      <TestimonialsSection />
      <PartnersSection />
      <FAQSection />
      <CTASection />
    </>
  );
}

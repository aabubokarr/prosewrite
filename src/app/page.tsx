import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { UnleashSection } from '@/components/UnleashSection';
import { PricingSection } from '@/components/PricingSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FAQsSection } from '@/components/FAQsSection';
import { ReadySection } from '@/components/ReadySection';

export default function LandingPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-zinc-950">
      <Header />
      <main className="relative flex-1 overflow-hidden">
        <div className="relative">
          <div className="full-width-section">
            <HeroSection />
            <FeaturesSection />
            <UnleashSection />
            <PricingSection />
            <TestimonialsSection />
            <FAQsSection />
            <ReadySection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

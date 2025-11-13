import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { SolutionsSection } from '@/components/SolutionsSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { ProcessSection } from '@/components/ProcessSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SolutionsSection />
        <BenefitsSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

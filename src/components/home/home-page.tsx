'use client';

import '../../styles/home-page.css';
import Header from '@/components/home/header/header';
import { HeroSection } from '@/components/home/hero-section/hero-section';
import { HowItWorks } from '@/components/home/how-it-works';
import McpFeaturesSection from '@/components/ui/features-section-demo-3';
import { Footer } from '@/components/home/footer/footer';
import { HomePageBackground } from '@/components/gradients/home-page-background';
import GridBackgroundDemo from '@/components/ui/grid-background-demo';
import { SectionSeparator } from '@/components/ui/section-separator';

export function HomePage() {
 

  return (
    <>
      <div className="relative">
        <HomePageBackground />
        <GridBackgroundDemo />
        <div className="relative z-10">
          <Header />
          <HeroSection />
         
          <HowItWorks />
          <SectionSeparator />
          <McpFeaturesSection />
          <SectionSeparator />
          <Footer />
        </div>
      </div>
    </>
  );
}

'use client';

import { Pricing } from '@/components/home/pricing/pricing';
import Header from '@/components/home/header/header';
import { Footer } from '@/components/home/footer/footer';
import { HomePageBackground } from '@/components/gradients/home-page-background';
import '../../styles/home-page.css';

export default function PricingPage() {
  return (
    <>
      <HomePageBackground />
      <Header />
      <div className="min-h-screen pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that&apos;s right for your workflow automation needs
          </p>
        </div>
        <Pricing />
        <Footer />
      </div>
    </>
  );
} 
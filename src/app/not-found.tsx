import Link from 'next/link';
import { GradientButton } from '@/components/ui/gradient-button';
import { HomePageBackground } from '@/components/gradients/home-page-background';

export default function NotFound() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <HomePageBackground />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-2xl">
          {/* 404 Text */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-white/20 mb-4">404</h1>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto mb-8"></div>
          </div>

          {/* Coming Soon Message */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Coming Soon</h2>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              We're working on something amazing! This page is under construction, but we'd love to keep you updated on
              our progress.
            </p>
            <p className="text-lg text-white/60">Join our waitlist to be the first to know when we launch.</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <GradientButton href="/signup">Join the Waitlist</GradientButton>

            <Link
              href="/"
              className="text-white/70 hover:text-white transition-colors duration-300 text-lg underline underline-offset-4"
            >
              Back to Home
            </Link>
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 flex justify-center space-x-8">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-200"></div>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-400"></div>
          </div>
        </div>
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
    </div>
  );
}

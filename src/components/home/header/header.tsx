import Link from 'next/link';
import Image from 'next/image';
import { GradientButton } from '@/components/ui/gradient-button';

export default function Header() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div className="bg-background/80 backdrop-blur-sm border rounded-full px-6 py-3 shadow-lg">
        <div className="grid grid-cols-3 items-center">
          {/* Left section - Logo */}
          <div className="flex items-center">
            <Link className="flex items-center" href={'/'}>
              <Image className="w-20 h-5 block" src="/logo.svg" width={80} height={20} alt="Petal" />
            </Link>
          </div>
          
          {/* Center section - Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          
          {/* Right section - Buttons */}
          <div className="flex items-center justify-end space-x-3">
            <Link href="/login" className="hidden sm:inline-flex text-sm font-medium px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
              Sign In
            </Link>
            <GradientButton href="/signup">
              Get Started
            </GradientButton>
          </div>
        </div>
      </div>
    </nav>
  );
}

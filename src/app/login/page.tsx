'use client';

import Header from '@/components/home/header/header';
import { HomePageBackground } from '@/components/gradients/home-page-background';
import { GradientButton } from '@/components/ui/gradient-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import '../../styles/home-page.css';

export default function LoginPage() {
  return (
    <>
      <HomePageBackground />
      <Header />
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              Welcome back
            </h1>
            <p className="text-muted-foreground">
              Sign in to your Petal account
            </p>
          </div>
          
          <div className="bg-background/80 backdrop-blur-sm border rounded-lg p-6">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" />
              </div>
              
              <div className="flex justify-center">
                <GradientButton>
                  Sign In
                </GradientButton>
              </div>
            </form>
            
            <div className="mt-6 text-center text-sm">
              <p className="text-muted-foreground">
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="text-primary hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
            
            <div className="mt-4 text-center">
              <Link href="/pricing" className="text-sm text-muted-foreground hover:underline">
                View pricing plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 
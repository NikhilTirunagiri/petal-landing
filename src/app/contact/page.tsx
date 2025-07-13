'use client';

import Header from '@/components/home/header/header';
import { Footer } from '@/components/home/footer/footer';
import { HomePageBackground } from '@/components/gradients/home-page-background';
import { GradientButton } from '@/components/ui/gradient-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import '../../styles/home-page.css';

export default function ContactPage() {
  return (
    <>
      <HomePageBackground />
      <Header />
      <div className="min-h-screen pt-24 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Get in touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions about Petal? We&apos;d love to hear from you.
            </p>
          </div>
          
          <div className="bg-background/80 backdrop-blur-sm border rounded-lg p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your company name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What can we help you with?" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea 
                  id="message" 
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Tell us about your workflow automation needs..."
                />
              </div>
              
              <div className="flex justify-center">
                <GradientButton>
                  Send Message
                </GradientButton>
              </div>
            </form>
            
            <div className="mt-8 pt-8 border-t">
              <div className="grid md:grid-cols-2 gap-8 text-sm">
                <div>
                  <h3 className="font-medium mb-2">Sales Inquiries</h3>
                  <p className="text-muted-foreground">
                    Ready to automate your workflows?<br />
                    sales@petal.ai
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Support</h3>
                  <p className="text-muted-foreground">
                    Need help with existing workflows?<br />
                    support@petal.ai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
} 
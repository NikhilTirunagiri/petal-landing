import { GeistSans } from 'geist/font/sans';
import '../styles/globals.css';
import '../styles/layout.css';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  metadataBase: new URL('https://petal-billing.vercel.app'),
  title: 'Petal',
  description:
    'Petal is the AI platform that makes MCP workflows accessible through plain English. Create automated workflows using MCP with natural language - no technical skills required.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={'min-h-full dark'}>
      <body className={GeistSans.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

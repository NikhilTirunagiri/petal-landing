import { GeistSans } from 'geist/font/sans';
import '../styles/globals.css';
import '../styles/layout.css';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  metadataBase: new URL('https://trypetal.dev'),
  title: {
    default: 'Petal - AI Automation Made Simple',
    template: '%s | Petal'
  },
  description:
    'Petal is the AI platform that makes MCP workflows accessible through plain English. Create automated workflows using MCP with natural language - no technical skills required.',
  keywords: [
    'AI automation',
    'MCP workflows', 
    'Model Context Protocol',
    'no-code automation',
    'natural language programming',
    'workflow automation',
    'AI assistant',
    'automation platform'
  ],
  authors: [{ name: 'Petal Team' }],
  creator: 'Petal',
  publisher: 'Petal',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://trypetal.dev',
    title: 'Petal - AI Automation Made Simple',
    description: 'The AI platform that makes MCP workflows accessible through plain English. Create automated workflows using MCP with natural language - no technical skills required.',
    siteName: 'Petal',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Petal - AI Automation Platform',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Petal - AI Automation Made Simple',
    description: 'The AI platform that makes MCP workflows accessible through plain English. Create automated workflows using MCP with natural language - no technical skills required.',
    images: ['/og-image.png'],
    creator: '@petal_ai',
  },
  alternates: {
    canonical: 'https://trypetal.dev',
  },
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

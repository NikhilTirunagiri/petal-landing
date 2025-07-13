import React from 'react';
import Link from 'next/link';
import { GlowingEffect } from './glowing-effect';

interface GradientButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function GradientButton({ 
  href, 
  children, 
  className = '',
  onClick 
}: GradientButtonProps) {
  const buttonContent = (
    <div className="relative inline-block">
      <button 
        className={`bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block ${className}`}
        onClick={onClick}
      >
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-6 ring-1 ring-white/10">
          <span>{children}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.75 8.75L14.25 12L10.75 15.25"
            ></path>
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
      <GlowingEffect
        disabled={false}
        proximity={80}
        spread={25}
        blur={1}
        className="absolute inset-0 rounded-full"
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
} 
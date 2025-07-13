"use client";
import React from "react";
import Image from "next/image";

export function HowItWorks() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
            From natural language to automated workflows - see how Petal transforms your words into working automation
          </p>
        </div>

        {/* Main SVG Display */}
        <div className="flex justify-center mb-16">
          <div className="relative max-w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-black/30 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8">
              <Image
                src="/how-it-works.svg"
                alt="How Petal Works - From natural language to automated workflows"
                width={800}
                height={600}
                className="w-full h-auto max-w-4xl mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
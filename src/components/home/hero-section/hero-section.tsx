"use client";

import { Bot, GitBranch, MessageSquare, Settings, Workflow } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { GradientButton } from '@/components/ui/gradient-button';

export function HeroSection() {
  return (
    <section className={'mx-auto max-w-7xl px-[32px] relative pt-24 mt-16 mb-12'}>
      <div className={'text-center w-full max-w-6xl mx-auto'}>
        {/* Main Tagline */}
        <h1 className={'text-[48px] leading-[48px] md:text-[80px] md:leading-[80px] tracking-[-1.6px] font-medium mb-4'}>
          The AI that turns your words into{' '}
          <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            working automation
          </span>
        </h1>

        {/* Subtitle */}
        <p className={'mt-6 text-[18px] leading-[27px] md:text-[20px] md:leading-[30px] text-gray-400 mb-12'}>
          Stop wrestling with MCP tools. Start describing what you want.
        </p>

        {/* Visual Card Grid */}
        <div className="mt-16">
          <PetalFeatureGrid />
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <p className="text-gray-300 mb-6">Try it yourself. No technical knowledge required.</p>
          <GradientButton href="/signup">
            Start Building Workflows
          </GradientButton>
        </div>
      </div>
    </section>
  );
}

function PetalFeatureGrid() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Bot className="h-4 w-4 text-green-400" />}
        title="AI-Powered Automation"
        description="Just describe what you want: &ldquo;Send me a Slack message when someone stars my GitHub repo&rdquo;"
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Settings className="h-4 w-4 text-green-400" />}
        title="No Technical Setup"
        description="Skip the complex configuration. Our AI handles webhooks, APIs, and authentication for you."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Workflow className="h-4 w-4 text-green-400" />}
        title="Works with Everything"
        description="Connect GitHub, Slack, Gmail, Notion, Shopify, and hundreds of other apps instantly."
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<GitBranch className="h-4 w-4 text-green-400" />}
        title="Deploy in Seconds"
        description="From idea to working automation in under 30 seconds. No coding required."
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<MessageSquare className="h-4 w-4 text-green-400" />}
        title="Plain English Interface"
        description="&ldquo;Add new customers to my email list&rdquo; → Working automation. It&apos;s that simple."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-green-900/50 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-emerald-950/30 backdrop-blur-sm border border-green-900/30 dark:shadow-[0px_0px_27px_0px_#065f46]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-green-600/50 bg-green-950/30 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export interface Tier {
  name: string;
  id: 'starter' | 'pro' | 'advanced';
  icon: string;
  description: string;
  features: string[];
  featured: boolean;
  priceId: Record<string, string>;
}

export const PricingTier: Tier[] = [
  {
    name: 'Starter',
    id: 'starter',
    icon: '/assets/icons/price-tiers/free-icon.svg',
    description: 'Perfect for individuals exploring AI-powered workflow automation.',
    features: ['5 workflows/month', 'Basic MCP integrations', 'Email support', 'Community access'],
    featured: false,
    priceId: { month: 'static_starter', year: 'static_starter' },
  },
  {
    name: 'Pro',
    id: 'pro',
    icon: '/assets/icons/price-tiers/basic-icon.svg',
    description: 'Advanced AI orchestration for teams scaling their automation.',
    features: ['Unlimited workflows', 'Advanced MCP servers', 'Priority support', 'Team collaboration', 'Everything in Starter'],
    featured: true,
    priceId: { month: 'static_pro_monthly', year: 'static_pro_yearly' },
  },
  {
    name: 'Advanced',
    id: 'advanced',
    icon: '/assets/icons/price-tiers/pro-icon.svg',
    description: 'Enterprise-grade AI workflow intelligence with custom integrations.',
    features: [
      'Custom MCP servers',
      'White-label solution',
      'Advanced analytics',
      'Dedicated support',
      'Everything in Pro',
    ],
    featured: false,
    priceId: { month: 'static_advanced_monthly', year: 'static_advanced_yearly' },
  },
];

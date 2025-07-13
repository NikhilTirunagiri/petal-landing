import { Toggle } from '@/components/shared/toggle/toggle';
import { PriceCards } from '@/components/home/pricing/price-cards';
import { useState } from 'react';
import { BillingFrequency, IBillingFrequency } from '@/constants/billing-frequency';

// Static pricing data - generic pricing IDs
const staticPrices = {
  'static_starter': '$0.00', // Starter
  'static_pro_monthly': '$9.99', // Pro monthly
  'static_pro_yearly': '$99.99', // Pro yearly
  'static_advanced_monthly': '$19.99', // Advanced monthly
  'static_advanced_yearly': '$199.99', // Advanced yearly
};

export function Pricing() {
  const [frequency, setFrequency] = useState<IBillingFrequency>(BillingFrequency[0]);

  return (
    <div className="mx-auto max-w-7xl relative px-[32px] flex flex-col items-center justify-between">
      <Toggle frequency={frequency} setFrequency={setFrequency} />
      <PriceCards frequency={frequency} loading={false} priceMap={staticPrices} />
    </div>
  );
}

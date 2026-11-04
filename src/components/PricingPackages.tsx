import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { profile } from '../data/portfolio';

type BillingModel = 'retainer' | 'project';

type PricingTier = {
  name: string;
  title: string;
  audience: string;
  features: string[];
  featured?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    title: 'The Pilot',
    audience: 'For startups and creators getting the essentials in place.',
    features: ['Social media starter pack', 'Basic ad account and campaign setup', 'Weekly performance reporting'],
  },
  {
    name: 'Growth',
    title: 'Season Pass',
    audience: 'For teams ready to connect creative, campaigns, and conversion.',
    features: ['Full-funnel ads planning', '12 short-form reels per month', 'CRO landing page recommendations', 'Weekly campaign optimization'],
    featured: true,
  },
  {
    name: 'Scale',
    title: 'Blockbuster',
    audience: 'For established brands coordinating growth across channels.',
    features: ['Omnichannel campaign planning', 'End-to-end creative production', 'Dedicated async communication', 'Weekly strategy session'],
  },
];

function contactHref(tier: PricingTier, billing: BillingModel) {
  const subject = `Let's discuss ${tier.title}`;
  const body = `Hi Samkit,\n\nI'm interested in the ${tier.title} ${billing === 'retainer' ? 'monthly retainer' : 'one-time project'} package. Let's discuss the scope and a custom quote.\n`;
  return profile.email
    ? `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    : '#contact';
}

export default function PricingPackages() {
  const [billing, setBilling] = useState<BillingModel>('retainer');
  const billingLabel = billing === 'retainer' ? 'Monthly retainer' : 'One-time project';

  return (
    <div className="gutter mx-auto max-w-7xl">
      <header className="mb-8 text-center">
        <p className="mb-3 text-[10px] font-bold tracking-[0.35em] text-violet-300">[ EPISODE 05 ]</p>
        <h2 className="font-display text-4xl tracking-wider text-bone sm:text-6xl">CHOOSE YOUR GROWTH PLAN</h2>
        <p className="mx-auto mt-3 max-w-xl font-serif text-xl italic text-mist">
          Clear deliverables. A scope built around your goals.
        </p>
      </header>

      <div className="mb-9 flex justify-center">
        <div role="group" aria-label="Choose a package billing model" className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1">
          {([
            ['retainer', 'Monthly retainer'],
            ['project', 'One-time project'],
          ] as const).map(([value, label]) => (
            <button
              key={value}
              type="button"
              aria-pressed={billing === value}
              onClick={() => setBilling(value)}
              className={`min-h-10 rounded-full px-4 text-xs font-semibold transition sm:px-5 ${
                billing === value ? 'bg-bone text-ink' : 'text-mist hover:text-bone'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid items-stretch gap-4 lg:grid-cols-3">
        {pricingTiers.map((tier, index) => (
          <motion.article
            key={tier.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className={`relative flex flex-col rounded-2xl border bg-[#0f0f14] p-6 sm:p-7 ${
              tier.featured
                ? 'border-violet-300/60 shadow-[0_0_45px_rgba(167,139,250,0.12)]'
                : 'border-white/10'
            }`}
          >
            {tier.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-300 px-4 py-1 text-[9px] font-extrabold tracking-[0.2em] text-ink">
                MOST POPULAR
              </span>
            )}
            <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-smoke">{tier.name}</p>
            <h3 className="mt-2 font-display text-4xl tracking-wide text-bone">{tier.title}</h3>
            <p className="mt-2 min-h-12 text-sm leading-6 text-mist">{tier.audience}</p>

            <div className="my-6 border-y border-white/10 py-5">
              <p className="font-display text-3xl tracking-wide text-bone">CUSTOM QUOTE</p>
              <p className="mt-1 text-xs text-smoke">{billingLabel} · Scope agreed before work begins</p>
            </div>

            <ul className="mb-7 flex-1 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-2.5 text-sm leading-5 text-mist">
                  <Check size={16} className="mt-0.5 shrink-0 text-emerald-300" aria-hidden />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={contactHref(tier, billing)}
              className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-xs font-bold uppercase tracking-[0.16em] transition ${
                tier.featured
                  ? 'bg-violet-300 text-ink hover:bg-violet-200'
                  : 'border border-white/15 text-bone hover:border-white/40 hover:bg-white/[0.05]'
              }`}
            >
              Start this plan <ArrowRight size={15} aria-hidden />
            </a>
          </motion.article>
        ))}
      </div>
      <p className="mt-6 text-center text-xs leading-5 text-smoke">
        Pricing is scoped to the final deliverables, timeline, and campaign requirements.
      </p>
    </div>
  );
}

import { useCallback, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import PlanDetailModal, { type BillingModel, type PricingTier } from './PlanDetailModal';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    title: 'The Pilot',
    audience: 'Early-stage startups, creators, and single-product launches.',
    highlights: ['8 short-form Reels or Shorts', 'Ad campaign management', 'Basic SEO audit', 'Bi-weekly reporting'],
    prices: { retainer: { usd: 850, inr: 35000 }, project: { usd: 650, inr: 25000 } },
    scope: {
      retainer: [
        'Manage one agreed paid media channel and campaign scope',
        'Create 8 high-retention Reels or Shorts from supplied or agreed source material',
        'Complete a basic SEO audit with prioritized recommendations',
        'Review campaign performance and share a report every two weeks',
      ],
      project: [
        'Set up one responsive campaign landing page',
        'Configure the agreed analytics and advertising tracking pixel',
        'Deliver an initial pack of 5 ad creatives (videos and/or graphics)',
        'Test the page and tracking setup before handoff',
      ],
    },
    timeline: { retainer: 'Monthly, with onboarding in 5–7 business days', project: 'Approximately 1–2 weeks after assets and requirements are approved' },
    communication: { retainer: 'Email or WhatsApp, with bi-weekly reporting', project: 'Email or WhatsApp for kickoff, review, and handoff' },
  },
  {
    name: 'Growth',
    title: 'The Season Pass',
    audience: 'Scaling brands looking for steady leads and organic reach.',
    highlights: ['Full-funnel Meta & Google Ads', '16 short-form video edits', 'Conversion rate optimization', 'Weekly strategy sync'],
    prices: { retainer: { usd: 1950, inr: 75000 }, project: { usd: 1450, inr: 55000 } },
    scope: {
      retainer: [
        'Plan and manage agreed Meta and Google Ads campaigns across the funnel',
        'Edit 16 short-form videos per month from supplied or agreed source material',
        'Review the landing-page journey and prioritize conversion improvements',
        'Hold a weekly strategy sync and optimize campaigns against agreed goals',
      ],
      project: [
        'Design and build a high-converting React campaign landing page',
        'Produce a custom video showreel from approved source material',
        'Configure and launch the agreed initial campaign',
        'Verify responsive behavior, analytics events, and campaign handoff',
      ],
    },
    timeline: { retainer: 'Monthly, with onboarding in 1–2 weeks', project: 'Approximately 2–3 weeks after kickoff and asset approval' },
    communication: { retainer: 'Email or WhatsApp, plus a weekly strategy call', project: 'Email or WhatsApp for kickoff, reviews, and launch handoff' },
    featured: true,
  },
  {
    name: 'Scale',
    title: 'The Blockbuster',
    audience: 'Established businesses seeking coordinated omnichannel growth.',
    highlights: ['Omnichannel ad management', 'End-to-end creative direction', 'Unlimited short-form editing*', 'Dedicated Slack & priority support'],
    prices: { retainer: { usd: 3800, inr: 150000 }, project: { usd: 2900, inr: 110000 } },
    scope: {
      retainer: [
        'Direct creative production and coordinate approved brand campaigns',
        'Manage agreed omnichannel advertising campaigns and reporting',
        'Provide short-form editing within the agreed monthly workflow and capacity*',
        'Set up a dedicated Slack channel and priority support during agreed hours',
      ],
      project: [
        'Redesign the agreed digital brand touchpoints and visual system',
        'Plan and build a high-performance web application to the approved scope',
        'Create a coordinated video marketing suite from approved source material',
        'Complete responsive, browser, analytics, and delivery checks before handoff',
      ],
    },
    timeline: { retainer: 'Monthly, with onboarding and roadmap agreed at kickoff', project: 'Approximately 4–6 weeks; final schedule depends on the approved scope' },
    communication: { retainer: 'Dedicated Slack channel, priority support during agreed hours, and weekly strategy call', project: 'Email or WhatsApp, scheduled reviews, and documented handoff' },
  },
];

export default function PricingPackages() {
  const [billing, setBilling] = useState<BillingModel>('retainer');
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const openDetails = useCallback((tier: PricingTier) => {
    triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setSelectedTier(tier);
  }, []);

  const closeDetails = useCallback(() => {
    setSelectedTier(null);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  return (
    <div className="gutter mx-auto max-w-7xl">
      <header className="mb-8 text-center">
        <p className="mb-3 text-[10px] font-bold tracking-[0.35em] text-violet-300">[ EPISODE 05 ]</p>
        <h2 className="font-display text-4xl tracking-wider text-bone sm:text-6xl">CHOOSE YOUR GROWTH PLAN</h2>
        <p className="mx-auto mt-3 max-w-xl font-serif text-xl italic text-mist">
          Explore the scope and pricing for your next chapter.
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
              <p className="font-display text-2xl tracking-wide text-bone">PRICING &amp; SCOPE</p>
              <p className="mt-1 text-xs leading-5 text-smoke">Open plan details to explore the selected rate and full deliverables.</p>
            </div>

            <ul className="mb-7 flex-1 space-y-3">
              {tier.highlights.map((feature) => (
                <li key={feature} className="flex gap-2.5 text-sm leading-5 text-mist">
                  <Check size={16} className="mt-0.5 shrink-0 text-emerald-300" aria-hidden />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => openDetails(tier)}
              className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-xs font-bold uppercase tracking-[0.12em] transition ${
                tier.featured
                  ? 'bg-violet-300 text-ink hover:bg-violet-200'
                  : 'border border-white/15 text-bone hover:border-white/40 hover:bg-white/[0.05]'
              }`}
            >
              Start this plan &amp; view pricing <ArrowRight size={15} aria-hidden />
            </button>
          </motion.article>
        ))}
      </div>
      <p className="mt-6 text-center text-xs leading-5 text-smoke">
        Prices are listed in USD and INR. Advertising spend, taxes, and third-party fees are separate unless agreed in writing.
      </p>

      <AnimatePresence>
        {selectedTier && (
          <PlanDetailModal
            key={selectedTier.name}
            tier={selectedTier}
            billing={billing}
            onBillingChange={setBilling}
            onClose={closeDetails}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

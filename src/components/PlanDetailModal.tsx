import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, X } from 'lucide-react';
import { profile } from '../data/portfolio';

export type BillingModel = 'retainer' | 'project';

type PlanPrice = { usd: number; inr: number };

export type PricingTier = {
  name: string;
  title: string;
  audience: string;
  highlights: string[];
  prices: Record<BillingModel, PlanPrice>;
  scope: Record<BillingModel, string[]>;
  timeline: Record<BillingModel, string>;
  communication: Record<BillingModel, string>;
  featured?: boolean;
};

type PlanDetailModalProps = {
  tier: PricingTier;
  billing: BillingModel;
  onBillingChange: (billing: BillingModel) => void;
  onClose: () => void;
};

function contactHref(tier: PricingTier, billing: BillingModel) {
  const billingLabel = billing === 'retainer' ? 'monthly retainer' : 'one-time project';
  const subject = `Let's discuss ${tier.title} — ${billingLabel}`;
  const body = [
    'Hi Samkit,',
    '',
    `I'm interested in ${tier.title} (${billingLabel}).`,
    `Listed investment: $${tier.prices[billing].usd.toLocaleString('en-US')} / ₹${tier.prices[billing].inr.toLocaleString('en-IN')}.`,
    '',
    'Please share the next steps and confirm the scope for my project.',
  ].join('\n');

  return profile.email
    ? `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    : `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function PlanDetailModal({ tier, billing, onBillingChange, onClose }: PlanDetailModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const price = tier.prices[billing];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const dialog = closeRef.current?.closest('[role="dialog"]');
      const focusable = dialog?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.section
        role="dialog"
        aria-modal="true"
        aria-labelledby="plan-detail-title"
        aria-describedby="plan-detail-audience"
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-h-[min(90dvh,900px)] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0c0c11] shadow-[0_24px_100px_rgba(0,0,0,0.7)]"
      >
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_at_top,rgba(229,19,43,0.16),transparent_72%)]" />
        <div className="relative p-5 sm:p-8">
          <header className="flex items-start justify-between gap-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-crimson-2">{tier.name} plan · Plan details &amp; pricing</p>
              <h2 id="plan-detail-title" className="mt-2 font-display text-4xl tracking-wide text-bone sm:text-5xl">
                {tier.title}
              </h2>
              {tier.featured && (
                <span className="mt-3 inline-flex rounded-full bg-violet-300 px-3 py-1 text-[9px] font-extrabold tracking-[0.18em] text-ink">
                  MOST POPULAR
                </span>
              )}
              <p id="plan-detail-audience" className="mt-3 max-w-xl text-sm leading-6 text-mist">{tier.audience}</p>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close plan details"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-mist transition hover:border-white/30 hover:text-bone"
            >
              <X size={18} aria-hidden />
            </button>
          </header>

          <div className="mt-7 rounded-xl border border-amber-300/20 bg-gradient-to-br from-amber-300/[0.08] via-white/[0.025] to-transparent p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-amber-200">Your investment</p>
              <div role="group" aria-label="Choose pricing type" className="inline-flex rounded-full border border-white/10 bg-black/20 p-1">
                {([
                  ['retainer', 'Monthly retainer'],
                  ['project', 'One-time project'],
                ] as const).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={billing === value}
                    onClick={() => onBillingChange(value)}
                    className={`min-h-9 rounded-full px-3 text-[10px] font-semibold transition sm:px-4 ${
                      billing === value ? 'bg-bone text-ink' : 'text-mist hover:text-bone'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-4 font-display text-3xl leading-tight tracking-wide text-bone sm:text-4xl">
              ${price.usd.toLocaleString('en-US')}
              <span className="font-sans text-sm font-medium tracking-normal text-mist sm:text-base">
                {billing === 'retainer' ? ' / month' : ' one-time'}
              </span>
            </p>
            <p className="mt-1 text-sm text-mist">
              ₹{price.inr.toLocaleString('en-IN')} {billing === 'retainer' ? 'per month' : 'one-time'}
            </p>
            <p className="mt-4 border-t border-white/10 pt-3 text-xs leading-5 text-smoke">
              {billing === 'retainer'
                ? 'Billed monthly. Deliverables repeat each month as listed; media spend and third-party fees are separate.'
                : 'One-time project fee for the listed delivery scope. Work begins after written scope approval.'}
            </p>
          </div>

          <div className="mt-7 grid gap-6 sm:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.24em] text-bone">What&apos;s included</h3>
              <ul className="mt-4 space-y-3">
                {tier.scope[billing].map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-6 text-mist">
                    <Check size={16} className="mt-1 shrink-0 text-emerald-300" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="space-y-5 rounded-xl border border-white/10 bg-white/[0.025] p-4 sm:p-5">
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-bone">Estimated timeline</h3>
                <p className="mt-2 text-sm leading-6 text-mist">{tier.timeline[billing]}</p>
              </div>
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-bone">Communication</h3>
                <p className="mt-2 text-sm leading-6 text-mist">{tier.communication[billing]}</p>
              </div>
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-bone">Revisions</h3>
                <p className="mt-2 text-sm leading-6 text-mist">
                  Two consolidated revision rounds per deliverable are included. Additional requests or scope changes are estimated separately.
                </p>
              </div>
            </aside>
          </div>

          <p className="mt-6 text-[11px] leading-5 text-smoke">
            *Short-form editing volume is managed within an agreed monthly workflow and reasonable production capacity. Exact scope, schedule, taxes, advertising spend, and third-party fees are confirmed in writing before work begins.
          </p>

          <footer className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row">
            <a
              href={contactHref(tier, billing)}
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-crimson px-5 text-xs font-bold uppercase tracking-[0.1em] text-white shadow-[0_0_28px_rgba(229,19,43,0.2)] transition hover:bg-crimson-2"
            >
              Proceed with {tier.title} <ArrowUpRight size={15} aria-hidden />
            </a>
            <a
              href={contactHref(tier, billing)}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-5 text-xs font-semibold text-bone transition hover:border-white/35 hover:bg-white/[0.04]"
            >
              Ask a question <ArrowUpRight size={14} aria-hidden />
            </a>
          </footer>
        </div>
      </motion.section>
    </motion.div>
  );
}

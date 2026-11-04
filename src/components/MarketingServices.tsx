import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Clapperboard, Gauge, Search, Workflow, type LucideIcon } from 'lucide-react';

type Service = {
  title: string;
  description: string;
  deliverables: string[];
  icon: LucideIcon;
  accent: string;
};

export const marketingServices: Service[] = [
  {
    title: 'Performance Marketing & Paid Ads',
    description: 'Build measurable campaigns around the audience, offer, and outcomes that matter.',
    deliverables: ['Meta Ads and Google PPC', 'Campaign and audience setup', 'Retargeting funnel planning', 'ROAS optimization'],
    icon: Gauge,
    accent: 'text-emerald-300',
  },
  {
    title: 'Short-Form Content & Growth',
    description: 'Turn ideas into concise, platform-native creative designed to earn attention.',
    deliverables: ['Instagram Reels and YouTube Shorts', 'Hook and storyboard development', 'Video editing and pacing', 'Content calendar planning'],
    icon: Clapperboard,
    accent: 'text-violet-300',
  },
  {
    title: 'SEO & Organic Authority',
    description: 'Make useful content easier to discover and help audiences find their next step.',
    deliverables: ['Keyword research', 'On-page SEO recommendations', 'Search-led content planning', 'Organic performance reporting'],
    icon: Search,
    accent: 'text-amber-300',
  },
  {
    title: 'CRO & Conversion Funnels',
    description: 'Reduce friction between a first visit and a confident customer decision.',
    deliverables: ['Landing page planning', 'Conversion journey review', 'A/B test recommendations', 'Email nurture flow planning'],
    icon: Workflow,
    accent: 'text-rose-300',
  },
];

export default function MarketingServices() {
  return (
    <div className="gutter mx-auto max-w-7xl">
      <header className="mb-10 max-w-3xl sm:mb-14">
        <p className="mb-3 text-[10px] font-bold tracking-[0.35em] text-emerald-300">[ EPISODE 04 ]</p>
        <h2 className="font-display text-4xl leading-[0.95] tracking-wider text-bone sm:text-6xl">
          DIGITAL MARKETING &amp; GROWTH ENGINES
        </h2>
        <p className="mt-4 font-serif text-xl italic text-mist sm:text-2xl">
          Data-driven strategies meet cinematic creative production.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {marketingServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f14] p-5 transition-colors duration-300 hover:border-emerald-300/40 sm:p-6"
            >
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-400/[0.08] via-transparent to-violet-400/[0.06] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <span className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] ${service.accent}`}>
                  <Icon size={21} strokeWidth={1.7} aria-hidden />
                </span>
                <h3 className="min-h-[3.5rem] font-display text-2xl tracking-wide text-bone">{service.title}</h3>
                <p className="mt-2 min-h-[4.5rem] text-sm leading-6 text-mist">{service.description}</p>
                <ul className="mt-5 space-y-3 border-t border-white/10 pt-5">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs leading-5 text-mist">
                      <Check size={15} className={`mt-0.5 shrink-0 ${service.accent}`} aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-smoke transition-colors group-hover:text-bone">
                  Explore the service <ArrowUpRight size={13} aria-hidden />
                </span>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}

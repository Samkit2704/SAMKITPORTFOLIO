import { BadgeCheck, Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export type ClientReview = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  verified: boolean;
  platform?: 'LinkedIn' | 'Upwork' | 'Direct';
};

// Add only real, approved client feedback here; no sample endorsements are shown publicly.
export const clientReviews: ClientReview[] = [];

export default function ClientReviews() {
  return (
    <div className="gutter mx-auto max-w-7xl">
      <header className="mb-10 max-w-3xl sm:mb-14">
        <p className="mb-3 text-[10px] font-bold tracking-[0.35em] text-rose-300">[ REVIEWS ]</p>
        <h2 className="font-display text-4xl tracking-wider text-bone sm:text-6xl">WHAT CLIENTS SAY</h2>
        <p className="mt-4 font-serif text-xl italic text-mist">Good work speaks. Real people make it more meaningful.</p>
      </header>

      {clientReviews.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {clientReviews.map((review, index) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="rounded-2xl border border-white/10 bg-[#0f0f14] p-6"
            >
              <div className="flex gap-1 text-amber-300" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, star) => (
                  <Star key={star} size={14} fill={star < review.rating ? 'currentColor' : 'none'} aria-hidden />
                ))}
              </div>
              <Quote size={22} className="mt-5 text-violet-300" aria-hidden />
              <blockquote className="mt-3 text-sm leading-7 text-bone/90">{review.quote}</blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                {review.avatar ? (
                  <img src={review.avatar} alt="" className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                ) : (
                  <span aria-hidden className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-display text-lg text-bone">
                    {review.name.charAt(0)}
                  </span>
                )}
                <div className="min-w-0 flex-1">
                  <p className="flex items-center gap-1.5 text-sm font-semibold text-bone">
                    {review.name}
                    {review.verified && <BadgeCheck size={15} className="text-emerald-300" aria-label="Verified review" />}
                  </p>
                  <p className="truncate text-xs text-smoke">{review.role} · {review.company}</p>
                </div>
                {review.platform && <span className="text-[10px] text-smoke">{review.platform}</span>}
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="flex min-h-52 flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-10 text-center">
          <Quote size={25} className="text-rose-300/80" aria-hidden />
          <p className="mt-4 font-display text-2xl tracking-wide text-bone">THE NEXT STORY IS YOURS</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-mist">
            Client reviews will appear here as approved feedback becomes available.
          </p>
        </div>
      )}
    </div>
  );
}

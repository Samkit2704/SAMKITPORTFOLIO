import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { profile } from '../data/portfolio';
import { useReducedMotionPref } from '../hooks/useMedia';
import { playCinematicSting } from '../utils/netflixSound';

export default function NetflixIntro({ onDone }: { onDone: () => void }) {
  const reducedMotion = useReducedMotionPref();
  const [started, setStarted] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);

  const startExperience = async (withSound: boolean) => {
    if (started) return;
    if (withSound) {
      try {
        await playCinematicSting();
      } catch {
        setAudioError('Audio could not start. Check your browser sound settings.');
      }
    }
    setStarted(true);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[120] flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#07070a] px-5 text-center"
      role="dialog"
      aria-modal="true"
      aria-label="Samkit portfolio intro"
      initial={{ opacity: 0, scale: 1.02 }}
      animate={
        started
          ? { opacity: 0, scale: 1.15, filter: 'blur(18px)' }
          : { opacity: 1, scale: 1, filter: 'blur(0px)' }
      }
      transition={{ duration: reducedMotion ? 0.15 : 1.2, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (started) onDone();
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(60vw,520px)] w-[min(80vw,680px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-[130px]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(0,0,0,0.72)_100%)]" />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center">
        <motion.p
          className="text-[9px] font-bold uppercase tracking-[0.42em] text-crimson-2 sm:text-xs sm:tracking-[0.6em]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {profile.fullName.toUpperCase()} PRESENTS
        </motion.p>

        <motion.h1
          className="mt-7 bg-gradient-to-b from-white via-bone to-bone/65 bg-clip-text font-display leading-[0.82] tracking-[0.07em] text-transparent drop-shadow-[0_0_38px_rgba(229,19,43,0.35)]"
          style={{ fontSize: 'clamp(4.5rem, 17vw, 12rem)' }}
          initial={{ opacity: 0, scale: 0.9, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          THE SERIES
        </motion.h1>

        <motion.p
          className="mt-5 font-serif text-lg italic text-mist sm:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          An interactive portfolio experience
        </motion.p>

        <motion.div
          className="mt-11"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
        >
          <button
            type="button"
            onClick={() => void startExperience(true)}
            disabled={started}
            className="intro-pulse group relative inline-flex min-h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-bone px-8 py-4 text-xs font-extrabold tracking-[0.18em] text-ink transition hover:bg-white disabled:cursor-wait sm:px-10 sm:text-sm"
          >
            <Play size={16} fill="currentColor" aria-hidden />
            START EXPERIENCE
          </button>

          <p className="mt-4 text-[10px] font-medium tracking-[0.16em] text-mist/80">Sound on recommended</p>
          <AnimatePresence>
            {audioError && (
              <motion.p
                role="status"
                className="mt-3 text-xs text-amber-200"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {audioError}
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => void startExperience(false)}
            disabled={started}
            className="mt-7 rounded px-3 py-2 text-[10px] font-semibold tracking-[0.18em] text-smoke transition hover:text-bone focus-visible:text-bone"
          >
            SKIP SOUND
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

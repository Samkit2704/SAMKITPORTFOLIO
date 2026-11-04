let audioContext: AudioContext | null = null;

/**
 * Synthesize an original two-hit cinematic bass sting with Web Audio.
 * The notes intentionally create a new cue rather than copying a branded sound logo.
 */
export async function playCinematicSting(): Promise<void> {
  if (typeof window === 'undefined' || typeof window.AudioContext === 'undefined') {
    throw new Error('Web Audio is not available in this browser.');
  }

  audioContext ??= new window.AudioContext();
  const context = audioContext;

  if (context.state === 'suspended') {
    let timeoutId = 0;
    try {
      await Promise.race([
        context.resume(),
        new Promise<never>((_, reject) => {
          timeoutId = window.setTimeout(() => reject(new Error('Audio startup timed out.')), 1500);
        }),
      ]);
    } finally {
      window.clearTimeout(timeoutId);
    }
  }
  if (context.state !== 'running') throw new Error('The browser did not allow audio playback.');

  const now = context.currentTime;
  const addVoice = ({
    type,
    start,
    from,
    to,
    duration,
    peak,
  }: {
    type: OscillatorType;
    start: number;
    from: number;
    to: number;
    duration: number;
    peak: number;
  }) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(from, start);
    oscillator.frequency.exponentialRampToValueAtTime(to, start + duration);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(peak, start + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.02);
  };

  addVoice({ type: 'sine', start: now, from: 95, to: 35, duration: 0.15, peak: 0.42 });
  addVoice({ type: 'triangle', start: now + 0.23, from: 80, to: 28, duration: 2, peak: 0.68 });
  addVoice({ type: 'triangle', start: now + 0.23, from: 150, to: 52, duration: 1.15, peak: 0.12 });
}

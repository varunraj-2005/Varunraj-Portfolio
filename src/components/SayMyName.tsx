import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SayMyNameProps {
  onComplete: () => void;
}

const WORDS = ['SAY', 'MY', 'NAME'];

// Each word appears after a large staggered delay (ms from component mount)
const REVEAL_TIMES = [800, 2400, 4000];

// After the last word is fully visible, hold briefly then exit
const EXIT_DELAY = 1600;

export const SayMyName: React.FC<SayMyNameProps> = ({ onComplete }) => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    REVEAL_TIMES.forEach((delay, i) => {
      timers.push(
        setTimeout(() => setVisibleCount(i + 1), delay)
      );
    });

    // After last word appears + hold time → start exit
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, REVEAL_TIMES[REVEAL_TIMES.length - 1] + EXIT_DELAY);

    timers.push(exitTimer);

    // After exit animation completes (~900ms) → call onComplete
    const doneTimer = setTimeout(() => {
      onComplete();
    }, REVEAL_TIMES[REVEAL_TIMES.length - 1] + EXIT_DELAY + 900);

    timers.push(doneTimer);

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[#080907] select-none overflow-hidden"
    >
      {/* Subtle radial glow behind text */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,185,76,0.05)_0%,transparent_65%)] pointer-events-none" />

      {/* Word stack — centered, large, vertically spaced */}
      <div className="flex flex-col items-center gap-2 sm:gap-4">
        {WORDS.map((word, i) => (
          <AnimatePresence key={word}>
            {visibleCount > i && (
              <motion.span
                initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-bebas text-[clamp(4rem,18vw,12rem)] leading-none tracking-widest text-[#E8E5D8] uppercase"
                style={{
                  textShadow:
                    '0 0 60px rgba(214,185,76,0.18), 0 0 120px rgba(214,185,76,0.08)',
                }}
              >
                {word}
              </motion.span>
            )}
          </AnimatePresence>
        ))}
      </div>
    </motion.div>
  );
};

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, FlaskConical } from 'lucide-react';

interface ExperimentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  code: string;       // e.g. "EXPERIMENT 01"
  accentColor: string; // hex
  children: React.ReactNode;
}

export const ExperimentModal: React.FC<ExperimentModalProps> = ({
  isOpen,
  onClose,
  title,
  code,
  accentColor,
  children,
}) => {
  // Lock body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop ──────────────────────────────────────────────── */}
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-[#080907]/90 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* ── Panel ─────────────────────────────────────────────────── */}
          <motion.div
            key="modal-panel"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className="fixed inset-0 z-[101] flex flex-col overflow-hidden pointer-events-none"
            style={{ padding: '1.5rem' }}
          >
            <div
              className="relative w-full max-w-6xl mx-auto flex flex-col bg-[#080907] border-2 pointer-events-auto overflow-hidden"
              style={{
                borderColor: `${accentColor}60`,
                boxShadow: `0 0 60px ${accentColor}22`,
                maxHeight: 'calc(100vh - 3rem)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Corner marks */}
              <div className="absolute top-1 left-1 w-3 h-3 border-t border-l pointer-events-none" style={{ borderColor: accentColor }} />
              <div className="absolute top-1 right-1 w-3 h-3 border-t border-r pointer-events-none" style={{ borderColor: accentColor }} />
              <div className="absolute bottom-1 left-1 w-3 h-3 border-b border-l pointer-events-none" style={{ borderColor: accentColor }} />
              <div className="absolute bottom-1 right-1 w-3 h-3 border-b border-r pointer-events-none" style={{ borderColor: accentColor }} />

              {/* ── Modal header bar ──────────────────────────────────── */}
              <div
                className="flex items-center justify-between px-5 py-3 border-b border-white/10 shrink-0"
                style={{ background: '#11120F' }}
              >
                <div className="flex items-center gap-3">
                  <FlaskConical className="w-4 h-4 shrink-0" style={{ color: accentColor }} />
                  <div className="flex items-center gap-2 font-mono-tech text-xs">
                    <span className="font-bold uppercase tracking-widest" style={{ color: accentColor }}>
                      {code}
                    </span>
                    <span className="text-white/20">|</span>
                    <span className="text-[#E8E5D8] font-semibold uppercase tracking-wider truncate max-w-[60vw]">
                      {title}
                    </span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  aria-label="Close experiment"
                  className="flex items-center gap-1.5 font-mono-tech text-[10px] text-[#85857B] hover:text-[#E8E5D8] border border-white/10 hover:border-white/30 px-3 py-1.5 transition-colors shrink-0"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>CLOSE</span>
                </button>
              </div>

              {/* ── Scrollable content ───────────────────────────────── */}
              <div className="overflow-y-auto flex-1 p-4 sm:p-6">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

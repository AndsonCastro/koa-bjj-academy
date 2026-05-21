import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 4000);
    const hideTooltip = setTimeout(() => setShowTooltip(false), 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltip);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-end gap-3"
        >
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="relative bg-white text-[#0a0a0a] text-sm font-semibold px-4 py-2.5 rounded-xl shadow-2xl max-w-[200px] text-right"
              >
                Quer uma aula gratuita? Fala com a gente! 🥋
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-white" />
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute -top-2 -right-2 p-0.5 bg-gray-200 rounded-full"
                >
                  <X className="w-3 h-3 text-gray-600" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.a
            href="https://wa.me/13056140983"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-2xl shadow-[#25D366]/30"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-7 h-7 text-white fill-white" />
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#d4af37] rounded-full border-2 border-[#0a0a0a]" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

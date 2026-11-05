import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setShowBackToTop(latest > 500);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Hairline Gold Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8C6D4F] via-[#D4AF37] to-[#F7E7C4] origin-left z-[9990] shadow-[0_0_10px_rgba(212,175,55,0.7)] pointer-events-none"
      />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-[9900] w-10 h-10 rounded-sm border border-[#8C6D4F]/50 bg-[#120F0C]/90 hover:border-[#D4AF37] hover:bg-[#1A1510] text-[#EAD8C7] hover:text-[#FFF5EB] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.8)] group cursor-pointer"
        >
          {/* Subtle Top Gold Edge */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent pointer-events-none" />
          <span className="text-sm font-mono transform transition-transform duration-300 group-hover:-translate-y-0.5">
            ↑
          </span>
        </motion.button>
      )}
    </>
  );
};

export default ScrollProgressBar;

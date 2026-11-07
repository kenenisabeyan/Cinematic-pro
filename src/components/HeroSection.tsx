import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import watermarkImg from '../assets/watermark.png';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'TESTIMONIALS', href: '#testimonials' },
];

export const HeroSection: React.FC = () => {
  const [, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black flex flex-col justify-between">
      {/* ================= 1. FIXED VIDEO LAYER ================= */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black flex items-center justify-end">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover md:h-screen md:w-auto md:max-w-none md:object-contain origin-right scale-95 md:scale-[0.98] lg:scale-100 opacity-60 md:opacity-100"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Seamless Soft Left Edge Blend */}
        <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-black via-black/85 to-transparent pointer-events-none" />

        {/* ================= 3. ANIMATED WATERMARK EMBLEM ================= */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-10 lg:right-12 pointer-events-none flex items-center justify-center z-10 opacity-35 sm:opacity-70 lg:opacity-100">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-24 h-24 sm:w-36 sm:h-36 bg-black/85 rounded-full blur-xl" />

            <motion.div
              animate={{
                y: [-3, 3, -3],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative flex items-center justify-center"
            >
              <img
                src={watermarkImg}
                alt="Insignia"
                className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.25)]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= 4. CONTENT LAYER ================= */}
      <div className="relative z-10 flex flex-col justify-between flex-1 w-full px-4 sm:px-10 lg:px-16 pt-4 sm:pt-6 pb-6 sm:pb-8 pointer-events-none">
        
        {/* Navigation Bar */}
        <header className="relative flex items-center justify-between w-full pointer-events-auto">
          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-xs sm:text-sm font-semibold tracking-[0.3em] sm:tracking-[0.35em] uppercase text-[#EAD8C7] hover:opacity-75 transition-opacity"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            KENENISA .
          </a>

          {/* Navigation Links (Desktop) */}
          <nav
            className="hidden md:flex items-center space-x-6 lg:space-x-10 text-[10.5px] lg:text-[11px] tracking-[0.24em] lg:tracking-[0.28em] font-light uppercase text-[#C4B5A5] absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group py-1 transition-colors duration-300 hover:text-[#FFF5EB]"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37]/50 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-3 ml-auto md:ml-0">
            <a
              href="#contact"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group flex items-center space-x-1.5 sm:space-x-2 text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.24em] font-light uppercase py-1.5 px-3 sm:py-2 sm:px-4 border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] transition-all duration-300 backdrop-blur-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>LET&apos;S TALK</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
                ↗
              </span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 sm:w-9 sm:h-9 border border-[#8C6D4F]/40 bg-[#120F0C]/80 text-[#EAD8C7] p-1.5 space-y-1 focus:outline-none transition-colors hover:border-[#D4AF37]"
              aria-label="Toggle navigation"
            >
              <span className={`block w-4 h-[1.5px] bg-[#D4AF37] transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block w-3 h-[1.5px] bg-[#D4AF37] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-4 h-[1.5px] bg-[#D4AF37] transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>

          {/* Full-Screen Mobile Drawer */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="md:hidden fixed inset-x-0 top-[56px] sm:top-[68px] bottom-0 bg-black/98 backdrop-blur-3xl z-50 flex flex-col items-center justify-center space-y-5 px-6 border-t border-[#8C6D4F]/30 overflow-y-auto"
            >
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-base sm:text-lg tracking-[0.25em] font-light uppercase text-[#EAD8C7] hover:text-[#D4AF37] transition-colors py-1.5"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.name}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 text-xs tracking-[0.25em] font-medium uppercase py-2.5 px-7 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                LET&apos;S TALK ↗
              </a>
            </motion.div>
          )}
        </header>

        {/* Main Hero Row */}
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full pt-4 pb-2 my-auto">
          
          {/* LEFT: Balanced Headline & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[37rem] xl:max-w-[40rem] pointer-events-auto z-20"
          >
            {/* Massive Condensed Headline with Fluid Typography */}
            <motion.div variants={fadeUpVariants} className="relative mb-3 select-none">
              <h1
                className="text-[3.1rem] xs:text-[3.6rem] sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[7.8rem] tracking-tight uppercase leading-[0.85] sm:leading-[0.83]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {/* Line 1: ENGINEERING */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                  ENGINEERING
                </span>

                {/* Line 2: SCALABLE */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                  SCALABLE
                </span>

                {/* Line 3: PRODUCTS */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#DFBE8A] via-[#9B7640] to-[#342410] drop-shadow-[0_10px_30px_rgba(155,118,64,0.4)]">
                  PRODUCTS
                </span>
              </h1>
            </motion.div>

            {/* Subtitle Technologies - Fluid & Wrapping */}
            <motion.div variants={fadeUpVariants} className="mb-3.5 sm:mb-4">
              <p
                className="text-[9.5px] xs:text-[10.5px] sm:text-[11px] md:text-xs font-normal tracking-[0.18em] xs:tracking-[0.22em] sm:tracking-[0.28em] uppercase text-[#C4B29E] leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                FULL-STACK SOFTWARE ENGINEER <span className="text-[#8C6D4F] mx-1">•</span> SYSTEM ARCHITECT <span className="text-[#8C6D4F] mx-1">•</span> EDOT FOUNDER
              </p>
            </motion.div>

            {/* 3-Line Description */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[13.5px] font-light text-[#A8988B] leading-[1.7] sm:leading-[1.8] tracking-wide max-w-lg mb-5 sm:mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                Architecting scalable, production-grade web platforms with performance, reliability, and user experience at the core.
              </p>
            </motion.div>

            {/* CTA Buttons - Responsive Stack on Mobile */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-6 w-full sm:w-auto"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {/* Explore My Work CTA */}
              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center justify-center space-x-2.5 sm:space-x-3 px-5 sm:px-7 py-3 sm:py-3.5 border border-[#8C6D4F] bg-[#120F0C]/80 hover:border-[#D4AF37] text-[#EAD8C7] hover:text-[#FFF5EB] text-[10.5px] sm:text-[11px] font-medium tracking-[0.2em] sm:tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.18)]"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8D7C5]/40 to-transparent pointer-events-none" />
                <span>EXPLORE MY WORK</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
                  ↗
                </span>
              </motion.a>

              {/* Download Resume Button */}
              <motion.a
                href="https://kenenisa-one.vercel.app/Kenenisa_Beyan_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center justify-center space-x-2 px-5 sm:px-7 py-3 sm:py-3.5 border border-[#8C6D4F]/40 hover:border-[#8C6D4F] text-[#BFA895] hover:text-[#EAD8C7] text-[10.5px] sm:text-[11px] font-medium tracking-[0.2em] sm:tracking-[0.24em] uppercase transition-all duration-300"
              >
                <span>DOWNLOAD RESUME</span>
                <span className="transform transition-transform duration-300 group-hover:translate-y-0.5 text-xs">
                  ↓
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Floating Quote & Signature Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-start pointer-events-auto pr-24 xl:pr-36 mr-4 z-20 select-none"
          >
            {/* 1. Quote Mark */}
            <span className="text-xl text-[#C99E5D] leading-none font-serif mb-2">
              “
            </span>

            {/* 2. Compact Two-Line Statement */}
            <div 
              className="text-[9.5px] font-medium tracking-[0.24em] uppercase text-[#E0D3C5] space-y-1 mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>CODE IS MY CRAFT.</p>
              <p>IMPACT IS MY GOAL.</p>
            </div>

            {/* 3. Gold Accent Line */}
            <div className="w-28 h-[1px] bg-gradient-to-r from-[#D4AF37] via-[#E8D7C5]/70 to-transparent shadow-[0_0_8px_rgba(212,175,55,0.4)] mb-2" />

            {/* 4. Fine Monoline Calligraphy Signature */}
            <div 
              className="text-[2.2rem] text-[#D8AB64] font-normal leading-none -ml-0.5"
              style={{ 
                fontFamily: "'Herr Von Muellerhoff', 'Allura', cursive",
                letterSpacing: '0.04em',
              }}
            >
              Kenenisa
            </div>
          </motion.div>
        </div>

        {/* Bottom Spacer */}
        <div className="h-2" />
      </div>
    </section>
  );
};

export default HeroSection;
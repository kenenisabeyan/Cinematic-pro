import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface Testimonial {
  name: string;
  handle: string;
  quote: string;
  initial: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Ermias Alemayehu',
    handle: '@ermiasalemayehu',
    quote: "I can't say enough good things about Kenenisa. He was able to take our complex project requirements and turn them into a seamless, functional solution.",
    initial: 'E',
  },
  {
    name: 'Firomsa Guteta',
    handle: '@firomsaguteta',
    quote: 'Working with Kenenisa was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail is remarkable.',
    initial: 'F',
  },
  {
    name: 'Yohannes Mandafro',
    handle: '@yohannesmandafro',
    quote: 'Collaborating with Kenenisa was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were outstanding.',
    initial: 'Y',
  },
  {
    name: 'Yohannes Belete',
    handle: '@yohannesbelete',
    quote: "Kenenisa was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that's both modern and easy to navigate.",
    initial: 'Y',
  },
  {
    name: 'Medhin Banti',
    handle: '@medhinbanti',
    quote: "Kenenisa's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our operations have improved tremendously.",
    initial: 'M',
  },
  {
    name: 'Kidus Tilahun',
    handle: '@kidustilahun',
    quote: 'Kenenisa was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations.',
    initial: 'K',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="relative w-screen bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-8 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/3 right-1/4 w-[34rem] h-[34rem] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[28rem] h-[28rem] bg-[#8C6D4F]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            05 / TESTIMONIALS
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              CLIENT ENDORSEMENTS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              PROVEN IMPACT.
            </span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="relative p-8 rounded-sm border border-[#8C6D4F]/35 bg-[#100D0B]/85 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/80 hover:shadow-[0_16px_45px_rgba(212,175,55,0.14)] group flex flex-col justify-between"
            >
              {/* Top Subtle Border Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner Minimal Pins */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-300" />

              <div>
                {/* Quotation Mark */}
                <div className="text-3xl text-[#D4AF37] font-serif leading-none mb-4 select-none">
                  “
                </div>

                {/* Quote Text */}
                <p
                  className="text-xs sm:text-[13px] font-light text-[#C4B5A5] leading-relaxed mb-6 group-hover:text-[#F7E7C4] transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {t.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-3 pt-4 border-t border-[#8C6D4F]/20">
                <div className="w-8 h-8 rounded-full border border-[#D4AF37]/60 bg-[#16120E] flex items-center justify-center text-[11px] font-mono font-medium text-[#F7E7C4] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_10px_rgba(212,175,55,0.3)] transition-all">
                  {t.initial}
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-xs font-medium text-white tracking-wide group-hover:text-[#F7E7C4] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {t.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#8C6D4F]">
                    {t.handle}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialsSection;


"use client";

import { motion } from "framer-motion";


export const ThankYou = () => {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-r from-[#e3c78b] via-[#f8ebd0] to-[#e3c78b] shadow-[inset_0_0_50px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4 relative z-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative bg-[#fcf9f2] border border-[#cfaa68] shadow-2xl px-8 py-16 md:px-24 md:py-20 w-full max-w-4xl text-center rounded-sm"
        >
          {/* Inner Border for elegance */}
          <div className="absolute inset-2 md:inset-4 border border-[#cfaa68]/40 pointer-events-none rounded-sm" />
          
          <h2 className="font-script text-6xl md:text-8xl text-[#92753a] mb-6 drop-shadow-sm">
            Thank You
          </h2>
          <p className="font-serif text-xl md:text-3xl text-[#92753a] max-w-xl mx-auto leading-relaxed">
            We look forward to celebrating this special day with you.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

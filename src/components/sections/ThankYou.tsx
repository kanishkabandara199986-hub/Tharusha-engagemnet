"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";

export const ThankYou = () => {
  return (
    <Container className="bg-transparent text-center py-32 md:py-48 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="font-script text-6xl md:text-8xl text-gold mb-8">
          Thank You
        </h2>
        <p className="font-serif text-xl md:text-3xl text-text max-w-2xl mx-auto leading-relaxed">
          We look forward to celebrating this special day with you.
        </p>
      </motion.div>
    </Container>
  );
};

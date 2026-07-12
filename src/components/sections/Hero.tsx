"use client";

import { motion } from "framer-motion";
import { engagementData } from "@/data/engagement";
import { Container } from "../ui/Container";

export const Hero = () => {
  return (
    <Container className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-transparent">
      {/* Decorative corners */}
      <div className="absolute top-12 left-12 w-24 h-24 border-t border-l border-gold/20" />
      <div className="absolute top-12 right-12 w-24 h-24 border-t border-r border-gold/20" />
      <div className="absolute bottom-12 left-12 w-24 h-24 border-b border-l border-gold/20" />
      <div className="absolute bottom-12 right-12 w-24 h-24 border-b border-r border-gold/20" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center z-10"
      >
        <p className="font-sans text-gold tracking-[0.3em] uppercase text-sm mb-6">
          {engagementData.event.title}
        </p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-text mb-8">
          {engagementData.couple.bride}
          <br />
          <span className="text-3xl md:text-5xl italic font-light my-4 inline-block text-gold">
            &
          </span>
          <br />
          {engagementData.couple.groom}
        </h1>

        <div className="flex flex-col items-center justify-center mt-12 space-y-4">
          <p className="font-serif text-2xl md:text-3xl tracking-widest">
            {engagementData.event.date}
          </p>
          <div className="w-px h-8 bg-gold/50 my-4" />
          <p className="font-serif text-xl md:text-2xl text-text-light">
            {engagementData.event.time}
          </p>
          <p className="font-sans text-sm uppercase tracking-[0.2em] text-text-light mt-6">
            {engagementData.event.venue}
          </p>
        </div>
      </motion.div>
    </Container>
  );
};

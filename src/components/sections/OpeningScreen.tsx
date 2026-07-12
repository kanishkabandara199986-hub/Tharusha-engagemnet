"use client";

import { motion, AnimatePresence } from "framer-motion";
import { engagementData } from "@/data/engagement";
import { Button } from "../ui/Button";

interface OpeningScreenProps {
  onOpen: () => void;
  isOpen: boolean;
}

export const OpeningScreen = ({ onOpen, isOpen }: OpeningScreenProps) => {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-transparent text-text overflow-y-auto overflow-x-hidden"
        >
          {/* Subtle background decoration */}
          <div className="fixed inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-light/20 via-background to-background pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="min-h-[100dvh] flex flex-col items-center justify-center text-center z-10 px-6 py-16 relative"
          >
            <p className="text-sm md:text-base text-text-light uppercase tracking-[0.2em] mb-4">
              Together with our families
            </p>
            <p className="text-sm md:text-base text-text-light uppercase tracking-[0.1em] mb-12">
              We invite you to celebrate our Engagement
            </p>

            <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-gold mb-4 leading-tight">
              {engagementData.couple.bride}
            </h1>
            <span className="font-serif text-3xl md:text-4xl text-text-light italic">
              &
            </span>
            <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-gold mt-4 mb-16 leading-tight">
              {engagementData.couple.groom}
            </h1>

            <div className="w-px h-16 bg-gold/50 mx-auto mb-12" />

            <p className="font-serif text-2xl md:text-3xl text-text tracking-widest mb-16">
              30 July 2026
            </p>

            <Button onClick={onOpen} className="px-12 py-4 text-sm tracking-widest uppercase">
              Open Invitation
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

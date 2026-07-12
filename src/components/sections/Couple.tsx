"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { engagementData } from "@/data/engagement";

export const Couple = () => {
  return (
    <Container id="couple" className="bg-transparent">
      <SectionTitle title="The Couple" subtitle="Meet" />

      <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24 mt-16">
        {/* Bride */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl mb-8 relative bg-transparent flex items-center justify-center">
            <Image 
              src="/bride.jpg" 
              alt={engagementData.couple.bride}
              fill
              sizes="(max-width: 768px) 256px, 320px"
              loading="lazy"
              className="object-cover"
            />
          </div>
          <h3 className="font-serif text-3xl mb-2">{engagementData.couple.bride}</h3>
          <p className="text-text-light text-sm uppercase tracking-widest">The Bride-to-be</p>
        </motion.div>

        {/* Separator */}
        <div className="hidden md:block w-px h-32 bg-gold/50" />
        <div className="md:hidden w-32 h-px bg-gold/50" />

        {/* Groom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl mb-8 relative bg-transparent flex items-center justify-center">
            <Image 
              src="/groom.jpg" 
              alt={engagementData.couple.groom}
              fill
              sizes="(max-width: 768px) 256px, 320px"
              loading="lazy"
              className="object-cover"
            />
          </div>
          <h3 className="font-serif text-3xl mb-2">{engagementData.couple.groom}</h3>
          <p className="text-text-light text-sm uppercase tracking-widest">The Groom-to-be</p>
        </motion.div>
      </div>
    </Container>
  );
};

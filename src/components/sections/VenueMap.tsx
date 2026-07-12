"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { engagementData } from "@/data/engagement";
import { Button } from "../ui/Button";

export const VenueMap = () => {
  return (
    <Container id="venue" className="bg-soft-cream/60 backdrop-blur-sm !py-0 !px-0 max-w-none relative h-[600px] md:h-[800px]">
      <iframe
        src="https://maps.google.com/maps?q=Hotel%20Senuri%20Grand%20Castello,%20Diulapitiya,%20Sri%20Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 grayscale contrast-125 opacity-80"
      />
      
      <div className="absolute inset-0 bg-gold/5 pointer-events-none" />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-md/90 backdrop-blur-md p-8 text-center shadow-2xl rounded-2xl border border-white"
        >
          <h3 className="font-serif text-2xl mb-2">{engagementData.event.venue}</h3>
          <p className="text-text-light mb-6">{engagementData.event.location}</p>
          <div className="flex flex-col gap-3">
            <Button onClick={() => window.open(engagementData.event.googleMapsUrl, "_blank")}>
              Navigate
            </Button>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { LuxuryCard } from "../ui/LuxuryCard";
import { Button } from "../ui/Button";
import { engagementData } from "@/data/engagement";

export const EngagementDetails = () => {
  return (
    <Container id="details" className="bg-transparent relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <LuxuryCard className="text-center p-10 md:p-16">
          <p className="font-sans text-gold tracking-[0.3em] uppercase text-sm mb-6">
            Join Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-text mb-12">
            Engagement Ceremony
          </h2>

          <div className="space-y-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-text-light mb-1">When</p>
              <p className="font-serif text-2xl">{engagementData.event.date}</p>
              <p className="font-serif text-xl text-text-light">{engagementData.event.time}</p>
            </div>
            
            <div className="w-12 h-px bg-divider mx-auto" />

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-text-light mb-1">Where</p>
              <p className="font-serif text-2xl">{engagementData.event.venue}</p>
              <p className="text-text-light">{engagementData.event.location}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => window.open(engagementData.event.googleMapsUrl, "_blank")}
            >
              View Map
            </Button>
            <Button variant="outline">
              Add to Calendar
            </Button>
          </div>
        </LuxuryCard>
      </motion.div>
    </Container>
  );
};

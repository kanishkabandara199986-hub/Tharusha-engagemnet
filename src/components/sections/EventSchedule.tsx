"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { engagementData } from "@/data/engagement";
import { cn } from "@/lib/utils";

export const EventSchedule = () => {
  return (
    <Container id="schedule" className="bg-secondary/60 backdrop-blur-sm">
      <SectionTitle title="Event Schedule" subtitle="Timeline" />

      <div className="max-w-xl mx-auto relative mt-16">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 -translate-x-1/2" />

        <div className="space-y-16">
          {engagementData.schedule.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={cn(
                  "relative flex items-center w-full",
                  isEven ? "justify-start" : "justify-end"
                )}
              >
                {/* Center Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-transparent border-2 border-gold rounded-full z-10 shadow-sm" />

                <div
                  className={cn(
                    "w-[45%] flex flex-col",
                    isEven ? "items-end text-right" : "items-start text-left"
                  )}
                >
                  <p className="font-serif text-2xl text-gold mb-1">{item.time}</p>
                  <p className="text-text font-medium">{item.event}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

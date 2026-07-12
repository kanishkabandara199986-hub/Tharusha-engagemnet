"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const generatePetal = (id: number) => {
  const startX = Math.random() * 100; // Start horizontally random (vw)
  const duration = 15 + Math.random() * 20; // Random fall duration (slow & elegant)
  const delay = Math.random() * 15;
  const rotation = Math.random() * 360;
  const scale = 0.4 + Math.random() * 0.4;

  return { id, startX, duration, delay, rotation, scale };
};

export const PetalParticles = () => {
  const [petals, setPetals] = useState<any[]>([]);

  useEffect(() => {
    // Generate 25 petals for an elegant, non-intrusive look
    const newPetals = Array.from({ length: 25 }).map((_, i) => generatePetal(i));
    setPetals(newPetals);
  }, []);

  if (petals.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{
            x: `${petal.startX}vw`,
            y: "-10vh",
            rotate: petal.rotation,
            scale: petal.scale,
            opacity: 0,
          }}
          animate={{
            y: "110vh",
            rotate: petal.rotation + 360,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute"
        >
          {/* Elegant petal SVG shape */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gold/40 drop-shadow-sm"
          >
            <path
              d="M12 22C12 22 4 16 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 16 12 22 12 22Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

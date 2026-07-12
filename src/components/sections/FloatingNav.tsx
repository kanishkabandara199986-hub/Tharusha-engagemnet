"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Calendar, Clock, MapPin, Mail, Music, Music4 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingNavProps {
  isPlaying?: boolean;
  onToggleMusic?: () => void;
}

export const FloatingNav = ({ isPlaying, onToggleMusic }: FloatingNavProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling down a bit
      setIsVisible(window.scrollY > window.innerHeight * 0.5);

      // Determine active section based on scroll position
      const sections = ["couple", "details", "schedule", "venue", "rsvp"];
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "couple", icon: Heart },
    { id: "details", icon: Calendar },
    { id: "schedule", icon: Clock },
    { id: "venue", icon: MapPin },
    { id: "rsvp", icon: Mail },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 50, x: "-50%" }}
          className="fixed bottom-8 left-1/2 z-40 bg-white/80 backdrop-blur-md/80 backdrop-blur-md rounded-full shadow-lg border border-divider px-6 py-3 flex items-center gap-6"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "transition-all duration-300 hover:text-gold hover:scale-110",
                  isActive ? "text-gold scale-110" : "text-text-light"
                )}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              </button>
            );
          })}
          
          {onToggleMusic && (
            <>
              <div className="w-px h-6 bg-divider mx-2" />
              <button
                onClick={onToggleMusic}
                className={cn(
                  "transition-all duration-300 hover:scale-110",
                  isPlaying ? "text-gold" : "text-text-light opacity-50"
                )}
              >
                {isPlaying ? <Music size={20} strokeWidth={2.5} /> : <Music4 size={20} strokeWidth={2} />}
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

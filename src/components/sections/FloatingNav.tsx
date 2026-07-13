"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Calendar, Clock, MapPin, Music, Music4 } from "lucide-react";
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
      const sections = ["couple", "details", "schedule", "venue"];
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
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-0 left-0 w-full z-40 bg-gradient-to-r from-[#e3c78b] via-[#f8ebd0] to-[#e3c78b] shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-[#cfaa68]/40 px-6 py-4 flex items-center justify-center gap-8 md:gap-12"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "transition-all duration-300 hover:scale-110",
                  isActive ? "text-[#92753a] scale-110" : "text-[#b59556]"
                )}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </button>
            );
          })}
          
          {onToggleMusic && (
            <>
              <div className="w-px h-8 bg-[#cfaa68]/50 mx-2" />
              <button
                onClick={onToggleMusic}
                className={cn(
                  "transition-all duration-300 hover:scale-110",
                  isPlaying ? "text-[#92753a]" : "text-[#b59556]"
                )}
              >
                {isPlaying ? <Music size={24} strokeWidth={2.5} /> : <Music4 size={24} strokeWidth={2} />}
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

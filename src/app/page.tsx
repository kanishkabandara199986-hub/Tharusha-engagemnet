"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { OpeningScreen } from "@/components/sections/OpeningScreen";
import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";

// Dynamically import below-the-fold components to defer JS loading and reduce initial bundle size
const Countdown = dynamic(() => import("@/components/sections/Countdown").then((mod) => mod.Countdown), { ssr: false });
const Couple = dynamic(() => import("@/components/sections/Couple").then((mod) => mod.Couple));
const EngagementDetails = dynamic(() => import("@/components/sections/EngagementDetails").then((mod) => mod.EngagementDetails));
const EventSchedule = dynamic(() => import("@/components/sections/EventSchedule").then((mod) => mod.EventSchedule));
const RSVP = dynamic(() => import("@/components/sections/RSVP").then((mod) => mod.RSVP));
const VenueMap = dynamic(() => import("@/components/sections/VenueMap").then((mod) => mod.VenueMap), { ssr: false });
const ThankYou = dynamic(() => import("@/components/sections/ThankYou").then((mod) => mod.ThankYou));
import { FloatingNav } from "@/components/sections/FloatingNav";
import { PetalParticles } from "@/components/ui/PetalParticles";

export default function Home() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Parallax background logic
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 4000], ["0%", "20%"]);

  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Soft volume
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      setIsPlaying(true);
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Lock body scroll when opening screen is visible
    if (!isInvitationOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      // Ensure we are at the top when opening
      window.scrollTo(0, 0);
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isInvitationOpen]);

  return (
    <main className="relative bg-transparent">
      {/* Background Music - Update the src to your actual audio file path */}
      <audio ref={audioRef} src="/audio/background-music.mp3" loop />

      {/* Botanical Parallax Background */}
      <motion.div 
        className="fixed -left-[10vw] -right-[10vw] -top-[15vh] h-[130vh] -z-10 pointer-events-none opacity-80"
        style={{ 
          backgroundImage: "url('/botanical-bg.png')", 
          backgroundSize: "cover", 
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          mixBlendMode: "multiply",
          y: backgroundY
        }} 
      />

      {/* Animated Petals globally across the site */}
      <PetalParticles />

      <OpeningScreen 
        isOpen={isInvitationOpen} 
        onOpen={handleOpenInvitation} 
      />

      {/* Main Content */}
      <div className={`transition-opacity duration-1000 ${isInvitationOpen ? "opacity-100" : "opacity-0 h-screen overflow-hidden"}`}>
        <Hero />
        <Countdown />
        <Couple />
        <EngagementDetails />
        <EventSchedule />
        <RSVP />
        <VenueMap />
        <ThankYou />
        <FloatingNav isPlaying={isPlaying} onToggleMusic={toggleMusic} />
      </div>
    </main>
  );
}

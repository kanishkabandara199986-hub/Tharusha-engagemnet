"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { LuxuryCard } from "../ui/LuxuryCard";
import { Button } from "../ui/Button";

type RSVPForm = {
  name: string;
  phone: string;
  guests: string;
  attending: string;
  message: string;
};

export const RSVP = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RSVPForm>();

  const onSubmit = async (data: RSVPForm) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("RSVP Data:", data);
    setIsSubmitted(true);
  };

  return (
    <Container id="rsvp" className="bg-transparent">
      <SectionTitle title="RSVP" subtitle="Respond" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <LuxuryCard>
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Full Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full bg-transparent border border-divider rounded-lg px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Phone Number
                  </label>
                  <input
                    {...register("phone", { required: "Phone number is required" })}
                    className="w-full bg-transparent border border-divider rounded-lg px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                    placeholder="+94 77 123 4567"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Number of Guests
                    </label>
                    <select
                      {...register("guests", { required: "Please select number of guests" })}
                      className="w-full bg-transparent border border-divider rounded-lg px-4 py-3 focus:outline-none focus:border-gold transition-colors appearance-none"
                    >
                      <option value="">Select...</option>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4+ People</option>
                    </select>
                    {errors.guests && (
                      <p className="text-red-500 text-xs mt-1">{errors.guests.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Will you attend?
                    </label>
                    <select
                      {...register("attending", { required: "Please confirm attendance" })}
                      className="w-full bg-transparent border border-divider rounded-lg px-4 py-3 focus:outline-none focus:border-gold transition-colors appearance-none"
                    >
                      <option value="">Select...</option>
                      <option value="yes">Joyfully Accept</option>
                      <option value="no">Regretfully Decline</option>
                    </select>
                    {errors.attending && (
                      <p className="text-red-500 text-xs mt-1">{errors.attending.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Special Message (Optional)
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full bg-transparent border border-divider rounded-lg px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Leave a message for the couple..."
                  />
                </div>

                <div className="pt-4 text-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto min-w-[200px]"
                  >
                    {isSubmitting ? "Sending..." : "Send RSVP"}
                  </Button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-3xl mb-4">Thank You!</h3>
                <p className="text-text-light">
                  Your response has been recorded. We look forward to seeing you!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </LuxuryCard>
      </motion.div>
    </Container>
  );
};

"use client";

import { motion, AnimatePresence } from "motion/react";
import { CalendarCheck, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="sticky-mobile-cta"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 28 }}
          transition={{ duration: 0.28 }}
        >
          <a href="tel:+12155550198">
            <Phone aria-hidden="true" size={17} />
            Call Now
          </a>
          <a href="#contact">
            <CalendarCheck aria-hidden="true" size={17} />
            Request Consultation
          </a>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

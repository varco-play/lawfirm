"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Clock, Shield, Star } from "lucide-react";
import { CountUp } from "@/components/CountUp";
import { MagneticButton } from "@/components/MagneticButton";
import { trustStats } from "@/lib/data";

const statIcons = {
  shield: Shield,
  clock: Clock,
  star: Star,
};

const headlineWords = ["Clarity", "when", "the", "stakes", "are", "personal."];

export function Hero() {
  return (
    <section className="hero section-shell" id="hero">
      <div className="hero-background" aria-hidden="true">
        <div className="skyline">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="column-shadow column-left" />
        <div className="column-shadow column-right" />
      </div>

      <div className="hero-content">
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.12, duration: 0.55 }}
          >
            Philadelphia Attorneys at Law
          </motion.p>

          <h1 className="hero-title">
            {headlineWords.map((word, index) => (
              <span className="word-mask" key={word}>
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 1.18 + index * 0.07,
                    duration: 0.72,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={word === "personal." ? "text-gold" : undefined}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            className="gold-rule"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.58, duration: 0.68, ease: "easeOut" }}
          />

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.68, duration: 0.58 }}
          >
            Trusted legal counsel for individuals, families, and businesses
            across Philadelphia. Strategic guidance. Thoughtful advocacy.
            Lasting results.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.82, duration: 0.58 }}
          >
            <MagneticButton href="#contact">Request Consultation</MagneticButton>
            <MagneticButton href="tel:+12155550198" variant="secondary">
              Call Now
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.86, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <div className="portrait-frame">
            <Image
              src="/images/lawyer.png"
              alt=""
              fill
              priority
              sizes="(max-width: 980px) 100vw, 42vw"
              className="portrait-photo"
            />
            <div className="portrait-light" />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-stats glass-panel"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.95, duration: 0.58 }}
      >
        {trustStats.map((stat) => {
          const Icon = statIcons[stat.icon as keyof typeof statIcons];
          return (
            <div className="hero-stat" key={stat.label}>
              <Icon aria-hidden="true" size={24} />
              <strong>
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </strong>
              <span>{stat.label}</span>
            </div>
          );
        })}
      </motion.div>

      <a className="scroll-cue" href="#trust">
        <span>Scroll to explore</span>
        <i aria-hidden="true" />
      </a>
    </section>
  );
}

"use client";

import { Clock, Star } from "lucide-react";
import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="content-section section-shell testimonials-section" id="testimonials">
      <Reveal className="section-heading wide">
        <p className="eyebrow">Client Voices</p>
        <h2>
          Confidence, in our clients&apos; <span>own words.</span>
        </h2>
      </Reveal>

      <div className="testimonial-feature glass-panel">
        <Reveal>
          <span className="quote-mark">&quot;</span>
          <p>{testimonials[0].quote}</p>
          <div className="stars" aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} fill="currentColor" aria-hidden="true" />
            ))}
          </div>
          <span className="testimonial-author">
            {testimonials[0].name}, Philadelphia
          </span>
          <span className="testimonial-matter">{testimonials[0].matter}</span>
        </Reveal>
      </div>

      <div className="testimonial-grid">
        {testimonials.slice(1).map((testimonial, index) => (
          <Reveal className="testimonial-card glass-card" delay={index * 0.08} key={testimonial.name}>
            <p>{testimonial.quote}</p>
            <span>{testimonial.name}</span>
            <em>{testimonial.matter}</em>
          </Reveal>
        ))}
      </div>

      <div className="rating-row">
        <Reveal className="rating-card glass-card">
          <Star aria-hidden="true" size={30} />
          <strong>
            <CountUp value={4.9} decimals={1} />
          </strong>
          <span>Average Client Rating</span>
        </Reveal>
        <Reveal className="rating-card glass-card" delay={0.07}>
          <Clock aria-hidden="true" size={30} />
          <strong>
            <CountUp value={24} suffix="hr" />
          </strong>
          <span>Average Response Time</span>
        </Reveal>
      </div>
    </section>
  );
}

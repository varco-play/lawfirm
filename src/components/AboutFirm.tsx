"use client";

import { CheckCircle, Lock, Scale, Shield } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import {
  attorneys,
  experienceTimeline,
  guidingPrinciples,
} from "@/lib/data";

const principleIcons = {
  check: CheckCircle,
  shield: Shield,
  lock: Lock,
  scale: Scale,
};

export function AboutFirm() {
  return (
    <section className="content-section section-shell about-section" id="about">
      <div className="about-hero">
        <Reveal className="section-heading">
          <p className="eyebrow">About / Meet the Firm</p>
          <h2>
            A firm built for the moments that change <span>everything.</span>
          </h2>
          <p>
            We are trial lawyers, strategists, and trusted advisors united by a
            shared purpose: to protect what matters most and pursue justice
            without compromise.
          </p>
        </Reveal>

        <Reveal className="about-quote glass-panel" delay={0.12}>
          <p>
            &quot;We do not just represent clients. We stand with them through it
            all.&quot;
          </p>
        </Reveal>
      </div>

      <div className="attorney-grid">
        {attorneys.map((attorney, index) => (
          <Reveal className="attorney-card glass-card" delay={index * 0.08} key={attorney.name}>
            <div className="attorney-portrait" aria-hidden="true">
              <span>{attorney.initials}</span>
            </div>
            <div>
              <h3>{attorney.name}</h3>
              <p className="card-kicker">{attorney.role}</p>
              <p>{attorney.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="principles glass-panel" delay={0.12}>
        <span className="card-kicker">Our guiding principles</span>
        <div className="principle-grid">
          {guidingPrinciples.map((principle) => {
            const Icon =
              principleIcons[principle.icon as keyof typeof principleIcons];
            return (
              <div className="principle" key={principle.title}>
                <Icon aria-hidden="true" size={25} />
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            );
          })}
        </div>
      </Reveal>

      <Reveal className="timeline-block" delay={0.08}>
        <p className="eyebrow">Rooted in experience. Focused on you.</p>
        <ol className="experience-timeline">
          {experienceTimeline.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}

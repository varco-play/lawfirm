"use client";

import { Clock, Lock, Shield, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { whyChooseUs } from "@/lib/data";

const icons = {
  users: Users,
  clock: Clock,
  lock: Lock,
  shield: Shield,
};

export function WhyChooseUs() {
  return (
    <section className="content-section section-shell" id="why-us">
      <Reveal className="section-heading">
        <p className="eyebrow">Trust / Why Clients Choose Us</p>
        <h2>
          Built on preparation, discretion, and <span>results.</span>
        </h2>
        <p>
          When the outcome matters, you need more than legal information. You
          need a clear strategy, steady communication, and counsel prepared for
          what comes next.
        </p>
      </Reveal>

      <div className="why-layout">
        <Reveal className="why-image glass-panel" delay={0.08}>
          <div className="city-hall-mark" aria-hidden="true" />
          <p>Prepared today for tomorrow&apos;s result.</p>
        </Reveal>

        <div className="card-grid two-column">
          {whyChooseUs.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <Reveal className="feature-card glass-card" delay={index * 0.07} key={item.title}>
                <Icon aria-hidden="true" size={28} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

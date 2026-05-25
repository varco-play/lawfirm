"use client";

import { Globe2, Lock, Scale, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { trustBarItems } from "@/lib/data";

const icons = {
  lock: Lock,
  users: Users,
  globe: Globe2,
  scale: Scale,
};

export function TrustBar() {
  return (
    <section className="trust-bar section-shell" id="trust" aria-label="Firm trust signals">
      <Reveal className="trust-grid glass-panel" stagger>
        {trustBarItems.map((item) => {
          const Icon = icons[item.icon as keyof typeof icons];
          return (
            <div className="trust-item" key={item.title}>
              <Icon aria-hidden="true" size={22} />
              <span>{item.title}</span>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}

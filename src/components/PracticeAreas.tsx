"use client";

import {
  ArrowRight,
  Briefcase,
  FileText,
  Globe2,
  Scale,
  Shield,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { practiceAreas } from "@/lib/data";
import { cn } from "@/lib/utils";

const icons = {
  shield: Shield,
  scale: Scale,
  globe: Globe2,
  users: Users,
  briefcase: Briefcase,
  file: FileText,
};

export function PracticeAreas() {
  return (
    <section className="content-section section-shell" id="practice-areas">
      <Reveal className="section-heading wide">
        <p className="eyebrow">Practice Areas</p>
        <h2>
          Focused counsel across life&apos;s most <span>difficult matters.</span>
        </h2>
        <p>
          Clear guidance and steadfast advocacy when the outcome affects your
          future.
        </p>
      </Reveal>

      <div className="practice-grid">
        {practiceAreas.map((area, index) => {
          const Icon = icons[area.icon as keyof typeof icons];
          return (
            <Reveal
              key={area.title}
              delay={index * 0.06}
              className={cn("practice-card glass-card", area.featured && "featured")}
            >
              <div className="practice-icon">
                <Icon aria-hidden="true" size={30} />
              </div>
              <div>
                {area.featured ? <span className="card-kicker">Featured</span> : null}
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
              <ArrowRight className="card-arrow" aria-hidden="true" size={22} />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import { Briefcase, CheckCircle, Clock, FileText, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import { processSteps } from "@/lib/data";
import { cn } from "@/lib/utils";

const icons = {
  users: Users,
  file: FileText,
  briefcase: Briefcase,
  clock: Clock,
  check: CheckCircle,
};

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !sectionRef.current) {
      setProgress(1);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 65%",
      end: "bottom 55%",
      scrub: 0.3,
      onUpdate: (self) => setProgress(self.progress),
    });

    return () => trigger.kill();
  }, []);

  const activeIndex = Math.min(
    processSteps.length - 1,
    Math.floor(progress * processSteps.length),
  );

  return (
    <section className="content-section section-shell process-section" id="process" ref={sectionRef}>
      <Reveal className="section-heading centered">
        <p className="eyebrow">Process / How We Work</p>
        <h2>
          What working with us <span>feels like.</span>
        </h2>
        <p>
          A clear, thoughtful process built around your goals. You will always
          know what to expect at every step.
        </p>
      </Reveal>

      <div className="process-timeline">
        <div className="timeline-rail" aria-hidden="true">
          <span style={{ transform: `scaleY(${Math.max(progress, 0.08)})` }} />
        </div>

        {processSteps.map((step, index) => {
          const Icon = icons[step.icon as keyof typeof icons];
          const active = index <= activeIndex;
          return (
            <Reveal
              key={step.title}
              delay={index * 0.06}
              className={cn("process-step glass-card", active && "active")}
            >
              <span className="step-number">{index + 1}</span>
              <Icon aria-hidden="true" size={31} />
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="process-callout glass-panel" delay={0.1}>
        <div>
          <h3>Confidential. Responsive. Clear.</h3>
          <p>
            We respect your time and your privacy. Most inquiries receive a
            response within 24 hours.
          </p>
        </div>
        <MagneticButton href="#contact">Start Your Consultation</MagneticButton>
      </Reveal>
    </section>
  );
}

"use client";

import { FileText, Lock, Scale, Shield } from "lucide-react";
import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";
import { caseResults } from "@/lib/data";

const icons = {
  scale: Scale,
  shield: Shield,
  lock: Lock,
  file: FileText,
};

export function ResultsSection() {
  return (
    <section className="content-section section-shell results-section" id="results">
      <Reveal className="section-heading wide">
        <p className="eyebrow">Results / Case Highlights</p>
        <h2>
          Measured outcomes. Meaningful <span>impact.</span>
        </h2>
        <p>
          Every case is unique. Our commitment to preparation, strategy, and
          advocacy drives results that protect what matters most.
        </p>
      </Reveal>

      <div className="results-list">
        {caseResults.map((result, index) => {
          const Icon = icons[result.icon as keyof typeof icons];
          return (
            <Reveal className="result-card glass-card" delay={index * 0.07} key={result.category}>
              <div className="result-icon">
                <Icon aria-hidden="true" size={30} />
              </div>
              <div className="result-copy">
                <p className="card-kicker">{result.category}</p>
                <h3>{result.result}</h3>
                <p>{result.description}</p>
              </div>
              <div className="result-metric">
                {typeof result.amount === "number" ? (
                  <strong>
                    <CountUp
                      value={result.amount}
                      prefix={result.prefix}
                      suffix={result.suffix}
                      decimals={result.amount % 1 === 0 ? 0 : 1}
                    />
                  </strong>
                ) : (
                  <strong>{result.result}</strong>
                )}
              </div>
            </Reveal>
          );
        })}

        <Reveal className="outcome-ring glass-panel" delay={0.1}>
          <div className="ring" aria-hidden="true">
            <span>
              <CountUp value={94} suffix="%" />
            </span>
          </div>
          <div>
            <p className="card-kicker">Client outcomes that matter</p>
            <h3>Resolved through preparation and strategy.</h3>
            <p>
              Case highlights shown are fictional examples for this website
              concept.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal className="legal-disclaimer" delay={0.08}>
        Past results do not guarantee future outcomes. Every case depends on
        its own facts and circumstances.
      </Reveal>
    </section>
  );
}

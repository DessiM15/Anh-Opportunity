"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const benefits = [
  "Dual income streams — insurance commissions + business advisory fees",
  "AI-powered tools (Pulse Suite) for lead generation and client management",
  "No upfront licensing required to start",
  "Full training included — start earning day one",
  "Access to a wide range of insurance and financial products",
  "Proven system for building sustainable, recurring revenue",
];

export default function ApexAdvantage() {
  return (
    <section className="py-20 md:py-28 bg-navy relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,white_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Unlock the{" "}
                <span className="text-gold">Apex Advantage</span>
              </h2>
              <p className="text-white/70 text-lg mb-8">
                As a Doan FS partner, you gain access to the Apex platform — a
                revolutionary system combining AI technology, insurance products,
                and business advisory into one powerful income engine.
              </p>

              <ul className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <ScrollReveal key={index} delay={index * 0.08}>
                    <li className="flex items-start gap-3 text-white/80 text-sm">
                      <svg
                        className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {benefit}
                    </li>
                  </ScrollReveal>
                ))}
              </ul>

              <a
                href="https://www.reachtheapex.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold hover:bg-gold/90 text-dark-navy font-semibold px-8 py-4 rounded-md text-sm transition-all hover:scale-105"
              >
                Learn More About Apex →
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="flex justify-center">
              <Image
                src="/assets/doan-fs-logo.png"
                alt="Doan Financial Services"
                width={400}
                height={130}
                className="w-72 md:w-96 opacity-20"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

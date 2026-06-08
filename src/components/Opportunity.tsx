"use client";

import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  {
    value: 1.4,
    prefix: "$",
    suffix: "T+",
    decimals: 1,
    label: "Annual Industry Revenue",
    description: "The U.S. insurance and financial services industry generates over $1.4 trillion in revenue annually.",
  },
  {
    value: 150,
    prefix: "$",
    suffix: "K+",
    decimals: 0,
    label: "Top Agent Earnings",
    description: "Experienced agents and agency owners earn between $75K–$150K+ per year.",
  },
  {
    value: 6.2,
    prefix: "",
    suffix: "%",
    decimals: 1,
    label: "Projected Growth",
    description: "The industry is projected to grow steadily over the next decade driven by demand for risk management.",
  },
];

export default function Opportunity() {
  return (
    <section id="opportunity" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
              The Insurance & Financial Services Industry
            </h2>
            <p className="mt-4 text-navy/70 text-lg">
              A massive, growing industry with unlimited opportunity for those ready to lead.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.15}>
              <div className="bg-light-gray rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl md:text-5xl font-bold text-gold mb-3">
                  <AnimatedCounter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {stat.label}
                </h3>
                <p className="text-navy/60 text-sm">{stat.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-navy/70 text-base leading-relaxed">
              Now is the time to be in this industry. With an aging population, growing
              awareness of risk management, and increasing demand for business advisory
              services, the opportunity has never been greater for ambitious agencies ready
              to grow.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

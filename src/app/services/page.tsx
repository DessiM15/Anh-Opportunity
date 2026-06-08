"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const qualifiedPlans = [
  {
    title: "SIMPLE IRAs",
    description: "Savings Incentive Match Plan for Employees — ideal for small businesses with 100 or fewer employees.",
  },
  {
    title: "IRS Safe Harbor Plans",
    description: "401(k) plans that automatically satisfy nondiscrimination testing through employer contributions.",
  },
  {
    title: "Defined Contribution Plans",
    description: "401(k), Profit Sharing, and other plans where contributions are defined but benefits vary with investment performance.",
  },
  {
    title: "Defined Benefit Plans",
    description: "Traditional pension plans, Cash Balance plans, and 412(e)(3) fully-insured plans providing guaranteed retirement income.",
  },
];

const nonQualifiedStrategies = [
  {
    title: "Executive Bonus (162 Plans)",
    description: "Employer-paid life insurance premiums as a bonus to key employees, providing tax-advantaged benefits.",
  },
  {
    title: "Deferred Compensation",
    description: "Arrangements allowing executives to defer a portion of compensation to a future date, reducing current tax liability.",
  },
  {
    title: "Split-Dollar Arrangements",
    description: "Loan and Economic Benefit arrangements sharing life insurance policy costs between employer and employee.",
  },
  {
    title: "Kaizen & Trizen Programs",
    description: "Innovative premium financing strategies for high-net-worth individuals and business owners.",
  },
  {
    title: "SERPs",
    description: "Supplemental Executive Retirement Plans providing additional retirement benefits beyond qualified plan limits.",
  },
  {
    title: "Exempt Charitable Trusts",
    description: "Tax-exempt trust structures that combine charitable giving with wealth preservation strategies.",
  },
  {
    title: "Business Succession Planning",
    description: "Comprehensive strategies to transition ownership smoothly while protecting business value and legacy.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy relative">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Comprehensive Financial Services
              <br />
              <span className="text-gold">&amp; Risk Management</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
              Equipping clients for effective financial risk management through
              collaboration with CPAs and estate planning attorneys.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Qualified Plans */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Qualified Plans
            </h2>
            <p className="text-navy/60 text-lg mb-12 max-w-2xl">
              Tax-advantaged retirement plans designed to help businesses attract
              and retain top talent while building wealth for the future.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualifiedPlans.map((plan, index) => (
              <ScrollReveal key={plan.title} delay={index * 0.1}>
                <div className="border border-navy/10 rounded-xl p-6 hover:shadow-lg transition-all hover:border-gold/30 group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-1">
                        {plan.title}
                      </h3>
                      <p className="text-navy/60 text-sm leading-relaxed">
                        {plan.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Non-Qualified Strategies */}
      <section className="py-20 md:py-28 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Non-Qualified Strategies
            </h2>
            <p className="text-navy/60 text-lg mb-12 max-w-2xl">
              Advanced strategies for business owners and executives seeking
              flexible wealth accumulation beyond qualified plan limits.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonQualifiedStrategies.map((strategy, index) => (
              <ScrollReveal key={strategy.title} delay={index * 0.08}>
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {strategy.title}
                  </h3>
                  <p className="text-navy/60 text-sm leading-relaxed">
                    {strategy.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                  Our Approach
                </h2>
                <div className="space-y-4 text-navy/70 text-base leading-relaxed">
                  <p>
                    At Doan Financial Services, we believe effective risk management
                    starts with understanding. We work closely with CPAs and estate
                    planning attorneys to ensure our clients receive comprehensive
                    guidance that considers all angles.
                  </p>
                  <p>
                    Our advisory approach focuses on identifying risks before they
                    become problems, and implementing strategies that protect wealth
                    while enabling growth. Whether it&apos;s business succession
                    planning or executive benefits, we tailor solutions to each
                    client&apos;s unique situation.
                  </p>
                  <p>
                    Through our affiliation with 3Mark Financial, we have access to
                    A+ rated carriers and a comprehensive suite of products that
                    allow us to recommend the best fit — not just what&apos;s available.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-light-gray rounded-xl p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src="/assets/3mark-logo.png"
                    alt="3Mark Financial"
                    width={100}
                    height={35}
                    className="h-10 w-auto"
                  />
                  <div className="h-8 w-px bg-navy/20" />
                  <Image
                    src="/assets/doan-fs-logo.png"
                    alt="Doan Financial Services"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                </div>
                <p className="text-navy/60 text-sm leading-relaxed">
                  Proudly affiliated with 3Mark Financial. Together, we bring
                  institutional-level financial solutions to businesses and
                  individuals who demand the best.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Discuss Your Financial Strategy?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Let&apos;s have a conversation about your goals and how we can help
              protect and grow your wealth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9726071442"
                className="bg-gold hover:bg-gold/90 text-dark-navy font-semibold px-8 py-4 rounded-md text-sm transition-all hover:scale-105 inline-block"
              >
                Call (972) 607-1442
              </a>
              <Link
                href="/#contact"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-md text-sm transition-all inline-block"
              >
                Submit an Inquiry
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

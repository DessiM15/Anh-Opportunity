"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const valueProps = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Cross-Referral Network",
    description: "If we offer something you don't, we send clients to you. And vice versa. A true partnership built on mutual growth.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Lead Generation & Business Advisory",
    description: "Access proven lead generation strategies and business advisory support to scale your operations.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Mentorship & Training",
    description: "27 years of corporate and financial services experience at your disposal. Guidance that accelerates growth.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Team Expansion",
    description: "Grow your agency with the support and infrastructure of Doan FS. Together, we can achieve more.",
  },
];

export default function WhyCollaborate() {
  return (
    <section className="py-20 md:py-28 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
              Why Partner With Us
            </h2>
            <p className="mt-4 text-navy/70 text-lg">
              Collaboration over competition. Here&apos;s what working with Doan FS looks like.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {valueProps.map((prop, index) => (
            <ScrollReveal key={prop.title} delay={index * 0.1}>
              <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="text-gold mb-4 group-hover:scale-110 transition-transform">
                  {prop.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">
                  {prop.title}
                </h3>
                <p className="text-navy/60 text-sm leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 3Mark Partnership Callout */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 bg-white rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 border border-gold/20">
            <Image
              src="/assets/3mark-logo.png"
              alt="3Mark Financial"
              width={120}
              height={40}
              className="h-12 w-auto flex-shrink-0"
            />
            <div>
              <h3 className="text-lg font-semibold text-navy mb-1">
                Proudly Affiliated with 3Mark Financial
              </h3>
              <p className="text-navy/60 text-sm">
                Access to A+ rated carriers and a full suite of financial products.
                Our partnership with 3Mark Financial gives you and your clients
                best-in-class options.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

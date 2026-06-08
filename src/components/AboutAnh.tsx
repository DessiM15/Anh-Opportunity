"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function AboutAnh() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <ScrollReveal direction="left">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-3 border-2 border-gold/30 rounded-xl" />
                <Image
                  src="/assets/anh-photo.png"
                  alt="Anh Doan - Founder of Doan Financial Services, risk management and business advisory specialist in Sugar Land TX"
                  width={400}
                  height={500}
                  className="rounded-xl relative z-10 w-72 md:w-96 h-auto"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Bio */}
          <ScrollReveal direction="right">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Meet Anh Doan
              </h2>

              <div className="space-y-4 text-navy/70 text-sm leading-relaxed">
                <p>
                  <strong className="text-navy">BS Electrical Engineering</strong> from Kansas State University,
                  with 27 years of corporate experience spanning Engineering and
                  Financial Services.
                </p>
                <p>
                  Anh owns and operates an independent insurance financial firm
                  specializing in <strong className="text-navy">Risk Management</strong> and{" "}
                  <strong className="text-navy">Business Advisory</strong>. His approach combines analytical
                  precision with genuine care for client outcomes.
                </p>
                <p>
                  Author of <em>&quot;The Fish That Drowned&quot;</em> (a children&apos;s book), and a
                  member of SJVRC.org — the &quot;One Mile for One Child&quot; running club.
                </p>
                <p>
                  Outside of business, Anh is passionate about volunteering, martial
                  arts, and running.
                </p>
              </div>

              {/* Quote */}
              <div className="mt-8 border-l-4 border-gold pl-6 py-2">
                <blockquote className="text-lg text-navy italic font-medium">
                  &quot;Everyone faces risks, but do you know what they are and how to
                  handle them?&quot;
                </blockquote>
                <cite className="text-sm text-navy/50 mt-2 block not-italic">
                  — Anh Doan, Founder
                </cite>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logos */}
          <div className="space-y-6">
            <Image
              src="/assets/doan-fs-logo.png"
              alt="Doan Financial Services"
              width={200}
              height={64}
              className="h-16 w-auto"
            />
            <div className="flex items-center gap-3">
              <Image
                src="/assets/3mark-logo.png"
                alt="3Mark Financial"
                width={100}
                height={35}
                className="h-8 w-auto"
              />
              <span className="text-white/60 text-xs">Affiliated Advisors</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-2 text-white/70 text-sm">
              <p>
                <a href="tel:9726071442" className="hover:text-gold transition-colors">
                  (972) 607-1442
                </a>
              </p>
              <p>
                <a
                  href="mailto:anh@doanfs.com"
                  className="hover:text-gold transition-colors"
                >
                  anh@doanfs.com
                </a>
              </p>
              <p>Sugar Land, TX</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="space-y-2 text-white/70 text-sm">
              <p>
                <Link href="/" className="hover:text-gold transition-colors">
                  Recruitment
                </Link>
              </p>
              <p>
                <Link href="/services" className="hover:text-gold transition-colors">
                  Financial Services
                </Link>
              </p>
              <p>
                <Link href="#insights" className="hover:text-gold transition-colors">
                  Insights
                </Link>
              </p>
              <p>
                <a
                  href="https://www.reachtheapex.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Apex Opportunity
                </a>
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider">
              Get Started
            </h4>
            <button className="bg-gold hover:bg-gold/90 text-dark-navy font-semibold px-6 py-3 rounded-md text-sm transition-all hover:scale-105 w-full">
              Schedule a Conversation
            </button>
            <a
              href="tel:9726071442"
              className="block border border-gold text-gold hover:bg-gold hover:text-dark-navy font-semibold px-6 py-3 rounded-md text-sm transition-all text-center"
            >
              Call (972) 607-1442
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-xs">
          <p>© {new Date().getFullYear()} Doan Financial Services. All rights reserved.</p>
          <p className="mt-1">
            Affiliated with 3Mark Financial. Securities offered where applicable.
          </p>
        </div>
      </div>
    </footer>
  );
}

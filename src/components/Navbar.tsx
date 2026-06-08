"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-navy/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/doan-fs-logo.png"
              alt="Doan Financial Services - insurance agency partnership and financial advisory firm"
              width={320}
              height={100}
              className="h-24 md:h-28 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-white/90 hover:text-gold transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-white/90 hover:text-gold transition-colors text-sm font-medium"
            >
              Financial Services
            </Link>
            <Link
              href="#insights"
              className="text-white/90 hover:text-gold transition-colors text-sm font-medium"
            >
              Insights
            </Link>
            <a
              href="tel:9726071442"
              className="bg-gold hover:bg-gold/90 text-dark-navy font-semibold px-5 py-2.5 rounded-md text-sm transition-all hover:scale-105"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className={`md:hidden pb-4 border-t border-white/10 ${scrolled ? "" : "bg-dark-navy/90 backdrop-blur-md rounded-b-lg -mx-4 px-4"}`}>
            <div className="flex flex-col gap-3 pt-4">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="text-white/90 hover:text-gold transition-colors text-sm font-medium px-2 py-1"
              >
                Home
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileOpen(false)}
                className="text-white/90 hover:text-gold transition-colors text-sm font-medium px-2 py-1"
              >
                Financial Services
              </Link>
              <Link
                href="#insights"
                onClick={() => setMobileOpen(false)}
                className="text-white/90 hover:text-gold transition-colors text-sm font-medium px-2 py-1"
              >
                Insights
              </Link>
              <a
                href="tel:9726071442"
                className="bg-gold hover:bg-gold/90 text-dark-navy font-semibold px-5 py-2.5 rounded-md text-sm transition-all text-center mt-2"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

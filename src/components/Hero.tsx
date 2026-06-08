"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/hero-thumbnail.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/80 via-dark-navy/60 to-dark-navy/90" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Expand Your Reach.{" "}
          <span className="text-gold">Grow Together.</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Partner with Doan Financial Services to expand your agency, access new
          markets, and grow together.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#opportunity"
            className="bg-gold hover:bg-gold/90 text-dark-navy font-semibold px-8 py-4 rounded-md text-sm transition-all hover:scale-105 inline-block"
          >
            Explore the Opportunity
          </a>
          <button className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-md text-sm transition-all">
            Schedule a Conversation
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}

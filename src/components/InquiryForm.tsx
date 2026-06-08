"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agency: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — will be wired up later
    alert("Thank you! We will be in touch soon.");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
              Start the Conversation
            </h2>
            <p className="mt-4 text-navy/70 text-lg">
              Interested in collaborating? Let&apos;s talk about how we can grow together.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <ScrollReveal direction="left">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all text-sm"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all text-sm"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all text-sm"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Agency Name / Current Role
                </label>
                <input
                  type="text"
                  value={formData.agency}
                  onChange={(e) =>
                    setFormData({ ...formData, agency: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all text-sm"
                  placeholder="Your agency or role"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  What interests you about this opportunity?
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all text-sm resize-none"
                  placeholder="Tell us about your goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold/90 text-dark-navy font-semibold py-4 rounded-lg text-sm transition-all hover:scale-[1.02]"
              >
                Submit Inquiry
              </button>
            </form>
          </ScrollReveal>

          {/* Contact Options */}
          <ScrollReveal direction="right">
            <div className="space-y-6 lg:pl-8">
              <div className="bg-light-gray rounded-xl p-8">
                <h3 className="text-lg font-semibold text-navy mb-6">
                  Other Ways to Connect
                </h3>

                <div className="space-y-5">
                  <a
                    href="tel:9726071442"
                    className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">Call Now</p>
                      <p className="text-navy/60 text-sm">(972) 607-1442</p>
                    </div>
                  </a>

                  <button className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all group w-full text-left">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">Schedule a Conversation</p>
                      <p className="text-navy/60 text-sm">Book a time that works for you</p>
                    </div>
                  </button>

                  <a
                    href="mailto:anh@doanfs.com"
                    className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">Email Us</p>
                      <p className="text-navy/60 text-sm">anh@doanfs.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">Location</p>
                      <p className="text-navy/60 text-sm">Sugar Land, TX</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

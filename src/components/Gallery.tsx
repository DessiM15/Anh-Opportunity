"use client";

import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
    alt: "Insurance agency team meeting discussing financial services partnership strategies",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    alt: "Collaborative financial services office with diverse professionals working together",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
    alt: "Business networking event for insurance and financial services professionals",
  },
  {
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
    alt: "Financial advisor consulting with a client on risk management planning",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
    alt: "Agency partners collaborating on business growth and lead generation strategies",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    alt: "Modern financial services workspace supporting agency collaboration",
  },
  {
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
    alt: "Professional presentation on insurance industry opportunities and growth",
  },
  {
    src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=400&fit=crop",
    alt: "Family enjoying financial security through comprehensive risk management planning",
  },
];

export default function Gallery() {
  return (
    <section aria-label="Gallery of professional collaboration" className="py-16 bg-light-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center">
          Building Success Together
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative" role="presentation" aria-hidden="true">
        <div className="flex animate-scroll-marquee">
          {[...galleryImages, ...galleryImages].map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 md:w-80 h-48 md:h-56 mx-2 rounded-xl overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

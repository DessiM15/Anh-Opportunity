"use client";

import { useState } from "react";
import Image from "next/image";
import { blogPostsByMonth, BlogPost } from "@/data/blogPosts";
import ScrollReveal from "./ScrollReveal";

export default function BlogInsights() {
  const currentMonth = new Date().getMonth();
  const currentPosts = blogPostsByMonth[currentMonth] || blogPostsByMonth[0];
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  return (
    <section id="insights" className="py-20 md:py-28 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
              Industry Insights
            </h2>
            <p className="mt-4 text-navy/70 text-lg">
              Stay informed with the latest trends, opportunities, and strategies in
              financial services.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentPosts.map((post: BlogPost, index: number) => (
            <ScrollReveal key={post.id} delay={index * 0.15}>
              <article className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-gold font-semibold mb-2 uppercase tracking-wider">
                    {post.author}
                  </p>
                  <h3 className="text-lg font-semibold text-navy mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-navy/60 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button
                    onClick={() =>
                      setExpandedPost(expandedPost === post.id ? null : post.id)
                    }
                    className="text-gold font-medium text-sm hover:text-gold/80 transition-colors"
                  >
                    {expandedPost === post.id ? "Close" : "Read More →"}
                  </button>

                  {expandedPost === post.id && (
                    <div className="mt-4 pt-4 border-t border-navy/10 text-navy/70 text-sm leading-relaxed whitespace-pre-line">
                      {post.content}
                    </div>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

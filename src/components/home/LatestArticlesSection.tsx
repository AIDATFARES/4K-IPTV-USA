"use client";

import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { ArrowRight } from "lucide-react";

export default function LatestArticlesSection() {
  // Get the 3 most recently added articles (last 3 in the array, reversed)
  const latestPosts = [...blogPosts].reverse().slice(0, 3);

  return (
    <section className="py-24 relative overflow-hidden bg-surface-lowest">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container/30 pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-display-md text-display-md text-on-surface mb-6">
            Latest Articles
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Stay up to date with the latest IPTV guides, tips, and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {latestPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id}>
              <article className="glass-panel rounded-xl overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-2 transition-transform duration-300 h-full border border-outline-variant/30 hover:border-primary/50 shadow-lg shadow-black/5 hover:shadow-primary/10">
                <div className="h-48 relative overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={post.title}
                    src={post.coverImage || ""}
                  />
                  <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
                  <span className="absolute top-4 left-4 px-2 py-1 bg-surface-container/80 backdrop-blur-md text-on-surface rounded font-label-caps text-label-caps border border-white/10">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow bg-surface-container-lowest/50">
                  <h3 className="text-xl font-bold leading-snug text-white transition-colors group-hover:text-indigo-400 mb-3">
                    {post.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 line-clamp-3 flex-grow">
                    {post.description}
                  </p>
                  <div className="mt-auto text-on-surface-variant font-label-caps text-label-caps opacity-80 flex items-center justify-between border-t border-outline-variant/20 pt-4">
                    <span>{post.date}</span>
                    <span className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                      Read More 
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <button className="bg-surface-container border border-outline hover:border-primary text-on-surface px-8 py-3 rounded-full font-title-sm text-title-sm transition-all hover:bg-surface-container-high group flex items-center justify-center mx-auto gap-2">
              View All Articles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-primary" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

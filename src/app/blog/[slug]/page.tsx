import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<import('next').Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return { title: 'Post Not Found | IPTVDoor' };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex-grow pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-[1024px] mx-auto w-full relative z-10 text-format-blog">
      <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary-container mb-8 transition-colors group font-semibold">
        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>

      <article className="glass-panel rounded-2xl p-6 md:p-12">
        <header className="mb-10 text-center">
          <span className="inline-block px-3 py-1 bg-tertiary/20 text-tertiary rounded-full font-label-caps text-label-caps mb-4 w-max border border-tertiary/30">
            {post.category}
          </span>
          <h1 className="font-display-md md:font-display-lg text-display-md md:text-display-lg text-on-surface mb-6">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-on-surface-variant font-label-lg text-label-lg opacity-80">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
        </header>

        {post.coverImage && (
          <div className="mb-12 rounded-xl overflow-hidden shadow-2xl relative w-full h-[300px] md:h-[500px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="prose prose-invert prose-lg max-w-none text-on-surface-variant 
          prose-headings:text-on-surface prose-headings:font-headline-md 
          prose-a:text-primary hover:prose-a:text-primary-container
          prose-strong:text-on-surface prose-strong:font-bold
          prose-code:text-secondary prose-code:bg-surface-container/50 prose-code:px-1 prose-code:rounded
          prose-pre:bg-surface-container prose-pre:border prose-pre:border-outline-variant
          prose-blockquote:border-l-primary prose-blockquote:bg-surface-container/30 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:not-italic
          prose-img:rounded-xl prose-img:shadow-lg
          prose-th:text-on-surface prose-th:border-b prose-th:border-outline-variant prose-th:py-2
          prose-td:border-b prose-td:border-outline-variant/50 prose-td:py-2"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-12 mb-6 text-on-surface" {...props} />,
              h3: ({ node, ...props }) => <h3 className="text-xl font-semibold mt-8 mb-4 text-on-surface" {...props} />,
              p: ({ node, ...props }) => <p className="mb-6 leading-relaxed" {...props} />,
              ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />,
              a: ({ node, ...props }) => <a className="text-red-500 hover:text-red-400 no-underline font-semibold transition-colors" {...props} />,
              blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-primary pl-4 py-1 mb-6 italic bg-surface-container/30 rounded-r" {...props} />,
              table: ({ node, ...props }) => <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse" {...props} /></div>,
              th: ({ node, ...props }) => <th className="border-b border-outline-variant py-3 px-4 font-semibold text-on-surface bg-surface-container" {...props} />,
              td: ({ node, ...props }) => <td className="border-b border-outline-variant/30 py-3 px-4" {...props} />,
              img: ({ node, alt, src, ...props }) => (
                <div className="my-8 flex flex-col items-center">
                  <img src={src} alt={alt} className="rounded-xl shadow-lg max-w-full" {...props} />
                  {alt && <span className="text-sm text-center block mt-2 opacity-70">{alt}</span>}
                </div>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}

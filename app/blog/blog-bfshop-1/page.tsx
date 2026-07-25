import type { Metadata } from "next"
import BFShopBlogPost from "@/app/components/blogs/bfshop-blog-post";
import JsonLd from "@/app/components/shared/jsonld"
import { BackPillLink } from '../../components/ui/back-pill-link';

export const metadata: Metadata = {
  title: "Introduction to BFshop | Ben Foster's Blog",
  description: "In this article I lay the groundworks for my BF shop project, focusing on its basic structure and purposes.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Introduction to BFshop | BFshop Docs",
  "name": "Introduction to BFshop | BFshop Docs",
  "description": "In this article I lay the groundworks for my BF shop project, focusing on its basic structure and purposes.",
  "url": "https://benfosterdev.com/blog/blog-bfshop-1",
  "datePublished": "2026-07-05",
  "author": {
    "@type": "Person",
    "name": "Ben Foster",
    "url": "https://benfosterdev.com"
  },
  "isPartOf": {
    "@type": "Blog",
    "name": "BFshop Blog",
    "url": "https://benfosterdev.com/blog/bfshop-blog-home"
  },
  "mainEntityOfPage": "https://benfosterdev.com/blog/blog-bfshop-1",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "BFshop Blog",
        "item": "https://benfosterdev.com/blog/bfshop-blog-home"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Introduction to BFshop",
        "item": "https://benfosterdev.com/blog/blog-bfshop-1"
      }
    ]
  }
}
export default function BFShopBlog1 () {
    return (
    <>
      <JsonLd schema={schema} />
      <main className="min-h-screen bg-subtle-dark-gradient text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16 lg:py-20">
          <section className="mb-10 md:mb-14 lg:mb-16">
            <BackPillLink href="/blog/blog-bfshop" />
          </section>

          <section className="page-header-stack page-header-tight text-center">
            <h1 className="font-inter text-5xl font-bold tracking-tight">Introduction to BFshop</h1>
            <p className="mx-auto max-w-3xl card-body text-zinc-300">
              The foundation, purpose, and overall direction behind BFshop as a full-stack AI-enhanced business system.
            </p>
          </section>

          <section className="page-section-gap">
            <div className="surface-raised mx-auto w-full max-w-4xl p-6 md:p-8 lg:p-10">
              <BFShopBlogPost />
            </div>
          </section>
        </div>
      </main>
    </>
    );
}
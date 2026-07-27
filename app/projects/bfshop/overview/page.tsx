import type { Metadata } from "next"
import BFShopOverviewPost from "@/app/components/bfshop-documentation/bfshop-overview-post";
import JsonLd from "@/app/components/shared/jsonld"
import { BackPillLink } from '../../../components/ui/back-pill-link';

export const metadata: Metadata = {
  title: "Introduction to BFshop | BFshop Project Portal",
  description: "In this article I lay the groundworks for my BF shop project, focusing on its basic structure and purposes.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Introduction to BFshop | BFshop Docs",
  "name": "Introduction to BFshop | BFshop Docs",
  "description": "In this article I lay the groundworks for my BF shop project, focusing on its basic structure and purposes.",
  "url": "https://benfosterdev.com/projects/bfshop/overview",
  "datePublished": "2026-07-05",
  "author": {
    "@type": "Person",
    "name": "Ben Foster",
    "url": "https://benfosterdev.com"
  },
  "isPartOf": {
    "@type": "WebPage",
    "name": "BFshop Project Portal",
    "url": "https://benfosterdev.com/projects/bfshop"
  },
  "mainEntityOfPage": "https://benfosterdev.com/projects/bfshop/overview",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "BFshop Project Portal",
        "item": "https://benfosterdev.com/projects/bfshop"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Introduction to BFshop",
        "item": "https://benfosterdev.com/projects/bfshop/overview"
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
            <BackPillLink href="/projects/bfshop" />
          </section>

          <section className="page-header-stack page-header-tight text-center">
            <h1 className="font-inter text-5xl font-bold tracking-tight">Introduction to BFshop</h1>
            <p className="mx-auto max-w-3xl card-body text-zinc-300">
              The foundation, purpose, and overall direction behind BFshop as a full-stack AI-enhanced business system.
            </p>
          </section>

          <section className="page-section-gap">
            <div className="surface-raised mx-auto w-full max-w-4xl p-6 md:p-8 lg:p-10">
              <BFShopOverviewPost />
            </div>
          </section>
        </div>
      </main>
    </>
    );
}
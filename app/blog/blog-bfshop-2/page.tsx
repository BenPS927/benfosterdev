import type { Metadata } from "next"
import BFShopProjectSpec from "@/app/components/blogs/bfshop-project-spec";
import JsonLd from "@/app/components/shared/jsonld"
import { BackPillLink } from '../../components/ui/back-pill-link';

export const metadata: Metadata = {
  title: "Project Specifications | Ben Foster's Blog",
  description: "Project structure, dependencies, and next steps for BFshop.",
}

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Project Specifications | BFshop Blog",
  "name": "Project Specifications | BFshop Blog",
  "description": "Project structure, dependencies, and next steps for BFshop.",
  "url": "https://benfosterdev.com/blog/blog-bfshop-2", // update to your actual URL
  "datePublished": "2026-03-19", // update to your actual publish date
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
  "mainEntityOfPage": "https://benfosterdev.com/blog/blog-bfshop-2", // update to your actual URL
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
        "name": "Project Specifications",
        "item": "https://benfosterdev.com/blog/blog-bfshop-2"
      }
    ]
  }
}

export default function BFShopProjectSpecPage () {
    return (
    <>
      <JsonLd schema={schema} />
      <main className="min-h-screen bg-subtle-dark-gradient text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16 lg:py-20">
          <section className="mb-10 md:mb-14 lg:mb-16">
            <BackPillLink href="/blog/blog-bfshop" />
          </section>

          <section className="page-header-stack page-header-tight text-center">
            <h1 className="font-inter text-5xl font-bold tracking-tight">Project Specifications</h1>
            <p className="mx-auto max-w-3xl card-body text-zinc-300">
              Technical structure, chosen tools, and the design rules shaping BFshop as the project expands.
            </p>
          </section>

          <section className="page-section-gap">
            <div className="surface-raised mx-auto w-full max-w-4xl p-6 md:p-8 lg:p-10">
              <BFShopProjectSpec />
            </div>
          </section>
        </div>
      </main>
    </>
    );
}
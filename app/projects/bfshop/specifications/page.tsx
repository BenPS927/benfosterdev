import type { Metadata } from "next"
import BFShopSpecificationsSheet from "@/app/components/bfshop-documentation/bfshop-specifications-sheet";
import JsonLd from "@/app/components/shared/jsonld"
import { BackPillLink } from '../../../components/ui/back-pill-link';

export const metadata: Metadata = {
  title: "Project Specifications | BFshop Project Portal",
  description: "Project structure, dependencies, and next steps for BFshop.",
}

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Project Specifications | BFshop Project Portal",
  "name": "Project Specifications | BFshop Project Portal",
  "description": "Project structure, dependencies, and next steps for BFshop.",
  "url": "https://benfosterdev.com/projects/bfshop/specifications",
  "datePublished": "2026-03-19",
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
  "mainEntityOfPage": "https://benfosterdev.com/projects/bfshop/specifications",
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
        "name": "Project Specifications",
        "item": "https://benfosterdev.com/projects/bfshop/specifications"
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
            <BackPillLink href="/projects/bfshop" />
          </section>

          <section className="page-header-stack page-header-tight text-center">
            <h1 className="font-inter text-5xl font-bold tracking-tight">Project Specifications</h1>
            <p className="mx-auto max-w-3xl card-body text-zinc-300">
              Technical spec sheet for BFShop covering architecture, tooling, delivery milestones, and quality safeguards.
            </p>
          </section>

          <section className="page-section-gap">
            <div className="mx-auto w-full max-w-5xl">
              <BFShopSpecificationsSheet />
            </div>
          </section>
        </div>
      </main>
    </>
    );
}
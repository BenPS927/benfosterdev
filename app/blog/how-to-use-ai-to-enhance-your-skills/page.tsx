import type { Metadata } from "next"
import Link from 'next/link'
import AIEnhance from "@/app/components/blogs/how-to-use-ai-to-enhance-your-skills";
import JsonLd from "@/app/components/shared/jsonld"

export const metadata: Metadata = {
  title: "How to Use AI to Enhance Your Skills | Ben Foster's Blog",
  description: "Learn how to leverage AI tools to improve your skills and productivity in various domains.",
}

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Use AI to Enhance Your Skills",
  "name": "How to Use AI to Enhance Your Skills",
  "description": "Learn how to leverage AI tools to improve your skills and productivity in various domains.",
  "url": "https://benfosterdev.com/blog/how-to-use-ai-to-enhance-your-skills",
  "datePublished": "2026-02-27",
  "author": {
    "@type": "Person",
    "name": "Ben Foster",
    "url": "https://benfosterdev.com"
  },
  "isPartOf": {
    "@type": "Blog",
    "name": "Ben Foster | Blog",
    "url": "https://benfosterdev.com/blog"
  },
  "mainEntityOfPage": "https://benfosterdev.com/blog/how-to-use-ai-to-enhance-your-skills",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "BF Blog",
        "item": "https://benfosterdev.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "How to Use AI to Enhance Your Skills",
        "item": "https://benfosterdev.com/blog/how-to-use-ai-to-enhance-your-skills"
      }
    ]
  }
}

export default function Aienhance () {
    return (
        <div className="relative p-4">
        <JsonLd schema={schema} />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-start">
        <Link
          href="/blog"
          className="inline-flex items-center rounded-full border border-neutral-900/15 bg-white px-4 py-2 font-inter text-sm font-semibold text-[#FFA500] shadow-sm transition hover:-translate-y-0.5 hover:border-orange-600 hover:text-orange-600"
        >
          Back
        </Link>
      </div>
           <div className="w-full flex flex-col lg:flex-row gap-0 lg:gap-24 p-2 lg:p-4">
                <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                    <img 
                        src="/bg1.png" 
                        alt="background" 
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>

        <div className="hidden lg:block w-1/3 p-2 lg:p-8"></div>
        <h1 className="w-full lg:w-1/3 p-6 text-center font-bebas text-5xl leading-[0.92] tracking-wide text-neutral-900 md:text-6xl lg:text-7xl">
                    <Link href="/blog" className="inline-block">
                        <span className="text-black">BF</span>
            <span className="text-[#FFA500]">blog</span>
                    </Link>
                </h1>
                <div className="w-1/3"></div>
           </div>
            <main className="flex flex-col justify-center items-center p-2 lg:p-6 bg-gray-100">
                <div className="w-full max-w-3xl mx-auto px-4 py-10 bg-white relative z-50 min-h-screen">
          <div className="text-center font-inter">
            <h1 className="font-bebas text-4xl leading-[0.92] tracking-wide text-neutral-900 md:text-5xl">How to Use AI to Enhance Your Skills</h1>
                        <br />
                        <p>Ben Foster</p>
                        <p>27th February 2026</p>
                        <p>7 min read</p>
                        <br />
                        <AIEnhance />
                    </div>
                </div>
            </main>
        </div>
    );
}
import WhyContent from './page-content'
import JsonLd from "../shared/jsonld"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Why Work With Ben",
  description: "Discover Ben Foster's philosophy on AI, automation, and building efficient business systems.",
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Why Work With Ben Foster",
  "description": "Discover Ben Foster's philosophy on AI, automation, and building efficient business systems.",
  "url": "https://benfosterdev.com#why",
  "author": {
    "@type": "Person",
    "name": "Ben Foster",
    "url": "https://benfosterdev.com",
    "jobTitle": "Web Developer and AI Builder"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Ben Foster",
    "url": "https://benfosterdev.com"
  },
  "mainEntity": {
    "@type": "Thing",
    "name": "AI-Enhanced Business Solutions",
    "description": "Ben Foster specializes in building AI and automation solutions for small businesses to increase efficiency and productivity."
  }
}

export function Why() {
    return (
        <div>
            <JsonLd schema={schema} />
            <WhyContent />
        </div>
    )
}
import Blogs2Content from './blogs2-page-content'
import JsonLd from "../shared/jsonld"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blogs",
  description: "Read in-depth insights about AI, automation, and web development from Ben Foster.",
}

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Ben Foster's Blog Collection",
  "description": "A collection of in-depth blogs and insights on AI, automation, and web development.",
  "url": "https://benfosterdev.com/blogs",
  "mainEntity": {
    "@type": "Person",
    "name": "Ben Foster",
    "url": "https://benfosterdev.com",
    "jobTitle": "Web Developer and AI Builder",
    "sameAs": [
      "https://www.linkedin.com/in/ben-foster-94394135a/",
      "https://github.com/BenPS927"
    ]
  },
  "hasPart": [
    {
      "@type": "Blog",
      "name": "Ben Foster's Blog",
      "url": "https://benfosterdev.com/blog",
      "description": "In-depth articles and technical insights"
    },
    {
      "@type": "ProfilePage",
      "name": "LinkedIn Profile",
      "url": "https://www.linkedin.com/in/ben-foster-94394135a/",
      "description": "Professional profile and conversation on LinkedIn"
    }
  ]
}

export function Blogs2Page() {
    return (
        <>
        <JsonLd schema={schema} />
        <Blogs2Content />
        </>
    )
}
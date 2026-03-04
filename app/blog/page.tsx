
import type { Metadata } from "next"
import BlogPageContent from "./blogpage";
import JsonLd from "../components/shared/jsonld"

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights and articles on AI, Web Development, and IT.",
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Ben Foster | Blog",
  "url": "https://benfosterdev.com/blog",
  "description": "Thoughts and insights on React development, AI chatbots, and the journey to freelance.",
  "author": {
    "@type": "Person",
    "name": "Ben Foster",
    "url": "https://benfosterdev.com"
  }
}

export default function BlogPage() {
   return (
    <div>
        <JsonLd schema={schema} />
        <BlogPageContent />
    </div>
   )
};
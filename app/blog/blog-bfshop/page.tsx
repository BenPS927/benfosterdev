import BFShopBlogContent from "./page-content";
import JsonLd from "../../components/shared/jsonld"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "BFshop Blog",
  description: "Follow the documented progress of BFshop, as I learn to build my first full stack AI enhanced business system.",
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "BFshop Blog",
  "description": "Documentation, updates, and technical articles for the BFshop project.",
  "url": "https://benfosterdev.com/blog/bfshop-blog-home",
  "author": {
    "@type": "Person",
    "name": "Ben Foster",
    "url": "https://benfosterdev.com"
  }
}



export default function BFShopBlog() {
    return (
        <div>
            <JsonLd schema={schema} />
            <BFShopBlogContent />
        </div>
    )
}
import BFShopPortalContent from "./page-content";
import JsonLd from "../../components/shared/jsonld"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "BFshop Project Portal",
  description: "Explore the BFshop portal, documentation, and ongoing project logbook from one central hub.",
}

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "BFshop Project Portal",
  "description": "Portal, documentation, updates, and technical references for the BFshop project.",
  "url": "https://benfosterdev.com/projects/bfshop",
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
      <BFShopPortalContent />
        </div>
    )
}
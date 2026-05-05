import type { Metadata } from "next"
import DesktopProjectsPage from "@/app/components/projects/desktop-projects-page"
import JsonLd from "../shared/jsonld"

export const metadata: Metadata = {
  title: "Projects",
  description: "Showcasing my progress as I learn to build AI enhanced business systems.",
}

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Ben Foster's Projects",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": "Expense Tracker",
        "description": "AI enhanced web project for tracking expenses.",
        "url": "https://benfosterdev.com/projects/expense-tracker",
        "author": {
          "@type": "Person",
          "name": "Ben Foster",
          "url": "https://benfosterdev.com"
        },
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "GBP"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "SoftwareApplication",
        "name": "BFshop",
        "description": "An online store featuring a customer and merchant interface, fully integrating AI and automation.",
        "url": "https://benfosterdev.com/projects/bfshop",
        "author": {
          "@type": "Person",
          "name": "Ben Foster",
          "url": "https://benfosterdev.com"
        },
        "applicationCategory": "ECommerceApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "GBP"
        }
      }
    }
  ]
}

export default function ProjectsPage() {
    return (
        <div id="projects">
            <JsonLd schema={schema} />
      <DesktopProjectsPage />
        </div>
        
    )
}
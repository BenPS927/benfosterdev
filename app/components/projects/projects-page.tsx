import type { Metadata } from "next"
import DesktopProjectsPage from "@/app/components/projects/desktop-projects-page"
import JsonLd from "../shared/jsonld"
import MobileProjectsPage from "@/app/components/projects/mobile-projects-page"

export const metadata: Metadata = {
  title: "Projects",
  description: "Showcasing my projects in AI, Web Development, and IT.",
}

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Expense Tracker",
  "description": "React and AI chatbot projects by Ben Foster, Bristol-based freelance developer. Built to solve real business problems.",
  "url": "https://benfosterdev.com/projects",
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

export default function ProjectsPage() {
    return (
        <div id="projects">
            <JsonLd schema={schema} />
            <div className="hidden lg:block">
                <DesktopProjectsPage />
            </div>
            <div className="block lg:hidden">
                <MobileProjectsPage />
            </div>
        </div>
        
    )
}
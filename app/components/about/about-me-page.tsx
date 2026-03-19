//this file has lifted state because the state is needed in multiple child components
//props passed from this file to child



import JsonLd from "../shared/jsonld"
import type { Metadata } from "next"
import ContentAboutMe from './contentaboutme';

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Ben Foster, a web developer specializing in AI and automation.",
}

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Ben Foster",
    "url": "https://benfosterdev.com",
    "jobTitle": "Web Developer and AI Builder",
    "description": "Self-taught web developer from Bristol, specialising in AI and automation for small businesses.",
    "sameAs": [
      "https://www.linkedin.com/in/ben-foster-94394135a/",
      "https://github.com/BenPS927"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "University of Bristol"
    }
  }
}

export function AboutMePage() {
  return ( 
    <div>
      <JsonLd schema={schema} />
      <ContentAboutMe />
    </div>
  )
}
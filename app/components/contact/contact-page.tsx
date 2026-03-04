
import type { Metadata } from "next";
import JsonLd from "../shared/jsonld"
import { ContentContact } from './contentcontact';

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ben Foster for collaboration or inquiries.",
}

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Ben Foster",
  "url": "https://benfosterdev.com/contact",
  "mainEntity": {
    "@type": "Person",
    "name": "Ben Foster",
    "url": "https://benfosterdev.com",
    "email": "your@email.com",
    "sameAs": [
      "https://www.linkedin.com/in/ben-foster-94394135a/",
      "https://github.com/BenPS927"
    ]
  }
}


export function ContactPage() {
    return (
        <>
        <JsonLd schema={schema} />
        <ContentContact />
        </>
    )
};


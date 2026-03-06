//root layout (app shell) for the entire app, shared across all pages and components
//wraps everuything in the app, including the header and footer, and provides a common layout for all pages
//fontsare imported here and made available globally via CSS variables, so they can be used throughout the app without needing to import them in each component or page


import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Oswald, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/shared/header";
import JsonLd from "./components/shared/jsonld";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400", // Required for Bebas Neue
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "700"], // Oswald requires weight specification
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ben Foster | React Developer & AI Chatbot Specialist",
    template: "%s | Ben Foster Dev",
  },
  description: "Bristol-based React developer specialising in AI chatbot development for small businesses. Building intelligent, automated web experiences with React and n8n.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ben Foster",
  "url": "https://benfosterdev.com",
  "jobTitle": "React Developer & AI Chatbot Specialist",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bristol",
    "addressCountry": "GB"
  },
  "sameAs": [
    "https://www.linkedin.com/in/ben-foster-94394135a/",
    "https://github.com/BenPS927"
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${oswald.variable} ${inter.variable} antialiased`}
      >
      <JsonLd schema={schema} />
        <Header />      
        {children}
        <Analytics />
      </body>
    </html>
  );
}

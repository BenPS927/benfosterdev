//root layout (app shell) for the entire app, shared across all pages and components
//wraps everuything in the app, including the header and footer, and provides a common layout for all pages
//fontsare imported here and made available globally via CSS variables, so they can be used throughout the app without needing to import them in each component or page


import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Oswald, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/shared/header";
import JsonLd from "./components/shared/jsonld";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "./components/footer/footer";

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
    default: "Ben Foster | React Developer & AI Builder",
    template: "%s | Ben Foster Dev",
  },
  description: "Bristol-based web developer building AI enhanced business systems.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ben Foster",
  "url": "https://benfosterdev.com",
  "jobTitle": "Web Developer and AI Builder",
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
      <head>
        
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8W26X8ZXWK"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8W26X8ZXWK');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${oswald.variable} ${inter.variable} antialiased`}
      >
      <JsonLd schema={schema} />
        <Header />      
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

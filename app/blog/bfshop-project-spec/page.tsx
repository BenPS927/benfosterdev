import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import type { Metadata } from "next"
import Link from 'next/link'
import BFShopProjectSpec from "@/app/components/blogs/bfshop-project-spec";
import JsonLd from "@/app/components/shared/jsonld"

export const metadata: Metadata = {
  title: "Project Specifications | Ben Foster's Blog",
  description: "Project structure, dependencies, and next steps for BFshop.",
}

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Project Specifications | BFshop Blog",
  "name": "Project Specifications | BFshop Blog",
  "description": "Project structure, dependencies, and next steps for BFshop.",
  "url": "https://benfosterdev.com/blog/bfshop-project-spec", // update to your actual URL
  "datePublished": "2026-03-19", // update to your actual publish date
  "author": {
    "@type": "Person",
    "name": "Ben Foster",
    "url": "https://benfosterdev.com"
  },
  "isPartOf": {
    "@type": "Blog",
    "name": "BFshop Blog",
    "url": "https://benfosterdev.com/blog/bfshop-blog-home"
  },
  "mainEntityOfPage": "https://benfosterdev.com/blog/bfshop-project-spec", // update to your actual URL
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "BFshop Blog",
        "item": "https://benfosterdev.com/blog/bfshop-blog-home"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Project Specifications",
        "item": "https://benfosterdev.com/blog/bfshop-project-spec"
      }
    ]
  }
}

export default function BFShopProjectSpecPage () {
    return (
        <div className="relative p-4">
        <JsonLd schema={schema} />
           <div className="w-full flex flex-col lg:flex-row gap-0 lg:gap-24 p-2 lg:p-4">
                <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                    <img 
                        src="/bg1.png" 
                        alt="background" 
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                
                <div className="hidden lg:block flex justify-center w-1/3 p-2 lg:p-8">
                    <Link href="/blog/bfshop-blog-home">
                        <ArrowBackIcon sx={{ 
                            fontSize: 60,
                            color: 'orange' }} />
                    </Link>
                </div>
                <h1 className="w-full lg:w-1/3 text-center font-inter font-bold [text-shadow:0_2px_6px_rgba(0,0,0,0.4)] text-3xl lg:text-6xl p-6">
                    <Link href="/blog" className="inline-block">
                        <span className="text-black">BF</span>
                        <span className="text-orange-500">blog</span>
                    </Link>
                </h1>
                <div className="w-1/3"></div>
           </div>
            <main className="flex flex-col justify-center items-center p-2 lg:p-6 bg-gray-100">
                <div className="w-full max-w-3xl mx-auto px-4 py-10 bg-white relative z-50 min-h-screen">
                    <div className="text-center font-inter">
                        <h1 className="text-xl font-bold">Project Specifications</h1>
                        <br />
                        <p> Details on the structure, dependencies, and next steps for BFshop.</p>
                        <br />
                        <p>Ben Foster</p>
                        <p>March 18th, 2026</p>
                        <p>1 min read</p>
                        <br />
                        <BFShopProjectSpec />
                    </div>
                </div>
            </main>
            <footer className="relative bg-gray-100 flex justify-between items-center p-4 lg:p-8 gap-8 w-full mt-8">
                <img src="/logo.png" alt="Logo" className="w-16 lg:w-32 h-6 lg:h-12 ml-6 lg:ml-12" />
                <p className="font-inter text-sm lg:text-normal text-orange-700">&copy; 2026 Ben Foster. All rights reserved.</p>
            </footer>
        </div>
    );
}
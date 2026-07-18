import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import type { Metadata } from "next"
import Link from 'next/link'
import BFShopBlogPost from "@/app/components/blogs/bfshop-blog-post";
import JsonLd from "@/app/components/shared/jsonld"

export const metadata: Metadata = {
  title: "Introduction to BFshop | Ben Foster's Blog",
  description: "In this article I lay the groundworks for my BF shop project, focusing on its basic structure and purposes.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Introduction to BFshop | BFshop Docs",
  "name": "Introduction to BFshop | BFshop Docs",
  "description": "In this article I lay the groundworks for my BF shop project, focusing on its basic structure and purposes.",
  "url": "https://benfosterdev.com/blog/blog-bfshop-1",
  "datePublished": "2026-07-05",
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
  "mainEntityOfPage": "https://benfosterdev.com/blog/blog-bfshop-1",
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
        "name": "Introduction to BFshop",
        "item": "https://benfosterdev.com/blog/blog-bfshop-1"
      }
    ]
  }
}
export default function BFShopBlog1 () {
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
                    <Link href="/blog/blog-bfshop">
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
                        <BFShopBlogPost />
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
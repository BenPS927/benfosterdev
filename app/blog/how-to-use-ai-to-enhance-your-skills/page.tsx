import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import type { Metadata } from "next"
import Link from 'next/link'
import AIEnhance from "@/app/components/blogs/how-to-use-ai-to-enhance-your-skills";
import type { Metadata } from "next";
import JsonLd from "@/app/components/shared/jsonld"

export const metadata: Metadata = {
  title: "How to Use AI to Enhance Your Skills | Ben Foster's Blog",
  description: "Learn how to leverage AI tools to improve your skills and productivity in various domains.",
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Ben Foster | Blog",
  "url": "https://benfosterdev.com/blog",
  "description": "Thoughts and insights on React development, AI chatbots, and the journey to freelance.",
  "author": {
    "@type": "Person",
    "name": "Ben Foster",
    "url": "https://benfosterdev.com"
  }
}

export const metadata: Metadata = {
  title: "How to Use AI to Enhance Your Skills",
  description: "Learn how to leverage AI tools to improve your professional skills.",
}

export default function Aienhance () {
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
                    <Link href="/blog">
                        <ArrowBackIcon sx={{ 
                            fontSize: 60,
                            color: 'orange' }} />
                    </Link>
                </div>
                <h1 className="w-full lg:w-1/3 text-center font-inter font-bold [text-shadow:0_2px_6px_rgba(0,0,0,0.4)] text-3xl lg:text-6xl p-6">
                    <Link href="/blog" className="inline-block">
                        <span className="text-black">BF</span>
                        <span className="text-orange-500">Blogs</span>
                    </Link>
                </h1>
                <div className="w-1/3"></div>
           </div>
            <main className="flex flex-col justify-center items-center p-2 lg:p-6 bg-gray-100">
                <div className="w-full max-w-3xl mx-auto px-4 py-10 bg-white relative z-50 min-h-screen">
                    <div className="text-center font-inter">
                        <h1 className="text-xl font-bold">How to Use AI to Enhance Your Skills</h1>
                        <br />
                        <p>Ben Foster</p>
                        <p>27th February 2026</p>
                        <p>7 min read</p>
                        <br />
                        <AIEnhance />
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
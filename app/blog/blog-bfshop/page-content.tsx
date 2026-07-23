'use client'
import { motion, AnimatePresence }  from 'framer-motion';
import Link from 'next/link';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { GitHub } from '@mui/icons-material';
import ArticleIcon from '@mui/icons-material/Article';


export default function BFShopBlogContent() {
    const pages = [
  {
    title: "Vision"
  },
  {
    title: "Architecture"
  },
  {
    title: "Data Foundations"
  },
  {
    title: "Vertical Slices"
  },
  {
    title: "API"
  },
  {
    title: "AI"
  },
  {
    title: "Automation"
  },
  {
    title: "Development Log"
  }
];
    
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                
                <img 
                    src="/bg1.png" 
                    alt="background image for bfshop-blog-home" 
                    className="w-full h-full object-cover opacity-20"
                />
            </div>
            
            <div className="relative mx-auto min-h-screen max-w-full px-4 pb-20 pt-2 lg:px-8 lg:pb-24 lg:pt-4 z-10 ">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-start">
                    <Link
                        href="/blog"
                        className="inline-flex items-center rounded-full border border-neutral-900/15 bg-white px-4 py-2 font-inter text-sm font-semibold text-[#FFA500] shadow-sm transition hover:-translate-y-0.5 hover:border-orange-600 hover:text-orange-600"
                    >
                        Back
                    </Link>
                </div>

                <div className="font-inter text-3xl text-center p-2 lg:p-4 flex items-center justify-center gap-4">
                    <h1 className="w-full lg:w-1/3 p-2 text-center font-bebas text-5xl leading-[0.92] tracking-wide text-neutral-900 md:text-6xl lg:text-7xl">
                        <Link href="/blog" className="inline-block">
                            <span className="text-black">BF</span>
                            <span className="text-[#FFA500]">Shop</span>
                        </Link>
                    </h1>
                </div>
                <main className="flex flex-col lg:flex-row p-4 lg:p-16 gap-none lg:gap-16 ">
                    <motion.div
                        initial={{x: 0, opacity: 0}}
                        animate={{x: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.4}}
                        className="w-full lg:w-1/3 lg:shrink-0 border-r p-4 lg:p-8 leading-relaxed lg:h-[50vh] space-y-4 ">
                        
                        <p className="font-inter leading-loose">
                            BF shop is an extensive project so its notes and discussions have their own blog section.<br />
                            Here you'll be able to follow along with its progress as a full business system, and mine as a developer.
                            The goal: Build an end to end e-commerce store, with customer and merchant interfaces, a backend, workflow automation, and AI enhancement.
                        </p>
                    </motion.div>
                    <div className="flex w-full flex-1 flex-wrap gap-4 lg:gap-6 lg:pl-6">
                    <motion.div 
                        layout
                        className="relative overflow-hidden bg-white w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(25%-1.125rem)] lg:flex-none lg:h-1/5 p-2 lg:p-6 rounded-lg shadow-md hover:shadow-lg flex flex-col justify-center items-center min-h-[200px] mt-4 scale-[0.94] origin-top">
                        <a 
                        href="https://github.com/BenPS927/BFshop"
                        target="_blank"
                        rel="noopener noreferrer">
                            <div className="absolute inset-0 flex items-center justify-center z-0">
                                <GitHub sx={{ 
                                    fontSize: 144, 
                                    color: 'orange',
                                    opacity: 0.2
                                }} />
                            </div>
                            <p className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center font-inter text-lg hover:text-orange-700 hover:scale-110 transition-transform duration-300 ease-out">Project Code</p>
                        </a>
                    </motion.div>
                    <motion.div 
                        layout
                        className="relative overflow-hidden bg-white w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(25%-1.125rem)] lg:flex-none lg:h-1/5 p-2 lg:p-6 rounded-lg shadow-md hover:shadow-lg flex flex-col justify-center items-center min-h-[200px] mt-4 scale-[0.94] origin-top">
                        <Link href="/blog/blog-bfshop-1">
                            <div className="absolute inset-0 flex items-center justify-center z-0">
                                <SmartToyIcon sx={{ 
                                    fontSize: 144, 
                                    color: 'orange',
                                    opacity: 0.2
                                }} />
                            </div>
                            <p className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center font-inter text-lg hover:text-orange-700 hover:scale-110 transition-transform duration-300 ease-out">Introduction to BFshop</p>
                        </Link>
                    </motion.div>
                    <motion.div 
                        layout
                        className="relative overflow-hidden bg-white w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(25%-1.125rem)] lg:flex-none lg:h-1/5 p-2 lg:p-6 rounded-lg shadow-md hover:shadow-lg flex flex-col justify-center items-center min-h-[200px] mt-4 scale-[0.94] origin-top">
                        <Link href="/blog/blog-bfshop-2">
                            <div className="absolute inset-0 flex items-center justify-center z-0">
                                <SmartToyIcon sx={{ 
                                    fontSize: 144, 
                                    color: 'orange',
                                    opacity: 0.2
                                }} />
                            </div>
                            <p className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center font-inter text-lg hover:text-orange-700 hover:scale-110 transition-transform duration-300 ease-out">Project Specifications</p>
                        </Link>
                    </motion.div>

                    <motion.div 
                        layout
                        className="relative overflow-hidden bg-white w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(25%-1.125rem)] lg:flex-none lg:h-1/5 p-2 lg:p-6 rounded-lg shadow-md hover:shadow-lg flex flex-col justify-center items-center min-h-[200px] mt-4 scale-[0.94] origin-top">
                        <Link href="/blog/blog-bfshop/progress-reports">
                            <div className="absolute inset-0 flex items-center justify-center z-0">
                                <ArticleIcon sx={{ 
                                    fontSize: 144, 
                                    color: 'orange',
                                    opacity: 0.2
                                }} />
                            </div>
                            <p className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center font-inter text-lg hover:text-orange-700 hover:scale-110 transition-transform duration-300 ease-out">Progress reports</p>
                        </Link>
                    </motion.div>
                        <div className="w-full space-y-2">
                        {pages.map((page) =>
                            page.title === 'Development Log' ? (
                                <Link
                                    key={page.title}
                                    href="/blog/blog-bfshop/development-log"
                                    className="block rounded-md bg-white p-2 font-inter hover:cursor-pointer hover:bg-orange-100"
                                >
                                    {page.title}
                                </Link>
                            ) : (
                                <div
                                    key={page.title}
                                    className="rounded-md bg-white p-2 font-inter hover:cursor-pointer hover:bg-orange-100"
                                >
                                    {page.title}
                                </div>
                            )
                        )}
                        </div>

                    </div>

                    </main>

            </div>
           

                   
               


        </>
    )
}
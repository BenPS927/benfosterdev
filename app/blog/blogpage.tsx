'use client'
import { motion, AnimatePresence }  from 'framer-motion';
import Link from 'next/link'
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { useState } from 'react'

export default function BlogPageContent() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)
    
    return (
        <>
            <div className="pointer-events-none fixed left-0 top-0 z-0 h-full w-full">
                <img 
                    src="/bg1.png" 
                    alt="background" 
                    className="h-full w-full object-cover opacity-20"
                />
            </div>
            <div className="relative z-10 mx-auto min-h-screen max-w-full p-4 lg:p-8">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-start">
                    <Link
                        href="/#blog-link"
                        className="inline-flex items-center rounded-full border border-neutral-900/15 bg-white px-4 py-2 font-inter text-sm font-semibold text-[#FFA500] shadow-sm transition hover:-translate-y-0.5 hover:border-orange-600 hover:text-orange-600"
                    >
                        Back
                    </Link>
                </div>

                <div className="mx-auto mt-6 flex w-full max-w-7xl items-center justify-center">
                    <h1 className="w-full text-center font-bebas text-5xl leading-[0.92] tracking-wide text-neutral-900 md:text-6xl lg:text-7xl">
                        <Link href="/blog" className="inline-block">
                            <span className="text-black">BF</span>
                            <span className="text-[#FFA500]">blog</span>
                        </Link>
                    </h1>
                </div>

                <p className="mx-auto mt-2 max-w-2xl text-center font-inter text-base text-gray-600 md:text-lg">AI, web dev, and IT insights</p>

                <main className="mt-8 flex flex-col p-4 lg:flex-row lg:gap-16 lg:p-8">
                    <motion.div
                        initial={{x: 0, opacity: 0}}
                        animate={{x: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.5}}
                        viewport={{ once: true }}
                        className="w-full space-y-4 p-4 leading-relaxed lg:h-[50vh] lg:w-1/3 lg:p-8"
                    >
                        <p className="font-inter text-xl font-semibold text-neutral-900">Welcome to my blog.</p>
                        <p className="font-inter leading-loose text-gray-600">
                            How is AI changing the world?
                            <br />
                            How can we use it to our advantage?
                            <br />
                            Where does it fit in with web development?
                            <br />
                            How do I build my projects? <br />
                            All of this is discussed here in BFblog.
                        </p>
                    </motion.div>

                    <motion.div    
                        initial={{x: 0, opacity: 0}}
                        animate={{x: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.5, delay: 0.1}}
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <div className="flex flex-col items-center gap-4 p-2 md:gap-12 lg:flex-row lg:items-stretch lg:gap-16 lg:p-8">
                            <motion.div 
                                layout
                                onMouseEnter={() => setHoveredCard(1)}
                                onMouseLeave={() => setHoveredCard(null)}
                                className="group relative flex min-h-[240px] w-full rounded-2xl border border-neutral-900/10 bg-white/95 p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md lg:min-h-[320px] lg:w-1/2 lg:p-8"
                            >
                                <Link href="/blog/how-to-use-ai-to-enhance-your-skills" className="flex h-full w-full flex-col items-center justify-between">
                                    <div className="absolute inset-0 flex items-center justify-center z-0">
                                        <SmartToyIcon sx={{ 
                                            fontSize: 170,
                                            color: '#FFA500',
                                            opacity: 0.14
                                        }} />
                                    </div>
                                    <p className="relative z-10 mb-3 font-inter text-center text-base font-semibold text-neutral-900 transition group-hover:text-orange-600 md:text-lg lg:mb-16">
                                        How to Use AI to Enhance Your Skills
                                    </p>
                                    <p className="font-inter text-center text-sm text-gray-600 lg:hidden">
                                        We are in the AI goldrush. <br /> Read this article to find out how to make <br />the most of it! <br /> Feb 25, 2026 · 8 min read
                                    </p>
                                    <AnimatePresence>
                                        {hoveredCard === 1 && 
                                            <motion.p layout
                                                initial={{y: -50, opacity: 0}}
                                                animate={{y: 0, opacity: 1}}
                                                transition={{duration: 0.2}}
                                                className="hidden font-inter text-center text-sm text-gray-600 lg:block">
                                                We are in the AI goldrush. 
                                                <br /> Read this article to find out how
                                                <br /> to make the most of it! 
                                                <br /> Feb 25, 2026 · 8 min read
                                            </motion.p>
                                        }
                                    </AnimatePresence>
                                </Link>
                            </motion.div>

                            <motion.div 
                                layout
                                onMouseEnter={() => setHoveredCard(2)}
                                onMouseLeave={() => setHoveredCard(null)}
                                className="group relative flex min-h-[240px] w-full rounded-2xl border border-neutral-900/10 bg-white/95 p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md lg:min-h-[320px] lg:w-1/2 lg:p-8"
                            >
                                <Link href="/blog/blog-bfshop" className="flex h-full w-full flex-col items-center justify-between">
                                    <div className="absolute inset-0 flex items-center justify-center z-0">
                                        <SmartToyIcon sx={{ 
                                            fontSize: 170,
                                            color: '#FFA500',
                                            opacity: 0.14
                                        }} />
                                    </div>
                                    <p className="relative z-10 mb-3 font-inter text-center text-base font-semibold text-neutral-900 transition group-hover:text-orange-600 md:text-lg lg:mb-16">
                                        How I&apos;m Approaching my First Full Stack Project and what makes it different
                                    </p>
                                    <p className="font-inter text-center text-sm text-gray-600 lg:hidden">
                                        I'm building my first full stack project <br /> Read this series to see my goals, architectural decisions, and progress. <br /> <br /> March 17th, 2026 · 8 min read
                                    </p>
                                    <AnimatePresence>
                                        {hoveredCard === 2 && 
                                            <motion.p layout
                                                initial={{y: -50, opacity: 0}}
                                                animate={{y: 0, opacity: 1}}
                                                transition={{duration: 0.2}}
                                                className="hidden font-inter text-center text-sm text-gray-600 lg:block">
                                                I'm building my first full stack project. 
                                                <br /> Read this article to see my goals, architectural decisions, and progress.
                                                <br /> March 17th, 2026 · 8 min read
                                            </motion.p>
                                        }
                                    </AnimatePresence>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </main>
            </div>
        </>
    )
}
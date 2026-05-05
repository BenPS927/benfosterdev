'use client'
import { motion, AnimatePresence }  from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { GitHub } from '@mui/icons-material';


export default function BFShopBlogContent() {
    const [hoveredBox, setHoveredBox] = useState(0)
    
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
                            <span className="text-[#FFA500]">blog</span>
                        </Link>
                    </h1>
                </div>
                <main className="flex flex-col lg:flex-row p-4 lg:p-16 gap-none lg:gap-16 ">
                    <motion.div
                        initial={{x: 0, opacity: 0}}
                        animate={{x: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.4}}
                        className="w-full lg:w-1/3 border-r p-4 lg:p-8 leading-relaxed lg:h-[50vh] space-y-4 ">
                        
                        <p className="font-inter leading-loose">
                            BF shop is an extensive project so its notes and discussions have their own blog section.<br />
                            Here you'll be able to follow along with its progress as a full business system, and mine as a developer.
                            The goal: Build an end to end e-commerce store, with customer and merchant interfaces, a backend, workflow autoamtion, and AI enhancement.
                        </p>
                    </motion.div>
                    <motion.div 
                        layout
                        onMouseEnter={() => setHoveredBox(1)}
                        onMouseLeave={() => setHoveredBox(0)}
                        className="  relative bg-white w-full md:w-1/2 lg:w-1/5 lg:h-1/5  p-2 lg:p-8 rounded-lg shadow-md hover:shadow-lg flex flex-col justify-center items-center min-h-[200px] mt-4">
                        <a 
                        href="https://github.com/BenPS927/BFshop"
                        target="_blank"
                        rel="noopener noreferrer">
                            <div className="absolute inset-0 flex items-center justify-center z-0">
                                <GitHub sx={{ 
                                    fontSize: 180, 
                                    color: 'orange',
                                    opacity: 0.2
                                }} />
                            </div>
                            <p className=" relative z-10 font-inter text-center text-lg mb-0 lg:mb-16 hover:text-orange-700 hover:scale-110">Project Code</p>
                            <p className="block lg:hidden font-inter text-center text-sm">
                                Take a look at the code on my GitHub
                            </p>
                            <AnimatePresence>
                                {hoveredBox === 1 && 
                                    <motion.p layout
                                        initial={{y: -50, opacity: 0}}
                                        animate={{y: 0, opacity: 1}}
                                        transition={{duration: 0.2}}
                                        className="font-inter text-center text-sm">
                                        Take a look at the code on my GitHub
                                    </motion.p>
                                }
                            </AnimatePresence>
                        </a>
                    </motion.div>
                    <motion.div 
                        layout
                        onMouseEnter={() => setHoveredBox(2)}
                        onMouseLeave={() => setHoveredBox(0)}
                        className="  relative bg-white w-full md:w-1/2 lg:w-1/5 lg:h-1/5  p-2 lg:p-8 rounded-lg shadow-md hover:shadow-lg flex flex-col justify-center items-center min-h-[200px] mt-4">
                        <Link href="/blog/blog-bfshop-1">
                            <div className="absolute inset-0 flex items-center justify-center z-0">
                                <SmartToyIcon sx={{ 
                                    fontSize: 180, 
                                    color: 'orange',
                                    opacity: 0.2
                                }} />
                            </div>
                            <p className=" relative z-10 font-inter text-center text-lg mb-0 lg:mb-16 hover:text-orange-700 hover:scale-110">1. Structure</p>
                            <p className="block lg:hidden font-inter text-center text-sm">
                                The structure of BFshop and how I plan to implement AI. March 17th, 2026 · 8 min read
                            </p>
                            <AnimatePresence>
                                {hoveredBox === 2 && 
                                    <motion.p layout
                                        initial={{y: -50, opacity: 0}}
                                        animate={{y: 0, opacity: 1}}
                                        transition={{duration: 0.2}}
                                        className="font-inter text-center text-sm">
                                        The structure of BFshop and how I plan to implement AI.
                                        <br /> March 17th, 2026 · 8 min read
                                    </motion.p>
                                }
                            </AnimatePresence>
                        </Link>
                    </motion.div>
                    <motion.div 
                        layout
                        onMouseEnter={() => setHoveredBox(3)}
                        onMouseLeave={() => setHoveredBox(0)}
                        className="  relative bg-white w-full md:w-1/2 lg:w-1/5 lg:h-1/5  p-2 lg:p-8 rounded-lg shadow-md hover:shadow-lg flex flex-col justify-center items-center min-h-[200px] mt-4">
                        <Link href="/blog/blog-bfshop-2">
                            <div className="absolute inset-0 flex items-center justify-center z-0">
                                <SmartToyIcon sx={{ 
                                    fontSize: 180, 
                                    color: 'orange',
                                    opacity: 0.2
                                }} />
                            </div>
                            <p className=" relative z-10 font-inter text-center text-lg mb-0 lg:mb-16 hover:text-orange-700 hover:scale-110">2. Project Specifications</p>
                            <p className="block lg:hidden font-inter text-center text-sm">
                                Project structure, dependencies, and next steps. March 18th, 2026 · 6 min read
                            </p>
                            <AnimatePresence>
                                {hoveredBox === 3 && 
                                    <motion.p layout
                                        initial={{y: -50, opacity: 0}}
                                        animate={{y: 0, opacity: 1}}
                                        transition={{duration: 0.2}}
                                        className="font-inter text-center text-sm">
                                        Project structure, dependencies, and next steps.
                                        <br /> March 18th, 2026 · 6 min read
                                    </motion.p>
                                }
                            </AnimatePresence>
                        </Link>
                    </motion.div>

                    </main>

            </div>
           

                   
               


        </>
    )
}
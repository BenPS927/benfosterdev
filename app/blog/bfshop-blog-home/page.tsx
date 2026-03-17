'use client'
import { motion, AnimatePresence }  from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function BFShopBlog() {
    const [isHovered, setIsHovered] = useState(false)
    
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                <img 
                    src="/bg1.png" 
                    alt="background" 
                    className="w-full h-full object-cover opacity-20"
                />
            </div>
            
            <div className="relative mx-auto max-w-full p-4 lg:p-8  relative min-h-screen z-10 ">
                <div className="font-inter text-3xl text-center p-4 lg:p-8  flex items-center justify-center gap-4">
                    <h1 className=" w-full lg:w-1/3 text-center font-inter font-bold [text-shadow:0_2px_6px_rgba(0,0,0,0.4)] text-3xl lg:text-6xl p-6">
                        <Link href="/blog" className="inline-block">
                            <span className="text-black">BF</span>
                            <span className="text-orange-500">blog</span>
                        </Link>
                    </h1>
                </div>
                <div className="hidden lg:block flex justify-center w-1/3 p-2 lg:p-8">
                    <Link href="/blog">
                        <ArrowBackIcon sx={{ 
                            fontSize: 60,
                            color: 'orange' }} />
                    </Link>
                </div>
                <main className="flex flex-col lg:flex-row p-4 lg:p-16 gap-none lg:gap-16 ">
                    <motion.div
                        initial={{x: 0, opacity: 0}}
                        animate={{x: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.4}}
                        className="w-full lg:w-1/3 border-r p-4 lg:p-8 leading-relaxed lg:h-[50vh] space-y-4 ">
                        
                        <p className="font-inter leading-loose">
                            As BF shop is an extensive project, I decided to put give its notes and discussion its own blog section. <br />
                            Here you'll be able to follow along with its progress as a full business system, and mine as a developer.
                            The goal: Build an end to end e-commerce store, with customer and merchant interfaces, a backend, workflow autoamtion, and AI enhancement.
                        </p>
                    </motion.div>
                    <motion.div 
                                layout
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="  relative bg-white w-full md:w-1/2 lg:w-1/5 lg:h-1/5  p-2 lg:p-8 rounded-lg shadow-md hover:shadow-lg flex flex-col justify-center items-center min-h-[200px] mt-4">
                                <Link href="/blog/bfshop-blog-actual">
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
                                        {isHovered && 
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

                    </main>

            </div>
           

                   
               

                <footer className="absolute bottom-0 bg-gray-200 flex justify-between items-center p-4 lg:p-8 gap-8 -mx-8 w-full">
                    <img src="/logo.png" alt="Logo" className="w-16 lg:w-32 h-6 lg:h-12 ml-6 lg:ml-12" />
                    <p className="font-inter text-sm lg:text-normal text-orange-700">&copy; 2026 Ben Foster. All rights reserved.</p>
                </footer>
            
        </>
    )
}
'use client'
import { motion, AnimatePresence }  from 'framer-motion';
import Link from 'next/link'
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { useState } from 'react'

export default function BlogPageContent() {
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
            <div className="relative mx-auto max-w-full p-4 lg:p-8  relative min-h-screen z-10">
                <div className="font-inter text-3xl text-center p-4 lg:p-8  flex items-center justify-center gap-4">
                    <h1 className=" w-full lg:w-1/3 text-center font-inter font-bold [text-shadow:0_2px_6px_rgba(0,0,0,0.4)] text-3xl lg:text-6xl p-6">
                        <Link href="/blog" className="inline-block">
                            <span className="text-black">BF</span>
                            <span className="text-orange-500">blog</span>
                        </Link>
                    </h1>
                </div>
                <p className="text-xl text-center">AI, Web Dev, and IT insights</p>
                <main className="flex flex-col lg:flex-row p-4 lg:p-8 gap-none lg:gap-16 ">
                    <motion.div
                        initial={{x: 0, opacity: 0}}
                        animate={{x: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.4}}
                        className="w-full lg:w-1/3 border-r p-4 lg:p-8 leading-relaxed lg:h-[50vh] space-y-4 ">
                        <p className="text-xl font-inter ">Welcome to my blog. </p>
                        <p className="font-inter leading-loose">
                            How is Ai changing the world? 
                            <br />
                            How can we use it to our advantage? 
                            <br />
                            Where does it fit in with web development? <br />
                            How do I build my projects? <br />
                            All of this is discussed here in BFblog.
                        </p>
                    </motion.div>

                    <motion.div    
                        initial={{x: 0, opacity: 0}}
                        animate={{x: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.4}}>
                        <div className="p-2 lg:p-16  flex flex-col lg:flex-row items-center gap-4 md:gap-12 lg:gap-16">
                            <motion.div 
                                layout
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="  relative bg-white lg:w-2/3 p-2 lg:p-8 rounded-lg shadow-md hover:shadow-lg flex flex-col justify-center items-center min-h-[200px]">
                                <Link href="/blog/how-to-use-ai-to-enhance-your-skills">
                                    <div className="absolute inset-0 flex items-center justify-center z-0">
                                        <SmartToyIcon sx={{ 
                                            fontSize: 180, 
                                            color: 'orange',
                                            opacity: 0.2
                                        }} />
                                    </div>
                                    <p className=" relative z-10 font-inter text-center text-lg mb-0 lg:mb-16 hover:text-orange-700 hover:scale-110">How to Use AI to Enhance Your Skills</p>
                                    <p className="block lg:hidden font-inter text-center text-sm">
                                        We are in the AI goldrush. <br /> Read this article to find out how to make <br />the most of it! <br /> Feb 25, 2026 · 8 min read
                                    </p>
                                    <AnimatePresence>
                                        {isHovered && 
                                            <motion.p layout
                                                initial={{y: -50, opacity: 0}}
                                                animate={{y: 0, opacity: 1}}
                                                transition={{duration: 0.2}}
                                                className="font-inter text-center text-sm">
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
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="  relative bg-white lg:w-2/3 p-2 lg:p-8 rounded-lg shadow-md hover:shadow-lg flex flex-col justify-center items-center min-h-[200px]">
                                <Link href="/blog/bfshop-blog-home">
                                    <div className="absolute inset-0 flex items-center justify-center z-0">
                                        <SmartToyIcon sx={{ 
                                            fontSize: 180, 
                                            color: 'orange',
                                            opacity: 0.2
                                        }} />
                                    </div>
                                    <p className=" relative z-10 font-inter text-center text-lg mb-0 lg:mb-16 hover:text-orange-700 hover:scale-110">How I'm Approaching my First Full Stack Project and what makes it different</p>
                                    <p className="block lg:hidden font-inter text-center text-sm">
                                        I'm building my first full stack project <br /> Read this series to see my goals, architectural decisions, and progress. <br /> <br /> March 17th, 2026 · 8 min read
                                    </p>
                                    <AnimatePresence>
                                        {isHovered && 
                                            <motion.p layout
                                                initial={{y: -50, opacity: 0}}
                                                animate={{y: 0, opacity: 1}}
                                                transition={{duration: 0.2}}
                                                className="font-inter text-center text-sm">
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

                <footer className="absolute bottom-0 bg-gray-200 flex justify-between items-center p-4 lg:p-8 gap-8 -mx-8 w-full">
                    <img src="/logo.png" alt="Logo" className="w-16 lg:w-32 h-6 lg:h-12 ml-6 lg:ml-12" />
                    <p className="font-inter text-sm lg:text-normal text-orange-700">&copy; 2026 Ben Foster. All rights reserved.</p>
                </footer>
            </div>
        </>
    )
}
//this file has lifted state because the state is needed in multiple child components
//props passed from this file to child

'use client'
import { useState } from 'react'
import { AboutMeBoxDesktop } from "./desktop-box-about-me";
import { aboutMeDesktop } from "./data/about-me-desktop"
import { motion, AnimatePresence } from 'framer-motion';

export default function AboutMeDesktop() {
    const [hoveredBox, setHoveredBox] = useState<number | null>(null)
    const firstStoryImages = aboutMeDesktop.find((box) => box.id === 1)?.images ?? []
    const secondStoryImages = ['/ps.jpg', '/PT.jpg']
    const thirdStoryImages = ['/lab.jpg']
    const fourthStoryImages = ['/server.jpg', '/download.webp']

     return (
         <div className="grid min-h-screen w-full grid-cols-12 grid-rows-12 gap-5 bg-[linear-gradient(180deg,#ececec_0%,#f5f5f5_100%)] p-12 lg:p-16">
                <h1 className="col-start-1 row-start-1 row-span-2 col-span-4 font-oswald text-4xl tracking-wide text-orange-600 lg:text-5xl">A bit about me...</h1>
                {aboutMeDesktop.map((box) => (
                    <motion.div 
                        key={box.id} 
                        className={`${box.position} font-inter text-gray-700 hover:z-50`}
                        initial={{x: box.startX, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{ duration: box.duration, ease: "easeOut", delay: box.delay }}
                        viewport={{once: true, amount: 0.1}}
                        onMouseEnter={() => setHoveredBox(box.id)}
                        onMouseLeave={() => setHoveredBox(null)}
                    >
                        <AboutMeBoxDesktop text={box.text} />
                        
                                            
                    </motion.div>
                ))}
                <div className="pointer-events-none col-start-8 col-span-5 row-start-1 row-span-7 hidden grid-cols-2 gap-4 lg:grid">
                    {firstStoryImages.map((image, index) => (
                        <motion.div
                            key={image}
                            className={`${index === 2 ? 'col-span-2 mx-auto w-2/3' : ''} ${index === 0 ? '-rotate-2' : index === 1 ? 'rotate-2' : '-rotate-1'}`}
                            animate={{
                                opacity: hoveredBox === 1 ? 0.95 : 0.25,
                                scale: hoveredBox === 1 ? 1 : 0.78,
                                y: hoveredBox === 1 ? 0 : 12
                            }}
                            transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.05 }}
                        >
                            <img
                                src={image}
                                alt="Travel memory"
                                className="h-36 w-full rounded-xl object-cover shadow-sm lg:h-44"
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="pointer-events-none col-start-8 col-span-5 row-start-4 row-span-4 hidden grid-cols-2 gap-4 lg:grid">
                    {secondStoryImages.map((image, index) => (
                        <motion.div
                            key={image}
                            className={index === 0 ? '-rotate-1' : 'rotate-2'}
                            animate={{
                                opacity: hoveredBox === 2 ? 0.95 : 0.22,
                                scale: hoveredBox === 2 ? 1 : 0.78,
                                y: hoveredBox === 2 ? 0 : 12
                            }}
                            transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.05 }}
                        >
                            <img
                                src={image}
                                alt="IT learning memory"
                                className="h-32 w-full rounded-xl object-cover shadow-sm lg:h-40"
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="pointer-events-none col-start-9 col-span-4 row-start-6 row-span-3 hidden grid-cols-1 gap-4 lg:grid">
                    {thirdStoryImages.map((image) => (
                        <motion.div
                            key={image}
                            className="-rotate-2"
                            animate={{
                                opacity: hoveredBox === 3 ? 0.95 : 0.22,
                                scale: hoveredBox === 3 ? 1 : 0.78,
                                y: hoveredBox === 3 ? 0 : 12
                            }}
                            transition={{ duration: 0.35, ease: 'easeOut' }}
                        >
                            <img
                                src={image}
                                alt="Home lab setup"
                                className="h-36 w-full rounded-xl object-cover shadow-sm lg:h-44"
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="pointer-events-none col-start-8 col-span-5 row-start-7 row-span-4 hidden grid-cols-2 gap-4 lg:grid">
                    {fourthStoryImages.map((image, index) => (
                        <motion.div
                            key={image}
                            className={index === 0 ? '-rotate-1' : 'rotate-1'}
                            animate={{
                                opacity: hoveredBox === 4 ? 0.95 : 0.22,
                                scale: hoveredBox === 4 ? 1 : 0.78,
                                y: hoveredBox === 4 ? 0 : 12
                            }}
                            transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.05 }}
                        >
                            <img
                                src={image}
                                alt="Infrastructure and platform tools"
                                className="h-32 w-full rounded-xl object-cover shadow-sm lg:h-40"
                            />
                        </motion.div>
                    ))}
                </div>
                 </div>
    )
}

//this file has lifted state because the state is needed in multiple child components
//props passed from this file to child

'use client'
import { useState } from 'react'
import { AboutMeBoxDesktop } from "../../other/about-me-box-desktop";
import { aboutMeDesktop } from "../../data/about-me-desktop"
import { motion } from 'framer-motion';

export default function AboutMeDesktop() {
    const [hoveredBox, setHoveredBox] = useState<number | null>(null)

     return (
         <div className="grid grid-cols-12 grid-rows-12 gap-4 p-16 min-h-screen w-full bg-gradient-to-b from-white to-gray-200">
                <h1 className="col-start-1 col-span-4 row-start-1 row-span-2 font-oswald text-4xl text-orange-500"> A bit about me...</h1>
                {aboutMeDesktop.map((box) => (
                    <motion.div 
                        key={box.id} 
                        className={`${box.position} hover:z-50`}
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
                
        </div>
    )
}
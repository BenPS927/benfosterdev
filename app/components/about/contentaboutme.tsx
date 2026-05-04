'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import AboutMeDesktop from './desktop-about-me';
import AboutMeMobile from './mobile-about-me';


export default function ContentAboutMe() {
    
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

    return (
    
            <div
                id="about"
                ref={sectionRef}
                className="mx-auto"
            >
            <div className="hidden lg:block">
                    <AboutMeDesktop />
            </div>
            <div className="block lg:hidden">
                <AboutMeMobile />
            </div>
            </div>

)
}
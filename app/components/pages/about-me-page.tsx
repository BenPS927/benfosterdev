//this file has lifted state because the state is needed in multiple child components
//props passed from this file to child

'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import AboutMeDesktop from './desktop-pages/about-me';
import AboutMeMobile from './mobile-pages/about-me';

export function AboutMePage() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

    return (
        <motion.div
            id="about"
            ref={sectionRef}
            className="mx-auto ml-0 lg:ml-2 mr-0 lg:mr-2 mt-0 lg:mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1.2 }}
        >
            <div className="hidden lg:block">
                <AboutMeDesktop />
            </div>
            <div className="block lg:hidden">
                <AboutMeMobile />
            </div>
        </motion.div>
    )
}
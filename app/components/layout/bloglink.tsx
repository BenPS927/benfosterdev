'use client'
import Link from 'next/link'
import { motion } from 'framer-motion';

export function BlogLink() {
    return (
        <motion.div



                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 1 }}
                id="blog-link"
                className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-8 p-3 lg:flex-row lg:justify-between lg:gap-10 lg:p-8">
                <p className="w-full lg:w-1/3 font-oswald text-4xl leading-[0.95] tracking-wide text-[#FFA500] lg:text-6xl">I also write blogs...</p>
                
                <div className="w-full lg:w-auto flex justify-center">
                    <motion.div 
                        animate={{ x: [-50, 50] }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                        style={{ willChange: "transform" }}>
                          <Link href="/blog" className="group flex items-center justify-center rounded-2xl border border-neutral-900/15 bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-orange-600 h-24 w-24 lg:h-48 lg:w-48">
                                <p className="font-inter text-2xl font-bold text-[#FFA500] group-hover:text-orange-600 transition">BFBlog</p>
                           </Link>
                    </motion.div>
                </div>
                
            </motion.div>

    )
}
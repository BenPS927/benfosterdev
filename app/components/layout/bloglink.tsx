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
                className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-8 p-3 lg:flex-row lg:justify-between lg:gap-10 lg:p-8">
                <p className="w-full lg:w-1/3 font-bebas text-4xl leading-[0.95] tracking-wide text-orange-600 lg:text-6xl">I also write blogs...</p>
                
                <div className="w-full lg:w-auto flex justify-center">
                    <motion.div 
                        animate={{ x: [-50, 50] }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                        className="rounded-xl"
                        style={{ willChange: "transform" }}>
                          <Link href="/blog" className="group flex justify-center rounded-xl p-2 transition">
                              <div className="relative h-24 w-24 overflow-hidden rounded-md lg:h-48 lg:w-48">
                                <img
                                  src="/bg3.jpg"
                                  alt="background"
                                  className="h-full w-full object-cover opacity-45 transition duration-300 group-hover:scale-105"
                                />
                                <p className="absolute inset-0 flex items-center justify-center font-inter text-2xl font-bold text-orange-600">
                                  BFBlog
                                </p>
                              </div>
                           </Link>
                    </motion.div>
                </div>
                
            </motion.div>

    )
}
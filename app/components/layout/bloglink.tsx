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
                className="flex flex-col lg:flex-row justify-center items-center p-2 lg:p-8 space-y-8">
                <p className="font-bebas text-3xl lg:text-6xl w-full lg:w-1/3 font-bold text-orange-600">I also write blogs...</p>
                
                <div className="w-full lg:w-auto flex justify-center">
                    <motion.div 
                        animate={{ x: [-50, 50] }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                        className="rounded-md"
                        style={{ willChange: "transform" }}>
                           <Link href="/blog" className="flex justify-center">
                              <div className="relative h-24 w-24 lg:h-48 lg:w-48">
                                <img
                                  src="/bg3.jpg"
                                  alt="background"
                                  className="h-full w-full object-cover rounded-md opacity-40"
                                />
                                <p className="absolute inset-0 flex items-center justify-center font-inter text-orange-600 font-bold text-2xl">
                                  BFBlog
                                </p>
                              </div>
                           </Link>
                    </motion.div>
                </div>
                
            </motion.div>

    )
}
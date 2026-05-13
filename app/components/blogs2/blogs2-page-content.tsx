"use client";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Blogs2Content() {
    return (
    <main className="min-h-screen w-full bg-[linear-gradient(180deg,#eaeaea_0%,#f2f2f2_45%,#fafafa_100%)] px-4 py-6 text-neutral-950 sm:px-5 md:px-6 md:py-8 lg:px-8 space-y-2 ">
            <section className="mx-auto flex flex-col md:grid w-full max-w-7xl gap-8 sm:gap-10 lg:min-h-[calc(60vh-8rem)] lg:grid-cols-4 lg:grid-rows-1 lg:gap-x-12 lg:gap-y-10 mt-8 mb-8">
              <div className="flex items-center justify-center pt-2 sm:pt-4 lg:col-start-1 lg:col-end-3 " >
                <motion.h2
                  initial={{ opacity: 0.5, x: 192 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.16, ease: 'easeOut' }}
                  className="font-bebas text-5xl leading-[0.92] text-center tracking-wide text-neutral-900 drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)] sm:text-6xl md:text-7xl"
                >
                  Read in more depth about what I&apos;m doing
                </motion.h2>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="hidden md:flex items-center justify-center h-full "
              >
                
                  <ArrowForwardIosIcon sx={{fontSize: 96, 
                                            color: "#FFA500"
                                          }}/>
                
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 0.06 }}
                className="flex w-full h-full max-w-sm self-stretch items-center justify-center"
              >
                <Link href="/blog" className="group flex h-24 w-24 items-center justify-center rounded-2xl border border-neutral-900/15 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] ring-1 ring-white/40 transition duration-300 hover:-translate-y-0.5 hover:border-orange-600 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] lg:h-48 lg:w-48">
                  <p className="font-inter text-2xl font-bold text-[#FFA500] transition group-hover:text-orange-600">BFBlog</p>
                </Link>
              </motion.div>
            </section>
            <section className="order-2 md:order-1 mx-auto flex flex-col md:grid w-full max-w-7xl gap-8 sm:gap-10 md:grid-rows-1 lg:min-h-[calc(60vh-8rem)] lg:grid-cols-4 lg:grid-rows-1 lg:gap-x-12 lg:gap-y-10 mt-8 mb-8 md:grid-cols-4">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="order-2 md:order-1 flex items-center justify-center pt-2 sm:pt-4 "
              >
                <a
                  href="https://www.linkedin.com/in/ben-foster-94394135a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LinkedIn profile"
                  className="group flex h-24 w-24 items-center justify-center rounded-2xl border border-neutral-900/15 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] ring-1 ring-white/40 transition duration-300 hover:-translate-y-0.5 hover:border-orange-600 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] lg:h-48 lg:w-48"
                >
                  <LinkedInIcon sx={{ fontSize: 96, color: '#FFA500' }} className="transition group-hover:text-orange-600" />
                </a>
                       
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 0.06 }}
                className="hidden md:flex md:order-2 items-center justify-center h-full "
              >
                
                  <ArrowBackIosIcon sx={{fontSize: 96, 
                                            color: "#FFA500"
                                          }}/>
                
              </motion.div>
              <div className="order-1 md:order-3 flex items-center justify-center pt-2 sm:pt-4 md:col-start-3 md:col-end-5 lg:col-start-3 lg:col-end-5 " >
                <motion.h2
                  initial={{ opacity: 0.5, x: -192 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.16, ease: 'easeOut' }}
                  className="font-bebas text-5xl leading-[0.92] text-center tracking-wide text-neutral-900 drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)] sm:text-6xl md:text-7xl"
                >
                  Or get involved in the conversation on LinkedIn
                </motion.h2>
              </div>
              
            </section>
        </main>
    )
}
"use client";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

export default function Blogs2Content() {
    return (
    <main className="min-h-screen w-full bg-[linear-gradient(180deg,#f2f2f2_0%,#f5f5f5_45%,#f8f8f8_100%)] px-4 py-6 text-neutral-950 sm:px-5 md:px-6 md:py-8 lg:px-8 space-y-2 ">
            <section className="mx-auto flex flex-col md:grid w-full max-w-7xl gap-8 sm:gap-10 lg:min-h-[calc(60vh-8rem)] lg:grid-cols-4 lg:grid-rows-1 lg:gap-x-12 lg:gap-y-10 mt-8 mb-8">
              <div className="flex items-center justify-center pt-2 sm:pt-4 lg:col-start-1 lg:col-end-3 " >
                <h2 className="font-bebas text-5xl leading-[0.92] text-center tracking-wide text-neutral-900 sm:text-6xl md:text-7xl">
                  Read in more depth about what I&apos;m doing
                </h2>
              </div>
              
              <div className="hidden md:flex items-center justify-center h-full ">
                
                  <ArrowForwardIosIcon sx={{fontSize: 96, 
                                            color: "#FFA500"
                                          }}/>
                
              </div>
              <div className="flex w-full h-full max-w-sm self-stretch items-center justify-center">
                <Link href="/blog" className="group flex items-center justify-center rounded-2xl border border-neutral-900/15 bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-orange-600 h-24 w-24 lg:h-48 lg:w-48">
                  <p className="font-inter text-2xl font-bold text-[#FFA500] transition group-hover:text-orange-600">BFBlog</p>
                </Link>
              </div>
            </section>
            <section className="order-2 md:order-1 mx-auto flex flex-col md:grid w-full max-w-7xl gap-8 sm:gap-10 md:grid-rows-1 lg:min-h-[calc(60vh-8rem)] lg:grid-cols-4 lg:grid-rows-1 lg:gap-x-12 lg:gap-y-10 mt-8 mb-8 md:grid-cols-4">
              <div className="order-2 md:order-1 flex items-center justify-center pt-2 sm:pt-4 " >
                <a
                  href="https://www.linkedin.com/in/ben-foster-94394135a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LinkedIn profile"
                  className="group flex items-center justify-center rounded-2xl border border-neutral-900/15 bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-orange-600 h-24 w-24 lg:h-48 lg:w-48"
                >
                  <LinkedInIcon sx={{ fontSize: 96, color: '#FFA500' }} className="transition group-hover:text-orange-600" />
                </a>
                       
              </div>
              <div className="hidden md:flex md:order-2 items-center justify-center h-full ">
                
                  <ArrowBackIosIcon sx={{fontSize: 96, 
                                            color: "#FFA500"
                                          }}/>
                
              </div>
              <div className="order-1 md:order-3 flex items-center justify-center pt-2 sm:pt-4 md:col-start-3 md:col-end-5 lg:col-start-3 lg:col-end-5 " >
                <h2 className="font-bebas text-5xl leading-[0.92] text-center tracking-wide text-neutral-900 sm:text-6xl md:text-7xl">
                  Or get involved in the conversation on LinkedIn
                </h2>
              </div>
              
            </section>
        </main>
    )
}
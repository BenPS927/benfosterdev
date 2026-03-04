'use client'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';
import type { Metadata } from "next";
import JsonLd from "../shared/jsonld"

export function ContentContact() {
    return (
        <div id="contact" className="mx-auto bg-gradient-to-b from-orange-100 to-white max-w-full">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once:true}}
                transition={{ duration: 1.2 }}
                className="flex flex-col items-center space-y-16 p-4 lg:p-8"
            >
                <h1 className="font-oswald text-4xl lg:text-6xl mt-8text-center">Get in touch</h1>
                
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once:true}}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="font-oswald text-xl lg:text-2xl text-center text-stone-500"
                >
                    Interested in working together? Reach out
                </motion.h2>
                
                <main className="p-2 lg:p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once:true}}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        className="flex gap-8 space-y-8 lg:space-y-16 p-2 lg:p-8"
                    >
                        <div className="w-1/3"></div>
                        <p className="flex justify-center p-8 w-1/3 font-inter cursor-pointer text-xl text-slate-600">benfoster935@gmail.com</p>
                        <div className="w-1/3"></div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once:true}}
                        transition={{ duration: 1.4, delay: 0.5 }}
                        className="flex flex-wrap justify-center p-2 lg:p-4"
                    >
                        <div className="gap-8 lg:gap-128 flex flex-row">
                            <div className="justify-center">
                                <a 
                                    href="https://www.linkedin.com/in/ben-foster-94394135a/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <LinkedInIcon sx={{ 
                                        fontSize: { xs: 60, lg: 120 }, 
                                        color: '#0A66C2', '&:hover': { color: '#004182',
                                        transform: 'scale(1.1)' },
                                        cursor: 'pointer',
                                        transition: 'color 0.7s, transform 0.4s' }} />
                                </a>
                            </div>
                            <div>
                                 <a 
                                    href="https://github.com/BenPS927"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <GitHubIcon sx={{ 
                                    fontSize: { xs: 60, lg: 120 }, 
                                    color: '#181717', '&:hover': { color: '#e5e0ed',
                                    transform: 'scale(1.1)' }, 
                                    cursor: 'pointer', 
                                    transition: 'color 0.7s, transform 0.4s' }} />
                                    </a>
                            </div>
                        </div>
                    </motion.div>
                </main>
                
              
            </motion.div>
        </div>
        )
        };
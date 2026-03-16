'use client'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';
import type { Metadata } from "next";
import JsonLd from "../shared/jsonld";
import { useState } from 'react'

export function ContentContact() {

    const [query, setQuery] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();  // stops page reload on form submit

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query, email }),
        });

        if (response.ok) {
            // show success message
        } else {
        // show error message
        }
        ;}


    return (
        <div id="contact" className=" mx-auto bg-gradient-to-b from-orange-100 to-white max-w-full">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once:true}}
                transition={{ duration: 1.2 }}
                className=" flex flex-col items-center space-y-16 p-4 lg:p-8"
            >
                <h1 className="font-bebas text-4xl lg:text-6xl mt-8 text-center">Get in touch</h1>
                
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once:true}}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="font-oswald text-xl lg:text-2xl text-center text-stone-500"
                >
                    Interested in working together? Reach out
                </motion.h2>
                
                <main className=" p-2 lg:p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once:true}}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        className="flex gap-8 space-y-8 lg:space-y-16 p-2 lg:p-8"
                    >   <div className=" w-full flex justify-center items-center">
                        <form 
                            id="contact-form"
                            onSubmit={handleSubmit}
                            >
                                <div className=" p-2 flex ">
                                    <div className=" p-2">
                                        <p className="font-oswald text-xl lg:text-2xl text-center text-stone-500"> Query:</p>
                                    </div>
                                    <input 
                                        className=" min-w-[100px] lg:min-w-[500px] min-h-[100] lg:min-h-[200px] bg-white rounded-md shadow-lg"
                                        type="text"
                                        value={query}
                                        onChange={e => setQuery(e.target.value)}/>
                                        
                                    
                                </div>
                                <div className=" p-2 flex">
                                    <div className=" p-2">
                                        <p className="font-oswald text-xl lg:text-2xl text-center text-stone-500 "> Email:</p>
                                    </div>
                                    <input 
                                        className=" min-w-[100px] lg:min-w-[500px] min-h-[50px] bg-white rounded-md shadow-lg"
                                        type="text"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}/>
                                </div>
                                <button 
                                    type="submit"
                                    className=" p-2 rounded-md w-full  ">
                                        <p className="font-inter text-center rounded-md bg-orange-300 cursor-pointer active:scale-95 transition-transform duration-200">Send</p>
                                    </button>
                        </form>
                        </div>
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
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        <div id="contact" className="mx-auto bg-[linear-gradient(180deg,#f5f5f5_0%,#ececec_100%)] max-w-full">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mx-auto flex max-w-7xl flex-col items-center space-y-8 p-4 lg:p-12"
            >
                <div className="space-y-4 text-center">
                    <h1 className="font-bebas text-5xl leading-[0.92] tracking-wide text-neutral-900 md:text-6xl lg:text-7xl">Get in touch</h1>
                    <p className="mx-auto max-w-xl font-inter text-base leading-relaxed text-gray-600 md:text-lg">
                        Interested in working together? Reach out via the form or find me on socials.
                    </p>
                </div>

                <main className="w-full max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <form
                            id="contact-form"
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >
                            <div className="flex flex-col gap-1">
                                <label className="font-inter text-sm font-medium text-gray-600">Query</label>
                                <textarea
                                    className="min-h-[140px] w-full rounded-xl border border-neutral-900/10 bg-white px-4 py-3 font-inter text-sm text-neutral-900 shadow-sm outline-none transition focus:border-orange-300 focus:ring-1 focus:ring-orange-200"
                                    value={query}
                                    onChange={e => setQuery(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="font-inter text-sm font-medium text-gray-600">Email</label>
                                <input
                                    className="w-full rounded-xl border border-neutral-900/10 bg-white px-4 py-3 font-inter text-sm text-neutral-900 shadow-sm outline-none transition focus:border-orange-300 focus:ring-1 focus:ring-orange-200"
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full rounded-full bg-orange-600 px-6 py-3 font-inter text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700 active:scale-95"
                            >
                                Send
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-8 flex justify-center gap-6"
                    >
                        <a
                            href="https://www.linkedin.com/in/ben-foster-94394135a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-neutral-900/15 px-4 py-2 font-inter text-sm text-gray-600 transition hover:border-[#0A66C2]/40 hover:text-[#0A66C2]"
                        >
                            <LinkedInIcon sx={{ fontSize: 18 }} />
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/BenPS927"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-neutral-900/15 px-4 py-2 font-inter text-sm text-gray-600 transition hover:border-neutral-900/40 hover:text-neutral-950"
                        >
                            <GitHubIcon sx={{ fontSize: 18 }} />
                            GitHub
                        </a>
                    </motion.div>
                </main>

            </motion.div>
        </div>
        );
        };
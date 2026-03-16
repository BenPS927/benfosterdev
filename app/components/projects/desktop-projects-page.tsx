'use client'

import { CodeExpenseTracker } from "./code-expense-tracker"
import { motion } from 'framer-motion'
import { ETDesc, ETCode, ShopLink, ShopDesc } from "./components"
import { ExpenseTracker } from "./expense-tracker"
import { useState } from 'react'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function DesktopProjectsPage() {
    const [panel, setPanel] = useState(1)

    return (
        <div className="mx-auto bg-gradient-to-b from-white to-orange-100 p-4">
            <div className="space-y-16">
                <motion.h1
                    initial={{ x: -600, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.3 }}
                    className="text-8xl font-bebas flex justify-center font-bold"
                >
                    Projects
                </motion.h1>

                <motion.h2
                    initial={{ x: 600, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.3 }}
                    className="text-normal lg:text-xl font-oswald flex justify-center text-stone-500"
                >
                    This is where you'll find the project I'm currently working on, and the ones I've completed
                </motion.h2>

                <p className="font-oswald text-normal lg:text-xl text-stone-500 text-center">
                    Click the buttons below to scroll my projects
                </p>

                <div className="flex justify-center items-center gap-4">
                    <button
                        onClick={() => setPanel(Math.max(panel - 1, 0))}
                        className=" p-6 h-24 w-24 rounded-md shadow-lg bg-white transition-transform flex justify-center items-center active:scale-95  duration-200"
                    >
                        <KeyboardDoubleArrowLeftIcon sx={{ 
                        color: "orange",
                        fontSize: 64
                     }}/>
                    </button>

                    <button
                        onClick={() => setPanel(Math.min(panel + 1, 1))}
                        className=" p-6 h-24 w-24 rounded-md shadow-lg bg-white transition-transform flex justify-center items-center active:scale-95  duration-200"
                    >
                        <KeyboardDoubleArrowRightIcon sx={{ 
                        color: "orange",
                        fontSize: 64
                     }}/>
                    </button>
                </div>
            </div>

            <motion.div
                initial={{ x: -600, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden w-full p-2"
            >
                <div
                    className="flex flex-row transition-transform duration-300"
                    style={{ transform: `translateX(-${panel * 100}%)` }}
                >
                    <div className="w-full shrink-0 flex gap-20 p-2">
                        <div className="w-1/3">
                            <ETDesc />
                        </div>

                        <div className="w-1/3">
                            <ExpenseTracker />
                        </div>

                        <div className="w-1/3 text-center flex justify-center items-center">
                            <ETCode />
                        </div>
                    </div>

                    <div className="w-full shrink-0 flex gap-20 p-2">
                        <div className="w-1/3 flex justify-center items-center">
                            <ShopDesc />
                        </div>

                        <div className="w-1/3 flex justify-center items-center">
                            <ShopLink />
                        </div>

                        <div className="w-1/3 text-center flex justify-center items-center">
                            Code coming soon
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
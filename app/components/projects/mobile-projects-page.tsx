'use client'

import { ExpenseTracker } from "./expense-tracker";
import { CodeExpenseTracker } from "./code-expense-tracker"
import { AnimatePresence, motion } from "framer-motion";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useState } from 'react';
import { ETDesc, ETCode, ShopLink, ShopDesc } from "./components"


export default function MobileProjectsPage() {

    const [panel, setPanel] = useState(1)

    return (
        <div className="flex flex-col overflow-x-hidden items-center space-y-8 bg-gradient-to-b from-white to-orange-100 ">
            <motion.h1 
                initial={{x: -200, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                viewport={{ once:true, amount: 0.1}}
                transition={{ duration: 0.2}}
                className="text-4xl font-bebas mb-8">Projects
            </motion.h1>
            <motion.h2 
                initial={{x: 200, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                viewport={{ once:true, amount: 0.1}}
                transition={{ duration: 0.5, delay: 0.3}}
                className="font-inter mt-8 mb-8">This is where you'll find my projects.
            </motion.h2>
            <>
            <div className="flex justify-center items-center gap-4">
                    <button
                        onClick={() => setPanel(Math.max(panel - 1, 0))}
                        className=" p-6 h-12 w-12 rounded-md shadow-lg bg-white hover:scale-110 transition-transform flex justify-center items-center cursor-pointer"
                    >
                        <KeyboardDoubleArrowLeftIcon sx={{ 
                        color: "orange",
                        fontSize: 64
                     }}/>
                    </button>

                    <button
                        onClick={() => setPanel(Math.min(panel + 1, 1))}
                        className=" p-6 h-12 w-12 rounded-md shadow-lg bg-white hover:scale-110 transition-transform flex justify-center items-center cursor-pointer"
                    >
                        <KeyboardDoubleArrowRightIcon sx={{ 
                        color: "orange",
                        fontSize: 64
                     }}/>
                    </button>
                    </div>
            <div className="w-screen overflow-hidden ">
                <div
                    className="flex flex-row transition-transform duration-300"
                     style={{ transform: `translateX(-${panel * 100}%)` }}
                    
                >
                    <div className="w-screen shrink-0  flex flex-col space-y-8">
                        <h3 className="text-center font-inter leading-[2]">This is my expense tracker project.</h3>
                        <ExpenseTracker />
                    </div>
                    <div className=" w-screen shrink-0  flex flex-col">
                        <div className="text-center ">
                            <h3 className="text-center font-inter leading-[2] text-xl">This is BFShop. </h3>
                            <br />
                            <p className="text-center font-inter leading-[2] mb-4">When complete, BFShop will be an entire business system with an AI chatbot for customers, and automation-driven workflows controlling the merchant interface</p>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-24 ">
                            <ShopLink />
                        </div>
                    </div>
                </div>
            </div>
            </>
        </div>
        
    )
}
'use client'

import { ExpenseTracker } from "./expense-tracker";
import { CodeExpenseTracker } from "./code-expense-tracker"
import { AnimatePresence, motion } from "framer-motion";

export default function MobileProjectsPage() {
    return (
        <div className="flex flex-col items-center space-y-8 bg-gradient-to-b from-white to-orange-100 ">
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
            <motion.h3 
                initial={{x: -200, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                viewport={{ once:true, amount: 0.1}}
                transition={{ duration: 0.5, delay: 0.5}}
                className="font-inter mb-12">My first project,
                A simple expense tracker.
            </motion.h3>
            <div className="min-w-screen">
            <motion.div
                initial={{x: 200, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                viewport={{ once:true, amount: 0.1}}
                transition={{ duration: 0.5}}
                className="mt-8">
                    <ExpenseTracker />
            </motion.div>
            </div>
        </div>
    )
}
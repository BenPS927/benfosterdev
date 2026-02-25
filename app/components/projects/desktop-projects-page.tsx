'use client'
import { ExpenseTracker } from "./expense-tracker";
import { CodeExpenseTracker } from "./code-expense-tracker"
import { motion } from 'framer-motion';


export default function DesktoprojectsPage() {
    return ( 
        <div id="projects" className="mx-auto space-y-32 bg-gradient-to-b from-white to-purple-100 p-4">
            <div>
                <motion.h1 
                    initial={{x: -600, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{ once:true, amount: 0.1}}
                    transition={{ duration: 0.3}}
                    className="text-8xl font-bebas flex justify-center font-bold mb-16 text-purple-800">Projects</motion.h1>
                <motion.h2 
                    initial={{x: 600, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{ once:true, amount: 0.1}}
                    transition={{ duration: 0.3}}
                    className="text-normal lg:text-xl font-oswald flex justify-center text-stone-500 mb-8">
                        This is where you'll find the project I'm currently working on, and the ones I've compeleted</motion.h2>
            </div>
            <div className="flex p-4 mt-8 gap-8">
                <motion.div 
                    initial={{x: -300, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{ once:true, amount: 0.1}}
                    transition={{ duration: 0.3}}
                    className="w-1/3 p-4 font-inter leading-[3]">
                        <p>This is my expense tracker project. </p>
                        <p>It might seem simple, but this requires logic and interactivity, fundamental concepts for me to grasp.</p>
                        <p>Currently, there is only the 'add an item' button to bring up input forms.</p>
                        <p>the next step for me to do to learn this is learn how to crate forms, then i can move onto the logic.</p>
                </motion.div>
                <motion.div
                    initial={{y: 300, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{ once:true, amount: 0.1}}
                    transition={{ duration: 0.3}}
                    className="w-1/3">
                    <ExpenseTracker />
                </motion.div>
                <motion.div 
                    initial={{x: 300, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{ once:true, amount: 0.1}}
                    transition={{ duration: 0.3}}
                    className="w-1/3 flex justify-center items-center font-inter font-bold text-purple-700">
                        Code Coming Soon...
                 </motion.div>
            </div>
        </div>
    )
}

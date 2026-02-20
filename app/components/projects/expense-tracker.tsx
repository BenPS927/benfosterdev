'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"

export function ExpenseTracker() {
    const remaining = 10
    const totalSpent = 5
    const budget = 20
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const a = [1]
    console.log(a)
    
    return (
        <div className="relative">
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ x: 500 }}
                        animate={{ x: 0 }}
                        exit={{ x: 500 }}
                        transition={{ type: "tween", duration: 0.5 }}className="absolute top-18 right-3 lg:right-12 w-30 lg:w-60 space-y-2 lg:space-y-4">
                        <div className="bg-white p-1 lg:p-2 rounded-md font-sora text-purple-700 shadow-lg"> 
                            Item bought: 
                        </div>
                        <div className="bg-white p-1 lg:p-2 rounded-md font-sora text-purple-700 shadow-lg">
                            Cost: £ 
                        </div>
                    </motion.div>
                        )
                    }
            </AnimatePresence>
            <div className="w-full h-full p-1 lg:p-2 bg-white rounded-md">
                <div className="p-1 lg:p-2 space-y-2 lg:space-y-4">
                <div className="p-1 lg:p-2 mx-auto w-fit space-y-2 lg:space-y-4 text-center">
                    <h1 className="p-2 lg:p-4 font-sora text-2xl text-purple-700">Expense Tracker</h1>
                    <button className="p-2 lg:p-4 rounded-lg text-purple-500 bg-white
                     hover:bg-yellow-50 hover:scale-110 cursor-pointer transition shadow-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen === false && (<p>Add an item</p>)} 
                        {isMenuOpen && (
                            <p>Close</p>
                        )
                    }
                    </button>
                </div>
                <div className="flex p-1 lg:p-2 gap-2 lg:gap-4">
                    <div className="p-1 lg:p-2 space-y-2 lg:space-y-4 w-1/2">
                        <div className="p-2 lg:p-4 font-sora text-lg lg:text-xl text-purple-700 rounded-lg shadow-lg bg-white">Left to spend: {remaining} </div>
                        <div className="p-2 lg:p-4 font-sora text-lg lg:text-xl text-purple-700 rounded-md shadow-lg bg-white">Total Expenses: {totalSpent} </div>
                        <div className="p-2 lg:p-4 font-sora text-lg lg:text-xl text-purple-700 rounded-md shadow-lg bg-white">Budget: {budget} </div>
                    </div>
                    <div className="p-2 lg:p-4 text-center grid place-items-center w-1/2 border-yellow-300 font-sora text-purple-700 rounded-lg shadow-lg bg-white">
                        {isMenuOpen === false && (<p>your expenses will appear here</p>)}
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}




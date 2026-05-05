'use client';

import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { Input } from './tracker-logic';

type Expense = {
  id: string
  name: string
  price: number
}

export function ExpenseTracker() {
    
    const budget = 500
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [price,setPrice] = useState("0")
    const [name,setName] = useState("")
    const [expenses, setExpenses] = useState<Expense[]>([])
    const totalSpent = expenses.reduce((sum, expense) => sum + expense.price, 0)
    const remaining = (budget - totalSpent)
    
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (!name.trim() || isNaN(Number(price))) {
            return
            }
        const newExpense = { 
            id: crypto.randomUUID(),
            name:name.trim(),
            price: Number(price)
        }
        setExpenses([...expenses, newExpense])
        setName("")
        setPrice("")
        setIsMenuOpen(false)
        }
        
    return (
        <div className="relative h-full min-h-[200px]">            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 0 }}
                        transition={{ type: "tween", duration: 0.2 }}className=" absolute right-4 gap-2 flex 
                        flex-col items-center justify-center w-1/3 lg:w-1/2 top-12 right-8">
                            <Input price={price} setPrice={setPrice} name={name} setName={setName} 
                            handleSubmit={handleSubmit} expenses={expenses} />
                        <motion.button 
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 0 }}
                        type="submit"
                        form="expense-form"
                        className=" rounded-md w-1/2 font-inter text-[#FFA500] bg-white shadow-lg 
                        cursor-pointer ">
                            Submit
                        </motion.button>
                    </motion.div>
                )}
                       
            
            </AnimatePresence>
            <div className="w-full h-full p-1 rounded-2xl border border-neutral-900/15 bg-white">
                <div className="p-1 space-y-1">
                <div className="p-1 mx-auto w-fit space-y-1 text-center">
                    <h1 className="p-1 font-sora text-sm font-semibold text-[#FFA500]">Expense Tracker</h1>
                    <motion.button
                        
                        className="px-3 py-1 rounded-lg text-[#FFA500] hover:scale-110 cursor-pointer 
                        transition shadow bg-[#FFA500]/15"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        animate={{
                            x: isMenuOpen ? -100 : 0
                        }}
                        transition={{ duration: 0.2}}>
                        <p className="font-inter text-xs font-semibold">Add an item</p>
                       
                        
                    
                    </motion.button>
                </div>
                <div className="flex p-1 gap-2">
                    <div className="p-1 space-y-1 w-1/2">
                        <div className="px-2 py-1 font-inter font-semibold text-xs text-[#FFA500]
                         rounded-lg shadow bg-[#FFA500]/15">Left: {remaining}</div>
                        <div className="px-2 py-1 font-inter font-semibold text-xs text-[#FFA500]
                         rounded-md shadow bg-[#FFA500]/15">Spent: {totalSpent}</div>
                        <div className="px-2 py-1 font-inter font-semibold text-xs text-[#FFA500]
                         rounded-md shadow bg-[#FFA500]/15">Budget: {budget}</div>
                    </div>
                    <div className="p-1 grid w-1/2 font-inter text-[#FFA500] flex flex-col">
                        <AnimatePresence>
                            {expenses.map((entry) => (
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 100, opacity: 0 }}
                                key={entry.id}
                                className="w-full rounded-md px-2 py-1 font-inter font-semibold text-xs text-[#FFA500] shadow
                                 bg-[#FFA500]/15 h-fit">
                            <div>Purchase: {entry.name}</div>
                            <div>Cost: {entry.price}</div>
                            </motion.div>
                         ))}
                        </AnimatePresence>
                    </div>
               
                </div>
                </div>
            
        </div>
        </div>
    
    )
}




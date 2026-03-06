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
    const remaining = 10
    const totalSpent = 5
    const budget = 20
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [price,setPrice] = useState("0")
    const [name,setName] = useState("")
    const [expenses, setExpenses] = useState<Expense[]>([])
        
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
    
        // validation by checking if the entry is empty space, and if price numbers or not 
        if (!name.trim() || isNaN(Number(price))) {
            return
            }
        // create function for adding a new expense
        const newExpense = { 
            id: crypto.randomUUID(),
            name:name.trim(),
            price: Number(price)
        }
        // set the expense variable by adding old expenses variable to above made new
        setExpenses([...expenses, newExpense])
        
        // set the name and price fields back to empty
        setName("")
        setPrice("")
        }
    
    return (
        <div className="relative">
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 0 }}
                        transition={{ type: "tween", duration: 0.2 }}className="absolute top-18 right-3 lg:right-12 w-30 lg:w-60 space-y-2 lg:space-y-4">
                        <Input price={price} setPrice={setPrice} name={name} setName={setName} handleSubmit={handleSubmit} expenses={expenses} />
                    
                    </motion.div>
                        )
                    }
            </AnimatePresence>
            <div className="w-full h-full p-1 lg:p-2 bg-white rounded-md">
                <div className="p-1 lg:p-2 space-y-2 lg:space-y-4">
                <div className="p-1 lg:p-2 mx-auto w-fit space-y-2 lg:space-y-4 text-center">
                    <h1 className="p-2 lg:p-4 font-sora text-2xl text-orange-600">Expense Tracker</h1>
                    <motion.button
                        type="submit"
                        form="expense-form"
                        className="p-2 lg:p-4 rounded-lg text-orange-600 hover:scale-110 cursor-pointer transition shadow-lg bg-orange-100 font-bold"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        animate={{
                            x: isMenuOpen ? -100 : 0
                        }}
                        transition={{ duration: 0.2}}>
                        {isMenuOpen === false && (<p className="font-inter font-bold">Add an item</p>)} 
                        {isMenuOpen && (
                            <p className="font-inter font-bold">Submit</p>
                        )}
                        
                    
                    </motion.button>
                </div>
                <div className="flex p-1 lg:p-2 gap-2 lg:gap-2">
                    <div className="p-1 lg:p-2 space-y-2 lg:space-y-4 w-1/2">
                        <div className="p-2 lg:p-4 font-inter font-bold text-lg lg:text-xl text-orange-600 rounded-lg shadow-lg bg-orange-100">Left to spend: {remaining} </div>
                        <div className="p-2 lg:p-4 font-inter font-bold text-lg lg:text-xl text-orange-600 rounded-md shadow-lg bg-orange-100">Total Expenses: {totalSpent} </div>
                        <div className="p-2 lg:p-4 font-inter font-bold text-lg lg:text-xl text-orange-600 rounded-md shadow-lg bg-orange-100">Budget: {budget} </div>
                    </div>
                    <div className="p-2 lg:p-2 grid  w-1/2 font-inter text-orange-600 flex flex-col">
                        <AnimatePresence>
                            {expenses.map((entry) => (
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 100, opacity: 0 }}
                                key={entry.id}
                                className="w-full rounded-md p-2 font-inter font-bold text-orange-600 shadow-lg bg-orange-100 w-fit h-fit">
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




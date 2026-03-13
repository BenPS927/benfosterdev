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

        setIsMenuOpen(false)
        }
        
    
    return (
        <div className="relative ">
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 0 }}
                        transition={{ type: "tween", duration: 0.2 }}className=" absolute right-4 gap-2 flex flex-col items-center justify-center w-1/3 lg:w-1/2 top-12 right-8">
                            <Input price={price} setPrice={setPrice} name={name} setName={setName} handleSubmit={handleSubmit} expenses={expenses} />
                        <motion.button 
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 0 }}
                        type="submit"
                        form="expense-form"
                        className=" rounded-md w-1/2 font-inter text-orange-600 bg-white shadow-lg cursor-pointer ">
                            Submit
                        </motion.button>
                    </motion.div>
                )}
                       
            
            </AnimatePresence>
            <div className="w-full h-full p-1 lg:p-2 bg-white rounded-md">
                <div className="p-1 lg:p-2 space-y-2 lg:space-y-4">
                <div className="p-1 lg:p-2 mx-auto w-fit space-y-2 lg:space-y-4 text-center">
                    <h1 className="p-2 lg:p-4 font-sora text-2xl text-orange-600">Expense Tracker</h1>
                    <motion.button
                        
                        className="p-2 lg:p-4 rounded-lg text-orange-600 hover:scale-110 cursor-pointer transition shadow-lg bg-orange-100 font-bold"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        animate={{
                            x: isMenuOpen ? -100 : 0
                        }}
                        transition={{ duration: 0.2}}>
                        <p className="font-inter font-bold">Add an item</p>
                       
                        
                    
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




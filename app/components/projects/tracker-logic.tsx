'use client';

import { type FormEvent } from 'react';

type Expense = {
  id: string
  name: string
  price: number
}

type InputProps = {
  price: string
  setPrice: (value: string) => void
  name: string
  setName: (value: string) => void
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
  expenses: Expense[]
}




export function Input( { price ,setPrice,name,setName,handleSubmit,expenses }: InputProps) {
    return (
        <div>
            <form id="expense-form" onSubmit={handleSubmit} className="flex flex-col p-4 space-y-4">
            <input 
                className="bg-white p-1 lg:p-2 rounded-md font-inter text-orange-600 shadow-lg"
                type="number"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
            />
             <input
                className="bg-white p-1 lg:p-2 rounded-md font-inter text-orange-600 shadow-lg"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
           
            
            </form>
        </div>
    )
};


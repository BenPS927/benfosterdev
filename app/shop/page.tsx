'use client'
import { motion, AnimatePresence }  from 'framer-motion';
import { div } from 'framer-motion/m';
import { useState, useEffect } from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AddIcon from '@mui/icons-material/Add';
import { Add } from '@mui/icons-material';

type Product = {
    thumbnail?: string
    name?: string
    title?: string
    price?: number
}

export default function BFShop(){

    const [products, setProducts] = useState<Product[]>([])
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => { //useffect's job is to run side effects that happen outside of normal rendering processes
        async function loadProducts() { //async allows the function to use await. loadProducts decalres a new function
            const response = await fetch("/api/products") //this variable will hold the server response. await means the function pauses until the request finishes
                                                            // fetch makes the request
            const data = await response.json()      //this creates a variable that will hold the parsed result. await makes it pause until the conversion finishes
                                                    //.json takes the response body and converts it into JS data
            setProducts(data)                   //here data variable is stored in setProducts, so therefor updates the products array
            }

            loadProducts()
        }, [])

    return (
        <div className="min-h-screen flex flex-col items-center p-2 lg:space-y-16">
            <div className=" min-w-screen flex flex-col justify-center items-center p-8 lg:p-16 space-y-16">
                <h1 className="font-bebas text-4xl lg:text-9xl  text-center p-2 lg:p-8 border-b border-orange-500">BFShop</h1>
                    <h2 className="font-inter text-lg lg:text-2xl text-left md:text-center lg:text-center p-2 lg:p-8">Welcome to BFShop! This is my first full stack project. Currently under construction. When it is complete
                        , you'll be able to place 'orders'. This project will greatly test my skill with state, inputs, interactivity and let me learn the full stack framework, including workflow automation.
                    </h2>
                
            </div>
            <div className="hidden md:hidden lg:block">
            <div className="flex fixed right-0 top-20 z-20 bg-gray-100 translate-x-4/5 hover:translate-x-0 transition-transform duration-300">
                <div className=" w-1/5 p-4 flex items-center justify-center p-8">
                    <ShoppingBasketIcon sx={{ 
                        color: "orange",
                        fontSize: 32
                     }}/>
                </div>
                <div className=" w-4/5 p-4 flex flex-col items-center p-8">
                    <p>Your Items</p>
                </div>
                </div>
            </div>
            <div onClick={() => setIsOpen(!isOpen)}
                className={`flex lg:hidden fixed right-0 top-20 z-100 bg-gray-100 rounded-md ${isOpen ? "translate-x-0" : "translate-x-4/5"} transition-transform duration-300`}>
                <div className=" w-1/5 p-4 flex items-center justify-center p-8">
                    <ShoppingBasketIcon sx={{ 
                        color: "orange",
                        fontSize: 32
                     }}/>
                </div>
                <div className=" w-4/5 p-4 flex flex-col items-center p-8">
                    <p>Your Items</p>
                </div>
            </div>
            <p className="font-inter text-2xl mb-8">Have a browse!</p>
            <div className="min-w-screen grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {products.map((product, index) => (
                <div className=" group" key={index}>
                    <div className= "relative  flex flex-col justify-center items-center h-48 md:h-48 lg:h-64 transition-transform duration-300 group-hover:-translate-x-12">
                        <div className="absolute flex flex-col items-center justify-center h-2/3 w-2/3 z-20 text-sm md:text-lg lg:text-lg">
                            <img src ={product.thumbnail ?? "/bg3.jpg"} alt="Item Image" />
                            <p className="font-inter">{product.title ?? "Item Name"}</p>
                            <p className="block lg:hidden font-inter"> {product.price}</p>
                            
                        </div>
                    <div className="hidden lg:block absolute z-10 transition-all duration-300 opacity-0 group-hover:translate-x-38 group-hover:opacity-100  w-1/3 space-y-2">
                       
                        <p className="font-inter text-sm">{product.price}</p>
                        <p className="font-inter text-sm">Details</p>
                        <div>
                            <form id="expense-form">
                                <input 
                                    className="w-1/2 border"
                                    type="number" />
                            </form>
                       
                        </div>
                        <div className="cursor-pointer transition-transform hover:scale-120 ">
                        <AddIcon  sx={{ 
                                    color: "orange",
                                    fontSize: 32
                                    }}/>
                        </div>
                    </div>
                </div>
                </div>
                ))}
                
            </div>
        </div>
            
            )
    }
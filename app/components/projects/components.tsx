import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Link from 'next/link'

export function ETDesc() {
    return (
        
        <div className="p-4 font-inter leading-[2]">
            <p>This is my expense tracker project. </p>
            <p>This was my first project after building this site.</p>
            <p>It includes a form submission, click and submission handlers, animations and calculation logic.</p>
            <p>This was the perfect project for introducing me to the more complex side of React JS involving interactivity and function.</p>
        </div>

    )
}

export function ETCode() {
    return (
        <Link href="/trackercode" className=" font-inter text-orange-600 bg-white p-16 w-64 h-64 flex flex-col items-center justify-center rounded-md shadow-lg">
           <p className="font-inter font-bold text-orange-600 mb-4">Code and notes</p>
           <p className="font-inter text-orange-600">Click here to see the code for this project and some notes on how it works</p>
        </Link>
    )
}

export function ShopDesc() {
    return (
        
        <div className="p-4 font-inter leading-[2]">
            <p>This is BFshop. </p>
            <p>This will be my first full-stack project, and an entire business system. </p>
            <p>There will be two interfaces - the customer interface, where orders can be placed, with an AI chatbot for making queries.</p>
            <p> And the merchant interface, where orders will be logged and stock will be inventoried. Automated workflows utilising AI will work
                with the backend to make this a fully functioning system.
            </p>
        </div>

    )
}

export function ShopLink(){
    return(
        
        <Link href="/shop" className="relative w-2/3 h-2/3 p-2 flex items-center justify-center rounded-md shadow-lg bg-white cursor-pointer hover:scale-110 transition">
            <div className="absolute z-20 font-inter text-6xl font-bold text-orange-800">BFShop</div>
            <div className="absolute z-10">
            <ShoppingBasketIcon sx={{ 
                        color: "orange",
                        fontSize: 256
                     }}/>
            </div>
        </Link>
        
    )
}
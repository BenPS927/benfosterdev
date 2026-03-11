import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Link from 'next/link'

export function ETDesc() {
    return (
        
        <div className="p-4 font-inter leading-[2]">
            <p>This is my expense tracker project. </p>
            <p>It might seem simple, but it requires logic and interactivity, fundamental concepts for me to grasp.</p>
            <p>So far I've only done the add an item function, so I need to now code into that a form submission.</p>
            <p>I'll then have to connect that with data and logic to create a list of items and calculate the figures on the left.</p>
        </div>

    )
}

export function ETCode() {
    return (
        <div className="font-inter font-bold text-orange-600">
            Code Coming Soon...
        </div>
    )
}

export function ShopDesc() {
    return (
        
        <div className="p-4 font-inter leading-[2]">
            <p>This is my shop project. </p>
            <p>This will be an online store interface, where you can place 'orders'. It might seem simple,
            but this invovles a lot going on behind the scenes. It will also include a backend, and workflow
            automations, so it will be my first full stack project</p>
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
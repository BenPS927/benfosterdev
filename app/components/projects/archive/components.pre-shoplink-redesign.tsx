import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Link from 'next/link'

export function ShopLinkOriginal(){
    return(
        <Link href="https://bfshop.benfosterdev.com" className=" relative w-2/3 h-2/3 p-2 flex items-center justify-center rounded-md shadow-lg md:bg-orange-100 lg:bg-white cursor-pointer hover:scale-110 transition">
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

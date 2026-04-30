'use client'
import { motion } from 'framer-motion';
import { BlogLink } from './bloglink';

export function Divider1() {
    
    return (
        <div className="bg-gradient-to-b from-orange-100 to-white h-[75vh] p-2 lg:p-16 w-full overflow-hidden border">
           
            <BlogLink />
           
        </div>
    );
}
            


export function Divider2() {
    return (
        <div className= "bg-gradient-to-b from-gray-200 to-white h-[25vh]">
           
        </div>
    );
}

export function Divider3() {
    return (
        <div className="bg-gradient-to-b from-gray-200 to-orange-100 h-[25vh]">
        
        </div>
    );
}
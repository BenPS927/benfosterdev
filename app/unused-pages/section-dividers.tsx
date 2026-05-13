'use client'
import { motion } from 'framer-motion';
import { BlogLink } from './bloglink';

export function Divider1() {
    
    return (
        <div className="bg-[linear-gradient(180deg,#ffffff_0%,#fafafa_52%,#f2f2f2_100%)] h-[75vh] p-2 lg:p-16 w-full overflow-hidden">
           
            <BlogLink />
           
        </div>
    );
}
            


export function Divider2() {
    return (
        <div className="bg-[linear-gradient(180deg,#ececec_0%,#f5f5f5_100%)] h-[25vh]">
           
        </div>
    );
}

export function Divider3() {
    return (
        <div className="bg-[linear-gradient(180deg,#ececec_0%,#f5f5f5_100%)] h-[25vh]">
        
        </div>
    );
}
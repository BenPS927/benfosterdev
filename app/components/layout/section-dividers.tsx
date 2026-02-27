'use client'
import Link from 'next/link'
import { motion } from 'framer-motion';


export function Divider1() {
    
    return (
        <div className="bg-gradient-to-b from-purple-100 to-white h-[75vh] p-2 lg:p-16 w-full overflow-hidden">
           
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 1 }}
                className="flex flex-col lg:flex-row justify-center items-center p-2 lg:p-8 space-y-8 mt-24">
                <p className="font-oswald text-3xl lg:text-6xl w-full lg:w-1/3 bg-gradient-to-b from-purple-500 to-orange-500 bg-clip-text text-transparent ">I also write blogs...</p>
                
                <div className="w-full lg:w-auto flex justify-center">
                    <motion.div 
                        animate={{ x: [-50, 50] }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                        className="rounded-md"
                        style={{ willChange: "transform" }}>
                           <Link href="/blog" className="flex justify-center">
                              <div className="relative h-24 w-24 lg:h-48 lg:w-48">
                                <img
                                  src="/bg2.jpg"
                                  alt="background"
                                  className="h-full w-full object-cover rounded-md opacity-40"
                                />
                                <p className="absolute inset-0 flex items-center justify-center font-inter text-purple-700 font-bold text-2xl">
                                  BFBlog
                                </p>
                              </div>
                           </Link>
                    </motion.div>
                </div>
                
            </motion.div>
            
            
          
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
        <div className="bg-gradient-to-b from-gray-200 to-blue-100 h-[25vh]">
        
        </div>
    );
}
// no state, just receives props and renders
//destructured props where values are pulled out of props object
import { motion } from 'framer-motion';

export function AboutMeBoxDesktop (props) {

    return (
        <motion.div 
            initial={{ x: props.startX }}
            whileInview={{x: props.inView}}
            transition={{ duration: props.duration, delay: props.delay }}
            viewport={{amount: props.viewPort}}
            className="mt-4 rounded-xl border border-neutral-900/10 bg-white/90 p-6 text-gray-700 shadow-sm transition duration-200 hover:z-100 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-md lg:p-7">
            {props.text}
            {props.images}
            
        </motion.div>
    )
    
}



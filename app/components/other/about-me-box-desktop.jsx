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
            className="bg-white rounded-md p-6 mt-4 hover:scale-110 transition hover:z-100 shadow-xl">
            {props.text}
            
        </motion.div>
    )
    
}
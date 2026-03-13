import { motion } from 'framer-motion';
import Link from 'next/link';

type MenuProps = {
  link: string;
  text: string;
  startOpacity: number;
  animateOpacity: number;
  duration: number;
  delay: number;
    onItemClick?: () => void;
};


export function Menu({
    link,
    text,
    startOpacity,
    animateOpacity,
    duration,
    delay,
    onItemClick,
}: MenuProps) {
    return(
        <Link href = {link} onClick={onItemClick}>
        <motion.div
            initial = {{ opacity: startOpacity }}
            animate = {{ opacity: animateOpacity }}
            transition={{ duration: duration, delay: delay }}
            className="font-oswald text-sm lg:text-xl text-stone-500 hover:scale-110 transition-transform cursor-pointer duration-300 hover:text-orange-500">
            
                {text}
            
        </motion.div>
        </Link>
    )
}
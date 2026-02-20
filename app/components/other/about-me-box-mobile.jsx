import { motion } from 'framer-motion';

export function AboutMeBoxMobile({ text, images, startX, viewport, duration, delay, inView, imgStartX, imgInView, imgviewPort, imgdelay, imgDuration }) {
    return (
        <div className="flex w-full gap-4">
            <div className="p-2 w-2/3 font-geist-sans text-orange-700">
                <motion.div
                initial={{ x: startX }}
                whileInView={{x: inView}}
                transition={{ duration: duration, delay: delay }}
                viewport={{amount: viewport}}
                className="p-2 rounded-lg shadow-lg bg-white">{text}</motion.div>
            </div>
            <div className="w-1/3 space-y-4 mr-4">
                {images.map((img, index) => (
                    <motion.img 
                    key={index} 
                    src={img} 
                    alt=""
                    initial={{ x: imgStartX }}
                    whileInView={{x: imgInView}}
                    transition={{ duration: imgDuration, delay: imgdelay }}
                    viewport={{amount: imgviewPort}}
                    className="w-32 h-24 rounded-md shadow-md" />
                ))}
            </div>
        </div>
        

    )
}
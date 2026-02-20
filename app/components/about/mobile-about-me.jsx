import { AboutMeBoxMobile } from "./mobile-box-about-me"
import { aboutMeMobileData } from "./data/about-me-mobile"
import { motion } from 'framer-motion';

export default function AboutMeMobile() {


    return (
        <div className="p-2 mt-4 bg-gradient-to-b from-white to-gray-200">
            <h1 className="w-full p-4 flex justify-center mb-8 font-oswald text-2xl text-orange-500">A bit about me...</h1>
            <div>
                <div className="text-sm mb-8">
                    <div>
                        {aboutMeMobileData.map((box) => (
                            <div key={box.id}>
                                <AboutMeBoxMobile 
                                text={box.text} 
                                images={box.images} 
                                startX={box.startX}
                                viewport={box.viewPort}
                                duration={box.duration}
                                delay={box.delay}
                                inView={box.inView}
                                imgStartX={box.imgStartX}
                                imgInView={box.imgInView}
                                imgviewPort={box.imgviewPort}
                                imgdelay={box.imgdelay}
                                imgDuration={box.imgduration}
                                />
                                
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
            <div className="w-full p-4 flex justify-center text-xl ">Have a look at my projects below!</div>
        </div>
    )
}

import { AboutMeBoxMobile } from "./mobile-box-about-me"
import { aboutMeMobileData } from "./data/about-me-mobile"


export default function AboutMeMobile() {


    return (
        <div className="bg-[linear-gradient(180deg,#f2f2f2_0%,#f8f8f8_100%)] p-2">
            <h1 className="w-full p-4 flex justify-center mb-8 font-oswald text-2xl text-[#FFA500]">A bit about me...</h1>
            <div>
                <div className="text-sm mb-8 font-inter">
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
            
        </div>
    )
}

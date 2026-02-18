//this file has lifted state because the state is needed in multiple child components
//props passed from this file to child

'use client'
import { useState } from 'react'
import { AboutMeBox } from "../about-me-box";

export function AboutMePage() {
    const [hoveredBox, setHoveredBox] = useState<string | null>(null)

    return (
        <div className="relative w-full h-[150vh] bg-green-50 rounded-md">
             <div className="absolute top-[10px] lg:top-[50px] left-[40px] lg:left-[100px] z-50
                            p-5
                            hover:z-[100] hover:scale-150 transition-all
                            text-4xl font-bebas">
                    A bit about me...
            </div>
            <AboutMeBox top="150px" left="100px" zIndex={50} text="I spent my early 20s traveling and making memories. Realizing I needed to get serious, 
                    I started learning IT from the ground up. After a year, I landed a job 
                    as IT manager at Gibson Watts, where I am now. Now, I'm learning 
                    front-end development on the side."
                    onMouseOver={() => setHoveredBox('box1')}  
                    onMouseOut={() => setHoveredBox(null)}
                    onClick={() => setHoveredBox((prev) => (prev === 'box1' ? null : 'box1'))} />
                  
            <AboutMeBox top="200px" left="300px" zIndex={40} text="I started by learning how tech works. Binary. Hardware. The internet.
                    Then I moved onto studying for qualifications. I wrote my own textbooks to
                    help me learn. I built countless networkign simulations to understand dat
                    transfer. Did countless practice exams."
                    onMouseEnter={() => setHoveredBox('box2')}  
                    onMouseLeave={() => setHoveredBox(null)} />
                 
            <AboutMeBox top="250px" left="500px" zIndex="30" text="In the summer of 2025, I bought some networking hardware and 
                  configured it all to provide me with an isolated home network, using a 
                  48 port managed switch and Cisco enterprise grade router. Networking was
                  my first love in IT, as I love building and designing."
                  onMouseEnter={() => setHoveredBox('box3')}  
                  onMouseLeave={() => setHoveredBox(null)} />

            <AboutMeBox top="300px" left="700px" zIndex="20" text=" In October I got my job at Gibson Watts. I learned to 
                  understand real world IT; user experience, buggy interfaces,
                  device management, company security, using tools like Azure, 
                  Entra and Intune, and GoDaddy, Cloudflare 
                  and Wordpress for website management."
                  onMouseEnter={() => setHoveredBox('box4')}  
                  onMouseLeave={() => setHoveredBox(null)} />

            <AboutMeBox top="350px" left="900px" zIndex="10" text="I've worked with marketers to build CRM automations, made countless 
               projects in Power Automate, built python code for SEO purposes. Now, 
               it seems like the right thing to do is get into software development,
               and I'm enjoying it!" 
               onMouseEnter={() => setHoveredBox('box5')}  
               onMouseLeave={() => setHoveredBox(null)} />

            {hoveredBox === 'box1' && (
                <div className="absolute top-[50px] right-[100px] z-[100]">
                <img
                    src="/greece.png"
                    alt="Memorable travel moments from early twenties in Greece, representing formative years of exploration and adventure"
                    className="w-[420px] h-auto rounded-md"
                />
                </div>
            )}
        </div>

    )
}
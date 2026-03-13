'use client';

import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function HomePageDesktop() {
  return (
    <div id="home" className="relative mx-auto ml-0 lg:ml-2 mr-0 lg:mr-2 mt-0 lg:mt-4 bg-gradient-to-b from-white to-gray-200">
    
      <main className="flex flex-col lg:flex-row p-0 lg:p-4 gap-4 rounded-b-md">
        <section className="p-0 lg:p-4 flex-1 min-w-0">
          <h1 className="px-4 lg:p-4 text-4xl md:text-6xl lg:text-8xl font-bebas mt-8 lg:mt-32 font-bold tracking-wide drop-shadow-md">Building AI Enhanced Business Systems</h1>
          <p className="px-4 lg:p-4 mt-4 lg:mt-4 text-lg lg:text-xl text-stone-500 font-oswald drop-shadow-md">Hi, I'm Ben, a web developer and IT manager based in Bristol </p>
          <p className="px-4 lg:p-4 mt-4 lg:mt-4 text-lg lg:text-xl text-stone-500 font-oswald drop-shadow-md"> By day I manage IT infrastructure. </p>
          <p className="px-4 lg:p-4 mt-4 lg:mt-4 text-lg lg:text-xl text-stone-500 font-oswald drop-shadow-md"> By night I build modern web systems that integrate automation and AIB
           <br />
           <br />
           I'm not just interested in flashy designs - I'm here to build systems and solutions that integrate AI and automation. I'm currently working on a full stack E-commerce store. Scroll down to explore the project.</p>
           <div className="h-12 w-16 lg:h-32 lg:w-32"></div>

          <div className="flex flex-wrap p-4 mt-24 lg:mt-28 gap-4 lg:gap-8 items-center scale-50 lg:scale-100 origin-left">
            <p className="p-4 mt-4 text-stone-500 font-oswald font-bold">Passionate about <br /> tech</p>
            <div className="h-24 border-l-2 border-orange-300"></div>
            <div className="w-16 h-16 lg:w-24 lg:h-24 flex-shrink-0 rounded-full bg-white shadow-lg border-1 border-gray-200 flex items-center
                 justify-center hover:scale-110 cursor-pointer transition">
              <a 
                href="https://www.linkedin.com/in/ben-foster-94394135a/"
                target="_blank"
                rel="noopener noreferrer">
                  <LinkedInIcon sx={{ 
                    fontSize: 60, 
                    color: '#0A66C2', '&:hover': { color: '#004182' }, 
                    cursor: 'pointer', 
                    transition: 'color 0.3s' }} />
              </a>
            </div>
            <div className="w-16 h-16 lg:w-24 lg:h-24 flex-shrink-0 rounded-full bg-white shadow-lg border-1 border-gray-200 flex items-center
                 justify-center hover:scale-110 cursor-pointer transition">
                  <a 
                    href="https://github.com/BenPS927"
                    target="_blank"
                    rel="noopener noreferrer">
                      <GitHubIcon sx={{ 
                        fontSize: 60, 
                        color: '#181717', '&:hover': { color: '#e5e0ed' }, 
                        cursor: 'pointer', 
                        transition: 'color 0.3s' }} />
                    </a>
            </div>
          </div>
        </section>
        <section className="order-first lg:order-last flex-shrink-0 w-fit p-2 lg:p-8 mt-8 lg:mt-4 mr-8">
            <Box 
              component="img"
              src="/profilephoto2.png"
              alt="Ben Foster - React Developer and AI Chatbot Specialist"
              sx={{ 
                width: { xs: '50vw', lg: 500 }, 
                height: { xs: '50vw', lg: 500 }, 
                borderRadius: '50%', 
                borderColor: 'white'
              }}/>
        </section>
        <div className="absolute bottom-20 left-10 w-48 h-48 border border-orange-200 -z-10 opacity-100" />
      </main>
    </div>
  )
}
//ui page using tailwind alongside MUI components - why use both? can the MUI component be done with tailwind? could it just be im tag?

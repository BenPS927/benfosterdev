
'use client';

import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from 'react';


export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="mx-auto ml-0 lg:ml-2 mr-0 lg:mr-2 mt-0 lg:mt-4 bg-gray-20">
    
      <main className="flex flex-col lg:flex-row p-0 lg:p-4 gap-4 rounded-b-md">
        <div className="p-0 lg:p-4 flex-1 min-w-0">
          <h1 className="px-4 lg:p-4 text-4xl md:text-6xl lg:text-8xl font-bebas mt-0 lg:mt-16 font-bold tracking-wide drop-shadow-md">IT Professional</h1>
          <p className="px-4 lg:p-4 mt-2 lg:mt-4 text-lg lg:text-xl text-stone-500 font-oswald drop-shadow-md">Hi, I'm Ben, a passionate IT professional based in Bristol, England.<br />
           Managing IT systems by day, building projects by night. </p>

          <div className="flex flex-wrap p-4 mt-8 lg:mt-28 gap-4 lg:gap-8 items-center scale-50 lg:scale-100 origin-left">
            <p className="p-4 mt-4 text-stone-500 font-oswald font-bold">Passionate about <br /> tech</p>
            <div className="h-24 border-l-2 border-gray-300"></div>
            <div className="w-16 h-16 lg:w-24 lg:h-24 flex-shrink-0 rounded-full bg-white shadow-lg border-1 border-gray-200 flex items-center
                 justify-center hover:scale-110 cursor-pointer transition">
              <LinkedInIcon sx={{ fontSize: 60, color: '#0A66C2', '&:hover': { color: '#004182' }, cursor: 'pointer', transition: 'color 0.3s' }} />
            </div>
            <div className="w-16 h-16 lg:w-24 lg:h-24 flex-shrink-0 rounded-full bg-white shadow-lg border-1 border-gray-200 flex items-center
                 justify-center hover:scale-110 cursor-pointer transition">
              <GitHubIcon sx={{ fontSize: 60, color: '#181717', '&:hover': { color: '#e5e0ed' }, cursor: 'pointer', transition: 'color 0.3s' }} />
            </div>
          </div>
        </div>
        <div className="order-first lg:order-last flex-shrink-0 w-fit p-2 lg:p-8 mr-8">
            <Box 
              component="img"
              src="/profilephoto2.png"
              alt="Ben Foster"
              sx={{ 
                width: { xs: '50vw', lg: 500 }, 
                height: { xs: '50vw', lg: 500 }, 
                borderRadius: '50%', 
                borderColor: 'white' 
              }}/>
        </div>
      </main>
    </div>
  )
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { Menu, LinkedIn, GitHub } from '@mui/icons-material';
import profilephoto2 from '../../assets/profilephoto2.png';

export function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="mx-auto ml-2 mr-2 mt-4 space-y-4 bg-gray-50 rounded-md">
      <header className="flex gap-320">
        <div className="p-4 ml-6">signature</div>
        <Menu 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          sx={{ 
            fontSize: 60,
            transition: 'all 0.3s',
            '&:hover': {
            color: 'gray',
            transform: 'scale(1.1)',
            cursor: 'pointer'
              }
            }} />
        </header> {isMenuOpen && (
          <div className=" absolute top-20 right-8 bg-white border-2 rounded-lg p-4 shadow-lg z-50">
          <a href="#" className="block p-2 hover:bg-gray-100">Home</a>
          <a href="#" className="block p-2 hover:bg-gray-100">About</a>
          <a href="#" className="block p-2 hover:bg-gray-100">Contact</a>
        </div>
)}
      <main className="flex p-4 gap-4">
        <div className="p-4 flex-1 min-w-0">
          <h1 className="p-4 text-8xl font-bebas mt-24 font-bold tracking-wide">IT professional</h1>
          <p className="p-4 mt-4 text-xl text-stone-500 font-oswald">Hi, I'm Ben, a passionate IT professional based in Bristol, England.<br />
           Managing IT systems by day, building projects by night. </p>
          <div className="flex p-4 mt-28 gap-8">
            <p className="p-4 mt-4 text-stone-500 font-oswald font-bold">Passionate about <br /> tech</p>
            <div className="h-24 border-l-2 border-gray-300"></div>
            <div className="w-24 h-24 rounded-full bg-white shadow-lg border-1 border-gray-200 flex items-center justify-center hover:scale-110 cursor-pointer transition">
              <LinkedIn sx={{ fontSize: 60, color: '#0A66C2', '&:hover': { color: '#004182' }, cursor: 'pointer', transition: 'color 0.3s' }} />
            </div>
            <div className="w-24 h-24 rounded-full bg-white shadow-lg border-1 border-gray-200 flex items-center justify-center hover:scale-110 cursor-pointer transition">
              <GitHub sx={{ fontSize: 60, color: '#181717', '&:hover': { color: '#e5e0ed' }, cursor: 'pointer', transition: 'color 0.3s' }} />
            </div>
            <div className="w-24 h-24 rounded-full bg-white shadow-lg border-1 border-gray-200"></div>
           <div className="w-24 h-24 rounded-full bg-white shadow-lg border-1 border-gray-200"></div>
          </div>
        </div>
        <div className="flex-shrink-0 w-fit p-8 mr-8">
            <Image
              src={profilephoto2}
              alt="Ben Foster"
              width={500}
              height={500}
              className="rounded-full border border-white"
              priority
            />
        </div>
      </main>
    </div>
  )
}

'use client';

import MenuIcon from '@mui/icons-material/Menu'; 
import { useState } from 'react';
 
 export function Header () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
 
 <header className="sticky top-0 z-10 bg-gray-100 lg:bg-gray-50 flex justify-between items-center rounded-t-md">
        <div className="p-4 ml-6">signature</div>
        <MenuIcon 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mr-6"
          sx={{ 
            fontSize: 60,
            transition: 'all 0.3s',
            '&:hover': {
            color: 'black',
            transform: 'scale(1.1)',
            cursor: 'pointer'
              }
            }} />
         {isMenuOpen && (
          <div className="absolute top-16 right-8 bg-white border-2 rounded-lg p-4 shadow-lg z-50">
          <a href="#" className="block p-2 hover:bg-gray-100">Home</a>
          <a href="#" className="block p-2 hover:bg-gray-100">About</a>
          <a href="#" className="block p-2 hover:bg-gray-100">Contact</a>
        </div>
         )}
        </header> 
        
)}
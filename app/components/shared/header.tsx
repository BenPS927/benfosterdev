'use client';

import MenuIcon from '@mui/icons-material/Menu'; 
import { useState } from 'react';
import { AnimatePresence } from "framer-motion"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {MenuItems } from './array'
import { Menu } from './menu'
 
 export function Header() {

    const [isMenuOpen,setIsMenuOpen] = useState(false)   //creates state, stored in a variable, for if menu is open or closed
    const pathname = usePathname()   //react inbuilt function to evaluate what page user is on 
    const gap = 0.06
    const isBlockedPage = pathname === '/blog' || pathname === '/shop' || pathname === 'how-to-use-ai-to-enhance-your-skills';
    const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      event.preventDefault();
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    };

     return (
     
        <header className="relative sticky top-0 z-10 bg-gray-100 lg:bg-gray-100 flex justify-between items-center rounded-t-md z-100 shadow-md">
            {pathname === '/' ? (
              <a href="#home" onClick={(event) => handleNavClick(event, 'home')}>
              <img src="/logo.png" alt="Logo" className="w-16 lg:w-32 h-6 lg:h-12 ml-6 lg:ml-12" />
            </a> ) : (
            <Link href="/">
              <img src="/logo.png" alt="Logo" className="w-16 lg:w-32 h-6 lg:h-12 ml-6 lg:ml-12" />
            </Link> )
            }
            {/* Right-side icon and dropdown are anchored together */}
            {!pathname.startsWith('/blog') && !pathname.startsWith('/shop') && (
              <div className="relative mr-6">
                <MenuIcon 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  sx={{ 
                    fontSize: { xs: 42, sm: 42, md: 60 },
                    color: '#FFA500',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    '&:hover': {
                      color: '#EA580C',
                      transform: 'scale(1.1)',
                    } 
                  }} />

                <AnimatePresence>
                  {isMenuOpen && !isBlockedPage && (
                    <div className="absolute top-full right-0 mt-2 z-[9999] flex flex-col gap-2 rounded-md bg-gray-100/95 p-2 shadow-md lg:top-1/2 lg:right-full lg:mr-3 lg:mt-0 lg:-translate-y-1/2 lg:flex-row lg:gap-4 lg:bg-transparent lg:p-0 lg:shadow-none">
                      {MenuItems.map((item, index) => {
                        const closeDelay = index * gap;
                        const openDelay = (MenuItems.length - 1 - index) * (gap*2); 

                        return (
                        <Menu 
                          key={item.id}
                          link={item.link}
                          text={item.text}
                          startOpacity={item.startOpacity}
                          animateOpacity={item.animateOpacity}
                          duration={item.duration}
                          openDelay={openDelay}
                          closeDelay={closeDelay}
                        />
                      );})}
                    </div>
                  )}
                </AnimatePresence>
              </div>
            )}
                                
            
        </header>
        )
    }
  